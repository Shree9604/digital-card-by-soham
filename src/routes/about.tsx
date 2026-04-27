import { useEffect } from "react";
import { Palette, Pen, Type, Share2, Printer, Monitor, Sparkles } from "lucide-react";
import { BlobBackground, Squiggle } from "@/components/BlobBackground";

const SKILLS = [
  { icon: Palette, label: "Branding", desc: "Logos, identity systems, guidelines" },
  { icon: Pen, label: "Illustration", desc: "Hand-drawn & vector art" },
  { icon: Type, label: "Typography", desc: "Type pairing & lettering" },
  { icon: Share2, label: "Social Media", desc: "Reels, posts, campaigns" },
  { icon: Printer, label: "Print", desc: "Posters, packaging, editorial" },
  { icon: Monitor, label: "Digital", desc: "Web visuals, UI graphics" },
];

const OBSESSED = [
  "Risograph textures",
  "90s indie magazine layouts",
  "Bouba/Kiki sound symbolism",
  "Hand-painted shop signs",
  "Bold serif type",
  "Color clashing on purpose",
];

export default function AboutPage() {
  useEffect(() => {
    document.title = "About — Bhagyashri Khobragade";
  }, []);
  return (
    <div className="relative">
      <BlobBackground />
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[var(--cream)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
          <Sparkles className="h-3.5 w-3.5" /> About
        </span>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="relative">
            <div className="absolute -inset-3 -rotate-3 rounded-3xl bg-gradient-art" />
            <div className="relative aspect-[4/5] rotate-2 overflow-hidden rounded-3xl border-2 border-ink bg-[var(--ink)] shadow-bold">
              <div className="grid h-full place-items-center">
                <span className="font-display text-[10rem] font-black leading-none text-[var(--cream)]">B</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border-2 border-ink bg-[var(--cream)] px-3 py-2 text-xs font-bold uppercase tracking-widest">
                Pune, India · Available for work
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-display text-5xl font-black leading-tight md:text-7xl">
              I design things that<br />
              <span className="text-gradient-art italic">refuse to be ignored.</span>
            </h1>
            <Squiggle className="mt-4 h-4 w-32 text-[var(--magenta)]" />

            <p className="mt-6 text-lg leading-relaxed text-[var(--muted-foreground)]">
              I'm <strong className="text-[var(--ink)]">Bhagyashri Khobragade</strong>, a graphic
              designer who treats every brief like a canvas. I work across branding,
              illustration and editorial — pulling from playful colour, expressive type
              and a love for handmade detail.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted-foreground)]">
              On Instagram I post as <strong className="text-[var(--ink)]">@the_art_wired</strong>,
              a sketchbook for half-finished thoughts and finished pieces alike.
            </p>

            <blockquote className="mt-8 border-l-4 border-[var(--magenta)] pl-6 font-display text-2xl italic md:text-3xl">
              "Design isn't decoration — it's the loudest way to say something quietly."
            </blockquote>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-4xl font-black md:text-5xl">What I do</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className="group rounded-2xl border-2 border-ink bg-[var(--cream)] p-6 shadow-bold-sm transition-transform hover:-translate-y-1 hover:rotate-1"
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl border-2 border-ink"
                  style={{ background: i % 2 === 0 ? "var(--magenta)" : "var(--orange)" }}
                >
                  <Icon className="h-6 w-6 text-[var(--cream)]" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">{label}</h3>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl border-2 border-ink bg-[var(--ink)] p-8 text-[var(--cream)] shadow-bold md:p-12">
          <h2 className="font-display text-3xl font-black md:text-4xl">
            Currently obsessed with
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {OBSESSED.map((o, i) => (
              <li
                key={o}
                className="rounded-full border-2 px-4 py-2 text-sm font-semibold"
                style={{
                  borderColor: "var(--cream)",
                  background: i % 3 === 0 ? "var(--magenta)" : i % 3 === 1 ? "var(--orange)" : "transparent",
                }}
              >
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
