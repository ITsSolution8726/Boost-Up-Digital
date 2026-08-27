"use client";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  Search,
  Megaphone,
  Target,
  Share2,
  Globe,
  Film,
  Quote,
  Star,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter, Typewriter } from "@/components/Counter";

import Link from "next/link";
import { DirReveal } from "@/components/DirReveal";
const services = [
  {
    icon: Search,
    title: "SEO",
    desc: "Climb the SERPs with data-led, white-hat search optimisation.",
  },
  {
    icon: Share2,
    title: "Social Media",
    desc: "Strategy, content & community for Instagram, Facebook, LinkedIn & more.",
  },
  {
    icon: Target,
    title: "Meta Ads",
    desc: "High-ROAS Facebook & Instagram campaigns built to convert.",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    desc: "Search, Display, YouTube & Performance Max that scale.",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "Lightning-fast, conversion-focused websites with stunning UI.",
  },
  {
    icon: Film,
    title: "Ad Films & TVC",
    desc: "Cinema-grade ad films, TVCs & social spots that move audiences.",
  },
];

const stats = [
  { to: 120, suffix: "+", label: "Brands Boosted" },
  { to: 10, suffix: "M+", label: "Impressions Driven" },
  { to: 4.9, suffix: "★", label: "Client Rating", decimals: 1 },
  { to: 350, suffix: "%", label: "Avg ROAS Lift" },
];

const testimonials = [
  {
    quote:
      "Boost Up Digital didn't just run our ads — they built a pipeline. CPL dropped 64% in 90 days and we haven't looked back.",
    name: "Aritra Sen",
    role: "Founder, NestCart",
    img: "./person-1.jpg",
  },
  {
    quote:
      "Our TVC tripled enquiries in the first month. The creative team understands how to make stories sell.",
    name: "Megha Roy",
    role: "MD, Roy Jewellers",
    img: "./person-2.jpg",
  },
  {
    quote:
      "Easily the most professional agency we've worked with. Transparent reporting, real growth, zero fluff.",
    name: "Vikram Das",
    role: "CEO, Urban Bazaar",
    img: "./person-3.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-24">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/hero-video.mp4"
            className="absolute inset-0 h-full w-full object-cover opacity-10"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-brand-magenta/10 blur-[120px]" />

          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-cyan/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs mb-8">

                <Sparkles className="h-4 w-4 text-brand-yellow" />

                Performance-Driven Digital Marketing Agency

              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">

                Helping Businesses

                <br />

                <span className="text-gradient-brand">

                  Generate More Leads,

                </span>

                <br />

                Increase Revenue

              </h1>

              <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-8">

                We help ambitious brands grow through SEO,

                Google Ads, Meta Ads, Social Media,

                Web Development and creative campaigns.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-brand px-7 py-4 font-semibold text-primary-foreground shadow-glow"
                >
                  Get Free Marketing Audit
                </Link>

                <Link
                  href="/services"
                  className="rounded-full glass px-7 py-4 font-semibold"
                >
                  View Services
                </Link>

              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  { icon: Megaphone, label: "Google Ads", color: "text-brand-magenta" },
                  { icon: Search, label: "SEO", color: "text-brand-cyan" },
                  { icon: Target, label: "Meta Ads", color: "text-brand-yellow" },
                  { icon: Globe, label: "Web Development", color: "text-brand-magenta" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-full glass px-4 py-2 border border-border/40"
                  >
                    <item.icon className={`h-4 w-4 ${item.color}`} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT */}

            <div className="relative hidden lg:block">

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass rounded-3xl p-8 shadow-glow"
              >

                <img
                  src="/dashboard.png"
                  alt=""
                  className="rounded-2xl"
                />

              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute -left-8 top-12 glass rounded-2xl p-5"
              >

                <div className="text-xs text-muted-foreground">
                  Leads
                </div>

                <div className="text-3xl font-bold text-brand-cyan">

                  +125%

                </div>

              </motion.div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                }}
                className="absolute -right-6 bottom-16 glass rounded-2xl p-5"
              >

                <div className="text-xs text-muted-foreground">

                  ROAS

                </div>

                <div className="text-3xl font-bold text-brand-magenta">

                  4.8x

                </div>

              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="border-y border-border/40 glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-brand font-display">
                <Counter
                  to={s.to}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
              What We Do
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              A full-stack growth engine
            </h2>
            <p className="mt-4 text-muted-foreground">
              From the first impression to the final conversion — and the encore
              performance.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              // Row 1 (0,1,2): left, up (down-into-place from above), right
              // Row 2 (3,4,5): left, up-from-below, right
              // Row 1: from left, from above, from right
              // Row 2: from left, from below, from right
              const dirs: Array<"left" | "right" | "up" | "down"> = [
                "left",
                "up",
                "right",
                "left",
                "down",
                "right",
              ];
              return (
                <DirReveal key={s.title} from={dirs[i]} delay={(i % 3) * 0.08}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group relative h-full rounded-2xl glass p-7 overflow-hidden"
                  >
                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-30 blur-2xl transition-opacity" />
                    <div className="relative">
                      <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center mb-5 shadow-glow">
                        <s.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </motion.div>
                </DirReveal>
              );
            })}
          </div>

          <Reveal className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gradient-brand"
            >
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
              Why Boost Up
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Awards are nice.{" "}
              <span className="text-gradient-brand">Results</span> are nicer.
            </h2>
            <p className="text-muted-foreground mb-8">
              Founded in 2024 with one stubborn mission — make digital marketing
              actually work for businesses that pay for it. Every campaign is
              built around leads, revenue and measurable ROI.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, t: "ROI First", d: "Every rupee tracked." },
                { icon: Award, t: "Award-Winning", d: "Recognised craft." },
                { icon: Users, t: "Lead Engine", d: "Pipelines that fill." },
                { icon: Film, t: "Cinematic Craft", d: "Films that sell." },
              ].map((x) => (
                <div key={x.t} className="glass rounded-xl p-4">
                  <x.icon className="h-5 w-5 text-brand-yellow mb-2" />
                  <div className="font-semibold text-sm">{x.t}</div>
                  <div className="text-xs text-muted-foreground">{x.d}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-square rounded-3xl glass p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial opacity-50" />
              <div className="relative h-full flex items-center justify-center">
                <motion.img
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src="/logo.webp"
                  alt=""
                  className="h-64 w-64 rounded-3xl shadow-glow"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
              Testimonials
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Founders who <span className="text-gradient-brand">vouch</span>{" "}
              for us.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Real brands. Real numbers. Real results.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative h-full glass rounded-3xl p-7 overflow-hidden"
                >
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-30 blur-3xl transition-opacity" />
                  <Quote className="h-8 w-8 text-brand-magenta mb-4" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-brand-yellow text-brand-yellow"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      width={768}
                      height={768}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-magenta/40"
                    />
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-brand p-12 md:p-16 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.3),transparent_50%)]" />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                  Ready to be unforgettable?
                </h2>
                <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                  Let's plan a campaign that brings leads, sales, and the kind
                  of buzz your competitors will copy next quarter.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-3.5 font-semibold hover:scale-105 transition-transform"
                >
                  Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
