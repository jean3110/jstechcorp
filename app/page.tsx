"use client";
import { useState } from "react";
import { Check, Bot, Star, Globe, Zap, Shield } from "lucide-react";

type Lang = "en" | "pt";

const CONTACT_EMAIL = "contact@jstechcorp.com";
const CONTACT_WA = "https://wa.me/15085804043";

const t = {
  en: {
    nav: { services: "Services", pricing: "Pricing", cta: "Get Started" },
    hero: {
      badge: "AI for Local Businesses",
      title1: "Stop Losing Customers to Slow Replies.",
      title2: "Your Business, Always Open.",
      sub: "We build AI-powered booking systems, professional websites, and Google review automation for local service businesses — so you never miss a lead again.",
      cta: "Get Started",
      sub_cta: "or email us at contact@jstechcorp.com",
      stat1: "40–60%", stat1l: "of leads lost to slow replies",
      stat2: "24/7", stat2l: "AI answers while you work",
      stat3: "30 days", stat3l: "money-back guarantee",
    },
    problem: {
      label: "The Problem",
      title: "Most Local Businesses Lose Half Their Customers Before Saying Hello",
      body: "A potential customer finds your business, sends a message — and moves on to the next option if they don't hear back in minutes. You're on the job, not checking your phone. That customer is gone.",
      cost: "Hiring a receptionist costs $2,000–$3,500/month. We deliver the same result for a fraction of that.",
    },
    pillars: {
      label: "What You Get",
      title: "Three Systems. One Price. All Done for You.",
      items: [
        {
          icon: Globe, number: "01",
          title: "High-Converting Website",
          body: "A professionally designed site built to turn visitors into booked appointments. Fast, mobile-first, and optimized for local Google search.",
          features: ["Custom design aligned to your brand", "Services, pricing & FAQ sections", "Before & after photo gallery", "Fully hosted and maintained"],
        },
        {
          icon: Bot, number: "02", badge: "Most Popular",
          title: "AI Appointment Agent — 24/7",
          body: "An AI assistant on your website that engages every visitor, answers questions about your services, and books appointments day or night.",
          features: ["Instant replies, 24 hours a day", "Collects name, date, time, phone & address", "Email notification with every new booking", "Daily 8AM summary of pending appointments"],
        },
        {
          icon: Star, number: "03",
          title: "Google Review Booster",
          body: "A QR code system designed to get more 5-star Google reviews. After each service, hand the customer a card — one scan takes them to your review page.",
          features: ["Custom QR code linked to your Google profile", "Printable card design included", "More reviews = higher Google Maps ranking", "More organic customers over time"],
        },
      ],
    },
    case: {
      label: "Real Client · Live Example",
      title: "Built for VN Detailing — Leominster, MA",
      body: "We deployed the full system for VN Detailing, a mobile auto detailing business. The AI agent handles inquiries and bookings 24/7, every booking is saved to a dashboard, and the owner receives an email notification instantly.",
      link: "See it live →",
      features: ["Website live at vndetailing.com", "AI agent books appointments around the clock", "Instant email notification per booking", "Daily summary of pending appointments"],
      chat: [
        { r: "assistant", m: "Hi! I'm the VN Detailing assistant. What service can I help you with today?" },
        { r: "user", m: "How much is a full detail for an SUV?" },
        { r: "assistant", m: "A Full Detail for an SUV is $200! It includes complete exterior + interior. Want to schedule one?" },
      ],
    },
    pricing: {
      label: "Pricing",
      title: "Simple, Transparent Pricing",
      sub: "No surprises. No contracts. Cancel anytime.",
      setup: "Setup & Implementation", setup_price: "$299", setup_note: "one-time",
      monthly: "Monthly Automation & Support", monthly_price: "$99", monthly_note: "per month",
      includes: "Monthly fee covers: AI agent hosting, workflow automation, database, website hosting, and ongoing technical support.",
      features: ["Professional website", "AI booking agent (24/7)", "Google Review QR system", "Email notifications & daily summary", "Ongoing hosting & maintenance", "Technical support"],
    },
    guarantee: {
      title: "30-Day Money-Back Guarantee",
      body: "If our AI agent does not capture a single lead in the first 30 days, we refund your full setup fee — no questions asked.",
    },
    who: {
      label: "Who It's For",
      title: "Built for Local Service Businesses",
      items: ["Auto detailing & car wash", "House cleaning & pressure washing", "Landscaping & lawn care", "Beauty salons & barbershops", "HVAC, plumbing & handyman", "Pet grooming & veterinary clinics"],
    },
    cta: {
      title: "Ready to Stop Losing Leads?",
      body: "Send us a message and we'll set up your system in days — not weeks.",
      btn: "Get Started",
      email_label: "Or email us:",
    },
    footer: { tagline: "AI-powered systems for local service businesses." },
  },
  pt: {
    nav: { services: "Serviços", pricing: "Preços", cta: "Começar" },
    hero: {
      badge: "IA para Negócios Locais",
      title1: "Pare de Perder Clientes por Falta de Resposta.",
      title2: "Seu Negócio, Sempre Disponível.",
      sub: "Criamos sistemas de agendamento com IA, sites profissionais e automação de avaliações no Google para negócios locais — para você nunca mais perder um cliente.",
      cta: "Começar Agora",
      sub_cta: "ou envie um email para contact@jstechcorp.com",
      stat1: "40–60%", stat1l: "dos leads perdidos por demora na resposta",
      stat2: "24/7", stat2l: "a IA responde enquanto você trabalha",
      stat3: "30 dias", stat3l: "garantia de reembolso",
    },
    problem: {
      label: "O Problema",
      title: "A Maioria dos Negócios Locais Perde Metade dos Clientes Antes de Responder",
      body: "Um cliente em potencial encontra seu negócio, manda mensagem — e vai para o próximo se não receber resposta em minutos. Você está no serviço, sem tempo para checar o celular. Esse cliente foi embora.",
      cost: "Contratar uma recepcionista custa entre $2.000 e $3.500 por mês. Nós entregamos o mesmo resultado por uma fração disso.",
    },
    pillars: {
      label: "O Que Você Recebe",
      title: "Três Sistemas. Um Preço. Tudo Feito por Nós.",
      items: [
        {
          icon: Globe, number: "01",
          title: "Site Profissional de Alta Conversão",
          body: "Um site desenvolvido para transformar visitantes em agendamentos confirmados. Rápido, adaptado para celular e otimizado para buscas locais no Google.",
          features: ["Design personalizado com sua identidade visual", "Seções de serviços, preços e perguntas frequentes", "Galeria de fotos antes e depois", "Totalmente hospedado e mantido por nós"],
        },
        {
          icon: Bot, number: "02", badge: "Mais Popular",
          title: "Agente de IA para Agendamento — 24/7",
          body: "Um assistente virtual no seu site que conversa com cada visitante, responde dúvidas e agenda atendimentos de dia ou de noite — sem precisar de ninguém.",
          features: ["Responde instantaneamente, 24 horas por dia", "Coleta nome, data, horário, telefone e endereço", "Notificação por email a cada novo agendamento", "Resumo diário às 8h com agendamentos pendentes"],
        },
        {
          icon: Star, number: "03",
          title: "Sistema de Avaliações no Google",
          body: "Um QR code para aumentar suas avaliações 5 estrelas no Google. Após cada serviço, entregue o cartão ao cliente — um escaneamento vai direto para sua página de avaliação.",
          features: ["QR Code personalizado com link para seu perfil", "Design do cartão incluído, pronto para imprimir", "Mais avaliações = posição mais alta no Google Maps", "Mais clientes orgânicos ao longo do tempo"],
        },
      ],
    },
    case: {
      label: "Cliente Real · Exemplo ao Vivo",
      title: "Construído para VN Detailing — Leominster, MA",
      body: "Implantamos o sistema completo para a VN Detailing, um negócio de estética automotiva mobile. O agente de IA cuida de dúvidas e agendamentos 24/7, cada reserva é salva em um painel e o dono recebe notificação por email na hora.",
      link: "Ver ao vivo →",
      features: ["Site no ar em vndetailing.com", "Agente de IA agendando clientes o tempo todo", "Notificação por email a cada agendamento", "Resumo diário com agendamentos pendentes"],
      chat: [
        { r: "assistant", m: "Olá! Sou o assistente da VN Detailing. Em que posso ajudar?" },
        { r: "user", m: "Quanto custa um full detail para SUV?" },
        { r: "assistant", m: "O Full Detail para SUV é $200! Inclui exterior e interior completos. Quer agendar?" },
      ],
    },
    pricing: {
      label: "Preços",
      title: "Preço Simples e Transparente",
      sub: "Sem surpresas. Sem fidelidade. Cancele quando quiser.",
      setup: "Taxa de Implementação", setup_price: "$299", setup_note: "pagamento único",
      monthly: "Manutenção e Automação Mensal", monthly_price: "$99", monthly_note: "por mês",
      includes: "A mensalidade cobre: hospedagem do agente de IA, automações, banco de dados, hospedagem do site e suporte técnico contínuo.",
      features: ["Site profissional", "Agente de IA para agendamento (24/7)", "Sistema de QR Code para reviews", "Notificações por email e resumo diário", "Hospedagem e manutenção contínua", "Suporte técnico"],
    },
    guarantee: {
      title: "Garantia de 30 Dias",
      body: "Se o agente de IA não capturar nenhum lead nos primeiros 30 dias, devolvemos integralmente a taxa de implementação — sem burocracia.",
    },
    who: {
      label: "Para Quem É",
      title: "Feito para Negócios Locais de Serviço",
      items: ["Estética automotiva e lavagem de carros", "Limpeza residencial e lavagem a pressão", "Paisagismo e jardinagem", "Salões de beleza e barbearias", "Elétrica, hidráulica e serviços gerais", "Pet shop e clínicas veterinárias"],
    },
    cta: {
      title: "Pronto para Parar de Perder Clientes?",
      body: "Mande uma mensagem e configuramos seu sistema em dias — não semanas.",
      btn: "Começar Agora",
      email_label: "Ou envie um email:",
    },
    footer: { tagline: "Sistemas com IA para negócios locais de serviço." },
  },
};

