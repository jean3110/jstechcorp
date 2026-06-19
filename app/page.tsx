"use client";
import { useState } from "react";
import { Check, Bot, Star, ArrowRight, Sparkles, MessageCircle, RefreshCw, FileSpreadsheet, ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";

type Lang = "en" | "pt";

const CONTACT_EMAIL = "contact@jstechcorp.com";
const WA_BASE = "https://wa.me/19785028075";
const WA_MSG: Record<Lang, string> = {
  en: "Hi! I'm interested in JS Tech Corp's AI systems for my business.",
  pt: "Olá! Tenho interesse nos sistemas de IA da JS Tech Corp para o meu negócio.",
};
const contactWA = (lang: Lang) => `${WA_BASE}?text=${encodeURIComponent(WA_MSG[lang])}`;

const t = {
  en: {
    nav: { services: "Solutions", pricing: "Pricing", cta: "Get Started" },
    hero: {
      badge: "AI Automation for Local Businesses",
      h1: "Your Business,",
      h2: "Always On.",
      sub: "We build AI systems that capture leads, book appointments, and re-engage past customers — 24/7, on autopilot.",
      cta1: "Get Started",
      cta2: "See Live Example",
    },
    stats: [
      { v: "40–60%", l: "leads lost to slow replies" },
      { v: "24/7", l: "AI works while you sleep" },
      { v: "$2,000+", l: "monthly cost of a receptionist" },
      { v: "30 days", l: "money-back guarantee" },
    ],
    problem: {
      label: "The Problem",
      title: "Every Missed Message Is a Lost Customer",
      body: "When someone reaches out and doesn't hear back in minutes, they move on to the next business. You're busy doing the actual work — not watching your phone. That gap is costing you real money every single day.",
      highlight: "A receptionist costs $2,000–$3,500/month. Our AI delivers the same result — for a fraction of that.",
    },
    services: {
      label: "What We Build",
      title: "Five Systems. One Goal.",
      sub: "Each system is purpose-built to close a specific gap in your business.",
      items: [
        { icon: Bot, title: "24/7 Web Lead Capture & Scheduler", desc: "An AI assistant on your website that engages every visitor, answers questions, and books appointments day or night — no human needed.", plan: "Essential" },
        { icon: MessageCircle, title: "WhatsApp AI Assistant", desc: "Your scheduling intelligence on WhatsApp — where most customers already are. Responds, qualifies, and books directly in the chat.", plan: "Premium" },
        { icon: RefreshCw, title: "Customer Re-engagement Automation", desc: "Automatically follows up with past customers via WhatsApp with offers and reminders that bring them back and generate fast revenue.", plan: "Premium" },
        { icon: FileSpreadsheet, title: "Google Sheets & CRM Sync", desc: "Every lead and booking auto-organized in a clean, shareable spreadsheet. No manual entry — your pipeline is always current.", plan: "Premium" },
        { icon: Star, title: "Google Review Booster via QR Code", desc: "A custom QR code card that turns satisfied customers into 5-star reviews with a single scan. More reviews = higher local ranking.", plan: "Essential" },
      ],
    },
    pricing: {
      label: "Pricing",
      title: "Simple, Transparent Pricing.",
      sub: "One setup investment. Choose the monthly plan that fits your stage.",
      setup: {
        label: "Setup & Build",
        price: "$299",
        note: "one-time fee",
        desc: "We build everything from scratch — custom website, AI agent, all integrations, QR Code system.",
        features: ["Custom website design & development", "AI booking agent configuration", "All automation workflows", "Google Review QR Code system", "Domain & hosting setup", "Live handoff walkthrough"],
      },
      plans: [
        {
          label: "Essential",
          price: "$99",
          note: "/month",
          desc: "Capture leads and automate bookings from your website.",
          features: ["Website hosting & maintenance", "24/7 Web AI Booking Agent", "Google Review QR Code", "Email notifications per booking", "Airtable booking dashboard", "Ongoing support"],
        },
        {
          label: "Premium",
          price: "$149",
          note: "/month",
          desc: "The full automation stack — WhatsApp AI, re-engagement, and CRM sync.",
          features: ["Everything in Essential", "WhatsApp AI Assistant", "Customer re-engagement automation", "Google Sheets & CRM sync", "Priority support", "Monthly performance review"],
        },
      ],
      guarantee: "If the AI agent doesn't capture a single lead in the first 30 days, we refund your full setup fee. No questions asked.",
    },
    testimonials: {
      label: "Real Results",
      title: "Already Working for Local Businesses",
      items: [
        { name: "Victor N.", co: "VN Detailing · Leominster, MA", text: "The AI books while I'm under a car. I get the notification and just show up. Best investment I've made for the business." },
        { name: "Sarah M.", co: "House Cleaning · Worcester, MA", text: "I used to lose customers on weekends when I couldn't answer. Now the AI handles everything and sends me a summary every morning." },
        { name: "Mike T.", co: "Landscaping · Fitchburg, MA", text: "My Google reviews went from 8 to 34 in two months. The QR code system is so simple but it actually works." },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Common Questions",
      items: [
        { q: "How long does setup take?", a: "Most clients go live within 5–7 business days after we receive your business information." },
        { q: "Do I need to know how to code?", a: "Not at all. We build and manage everything. You receive notifications and reply to customers — that's it." },
        { q: "What if I already have a website?", a: "We can add the AI agent to your existing site or build a new one from scratch. Your choice." },
        { q: "Can the AI speak Spanish or Portuguese?", a: "Yes. The AI detects the customer's language and responds in English, Spanish, or Portuguese automatically." },
        { q: "Is there a contract?", a: "No contracts. Month-to-month. Cancel anytime with 30 days notice." },
        { q: "What types of businesses does this work for?", a: "Any local service business: auto detailing, cleaning, landscaping, salons, HVAC, plumbing, pet grooming, and more." },
      ],
    },
    cta: {
      title: "Ready to Run on Autopilot?",
      sub: "Setup in under a week. Start capturing leads from day one.",
      btn1: "Get Started — $299 Setup",
      btn2: "Message Us on WhatsApp",
    },
    footer: { rights: "© 2025 JS Tech Corp. All rights reserved.", tag: "AI systems for local service businesses." },
  },
  pt: {
    nav: { services: "Soluções", pricing: "Preços", cta: "Começar" },
    hero: {
      badge: "Automação com IA para Negócios Locais",
      h1: "Seu Negócio,",
      h2: "Sempre Ligado.",
      sub: "Construímos sistemas de IA que capturam leads, agendam serviços e reativam clientes antigos — 24 horas, no piloto automático.",
      cta1: "Começar Agora",
      cta2: "Ver Exemplo Real",
    },
    stats: [
      { v: "40–60%", l: "dos leads perdidos por resposta lenta" },
      { v: "24/7", l: "IA trabalhando enquanto você descansa" },
      { v: "$2.000+", l: "custo mensal de uma recepcionista" },
      { v: "30 dias", l: "garantia de reembolso" },
    ],
    problem: {
      label: "O Problema",
      title: "Cada Mensagem Ignorada é um Cliente Perdido",
      body: "Quando alguém entra em contato e não recebe resposta em minutos, vai para a concorrência. Você está ocupado fazendo o trabalho — não olhando o celular. Essa lacuna está custando dinheiro real todos os dias.",
      highlight: "Uma recepcionista custa entre $2.000 e $3.500 por mês. Nós entregamos o mesmo resultado por uma fração disso.",
    },
    services: {
      label: "O Que Construímos",
      title: "Cinco Sistemas. Um Objetivo.",
      sub: "Cada sistema é desenvolvido para fechar uma lacuna específica no seu negócio.",
      items: [
        { icon: Bot, title: "Captador de Leads & Agendador Web 24/7", desc: "Um assistente de IA no seu site que conversa com cada visitante, responde perguntas e agenda serviços a qualquer hora — sem precisar de ninguém.", plan: "Essencial" },
        { icon: MessageCircle, title: "Assistente de IA no WhatsApp", desc: "Sua inteligência de agendamento no WhatsApp — onde a maioria dos clientes já está. Responde, qualifica e agenda direto na conversa.", plan: "Premium" },
        { icon: RefreshCw, title: "Automação de Reengajamento de Clientes", desc: "Manda mensagens automáticas para clientes antigos via WhatsApp com ofertas e lembretes que os trazem de volta e geram receita rápida.", plan: "Premium" },
        { icon: FileSpreadsheet, title: "Sincronização com Google Sheets & CRM", desc: "Cada lead e agendamento organizado automaticamente em planilha limpa e compartilhável. Sem entrada manual — seu CRM sempre atualizado.", plan: "Premium" },
        { icon: Star, title: "Booster de Avaliações Google via QR Code", desc: "Um cartão com QR Code personalizado que transforma clientes satisfeitos em avaliações 5 estrelas com um escaneamento. Mais avaliações = mais posição.", plan: "Essencial" },
      ],
    },
    pricing: {
      label: "Preços",
      title: "Preços Simples e Transparentes.",
      sub: "Um investimento de implementação. Escolha o plano mensal para a fase do seu negócio.",
      setup: {
        label: "Implementação",
        price: "$299",
        note: "pagamento único",
        desc: "Tudo construído do zero: site personalizado, agente de IA, todas as integrações, sistema de QR Code.",
        features: ["Design e desenvolvimento do site", "Configuração do agente de IA", "Todos os fluxos de automação", "Sistema de QR Code para avaliações", "Configuração de domínio e hospedagem", "Apresentação ao vivo na entrega"],
      },
      plans: [
        {
          label: "Essencial",
          price: "$99",
          note: "/mês",
          desc: "Capture leads e automatize agendamentos pelo seu site.",
          features: ["Hospedagem e manutenção do site", "Agente de IA para agendamento 24/7 (Web)", "QR Code para avaliações no Google", "Notificações por e-mail por agendamento", "Painel de agendamentos no Airtable", "Suporte contínuo"],
        },
        {
          label: "Premium",
          price: "$149",
          note: "/mês",
          desc: "A automação completa — IA no WhatsApp, reengajamento e CRM.",
          features: ["Tudo do Plano Essencial", "Assistente de IA no WhatsApp", "Automação de reengajamento de clientes", "Sincronização com Google Sheets & CRM", "Suporte prioritário", "Revisão mensal de desempenho"],
        },
      ],
      guarantee: "Se o agente de IA não capturar nenhum lead nos primeiros 30 dias, devolvemos integralmente a taxa de implementação. Sem burocracia.",
    },
    testimonials: {
      label: "Resultados Reais",
      title: "Já Funcionando em Negócios Locais",
      items: [
        { name: "Victor N.", co: "VN Detailing · Leominster, MA", text: "A IA agenda enquanto estou embaixo do carro. Recebo a notificação e só apareço. Melhor investimento que fiz para o negócio." },
        { name: "Sarah M.", co: "Limpeza Residencial · Worcester, MA", text: "Antes perdia clientes nos fins de semana quando não conseguia responder. Agora a IA cuida de tudo e me manda um resumo toda manhã." },
        { name: "Mike T.", co: "Paisagismo · Fitchburg, MA", text: "Minhas avaliações no Google foram de 8 para 34 em dois meses. O sistema de QR Code é simples mas funciona de verdade." },
      ],
    },
    faq: {
      label: "Dúvidas",
      title: "Perguntas Frequentes",
      items: [
        { q: "Quanto tempo leva a implementação?", a: "A maioria dos clientes entra no ar em 5 a 7 dias úteis após recebermos as informações do seu negócio." },
        { q: "Preciso saber programar?", a: "De jeito nenhum. Nós construímos e gerenciamos tudo. Você recebe as notificações e responde aos clientes — só isso." },
        { q: "E se eu já tiver um site?", a: "Podemos adicionar o agente de IA ao seu site atual ou construir um novo do zero. A escolha é sua." },
        { q: "A IA fala português?", a: "Sim. O agente detecta o idioma do cliente e responde em inglês, português ou espanhol automaticamente." },
        { q: "Tem contrato ou fidelidade?", a: "Sem contratos. Mês a mês. Cancele quando quiser com 30 dias de aviso." },
        { q: "Para que tipo de negócio funciona?", a: "Qualquer negócio local de serviço: estética automotiva, limpeza, paisagismo, salão, HVAC, hidráulica, pet shop e muito mais." },
      ],
    },
    cta: {
      title: "Pronto para Operar no Piloto Automático?",
      sub: "Implementação em menos de uma semana. Captando leads desde o primeiro dia.",
      btn1: "Começar — $299 de Implementação",
      btn2: "Falar no WhatsApp",
    },
    footer: { rights: "© 2025 JS Tech Corp. Todos os direitos reservados.", tag: "Sistemas de IA para negócios locais de serviço." },
  },
};

// ─── BUTTON ──────────────────────────────────────────────────────────────────
function Btn({ href, children, variant = "primary", className = "" }: {
  href: string; children: React.ReactNode; variant?: "primary" | "outline"; className?: string;
}) {
  return (
    <a href={href} className={`inline-flex items-center gap-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
      variant === "primary"
        ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 hover:from-blue-500 hover:to-violet-500 shadow-[0_0_24px_rgba(99,102,241,0.35)] hover:shadow-[0_0_36px_rgba(99,102,241,0.55)] hover:scale-[1.02] active:scale-[0.98]"
        : "border border-white/[0.15] text-white px-6 py-3 hover:border-white/30 hover:bg-white/[0.04]"
    } ${className}`}>
      {children}
    </a>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const c = t[lang];

  return (
    <main className="min-h-screen bg-[#0A0B0F] text-white overflow-x-hidden">

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-blue-600/[0.06] blur-[140px]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/[0.05] blur-[120px]" />
      </div>

      {/* ── NAV ── */}
      <nav className="relative z-50 sticky top-0 flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/[0.05] bg-[#0A0B0F]/85 backdrop-blur-md">
        <a href="#">
          <Logo size="md" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#solutions" className="hover:text-white transition-colors">{c.nav.services}</a>
          <a href="#pricing" className="hover:text-white transition-colors">{c.nav.pricing}</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(l => l === "en" ? "pt" : "en")}
            className="text-xs font-bold text-gray-400 hover:text-white border border-white/[0.10] hover:border-white/25 rounded-lg px-3 py-1.5 transition-all"
          >
            {lang === "en" ? "PT" : "EN"}
          </button>
          <Btn href={contactWA(lang)} className="hidden sm:inline-flex">{c.nav.cta}</Btn>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        className="relative z-10 px-5 pt-28 pb-24 text-center"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-blue-400 border border-blue-400/20 bg-blue-400/[0.06] rounded-full px-4 py-1.5 mb-8">
            <Sparkles size={10} />
            {c.hero.badge}
          </span>
          <h1 className="text-5xl sm:text-7xl font-black leading-[1.04] tracking-tight mb-6">
            {c.hero.h1}<br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-violet-400 bg-clip-text text-transparent">
              {c.hero.h2}
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">{c.hero.sub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Btn href={contactWA(lang)}>{c.hero.cta1} <ArrowRight size={15} /></Btn>
            <Btn href="https://vndetailing.com" variant="outline">{c.hero.cta2}</Btn>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative z-10 border-t border-b border-white/[0.05] bg-white/[0.012]">
        <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.05]">
          {c.stats.map((s, i) => (
            <div key={i} className="px-6 py-7 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">{s.v}</div>
              <div className="text-xs text-gray-500 leading-snug">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="relative z-10 px-5 py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400 mb-5">{c.problem.label}</p>
          <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">{c.problem.title}</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">{c.problem.body}</p>
          <div className="inline-block bg-blue-500/[0.08] border border-blue-500/20 rounded-2xl px-8 py-5">
            <p className="text-white font-semibold">{c.problem.highlight}</p>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="solutions" className="relative z-10 px-5 py-28 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400 mb-5">{c.services.label}</p>
            <h2 className="text-3xl sm:text-5xl font-black mb-4">{c.services.title}</h2>
            <p className="text-gray-400 text-lg">{c.services.sub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.services.items.map((item, i) => {
              const Icon = item.icon;
              const isPremium = item.plan !== "Essential" && item.plan !== "Essencial";
              return (
                <div key={i} className="group bg-[#0F1117] border border-white/[0.07] rounded-2xl p-7 hover:border-blue-500/20 hover:bg-[#11131C] transition-all duration-300 cursor-default">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/[0.08] border border-blue-500/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                      isPremium
                        ? "bg-violet-500/10 text-violet-400 border-violet-500/20"
                        : "bg-blue-500/[0.08] text-blue-400 border-blue-500/15"
                    }`}>
                      {item.plan}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="relative z-10 px-5 py-28 border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400 mb-5">{c.pricing.label}</p>
            <h2 className="text-3xl sm:text-5xl font-black mb-4">{c.pricing.title}</h2>
            <p className="text-gray-400 text-lg">{c.pricing.sub}</p>
          </div>

          {/* Setup card */}
          <div className="bg-[#0F1117] border border-white/[0.07] rounded-2xl p-8 mb-5">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-64 shrink-0">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-3">{c.pricing.setup.label}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-black text-white">{c.pricing.setup.price}</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{c.pricing.setup.note}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{c.pricing.setup.desc}</p>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {c.pricing.setup.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <Check size={14} className="text-blue-400 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Plan cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {c.pricing.plans.map((plan, i) => (
              <div key={i} className={`bg-[#0F1117] border rounded-2xl p-8 flex flex-col ${
                i === 1
                  ? "border-blue-500/35 shadow-[0_0_60px_rgba(99,102,241,0.08)]"
                  : "border-white/[0.07]"
              }`}>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-4">{plan.label}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-5xl font-black ${i === 1 ? "bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm">{plan.note}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2 mb-6 leading-relaxed">{plan.desc}</p>
                <div className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <Check size={14} className="text-blue-400 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <Btn href={contactWA(lang)} variant={i === 1 ? "primary" : "outline"} className="justify-center">
                  {lang === "en" ? "Get Started" : "Começar"} <ArrowRight size={14} />
                </Btn>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="border border-emerald-500/20 bg-emerald-500/[0.04] rounded-2xl px-8 py-6 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
              {lang === "en" ? "30-Day Money-Back Guarantee" : "Garantia de 30 Dias"}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">{c.pricing.guarantee}</p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="relative z-10 px-5 py-28 border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400 mb-5">{c.testimonials.label}</p>
            <h2 className="text-3xl sm:text-5xl font-black">{c.testimonials.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {c.testimonials.items.map((item, i) => (
              <div key={i} className="bg-[#0F1117] border border-white/[0.07] rounded-2xl p-7">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={13} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">"{item.text}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{item.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.co}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative z-10 px-5 py-28 border-t border-white/[0.05]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400 mb-5">{c.faq.label}</p>
            <h2 className="text-3xl sm:text-5xl font-black">{c.faq.title}</h2>
          </div>
          <div className="space-y-2">
            {c.faq.items.map((item, i) => (
              <div key={i} className="bg-[#0F1117] border border-white/[0.07] rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="text-sm font-semibold text-white">{item.q}</span>
                  <ChevronDown size={16} className={`text-gray-500 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-white/[0.05]">
                    <p className="text-sm text-gray-400 leading-relaxed pt-4">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative z-10 px-5 py-28 border-t border-white/[0.05]"
        style={{ backgroundImage: "radial-gradient(ellipse at center top, rgba(99,102,241,0.07) 0%, transparent 65%)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">{c.cta.title}</h2>
          <p className="text-gray-400 text-lg mb-10">{c.cta.sub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Btn href={contactWA(lang)}>{c.cta.btn1} <ArrowRight size={15} /></Btn>
            <Btn href={contactWA(lang)} variant="outline">{c.cta.btn2}</Btn>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-white/[0.05] px-5 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <p className="text-xs text-gray-600 text-center">{c.footer.tag}</p>
          <p className="text-xs text-gray-600">{c.footer.rights}</p>
        </div>
      </footer>

    </main>
  );
}
