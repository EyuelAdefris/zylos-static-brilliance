import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-[oklch(0.13_0.03_256)]">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-[image:var(--gradient-brand)]">
              <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="font-display font-bold text-lg">Zylos<span className="gradient-text">Tech</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Zylos Tech is a premium software engineering company crafting high-performance
            websites, enterprise systems, and scalable SaaS platforms for businesses worldwide.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="grid place-items-center h-10 w-10 rounded-full glass hover:border-primary/40 hover:text-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground/80">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/technologies", label: "Technologies" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground/80">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Addis Ababa, Ethiopia</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> hello@zylostech.com</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +251 900 000 000</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026 Zylos Tech. All rights reserved.</p>
          <p>Building innovative software solutions from Ethiopia for the world.</p>
        </div>
      </div>
    </footer>
  );
}
