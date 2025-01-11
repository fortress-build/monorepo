import { NextResponse, type NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
  return new NextResponse(undefined, {
    status: 200,
    statusText: "OK",
  });
}
