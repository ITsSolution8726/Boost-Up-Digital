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
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={"/hero-video.mp4"}
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/80 to-background" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-150 w-150 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium mb-8"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-yellow" />
            Award-winning digital growth studio · Est. 2024
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tighter"
          >
            We boost brands
            <br /> that{" "}
            <span className="text-gradient-brand">
              <Typewriter
                words={[
                  "scale fast.",
                  "rank #1.",
                  "go viral.",
                  "convert hard.",
                  "refuse limits.",
                ]}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            Performance marketing, content & cinematic ad films — engineered to
            generate leads, scale revenue, and make the world remember your
            name.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Start Your Growth{" "}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-semibold hover:bg-secondary transition-colors"
            >
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-20 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-brand blur-3xl opacity-40 animate-pulse" />
              <img
                src="/logo.webp"
                alt=""
                className="relative h-40 w-40 rounded-3xl shadow-glow"
              />
            </div>
          </motion.div>
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
