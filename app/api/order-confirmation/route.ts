import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EXTERNAL_URL =
  "http://aiternative-mango-alb-1984945680.us-east-1.elb.amazonaws.com/order-confirmation?productId=27025826-43&mail=adriandotel@gmail.com";

export async function GET() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const upstreamResponse = await fetch(EXTERNAL_URL, {
      method: "GET",
      cache: "no-store",
      signal: controller.signal,
    });

    const responseText = await upstreamResponse.text();

    clearTimeout(timeout);

    if (!upstreamResponse.ok) {
      console.error("Order confirmation upstream error", {
        status: upstreamResponse.status,
        statusText: upstreamResponse.statusText,
        url: EXTERNAL_URL,
        body: responseText,
      });
    }

    return NextResponse.json(
      {
        ok: upstreamResponse.ok,
        upstream: {
          status: upstreamResponse.status,
          statusText: upstreamResponse.statusText,
          body: responseText.slice(0, 2000),
        },
      },
      { status: upstreamResponse.status }
    );
  } catch (error) {
    clearTimeout(timeout);

    const message =
      error instanceof Error ? error.message : "Unknown upstream error";

    console.error("Order confirmation request failed", {
      url: EXTERNAL_URL,
      error: message,
    });

    return NextResponse.json(
      {
        ok: false,
        error: "Upstream request failed",
        details: message,
      },
      { status: 502 }
    );
  }
}
