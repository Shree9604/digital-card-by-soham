import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { QRCodeSVG } from "qrcode.react";
import { toast } from "sonner";
import { Instagram, Send, Sparkles } from "lucide-react";
import { BlobBackground, Star } from "@/components/BlobBackground";
import { INSTAGRAM_URL } from "@/components/Layout";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bhagyashri Khobragade" },
      { name: "description", content: "Get in touch with Bhagyashri Khobragade for branding, illustration and design projects. DM @the_art_wired or send a message." },
      { property: "og:title", content: "Let's create together — Bhagyashri Khobragade" },
      { property: "og:description", content: "Reach out for design collaborations, briefs and brand projects." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof typeof form;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Message sent! Bhagyashri will get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="relative">
      <BlobBackground />
      <Star className="absolute right-12 top-24 h-10 w-10 animate-spin-slow text-[var(--magenta)]" />
      <Star className="absolute left-12 top-1/2 h-6 w-6 animate-spin-slow text-[var(--orange)]" />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[var(--cream)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-bold-sm">
          <Sparkles className="h-3.5 w-3.5" /> Get in touch
        </span>
        <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] md:text-7xl">
          Let's <span className="text-gradient-art italic">create</span><br />
          together.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-[var(--muted-foreground)]">
          Got a brief, an idea or just want to say hi? Drop a message — or scan
          the QR to slide into the DMs.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border-2 border-ink bg-[var(--cream)] p-6 shadow-bold md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input
                  value={form.name}
                  onChange={onChange("name")}
                  maxLength={100}
                  className="w-full rounded-xl border-2 border-ink bg-white px-4 py-3 font-medium outline-none focus:ring-4 focus:ring-[var(--magenta)]/30"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  maxLength={255}
                  className="w-full rounded-xl border-2 border-ink bg-white px-4 py-3 font-medium outline-none focus:ring-4 focus:ring-[var(--magenta)]/30"
                  placeholder="you@email.com"
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Subject" error={errors.subject}>
                <input
                  value={form.subject}
                  onChange={onChange("subject")}
                  maxLength={150}
                  className="w-full rounded-xl border-2 border-ink bg-white px-4 py-3 font-medium outline-none focus:ring-4 focus:ring-[var(--magenta)]/30"
                  placeholder="Project, collab, hello…"
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Message" error={errors.message}>
                <textarea
                  value={form.message}
                  onChange={onChange("message")}
                  maxLength={1000}
                  rows={6}
                  className="w-full resize-none rounded-xl border-2 border-ink bg-white px-4 py-3 font-medium outline-none focus:ring-4 focus:ring-[var(--magenta)]/30"
                  placeholder="Tell me about your idea…"
                />
              </Field>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[var(--ink)] px-6 py-3 text-sm font-bold text-[var(--cream)] shadow-bold-sm transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send Message"} <Send className="h-4 w-4" />
            </button>
          </form>

          {/* QR + Instagram CTA */}
          <aside className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-3 -rotate-3 rounded-3xl bg-gradient-art" />
              <div className="relative rotate-2 rounded-3xl border-2 border-ink bg-[var(--cream)] p-6 shadow-bold">
                <p className="font-display text-sm font-bold uppercase tracking-widest">
                  Scan to DM
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 block rounded-2xl border-2 border-ink bg-white p-4"
                >
                  <QRCodeSVG
                    value={INSTAGRAM_URL}
                    size={220}
                    level="H"
                    bgColor="#ffffff"
                    fgColor="#1a0a2e"
                    className="mx-auto h-auto w-full"
                  />
                </a>
                <p className="mt-3 text-center font-display text-xl font-black">@the_art_wired</p>
              </div>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-gradient-hero px-6 py-4 font-bold text-[var(--cream)] shadow-bold-sm transition-transform hover:-translate-y-0.5"
            >
              <Instagram className="h-5 w-5" /> Open Instagram
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-sm font-bold uppercase tracking-widest">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs font-semibold text-[var(--destructive)]">{error}</span>}
    </label>
  );
}