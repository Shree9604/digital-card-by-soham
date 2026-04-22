import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { ArrowRight, Instagram, Sparkles } from "lucide-react";
import { BlobBackground, Squiggle, Star } from "@/components/BlobBackground";
import { INSTAGRAM_URL } from "@/components/Layout";

const ROTATING = ["Visual Storyteller", "Brand Designer", "Type Lover", "Art Wired"];
const MARQUEE = ["Branding", "★", "Illustration", "★", "Typography", "★", "Print", "★", "Social", "★", "Editorial", "★"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhagyashri Khobragade — Graphic Designer" },
      { name: "description", content: "Digital visiting card of Bhagyashri Khobragade — graphic designer crafting bold brands, illustrations and visual stories. Follow @the_art_wired." },
      { property: "og:title", content: "Bhagyashri Khobragade — Graphic Designer" },
      { property: "og:description", content: "Bold visual storytelling, branding & illustration. The digital card of @the_art_wired." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-10 md:px-8 md:pt-16">
        <BlobBackground />

        <Star className="absolute right-10 top-20 h-8 w-8 animate-spin-slow text-[var(--magenta)]" />
        <Squiggle className="absolute left-10 top-32 h-4 w-24 text-[var(--orange)]" />
        <Star className="absolute bottom-10 left-1/4 h-6 w-6 animate-spin-slow text-[var(--violet)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[var(--cream)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
              <Sparkles className="h-3.5 w-3.5" /> Digital Visiting Card
            </span>
            <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7.5rem)] font-black leading-[0.9]">
              <span className="block">Bhagyashri</span>
              <span className="block text-gradient-art">Khobragade</span>
            </h1>
            <div className="mt-6 flex flex-wrap items-baseline gap-3 font-display text-2xl md:text-3xl">
              <span className="font-bold">Graphic Designer</span>
              <span className="text-[var(--muted-foreground)]">·</span>
              <span
                key={idx}
                className="inline-block animate-[fade-in_0.5s_ease-out] italic text-[var(--magenta)]"
              >
                {ROTATING[idx]}
              </span>
            </div>
            <p className="mt-6 max-w-xl text-base text-[var(--muted-foreground)] md:text-lg">
              I make brands look loud, ideas look sharp, and pixels behave. Currently
              wiring art into the internet as <strong>@the_art_wired</strong>.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[var(--ink)] px-6 py-3 text-sm font-bold text-[var(--cream)] shadow-bold-sm transition-transform hover:-translate-y-0.5"
              >
                View Work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[var(--cream)] px-6 py-3 text-sm font-bold shadow-bold-sm transition-transform hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-gradient-hero px-6 py-3 text-sm font-bold text-[var(--cream)] shadow-bold-sm transition-transform hover:-translate-y-0.5"
              >
                <Instagram className="h-4 w-4" /> Follow
              </a>
            </div>
          </div>

          {/* QR card */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rotate-3 rounded-3xl bg-gradient-art opacity-90" />
            <div className="relative -rotate-2 rounded-3xl border-2 border-ink bg-[var(--cream)] p-6 shadow-bold">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold uppercase tracking-widest">Scan me</span>
                <Instagram className="h-5 w-5" />
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 block rounded-2xl border-2 border-ink bg-white p-4 transition-transform hover:scale-[1.02]"
              >
                <QRCodeSVG
                  value={INSTAGRAM_URL}
                  size={240}
                  level="H"
                  bgColor="#ffffff"
                  fgColor="#1a0a2e"
                  className="mx-auto h-auto w-full"
                />
              </a>
              <div className="mt-4 text-center">
                <p className="font-display text-2xl font-black">@the_art_wired</p>
                <p className="text-xs text-[var(--muted-foreground)]">Instagram · Tap or scan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y-2 border-ink bg-[var(--ink)] py-4 text-[var(--cream)]">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 gap-8 whitespace-nowrap pr-8 font-display text-2xl font-bold uppercase">
            {[...MARQUEE, ...MARQUEE].map((w, i) => (
              <span key={i} className={i % 2 === 1 ? "text-[var(--magenta)]" : ""}>{w}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
