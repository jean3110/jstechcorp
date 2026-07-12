"use client";
import { useState } from "react";
import { Check, Bot, Star, ArrowRight, MessageCircle, RefreshCw, FileSpreadsheet, ChevronDown, Shield } from "lucide-react";
import Logo from "@/components/Logo";

type Lang = "en" | "pt";

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
    nav: { services: "Solutions", pricing: "Pricing", contact: "Contact", cta: "Get Started" },
    hero: {
      badge: "AI Automation for Local Businesses",
      h1: "Stop Losing Customers",
      h2: "to Slow Replies.",
      sub: "We build AI systems that capture leads, book appointments, and bring back past customers. They work around the clock, so you never miss another one.",
      cta1: "Get Started Today",
      cta2: "See a Live Example",
    },
    stats: [
      { v: "40-60%", l: "of leads lost to slow replies" },
      { v: "24/7", l: "AI works while you sleep" },
      { v: "$2,000+", l: "monthly cost of a receptionist" },
      { v: "30 days", l: "money-back guarantee" },
    ],
    problem: {
      label: "The Problem",
      title: "Every Missed Message Is a Lost Customer",
      body: "When someone reaches out and doesn't hear back in minutes, they move on to the next business on the list. You're busy doing the actual work, not watching your phone. That gap costs you real money every single day.",
      highlight: "A receptionist costs $2,000 to $3,500 a month. Our AI does the same job for a fraction of that.",
    },
    services: {
      label: "What We Build",
      title: "Five systems that turn missed messages into booked jobs.",
      sub: "Each one closes a specific spot where you're losing business.",
      items: [
        { icon: Bot, title: "24/7 Web Lead Capture & Scheduler", desc: "An AI assistant on your website that greets every visitor, answers their questions, and books appointments at any hour, with no one on standby.", plan: "Essential" },
        { icon: MessageCircle, title: "WhatsApp AI Assistant", desc: "Booking that lives right inside WhatsApp, where most of your customers already are. It replies, qualifies, and books straight in the chat.", plan: "Premium" },
        { icon: RefreshCw, title: "Customer Re-engagement Automation", desc: "Automatically follows up with past customers on WhatsApp, sending offers and reminders that get them booking again.", plan: "Premium" },
        { icon: FileSpreadsheet, title: "Google Sheets & CRM Sync", desc: "Every lead and booking lands in a clean, shareable spreadsheet on its own. No manual entry, and your pipeline stays current.", plan: "Premium" },
        { icon: Star, title: "Google Review Booster via QR Code", desc: "A custom QR code card that turns happy customers into 5-star reviews with a single scan. More reviews mean you rank higher locally.", plan: "Essential" },
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
        desc: "We build everything from scratch: your website, the AI agent, every integration, and the QR code system. You go live in 5 to 7 days.",
        features: ["Custom website design & development", "AI booking agent configuration", "All automation workflows", "Google Review QR Code system", "Domain & hosting setup", "Live handoff walkthrough"],
      },
      plans: [
        {
          label: "Essential",
          price: "$99",
          note: "/month",
          desc: "Capture leads and automate bookings from your website.",
          features: ["Website hosting & maintenance", "24/7 Web AI Booking Agent", "Google Review QR Code", "Email notifications per booking", "Airtable booking dashboard", "Ongoing support"],
          highlight: false,
        },
        {
          label: "Premium",
          price: "$149",
          note: "/month",
          desc: "Everything you need, including WhatsApp AI, re-engagement, and CRM sync.",
          features: ["Everything in Essential", "WhatsApp AI Assistant", "Customer re-engagement automation", "Google Sheets & CRM sync", "Priority support", "Monthly performance review"],
          highlight: true,
        },
      ],
      guarantee: "If the AI agent doesn't capture a single lead in the first 30 days, we refund your full setup fee. No questions asked.",
    },
    faq: {
      label: "FAQ",
      title: "Common Questions",
      items: [
        { q: "How long does setup take?", a: "Most clients go live within 5 to 7 business days after we receive your business information." },
        { q: "Do I need to know how to code?", a: "Not at all. We build and manage everything. You get the notifications and reply to customers. That's it." },
        { q: "What if I already have a website?", a: "We can add the AI agent to your existing site or build a new one from scratch. Your choice." },
        { q: "Can the AI speak Spanish or Portuguese?", a: "Yes. The AI detects the customer's language and responds in English, Spanish, or Portuguese automatically." },
        { q: "Is there a contract?", a: "No contracts. Month-to-month. Cancel anytime with 30 days notice." },
        { q: "What types of businesses does this work for?", a: "Any local service business: auto detailing, cleaning, landscaping, salons, HVAC, plumbing, pet grooming, and more." },
      ],
    },
    cta: {
      title: "Ready to Run on Autopilot?",
      sub: "Setup in under a week. Start capturing leads from day one.",
      btn1: "Get Started for $299",
      btn2: "Message Us on WhatsApp",
    },
    footer: { rights: "© 2026 JS Tech Corp. All rights reserved.", tag: "AI systems for local service businesses." },
  },
  pt: {
    nav: { services: "Soluções", pricing: "Preços", contact: "Contato", cta: "Começar" },
    hero: {
      badge: "Automação com IA para Negócios Locais",
      h1: "Pare de Perder Clientes",
      h2: "por Resposta Lenta.",
      sub: "Construímos sistemas de IA que capturam leads, agendam serviços e trazem clientes antigos de volta. Funcionam a qualquer hora, para você nunca mais perder um cliente.",
      cta1: "Começar Agora",
      cta2: "Ver Exemplo Real",
    },
    stats: [
      { v: "40-60%", l: "dos leads perdidos por resposta lenta" },
      { v: "24/7", l: "IA trabalhando enquanto você descansa" },
      { v: "$2.000+", l: "custo mensal de uma recepcionista" },
      { v: "30 dias", l: "garantia de reembolso" },
    ],
    problem: {
      label: "O Problema",
      title: "Cada Mensagem Ignorada é um Cliente Perdido",
      body: "Quando alguém entra em contato e não recebe resposta em minutos, vai para o próximo negócio da lista. Você está ocupado fazendo o trabalho, não olhando o celular. Essa lacuna custa dinheiro real todos os dias.",
      highlight: "Uma recepcionista custa entre $2.000 e $3.500 por mês. Nós entregamos o mesmo resultado por uma fração disso.",
    },
    services: {
      label: "O Que Construímos",
      title: "Cinco sistemas que transformam mensagens perdidas em serviços agendados.",
      sub: "Cada um resolve um ponto específico onde você está perdendo negócio.",
      items: [
        { icon: Bot, title: "Captador de Leads & Agendador Web 24/7", desc: "Um assistente de IA no seu site que atende cada visitante, responde as perguntas e agenda serviços a qualquer hora, sem precisar de ninguém de plantão.", plan: "Essencial" },
        { icon: MessageCircle, title: "Assistente de IA no WhatsApp", desc: "Agendamento dentro do próprio WhatsApp, onde a maioria dos clientes já está. Ele responde, qualifica e agenda direto na conversa.", plan: "Premium" },
        { icon: RefreshCw, title: "Automação de Reengajamento de Clientes", desc: "Manda mensagens automáticas para clientes antigos no WhatsApp, com ofertas e lembretes que os trazem de volta para agendar de novo.", plan: "Premium" },
        { icon: FileSpreadsheet, title: "Sincronização com Google Sheets & CRM", desc: "Cada lead e agendamento cai sozinho em uma planilha limpa e compartilhável. Sem digitação manual, e seu CRM sempre atualizado.", plan: "Premium" },
        { icon: Star, title: "Booster de Avaliações Google via QR Code", desc: "Um cartão com QR Code personalizado que transforma clientes satisfeitos em avaliações 5 estrelas com um escaneamento. Mais avaliações significam mais posição no Google.", plan: "Essencial" },
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
        desc: "Construímos tudo do zero: o site, o agente de IA, todas as integrações e o sistema de QR Code. Você entra no ar em 5 a 7 dias.",
        features: ["Design e desenvolvimento do site", "Configuração do agente de IA", "Todos os fluxos de automação", "Sistema de QR Code para avaliações", "Configuração de domínio e hospedagem", "Apresentação ao vivo na entrega"],
      },
      plans: [
        {
          label: "Essencial",
          price: "$99",
          note: "/mês",
          desc: "Capture leads e automatize agendamentos pelo seu site.",
          features: ["Hospedagem e manutenção do site", "Agente de IA para agendamento 24/7 (Web)", "QR Code para avaliações no Google", "Notificações por e-mail por agendamento", "Painel de agendamentos no Airtable", "Suporte contínuo"],
          highlight: false,
        },
        {
          label: "Premium",
          price: "$149",
          note: "/mês",
          desc: "Tudo o que você precisa, incluindo IA no WhatsApp, reengajamento e CRM.",
          features: ["Tudo do Plano Essencial", "Assistente de IA no WhatsApp", "Automação de reengajamento de clientes", "Sincronização com Google Sheets & CRM", "Suporte prioritário", "Revisão mensal de desempenho"],
          highlight: true,
        },
      ],
      guarantee: "Se o agente de IA não capturar nenhum lead nos primeiros 30 dias, devolvemos integralmente a taxa de implementação. Sem burocracia.",
    },
    faq: {
      label: "Dúvidas",
      title: "Perguntas Frequentes",
      items: [
        { q: "Quanto tempo leva a implementação?", a: "A maioria dos clientes entra no ar em 5 a 7 dias úteis após recebermos as informações do seu negócio." },
        { q: "Preciso saber programar?", a: "De jeito nenhum. Nós construímos e gerenciamos tudo. Você recebe as notificações e responde aos clientes. Só isso." },
        { q: "E se eu já tiver um site?", a: "Podemos adicionar o agente de IA ao seu site atual ou construir um novo do zero. A escolha é sua." },
        { q: "A IA fala português?", a: "Sim. O agente detecta o idioma do cliente e responde em inglês, português ou espanhol automaticamente." },
        { q: "Tem contrato ou fidelidade?", a: "Sem contratos. Mês a mês. Cancele quando quiser com 30 dias de aviso." },
        { q: "Para que tipo de negócio funciona?", a: "Qualquer negócio local de serviço: estética automotiva, limpeza, paisagismo, salão, HVAC, hidráulica, pet shop e muito mais." },
      ],
    },
    cta: {
      title: "Pronto para Operar no Piloto Automático?",
      sub: "Implementação em menos de uma semana. Captando leads desde o primeiro dia.",
      btn1: "Começar por $299",
      btn2: "Falar no WhatsApp",
    },
    footer: { rights: "© 2026 JS Tech Corp. Todos os direitos reservados.", tag: "Sistemas de IA para negócios locais de serviço." },
  },
};

