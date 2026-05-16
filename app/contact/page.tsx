"use client";
// import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  Loader2,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { DirReveal } from "@/components/DirReveal";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact — Boost Up Digital" },
//       { name: "description", content: "Talk to Boost Up Digital. Email boostupdigital.official03@gmail.com or call 8509121389. Based in Singur, Hooghly, WB." },
//     ],
//   }),
//   component: Contact,
// });

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "boostupdigital.official03@gmail.com",
    href: "mailto:boostupdigital.official03@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 85091 21389",
    href: "tel:+918509121389",
  },
  { icon: MapPin, label: "Studio", value: "Singur, Hooghly, West Bengal" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <>
      <Toaster theme="dark" />
      <section className="pt-24 pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-4">
              Contact
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter">
              Let's <span className="text-gradient-brand">talk growth</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Drop a line, send a brief, or just say hi. We reply within one
              working day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <DirReveal from="left" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 md:p-10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <input
                    required
                    name="name"
                    className="w-full rounded-lg bg-input border border-border/60 px-4 py-3 outline-none focus:border-brand-magenta transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-lg bg-input border border-border/60 px-4 py-3 outline-none focus:border-brand-magenta transition-colors"
                    placeholder="you@brand.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Phone
                  </label>
                  <input
                    name="phone"
                    className="w-full rounded-lg bg-input border border-border/60 px-4 py-3 outline-none focus:border-brand-magenta transition-colors"
                    placeholder="+91 ..."
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    className="w-full rounded-lg bg-input border border-border/60 px-4 py-3 outline-none focus:border-brand-magenta transition-colors"
                  >
                    <option>Digital Marketing</option>
                    <option>SEO</option>
                    <option>Meta / Google Ads</option>
                    <option>Web Design</option>
                    <option>Ad Films / TVC</option>
                    <option>Everything</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Tell us about your project
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full rounded-lg bg-input border border-border/60 px-4 py-3 outline-none focus:border-brand-magenta transition-colors resize-none"
                  placeholder="Goals, timelines, budget..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </DirReveal>

          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            {channels.map((c, i) => (
              <DirReveal key={c.label} from="right" delay={i * 0.12}>
                <a
                  href={c.href}
                  className="block glass rounded-2xl p-5 hover:scale-[1.02] transition-transform"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center shrink-0 shadow-glow">
                      <c.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="font-semibold mt-0.5 break-all">
                        {c.value}
                      </div>
                    </div>
                  </div>
                </a>
              </DirReveal>
            ))}
            <DirReveal from="right" delay={channels.length * 0.12}>
              <div className="glass rounded-2xl p-5">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Follow
                </div>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="h-11 w-11 grid place-items-center rounded-xl glass hover:bg-gradient-brand hover:scale-110 transition-all"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </DirReveal>
            <DirReveal from="right" delay={(channels.length + 1) * 0.12}>
              <div className="glass rounded-2xl p-5">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Hours
                </div>
                <div className="text-sm">Mon – Sat · 10:00 – 19:00 IST</div>
              </div>
            </DirReveal>
          </div>
        </div>
      </section>
    </>
  );
}
