import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Code2, LayoutGrid, Cloud, Palette, Cable, Building2,
  Sparkles, Rocket, ShieldCheck, LifeBuoy, Globe2, Zap, Star, Quote,
} from "lucide-react";
import { HeroVisual } from "@/components/site/HeroVisual";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zylos Tech — Building Powerful Software Solutions" },
      { name: "description", content: "Zylos Tech develops high-performance websites, enterprise systems, and scalable software solutions for businesses worldwide." },
      { property: "og:title", content: "Zylos Tech — Building Powerful Software Solutions" },
      { property: "og:description", content: "High-performance websites, enterprise systems, and scalable SaaS solutions." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Code2, title: "Web Development", desc: "Lightning-fast marketing sites and complex web apps with modern frameworks." },
  { icon: Building2, title: "Enterprise Systems", desc: "ERP, HRM, inventory, and operations platforms built for scale." },
  { icon: LayoutGrid, title: "SaaS Solutions", desc: "Multi-tenant subscription platforms with dashboards and billing." },
  { icon: Palette, title: "UI/UX Design", desc: "Research-led design systems and interfaces that convert and delight." },
  { icon: Cable, title: "API Integration", desc: "Seamless integrations with payment, messaging, and third-party services." },
  { icon: Cloud, title: "Cloud Deployment", desc: "Containerized, observable deployments on AWS, Vercel, and beyond." },
];

const whyUs = [
  { icon: Sparkles, title: "Modern Technologies", desc: "We work at the cutting edge with React 19, TypeScript, and serverless." },
  { icon: Rocket, title: "Fast Delivery", desc: "Agile sprints with clear milestones — ship value every two weeks." },
  { icon: LayoutGrid, title: "Scalable Solutions", desc: "Architectures designed to grow from MVP to millions of users." },
  { icon: ShieldCheck, title: "Security Focused", desc: "Hardened by default — auth, encryption, and compliance baked in." },
  { icon: LifeBuoy, title: "Long-Term Support", desc: "We stay with you post-launch — SLAs, monitoring, and iteration." },
  { icon: Globe2, title: "Global Standards", desc: "International quality bar with a deep local engineering culture." },
];

const projects = [
  { name: "Atlas ERP", category: "Enterprise", tone: "from-blue-500 to-cyan-400" },
  { name: "Sojourn Hotels", category: "Hospitality", tone: "from-violet-500 to-fuchsia-400" },
  { name: "Vendora Commerce", category: "E-Commerce", tone: "from-amber-500 to-rose-400" },
];

const testimonials = [
  { name: "Hanna T.", role: "CTO, FinAxis", quote: "Zylos delivered our SaaS platform two weeks early. Architecture, design, and DX are all outstanding." },
  { name: "Daniel M.", role: "CEO, Sojourn", quote: "Their team feels like an in-house engineering org. Every release is polished and on time." },
  { name: "Liya K.", role: "Product Lead, Vendora", quote: "We've tripled conversions since the rebuild. The attention to detail is unmatched." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Now accepting new projects for Q3 2026
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
            >
              Building <span className="gradient-text">Powerful Software</span> Solutions For The Future
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground"
            >
              Zylos Tech develops high-performance websites, enterprise systems, and scalable
              software solutions for businesses worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] hover:translate-y-[-1px] transition-transform"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold glass hover:bg-white/10 transition-colors"
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
            >
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                <span className="ml-1">5.0 client rating</span>
              </div>
              <div>SOC 2 aware engineering</div>
              <div className="hidden sm:block">Trusted across 8+ countries</div>
            </motion.div>
          </div>
          <div className="relative">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { to: 50, suffix: "+", label: "Projects Delivered" },
            { to: 20, suffix: "+", label: "Happy Clients" },
            { to: 5, suffix: "+", label: "Years Experience" },
            { to: 99, suffix: "%", label: "Client Satisfaction" },
          ].map((s) => (
            <Reveal key={s.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-extrabold gradient-text">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Services</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Engineering across the entire stack</h2>
            <p className="mt-3 text-muted-foreground">From pixel-perfect interfaces to globally distributed systems — one focused team, end to end.</p>
          </Reveal>

          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-6 glass overflow-hidden transition-shadow hover:shadow-[var(--shadow-glow)]"
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)]">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Why Zylos Tech</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">A partner you can build the next decade with</h2>
          </Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((f) => (
              <motion.div key={f.title} variants={itemVariants} className="rounded-2xl p-6 glass">
                <f.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Featured Work</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Projects we're proud of</h2>
            </div>
            <Link to="/portfolio" className="text-sm font-semibold gradient-text">View all projects →</Link>
          </Reveal>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            {projects.map((p) => (
              <motion.div key={p.name} variants={itemVariants} whileHover={{ y: -6 }} className="group relative rounded-2xl overflow-hidden glass">
                <div className={`aspect-[4/3] bg-gradient-to-br ${p.tone} relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="rounded-xl glass px-4 py-2 text-sm font-semibold">{p.name}</div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center">
                    <span className="text-sm font-semibold inline-flex items-center gap-2">View case study <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">{p.category}</div>
                  <div className="mt-1 font-semibold">{p.name} Platform</div>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Testimonials</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Loved by founders and CTOs</h2>
          </Reveal>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={itemVariants} className="rounded-2xl p-6 glass">
                <Quote className="h-6 w-6 text-primary" />
                <p className="mt-4 text-sm text-foreground/90 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[image:var(--gradient-brand)] grid place-items-center text-sm font-bold text-primary-foreground">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
               style={{ background: "linear-gradient(135deg, oklch(0.3 0.12 262), oklch(0.25 0.08 258))" }}>
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="glow-orb h-72 w-72 -top-20 left-1/2 -translate-x-1/2" style={{ background: "oklch(0.65 0.2 262)" }} />
            <div className="relative">
              <Zap className="h-8 w-8 mx-auto text-accent" />
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">Ready To Build Your Next Digital Solution?</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Tell us about your goals — we'll respond within one business day with a tailored plan.</p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold bg-white text-[oklch(0.2_0.05_260)] hover:bg-white/90 transition"
              >
                Let's Talk <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
