"use client";
import { useState } from "react";
import { Check, Bot, Star, ArrowRight, MessageCircle, RefreshCw, FileSpreadsheet, ChevronDown, Shield } from "lucide-react";
import { useLang, type Lang } from "./LangContext";

const CONTACT_EMAIL = "contact@jstechcorp.com";
const WA_BASE = "https://wa.me/19785028075";
const WA_MSG: Record<Lang, string> = {
  en: "Hi! I'm interested in JS Tech Corp's AI systems for my business.",
  pt: "Olá! Tenho interesse nos sistemas de IA da JS Tech Corp para o meu negócio.",
};
const contactWA = (lang: Lang) => `${WA_BASE}?text=${encodeURIComponent(WA_MSG[lang])}`;

// ─── CONTENT ─────────────────────────────────────────────────────────────────
const t = {
  en: {
    nav: { services: "Solutions", pricing: "Pricing", faq: "FAQ", contact: "Contact", cta: "Get started" },
    hero: {
      badge: "Answers while you're on the job",
      h1: "The call you miss is the customer your competitor ",
      accent: "keeps.",
      sub: "JS Tech Corp builds an AI that answers, quotes, and books your customers 24/7 — by website, text, and WhatsApp. You keep working. It keeps your schedule full.",
      cta1: "Set up my AI — $299",
      cta2: "See it live",
      micro: ["Live in 5–7 days", "30-day money-back", "No contract"],
    },
    ticket: {
      id: "WORK ORDER #4471",
      rows: [
        { who: "Customer · Sat 7:48 PM", msg: "Any chance you can detail my truck this weekend?" },
        { who: "JS AI · replied in 4s", msg: "Absolutely. I've got Saturday 10:00 or 1:30 open — which works better?", ai: true },
        { who: "Customer", msg: "10 works. 👍" },
      ],
      stamp: "BOOKED",
      detailBold: "Sat 10:00 · Full Detail · $180",
      detail: "Added to your calendar · Reminder sent",
    },
    facts: [
      { lead: "", bold: "40–60%", tail: " of leads never call back after a slow reply" },
      { lead: "A receptionist costs ", bold: "$2,000+/mo", tail: "" },
      { lead: "The AI works ", bold: "24/7", tail: "" },
    ],
    problem: {
      label: "The problem",
      title: "Every missed message is a lost job.",
      body: "When someone reaches out and doesn't hear back in minutes, they move on to the next name on the list. You're busy doing the actual work — not watching your phone. That gap costs you real money every single day.",
      costPre: "A receptionist runs ",
      costBold: "$2,000–$3,500 a month",
      costPost: ". Our AI does the same job for a fraction of that — and never takes a day off.",
    },
    services: {
      label: "What we build",
      title: "Five systems that turn missed messages into booked work.",
      sub: "Each one closes a specific spot where you're losing business.",
      items: [
        { icon: Bot, title: "24/7 Web Booking Agent", desc: "An AI on your site that greets every visitor, answers questions, and books the appointment — any hour, no one on standby.", plan: "Essential" },
        { icon: MessageCircle, title: "WhatsApp AI Assistant", desc: "Booking right inside WhatsApp, where your customers already are. It replies, qualifies, and books in the chat.", plan: "Premium" },
        { icon: RefreshCw, title: "Customer Re-engagement", desc: "Automatically follows up with past customers, sending offers and reminders that get them booking again.", plan: "Premium" },
        { icon: FileSpreadsheet, title: "Sheets & CRM Sync", desc: "Every lead and booking lands in a clean, shareable spreadsheet on its own. No manual entry, ever.", plan: "Premium" },
        { icon: Star, title: "Google Review Booster", desc: "A custom QR card that turns happy customers into 5-star reviews with one scan. More reviews, higher local ranking.", plan: "Essential" },
      ],
      askTitle: "Not sure where you're losing business?",
      askBody: "Tell us your trade. We'll point to the leak.",
      askCta: "Ask us",
    },
    pricing: {
      label: "Pricing",
      title: "One setup. Then a plan that fits.",
      sub: "Transparent, month-to-month. Cancel anytime.",
      setupLabel: "Setup & build",
      setupPrice: "$299",
      setupNote: "one-time",
      setupDesc: "We build everything from scratch — website, AI agent, every integration, the QR system. You go live in 5–7 days.",
      setupFeatures: ["Custom website design & build", "AI booking agent configured", "All automation workflows", "Google Review QR system", "Domain & hosting setup", "Live handoff walkthrough"],
      plans: [
        { label: "Essential", price: "$99", per: "/month", features: ["Website hosting & maintenance", "24/7 Web AI booking agent", "Google Review QR code", "Email notification per booking", "Ongoing support"], hot: false, cta: "Choose Essential" },
        { label: "Premium · most popular", price: "$149", per: "/month", features: ["Everything in Essential", "WhatsApp AI assistant", "Customer re-engagement", "Sheets & CRM sync", "Priority support + monthly review"], hot: true, cta: "Choose Premium" },
      ],
      guarantee: "30-day money-back guarantee. If the AI doesn't capture a single lead in your first 30 days, we refund your full setup fee. No questions asked.",
    },
    faq: {
      label: "FAQ",
      title: "Straight answers.",
      items: [
        { q: "Do I need to know how to code?", a: "Not at all. We build and manage everything. You get the notifications and reply to customers — that's it." },
        { q: "How long does setup take?", a: "Most clients go live within 5 to 7 business days after we get your business info." },
        { q: "What if I already have a website?", a: "We can add the AI agent to your existing site, or build a new one from scratch. Your choice." },
        { q: "Can the AI speak Spanish or Portuguese?", a: "Yes. It detects the customer's language and replies in English, Spanish, or Portuguese automatically." },
        { q: "Is there a contract?", a: "No contracts. Month-to-month. Cancel anytime with 30 days notice." },
      ],
    },
    cta: { pre: "Stop missing ", accent: "work.", sub: "Tell us your trade on WhatsApp. In a few minutes we'll show you exactly what to automate.", btn: "Message us on WhatsApp" },
    footer: { rights: "© 2026 JS Tech Corp. All rights reserved.", tag: "AI systems for local service businesses." },
  },
  pt: {
    nav: { services: "Soluções", pricing: "Preços", faq: "Dúvidas", contact: "Contato", cta: "Começar" },
    hero: {
      badge: "Atende enquanto você trabalha",
      h1: "A ligação que você perde é o cliente que seu concorrente ",
      accent: "ganha.",
      sub: "A JS Tech Corp cria uma IA que responde, orça e agenda seus clientes 24/7 — por site, texto e WhatsApp. Você continua trabalhando. Ela mantém sua agenda cheia.",
      cta1: "Montar minha IA — $299",
      cta2: "Ver funcionando",
      micro: ["No ar em 5–7 dias", "Garantia de 30 dias", "Sem fidelidade"],
    },
    ticket: {
      id: "ORDEM DE SERVIÇO #4471",
      rows: [
        { who: "Cliente · Sáb 19:48", msg: "Consegue detalhar minha caminhonete nesse fim de semana?" },
        { who: "JS IA · respondeu em 4s", msg: "Claro! Tenho sábado 10:00 ou 13:30 livre — qual fica melhor?", ai: true },
        { who: "Cliente", msg: "10:00 tá ótimo. 👍" },
      ],
      stamp: "AGENDADO",
      detailBold: "Sáb 10:00 · Detalhamento · $180",
      detail: "Adicionado à agenda · Lembrete enviado",
    },
    facts: [
      { lead: "", bold: "40–60%", tail: " dos leads não voltam a chamar após uma resposta lenta" },
      { lead: "Uma recepcionista custa ", bold: "$2.000+/mês", tail: "" },
      { lead: "A IA trabalha ", bold: "24/7", tail: "" },
    ],
    problem: {
      label: "O problema",
      title: "Cada mensagem ignorada é um serviço perdido.",
      body: "Quando alguém entra em contato e não recebe resposta em minutos, vai para o próximo nome da lista. Você está ocupado fazendo o trabalho — não olhando o celular. Essa lacuna custa dinheiro real todos os dias.",
      costPre: "Uma recepcionista custa ",
      costBold: "$2.000–$3.500 por mês",
      costPost: ". Nossa IA faz o mesmo por uma fração disso — e nunca tira folga.",
    },
    services: {
      label: "O que construímos",
      title: "Cinco sistemas que transformam mensagens perdidas em serviço agendado.",
      sub: "Cada um resolve um ponto específico onde você está perdendo negócio.",
      items: [
        { icon: Bot, title: "Agente de Agendamento Web 24/7", desc: "Uma IA no seu site que atende cada visitante, responde dúvidas e agenda — a qualquer hora, sem ninguém de plantão.", plan: "Essencial" },
        { icon: MessageCircle, title: "Assistente de IA no WhatsApp", desc: "Agendamento dentro do WhatsApp, onde seus clientes já estão. Responde, qualifica e agenda na conversa.", plan: "Premium" },
        { icon: RefreshCw, title: "Reengajamento de Clientes", desc: "Segue automaticamente com clientes antigos, mandando ofertas e lembretes que os trazem de volta.", plan: "Premium" },
        { icon: FileSpreadsheet, title: "Sincronização Sheets & CRM", desc: "Cada lead e agendamento cai sozinho numa planilha limpa e compartilhável. Zero digitação manual.", plan: "Premium" },
        { icon: Star, title: "Booster de Avaliações Google", desc: "Um cartão com QR que transforma clientes satisfeitos em avaliações 5 estrelas num escaneamento. Mais avaliações, melhor posição local.", plan: "Essencial" },
      ],
      askTitle: "Não sabe onde está perdendo cliente?",
      askBody: "Diga o seu ramo. A gente mostra onde está o vazamento.",
      askCta: "Perguntar",
    },
    pricing: {
      label: "Preços",
      title: "Uma implementação. Depois, um plano que cabe.",
      sub: "Transparente, mês a mês. Cancele quando quiser.",
      setupLabel: "Implementação",
      setupPrice: "$299",
      setupNote: "pagamento único",
      setupDesc: "Construímos tudo do zero — site, agente de IA, todas as integrações, o sistema de QR. Você entra no ar em 5–7 dias.",
      setupFeatures: ["Design e construção do site", "Agente de IA configurado", "Todos os fluxos de automação", "Sistema de QR de avaliações", "Domínio e hospedagem", "Apresentação ao vivo na entrega"],
      plans: [
        { label: "Essencial", price: "$99", per: "/mês", features: ["Hospedagem e manutenção do site", "Agente de IA Web 24/7", "QR Code de avaliações Google", "Notificação por e-mail por agendamento", "Suporte contínuo"], hot: false, cta: "Quero o Essencial" },
        { label: "Premium · mais vendido", price: "$149", per: "/mês", features: ["Tudo do Essencial", "Assistente de IA no WhatsApp", "Reengajamento de clientes", "Sincronização Sheets & CRM", "Suporte prioritário + revisão mensal"], hot: true, cta: "Quero o Premium" },
      ],
      guarantee: "Garantia de 30 dias. Se a IA não capturar nenhum lead nos primeiros 30 dias, devolvemos integralmente a taxa de implementação. Sem burocracia.",
    },
    faq: {
      label: "Dúvidas",
      title: "Respostas diretas.",
      items: [
        { q: "Preciso saber programar?", a: "De jeito nenhum. Nós construímos e gerenciamos tudo. Você recebe as notificações e responde aos clientes — só isso." },
        { q: "Quanto tempo leva a implementação?", a: "A maioria dos clientes entra no ar em 5 a 7 dias úteis após recebermos as informações do negócio." },
        { q: "E se eu já tiver um site?", a: "Podemos adicionar o agente de IA ao seu site atual ou construir um novo do zero. A escolha é sua." },
        { q: "A IA fala português ou espanhol?", a: "Sim. Ela detecta o idioma do cliente e responde em inglês, português ou espanhol automaticamente." },
        { q: "Tem contrato ou fidelidade?", a: "Sem contratos. Mês a mês. Cancele quando quiser com 30 dias de aviso." },
      ],
    },
    cta: { pre: "Pare de perder ", accent: "serviço.", sub: "Conte seu ramo no WhatsApp. Em minutos mostramos exatamente o que automatizar.", btn: "Falar no WhatsApp" },
    footer: { rights: "© 2026 JS Tech Corp. Todos os direitos reservados.", tag: "Sistemas de IA para negócios locais de serviço." },
  },
};

