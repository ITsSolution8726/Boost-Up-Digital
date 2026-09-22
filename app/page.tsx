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
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter, Typewriter } from "@/components/Counter";

import Link from "next/link";
import { DirReveal } from "@/components/DirReveal";
import { caseStudies, faqs, industries, services, stats, testimonials, tools, whyChooseUs } from "@/lib/data";


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

              <h1 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight">

                Helping Businesses

                <br />

                <span className="text-gradient-brand">

                  Generate More Leads,

                </span>

                <br />

                Increase Sales &
                Grow Faster
              </h1>

              <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-8">

                We help businesses attract the right audience, generate qualified leads, and turn digital marketing into measurable business growth.

              </p>
              <p className="mt-8 text-sm sm:text-md max-w-xl leading-8 font-bold tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1">
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

      {/* TRUSTED BY */}
      <section className="border-y border-border/40 bg-background/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

          <Reveal className="text-center mb-8">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-cyan">
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
                logo: "/logos/hearup.jpeg",
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

      {/* STATS */}
      <section className="border-y border-border/40 glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-brand font-display">
                <Counter
                  to={s.to}
                  suffix={s.suffix}
                // decimals={s.decimals ?? 0}
                />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {s.label}
              </div>
            </Reveal>
          ))}
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
                  src="/about-office.jpg"
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
              <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
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

      {/* SERVICES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
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

      {/* INDUSTRIES */}
      <section className="py-24 bg-muted/20 border-y border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">

            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
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

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {industries.map((industry, i) => (
                <DirReveal
                  key={industry.title}
                  from={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}
                  delay={(i % 3) * 0.08}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="h-full min-h-[150px] rounded-2xl glass p-5 flex flex-col items-center justify-center text-center"
                  >
                    <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center shadow-glow mb-4">
                      <industry.icon className="h-6 w-6 text-primary-foreground" />
                    </div>

                    <h3 className="font-semibold text-sm">
                      {industry.title}
                    </h3>

                    <p className="mt-2 text-xs text-muted-foreground leading-5">
                      {industry.desc}
                    </p>
                  </motion.div>
                </DirReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE BOOST UP DIGITAL */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
              Why Choose Boost Up Digital
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold">
              Your Growth is{" "}
              <span className="text-gradient-brand">
                Our Mission
              </span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item, i) => (
              <DirReveal
                key={item.title}
                from={
                  i % 3 === 0
                    ? "left"
                    : i % 3 === 1
                      ? "up"
                      : "right"
                }
                delay={(i % 3) * 0.08}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full glass rounded-2xl p-6"
                >
                  <item.icon className="h-6 w-6 text-brand-magenta mb-4" />

                  <h3 className="font-semibold text-base mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-6">
                    {item.desc}
                  </p>
                </motion.div>
              </DirReveal>
            ))}
          </div>

        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 bg-muted/20 border-y border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
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

          <div className="grid lg:grid-cols-3 gap-6">
            {caseStudies.map((item, i) => (
              <DirReveal
                key={item.title}
                from={i === 0 ? "left" : i === 1 ? "up" : "right"}
              >
                <motion.article
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-3xl glass h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-brand-cyan mb-2">
                      {item.category}
                    </div>

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-muted-foreground leading-6">
                      {item.desc}
                    </p>

                    <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-border/40">
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
                </motion.article>
              </DirReveal>
            ))}
          </div>

        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <Reveal className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
              Tools & Technologies We Use
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

      {/* FAQ + SEO */}
      <section className="py-24 bg-muted/20 border-y border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* FAQ */}
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
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
