import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, isValidLocale } from "./i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API routes, static files, and Next.js internals
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a valid locale
  const segments = pathname.split("/");
  const firstSegment = segments[1];

  if (isValidLocale(firstSegment)) {
    return NextResponse.next();
  }

  // Redirect to default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon|.*\\..*).*)"],
};
