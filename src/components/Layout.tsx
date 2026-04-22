import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Toaster } from "@/components/ui/sonner";

const INSTAGRAM_URL = "https://instagram.com/the_art_wired";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;

function Navbar() {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-[var(--cream)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-art font-display text-lg font-black text-[var(--cream)] shadow-bold-sm transition-transform group-hover:rotate-12">
            BK
          </span>
          <span className="hidden font-display text-sm font-bold uppercase tracking-widest sm:block">
            the_art_wired
          </span>
        </Link>
        <nav className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative rounded-full px-3 py-1.5 text-sm font-semibold transition-colors md:px-4 md:py-2 ${
                  isActive
                    ? "bg-ink text-[var(--cream)]"
                    : "text-ink hover:bg-ink/10"
                }`}
                style={isActive ? { backgroundColor: "var(--ink)", color: "var(--cream)" } : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-ink bg-[var(--ink)] text-[var(--cream)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <h3 className="font-display text-3xl font-black">Bhagyashri</h3>
          <p className="mt-2 text-sm opacity-80">
            Graphic designer crafting bold visual stories.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-display text-lg font-bold">Navigate</span>
          {navItems.map((i) => (
            <Link key={i.to} to={i.to} className="opacity-80 hover:opacity-100 hover:underline w-fit">
              {i.label}
            </Link>
          ))}
        </div>
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-[var(--cream)] p-2">
            <QRCodeSVG value={INSTAGRAM_URL} size={80} bgColor="transparent" fgColor="#1a0a2e" />
          </div>
          <div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold hover:underline"
            >
              <Instagram className="h-4 w-4" />
              @the_art_wired
            </a>
            <p className="mt-2 text-xs opacity-60">Scan to follow</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--cream)]/20 px-4 py-4 text-center text-xs opacity-70 md:px-8">
        © {new Date().getFullYear()} Bhagyashri Khobragade. All rights reserved.
      </div>
    </footer>
  );
}

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export { INSTAGRAM_URL };