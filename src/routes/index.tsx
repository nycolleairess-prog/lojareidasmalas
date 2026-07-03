import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  Crown,
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
  Star,
  Store,
  Wallet,
} from "lucide-react";

import heroAirport from "@/assets/hero-airport.jpg";
import logo from "@/assets/uploads/logo.jpeg.asset.json";
import absImg from "@/assets/uploads/malas-abs.png.asset.json";
import poliImg from "@/assets/uploads/polipropileno.jpeg.asset.json";
import luxoImg from "@/assets/uploads/linha-luxo.png.asset.json";
import frasqImg from "@/assets/uploads/frasqueiras.png.asset.json";
import kitImg from "@/assets/uploads/kit-azul.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP =
  "https://wa.me/5571991547632?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20malas%20da%20Rei%20das%20Malas.";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Rua+Bromélias+Brancas+732+Jardim+das+Margaridas+Salvador+BA";
const INSTAGRAM = "https://instagram.com/reidasmalas";
const PHONE = "tel:+5571991547632";

const CATEGORIES = [
  {
    id: "abs",
    tag: "ABS",
    name: "Malas ABS",
    price: "R$ 180,00",
    img: absImg.url,
    desc: "Leves, resistentes e ideais para qualquer viagem. Perfeitas para quem busca praticidade e estilo.",
    badge: "Diversas cores",
  },
  {
    id: "polipropileno",
    tag: "PP",
    name: "Malas de Polipropileno",
    price: "R$ 220,00",
    img: poliImg.url,
    desc: "Material muito mais resistente, alta durabilidade. Ideal para quem viaja com frequência.",
    badge: "Alta durabilidade",
  },
  {
    id: "luxo",
    tag: "Luxo",
    name: "Linha Luxo",
    price: "R$ 220,00",
    img: luxoImg.url,
    desc: "Design sofisticado, acabamento premium e material extra resistente para viagens exclusivas.",
    badge: "Várias cores disponíveis",
  },
  {
    id: "frasqueiras",
    tag: "Frasqueira",
    name: "Frasqueiras",
    price: "Consulte",
    img: frasqImg.url,
    desc: "Frasqueiras modernas para organizar seus itens com praticidade, segurança e elegância.",
    badge: "Várias cores disponíveis",
  },
  {
    id: "kits",
    tag: "Kit",
    name: "Kits de Malas",
    price: "Consulte",
    img: kitImg.url,
    desc: "Kits completos em diversos modelos, cores e materiais. Ideal para qualquer tipo de viagem.",
    badge: "Diversas cores e materiais",
  },
];

