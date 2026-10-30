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
