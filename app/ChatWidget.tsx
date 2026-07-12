"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useLang, type Lang } from "./LangContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const UI: Record<Lang, {
  greeting: string; assistant: string; online: string; placeholder: string;
  sorryWrong: string; sorryConn: string;
}> = {
  en: {
    greeting: "Hi! I'm the JS Tech Corp assistant. Ask me about our AI systems, pricing, or how we can help your business capture more leads 24/7.",
    assistant: "AI Sales Assistant",
    online: "Online",
    placeholder: "Type your message...",
    sorryWrong: "Sorry, something went wrong.",
    sorryConn: "Sorry, I'm having trouble connecting. Please try again.",
  },
  pt: {
    greeting: "Oi! Sou o assistente da JS Tech Corp. Pode me perguntar sobre nossos sistemas de IA, preços, ou como a gente ajuda seu negócio a captar mais clientes 24/7.",
    assistant: "Assistente de Vendas IA",
    online: "Online",
    placeholder: "Escreva sua mensagem...",
    sorryWrong: "Desculpe, algo deu errado.",
    sorryConn: "Desculpe, estou com problema de conexão. Tente de novo.",
  },
};

function TypingIndicator() {
  return (
    <div className="flex items-start gap-2">
      <div className="w-7 h-7 rounded-full bg-[#4A6CF7] flex items-center justify-center shrink-0 text-white text-[9px] font-bold">JS</div>
      <div className="bg-gray-100 border border-gray-200 rounded-2xl rounded-tl-sm px-3 py-2.5">
        <div className="flex gap-1 items-center h-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4A6CF7] animate-bounce [animation-delay:-0.3s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#4A6CF7] animate-bounce [animation-delay:-0.15s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#4A6CF7] animate-bounce" />
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  if (message.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="bg-[#4A6CF7] text-white rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[80%]">
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-2">
      <div className="w-7 h-7 rounded-full bg-[#4A6CF7] flex items-center justify-center shrink-0 text-white text-[9px] font-bold">JS</div>
      <div className="bg-gray-100 border border-gray-200 text-gray-800 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[80%]">
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}

export default function ChatWidget() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [sessionId] = useState<string>(() => crypto.randomUUID());
  const [messages, setMessages] = useState<Message[]>(() => [
    { role: "assistant", content: UI[lang].greeting },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      textareaRef.current?.focus();
    }
  }, [messages, isLoading, open]);

  // Keep the greeting in the page's language until the user starts chatting.
  useEffect(() => {
    setMessages((prev) =>
      prev.length === 1 && prev[0].role === "assistant"
        ? [{ role: "assistant", content: UI[lang].greeting }]
        : prev
    );
  }, [lang]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setIsLoading(true);
    textareaRef.current?.focus();

    const startedAt = Date.now();
    // Keep the "typing…" bubble visible for a natural amount of time so the
    // assistant feels like a real person writing, not an instant machine.
    const settle = async (ms: number) => {
      const remaining = ms - (Date.now() - startedAt);
      if (remaining > 0) await new Promise((r) => setTimeout(r, remaining));
    };

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, sessionId }),
      });

      if (!response.ok) throw new Error("API error");

      const data = (await response.json()) as { reply?: string };
      const reply = data.reply ?? UI[lang].sorryWrong;
      const typingMs = Math.min(3000, Math.max(1000, reply.length * 18));
      await settle(typingMs);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      await settle(1000);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: UI[lang].sorryConn },
      ]);
    } finally {
      setIsLoading(false);
      textareaRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as FormEvent);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-5 z-[999] w-[340px] sm:w-[380px] h-[520px] bg-white border border-gray-200 rounded-2xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#4A6CF7] px-4 py-3 flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold shrink-0">JS</div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold text-sm">JS Tech Corp</span>
                <span className="flex items-center gap-1 text-xs text-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block animate-pulse" />
                  {UI[lang].online}
                </span>
              </div>
              <p className="text-xs text-white/70">{UI[lang].assistant}</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors" aria-label="Close chat">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <MessageBubble key={idx} message={msg} />
            ))}
            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 px-3 py-2.5 shrink-0 bg-white">
            <form onSubmit={handleSubmit} className="flex items-end gap-2">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={UI[lang].placeholder}
                rows={1}
                disabled={isLoading}
                className="flex-1 resize-none rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4A6CF7] focus:border-transparent disabled:opacity-50 max-h-24 overflow-y-auto leading-relaxed"
                style={{ minHeight: "38px" }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-9 h-9 rounded-full bg-[#4A6CF7] text-white flex items-center justify-center shrink-0 hover:bg-[#3D5CDB] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Send"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-[999] w-14 h-14 rounded-full bg-[#4A6CF7] text-white flex items-center justify-center shadow-lg hover:bg-[#3D5CDB] hover:shadow-xl active:scale-95 transition-all duration-200"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}
