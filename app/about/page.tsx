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
  Star,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DirReveal } from "@/components/DirReveal";
import Image from "next/image";


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
    img: "/Santanu.jpeg",
    name: "Santanu Ghosh",
    role: "Founder",
    bio: "Leads business vision and growth strategy, bringing 10+ years of experience in performance marketing, customer acquisition, and brand development.",
  },
  {
    img: "/ArpanH.png",
    name: "Arpan Halder",
    role: "Co-founder & CMO",
    bio: "Drives creative strategy and brand communication, combining impactful art direction with compelling storytelling across digital campaigns and TV commercials.",
  },
  {
    img: "/ArpanB.png",
    name: "Arpan Bhattacharyya",
    role: "Co-founder & COO",
    bio: "Oversees campaign execution and operations, focusing on data-driven advertising, performance optimization, and measurable growth across Meta, Google, and YouTube.",
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
  // Existing clients
  { name: "ADS Hospital", logo: "/logos/ads.jpeg" },
  { name: "Bengal Institute of Health Science", logo: "/logos/bihs.jpeg" },
  { name: "Jewellery Brand", logo: "/logos/Jewar.jpeg" },
  { name: "Red Plus Society Nursing Home", logo: "/logos/rps.jpeg" },
  { name: "VIMT", logo: "/logos/vimt.jpeg" },

  // New clients
  { name: "AP's Glow Star", logo: "/logos/ap-glowstar.png" },
  { name: "AP's Champion Gym", logo: "/logos/ap-gym.jpeg" },
  { name: "Appayan Caterer", logo: "/logos/appayan.jpeg" },
  { name: "Brainsight Neurovision Institute", logo: "/logos/brainsight.jpeg" },
  { name: "Hare Krishna Nursing Home", logo: "/logos/hare-krishna-nursing.jpeg" },
  { name: "HK Health Care Private Limited", logo: "/logos/hk-healthcare.jpeg" },
  { name: "Jewellery Museum", logo: "/logos/jewellery-museum.jpeg" },
  { name: "Kidz Dental Solution", logo: "/logos/kidz-dental.jpeg" },
  { name: "Malati Speech & Hearing Clinic", logo: "/logos/malati.jpeg" },
  { name: "Ma Manasha Jewellers", logo: "/logos/ma-manasha-jewellers.jpeg" },
  { name: "Mediseure Diagnostic Centre", logo: "/logos/mediseure.jpeg" },
  { name: "Nabaday Netralay", logo: "/logos/nabaday.jpeg" },
  { name: "Nayandisha Eye Foundation", logo: "/logos/nayandisha.jpeg" },
  { name: "Nirvi Ventures", logo: "/logos/nirvi.jpeg" },
  { name: "Reshmi Gallery", logo: "/logos/reshmi-gallry.jpeg" },
  { name: "Susthiti", logo: "/logos/susthiti.jpeg" },
];

const testimonials = [
  {
    quote:
      "BoostUp Digital has helped Bak Sruti Speech & Hearing Clinic generate regular, high-quality leads through Google Ads and Meta Ads. Their Local SEO strategies have also improved our visibility in local search results, helping us reach more potential patients. We appreciate their strategic approach and consistent efforts toward our digital growth.",
    name: "Nirmalya Ghosh",
    role: "Bardhaman Speech and Hearing Centre",
    img: "/logos/bak-sruti.jpeg",
  },
  {
    quote:
      "BoostUp Digital brought a fresh approach to our online marketing. Their social media campaigns, Meta Ads, and Local SEO have helped AKS Medicare Pvt. Ltd. connect with a wider audience and strengthen their digital presence.",
    name: "Apurba Krishna Sinha",
    role: "AKS Medicare Pvt. Ltd.",
    img: "/logos/aks.png",
  },
  {
    quote:
      "From building our online presence to reaching more local audiences, BoostUp Digital has supported Navshruti Clinic with creative social media marketing, targeted Meta Ads, and Local SEO.",
    name: "Debashis Basu",
    role: "Navshruti",
    img: "/logos/navshruti.jpeg",
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
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden glass">
              <img
                src="/story.jpg"
                alt="The Boost Up Digital team in studio"
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative glass rounded-3xl overflow-hidden h-full"
                >
                  <div className="relative aspect-4/5 overflow-hidden">
                    <img
                      src={m.img}
                      alt={`${m.name}, ${m.role} at Boost Up Digital`}
                      loading="lazy"
                      width={768}
                      height={960}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
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
                  className="group relative aspect-4/5 rounded-3xl overflow-hidden glass"
                >
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.tag} case study`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />
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
          <Reveal className="mb-12 text-center">
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-brand-cyan">
              Our Clients
            </div>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Trusted by{" "}
              <span className="text-gradient-brand">100+ brands</span>.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From healthcare and education to retail, jewellery and hospitality,
              we partner with businesses across different industries.
            </p>
          </Reveal>

          <div className="grid grid-cols-3 items-center gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-7 lg:gap-x-10 lg:gap-y-12">
            {clients.map((client, i) => (
              <DirReveal
                key={client.name}
                from={i % 2 === 0 ? "left" : "right"}
                delay={(i % 4) * 0.08}
              >
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.25 }}
                  className="relative mx-auto h-24 w-full max-w-44 sm:h-28 sm:max-w-52"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                    className="object-contain"
                  />
                </motion.div>
              </DirReveal>
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
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-brand-magenta via-brand-orange to-brand-yellow" />
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
    </>
  );
}
