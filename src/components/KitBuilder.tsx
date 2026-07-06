import { useMemo, useState } from "react";
import { Minus, Plus, Send, Sparkles, Trash2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const WHATSAPP_NUMBER = "5571991547632";

type Item = { id: string; label: string; price: number; note?: string };
type Group = { title: string; items: Item[] };
type Family = { id: string; name: string; accent: string; groups: Group[] };

const CATALOG: Family[] = [
  {
    id: "pp",
    name: "Malas em Polipropileno",
    accent: "Material mais resistente",
    groups: [
      {
        title: "Bordo",
        items: [
          { id: "pp-b-10", label: "10kg", price: 220 },
          { id: "pp-b-12", label: "12kg", price: 240 },
          { id: "pp-b-15", label: "15kg", price: 260 },
        ],
      },
      {
        title: "Médias",
        items: [
          { id: "pp-m-18", label: "18kg", price: 280 },
          { id: "pp-m-21", label: "21kg", price: 300 },
          { id: "pp-m-23", label: "23kg", price: 320 },
          { id: "pp-m-25", label: "25kg", price: 340 },
          { id: "pp-m-27", label: "27kg", price: 360 },
        ],
      },
      {
        title: "Grandes",
        items: [
          { id: "pp-g-30", label: "30kg", price: 380 },
          { id: "pp-g-32", label: "32kg", price: 400 },
          { id: "pp-g-35", label: "35kg", price: 420 },
          { id: "pp-g-40", label: "40kg", price: 440 },
          { id: "pp-g-45", label: "45kg", price: 460, note: "Maior de todas" },
        ],
      },
    ],
  },
  {
    id: "abs",
    name: "Malas em ABS",
    accent: "Leves e resistentes",
    groups: [
      {
        title: "Bordo",
        items: [
          { id: "abs-b-n17", label: "N17 · 8kg", price: 180, note: "Menor de todas" },
          { id: "abs-b-n19", label: "N19 · 10kg", price: 200 },
          { id: "abs-b-n20", label: "N20 · 12kg", price: 220 },
          { id: "abs-b-n21", label: "N21 · 15kg", price: 230 },
        ],
      },
      {
        title: "Frasqueira",
        items: [{ id: "abs-frasq", label: "Frasqueira ABS", price: 100 }],
      },
      {
        title: "Para Despachar",
        items: [
          { id: "abs-d-n23", label: "N23 · 20kg", price: 240 },
          { id: "abs-d-n24", label: "N24 · 23kg", price: 250 },
          { id: "abs-d-n26", label: "N26 · 25kg", price: 270 },
          { id: "abs-d-n28", label: "N28 · 32kg", price: 320 },
          { id: "abs-d-n29", label: "N29 · 35kg", price: 330 },
          { id: "abs-d-n30", label: "N30 · 40kg", price: 350, note: "Maior de todas" },
        ],
      },
    ],
  },
  {
    id: "luxo",
    name: "Linha Luxo",
    accent: "Design premium",
    groups: [
      {
        title: "Bordo",
        items: [
          { id: "lux-b-10", label: "10kg", price: 220 },
          { id: "lux-b-12", label: "12kg", price: 240 },
        ],
      },
      {
        title: "Médias",
        items: [
          { id: "lux-m-17", label: "17kg", price: 260 },
          { id: "lux-m-20", label: "20kg", price: 280 },
          { id: "lux-m-23", label: "23kg", price: 300 },
          { id: "lux-m-25", label: "25kg", price: 330 },
        ],
      },
      {
        title: "Grandes",
        items: [
          { id: "lux-g-32", label: "32kg", price: 350 },
          { id: "lux-g-35", label: "35kg", price: 380 },
        ],
      },
      {
        title: "GG",
        items: [{ id: "lux-gg-40", label: "40kg", price: 400 }],
      },
      {
        title: "Frasqueiras",
        items: [
          { id: "lux-frasq-g", label: "Frasqueira G", price: 120 },
          { id: "lux-frasq-gg", label: "Frasqueira GG", price: 140 },
        ],
      },
    ],
  },
];

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function KitBuilder({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState<Record<string, number>>({});

  const allItems = useMemo(() => {
    const map = new Map<string, { item: Item; family: string; group: string }>();
    CATALOG.forEach((f) =>
      f.groups.forEach((g) =>
        g.items.forEach((it) => map.set(it.id, { item: it, family: f.name, group: g.title })),
      ),
    );
    return map;
  }, []);

  const totals = useMemo(() => {
    let total = 0;
    let count = 0;
    for (const [id, q] of Object.entries(qty)) {
      const info = allItems.get(id);
      if (!info || q <= 0) continue;
      total += info.item.price * q;
      count += q;
    }
    return { total, count };
  }, [qty, allItems]);

  const inc = (id: string) => setQty((s) => ({ ...s, [id]: (s[id] ?? 0) + 1 }));
  const dec = (id: string) =>
    setQty((s) => {
      const next = Math.max(0, (s[id] ?? 0) - 1);
      const copy = { ...s };
      if (next === 0) delete copy[id];
      else copy[id] = next;
      return copy;
    });
  const clear = () => setQty({});

  const sendWhatsApp = () => {
    if (totals.count === 0) return;
    const lines: string[] = [
      "🧳 *Meu Kit — Rei das Malas*",
      "",
    ];
    CATALOG.forEach((f) => {
      const chunks: string[] = [];
      f.groups.forEach((g) => {
        const picked = g.items.filter((it) => (qty[it.id] ?? 0) > 0);
        if (!picked.length) return;
        chunks.push(`_${g.title}_`);
        picked.forEach((it) => {
          const q = qty[it.id];
          chunks.push(
            `• ${it.label} — ${q}x ${brl(it.price)} = *${brl(it.price * q)}*`,
          );
        });
      });
      if (chunks.length) {
        lines.push(`*${f.name}*`);
        lines.push(...chunks, "");
      }
    });
    lines.push(`*Total (${totals.count} ${totals.count === 1 ? "item" : "itens"}): ${brl(totals.total)}*`);
    lines.push("", "Poderia me ajudar a finalizar esse pedido?");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="max-w-5xl w-[min(96vw,64rem)] p-0 gap-0 overflow-hidden border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-navy shadow-[0_30px_120px_-20px_rgba(0,0,0,0.6)]"
      >
        {/* Header */}
        <div className="relative px-6 py-5 md:px-8 md:py-6 border-b border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-[radial-gradient(120%_100%_at_0%_0%,color-mix(in_oklab,var(--gold)_14%,transparent),transparent_60%)]">
          <DialogHeader className="space-y-1 text-left">
            <div className="flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-gold-glow">
                <Sparkles className="size-4" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gold-gradient font-semibold">
                Monte seu Kit
              </span>
            </div>
            <DialogTitle className="font-display text-2xl md:text-3xl font-semibold">
              Escolha suas malas e feche direto no WhatsApp
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Combine quantas malas quiser de qualquer categoria. O total é atualizado em tempo real.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-[1fr_320px] max-h-[75vh]">
          <div className="overflow-y-auto px-4 py-5 md:px-8 md:py-6 space-y-8">
            {CATALOG.map((family) => (
              <section key={family.id}>
                <div className="mb-4 flex items-end justify-between gap-3 border-b border-[color-mix(in_oklab,var(--gold)_15%,transparent)] pb-2">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold">
                      {family.name}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-gold-gradient font-semibold">
                      {family.accent}
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  {family.groups.map((group) => (
                    <div key={group.title}>
                      <h4 className="mb-3 text-sm font-semibold text-foreground/80 uppercase tracking-wider">
                        {group.title}
                      </h4>
                      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                        {group.items.map((it) => {
                          const q = qty[it.id] ?? 0;
                          const active = q > 0;
                          return (
                            <div
                              key={it.id}
                              className={`group flex items-center justify-between gap-3 rounded-2xl border p-3 transition ${
                                active
                                  ? "border-[color-mix(in_oklab,var(--gold)_60%,transparent)] bg-[color-mix(in_oklab,var(--gold)_8%,transparent)] shadow-gold-glow"
                                  : "border-[color-mix(in_oklab,var(--gold)_15%,transparent)] bg-card hover:border-[color-mix(in_oklab,var(--gold)_35%,transparent)]"
                              }`}
                            >
                              <div className="min-w-0">
                                <div className="font-medium truncate">{it.label}</div>
                                {it.note && (
                                  <div className="text-[10px] uppercase tracking-widest text-gold-gradient font-semibold">
                                    {it.note}
                                  </div>
                                )}
                                <div className="mt-0.5 text-sm text-muted-foreground">
                                  {brl(it.price)}
                                  {active && (
                                    <span className="ml-2 text-gold-gradient font-semibold">
                                      · {brl(it.price * q)}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-1 shrink-0">
                                <button
                                  type="button"
                                  aria-label={`Diminuir ${it.label}`}
                                  onClick={() => dec(it.id)}
                                  disabled={q === 0}
                                  className="inline-flex size-8 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-background/40 text-foreground transition hover:bg-gold-gradient hover:text-primary-foreground disabled:opacity-30 disabled:hover:bg-background/40 disabled:hover:text-foreground"
                                >
                                  <Minus className="size-3.5" />
                                </button>
                                <span
                                  className={`w-6 text-center text-sm font-semibold tabular-nums ${
                                    active ? "text-gold-gradient" : "text-muted-foreground"
                                  }`}
                                >
                                  {q}
                                </span>
                                <button
                                  type="button"
                                  aria-label={`Aumentar ${it.label}`}
                                  onClick={() => inc(it.id)}
                                  className="inline-flex size-8 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-gold-glow transition hover:brightness-110"
                                >
                                  <Plus className="size-3.5" />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Sidebar / summary */}
          <aside className="border-t md:border-t-0 md:border-l border-[color-mix(in_oklab,var(--gold)_15%,transparent)] bg-navy-2 flex flex-col">
            <div className="px-5 py-4 border-b border-[color-mix(in_oklab,var(--gold)_12%,transparent)]">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Resumo do kit
                </div>
                <div className="text-xs text-muted-foreground">
                  {totals.count} {totals.count === 1 ? "item" : "itens"}
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2 max-h-64 md:max-h-none">
              {totals.count === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Nenhum item selecionado ainda. Use os botões <b>+</b> para adicionar malas ao seu kit.
                </p>
              ) : (
                CATALOG.flatMap((f) =>
                  f.groups.flatMap((g) =>
                    g.items
                      .filter((it) => (qty[it.id] ?? 0) > 0)
                      .map((it) => (
                        <div
                          key={it.id}
                          className="flex items-start justify-between gap-2 text-sm"
                        >
                          <div className="min-w-0">
                            <div className="truncate">
                              <span className="text-muted-foreground">{f.name.split(" ").slice(-1)[0]} · {g.title} · </span>
                              <span className="font-medium">{it.label}</span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {qty[it.id]}x {brl(it.price)}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="font-semibold text-gold-gradient tabular-nums">
                              {brl(it.price * qty[it.id])}
                            </span>
                            <button
                              type="button"
                              onClick={() => setQty((s) => { const c = {...s}; delete c[it.id]; return c; })}
                              aria-label={`Remover ${it.label}`}
                              className="text-muted-foreground hover:text-foreground transition"
                            >
                              <X className="size-3.5" />
                            </button>
                          </div>
                        </div>
                      )),
                  ),
                )
              )}
            </div>
            <div className="border-t border-[color-mix(in_oklab,var(--gold)_15%,transparent)] px-5 py-4 space-y-3 bg-navy">
              <div className="flex items-baseline justify-between">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  Total
                </span>
                <span className="font-display text-2xl font-semibold text-gold-gradient tabular-nums">
                  {brl(totals.total)}
                </span>
              </div>
              <button
                type="button"
                onClick={sendWhatsApp}
                disabled={totals.count === 0}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient text-primary-foreground font-semibold px-5 py-3 shadow-gold-glow transition hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
              >
                <Send className="size-4" /> Finalizar Pedido no WhatsApp
              </button>
              <button
                type="button"
                onClick={clear}
                disabled={totals.count === 0}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full gold-border px-5 py-2.5 text-sm font-medium transition hover:bg-[color-mix(in_oklab,var(--gold)_10%,transparent)] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Trash2 className="size-3.5" /> Limpar Seleção
              </button>
            </div>
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  );
}
