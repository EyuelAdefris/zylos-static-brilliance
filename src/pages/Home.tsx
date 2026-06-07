import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowRight, Code2, LayoutGrid, Cloud, Palette, Cable, Building2,
  Sparkles, Rocket, ShieldCheck, LifeBuoy, Globe2, Zap, Star, Quote, ExternalLink,
} from "lucide-react";
import { HeroVisual } from "@/components/site/HeroVisual";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";

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

/**
 * Featured projects list displayed on the homepage.
 * Includes category label, backdrop color tone, live demo URL, and premium mockup image.
 */
const projects = [
  { name: "AAHRAMS", category: "ERP", tone: "from-indigo-500 to-violet-400", demoUrl: "https://aahrams.onrender.com/", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
  { name: "Digital Menu", category: "Hotel", tone: "from-amber-500 to-orange-400", demoUrl: "https://digital-menu-zeta-indol.vercel.app/", image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=600&q=80" },
  { name: "Crafted By Her", category: "E-Commerce", desc: "Curated online marketplace showcasing unique handcrafted items and artisan goods made by women creators.", tech: ["React", "Node", "MongoDB"], tone: "from-pink-500 to-rose-400", demoUrl: "https://crafted-by-her.onrender.com/", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80" }
];

const testimonials = [
  { name: "Ababi Yirga.", role: "CEO, Yab Chemicals", quote: "Zylos Tech transformed our vision into a professional, modern website. Their expertise, responsiveness, and commitment to quality exceeded our expectations. We highly recommend their services." },
  { name: "Adefris ayalew.", role: "CEO, Bilen Company", quote: "Their team feels like an in-house engineering org. Every release is polished and on time." },
  { name: "Liya K.", role: "Product Lead, Vendora", quote: "We've tripled conversions since the rebuild. The attention to detail is unmatched." },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Zylos Tech — Building Powerful Software Solutions</title>
        <meta name="description" content="Zylos Tech develops high-performance websites, enterprise systems, and scalable software solutions for businesses worldwide." />
        <meta property="og:title" content="Zylos Tech — Building Powerful Software Solutions" />
        <meta property="og:description" content="High-performance websites, enterprise systems, and scalable SaaS solutions." />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Now accepting new projects for Q3 2026
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Building <span className="gradient-text">Powerful Software</span> Solutions For The Future
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
              Zylos Tech develops high-performance websites, enterprise systems, and scalable software solutions for businesses worldwide.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] hover:translate-y-[-1px] transition-transform">
                Start a Project <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold glass hover:bg-white/10 transition-colors">
                Explore Services
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                <span className="ml-1">5.0 client rating</span>
              </div>
              <div>SOC 2 aware engineering</div>
              <div className="hidden sm:block">Trusted across company</div>
            </motion.div>
          </div>
          <div className="relative"><HeroVisual /></div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { to: 20, suffix: "+", label: "Projects Delivered" },
            { to: 10, suffix: "+", label: "Clients" },
            { to: 3, suffix: "+", label: "Years Experience" },
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

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Services</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Engineering across the entire stack</h2>
            <p className="mt-3 text-muted-foreground">From pixel-perfect interfaces to globally distributed systems — one focused team, end to end.</p>
          </Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <motion.div key={s.title} variants={itemVariants} whileHover={{ y: -6 }} className="group relative rounded-2xl p-6 glass overflow-hidden transition-shadow hover:shadow-[var(--shadow-glow)]">
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

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Featured Work</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Projects we're proud of</h2>
            </div>
            <Link to="/portfolio" className="text-sm font-semibold gradient-text">View all projects →</Link>
          </Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((p) => (
              <motion.div key={p.name} variants={itemVariants} whileHover={{ y: -6 }} className="group relative rounded-2xl overflow-hidden glass">
                <div className={`aspect-[4/3] bg-gradient-to-br ${p.tone} relative overflow-hidden`}>
                  <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-40" />
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 grid place-items-center pointer-events-none">
                    <div className="rounded-xl glass px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md">{p.name}</div>
                  </div>
                  <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center text-white">
                    <span className="text-sm font-semibold inline-flex items-center gap-2">Live Demo <ExternalLink className="h-4 w-4" /></span>
                  </a>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">{p.category}</div>
                    <div className="mt-1 font-semibold">{p.name} Platform</div>
                  </div>
                  <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 shrink-0">
                    Live Demo <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

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

      <section className="px-6 pb-24">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center" style={{ background: "linear-gradient(135deg, oklch(0.3 0.12 262), oklch(0.25 0.08 258))" }}>
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="glow-orb h-72 w-72 -top-20 left-1/2 -translate-x-1/2" style={{ background: "oklch(0.65 0.2 262)" }} />
            <div className="relative">
              <Zap className="h-8 w-8 mx-auto text-accent" />
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">Ready To Build Your Next Digital Solution?</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Tell us about your goals — we'll respond within one business day with a tailored plan.</p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold bg-white text-[oklch(0.2_0.05_260)] hover:bg-white/90 transition">
                Let's Talk <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
