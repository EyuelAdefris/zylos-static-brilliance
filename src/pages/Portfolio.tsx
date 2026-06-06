import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/site/Reveal";

type Cat = "All" | "ERP" | "E-Commerce" | "Tourism" | "Hotel" | "Healthcare" | "Education" | "SaaS";
const categories: Cat[] = ["All", "ERP", "E-Commerce", "Tourism", "Hotel", "Healthcare", "Education", "SaaS"];

type Project = { name: string; category: Exclude<Cat, "All">; desc: string; tech: string[]; tone: string };

const projects: Project[] = [
  { name: "Atlas ERP", category: "ERP", desc: "Operations platform for a manufacturing group with inventory, finance, and HR.", tech: ["React", "Node", "PostgreSQL"], tone: "from-blue-500 to-cyan-400" },
  { name: "Vendora Commerce", category: "E-Commerce", desc: "Headless storefront with subscription billing and B2B portal.", tech: ["Next.js", "Stripe", "Tailwind"], tone: "from-amber-500 to-rose-400" },
  { name: "Sojourn Hotels", category: "Hotel", desc: "Booking engine and revenue dashboard for a boutique hotel chain.", tech: ["React", "NestJS", "AWS"], tone: "from-violet-500 to-fuchsia-400" },
  { name: "TripWeaver", category: "Tourism", desc: "Itinerary builder and marketplace connecting travelers and local guides.", tech: ["Next.js", "MongoDB"], tone: "from-emerald-500 to-teal-400" },
  { name: "MediTrack", category: "Healthcare", desc: "Clinic workflow tool with patient records and appointment scheduling.", tech: ["React", "PostgreSQL"], tone: "from-rose-500 to-pink-400" },
  { name: "ScholarHub", category: "Education", desc: "School management system covering attendance, grading, and parent portal.", tech: ["React", "NestJS"], tone: "from-indigo-500 to-blue-400" },
  { name: "InsightOps", category: "SaaS", desc: "Real-time observability for distributed teams with custom dashboards.", tech: ["React", "TypeScript"], tone: "from-cyan-500 to-sky-400" },
  { name: "Fleetly", category: "ERP", desc: "Fleet and dispatch management with route optimization.", tech: ["React", "Node"], tone: "from-orange-500 to-amber-400" },
  { name: "RentLite", category: "ERP", desc: "Rental management platform for equipment and property operators.", tech: ["Next.js", "PostgreSQL"], tone: "from-lime-500 to-emerald-400" },
  { name: "CarePlus", category: "Healthcare", desc: "Telehealth experience with video consults and prescription tracking.", tech: ["React", "WebRTC"], tone: "from-pink-500 to-rose-400" },
  { name: "TutorNest", category: "Education", desc: "Online tutoring marketplace with scheduling and payments.", tech: ["Next.js", "Stripe"], tone: "from-purple-500 to-indigo-400" },
  { name: "BillFlow", category: "SaaS", desc: "Modern invoicing SaaS for service businesses with automations.", tech: ["React", "TypeScript"], tone: "from-teal-500 to-cyan-400" },
];

export default function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const items = useMemo(() => (active === "All" ? projects : projects.filter((p) => p.category === active)), [active]);

  return (
    <>
      <Helmet>
        <title>Portfolio — Zylos Tech</title>
        <meta name="description" content="Selected work by Zylos Tech across ERP, e-commerce, hospitality, healthcare, education, and SaaS." />
        <link rel="canonical" href="/portfolio" />
      </Helmet>

      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Portfolio</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Products we've <span className="gradient-text">designed & shipped</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              A selection of work across industries — from enterprise to SaaS.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <LayoutGroup>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((c) => (
                <button key={c} onClick={() => setActive(c)} className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors">
                  {active === c && (
                    <motion.span layoutId="cat-pill" className="absolute inset-0 rounded-full bg-[image:var(--gradient-brand)]" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                  )}
                  <span className={`relative ${active === c ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{c}</span>
                </button>
              ))}
            </div>

            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {items.map((p) => (
                  <motion.article layout key={p.name} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }} whileHover={{ y: -6 }} className="group rounded-2xl overflow-hidden glass">
                    <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.tone} overflow-hidden`}>
                      <div className="absolute inset-0 grid-bg opacity-30" />
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="rounded-xl glass px-4 py-2 text-sm font-semibold">{p.name}</div>
                      </div>
                      <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end">
                        <div className="text-xs uppercase tracking-wide text-white/70">{p.category}</div>
                        <div className="mt-1 text-base font-semibold">{p.name}</div>
                        <p className="mt-1 text-xs text-white/80">{p.desc}</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">{p.category}</div>
                      </div>
                      <div className="mt-2 font-semibold">{p.name}</div>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span key={t} className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </section>
    </>
  );
}
