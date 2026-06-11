import { cookies } from "next/headers";
import { NextResponse } from "next/server";

type Theme = "light" | "dark";

function normalizeTheme(value: string | undefined): Theme {
  return value === "light" ? "light" : "dark";
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const nextPath = url.searchParams.get("next") || "/";
  const cookieStore = await cookies();
  const currentTheme = normalizeTheme(cookieStore.get("theme")?.value);
  const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";

  const redirectUrl = new URL(nextPath, url.origin);
  const response = NextResponse.redirect(redirectUrl);

  response.cookies.set("theme", nextTheme, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}
