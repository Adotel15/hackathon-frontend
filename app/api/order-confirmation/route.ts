import { NextResponse } from "next/server";

const EXTERNAL_URL =
  "http://aiternative-mango-alb-1984945680.us-east-1.elb.amazonaws.com/order-confirmation?productId=27025826-43&mail=adriandotel@gmail.com";

export async function GET() {
  try {
    const upstreamResponse = await fetch(EXTERNAL_URL, {
      method: "GET",
      cache: "no-store",
    });

    return NextResponse.json(
      { ok: upstreamResponse.ok },
      { status: upstreamResponse.status }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Upstream request failed" },
      { status: 502 }
    );
  }
}
