import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  Clock,
  Globe2,
  Headphones,
  Instagram,
  Layers,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  Store,
  Wallet,
} from "lucide-react";

import heroImg from "@/assets/hero-malas.jpg";
import catAbs from "@/assets/cat-abs.jpg";
import catPoli from "@/assets/cat-polipropileno.jpg";
import catLuxo from "@/assets/cat-luxo.jpg";
import catFrasq from "@/assets/cat-frasqueira.jpg";
import catKit from "@/assets/cat-kit.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import galleryBlack from "@/assets/gallery-black.jpg";
import galleryPink from "@/assets/gallery-pink.jpg";
import galleryYellow from "@/assets/gallery-yellow.jpg";
import galleryFrasq from "@/assets/gallery-frasqueiras.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP =
  "https://wa.me/5571991547632?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20malas.";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Rua+Bromélias+Brancas+732+Jardim+das+Margaridas+Salvador+BA";
const INSTAGRAM = "https://instagram.com/";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Categorias />
      <PorQue />
      <Galeria />
      <BannerPromo />
      <Sobre />
      <Diferenciais />
      <Footer />
      <FloatingWhats />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 min-w-0">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-royal-gradient shadow-gold-glow">
            <Plane className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
          </span>
          <span className="truncate">
            <span className="block font-display text-lg leading-none font-bold text-[color:var(--royal-deep)]">
              Rei das Malas
            </span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Salvador · BA
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#categorias" className="hover:text-[color:var(--royal)] transition-colors">Categorias</a>
          <a href="#galeria" className="hover:text-[color:var(--royal)] transition-colors">Galeria</a>
          <a href="#sobre" className="hover:text-[color:var(--royal)] transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-[color:var(--royal)] transition-colors">Contato</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-royal-gradient px-4 py-2 text-sm font-semibold text-white shadow-elegant transition hover:opacity-95"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Coleção premium de malas de viagem Rei das Malas em Salvador"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--royal-deep)]/90 via-[color:var(--royal-deep)]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>

      <div className="container-x relative grid min-h-[92vh] items-center gap-10 py-24 lg:grid-cols-12">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold)]" />
            Coleção 2026 · Salvador
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] font-bold text-white sm:text-6xl lg:text-7xl">
            Sua próxima <span className="text-shimmer italic">viagem</span>
            <br />
            começa <span className="text-gold-gradient">aqui</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Malas, frasqueiras, kits de viagem e muito mais com qualidade,
            estilo e os <strong className="text-white">melhores preços de Salvador</strong>.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--whatsapp)] px-7 py-4 text-base font-semibold text-white shadow-elegant transition hover:scale-[1.02] hover:shadow-2xl"
            >
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
            </a>
            <a
              href="#categorias"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[color:var(--royal-deep)]"
            >
              Ver produtos
            </a>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/15 pt-8 text-white/90">
            {[
              { k: "R$180", v: "Malas ABS a partir de" },
              { k: "R$220", v: "Polipropileno & Luxo" },
              { k: "Kits", v: "Grande + Média + Pequena" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-3xl font-bold text-white">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-white/70">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hidden lg:col-span-5 lg:block">
          <div className="relative">
            <div className="animate-float absolute -right-4 -top-6 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl shadow-elegant">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient">
                  <BadgeCheck className="h-5 w-5 text-[color:var(--royal-deep)]" />
                </div>
                <div className="text-white">
                  <p className="text-xs uppercase tracking-widest text-white/70">Loja física</p>
                  <p className="font-semibold">Salvador · BA</p>
                </div>
              </div>
            </div>
            <div className="animate-float absolute bottom-8 -left-6 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl shadow-elegant" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-[color:var(--gold)]" />
                <div className="text-white">
                  <p className="text-xs uppercase tracking-widest text-white/70">Aberto até</p>
                  <p className="font-semibold">19h · Todos os dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CATEGORIAS ---------- */
type Cat = {
  title: string;
  price?: string;
  desc: string;
  img: string;
  big?: boolean;
  tag?: string;
};
const cats: Cat[] = [
  {
    title: "Malas ABS",
    price: "R$180",
    desc: "Leves, bonitas e resistentes para toda viagem.",
    img: catAbs,
    tag: "Mais vendida",
    big: true,
  },
  {
    title: "Polipropileno",
    price: "R$220",
    desc: "Material mais resistente e ultra durável.",
    img: catPoli,
  },
  {
    title: "Linha Luxo",
    price: "R$220",
    desc: "Design premium e máxima durabilidade.",
    img: catLuxo,
    tag: "Premium",
  },
  {
    title: "Frasqueiras",
    desc: "Organize seus itens com muito estilo.",
    img: catFrasq,
  },
  {
    title: "Kits de Malas",
    desc: "Grande + Média + Pequena + Frasqueira. Economize comprando kits completos.",
    img: catKit,
    big: true,
    tag: "Kit completo",
  },
];

function Categorias() {
  return (
    <section id="categorias" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--royal)] font-semibold">
              Coleções
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-[color:var(--royal-deep)] sm:text-5xl">
              Uma mala para cada <em className="text-gold-gradient not-italic">destino</em>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Do fim de semana ao intercâmbio: escolha entre ABS, polipropileno,
            linha luxo, frasqueiras e kits completos.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6">
          {cats.map((c, i) => (
            <CategoriaCard key={c.title} cat={c} className={cardSpan(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function cardSpan(i: number) {
  // Bento layout on md+
  const map = [
    "md:col-span-3", // ABS big
    "md:col-span-3", // Polipropileno
    "md:col-span-2",
    "md:col-span-2",
    "md:col-span-2",
  ];
  return map[i] ?? "md:col-span-2";
}

function CategoriaCard({ cat, className = "" }: { cat: Cat; className?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener"
      className={`group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card-soft hover-lift ${className}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/4]">
        <img
          src={cat.img}
          alt={`${cat.title} — Rei das Malas Salvador`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--royal-deep)]/90 via-[color:var(--royal-deep)]/10 to-transparent" />
        {cat.tag ? (
          <span className="absolute left-4 top-4 rounded-full bg-gold-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[color:var(--royal-deep)] shadow-gold-glow">
            {cat.tag}
          </span>
        ) : null}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              {cat.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-white/85">{cat.desc}</p>
          </div>
          {cat.price ? (
            <div className="shrink-0 text-right">
              <span className="block text-[10px] uppercase tracking-widest text-white/70">
                A partir de
              </span>
              <span className="font-display text-2xl font-bold text-gold-gradient">
                {cat.price}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </a>
  );
}

/* ---------- POR QUE ---------- */
const beneficios = [
  { icon: BadgeCheck, title: "Produtos de qualidade", desc: "Marcas selecionadas e testadas." },
  { icon: Headphones, title: "Atendimento especializado", desc: "Ajuda para escolher a mala ideal." },
  { icon: Layers, title: "Diversos modelos", desc: "ABS, polipropileno, luxo e frasqueiras." },
  { icon: Globe2, title: "Produtos importados", desc: "Design internacional e resistente." },
  { icon: Wallet, title: "Excelente custo-benefício", desc: "Os melhores preços de Salvador." },
  { icon: Store, title: "Loja física em Salvador", desc: "Venha ver e provar pessoalmente." },
  { icon: MessageCircle, title: "Atendimento rápido", desc: "Resposta ágil pelo WhatsApp." },
  { icon: ShieldCheck, title: "Compra segura", desc: "Confiança e transparência total." },
];

function PorQue() {
  return (
    <section className="relative bg-[color:var(--royal-deep)] py-24 text-white sm:py-32">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 10%, rgba(255,255,255,0.14) 0%, transparent 70%), radial-gradient(50% 50% at 90% 90%, rgba(232,183,50,0.18) 0%, transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold)] font-semibold">
            Diferenciais
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Por que escolher a <span className="text-gold-gradient">Rei das Malas</span>?
          </h2>
          <p className="mt-4 text-white/75">
            Uma experiência de compra pensada para quem valoriza qualidade,
            estilo e atendimento humano.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[color:var(--gold)]/40 hover:bg-white/10"
            >
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-[color:var(--royal-deep)] shadow-gold-glow">
                <b.icon className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{b.title}</h3>
              <p className="mt-1.5 text-sm text-white/70">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALERIA ---------- */
const galleryItems = [
  { src: galleryBlack, alt: "Malas pretas modernas", tag: "Preto" },
  { src: galleryPink, alt: "Malas rosas", tag: "Rosa" },
  { src: gallery1, alt: "Malas coloridas em diversos modelos", tag: "Coleção" },
  { src: galleryYellow, alt: "Mala amarela vibrante", tag: "Amarelo" },
  { src: galleryFrasq, alt: "Frasqueiras coloridas", tag: "Frasqueiras" },
  { src: catKit, alt: "Kit completo de malas", tag: "Kit" },
];

function Galeria() {
  return (
    <section id="galeria" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--royal)] font-semibold">
              Galeria
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold text-[color:var(--royal-deep)] sm:text-5xl">
              Estilo em cada cor.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Pretas, rosas, amarelas, cinzas, brancas, coloridas, premium, kits e frasqueiras.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[240px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {galleryItems.map((g, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-muted shadow-card-soft ${
                i === 2 ? "col-span-2 row-span-2" : i === 4 ? "col-span-2" : ""
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--royal-deep)]/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--royal-deep)] backdrop-blur">
                {g.tag}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BANNER PROMO ---------- */
function BannerPromo() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-royal-gradient p-8 shadow-elegant sm:p-14">
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
          />
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold)]" /> Ofertas ativas
              </span>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] font-bold text-white sm:text-5xl lg:text-6xl">
                Viaje com muito <span className="text-gold-gradient italic">mais estilo</span>.
              </h2>
              <ul className="mt-6 grid gap-2.5 text-white/90 sm:grid-cols-2">
                {[
                  "Malas a partir de R$180,00",
                  "Polipropileno a partir de R$220,00",
                  "Linha Luxo a partir de R$220,00",
                  "Kits promocionais disponíveis",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-base font-bold text-[color:var(--royal-deep)] shadow-gold-glow transition hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" /> Solicitar orçamento
              </a>
            </div>
            <div className="relative hidden lg:block">
              <img
                src={catLuxo}
                alt="Mala linha luxo Rei das Malas"
                loading="lazy"
                className="mx-auto max-h-[380px] w-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SOBRE ---------- */
function Sobre() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--royal)] font-semibold">
            Sobre a empresa
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-[color:var(--royal-deep)] sm:text-5xl">
            Rei das <span className="text-gold-gradient">Malas</span>.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              A <strong className="text-foreground">Rei das Malas</strong> é
              especializada em malas de alta qualidade, frasqueiras, kits de
              viagem e produtos importados. Trabalhamos com modelos modernos,
              resistentes e elegantes para todos os tipos de viagem.
            </p>
            <p>
              Nossa missão é oferecer <strong className="text-foreground">qualidade,
              preço justo</strong> e atendimento diferenciado para que sua
              viagem comece da melhor forma.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { i: Award, t: "Qualidade" },
              { i: Globe2, t: "Importados" },
              { i: Store, t: "Loja física" },
              { i: MessageCircle, t: "Atendimento" },
            ].map(({ i: Icon, t }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-4 text-center shadow-card-soft">
                <Icon className="mx-auto h-5 w-5 text-[color:var(--royal)]" />
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--royal-deep)]">{t}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-royal-gradient opacity-20 blur-2xl" />
          <img
            src={heroImg}
            alt="Sobre a Rei das Malas — loja em Salvador"
            loading="lazy"
            className="w-full rounded-[2rem] object-cover shadow-elegant"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- DIFERENCIAIS ---------- */
const diferenciais = [
  "Malas ABS a partir de R$180,00",
  "Polipropileno a partir de R$220,00",
  "Linha Luxo a partir de R$220,00",
  "Kits de malas",
  "Frasqueiras",
  "Produtos importados",
  "Atendimento rápido",
  "Loja física em Salvador",
];

function Diferenciais() {
  return (
    <section className="pb-24">
      <div className="container-x">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card-soft sm:p-12">
          <h2 className="font-display text-3xl font-bold text-[color:var(--royal-deep)] sm:text-4xl">
            Nossos <span className="text-gold-gradient">diferenciais</span>
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 rounded-xl bg-secondary/60 p-4 text-sm font-medium text-[color:var(--royal-deep)]"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-gradient text-[color:var(--royal-deep)]">
                  <BadgeCheck className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer id="contato" className="relative bg-[color:var(--royal-deep)] pt-20 pb-10 text-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-gradient shadow-gold-glow">
                <Plane className="h-5 w-5 text-[color:var(--royal-deep)]" strokeWidth={2.5} />
              </span>
              <div>
                <p className="font-display text-2xl font-bold">Rei das Malas</p>
                <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                  Salvador · Bahia
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm text-white/70">
              Malas de viagem, frasqueiras, kits e acessórios premium com o
              melhor atendimento de Salvador.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--gold)] font-semibold">
                Endereço
              </p>
              <p className="mt-4 flex items-start gap-3 text-sm text-white/85">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                <span>
                  Rua Bromélias Brancas, 732<br />
                  Jardim das Margaridas<br />
                  Salvador – BA<br />
                  CEP: 41502-015
                </span>
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--gold)] font-semibold">
                Contato
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[color:var(--gold)]" />
                  (71) 99154-7632
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-[color:var(--gold)]" />
                  Aberto diariamente até às 19h
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--gold)] font-semibold">
              Fale conosco
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <FooterBtn href={WHATSAPP} icon={MessageCircle} label="WhatsApp" primary />
              <FooterBtn href="tel:+5571991547632" icon={Phone} label="Ligar" />
              <FooterBtn href={MAPS} icon={MapPin} label="Google Maps" />
              <FooterBtn href={INSTAGRAM} icon={Instagram} label="Instagram" />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Rei das Malas · Salvador, Bahia. Todos os direitos reservados.</p>
          <p>Loja de malas em Salvador · Malas de viagem · Polipropileno · Frasqueiras · Kits</p>
        </div>
      </div>
    </footer>
  );
}

function FooterBtn({
  href,
  icon: Icon,
  label,
  primary = false,
}: {
  href: string;
  icon: typeof MessageCircle;
  label: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener"
      className={`group inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-semibold transition ${
        primary
          ? "border-transparent bg-gold-gradient text-[color:var(--royal-deep)] shadow-gold-glow hover:scale-[1.02]"
          : "border-white/15 bg-white/5 text-white hover:border-[color:var(--gold)]/40 hover:bg-white/10"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

/* ---------- FLOATING WHATS ---------- */
function FloatingWhats() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-5 py-4 font-semibold text-white shadow-elegant transition hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
