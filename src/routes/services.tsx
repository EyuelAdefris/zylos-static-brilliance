import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import {
  Globe, ShoppingBag, Building2, Cloud, Palette, Cable, ArrowRight, Check,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Zylos Tech" },
      { name: "description", content: "Web, e-commerce, enterprise systems, SaaS, UI/UX and API integration — full-stack engineering by Zylos Tech." },
      { property: "og:title", content: "Services — Zylos Tech" },
      { property: "og:description", content: "Full-stack engineering services from Zylos Tech." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom business websites engineered for speed, SEO and conversion.",
    features: ["Custom business websites", "SEO-friendly structure", "Responsive design", "Performance optimized"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Development",
    desc: "High-converting online stores with rich catalogs and checkout flows.",
    features: ["Online stores", "Product catalogs", "Payment integration design", "Order management UI"],
  },
  {
    icon: Building2,
    title: "Enterprise Systems",
    desc: "Operational platforms tailored to how your business actually runs.",
    features: ["ERP systems", "School management", "Rental management", "Hotel & hospitality"],
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    desc: "Multi-tenant subscription products with polished dashboards.",
    features: ["Cloud platform interfaces", "Subscription platforms", "Admin dashboards", "Analytics workflows"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Research-driven design systems and interfaces that delight.",
    features: ["Wireframes", "Prototypes", "Modern interfaces", "UX optimization"],
  },
  {
    icon: Cable,
    title: "API Integration",
    desc: "Connect third-party services into clean, reliable experiences.",
    features: ["REST & GraphQL", "Webhooks & events", "Auth providers", "Payment gateways"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Services</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Everything you need to ship <span className="gradient-text">world-class software</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              One focused team across design, engineering, and DevOps — for ambitious products in every category.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Stagger className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative rounded-3xl p-8 glass overflow-hidden transition-shadow hover:shadow-[var(--shadow-glow)]"
              >
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-5">
                  <div className="grid place-items-center h-14 w-14 rounded-2xl bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)] shrink-0">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                <ul className="mt-6 grid sm:grid-cols-2 gap-y-2 gap-x-4">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/90">
                      <Check className="h-4 w-4 text-accent shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-6 pb-24">
        <Reveal className="mx-auto max-w-5xl rounded-3xl p-10 md:p-14 text-center glass">
          <h2 className="text-3xl md:text-4xl font-bold">Not sure where to start?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Tell us your goals — we'll recommend the right path.</p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[image:var(--gradient-brand)] text-primary-foreground">
            Book a discovery call <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
