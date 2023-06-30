import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";

export async function GET(req: Request, res: Response) {
  const remaining = await limiter.removeTokens(1);

  if (remaining < 0)
    return new NextResponse(null, {
      status: 429,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain",
      },
      statusText: "To many requests",
    });

  return new Response("Hello world!");
}
