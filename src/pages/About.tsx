import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { Lightbulb, Trophy, ShieldCheck, Eye, Users, Target, Compass, Rocket } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We push boundaries and adopt the right tech for each problem." },
  { icon: Trophy, title: "Excellence", desc: "Every detail, from architecture to micro-interactions, is crafted." },
  { icon: ShieldCheck, title: "Reliability", desc: "Predictable delivery, hardened systems, and clear communication." },
  { icon: Eye, title: "Transparency", desc: "Open roadmaps, honest timelines, and full ownership of outcomes." },
  { icon: Users, title: "Client Success", desc: "Your success defines ours — we measure impact, not output." },
];

const team = [
  { name: "Eyob Alemu", role: "Founder & CEO", tone: "from-blue-500 to-cyan-400" },
  { name: "Selam Bekele", role: "Head of Design", tone: "from-fuchsia-500 to-pink-400" },
  { name: "Mikiyas Tadesse", role: "Lead Engineer", tone: "from-emerald-500 to-teal-400" },
  { name: "Hewan Girma", role: "Product Manager", tone: "from-amber-500 to-orange-400" },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Zylos Tech</title>
        <meta name="description" content="Meet Zylos Tech — a premium software engineering company crafting enterprise systems and SaaS platforms from Ethiopia for the world." />
        <link rel="canonical" href="/about" />
      </Helmet>

      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">About Zylos Tech</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Crafting software that <span className="gradient-text">moves businesses forward</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Founded in Addis Ababa with a global mindset, Zylos Tech partners with ambitious teams to design, build, and scale digital products that last.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Mission", desc: "Empower organizations worldwide with software that's reliable, beautiful, and built to scale." },
            { icon: Compass, title: "Vision", desc: "Become the partner of choice for ambitious companies turning ideas into category-defining products." },
            { icon: Rocket, title: "Growth Journey", desc: "From a small studio in 2021 to a multidisciplinary team shipping for clients across three continents." },
          ].map((b) => (
            <Reveal key={b.title}>
              <div className="h-full rounded-2xl p-6 glass">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-[image:var(--gradient-brand)]">
                  <b.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Core Values</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">What we stand for</h2>
          </Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((v) => (
              <motion.div key={v.title} variants={itemVariants} whileHover={{ y: -4 }} className="rounded-2xl p-6 glass">
                <v.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Team</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">The people behind the work</h2>
          </Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m) => (
              <motion.div key={m.name} variants={itemVariants} className="rounded-2xl glass overflow-hidden">
                <div className={`aspect-square bg-gradient-to-br ${m.tone} grid place-items-center text-5xl font-extrabold text-white/90`}>
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="p-5">
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-sm text-muted-foreground">{m.role}</div>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
