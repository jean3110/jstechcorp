"use client";
import { useState } from "react";
import Image from "next/image";
import { Check, Bot, Star, Globe, Zap, Shield, ArrowRight, Sparkles } from "lucide-react";

type Lang = "en" | "pt";

const CONTACT_EMAIL = "contact@jstechcorp.com";
const CONTACT_WA = "https://wa.me/19785028075";

const t = {
  en: {
    nav: { services: "Services", pricing: "Pricing", cta: "Get Started" },
    hero: {
      badge: "AI Automation for Local Businesses",
      title1: "Stop Losing Customers",
      title2: "to Slow Replies.",
      sub: "We build AI booking agents, professional websites, and Google review systems for local service businesses — so you capture every lead, 24/7.",
      cta: "Start Today",
      secondary: "See how it works",
      stat1: "40–60%", stat1l: "leads lost to slow replies",
      stat2: "24/7", stat2l: "AI works while you sleep",
      stat3: "$299", stat3l: "one-time setup — no surprises",
    },
    problem: {
      label: "The Problem",
      title: "Every Missed Message is a Lost Customer",
      body: "When someone reaches out and doesn't hear back in minutes, they move on. You're busy doing the job — not watching your phone. That gap is costing you real money.",
      cost: "A receptionist costs $2,000–$3,500/month. Our AI delivers the same result for a fraction of that.",
      cards: [
        { stat: "78%", text: "of customers choose the first business that responds" },
        { stat: "5 min", text: "is the average window before a lead goes cold" },
        { stat: "24/7", text: "is when most inquiries happen — after hours" },
      ],
    },
    pillars: {
      label: "What You Get",
      title: "Three Systems. One Investment. Everything Done for You.",
      items: [
        {
          icon: Globe, number: "01",
          title: "Professional Website",
          body: "Built to convert visitors into booked appointments. Fast, mobile-first, optimized for local Google search.",
          features: ["Custom design aligned to your brand", "Services, pricing & FAQ sections", "Before & after photo gallery", "Hosted and maintained for you"],
        },
        {
          icon: Bot, number: "02", badge: "Most Popular",
          title: "AI Booking Agent",
          body: "An AI that lives on your site, answers every question, and books appointments day and night — no human needed.",
          features: ["Instant replies, every hour of the day", "Collects name, date, time, address & phone", "Instant email alert for every booking", "Daily 8AM digest of pending appointments"],
        },
        {
          icon: Star, number: "03",
          title: "Google Review System",
          body: "A QR code that turns every happy customer into a 5-star review on autopilot. Hand them a card — they scan, they review.",
          features: ["QR code linked to your Google profile", "Custom card design ready to print", "More reviews = higher Google Maps rank", "Organic new customers, compounding over time"],
        },
      ],
    },
    case: {
      label: "Live Example",
      title: "Built for VN Detailing",
      location: "Leominster, MA",
      body: "We deployed the complete system for VN Detailing — a mobile auto detailing business. The AI handles every inquiry and books appointments 24/7. The owner gets an instant email for every booking.",
      link: "See the live site",
      url: "https://vndetailing.com",
      features: ["Site live at vndetailing.com", "AI agent books around the clock", "Instant owner notification per booking", "Daily summary of pending appointments"],
      chat: [
        { r: "assistant", m: "Hi! I'm the VN Detailing assistant. What can I help you with today?" },
        { r: "user", m: "How much is a full detail for an SUV?" },
        { r: "assistant", m: "Full Detail for an SUV is $200 — complete exterior + interior. Want to book a date?" },
      ],
    },
    pricing: {
      label: "Pricing",
      title: "One Price. Everything Included.",
      sub: "No contracts. No hidden fees. Cancel anytime.",
      setup: "Setup & Build", setup_price: "$299", setup_note: "one-time fee",
      monthly: "Automation & Support", monthly_price: "$99", monthly_note: "per month",
      includes: "Monthly covers: AI hosting, automation workflows, database, website hosting & ongoing support.",
      features: ["Professional website", "AI booking agent (24/7)", "Google Review QR system", "Instant email notifications", "Daily appointment digest", "Ongoing hosting & support"],
    },
    guarantee: {
      title: "30-Day Money-Back Guarantee",
      body: "If the AI agent doesn't capture a single lead in 30 days, we refund your full setup fee. No questions.",
    },
    who: {
      label: "Who It's For",
      title: "Built for Any Local Service Business",
      items: ["Auto Detailing & Car Wash", "House Cleaning", "Landscaping & Lawn Care", "Beauty Salons & Barbershops", "HVAC & Plumbing", "Pet Grooming", "Pressure Washing", "Handyman Services"],
    },
    cta: {
      title: "Ready to Capture Every Lead?",
      body: "Get your system running in days, not weeks.",
      btn: "Start Today",
      email_label: "Or email us:",
    },
    footer: { tagline: "AI systems for local service businesses." },
  },
  pt: {
    nav: { services: "Serviços", pricing: "Preços", cta: "Começar" },
    hero: {
      badge: "Automação com IA para Negócios Locais",
      title1: "Pare de Perder Clientes",
      title2: "por Falta de Resposta.",
      sub: "Criamos agentes de IA para agendamento, sites profissionais e sistemas de avaliação no Google para negócios locais — para você capturar todo cliente, 24/7.",
      cta: "Começar Agora",
      secondary: "Ver como funciona",
      stat1: "40–60%", stat1l: "dos leads perdidos por demora",
      stat2: "24/7", stat2l: "a IA trabalha enquanto você dorme",
      stat3: "$299", stat3l: "implementação única — sem surpresas",
    },
    problem: {
      label: "O Problema",
      title: "Toda Mensagem sem Resposta é um Cliente Perdido",
      body: "Quando alguém entra em contato e não recebe resposta em minutos, vai para o próximo. Você está ocupado fazendo o serviço — não vigiando o celular. Essa lacuna custa dinheiro real.",
      cost: "Uma recepcionista custa entre $2.000 e $3.500 por mês. Nossa IA entrega o mesmo resultado por uma fração disso.",
      cards: [
        { stat: "78%", text: "dos clientes escolhem o primeiro negócio que responde" },
        { stat: "5 min", text: "é o tempo médio antes de um lead esfriar" },
        { stat: "24/7", text: "é quando a maioria das solicitações chega — fora do horário" },
      ],
    },
    pillars: {
      label: "O Que Você Recebe",
      title: "Três Sistemas. Um Investimento. Tudo Feito por Nós.",
      items: [
        {
          icon: Globe, number: "01",
          title: "Site Profissional",
          body: "Desenvolvido para transformar visitantes em agendamentos confirmados. Rápido, mobile-first e otimizado para o Google local.",
          features: ["Design personalizado com sua identidade", "Seções de serviços, preços e perguntas frequentes", "Galeria de fotos antes e depois", "Hospedado e mantido por nós"],
        },
        {
          icon: Bot, number: "02", badge: "Mais Popular",
          title: "Agente de IA para Agendamento",
          body: "Uma IA que vive no seu site, responde toda pergunta e agenda atendimentos de dia ou de noite — sem precisar de ninguém.",
          features: ["Respostas instantâneas a qualquer hora", "Coleta nome, data, horário, endereço e telefone", "Alerta por email a cada agendamento", "Resumo diário às 8h com pendências"],
        },
        {
          icon: Star, number: "03",
          title: "Sistema de Avaliações Google",
          body: "Um QR code que transforma cada cliente satisfeito em uma avaliação 5 estrelas no piloto automático. Dê o cartão — eles escaneiam e avaliam.",
          features: ["QR code vinculado ao seu perfil Google", "Design do cartão pronto para impressão", "Mais reviews = posição mais alta no Maps", "Novos clientes orgânicos ao longo do tempo"],
        },
      ],
    },
    case: {
      label: "Exemplo Real",
      title: "Construído para VN Detailing",
      location: "Leominster, MA",
      body: "Implantamos o sistema completo para a VN Detailing, negócio de estética automotiva mobile. A IA cuida de cada contato e agenda 24/7. O dono recebe alerta por email a cada agendamento.",
      link: "Ver o site ao vivo",
      url: "https://vndetailing.com",
      features: ["Site no ar em vndetailing.com", "Agente de IA agendando o tempo todo", "Notificação imediata por agendamento", "Resumo diário de agendamentos pendentes"],
      chat: [
        { r: "assistant", m: "Olá! Sou o assistente da VN Detailing. Em que posso ajudar?" },
        { r: "user", m: "Quanto custa um full detail para SUV?" },
        { r: "assistant", m: "Full Detail para SUV é $200 — exterior e interior completos. Quer agendar uma data?" },
      ],
    },
    pricing: {
      label: "Preços",
      title: "Um Preço. Tudo Incluído.",
      sub: "Sem fidelidade. Sem taxas escondidas. Cancele quando quiser.",
      setup: "Implementação", setup_price: "$299", setup_note: "pagamento único",
      monthly: "Automação e Suporte", monthly_price: "$99", monthly_note: "por mês",
      includes: "Mensalidade cobre: IA, automações, banco de dados, hospedagem do site e suporte técnico contínuo.",
      features: ["Site profissional", "Agente de IA (24/7)", "Sistema de QR Code para reviews", "Notificações por email", "Resumo diário de agendamentos", "Hospedagem e suporte contínuos"],
    },
    guarantee: {
      title: "Garantia de 30 Dias",
      body: "Se o agente de IA não capturar nenhum lead em 30 dias, devolvemos integralmente a taxa de implementação. Sem burocracia.",
    },
    who: {
      label: "Para Quem É",
      title: "Para Qualquer Negócio Local de Serviço",
      items: ["Estética Automotiva", "Limpeza Residencial", "Paisagismo e Jardinagem", "Salões e Barbearias", "Elétrica e Hidráulica", "Pet Shop", "Lavagem a Pressão", "Serviços Gerais"],
    },
    cta: {
      title: "Pronto para Capturar Todo Cliente?",
      body: "Seu sistema entra no ar em dias, não semanas.",
      btn: "Começar Agora",
      email_label: "Ou envie um email:",
    },
    footer: { tagline: "Sistemas com IA para negócios locais de serviço." },
  },
};

