import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, type ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";
import { AlertCircle, CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().min(10, "Tell us a bit more (10+ characters)"),
});
type FormData = z.infer<typeof schema>;

const services = ["Web Development", "Enterprise System", "E-Commerce", "UI/UX Design", "Other"];

const input = "w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/40 transition";

function Field({ label, error, children, className }: { label: string; error?: string; children: ReactNode; className?: string }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-xs uppercase tracking-wide text-muted-foreground font-medium">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-rose-400">{error}</span>}
    </label>
  );
}


export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSendError(false);
    try {
      const res = await fetch("https://formspree.io/f/xnjypvkk", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company ?? "—",
          phone: data.phone ?? "—",
          service: data.service,
          message: data.message,
        }),
      });

      const body = await res.json();
      console.log("[Formspree] status:", res.status, "body:", body);

      // Formspree returns { ok: true } on real success
      if (!res.ok || body.ok === false) {
        console.error("[Formspree] error:", body.error ?? body.errors);
        throw new Error(body.error ?? "Submission failed");
      }

      setSent(true);
      reset();
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error("[Formspree] catch:", err);
      setSendError(true);
      setTimeout(() => setSendError(false), 6000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact — Zylos Tech</title>
        <meta name="description" content="Get in touch with Zylos Tech. We'll respond within one business day." />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Contact</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Let's build <span className="gradient-text">something great</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project. We typically respond within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl p-8 glass h-full">
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">Prefer email or phone? Reach out directly.</p>
              <ul className="mt-8 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-[image:var(--gradient-brand)] shrink-0">
                    <MapPin className="h-4 w-4 text-primary-foreground" />
                  </span>
                  <div>
                    <div className="text-muted-foreground text-xs uppercase tracking-wide">Office</div>
                    <div className="mt-0.5">Bole, Addis Ababa, Ethiopia</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-[image:var(--gradient-brand)] shrink-0">
                    <Mail className="h-4 w-4 text-primary-foreground" />
                  </span>
                  <div>
                    <div className="text-muted-foreground text-xs uppercase tracking-wide">Email</div>
                    <div className="mt-0.5">zylostech21@gmail.com</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-[image:var(--gradient-brand)] shrink-0">
                    <Phone className="h-4 w-4 text-primary-foreground" />
                  </span>
                  <div>
                    <div className="text-muted-foreground text-xs uppercase tracking-wide">Phone</div>
                    <div className="mt-0.5">+251 938117596</div>
                    <div className="mt-0.5">+251 967934504</div>
                    <div className="mt-0.5">+251 948822471</div>
                  </div>
                </li>
              </ul>

              <div className="mt-10 rounded-2xl p-5 bg-white/[0.03] border border-white/10">
                <div className="text-sm font-semibold">Response promise</div>
                <p className="mt-1 text-xs text-muted-foreground">Every inquiry gets a tailored response within one business day.</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl p-8 glass">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" error={errors.name?.message}>
                  <input {...register("name")} className={input} placeholder="Your name" />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input {...register("email")} className={input} placeholder="you@company.com" />
                </Field>
                <Field label="Company">
                  <input {...register("company")} className={input} placeholder="Company (optional)" />
                </Field>
                <Field label="Phone">
                  <input {...register("phone")} className={input} placeholder="+251 ..." />
                </Field>
                <Field label="Service" error={errors.service?.message} className="sm:col-span-2">
                  <select {...register("service")} className={input} defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Message" error={errors.message?.message} className="sm:col-span-2">
                  <textarea {...register("message")} rows={5} className={input} placeholder="Tell us about your project, goals and timeline…" />
                </Field>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted about your inquiry.</p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] disabled:opacity-60"
                >
                  {isSubmitting ? "Sending…" : (<>Send message <Send className="h-4 w-4" /></>)}
                </button>
              </div>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-4 py-3 text-sm text-emerald-300"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0" /> Thanks — your message was sent. We'll be in touch shortly.
                  </motion.div>
                )}
                {sendError && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    className="mt-5 flex items-center gap-2 rounded-xl bg-rose-500/10 border border-rose-500/30 px-4 py-3 text-sm text-rose-300"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" /> Something went wrong. Email us directly at zylostech21@gmail.com.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
