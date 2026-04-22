export function BlobBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="animate-blob absolute -top-20 -left-20 h-80 w-80 rounded-full opacity-60 blur-3xl"
        style={{ background: "var(--magenta)" }}
      />
      <div
        className="animate-blob absolute top-40 -right-20 h-96 w-96 rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--orange)", animationDelay: "-4s" }}
      />
      <div
        className="animate-blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--violet)", animationDelay: "-8s" }}
      />
    </div>
  );
}

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 20" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M2 10 Q 15 2, 30 10 T 60 10 T 90 10 T 118 10" />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0 L14 9 L23 11 L14 13 L12 22 L10 13 L1 11 L10 9 Z" />
    </svg>
  );
}