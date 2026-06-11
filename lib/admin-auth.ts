import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export const ADMIN_SESSION_COOKIE = "portfolio_admin_session";

const SESSION_TTL_SECONDS = 60 * 60 * 12;

type SessionPayload = {
  username: string;
  expiresAt: number;
};

function toBase64Url(value: string) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function fromBase64Url(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET ?? "change-me-local-admin-session-secret";
}

function hashValue(value: string) {
  return createHash("sha256").update(value, "utf8").digest();
}

function safeEqual(left: string, right: string) {
  return timingSafeEqual(hashValue(left), hashValue(right));
}

function signPayload(encodedPayload: string) {
  return createHmac("sha256", getSessionSecret())
    .update(encodedPayload, "utf8")
    .digest("base64url");
}

function getAdminCredentials() {
  const username = process.env.ADMIN_USERNAME ?? "admin";
  const password = process.env.ADMIN_PASSWORD ?? "change-me";

  return {
    username,
    password,
    usingFallbackCredentials:
      !process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD,
  };
}

export function shouldShowFallbackCredentialHint() {
  return process.env.NODE_ENV !== "production" && getAdminCredentials().usingFallbackCredentials;
}

export function getFallbackCredentialHint() {
  const { username, password } = getAdminCredentials();
  return { username, password };
}

export function verifyAdminCredentials(username: string, password: string) {
  const configured = getAdminCredentials();
  return (
    safeEqual(username.trim(), configured.username) &&
    safeEqual(password, configured.password)
  );
}

export function createAdminSessionToken(username: string) {
  const payload: SessionPayload = {
    username,
    expiresAt: Date.now() + SESSION_TTL_SECONDS * 1000,
  };
  const encodedPayload = toBase64Url(JSON.stringify(payload));
  const signature = signPayload(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

export function verifyAdminSessionToken(token?: string | null) {
  if (!token) {
    return null;
  }

  const [encodedPayload, providedSignature] = token.split(".");

  if (!encodedPayload || !providedSignature) {
    return null;
  }

  const expectedSignature = signPayload(encodedPayload);

  if (!safeEqual(providedSignature, expectedSignature)) {
    return null;
  }

  try {
    const payload = JSON.parse(fromBase64Url(encodedPayload)) as SessionPayload;

    if (
      typeof payload.username !== "string" ||
      typeof payload.expiresAt !== "number" ||
      payload.expiresAt < Date.now()
    ) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function getAdminSessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "strict" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  };
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  return Boolean(verifyAdminSessionToken(token));
}

export function isAdminRequestAuthenticated(request: NextRequest) {
  return Boolean(verifyAdminSessionToken(request.cookies.get(ADMIN_SESSION_COOKIE)?.value));
}
