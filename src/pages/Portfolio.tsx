import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { ExternalLink } from "lucide-react";

/**
 * Available categories for portfolio filtering.
 */
type Cat = "All" | "ERP" | "E-Commerce" | "Tourism" | "Hotel" | "Healthcare" | "Education";

/**
 * Categories array used to render the filter pills.
 */
const categories: Cat[] = ["All", "ERP", "E-Commerce", "Tourism", "Hotel", "Healthcare", "Education"];

/**
 * Represents a single portfolio project item.
 */
type Project = {
  name: string;
  category: Exclude<Cat, "All">;
  desc: string;
  tech: string[];
  tone: string; // Gradient color tones for card hover border and fallbacks
  demoUrl: string; // Target URL for the project's interactive live demo
  image: string; // High-quality screenshot/illustration URL
};

/**
 * List of projects delivered by Zylos Tech.
 */
const projects: Project[] = [
  { name: "AAHRAMS", category: "ERP", desc: "Digital rental agreement management system designed to modernize and automate property contracts.", tech: ["React", "Tailwind", "Node"], tone: "from-indigo-500 to-violet-400", demoUrl: "https://aahrams.onrender.com/", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
  { name: "YAB Chemicals", category: "E-Commerce", desc: "Digital catalog and B2B ordering storefront serving Ethiopian industries with high-quality chemical supplies.", tech: ["React", "Tailwind", "Vite"], tone: "from-emerald-500 to-teal-400", demoUrl: "https://www.yabchemicals.com/", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" },
  { name: "Digital Menu", category: "Hotel", desc: "Interactive digital menu platform for restaurants and cafés to showcase dishes, drinks, and daily specials.", tech: ["React", "Tailwind", "Vite"], tone: "from-amber-500 to-orange-400", demoUrl: "https://digital-menu-zeta-indol.vercel.app/", image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=600&q=80" },
  { name: "Crafted By Her", category: "E-Commerce", desc: "Curated online marketplace showcasing unique handcrafted items and artisan goods made by women creators.", tech: ["React", "Node", "MongoDB"], tone: "from-pink-500 to-rose-400", demoUrl: "https://crafted-by-her.onrender.com/", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80" },
  { name: "Habesha Fit", category: "Healthcare", desc: "Premium Ethiopian-inspired fitness center combining high-altitude simulated training with modern sports conditioning science.", tech: ["HTML", "CSS", "JavaScript"], tone: "from-red-500 to-yellow-400", demoUrl: "https://ethio-gym.netlify.app/", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" },
  { name: "Gilberti Agency", category: "Tourism", desc: "International employment agency providing professional work visa assistance and job placement services in Finland and Hungary.", tech: ["React", "Tailwind", "Vite"], tone: "from-blue-600 to-indigo-500", demoUrl: "https://kansainvalinentyo.com/", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
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
                      <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-40" />
                      <div className="absolute inset-0 grid-bg opacity-30" />
                      <div className="absolute inset-0 grid place-items-center pointer-events-none">
                        <div className="rounded-xl glass px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md">{p.name}</div>
                      </div>
                      <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end text-left">
                        <div className="text-xs uppercase tracking-wide text-white/70">{p.category}</div>
                        <div className="mt-1 text-base font-semibold flex items-center gap-1.5 text-white">
                          {p.name} <ExternalLink className="h-3.5 w-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-white/80 line-clamp-2">{p.desc}</p>
                      </a>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">{p.category}</div>
                        <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 shrink-0">
                          Live Demo <ExternalLink className="h-3 w-3" />
                        </a>
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
