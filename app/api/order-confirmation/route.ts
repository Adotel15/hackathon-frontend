import { NextResponse } from "next/server";

const EXTERNAL_URL =
  "http://aiternative-mango-alb-1984945680.us-east-1.elb.amazonaws.com/order-confirmation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mail = searchParams.get("mail");
  const productId = searchParams.get("productId");

  if (!mail || !productId) {
    return NextResponse.json(
      { ok: false, error: "Missing required params: mail, productId" },
      { status: 400 }
    );
  }

  const upstreamUrl = new URL(EXTERNAL_URL);
  upstreamUrl.searchParams.set("mail", mail);
  upstreamUrl.searchParams.set("productId", productId);

  try {
    const upstreamResponse = await fetch(upstreamUrl, {
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
