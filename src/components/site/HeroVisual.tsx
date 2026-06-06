import { motion } from "framer-motion";
import { Activity, Cloud, Code2, Cpu, Database, Layers, Server, Shield } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] aspect-[5/4]">
      {/* Glow */}
      <div className="absolute inset-8 rounded-3xl bg-[image:var(--gradient-brand)] opacity-30 blur-3xl" />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full rounded-3xl glass overflow-hidden shadow-[var(--shadow-card)]"
        style={{ background: "linear-gradient(180deg, oklch(0.24 0.04 258 / 0.7), oklch(0.18 0.035 256 / 0.7))" }}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <div className="ml-3 text-xs text-muted-foreground font-mono">zylos.cloud/dashboard</div>
        </div>

        <div className="grid grid-cols-3 gap-3 p-4">
          {[
            { label: "Uptime", value: "99.99%", icon: Activity },
            { label: "Deploys", value: "1,284", icon: Cloud },
            { label: "Latency", value: "42ms", icon: Cpu },
          ].map((m) => (
            <div key={m.label} className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</span>
                <m.icon className="h-3.5 w-3.5 text-primary" />
              </div>
              <div className="mt-1.5 text-base font-semibold">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="px-4 pb-4">
          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">Throughput</div>
              <div className="text-xs gradient-text font-semibold">+24%</div>
            </div>
            <svg viewBox="0 0 300 80" className="mt-3 w-full h-20">
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.65 0.2 262)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="oklch(0.65 0.2 262)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
                d="M0,60 C30,55 50,30 80,35 C120,42 140,15 180,22 C220,28 240,55 280,40 L300,38"
                fill="none"
                stroke="oklch(0.72 0.16 248)"
                strokeWidth="2"
              />
              <path
                d="M0,60 C30,55 50,30 80,35 C120,42 140,15 180,22 C220,28 240,55 280,40 L300,38 L300,80 L0,80 Z"
                fill="url(#g1)"
              />
            </svg>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 flex items-center gap-2">
              <Database className="h-4 w-4 text-accent" />
              <div>
                <div className="text-[10px] text-muted-foreground uppercase">DB</div>
                <div className="text-xs font-medium">PostgreSQL · OK</div>
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              <div>
                <div className="text-[10px] text-muted-foreground uppercase">Security</div>
                <div className="text-xs font-medium">All checks passed</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute -left-6 top-24 glass rounded-2xl p-3 shadow-[var(--shadow-card)] animate-float"
      >
        <div className="flex items-center gap-2">
          <Server className="h-4 w-4 text-primary" />
          <div>
            <div className="text-[10px] uppercase text-muted-foreground">Region</div>
            <div className="text-xs font-semibold">eu-west · live</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute -right-4 top-1/2 glass rounded-2xl p-3 shadow-[var(--shadow-card)] animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex items-center gap-2">
          <Code2 className="h-4 w-4 text-accent" />
          <div>
            <div className="text-[10px] uppercase text-muted-foreground">Build</div>
            <div className="text-xs font-mono">#1284 ✓ passed</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute -bottom-4 left-10 glass rounded-2xl px-3 py-2 shadow-[var(--shadow-card)] animate-float"
        style={{ animationDelay: "1.6s" }}
      >
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-primary" />
          <div className="text-xs font-medium">12 microservices online</div>
        </div>
      </motion.div>
    </div>
  );
}
