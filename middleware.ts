// import { NextResponse } from "next/server";

// export function middleware(req: Request) {
//   console.log(req.url);

//   if (req.url.includes("/about")) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   return NextResponse.next();
// }

// // export const config = {
// //   matcher: ["/api/:path*"],
// // };

// Without a defined matcher, this one line applies next-auth
// to the entire project
export { default } from "next-auth/middleware";

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: "/dashboard" };