// ─── BUTTON ──────────────────────────────────────────────────────────────────
function Btn({ href, children, variant = "primary", className = "" }: {
  href: string; children: React.ReactNode; variant?: "primary" | "outline" | "white"; className?: string;
}) {
  return (
    <a href={href} className={`inline-flex items-center gap-2 rounded-xl font-semibold text-sm transition-all duration-150 ${
      variant === "primary"
        ? "bg-[#4A6CF7] text-white px-6 py-3 hover:bg-[#3D5CDB] shadow-sm hover:shadow-md"
        : variant === "white"
        ? "bg-white text-[#4A6CF7] px-6 py-3 hover:bg-gray-50 shadow-sm"
        : "border border-gray-200 text-gray-700 px-6 py-3 hover:bg-gray-50 hover:border-gray-300"
    } ${className}`}>
      {children}
    </a>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const c = t[lang];

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 flex items-center justify-between px-5 sm:px-8 py-4">
        <a href="#"><Logo size="md" variant="light" /></a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <a href="#solutions" className="hover:text-gray-900 transition-colors">{c.nav.services}</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">{c.nav.pricing}</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gray-900 transition-colors">{c.nav.contact}</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(l => l === "en" ? "pt" : "en")}
            className="text-xs font-bold text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-lg px-3 py-1.5 transition-all"
          >
            {lang === "en" ? "PT" : "EN"}
          </button>
          <Btn href={contactWA(lang)} className="hidden sm:inline-flex">{c.nav.cta}</Btn>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-white px-5 pt-24 pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            {c.hero.badge}
          </span>
          <h1 className="text-5xl sm:text-7xl font-black text-gray-900 leading-[1.04] tracking-tight mb-6">
            {c.hero.h1}<br />
            <span className="text-[#4A6CF7]">{c.hero.h2}</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">{c.hero.sub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Btn href={contactWA(lang)}>{c.hero.cta1} <ArrowRight size={15} /></Btn>
            <Btn href="https://vndetailing.com" variant="outline">{c.hero.cta2}</Btn>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-t border-b border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {c.stats.map((s, i) => (
            <div key={i} className="px-6 py-8 text-center">
              <div className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">{s.v}</div>
              <div className="text-xs text-gray-400 leading-snug">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="bg-white px-5 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-5">{c.problem.label}</p>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">{c.problem.title}</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">{c.problem.body}</p>
          <div className="inline-block bg-blue-50 border border-blue-100 rounded-2xl px-8 py-5">
            <p className="text-gray-800 font-semibold">{c.problem.highlight}</p>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="solutions" className="bg-gray-50 px-5 py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-5">{c.services.label}</p>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">{c.services.title}</h2>
            <p className="text-gray-500 text-lg">{c.services.sub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.services.items.map((item, i) => {
              const Icon = item.icon;
              const isPremium = item.plan !== "Essential" && item.plan !== "Essencial";
              return (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-md transition-all duration-300 cursor-default">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                      isPremium ? "bg-violet-50 text-violet-600" : "bg-blue-50 text-blue-600"
                    }`}>
                      {item.plan}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="bg-white px-5 py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-5">{c.pricing.label}</p>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">{c.pricing.title}</h2>
            <p className="text-gray-500 text-lg">{c.pricing.sub}</p>
          </div>

          {/* Setup */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-5">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-64 shrink-0">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{c.pricing.setup.label}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-black text-gray-900">{c.pricing.setup.price}</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{c.pricing.setup.note}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{c.pricing.setup.desc}</p>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {c.pricing.setup.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Check size={14} className="text-blue-500 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Plans */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {c.pricing.plans.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 flex flex-col border ${
                plan.highlight
                  ? "bg-[#4A6CF7] border-[#4A6CF7] text-white shadow-lg shadow-blue-100"
                  : "bg-white border-gray-100"
              }`}>
                <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${plan.highlight ? "text-blue-100" : "text-gray-400"}`}>
                  {plan.label}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-5xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>{plan.note}</span>
                </div>
                <p className={`text-sm mt-2 mb-6 leading-relaxed ${plan.highlight ? "text-blue-100" : "text-gray-500"}`}>{plan.desc}</p>
                <div className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2.5 text-sm">
                      <Check size={14} className={`shrink-0 ${plan.highlight ? "text-blue-200" : "text-blue-500"}`} />
                      <span className={plan.highlight ? "text-blue-50" : "text-gray-600"}>{f}</span>
                    </div>
                  ))}
                </div>
                <Btn
                  href={contactWA(lang)}
                  variant={plan.highlight ? "white" : "outline"}
                  className="justify-center"
                >
                  {lang === "en" ? "Get Started" : "Começar"} <ArrowRight size={14} />
                </Btn>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="border border-emerald-100 bg-emerald-50 rounded-2xl px-8 py-6 flex items-start gap-4">
            <Shield size={20} className="text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-emerald-700 mb-1">
                {lang === "en" ? "30-Day Money-Back Guarantee" : "Garantia de 30 Dias"}
              </p>
              <p className="text-sm text-emerald-700/70 leading-relaxed">{c.pricing.guarantee}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white px-5 py-24 border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-5">{c.faq.label}</p>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900">{c.faq.title}</h2>
          </div>
          <div className="space-y-2">
            {c.faq.items.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-gray-900">{item.q}</span>
                  <ChevronDown size={16} className={`text-gray-400 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <p className="text-sm text-gray-500 leading-relaxed pt-4">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#4A6CF7] px-5 py-24 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">{c.cta.title}</h2>
          <p className="text-blue-100 text-lg mb-10">{c.cta.sub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Btn href={contactWA(lang)} variant="white">{c.cta.btn1} <ArrowRight size={15} /></Btn>
            <Btn href={contactWA(lang)} className="border border-white/30 text-white hover:bg-white/10">
              {c.cta.btn2}
            </Btn>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 px-5 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo size="sm" variant="dark" />
          <p className="text-xs text-gray-500 text-center">{c.footer.tag}</p>
          <p className="text-xs text-gray-500">{c.footer.rights}</p>
        </div>
      </footer>

    </main>
  );
}
