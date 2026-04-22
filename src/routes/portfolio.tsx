import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { BlobBackground } from "@/components/BlobBackground";

const CATEGORIES = ["All", "Branding", "Illustration", "Social Media", "Print"] as const;
type Category = (typeof CATEGORIES)[number];

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  tag: string;
  bg: string;
  shape: "blob" | "square" | "circle" | "diamond";
};

const PROJECTS: Project[] = [
  { title: "Bloom & Co Identity", category: "Branding", tag: "2024 · Identity", bg: "var(--magenta)", shape: "blob" },
  { title: "Riso Zine Vol. 03", category: "Print", tag: "2024 · Editorial", bg: "var(--orange)", shape: "square" },
  { title: "Kiki Café Menu", category: "Branding", tag: "2024 · Print", bg: "var(--violet)", shape: "circle" },
  { title: "Reel Series — Type", category: "Social Media", tag: "Ongoing", bg: "var(--magenta)", shape: "diamond" },
  { title: "Folk Tales Posters", category: "Illustration", tag: "2023", bg: "var(--orange)", shape: "blob" },
  { title: "Pop-up Stickers", category: "Illustration", tag: "2023", bg: "var(--violet)", shape: "circle" },
  { title: "Studio Wired Brand", category: "Branding", tag: "2023", bg: "var(--magenta)", shape: "square" },
  { title: "Festival Campaign", category: "Social Media", tag: "2024", bg: "var(--orange)", shape: "diamond" },
  { title: "Indie Mag Spread", category: "Print", tag: "2024", bg: "var(--violet)", shape: "blob" },
];

const shapeClass: Record<Project["shape"], string> = {
  blob: "rounded-[40%_60%_55%_45%/55%_45%_60%_40%]",
  square: "rounded-2xl",
  circle: "rounded-full",
  diamond: "rotate-45 rounded-2xl",
};

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Bhagyashri Khobragade" },
      { name: "description", content: "Selected work by Bhagyashri Khobragade — branding, illustration, editorial and social design." },
      { property: "og:title", content: "Portfolio — Bhagyashri Khobragade" },
      { property: "og:description", content: "Selected design work: branding, illustration, social and print." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div className="relative">
      <BlobBackground />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[var(--cream)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
          <Sparkles className="h-3.5 w-3.5" /> Selected Work
        </span>
        <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] md:text-7xl">
          Things I've <span className="text-gradient-art italic">made</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
          A rotating snapshot of recent projects. Click through, or DM <strong>@the_art_wired</strong> for the full case studies.
        </p>

        {/* Filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border-2 border-ink px-4 py-2 text-sm font-bold transition-all ${
                active === c
                  ? "bg-[var(--ink)] text-[var(--cream)] shadow-bold-sm"
                  : "bg-[var(--cream)] hover:-translate-y-0.5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <article
              key={p.title + i}
              className="group relative overflow-hidden rounded-3xl border-2 border-ink bg-[var(--cream)] p-6 shadow-bold-sm transition-all hover:-translate-y-1 hover:shadow-bold"
            >
              <div className="grid aspect-square place-items-center overflow-hidden rounded-2xl border-2 border-ink bg-[var(--cream)]">
                <div
                  className={`h-3/4 w-3/4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 ${shapeClass[p.shape]}`}
                  style={{ background: p.bg }}
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
                    {p.tag} · {p.category}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold">{p.title}</h3>
                </div>
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-ink bg-[var(--cream)] transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-[var(--muted-foreground)]">
            Nothing here yet — check back soon.
          </p>
        )}
      </section>
    </div>
  );
}