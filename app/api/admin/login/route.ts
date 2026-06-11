import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  getAdminSessionCookieOptions,
  verifyAdminCredentials,
} from "@/lib/admin-auth";

function isJsonRequest(request: Request) {
  return request.headers.get("content-type")?.includes("application/json");
}

export async function POST(request: Request) {
  let username = "";
  let password = "";

  if (isJsonRequest(request)) {
    const body = (await request.json()) as {
      username?: string;
      password?: string;
    };
    username = body.username?.trim() ?? "";
    password = body.password ?? "";
  } else {
    const formData = await request.formData();
    username = String(formData.get("username") ?? "").trim();
    password = String(formData.get("password") ?? "");
  }

  if (!username || !password) {
    if (isJsonRequest(request)) {
      return NextResponse.json(
        { message: "Please enter both username and password." },
        { status: 400 },
      );
    }

    return NextResponse.redirect(new URL("/admin/login?error=missing", request.url));
  }

  if (!verifyAdminCredentials(username, password)) {
    if (isJsonRequest(request)) {
      return NextResponse.json(
        { message: "Invalid admin credentials." },
        { status: 401 },
      );
    }

    return NextResponse.redirect(new URL("/admin/login?error=invalid", request.url));
  }

  const response = isJsonRequest(request)
    ? NextResponse.json({ message: "Signed in successfully." })
    : NextResponse.redirect(new URL("/admin", request.url));

  response.cookies.set(
    ADMIN_SESSION_COOKIE,
    createAdminSessionToken(username),
    getAdminSessionCookieOptions(),
  );
  return response;
}
