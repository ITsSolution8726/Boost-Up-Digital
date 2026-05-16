"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rocket,
  Target,
  Heart,
  Sparkles,
  Quote,
  ArrowRight,
  Linkedin,
  Twitter,
  ExternalLink,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DirReveal } from "@/components/DirReveal";


// export const Route = createFileRoute("/about")({
//   head: () => ({
//     meta: [
//       {
//         title:
//           "About Us — Boost Up Digital | Lead-Generating Marketing Agency Since 2024",
//       },
//       {
//         name: "description",
//         content:
//           "Founded in 2024 in Singur, Hooghly, Boost Up Digital is a results-obsessed digital marketing and entertainment studio helping 100+ brands across India generate leads, scale revenue and craft cinematic stories.",
//       },
//       {
//         name: "keywords",
//         content:
//           "about Boost Up Digital, digital marketing agency Hooghly, lead generation agency India, our team, our clients, portfolio",
//       },
//       {
//         property: "og:title",
//         content:
//           "About Boost Up Digital — A studio built for measurable growth",
//       },
//       {
//         property: "og:description",
//         content:
//           "Meet the team, see the work, and read the story behind India's most outcome-driven new-age marketing agency.",
//       },
//     ],
//   }),
//   component: About,
// });

const milestones = [
  {
    date: "Jan 2024",
    title: "The Spark",
    desc: "Boost Up Digital is founded in Singur, Hooghly with one promise — marketing that actually generates leads, not just impressions.",
  },
  {
    date: "Apr 2024",
    title: "First 10 Clients",
    desc: "Local businesses see measurable ROI within 60 days. Word of mouth catches fire across the Hooghly belt.",
  },
  {
    date: "Aug 2024",
    title: "Studio Expansion",
    desc: "We launch Boost Up Entertainment — a sister vertical for ad films, TVCs, short films and branded content production.",
  },
  {
    date: "Dec 2024",
    title: "100+ Brands",
    desc: "From D2C startups to legacy SMBs, our active portfolio crosses 100 brands across 14 categories.",
  },
  {
    date: "2025",
    title: "Going National",
    desc: "Pan-India presence with dedicated performance marketing pods and a full-stack creative team in Kolkata and Bangalore.",
  },
];

const values = [
  {
    icon: Target,
    title: "Lead-Obsessed",
    desc: "Every dashboard answers one question — did we move the business needle this week?",
  },
  {
    icon: Heart,
    title: "Brand-First",
    desc: "Performance without identity is noise. We build both, in lockstep, from day one.",
  },
  {
    icon: Rocket,
    title: "Move Fast",
    desc: "Test, learn, iterate. We ship campaigns weekly so you grow weekly.",
  },
  {
    icon: Sparkles,
    title: "Craft Always",
    desc: "From a 6-second reel to a 60-second TVC, craft is non-negotiable.",
  },
];

const team = [
  {
    img: "/team-1.jpg",
    name: "Arjun Mukherjee",
    role: "Founder & Growth Lead",
    bio: "10+ yrs across performance marketing and brand strategy. Obsessed with CAC payback.",
  },
  {
    img: "/team-2.jpg",
    name: "Priya Banerjee",
    role: "Creative Director",
    bio: "Award-winning art direction across TVCs and digital. Story-first, always.",
  },
  {
    img: "/team-3.jpg",
    name: "Rohan Saha",
    role: "Head of Paid Media",
    bio: "Scaled 7-figure ad accounts on Meta, Google and YouTube — ROAS first, vanity last.",
  },
  {
    img: "/team-4.jpg",
    name: "Neha Iyer",
    role: "Web & UX Lead",
    bio: "Designs and ships conversion-focused sites with Core Web Vitals in mind.",
  },
];

const portfolio = [
  {
    img: "/ent-1.jpg",
    title: "NestCart D2C Launch",
    tag: "Performance + Web",
    result: "−64% CPL in 90 days",
  },
  {
    img: "/ent-2.jpg",
    title: "Roy Jewellers TVC",
    tag: "Ad Film + Meta Ads",
    result: "3× footfall enquiries",
  },
  {
    img: "/ent-3.jpg",
    title: "Urban Bazaar Rebrand",
    tag: "Branding + SEO",
    result: "#1 for 28 keywords",
  },
  {
    img: "/ent-4.jpg",
    title: "FitFuel Reels Series",
    tag: "Content + SMM",
    result: "12M organic reach",
  },
  {
    img: "/ent-5.jpg",
    title: "EduPro Lead Engine",
    tag: "Google + Meta Ads",
    result: "9,400 leads / quarter",
  },
  {
    img: "/ent-6.jpg",
    title: "Singur Sweets Short Film",
    tag: "Boost Up Entertainment",
    result: "1.8M YouTube views",
  },
];

const clients = [
  "NestCart",
  "Roy Jewellers",
  "Urban Bazaar",
  "FitFuel",
  "EduPro",
  "Singur Sweets",
  "Aroma Café",
  "Hooghly Homes",
  "Drape Studio",
  "MetroFit",
  "GreenLeaf",
  "Bengal Brew",
];

const testimonials = [
  {
    quote:
      "Our cost-per-lead dropped 64% in the first 90 days. Boost Up Digital just gets performance — and they prove it on a dashboard, not a deck.",
    name: "Aritra Sen",
    role: "Founder, NestCart",
  },
  {
    quote:
      "They made our brand look like a Fortune 500. The TVC alone tripled our showroom enquiries within a month.",
    name: "Megha Roy",
    role: "MD, Roy Jewellers",
  },
  {
    quote:
      "Best decision of 2024. Honest reporting, real growth, and creative that pops on every feed.",
    name: "Vikram Das",
    role: "CEO, Urban Bazaar",
  },
];

