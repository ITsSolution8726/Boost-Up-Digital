"use client";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Search,
  Megaphone,
  Target,
  Globe,
  Quote,
  Star,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChartNoAxesCombined,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter, Typewriter } from "@/components/Counter";

import { useEffect, useState } from "react";
import { X } from "lucide-react";


import Link from "next/link";
import { DirReveal } from "@/components/DirReveal";
import { caseStudies, faqs, industries, services, stats, testimonials, tools, whyChooseUs } from "@/lib/data";


export default function HomePage() {

  const [selectedCaseStudy, setSelectedCaseStudy] =
    useState<(typeof caseStudies)[number] | null>(null);

  useEffect(() => {
    if (!selectedCaseStudy) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCaseStudy(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCaseStudy]);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden py-16 sm:py-20 md:py-24 lg:pt-28 lg:pb-24">
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

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-w-0 grid-cols-1 items-center gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">

            {/* LEFT */}
            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full glass border border-border/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-cyan">

                <Sparkles className="h-4 w-4 text-brand-yellow" />

                Performance-Driven Digital Marketing Agency

              </div>

              <h1 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight">

                Helping Businesses

                <br />

                <span className="text-gradient-brand">

                  Generate More Leads,

                </span>

                <br />

                Increase Sales & <br />
                Grow Faster
              </h1>

              <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-8 ">

                We help businesses attract the right audience, generate qualified leads, and turn digital marketing into measurable business growth.

              </p>
              <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-bold leading-6 tracking-wide sm:text-sm sm:leading-8">
                <span className="text-brand-cyan">Strategy</span>
                <span className="text-muted-foreground/50">•</span>

                <span className="text-brand-magenta">Acquisition</span>
                <span className="text-muted-foreground/50">•</span>

                <span className="text-brand-yellow">Conversion</span>
                <span className="text-muted-foreground/50">•</span>

                <span className="text-brand-cyan">Measurement</span>
                <span className="text-muted-foreground/50">•</span>

                <span className="text-brand-magenta">Optimization</span>
              </p>

              <div className="mt-10 flex w-full flex-nowrap items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="relative isolate flex h-14 flex-1 items-center justify-center whitespace-nowrap rounded-full bg-gradient-brand px-2 text-center text-[13px] font-semibold leading-none text-primary-foreground shadow-glow sm:px-6 sm:text-base lg:px-7"
                >
                  Get Free Marketing Audit
                </Link>

                <Link
                  href="#services"
                  className="relative isolate glass flex h-14 flex-1 items-center justify-center whitespace-nowrap rounded-full px-2 text-center text-[13px] font-semibold leading-none sm:px-6 sm:text-base lg:px-7"
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

      {/* GROWTH SYSTEMS */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        {/* Background accents */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-brand-magenta/10 blur-[100px]" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-brand-cyan/10 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full glass border border-border/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-cyan">
              <Sparkles className="h-4 w-4 text-brand-yellow" />
              Our Growth Philosophy
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              We don't just do marketing.
              <br className="hidden sm:block" />{" "}
              <span className="text-gradient-brand">
                We build growth systems.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              Most agencies sell individual marketing services. We connect
              strategy, acquisition, conversion and measurement to help
              businesses turn digital attention into real customers and
              measurable growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full glass border border-border/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-cyan">
              <Sparkles className="h-4 w-4 text-brand-yellow" />
              What We Do
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold">
              Performance-Driven
              <br />
              <span className="text-gradient-brand">
                Digital Marketing Services
              </span>
            </h2>

            <p className="mt-4 text-muted-foreground">
              Data-driven digital marketing solutions designed to increase
              visibility, generate quality leads, and drive measurable growth.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const dirs: Array<"left" | "right" | "up" | "down"> = [
                "left",
                "up",
                "right",
                "left",
                "down",
                "right",
              ];

              return (
                <DirReveal
                  key={s.title}
                  from={dirs[i]}
                  delay={(i % 3) * 0.08}
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group relative h-full rounded-2xl glass p-7 overflow-hidden"
                  >
                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-30 blur-2xl transition-opacity" />

                    <div className="relative">
                      <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center mb-5 shadow-glow">
                        <s.icon className="h-6 w-6 text-primary-foreground" />
                      </div>

                      <h3 className="text-xl font-semibold mb-2">
                        {s.title}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                  </motion.div>
                </DirReveal>
              );
            })}
          </div>

          {/* <Reveal className="text-center mt-12">
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Explore All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal> */}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-muted/20 border-y border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">

            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full glass border border-border/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-cyan">
                <Sparkles className="h-4 w-4 text-brand-yellow" />
                Industries We Help Grow
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Industries We've{" "}
                <span className="text-gradient-brand">
                  Delivered Results In
                </span>
              </h2>

              <p className="mt-5 text-muted-foreground leading-7">
                Every industry has different customers, buying behaviour
                and competition. That's why we create customized marketing
                strategies tailored to your business goals.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {industries.map((industry, i) => (
                <DirReveal
                  key={industry.title}
                  from={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}
                  delay={(i % 3) * 0.08}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex h-full min-h-[190px] flex-col items-center rounded-2xl glass p-5 text-center"
                  >
                    {/* Fixed icon position */}
                    <div className="mb-4 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                      <industry.icon className="h-6 w-6 text-primary-foreground" />
                    </div>

                    {/* Industry title */}
                    <h3 className="min-h-[40px] flex items-center justify-center text-sm font-semibold leading-5">
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {industry.desc}
                    </p>
                  </motion.div>
                </DirReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="border-y border-border/40 bg-background/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

          <Reveal className="text-center mb-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full glass border border-border/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-cyan">
              <Sparkles className="h-4 w-4 text-brand-yellow" />
              Trusted by Growing Businesses
            </div>

            <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
              We've partnered with businesses across healthcare, education,
              retail, manufacturing and local services to generate leads,
              improve visibility and drive sustainable business growth.
            </p>
          </Reveal>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 sm:gap-4 items-center">
            {[
              {
                name: "Bongoshree",
                logo: "/logos/bongoshree.jpeg",
              },
              {
                name: "Adi Ap Jewellers",
                logo: "/logos/adi-ap-jewellers.jpeg",
              },
              {
                name: "Tony & Guy",
                logo: "/logos/tony-guy.jpeg",
              },
              {
                name: "New Looks",
                logo: "/logos/new-looks.jpeg",
              },
              {
                name: "Spandan",
                logo: "/logos/spandan.jpeg",
              },
              {
                name: "AKS",
                logo: "/logos/aks.jpeg",
              },
              {
                name: "Bindubasini",
                logo: "/logos/bindubasini.jpeg",
              },
              {
                name: "Hazra",
                logo: "/logos/hazra.jpeg",
              },
              {
                name: "Hearup",
                logo: "/logos/hearup.png",
              },
              {
                name: "Annapurna",
                logo: "/logos/annapurna.jpeg",
              },
            ].map((brand) => (
              <div
                key={brand.name}
                className="
            group
            flex items-center justify-center
            h-20 sm:h-24
            rounded-xl
            border border-border/40
            bg-background/70
            px-3 sm:px-4
            transition-all duration-300
            hover:bg-background
            hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          "
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="
              max-h-20
              sm:max-h-18
              max-w-full
              w-auto
              object-contain
              transition-all duration-300
              group-hover:opacity-100
              group-hover:grayscale-0
              group-hover:scale-165
            "
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 bg-muted/20 border-y border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full glass border border-border/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-cyan">
                <Sparkles className="h-4 w-4 text-brand-yellow" />
                Case Studies
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold">
                Real Results.{" "}
                <span className="text-gradient-brand">
                  Real Impact.
                </span>
              </h2>
            </Reveal>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gradient-brand shrink-0"
            >
              View All Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {caseStudies.map((item, i) => (
              <DirReveal
                key={item.title}
                from={i === 0 ? "left" : i === 1 ? "up" : "right"}
                className="h-full"
              >
                <motion.button
                  type="button"
                  onClick={() => setSelectedCaseStudy(item)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`View case study: ${item.title}`}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-3xl glass text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  {/* Fixed image height */}
                  <div className="h-56 w-full shrink-0 overflow-hidden sm:h-64">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content fills remaining height */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-brand-cyan">
                      {item.category}
                    </div>

                    <h3 className="line-clamp-2 min-h-[3.5rem] text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">
                      {item.desc}
                    </p>

                    {/* Metrics stay aligned at the bottom */}
                    <div className="mt-auto grid grid-cols-3 gap-3 border-t border-border/40 pt-5 mt-6">
                      <div>
                        <div className="text-xl font-bold text-gradient-brand">
                          {item.metric1}
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          {item.metric1Label}
                        </div>
                      </div>

                      <div>
                        <div className="text-xl font-bold text-gradient-brand">
                          {item.metric2}
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          {item.metric2Label}
                        </div>
                      </div>

                      <div>
                        <div className="text-xl font-bold text-gradient-brand">
                          {item.metric3}
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          {item.metric3Label}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.button>
              </DirReveal>
            ))}
          </div>


        </div>
      </section>
      {/* CASE STUDY MODAL */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCaseStudy(null);
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-modal-title"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="modal-scrollbar-hidden relative max-h-[92dvh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border/40 bg-background shadow-2xl sm:rounded-3xl"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedCaseStudy(null)}
              aria-label="Close case study"
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:bg-black/80 sm:right-4 sm:top-4"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Case study image */}
            <div className="aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={selectedCaseStudy.image}
                alt={selectedCaseStudy.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5 sm:p-8 lg:p-10">
              {/* Category */}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                {selectedCaseStudy.category}
              </p>

              {/* Title */}
              <h2
                id="case-study-modal-title"
                className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl"
              >
                {selectedCaseStudy.title}
              </h2>

              <p className="mt-4 leading-7 text-muted-foreground">
                {selectedCaseStudy.desc}
              </p>

              {/* Results */}
              <div className="mt-7 grid grid-cols-3 gap-3 border-y border-border/40 py-6 sm:gap-6">
                {[
                  {
                    value: selectedCaseStudy.metric1,
                    label: selectedCaseStudy.metric1Label,
                  },
                  {
                    value: selectedCaseStudy.metric2,
                    label: selectedCaseStudy.metric2Label,
                  },
                  {
                    value: selectedCaseStudy.metric3,
                    label: selectedCaseStudy.metric3Label,
                  },
                ].map((metric) => (
                  <div key={metric.label} className="min-w-0">
                    <p className="break-words text-xl font-bold text-gradient-brand sm:text-3xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[10px] leading-4 text-muted-foreground sm:text-sm">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Challenge */}
              <div className="mt-7">
                <h3 className="text-lg font-bold sm:text-xl">
                  The Challenge
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                  {selectedCaseStudy.challenge}
                </p>
              </div>

              {/* Strategy */}
              <div className="mt-7">
                <h3 className="text-lg font-bold sm:text-xl">
                  Our Digital Marketing Strategy
                </h3>

                <ul className="mt-3 space-y-3">
                  {selectedCaseStudy.strategy.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-6 text-muted-foreground sm:text-base"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-cyan" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="mt-7 rounded-2xl border border-border/40 bg-muted/30 p-5 sm:p-6">
                <h3 className="text-lg font-bold sm:text-xl">
                  Results &amp; Outcomes
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                  {selectedCaseStudy.outcome}
                </p>
              </div>

              {/* Relevant keywords */}
              <div className="mt-7">
                <h3 className="text-sm font-semibold">Related Services</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedCaseStudy.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-border/50 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                onClick={() => setSelectedCaseStudy(null)}
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-center text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] sm:w-auto"
              >
                Discuss Your Marketing Goals
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      {/* HOW WE THINK */}
      <section className="relative overflow-hidden bg-background py-24 text-foreground sm:py-28">
        {/* Multicolor background accents */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[5%] top-10 h-80 w-80 rounded-full bg-brand-cyan/10 blur-[130px]" />
          <div className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-brand-magenta/10 blur-[130px]" />
          <div className="absolute right-[5%] bottom-0 h-80 w-80 rounded-full bg-brand-yellow/10 blur-[130px]" />
          <div className="absolute right-1/3 top-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <Reveal className="mx-auto mb-16 max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass border border-border/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-cyan">
              <Sparkles className="h-4 w-4 text-brand-yellow" />
              How We Think
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Marketing that moves
              <br className="hidden sm:block" /> the{" "}
              <span className="text-gradient-brand">
                business forward.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              We connect strategy, acquisition, conversion and measurement
              into a structured growth process that turns digital attention
              into real customers and measurable business results.
            </p>
          </Reveal>

          {/*
      Each step has its own theme color.
      Desktop: horizontal timeline.
      Mobile/tablet: vertical timeline.
    */}

          {(() => {
            const steps = [
              {
                number: "01",
                title: "STRATEGY",
                desc: "Understand your business, audience, competition and growth objective.",
                icon: Target,
                color: "text-brand-cyan",
                line: "border-brand-cyan/30",
                iconBorder: "border-brand-cyan/30 group-hover:border-brand-cyan",
                iconBg: "bg-brand-cyan/10",
                glow: "group-hover:shadow-[0_0_30px_rgba(0,220,255,0.12)]",
                numberColor: "text-brand-cyan/40 group-hover:text-brand-cyan",
                dot: "bg-brand-cyan",
              },
              {
                number: "02",
                title: "ACQUISITION",
                desc: "Reach the right people through Google, Meta, SEO, social and content.",
                icon: Megaphone,
                color: "text-brand-magenta",
                line: "border-brand-magenta/30",
                iconBorder: "border-brand-magenta/30 group-hover:border-brand-magenta",
                iconBg: "bg-brand-magenta/10",
                glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.12)]",
                numberColor: "text-brand-magenta/40 group-hover:text-brand-magenta",
                dot: "bg-brand-magenta",
              },
              {
                number: "03",
                title: "CONVERSION",
                desc: "Turn attention into enquiries, leads and customers.",
                icon: TrendingUp,
                color: "text-brand-yellow",
                line: "border-brand-yellow/30",
                iconBorder: "border-brand-yellow/30 group-hover:border-brand-yellow",
                iconBg: "bg-brand-yellow/10",
                glow: "group-hover:shadow-[0_0_30px_rgba(250,204,21,0.12)]",
                numberColor: "text-brand-yellow/40 group-hover:text-brand-yellow",
                dot: "bg-brand-yellow",
              },
              {
                number: "04",
                title: "MEASUREMENT",
                desc: "Track performance to understand what is actually working.",
                icon: ChartNoAxesCombined,
                color: "text-purple-400",
                line: "border-purple-400/30",
                iconBorder: "border-purple-400/30 group-hover:border-purple-400",
                iconBg: "bg-purple-400/10",
                glow: "group-hover:shadow-[0_0_30px_rgba(192,132,252,0.12)]",
                numberColor: "text-purple-400/40 group-hover:text-purple-400",
                dot: "bg-purple-400",
              },
              {
                number: "05",
                title: "OPTIMIZATION",
                desc: "Improve campaigns, funnels and customer acquisition over time.",
                icon: SlidersHorizontal,
                color: "text-emerald-400",
                line: "border-emerald-400/30",
                iconBorder: "border-emerald-400/30 group-hover:border-emerald-400",
                iconBg: "bg-emerald-400/10",
                glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.12)]",
                numberColor: "text-emerald-400/40 group-hover:text-emerald-400",
                dot: "bg-emerald-400",
              },
            ];

            return (
              <>
                {/* Desktop timeline */}
                <div className="relative hidden lg:block">
                  {/* Multicolor dotted connector */}
                  <div className="absolute left-0 right-0 top-11 flex border-t border-dashed border-border/60">
                    {steps.map((step) => (
                      <div
                        key={step.number}
                        className={`flex-1 border-t-2 border-dashed ${step.line}`}
                      />
                    ))}
                  </div>

                  <div className="relative grid grid-cols-5 gap-5">
                    {steps.map((step, i) => (
                      <Reveal key={step.number} delay={i * 0.1}>
                        <motion.div
                          whileHover={{ y: -6 }}
                          className="group flex h-full flex-col items-center text-center"
                        >
                          {/* Icon box */}
                          <div
                            className={`relative z-10 grid h-[88px] w-[88px] place-items-center rounded-[22px] border bg-card/80 backdrop-blur-md transition-all duration-300 ${step.iconBorder} ${step.iconBg} ${step.glow}`}
                          >
                            <step.icon
                              className={`h-8 w-8 ${step.color} transition-transform duration-300 group-hover:scale-110`}
                              strokeWidth={1.8}
                            />
                          </div>

                          {/* Number */}
                          <div
                            className={`mt-6 font-display text-5xl font-extrabold tracking-tight transition-colors duration-300 ${step.numberColor}`}
                          >
                            {step.number}
                          </div>

                          <h3
                            className={`mt-3 text-lg font-extrabold tracking-tight transition-colors duration-300 ${step.color}`}
                          >
                            {step.title}
                          </h3>

                          <p className="mt-4 max-w-[220px] text-sm leading-7 text-muted-foreground">
                            {step.desc}
                          </p>
                        </motion.div>
                      </Reveal>
                    ))}
                  </div>
                </div>

                {/* Mobile and tablet vertical timeline */}
                <div className="relative lg:hidden">
                  {/* Vertical dotted connector */}
                  {/* Vertical multicolor dotted connector */}
                  <div className="absolute bottom-12 left-[35px] top-10 flex flex-col">
                    <div className="flex-1 border-l-2 border-dashed border-brand-cyan/50" />
                  </div>

                  <div className="space-y-9">
                    {steps.map((step, i) => (
                      <DirReveal
                        key={step.number}
                        from="left"
                        delay={i * 0.08}
                      >
                        <motion.div
                          whileHover={{ x: 3 }}
                          className="group relative flex items-start gap-5 sm:gap-6"
                        >
                          {/* Icon */}
                          <div
                            className={`relative z-10 grid h-[72px] w-[72px] shrink-0 place-items-center rounded-2xl border bg-card/90 backdrop-blur-md transition-all duration-300 ${step.iconBorder} ${step.iconBg} ${step.glow}`}
                          >
                            <step.icon
                              className={`h-7 w-7 ${step.color}`}
                              strokeWidth={1.8}
                            />
                          </div>

                          {/* Text */}
                          <div className="min-w-0 flex-1 pt-1">
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                              <span
                                className={`font-display text-3xl font-extrabold transition-colors duration-300 ${step.numberColor}`}
                              >
                                {step.number}
                              </span>

                              <h3
                                className={`text-lg font-extrabold tracking-tight sm:text-xl ${step.color}`}
                              >
                                {step.title}
                              </h3>
                            </div>

                            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                              {step.desc}
                            </p>
                          </div>
                        </motion.div>
                      </DirReveal>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}

          {/* Closing message */}
          <Reveal className="mt-14 text-center">
            <p className="text-sm font-medium text-muted-foreground">
              A continuous cycle of{" "}
              <span className="text-brand-cyan">learning</span>,{" "}
              <span className="text-brand-magenta">improving</span>,{" "}
              <span className="text-brand-yellow">measuring</span> and{" "}
              <span className="text-emerald-400">growing.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <Reveal className="text-center mb-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full glass border border-border/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-cyan">
              <Sparkles className="h-4 w-4 text-brand-yellow" />
              Tools &amp; Technologies We Use
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Powered by the{" "}
              <span className="text-gradient-brand">
                right tools
              </span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {tools.map((tool, i) => (
              <DirReveal
                key={tool.name}
                from={i % 2 === 0 ? "left" : "right"}
                delay={(i % 5) * 0.04}
              >
                <div
                  className="
          group
          flex items-center gap-3
          rounded-xl
          glass
          border border-border/40
          px-4 py-4
          min-h-[72px]
          transition-all duration-300
          hover:border-brand-magenta/40
          hover:-translate-y-1
          hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        "
                >
                  <div
                    className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-lg
            bg-background/80
            border border-border/30
            p-2
            transition-transform duration-300
            group-hover:scale-110
          "
                  >
                    <img
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <span className="text-sm font-medium text-foreground/90">
                    {tool.name}
                  </span>
                </div>
              </DirReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT BOOST UP DIGITAL */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* IMAGE */}
            <DirReveal from="left">
              <div className="relative overflow-hidden rounded-3xl glass">
                <img
                  src="/about-office.png"
                  alt="Boost Up Digital office"
                  className="w-full aspect-[4/3] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur-md px-4 py-2 text-xs font-semibold">
                    <MapPin className="h-4 w-4 text-brand-magenta" />
                    Kolkata, West Bengal
                  </div>
                </div>
              </div>
            </DirReveal>

            {/* CONTENT */}
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full glass border border-border/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-cyan">
                <Sparkles className="h-4 w-4 text-brand-yellow" />
                About Boost Up Digital
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Digital Marketing That Delivers{" "}
                <span className="text-gradient-brand">
                  Business Growth
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-muted-foreground leading-7">
                <p>
                  Boost Up Digital is a performance-driven digital marketing
                  agency based in Kolkata, helping businesses grow through
                  strategic online marketing.
                </p>

                <p>
                  We don't believe in marketing for the sake of marketing.
                  Every campaign we create is designed with one objective —
                  to generate more leads, increase sales and deliver measurable
                  business growth.
                </p>

                <p>
                  Whether you're a healthcare clinic looking for more patient
                  enquiries, an educational institution trying to increase
                  admissions, or a local business wanting more customers,
                  our team builds customized digital marketing strategies
                  around your business goals.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Performance focused",
                  "Transparent reporting",
                  "Affordable pricing",
                  "Industry-focused strategies",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand-magenta shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full glass border border-border/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-cyan">
              <Sparkles className="h-4 w-4 text-brand-yellow" />
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


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {testimonials.map((t, i) => (
              <Reveal
                key={`${t.name}-${i}`}
                delay={i * 0.12}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-3xl glass p-7"
                >
                  {/* Decorative hover effect */}
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />

                  {/* Quote icon */}
                  <Quote className="relative h-8 w-8 shrink-0 text-brand-magenta mb-4" />

                  {/* Star rating */}
                  <div className="relative flex gap-1 mb-4 shrink-0">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-brand-yellow text-brand-yellow"
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="relative mb-6 flex-1 text-foreground/90 leading-relaxed">
                    "{t.quote}"
                  </p>

                  {/* Reviewer details: consistently aligned at the bottom */}
                  <div className="relative mt-auto flex min-h-[65px] shrink-0 items-center gap-3 border-t border-border/40 pt-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-brand-magenta/40"
                    />

                    <div className="min-w-0">
                      <div className="font-semibold leading-snug">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground leading-relaxed">
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


      {/* FAQ + SEO */}
      <section className="py-24 bg-muted/20 border-y border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* FAQ */}
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full glass border border-border/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-cyan">
                <Sparkles className="h-4 w-4 text-brand-yellow" />
                Frequently Asked Questions
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                Questions businesses{" "}
                <span className="text-gradient-brand">
                  ask us
                </span>
              </h2>

              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl glass border border-border/40"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium">
                      <span>{faq.question}</span>

                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" />
                    </summary>

                    <div className="px-5 pb-5 text-sm leading-6 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>

            {/* SEO CONTENT */}
            <Reveal delay={0.15}>
              <div className="h-full rounded-3xl glass p-7 sm:p-9">

                <h2 className="text-3xl font-bold mb-5">
                  Best Digital Marketing Agency in Kolkata
                </h2>

                <div className="space-y-4 text-sm text-muted-foreground leading-7">
                  <p>
                    Boost Up Digital is a leading digital marketing agency
                    in Kolkata focused on delivering measurable business growth
                    through strategic online marketing.
                  </p>

                  <p>
                    From performance marketing and Google Ads to Meta Ads,
                    SEO, social media marketing and web development, we help
                    businesses build stronger online visibility and generate
                    qualified leads.
                  </p>

                  <p>
                    Our approach combines performance-focused campaigns,
                    transparent reporting and customized strategies designed
                    around your business goals and budget.
                  </p>
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    "Performance-focused marketing",
                    "Transparent reporting",
                    "Customized growth strategies",
                    "Serving businesses across multiple industries",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-brand-magenta shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

              </div>
            </Reveal>

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
