import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose"; // Import jwtVerify from jose (works in Edge Runtime)

const protectedRoutes = ["/kalendarz", "/opcje"];
const publicRoutes = ["/login", "/rejestracja", "/alergeny"];

export default async function middleware(req) {
  console.log("Middleware running for:", req.nextUrl.pathname);

  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // Get the JWT from cookies
  const cookie = (await cookies()).get("jwt")?.value;
  console.log("JWT cookie:", cookie);
  if (!cookie) {
    console.log("No JWT cookie found.");
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
    return NextResponse.next();
  }

  //   let session = null;
  //   try {
  //     // Use jwtVerify from jose to verify the JWT token and decode the payload
  //     const { payload } = await jwtVerify(
  //       cookie,
  //       new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
  //     );
  //     session = payload; // Assign the decoded session to the session variable
  //     console.log("Decoded session:", session);
  //   } catch (error) {
  //     console.error("JWT verification failed:", error.message);
  //     if (isProtectedRoute) {
  //       return NextResponse.redirect(new URL("/login", req.nextUrl));
  //     }
  //   }

  // Check if session exists and has userId for protected routes
  //   if (isProtectedRoute && !session?.email) {
  //     return NextResponse.redirect(new URL("/login", req.nextUrl));
  //   }

  // Redirect to calendar if user is logged in and trying to access public routes
  //   if (
  //     isPublicRoute &&
  //     session?.email &&
  //     !req.nextUrl.pathname.startsWith("/kalendarz")
  //   ) {
  //     return NextResponse.redirect(new URL("/kalendarz", req.nextUrl));
  //   }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/rejestracja", "/kalendarz", "/alergeny"],
};
