import type { HTTP_METHOD } from "next/dist/server/web/http";
import type { NextRequest } from "next/server";

import { unkey } from "@repo/tokens";
import { getSandboxInfo } from "@repo/healthlake";
import { env } from "@/env";
import { log } from "@nerve-js/observability/log";

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
  log.info("proxyRequest", { method, tenant });
  const authorization = req.headers.get("Authorization");

  if (authorization === null) {
    return new Response(undefined, {
      status: 401,
      statusText: "Unauthorized",
    });
  }

  if (!authorization.startsWith("Bearer ")) {
    return new Response(undefined, {
      status: 400,
      statusText: "Invalid token",
    });
  }

  const { result, error } = await unkey.keys.verify({
    apiId: env.UNKEY_SANDBOX_API,
    key: authorization.slice(7),
  });
  if (error !== undefined) {
    return new Response(undefined, {
      status: 401,
      statusText: "Unauthorized",
    });
  }

  const { ownerId } = result;

  if (ownerId !== tenant) {
    return new Response(undefined, {
      status: 403,
      statusText: "Forbidden",
    });
  }

  const info = await getSandboxInfo(tenant);
  if (info === undefined) {
    return new Response(undefined, {
      status: 404,
      statusText: "Not Found",
    });
  }

  if (
    info.DatastoreStatus !== "ACTIVE" ||
    info.DatastoreEndpoint === undefined
  ) {
    return new Response(undefined, {
      status: 503,
      statusText: "Service Unavailable",
    });
  }

  const endpoint = info.DatastoreEndpoint;

  return await fetch(endpoint, {
    method,
    body: req.body,
    headers: {
      ...req.headers,
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
