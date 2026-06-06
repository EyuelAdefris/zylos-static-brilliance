export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="glow-orb h-[480px] w-[480px] -top-32 -left-20" style={{ background: "oklch(0.55 0.22 262)" }} />
      <div className="glow-orb h-[420px] w-[420px] top-1/3 -right-32" style={{ background: "oklch(0.7 0.18 248)" }} />
      <div className="glow-orb h-[360px] w-[360px] bottom-0 left-1/3" style={{ background: "oklch(0.5 0.2 270)" }} />
    </div>
  );
}