// ─── BUTTON ──────────────────────────────────────────────────────────────────
function Btn({ href, children, variant = "amber", className = "" }: {
  href: string; children: React.ReactNode; variant?: "amber" | "outline" | "ghost"; className?: string;
}) {
  const ext = href.startsWith("http");
  const styles = {
    amber: "bg-[#f5820a] text-[#1a1200] border-transparent hover:-translate-y-0.5 hover:shadow-[0_8px_0_-2px_rgba(245,130,10,0.35)]",
    outline: "bg-transparent text-[#12181f] border-[#e6e4dd] hover:border-[#12181f]",
    ghost: "bg-transparent text-white border-white/30 hover:border-white",
  };
  return (
    <a
      href={href}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 font-bold text-[15px] rounded-[3px] px-6 py-3.5 border-2 transition-all duration-150 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const { lang, setLang } = useLang();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const c = t[lang];

  return (
    <main className="bg-white text-[#12181f]">
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#e6e4dd]">
        <div className="max-w-[1120px] mx-auto px-6 h-[66px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-black tracking-tight text-lg font-[family-name:var(--font-archivo)]">
            <span className="w-6 h-6 bg-[#f5820a] rounded-[3px] grid place-items-center text-[#1a1200] text-[11px] font-[family-name:var(--font-ibm-mono)]">JS</span>
            JS TECH CORP
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm text-[#59636f]">
            <a href="#systems" className="hover:text-[#12181f] transition-colors">{c.nav.services}</a>
            <a href="#pricing" className="hover:text-[#12181f] transition-colors">{c.nav.pricing}</a>
            <a href="#faq" className="hover:text-[#12181f] transition-colors">{c.nav.faq}</a>
            <a href="#contact" className="hover:text-[#12181f] transition-colors">{c.nav.contact}</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "pt" : "en")}
              className="text-xs font-bold text-[#59636f] hover:text-[#12181f] border border-[#e6e4dd] hover:border-[#12181f] rounded-[3px] px-3 py-1.5 transition-all font-[family-name:var(--font-ibm-mono)]"
            >
              {lang === "en" ? "PT" : "EN"}
            </button>
            <Btn href={contactWA(lang)} className="hidden sm:inline-flex px-4! py-2! text-sm!">{c.nav.cta}</Btn>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="max-w-[1120px] mx-auto px-6 pt-[76px] pb-[60px]">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-14 items-center">
          <div>
            <span className="text-[12px] tracking-[0.18em] uppercase text-[#f5820a] font-[family-name:var(--font-ibm-mono)] font-semibold">{c.hero.badge}</span>
            <h1 className="font-[family-name:var(--font-archivo)] font-black tracking-tight leading-[0.98] text-[42px] sm:text-[56px] mt-4 mb-5">
              {c.hero.h1}<span className="text-[#f5820a]">{c.hero.accent}</span>
            </h1>
            <p className="text-[19px] text-[#59636f] max-w-[34ch] leading-relaxed mb-8">{c.hero.sub}</p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Btn href={contactWA(lang)}>{c.hero.cta1} <ArrowRight size={16} /></Btn>
              <Btn href="https://vndetailing.com" variant="outline">{c.hero.cta2}</Btn>
            </div>
            <p className="mt-6 text-[12px] text-[#7c8590] font-[family-name:var(--font-ibm-mono)]">
              {c.hero.micro.map((m, i) => (
                <span key={i}>{i > 0 && <span className="mx-1.5">·</span>}<span className="text-[#12181f] font-semibold">{m}</span></span>
              ))}
            </p>
          </div>

          {/* SIGNATURE: work-order ticket */}
          <div className="ticket bg-white border border-[#e6e4dd] rounded-[4px] shadow-[0_24px_60px_-30px_rgba(18,24,31,0.4)] overflow-hidden">
            <div className="flex justify-between items-center px-[22px] pt-5 pb-3.5 border-b border-dashed border-[#e6e4dd]">
              <span className="text-[12px] tracking-[0.16em] uppercase font-[family-name:var(--font-ibm-mono)] font-semibold">JS Tech Corp</span>
              <span className="text-[12px] text-[#7c8590] font-[family-name:var(--font-ibm-mono)]">{c.ticket.id}</span>
            </div>
            <div className="px-[22px] pt-2 pb-1">
              {c.ticket.rows.map((r, i) => (
                <div key={i} className="tk-row py-3 border-b border-[#f1efe9]">
                  <span className={`block text-[10.5px] tracking-[0.1em] uppercase mb-1.5 font-[family-name:var(--font-ibm-mono)] ${"ai" in r && r.ai ? "text-[#f5820a]" : "text-[#7c8590]"}`}>{r.who}</span>
                  <p className="text-[14.5px] text-[#12181f]">{r.msg}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 px-[22px] pt-[18px] pb-6">
              <div className="stamp font-[family-name:var(--font-archivo)] font-black tracking-wider text-[#1f9d57] border-[3px] border-[#1f9d57] rounded-md px-3 py-1.5 text-[20px] shrink-0">{c.ticket.stamp}</div>
              <div className="text-[12px] text-[#59636f] leading-relaxed font-[family-name:var(--font-ibm-mono)]">
                <span className="text-[#12181f] font-semibold">{c.ticket.detailBold}</span><br />{c.ticket.detail}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── FACT STRIP ── */}
      <div className="bg-[#12181f] text-white">
        <div className="max-w-[1120px] mx-auto px-6 py-5 flex flex-wrap items-center gap-y-2 gap-x-10 text-[12.5px] text-[#b9c0c8] font-[family-name:var(--font-ibm-mono)]">
          {c.facts.map((f, i) => (
            <span key={i}><span className="text-[#f5820a] mr-1.5">▪</span>{f.lead}<b className="text-white">{f.bold}</b>{f.tail}</span>
          ))}
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <section className="py-24 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <span className="text-[12px] tracking-[0.18em] uppercase text-[#f5820a] font-[family-name:var(--font-ibm-mono)] font-semibold">{c.problem.label}</span>
          <h2 className="font-[family-name:var(--font-archivo)] font-black tracking-tight text-[30px] sm:text-[38px] mt-4 mb-5">{c.problem.title}</h2>
          <p className="text-[19px] text-[#59636f] leading-relaxed">{c.problem.body}</p>
          <div className="inline-block text-left mt-7 bg-white border border-[#e6e4dd] border-l-4 border-l-[#f5820a] px-6 py-4.5 text-[17px] font-semibold">
            {c.problem.costPre}<span className="text-[#f5820a]">{c.problem.costBold}</span>{c.problem.costPost}
          </div>
        </div>
      </section>

      {/* ── SYSTEMS ── */}
      <section id="systems" className="py-24 px-6 bg-[#f4f3ef] border-y border-[#e6e4dd]">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-[640px]">
            <span className="text-[12px] tracking-[0.18em] uppercase text-[#f5820a] font-[family-name:var(--font-ibm-mono)] font-semibold">{c.services.label}</span>
            <h2 className="font-[family-name:var(--font-archivo)] font-black tracking-tight text-[30px] sm:text-[40px] mt-3.5 mb-3.5">{c.services.title}</h2>
            <p className="text-[18px] text-[#59636f]">{c.services.sub}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-11">
            {c.services.items.map((item, i) => {
              const Icon = item.icon;
              const isPremium = item.plan === "Premium";
              return (
                <div key={i} className="bg-white border border-[#e6e4dd] rounded-[4px] p-[26px] flex flex-col transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_18px_40px_-24px_rgba(18,24,31,0.35)]">
                  <div className="flex justify-between items-start mb-4.5">
                    <div className="w-11 h-11 rounded-[4px] bg-[#12181f] text-[#f5820a] grid place-items-center">
                      <Icon size={19} />
                    </div>
                    <span className={`text-[10px] tracking-[0.12em] uppercase px-2 py-1 rounded-[2px] font-[family-name:var(--font-ibm-mono)] ${isPremium ? "bg-[#fff1e2] text-[#c76a06]" : "bg-[#eef3ff] text-[#2f5bd0]"}`}>{item.plan}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-archivo)] font-bold text-[18px] tracking-tight mb-2">{item.title}</h3>
                  <p className="text-[14.5px] text-[#59636f] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
            {/* Ask card */}
            <div className="bg-[#12181f] text-white rounded-[4px] p-[26px] flex flex-col justify-center">
              <h3 className="font-[family-name:var(--font-archivo)] font-bold text-[20px] tracking-tight text-white">{c.services.askTitle}</h3>
              <p className="text-[#aeb6be] text-[14.5px] mt-2.5 mb-4.5 leading-relaxed">{c.services.askBody}</p>
              <Btn href={contactWA(lang)} className="self-start">{c.services.askCta} <ArrowRight size={15} /></Btn>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-[640px] mx-auto text-center">
            <span className="text-[12px] tracking-[0.18em] uppercase text-[#f5820a] font-[family-name:var(--font-ibm-mono)] font-semibold">{c.pricing.label}</span>
            <h2 className="font-[family-name:var(--font-archivo)] font-black tracking-tight text-[30px] sm:text-[40px] mt-3.5 mb-3.5">{c.pricing.title}</h2>
            <p className="text-[18px] text-[#59636f]">{c.pricing.sub}</p>
          </div>

          {/* Setup */}
          <div className="bg-white border border-[#e6e4dd] rounded-[4px] p-[34px] grid md:grid-cols-[280px_1fr] gap-[34px] mt-11">
            <div>
              <span className="text-[12px] tracking-[0.14em] uppercase text-[#7c8590] font-[family-name:var(--font-ibm-mono)] font-semibold">{c.pricing.setupLabel}</span>
              <div className="font-[family-name:var(--font-archivo)] font-black text-[52px] tracking-tight mt-1">{c.pricing.setupPrice}</div>
              <div className="text-[12px] text-[#7c8590] font-[family-name:var(--font-ibm-mono)] mb-3">{c.pricing.setupNote}</div>
              <p className="text-[14px] text-[#59636f] leading-relaxed">{c.pricing.setupDesc}</p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-[18px] gap-y-2.5">
              {c.pricing.setupFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px]"><Check size={15} className="text-[#f5820a] shrink-0 mt-0.5" />{f}</li>
              ))}
            </ul>
          </div>

          {/* Plans */}
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {c.pricing.plans.map((plan, i) => (
              <div key={i} className={`rounded-[4px] p-[30px] flex flex-col border ${plan.hot ? "bg-[#12181f] text-white border-[#12181f]" : "bg-white border-[#e6e4dd]"}`}>
                <span className={`text-[11px] tracking-[0.12em] uppercase font-[family-name:var(--font-ibm-mono)] ${plan.hot ? "text-[#f5820a]" : "text-[#7c8590]"}`}>{plan.label}</span>
                <div className="flex items-baseline gap-1.5 mt-3">
                  <span className="font-[family-name:var(--font-archivo)] font-black text-[44px] tracking-tight">{plan.price}</span>
                  <span className={`text-[13px] font-[family-name:var(--font-ibm-mono)] ${plan.hot ? "text-[#7c8590]" : "text-[#7c8590]"}`}>{plan.per}</span>
                </div>
                <ul className="grid gap-2.5 mt-5 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-start gap-2.5 text-[14px] ${plan.hot ? "text-[#dfe4ea]" : ""}`}><Check size={15} className="text-[#f5820a] shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Btn href={contactWA(lang)} variant={plan.hot ? "amber" : "outline"} className="mt-auto w-full">{plan.cta}</Btn>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-4 border border-[#cdeddc] bg-[#f0faf4] rounded-[4px] px-[22px] py-4.5 flex items-start gap-3 text-[14px] text-[#176b3d]">
            <Shield size={20} className="text-[#1f9d57] shrink-0 mt-0.5" />
            <span>{c.pricing.guarantee}</span>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-6 bg-[#f4f3ef] border-y border-[#e6e4dd]">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-[12px] tracking-[0.18em] uppercase text-[#f5820a] font-[family-name:var(--font-ibm-mono)] font-semibold">{c.faq.label}</span>
            <h2 className="font-[family-name:var(--font-archivo)] font-black tracking-tight text-[30px] sm:text-[40px] mt-3.5">{c.faq.title}</h2>
          </div>
          <div className="space-y-2.5">
            {c.faq.items.map((item, i) => (
              <div key={i} className="border border-[#e6e4dd] rounded-[4px] bg-white overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-[22px] py-4.5 text-left">
                  <span className="font-bold text-[15px]">{item.q}</span>
                  <ChevronDown size={18} className={`text-[#f5820a] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <p className="px-[22px] pb-5 text-[14.5px] text-[#59636f] leading-relaxed">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-24 px-6 bg-[#12181f] text-center text-white">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-[family-name:var(--font-archivo)] font-black tracking-tight text-[34px] sm:text-[46px] mb-4">{c.cta.pre}<span className="text-[#f5820a]">{c.cta.accent}</span></h2>
          <p className="text-[#aeb6be] text-[18px] mb-8">{c.cta.sub}</p>
          <Btn href={contactWA(lang)} className="text-base! px-8! py-4!">{c.cta.btn} <ArrowRight size={16} /></Btn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0b0f14] text-[#8b939c] py-10 px-6">
        <div className="max-w-[1120px] mx-auto flex flex-wrap items-center justify-between gap-5 text-[13px]">
          <a href="#" className="flex items-center gap-2.5 text-white font-black font-[family-name:var(--font-archivo)]">
            <span className="w-6 h-6 bg-[#f5820a] rounded-[3px] grid place-items-center text-[#1a1200] text-[11px] font-[family-name:var(--font-ibm-mono)]">JS</span>
            JS TECH CORP
          </a>
          <span>{c.footer.tag}</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
          <span>{c.footer.rights}</span>
        </div>
      </footer>
    </main>
  );
}