function GradientBtn({ label, href, secondary = false, className = "" }: { label: string; href: string; secondary?: boolean; className?: string }) {
  if (secondary) {
    return (
      <a href={href} className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all ${className}`}>
        {label} <ArrowRight className="w-4 h-4" />
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-7 py-4 text-white font-bold text-base shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ${className}`}>
      {label} <Zap className="w-4 h-4" />
    </a>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const c = t[lang];

  return (
    <div className="bg-[#04081A] text-white font-sans overflow-x-hidden">

      {/* Dot grid background */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#04081A]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 h-16">
          <a href="/">
            <Image src="/logo-principal.svg" alt="JS Tech Corp" width={180} height={44} className="h-10 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">{c.nav.services}</a>
            <a href="#pricing" className="hover:text-white transition-colors">{c.nav.pricing}</a>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === "en" ? "pt" : "en")}
              className="text-xs font-bold border border-white/10 rounded-full px-3 py-1.5 text-gray-400 hover:text-white hover:border-white/20 transition-all bg-white/[0.03]">
              {lang === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
            </button>
            <a href={CONTACT_WA} target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2 text-white font-semibold text-sm hover:opacity-90 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              {c.nav.cta}
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-dvh px-5 pt-32 pb-24 text-center z-10">
        {/* Gradient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-indigo-600/20 via-violet-600/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold text-indigo-300 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            {c.hero.badge}
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05]">
            <span className="text-white">{c.hero.title1}</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {c.hero.title2}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">{c.hero.sub}</p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <GradientBtn label={c.hero.cta} href={CONTACT_WA} />
            <GradientBtn label={c.hero.secondary} href="#services" secondary />
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-lg">
            {[
              { val: c.hero.stat1, label: c.hero.stat1l },
              { val: c.hero.stat2, label: c.hero.stat2l },
              { val: c.hero.stat3, label: c.hero.stat3l },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">{s.val}</span>
                <span className="text-[11px] text-gray-500 text-center leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative z-10 px-5 py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">{c.problem.label}</p>
          <h2 className="text-center text-2xl sm:text-4xl font-black mb-4 max-w-2xl mx-auto leading-tight">{c.problem.title}</h2>
          <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">{c.problem.body}</p>

          {/* Stat cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {c.problem.cards.map((card, i) => (
              <div key={i} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 text-center hover:border-indigo-500/30 transition-colors">
                <p className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">{card.stat}</p>
                <p className="text-sm text-gray-400 leading-snug">{card.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm font-medium text-white border border-white/[0.08] rounded-2xl px-6 py-4 bg-white/[0.03] max-w-lg mx-auto backdrop-blur-sm">
            {c.problem.cost}
          </p>
        </div>
      </section>

      {/* 3 PILLARS */}
      <section id="services" className="relative z-10 px-5 py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">{c.pillars.label}</p>
          <h2 className="text-center text-2xl sm:text-4xl font-black mb-14 max-w-2xl mx-auto leading-tight">{c.pillars.title}</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {c.pillars.items.map((item, i) => {
              const Icon = item.icon;
              const isPopular = "badge" in item && item.badge;
              return (
                <div key={i} className={`relative rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 group cursor-default
                  ${isPopular
                    ? "border border-indigo-500/50 bg-gradient-to-b from-indigo-500/10 to-violet-500/5 shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:shadow-[0_0_60px_rgba(99,102,241,0.25)]"
                    : "border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:border-indigo-500/30 hover:bg-white/[0.05]"
                  }`}>
                  {isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-4 py-1 rounded-full whitespace-nowrap">
                      {item.badge}
                    </span>
                  )}

                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isPopular ? "bg-indigo-500/20 border border-indigo-500/30" : "bg-white/[0.05] border border-white/[0.08]"}`}>
                      <Icon className={`w-5 h-5 ${isPopular ? "text-indigo-300" : "text-gray-400 group-hover:text-indigo-400 transition-colors"}`} />
                    </div>
                    <span className="text-3xl font-black text-white/10">{item.number}</span>
                  </div>

                  <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>

                  <div className="h-px bg-white/[0.06]" />

                  <ul className="flex flex-col gap-2.5">
                    {item.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="relative z-10 px-5 py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">{c.case.label}</p>
          <h2 className="text-center text-2xl sm:text-4xl font-black mb-2 leading-tight">{c.case.title}</h2>
          <p className="text-center text-gray-500 text-sm mb-12">{c.case.location}</p>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-7 flex flex-col gap-5">
              <p className="text-gray-400 leading-relaxed text-sm">{c.case.body}</p>
              <ul className="flex flex-col gap-3">
                {c.case.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>
              <a href={c.case.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors">
                {c.case.link} <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Chat mockup */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#07102A] p-5 flex flex-col gap-3">
              {/* Top bar */}
              <div className="flex items-center gap-3 pb-3 border-b border-white/[0.06]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-black shrink-0">VN</div>
                <div>
                  <p className="text-sm font-semibold">VN Detailing Assistant</p>
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />Online • Powered by JS Tech Corp
                  </p>
                </div>
              </div>
              {c.case.chat.map((msg, i) => (
                <div key={i} className={`flex ${msg.r === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`rounded-2xl px-3.5 py-2.5 max-w-[85%] text-sm leading-relaxed
                    ${msg.r === "user"
                      ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-tr-sm"
                      : "bg-white/[0.07] border border-white/[0.06] text-gray-200 rounded-tl-sm"
                    }`}>
                    {msg.m}
                  </div>
                </div>
              ))}
              <div className="mt-1 flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-xl px-3 py-2.5">
                <input disabled className="flex-1 bg-transparent text-xs text-gray-500 outline-none" placeholder={lang === "en" ? "Type a message..." : "Digite uma mensagem..."} />
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative z-10 px-5 py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">{c.pricing.label}</p>
          <h2 className="text-center text-2xl sm:text-4xl font-black mb-3 leading-tight">{c.pricing.title}</h2>
          <p className="text-center text-gray-400 mb-12">{c.pricing.sub}</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">{c.pricing.setup}</p>
              <p className="text-5xl font-black text-white mb-1">{c.pricing.setup_price}</p>
              <p className="text-sm text-gray-500">{c.pricing.setup_note}</p>
            </div>
            <div className="rounded-2xl border border-indigo-500/40 bg-gradient-to-b from-indigo-500/10 to-violet-500/5 p-8 shadow-[0_0_40px_rgba(99,102,241,0.12)]">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">{c.pricing.monthly}</p>
              <p className="text-5xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-1">{c.pricing.monthly_price}</p>
              <p className="text-sm text-gray-500">{c.pricing.monthly_note}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6">
            <p className="text-xs text-gray-500 mb-5 leading-relaxed">{c.pricing.includes}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {c.pricing.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-sm text-gray-300">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="relative z-10 px-5 py-14 border-t border-white/[0.06]">
        <div className="mx-auto max-w-xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mx-auto mb-5">
            <Shield className="w-7 h-7 text-emerald-400" />
          </div>
          <h3 className="text-xl font-bold mb-3">{c.guarantee.title}</h3>
          <p className="text-gray-400 leading-relaxed text-sm">{c.guarantee.body}</p>
        </div>
      </section>

      {/* WHO */}
      <section className="relative z-10 px-5 py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">{c.who.label}</p>
          <h2 className="text-2xl sm:text-4xl font-black mb-10 leading-tight">{c.who.title}</h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {c.who.items.map((item, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-sm text-gray-300 font-medium backdrop-blur-sm hover:border-indigo-500/30 hover:text-white transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 px-5 py-24 border-t border-white/[0.06] overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-xl text-center">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">{c.cta.title}</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">{c.cta.body}</p>
          <GradientBtn label={c.cta.btn} href={CONTACT_WA} className="mb-5" />
          <p className="text-sm text-gray-500 mt-4">
            {c.cta.email_label}{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-400 hover:text-indigo-300 transition-colors">{CONTACT_EMAIL}</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/[0.06] bg-[#03060F] px-5 py-10">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <Image src="/logo-principal.svg" alt="JS Tech Corp" width={160} height={40} className="h-9 w-auto mb-1.5" />
            <p className="text-xs text-gray-600">{c.footer.tagline}</p>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-gray-600 hover:text-gray-400 transition-colors">{CONTACT_EMAIL}</a>
        </div>
        <div className="mx-auto max-w-5xl mt-8 border-t border-white/[0.04] pt-6 text-center text-xs text-gray-700">
          © {new Date().getFullYear()} JS Tech Corp. {lang === "en" ? "All rights reserved." : "Todos os direitos reservados."}
        </div>
      </footer>

    </div>
  );
}
