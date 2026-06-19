import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK_URL = "https://jean-n8n.duckdns.org/webhook/jstechcorp-chat";

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, sessionId: sessionId ?? "default" }),
    });

    if (!n8nResponse.ok) {
      throw new Error(`n8n responded with ${n8nResponse.status}`);
    }

    const data = (await n8nResponse.json()) as { reply?: string };
    return NextResponse.json({ reply: data.reply ?? "Sorry, I could not process your request." });
  } catch (error) {
    console.error("Chat proxy error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