function CtaButton({ label, href, className = "" }: { label: string; href: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0055d1] to-[#0DC0DF] px-7 py-4 text-white font-bold text-base shadow-lg hover:opacity-90 active:scale-95 transition-all ${className}`}>
      {label}
    </a>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const c = t[lang];

  return (
    <div className="bg-black text-white font-sans">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/60 bg-black/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 h-16">
          <a href="/" className="text-white font-extrabold text-lg tracking-tight">
            JS <span className="bg-gradient-to-r from-[#0055d1] to-[#0DC0DF] bg-clip-text text-transparent">Tech Corp</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">{c.nav.services}</a>
            <a href="#pricing" className="hover:text-white transition-colors">{c.nav.pricing}</a>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === "en" ? "pt" : "en")}
              className="text-xs font-bold border border-gray-700 rounded-full px-3 py-1.5 text-gray-400 hover:text-white hover:border-gray-500 transition-all">
              {lang === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
            </button>
            <a href={CONTACT_WA} target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0055d1] to-[#0DC0DF] px-5 py-2 text-white font-bold text-sm hover:opacity-90 transition-all">
              {c.nav.cta}
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-dvh flex flex-col items-center justify-center px-5 py-24 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute right-1/3 bottom-1/4 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        </div>
        <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#0055d1]/40 bg-[#0055d1]/10 px-5 py-2 text-sm font-semibold text-[#0DC0DF] mb-6">
          <Zap className="w-3.5 h-3.5" />{c.hero.badge}
        </div>
        <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-4xl">
          <span className="bg-gradient-to-r from-[#0055d1] to-[#0DC0DF] bg-clip-text text-transparent">{c.hero.title1}</span>
          <br />{c.hero.title2}
        </h1>
        <p className="relative z-10 mt-6 max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed">{c.hero.sub}</p>
        <div className="relative z-10 mt-8">
          <CtaButton label={c.hero.cta} href={CONTACT_WA} />
        </div>
        <p className="relative z-10 mt-3 text-xs text-gray-600">{c.hero.sub_cta}</p>
        <div className="relative z-10 mt-14 grid grid-cols-3 gap-8 max-w-lg w-full">
          {[
            { val: c.hero.stat1, label: c.hero.stat1l },
            { val: c.hero.stat2, label: c.hero.stat2l },
            { val: c.hero.stat3, label: c.hero.stat3l },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-[#0055d1] to-[#0DC0DF] bg-clip-text text-transparent">{s.val}</span>
              <span className="text-xs text-gray-500 text-center leading-tight">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-[#111111] px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0DC0DF] mb-4">{c.problem.label}</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{c.problem.title}</h2>
          <p className="text-gray-400 leading-relaxed mb-8">{c.problem.body}</p>
          <p className="text-sm font-semibold text-white border border-gray-700 rounded-2xl px-6 py-4 bg-black inline-block">{c.problem.cost}</p>
        </div>
      </section>

      {/* 3 PILLARS */}
      <section id="services" className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#0DC0DF] mb-4">{c.pillars.label}</p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-14">{c.pillars.title}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {c.pillars.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative rounded-2xl border border-gray-800 bg-[#111111] p-7 flex flex-col gap-5 hover:border-[#0055d1]/50 transition-colors duration-300">
                  {"badge" in item && item.badge && (
                    <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r from-[#0055d1] to-[#0DC0DF] text-white px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl border border-[#0DC0DF]/20 bg-gradient-to-br from-blue-500/10 to-teal-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#0DC0DF]" />
                    </div>
                    <span className="text-3xl font-black text-gray-800">{item.number}</span>
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
                  <div className="h-px bg-gray-800" />
                  <ul className="flex flex-col gap-2.5">
                    {item.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#88E789] shrink-0 mt-0.5" />
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
      <section className="bg-[#111111] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#0DC0DF] mb-4">{c.case.label}</p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-12">{c.case.title}</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <p className="text-gray-400 leading-relaxed">{c.case.body}</p>
              <ul className="flex flex-col gap-3">
                {c.case.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#88E789] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="https://vndetailing.com" target="_blank" rel="noopener noreferrer" className="text-[#0DC0DF] font-semibold hover:underline text-sm">
                {c.case.link}
              </a>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-black p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0055d1] to-[#0DC0DF] flex items-center justify-center text-white text-xs font-bold shrink-0">VN</div>
                <div>
                  <p className="text-sm font-bold">VN Detailing Assistant</p>
                  <p className="text-xs text-[#88E789] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#88E789] inline-block animate-pulse" />Online
                  </p>
                </div>
              </div>
              {c.case.chat.map((msg, i) => (
                <div key={i} className={`flex ${msg.r === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`rounded-2xl px-3 py-2 max-w-[85%] text-sm leading-relaxed ${msg.r === "user" ? "bg-gradient-to-r from-[#0055d1] to-[#0DC0DF] text-white rounded-tr-sm" : "bg-gray-800 text-gray-200 rounded-tl-sm"}`}>
                    {msg.m}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#0DC0DF] mb-4">{c.pricing.label}</p>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-3">{c.pricing.title}</h2>
          <p className="text-center text-gray-400 mb-12">{c.pricing.sub}</p>
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div className="rounded-2xl border border-gray-800 bg-[#111111] p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{c.pricing.setup}</p>
              <p className="text-4xl font-extrabold bg-gradient-to-r from-[#0055d1] to-[#0DC0DF] bg-clip-text text-transparent">{c.pricing.setup_price}</p>
              <p className="text-sm text-gray-500 mt-1">{c.pricing.setup_note}</p>
            </div>
            <div className="rounded-2xl border border-[#0055d1]/40 bg-gradient-to-br from-[#0055d1]/10 to-[#0DC0DF]/10 p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{c.pricing.monthly}</p>
              <p className="text-4xl font-extrabold bg-gradient-to-r from-[#0055d1] to-[#0DC0DF] bg-clip-text text-transparent">{c.pricing.monthly_price}</p>
              <p className="text-sm text-gray-500 mt-1">{c.pricing.monthly_note}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6">
            <p className="text-xs text-gray-500 mb-5">{c.pricing.includes}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {c.pricing.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#88E789] shrink-0" />
                  <span className="text-sm text-gray-300">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-[#111111] px-5 py-14">
        <div className="mx-auto max-w-2xl text-center">
          <Shield className="w-10 h-10 text-[#88E789] mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-3">{c.guarantee.title}</h3>
          <p className="text-gray-400 leading-relaxed">{c.guarantee.body}</p>
        </div>
      </section>

      {/* WHO */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0DC0DF] mb-4">{c.who.label}</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">{c.who.title}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {c.who.items.map((item, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-gray-700 bg-[#111111] text-sm text-gray-300 font-medium">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] px-5 py-20 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{c.cta.title}</h2>
          <p className="text-gray-400 mb-8">{c.cta.body}</p>
          <CtaButton label={c.cta.btn} href={CONTACT_WA} className="mb-4" />
          <p className="text-sm text-gray-500 mt-4">
            {c.cta.email_label}{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#0DC0DF] hover:underline">{CONTACT_EMAIL}</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 bg-black px-5 py-10">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-extrabold text-lg tracking-tight">
              JS <span className="bg-gradient-to-r from-[#0055d1] to-[#0DC0DF] bg-clip-text text-transparent">Tech Corp</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">{c.footer.tagline}</p>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-gray-500 hover:text-white transition-colors">{CONTACT_EMAIL}</a>
        </div>
        <div className="mx-auto max-w-5xl mt-6 border-t border-gray-800 pt-6 text-center text-xs text-gray-700">
          © {new Date().getFullYear()} JS Tech Corp. {lang === "en" ? "All rights reserved." : "Todos os direitos reservados."}
        </div>
      </footer>

    </div>
  );
}
