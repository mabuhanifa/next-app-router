import { NextResponse } from "next/server";

export function middleware(req: Request) {
  console.log(req.url);

  if (req.url.includes("/about")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: ["/api/:path*"],
// };
