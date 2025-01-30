import { NextResponse } from "next/server";

export default function middleware(request:NextResponse) {
    // Middleware code her
    return NextResponse.redirect(new URL("/", request.url))
}

export const config = {
    matcher: '/about/:path*', 
}