const DIFERENCIAIS = [
  { icon: BadgeCheck, label: "Produtos de qualidade" },
  { icon: ShieldCheck, label: "Malas resistentes" },
  { icon: Crown, label: "Linha Luxo" },
  { icon: Sparkles, label: "Frasqueiras" },
  { icon: Layers, label: "Kits completos" },
  { icon: Globe2, label: "Produtos importados" },
  { icon: Store, label: "Loja física em Salvador" },
  { icon: Headphones, label: "Atendimento especializado" },
  { icon: Wallet, label: "Excelente custo-benefício" },
  { icon: MessageCircle, label: "Atendimento rápido no WhatsApp" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Categorias />
      <BannerPromo />
      <PorQue />
      <Galeria />
      <Sobre />
      <Contato />
      <Footer />
      <FloatingWhats />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[color-mix(in_oklab,var(--navy)_78%,transparent)] border-b border-[color-mix(in_oklab,var(--gold)_18%,transparent)]">
      <div className="container-x flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <img src={logo.url} alt="Rei das Malas" className="h-11 w-11 rounded-full shrink-0 ring-2 ring-[color-mix(in_oklab,var(--gold)_50%,transparent)]" />
          <div className="min-w-0 leading-tight">
            <div className="font-display text-lg font-semibold truncate">Rei das Malas</div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-gradient">Salvador · BA</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#categorias" className="hover:text-foreground transition-colors">Categorias</a>
          <a href="#galeria" className="hover:text-foreground transition-colors">Galeria</a>
          <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gold-gradient text-primary-foreground font-semibold px-4 py-2 text-sm shadow-gold-glow hover:brightness-110 transition"
        >
          <MessageCircle className="size-4" /> WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src={heroAirport}
        alt="Aeroporto moderno ao entardecer com avião"
        width={1920}
        height={1152}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[color-mix(in_oklab,var(--navy)_50%,transparent)] via-[color-mix(in_oklab,var(--navy)_75%,transparent)] to-background" />
      <div className="absolute inset-0 bg-royal-gradient opacity-40 mix-blend-multiply" />

      {/* drifting plane accent */}
      <Plane className="absolute top-24 left-0 size-8 text-[color-mix(in_oklab,var(--gold)_80%,transparent)] animate-plane" aria-hidden />

      <div className="relative container-x pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full gold-border px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-gradient backdrop-blur">
            <Plane className="size-3.5" /> Especialista em Viagem · Salvador/BA
          </span>
          <h1 className="mt-6 font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.02]">
            Sua próxima <br className="hidden md:block" />
            <span className="text-gold-gradient">VIAGEM</span> começa aqui!
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            Malas, frasqueiras, kits completos e modelos premium para viajar com qualidade,
            segurança e muito estilo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#categorias"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient text-primary-foreground font-semibold px-6 py-3.5 shadow-gold-glow hover:brightness-110 transition"
            >
              <Sparkles className="size-4" /> Ver Produtos
            </a>
            <a
              href={WHATSAPP}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur text-foreground font-semibold px-6 py-3.5 hover:bg-white/10 transition"
            >
              <MessageCircle className="size-4" /> Falar no WhatsApp
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { k: "ABS", v: "R$ 180+" },
              { k: "Polipropileno", v: "R$ 220+" },
              { k: "Linha Luxo", v: "R$ 220+" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl gold-border bg-white/5 backdrop-blur p-4">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{s.k}</div>
                <div className="mt-1 font-display text-lg font-semibold text-gold-gradient">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Categorias() {
  return (
    <section id="categorias" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.28em] text-gold-gradient">Nossas Categorias</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold">
              Escolha a mala perfeita <span className="text-gold-gradient">para sua viagem</span>
            </h2>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-sm text-gold-gradient hover:underline">
            Solicitar orçamento →
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <article
              key={c.id}
              className={`group hover-lift relative overflow-hidden rounded-3xl bg-card shadow-card-soft border border-[color-mix(in_oklab,var(--gold)_15%,transparent)] ${i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}
            >
              <div className={`relative ${i === 0 ? "aspect-[16/10]" : "aspect-[4/3]"} overflow-hidden bg-navy-2`}>
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-gold-gradient text-primary-foreground text-[11px] font-semibold uppercase tracking-widest px-3 py-1 shadow-gold-glow">
                  {c.tag}
                </span>
                {c.badge && (
                  <span className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur text-foreground text-[10px] uppercase tracking-widest px-3 py-1 gold-border">
                    {c.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl md:text-2xl font-semibold">{c.name}</h3>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">A partir de</div>
                    <div className="font-display text-lg text-gold-gradient font-semibold">{c.price}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <a
                  href={WHATSAPP}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full gold-border px-4 py-2 text-sm font-medium hover:bg-gold-gradient hover:text-primary-foreground transition"
                >
                  Saiba Mais <MessageCircle className="size-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BannerPromo() {
  return (
    <section className="relative py-16">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-royal-gradient p-8 md:p-14 shadow-elegant border border-[color-mix(in_oklab,var(--gold)_30%,transparent)]">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold-gradient opacity-20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[color-mix(in_oklab,var(--royal)_80%,transparent)] blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-8">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-gold-gradient">Promoção</div>
              <h3 className="mt-3 font-display text-3xl md:text-5xl font-bold">
                Viaje com muito <span className="text-gold-gradient">mais estilo!</span>
              </h3>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-foreground/90">
                <li>✔ Malas ABS a partir de <b>R$ 180,00</b></li>
                <li>✔ Polipropileno a partir de <b>R$ 220,00</b></li>
                <li>✔ Linha Luxo a partir de <b>R$ 220,00</b></li>
                <li>✔ Kits promocionais disponíveis</li>
              </ul>
            </div>
            <a
              href={WHATSAPP}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient text-primary-foreground font-semibold px-7 py-4 shadow-gold-glow hover:brightness-110 transition animate-glow"
            >
              <MessageCircle className="size-4" /> Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PorQue() {
  return (
    <section className="relative py-20 bg-[color-mix(in_oklab,var(--navy-2)_70%,transparent)] border-y border-[color-mix(in_oklab,var(--gold)_15%,transparent)]">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.28em] text-gold-gradient">Por que escolher</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold">
            A <span className="text-gold-gradient">Rei das Malas</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {DIFERENCIAIS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group rounded-2xl bg-card p-5 gold-border hover-lift text-center"
            >
              <div className="mx-auto grid place-items-center h-12 w-12 rounded-2xl bg-gold-gradient text-primary-foreground shadow-gold-glow">
                <Icon className="size-5" />
              </div>
              <div className="mt-3 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const items = [
    { src: kitImg.url, label: "Kit Azul", span: "md:col-span-2 md:row-span-2" },
    { src: luxoImg.url, label: "Linha Luxo" },
    { src: frasqImg.url, label: "Frasqueiras" },
    { src: poliImg.url, label: "Polipropileno", span: "md:col-span-2" },
    { src: absImg.url, label: "Mala ABS" },
  ];
  return (
    <section id="galeria" className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.28em] text-gold-gradient">Galeria</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold">
            Produtos <span className="text-gold-gradient">reais</span> da loja
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`relative group overflow-hidden rounded-3xl gold-border shadow-card-soft ${it.span ?? ""}`}
            >
              <img src={it.src} alt={it.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest text-gold-gradient">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-gold-gradient">Sobre a empresa</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold">
            Especialistas em <span className="text-gold-gradient">viagem</span> desde sempre
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A <b className="text-foreground">Rei das Malas</b> é especializada em malas de viagem,
            frasqueiras, kits de malas e produtos importados de alta qualidade.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Oferecemos produtos modernos, resistentes e elegantes para tornar sua viagem muito mais
            prática e segura.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient text-primary-foreground font-semibold px-6 py-3 shadow-gold-glow hover:brightness-110 transition">
              <MessageCircle className="size-4" /> Fale conosco
            </a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full gold-border px-6 py-3 hover:bg-white/5 transition">
              <MapPin className="size-4 text-gold-gradient" /> Ver loja no mapa
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gold-gradient opacity-30 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden gold-border shadow-elegant">
            <img src={kitImg.url} alt="Kit de malas Rei das Malas" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card gold-border p-5 shadow-elegant hidden md:flex items-center gap-3">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-gold-gradient text-primary-foreground">
              <Star className="size-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Premium</div>
              <div className="font-display text-lg font-semibold">Qualidade garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-[color-mix(in_oklab,var(--navy-2)_70%,transparent)] border-y border-[color-mix(in_oklab,var(--gold)_15%,transparent)]">
      <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-gold-gradient">Contato</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold">
            Visite nossa <span className="text-gold-gradient">loja física</span>
          </h2>
          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-gold-gradient text-primary-foreground shrink-0"><MapPin className="size-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Endereço</div>
                <div className="font-medium">Rua Bromélias Brancas, 732</div>
                <div className="text-sm text-muted-foreground">Jardim das Margaridas · Salvador – BA</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-gold-gradient text-primary-foreground shrink-0"><Phone className="size-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Telefone</div>
                <div className="font-medium">(71) 99154-7632</div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-gold-gradient text-primary-foreground font-semibold px-4 py-3 text-sm text-center hover:brightness-110 transition inline-flex items-center justify-center gap-2">
              <MessageCircle className="size-4" /> WhatsApp
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="rounded-2xl gold-border px-4 py-3 text-sm text-center hover:bg-white/5 transition inline-flex items-center justify-center gap-2">
              <Instagram className="size-4" /> Instagram
            </a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="rounded-2xl gold-border px-4 py-3 text-sm text-center hover:bg-white/5 transition inline-flex items-center justify-center gap-2">
              <MapPin className="size-4" /> Maps
            </a>
            <a href={PHONE} className="rounded-2xl gold-border px-4 py-3 text-sm text-center hover:bg-white/5 transition inline-flex items-center justify-center gap-2">
              <Phone className="size-4" /> Ligar
            </a>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden gold-border shadow-elegant">
          <iframe
            title="Mapa Rei das Malas Salvador"
            src="https://www.google.com/maps?q=Rua+Bromélias+Brancas+732+Jardim+das+Margaridas+Salvador+BA&output=embed"
            className="w-full h-[420px] block"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-[color-mix(in_oklab,var(--gold)_15%,transparent)]">
      <div className="container-x grid md:grid-cols-3 gap-8 items-start">
        <div className="flex items-center gap-3">
          <img src={logo.url} alt="Rei das Malas" className="h-14 w-14 rounded-full ring-2 ring-[color-mix(in_oklab,var(--gold)_50%,transparent)]" />
          <div>
            <div className="font-display text-xl font-semibold">Rei das Malas</div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-gradient">Salvador · BA</div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          Malas de viagem, frasqueiras, kits e produtos importados com qualidade e atendimento
          especializado.
        </div>
        <div className="flex md:justify-end gap-3">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold-gradient text-primary-foreground font-semibold px-5 py-2.5 text-sm inline-flex items-center gap-2"><MessageCircle className="size-4" /> WhatsApp</a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="rounded-full gold-border px-5 py-2.5 text-sm inline-flex items-center gap-2"><Instagram className="size-4" /> Instagram</a>
        </div>
      </div>
      <div className="container-x mt-8 pt-6 border-t border-[color-mix(in_oklab,var(--gold)_10%,transparent)] text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rei das Malas — Todos os direitos reservados.
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP}
      target="_blank" rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] text-primary-foreground font-semibold px-5 py-3.5 shadow-elegant hover:brightness-110 transition animate-glow"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Fale conosco</span>
    </a>
  );
}
