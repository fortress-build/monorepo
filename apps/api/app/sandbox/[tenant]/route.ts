import { database } from "@repo/database";
import type { HTTP_METHOD } from "next/dist/server/web/http";
import { NextResponse, type NextRequest } from "next/server";

interface Params {
  tenant: string;
}

interface Path {
  params: Promise<Params>;
}

async function proxyRequest(
  req: NextRequest,
  method: HTTP_METHOD,
  { tenant }: Params,
): Promise<Response> {
  const authorization = req.headers.get("Authorization");

  if (authorization === null) {
    return new Response(undefined, {
      status: 401,
      statusText: "Unauthorized",
    });
  }

  const split = authorization.split("_");
  if (split.length !== 3) {
    return new Response(undefined, {
      status: 400,
      statusText: "Bad Request: invalid authorization header",
    });
  }
  const [prefix, identifier, secret] = split;
  if (prefix !== "") {
  }

  return await fetch(req, {
    headers: {
      // TODO: aws auth ??
    },
  });
}

function handler(method: HTTP_METHOD) {
  return async (req: NextRequest, { params }: Path) =>
    proxyRequest(req, method, await params);
}

export const GET = handler("GET");
export const HEAD = handler("HEAD");
export const POST = handler("POST");
export const PUT = handler("PUT");
export const DELETE = handler("DELETE");
export const PATCH = handler("PATCH");
export const OPTIONS = handler("OPTIONS");