export default function About() {
  return (
    <>
      <section className="pt-24 pb-16 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-4">
              Our Story
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter">
              Born in <span className="text-gradient-brand">2024</span>.
              <br /> Built to <span className="italic font-normal">last.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Boost Up Digital was started with a single conviction — businesses
              deserve marketing that actually works, not jargon that just
              confuses. We turn budgets into pipelines, and pipelines into
              predictable revenue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OUR STORY WITH IMAGE */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass">
              <img
                src="/story.jpg"
                alt="The Boost Up Digital team in studio"
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -z-10 -left-10 top-10 h-72 w-72 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-brand-yellow mb-3">
              The Origin
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              A studio born out of{" "}
              <span className="text-gradient-brand">frustration</span> with
              average agencies.
            </h2>
            <p className="text-muted-foreground mb-4">
              In early 2024, our founders kept hearing the same complaint from
              small and mid-sized business owners across Hooghly and Kolkata —
              "We've paid agencies for years and seen reports full of
              impressions, but no leads." So we built Boost Up Digital to be the
              opposite of that.
            </p>
            <p className="text-muted-foreground mb-4">
              We are a tightly-knit team of performance marketers, SEO
              specialists, designers, copywriters and film-makers — all under
              one roof in Singur, working on a shared dashboard with one shared
              goal: your revenue.
            </p>
            <p className="text-muted-foreground mb-6">
              Today, just over a year in, we partner with 100+ brands across
              D2C, retail, real estate, education, F&amp;B and entertainment —
              and we treat every account like our own startup.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Work With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="glass rounded-3xl p-10 h-full">
              <div className="text-xs uppercase tracking-widest text-brand-yellow mb-3">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Make digital marketing{" "}
                <span className="text-gradient-brand">
                  effective & efficient
                </span>
                .
              </h2>
              <p className="text-muted-foreground">
                We generate leads and business for clients through
                tightly-engineered campaigns across SEO, paid media, social and
                content — measured on outcomes, not impressions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass rounded-3xl p-10 h-full">
              <div className="text-xs uppercase tracking-widest text-brand-yellow mb-3">
                Our Vision
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Become the{" "}
                <span className="text-gradient-brand">growth partner</span>{" "}
                every ambitious brand calls first.
              </h2>
              <p className="text-muted-foreground">
                A studio where strategy, performance and cinematic storytelling
                live under one roof — and where every client gets the obsession
                of a co-founder.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">
              What we stand for
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
               <DirReveal key={v.title} from="left" delay={i * 0.15}>
                <div className="glass rounded-2xl p-6 h-full">
                  <div className="h-11 w-11 rounded-lg bg-gradient-brand grid place-items-center mb-4">
                    <v.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </DirReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
              The People
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Meet the <span className="text-gradient-brand">Boost Up</span>{" "}
              team.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A small, senior team of marketers, designers and storytellers who
              treat your business like their own.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative glass rounded-3xl overflow-hidden h-full"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={m.img}
                      alt={`${m.name}, ${m.role} at Boost Up Digital`}
                      loading="lazy"
                      width={768}
                      height={960}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-xs uppercase tracking-widest text-brand-yellow mb-1">
                        {m.role}
                      </div>
                      <div className="font-display font-bold text-xl">
                        {m.name}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground mb-4">
                      {m.bio}
                    </p>
                    <div className="flex gap-2">
                      <a
                        href="#"
                        aria-label={`${m.name} LinkedIn`}
                        className="h-8 w-8 grid place-items-center rounded-full glass hover:bg-gradient-brand transition-all"
                      >
                        <Linkedin className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href="#"
                        aria-label={`${m.name} Twitter`}
                        className="h-8 w-8 grid place-items-center rounded-full glass hover:bg-gradient-brand transition-all"
                      >
                        <Twitter className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
              Portfolio
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Recent <span className="text-gradient-brand">work</span> that
              moved the needle.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A snapshot of campaigns, films and digital experiences we've
              shipped in the last 12 months.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative aspect-[4/5] rounded-3xl overflow-hidden glass"
                >
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.tag} case study`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">
                    {p.tag}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xs text-brand-yellow font-semibold tracking-widest uppercase mb-1">
                      {p.result}
                    </div>
                    <div className="font-display font-bold text-xl mb-3">
                      {p.title}
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity">
                      View case study <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
              Our Clients
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Trusted by{" "}
              <span className="text-gradient-brand">100+ brands</span>.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From scrappy D2C startups to legacy retailers — here are a few
              names that put their growth in our hands.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 4) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="group relative glass rounded-2xl p-6 h-24 grid place-items-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="font-display font-bold text-xl tracking-tight bg-gradient-to-br from-foreground to-foreground/60 group-hover:from-brand-magenta group-hover:via-brand-orange group-hover:to-brand-yellow bg-clip-text text-transparent transition-all">
                  {c}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
              Milestones
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              A short story, told fast.
            </h2>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-magenta via-brand-orange to-brand-yellow" />
            {milestones.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08}>
                <div
                  className={`relative flex items-center mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-brand shadow-glow" />
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className="glass rounded-2xl p-6">
                      <div className="text-xs font-semibold text-brand-yellow tracking-widest">
                        {m.date}
                      </div>
                      <h3 className="text-xl font-bold mt-1 mb-2">{m.title}</h3>
                      <p className="text-sm text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Clients, on record.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-7 h-full"
                >
                  <Quote className="h-7 w-7 text-brand-magenta mb-4" />
                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-border/40 pt-4">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
