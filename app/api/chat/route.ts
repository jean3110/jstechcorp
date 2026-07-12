import { NextRequest, NextResponse } from "next/server";

// URL do webhook do n8n. Fica em variável de ambiente (Vercel) para não
// expor o endereço do servidor no repositório público. Mantém um padrão
// enquanto a env var não estiver configurada.
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL ?? "https://jean-n8n.duckdns.org/webhook/jstechcorp-chat";
// Segredo compartilhado: se configurado, é enviado ao n8n para provar que a
// chamada veio do site (o n8n deve validar esse header).
const N8N_WEBHOOK_SECRET = process.env.N8N_WEBHOOK_SECRET;

const MAX_MESSAGE_LENGTH = 1000;

// Limite de frequência simples por IP (best-effort em serverless).
const RATE_LIMIT = 15; // requisições
const RATE_WINDOW_MS = 60_000; // por minuto
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please slow down." }, { status: 429 });
    }

    const { message, sessionId } = await req.json();

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (N8N_WEBHOOK_SECRET) headers["x-jstc-secret"] = N8N_WEBHOOK_SECRET;

    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({ message, sessionId: typeof sessionId === "string" ? sessionId : "default" }),
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
