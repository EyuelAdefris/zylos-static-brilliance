import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { useRef } from "react";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Zylos Tech" },
      { name: "description", content: "The frontend, backend, database, and cloud technologies Zylos Tech works with." },
      { property: "og:title", content: "Technologies — Zylos Tech" },
      { property: "og:description", content: "Our technology expertise across the stack." },
      { property: "og:url", content: "/technologies" },
    ],
    links: [{ rel: "canonical", href: "/technologies" }],
  }),
  component: TechPage,
});

type Stack = { title: string; items: { name: string; level: number }[] };

const stacks: Stack[] = [
  { title: "Frontend", items: [
    { name: "React", level: 98 }, { name: "TypeScript", level: 96 },
    { name: "Next.js", level: 92 }, { name: "Tailwind CSS", level: 95 },
  ]},
  { title: "Backend", items: [
    { name: "Node.js", level: 95 }, { name: "Express", level: 92 }, { name: "NestJS", level: 90 },
  ]},
  { title: "Databases", items: [
    { name: "PostgreSQL", level: 94 }, { name: "MongoDB", level: 88 }, { name: "MySQL", level: 85 },
  ]},
  { title: "Cloud & DevOps", items: [
    { name: "AWS", level: 90 }, { name: "Docker", level: 92 }, { name: "Vercel", level: 95 },
  ]},
];

function Bar({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref} className="h-2 rounded-full bg-white/5 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: inView ? `${value}%` : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full bg-[image:var(--gradient-brand)]"
      />
    </div>
  );
}

function TechPage() {
  return (
    <>
      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Technologies</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Modern tools for <span className="gradient-text">production-grade software</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              We pick the right tool for the job — from product UIs to distributed backends and cloud infrastructure.
            </p>
            <p className="mt-3 text-xs text-muted-foreground/80">These are technologies Zylos Tech works with for client projects.</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-6">
          {stacks.map((stack) => (
            <Reveal key={stack.title}>
              <div className="rounded-3xl p-8 glass">
                <h3 className="text-lg font-semibold">{stack.title}</h3>
                <Stagger className="mt-6 space-y-5">
                  {stack.items.map((it) => (
                    <motion.div key={it.name} variants={itemVariants}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{it.name}</span>
                        <span className="text-muted-foreground">{it.level}%</span>
                      </div>
                      <div className="mt-2"><Bar value={it.level} /></div>
                    </motion.div>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">And many more…</h2>
            <p className="mt-2 text-muted-foreground">A glimpse of the ecosystem we operate in daily.</p>
          </Reveal>
          <Stagger className="mt-10 flex flex-wrap justify-center gap-3">
            {["Redis", "GraphQL", "Prisma", "Kubernetes", "Stripe", "Figma", "Sentry", "Cloudflare", "Supabase", "Firebase", "Linux", "GitHub Actions"].map((t) => (
              <motion.span key={t} variants={itemVariants} className="px-4 py-2 rounded-full glass text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                {t}
              </motion.span>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
