import { NextResponse } from "next/server";

const EXTERNAL_URL =
  "http://aiternative-mango-alb-1984945680.us-east-1.elb.amazonaws.com/order-confirmation?productId=87017198-70&mail=joan.busquet@mango.com";

export async function GET() {
  try {
    const response = await fetch(EXTERNAL_URL, {
      method: "GET",
      cache: "no-store",
    });

    return NextResponse.json(
      { ok: response.ok },
      { status: response.status }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Upstream request failed" },
      { status: 502 }
    );
  }
}
