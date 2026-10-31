"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  Megaphone,
  Share2,
  Globe,
  Film,
  ArrowRight,
  Check,
  MessageCircle,
  Clapperboard,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    icon: Search,
    color: "from-brand-magenta to-brand-pink",
    title: "Search Engine Optimisation",
    tag: "SEO",
    image: "/svc-seo.jpg",
    desc: "Rank higher, get discovered, and turn organic search into a consistent source of qualified traffic and leads.",
    long: "From technical audits and Core Web Vitals fixes to high-intent keyword strategy, content briefs, authority link building and local SEO for Google Business Profile — every lever is pulled to dominate your category SERPs.",
    points: [
      "Keyword & Search Strategy",
      "On-Page SEO",
      "Technical SEO",
      "Local SEO",
      "Content Optimization",
      "Performance Tracking",
    ],
  },
  {
    icon: Share2,
    color: "from-brand-pink to-brand-orange",
    title: "Social Media Marketing",
    tag: "SMM",
    image: "/svc-social.jpg",
    desc: "Build a stronger social presence with strategic content, consistent communication and campaigns designed to grow reach, engagement and demand.",
    long: "Strategy-first content systems — pillar-driven reels, carousels, stories and long-form video produced in-house. We blend brand storytelling with performance hooks so every post earns either attention, trust or a tap on 'Buy Now'.",
    points: [
      "Social Media Strategy",
      "Content Planning",
      "Creative Direction",
      "Community Management",
      "Instagram & Facebook",
      "LinkedIn & Other Platforms",
    ],
  },
  {
    icon: Target,
    color: "from-brand-orange to-brand-yellow",
    title: "Meta Ads — Facebook & Instagram",
    tag: "Meta Ads",
    image: "/svc-meta.jpg",
    desc: "Reach the right audience with performance-focused Meta campaigns built to generate qualified leads, enquiries and conversions.",
    long: "From Advantage+ shopping campaigns to retargeting funnels, catalog ads, lead-gen forms and conversion API tracking — we run rapid creative testing cycles to find winners fast and pour budget into what actually pays back.",
    points: [
      "Campaign Strategy",
      "Audience Research",
      "Lead Generation",
      "Conversion Campaigns",
      "Retargeting",
      "Performance Optimization",
    ],
  },
  {
    icon: Megaphone,
    color: "from-brand-yellow to-brand-orange",
    title: "Google Ads & Performance Max",
    tag: "Google Ads",
    image: "/svc-google.jpg",
    desc: "Capture high-intent demand with Google Search, Display, YouTube and Performance Max campaigns focused on qualified leads and measurable conversions.",
    long: "We architect Google Ads accounts the right way — clean campaign structure, exact-match priority, SKAGs where they fit, asset-rich PMax, and YouTube TrueView funnels that drive both reach and revenue.",
    points: [
      "Google Search Ads",
      "Display Advertising",
      "YouTube Ads",
      "Performance Max",
      "Keyword Strategy",
      "Conversion Tracking & Optimization",
    ],
  },
  {
    icon: Globe,
    color: "from-brand-cyan to-brand-magenta",
    title: "Web Design & Development",
    tag: "Web",
    image: "/svc-web.jpg",
    desc: "Fast, modern and mobile-first websites designed around your brand, user experience and business goals — not just aesthetics.",
    long: "Modern stack, blazing performance, SEO-ready architecture and pixel-perfect UI. Whether it's a 3-page lead magnet, a 50-page corporate site or a fully integrated Shopify/WordPress build — we ship sites that convert.",
    points: [
      "UI/UX Design",
      "Responsive Development",
      "Landing Pages",
      "Conversion-Focused Websites",
      "Website Optimization",
      "Analytics & Tracking",
    ],
  },
  {
    icon: MessageCircle,
    color: "from-brand-magenta to-brand-cyan",
    title: "Content & Creative",
    tag: "Handling",
    image: "/svc-handling.jpg",
    desc: "From campaign concepts to social content, branded visuals and short-form video, we create creative that captures attention and supports your marketing goals.",
    long: "From inbox triage and WhatsApp catalogue setup to LinkedIn thought-leadership posting and YouTube channel growth — your customers feel heard within minutes and your brand stays in conversation 365 days a year.",
    points: [
      "Content Strategy",
      "Social Creatives",
      "Short-Form Video",
      "Campaign Concepts",
      "Brand Content",
      "Creative Direction",
    ],
  },
  {
    icon: Clapperboard,
    color: "from-brand-pink to-brand-yellow",
    title: "Ad Films & TVC",
    tag: "Video Production",
    image: "/ent-3.jpg",
    desc: "Cinema-grade ad films, TVCs and social spots created to tell memorable stories, strengthen brands and move audiences to action.",
    long: "From creative concepts and compelling scripts to professional production and cinematic storytelling, we create impactful ad films, television commercials and social video campaigns that bring brands to life and connect with audiences.",
    points: [
      "Concept Development",
      "Script & Storytelling",
      "Production",
      "Ad Films",
      "TVCs",
      "Social Video Campaigns",
    ],
  },
];

const faqs = [
  {
    q: "What services does Boost Up Digital provide?",
    a: "We provide SEO, Google Ads, Meta Ads, social media marketing, web design & development, content and creative services, and ad film/TVC production.",
  },
  {
    q: "Do you work with businesses of all sizes?",
    a: "Yes. We work with startups, growing businesses and established brands, with strategies tailored to their goals and stage of growth.",
  },
  {
    q: "Do you guarantee leads or sales?",
    a: "We don't promise unrealistic results. We focus on building, measuring and continuously optimizing campaigns around business objectives and performance.",
  },
  {
    q: "Is advertising spend included in your fees?",
    a: "Advertising budgets are generally separate from our service fees and are planned according to campaign objectives.",
  },
  {
    q: "Can I hire Boost Up for only one service?",
    a: "Yes. Businesses can work with us for individual services or combine multiple capabilities into a complete growth strategy.",
  },
  {
    q: "How do we get started?",
    a: "Start with a conversation or free marketing audit. We'll understand your goals and recommend the most suitable approach.",
  },
];

export default function Services() {
  return (
    <>
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-4">
              Our Services
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter">
              Everything you need to{" "}
              <span className="text-gradient-brand">scale</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategy to acquisition, conversion and optimization, we
              bring together the digital tools businesses need to attract
              customers and scale with confidence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ALTERNATING SERVICE ROWS */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-28">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={s.title}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative ${reverse ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative aspect-4/3 rounded-3xl overflow-hidden glass">
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${s.color} opacity-20`}
                    />
                    <img
                      src={s.image}
                      alt={`${s.title} services illustration`}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-semibold uppercase tracking-widest">
                      <span
                        className={`h-2 w-2 rounded-full bg-linear-to-br ${s.color}`}
                      />{" "}
                      {s.tag}
                    </div>
                  </div>
                  <div
                    className={`absolute -z-10 ${reverse ? "-right-10" : "-left-10"} top-10 h-72 w-72 rounded-full bg-linear-to-br ${s.color} opacity-30 blur-3xl`}
                  />
                </motion.div>

                {/* COPY */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1,
                  }}
                  className={reverse ? "lg:order-1" : "lg:order-2"}
                >
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${s.color} shadow-glow mb-5`}
                  >
                    <s.icon className="h-7 w-7 shrink-0 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    {s.title}
                  </h2>
                  <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                    {s.desc}
                  </p>
                  <p className="text-muted-foreground mb-6">{s.long}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-brand-cyan mt-0.5 shrink-0" />{" "}
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
                  >
                    Enquire about {s.tag} <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
              Our Process
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="text-gradient-brand">
                From Strategy to Growth.
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A simple, measurable process designed to turn business goals into
              marketing outcomes.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: "01",
                t: "Discover",
                d: "Understand your business, audience, competition and growth objectives.",
              },
              {
                n: "02",
                t: "Strategy",
                d: "Build the right marketing and acquisition strategy around your goals.",
              },
              {
                n: "03",
                t: "Execute",
                d: "Launch campaigns, content, creative and digital experiences across the right channels.",
              },
              {
                n: "04",
                t: "Optimize",
                d: "Measure performance, identify opportunities and continuously improve what works.",
              },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 h-full">
                  <div className="text-5xl font-bold text-gradient-brand font-display mb-3">
                    {p.n}
                  </div>
                  <div className="font-semibold text-lg">{p.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {p.d}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <Reveal className="mb-16 text-center">
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-brand-cyan">
              Pricing
            </div>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Solutions That{" "}
              <span className="text-gradient-brand">Grow With You.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every business has different goals. Choose a starting point, and
              we'll build the right strategy around your needs.
            </p>
          </Reveal>

          {/* Pricing Cards */}
          <div className="grid items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3">
            {/* 01 - Starter Growth */}
            <Reveal delay={0}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative flex h-full flex-col rounded-3xl glass p-7 sm:p-8"
              >
                <div className="mb-6">
                  <div className="mb-5 text-sm font-bold tracking-widest text-brand-cyan">
                    01 <span className="text-muted-foreground/50">·</span> Entry
                    Level
                  </div>

                  <h3 className="text-2xl font-bold">Starter Growth</h3>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-muted-foreground">
                    For businesses building their digital presence.
                  </p>
                </div>

                <div className="mb-6 rounded-2xl bg-brand-cyan/5 p-5">
                  <p className="text-sm font-semibold leading-7">
                    Local SEO + Social Media Management + Brand Awareness
                    Campaigns.
                  </p>
                </div>

                <div className="mt-auto">
                  <Link
                    href="/contact?quote=true&plan=Starter%20Growth"
                    className="inline-flex w-full items-center justify-center rounded-full border border-brand-cyan/30 px-6 py-3 font-semibold transition hover:border-brand-cyan hover:bg-brand-cyan/10"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            </Reveal>

            {/* 02 - Growth Essential */}
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-brand p-[1px]"
              >
                <div className="absolute right-5 top-5 z-10 rounded-full bg-background px-4 py-1.5 text-[10px] font-bold tracking-wider text-brand-yellow">
                  MOST ACCESSIBLE
                </div>

                <div className="flex h-full flex-col rounded-[calc(1.5rem-1px)] glass p-7 sm:p-8">
                  <div className="mb-6">
                    <div className="mb-5 text-sm font-bold tracking-widest text-brand-magenta">
                      02 <span className="text-muted-foreground/50">·</span>{" "}
                      Lead Generation
                    </div>

                    <h3 className="text-2xl font-bold">Growth Essential</h3>

                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-muted-foreground">
                      For businesses that want visibility and enquiries.
                    </p>
                  </div>

                  <div className="mb-6 rounded-2xl bg-brand-magenta/5 p-5">
                    <p className="text-sm font-semibold leading-7">
                      Everything in Starter + Meta Ads Management + Lead
                      Generation.
                    </p>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href="/contact?quote=true&plan=Growth%20Essential"
                      className="inline-flex w-full items-center justify-center rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Reveal>

            {/* 03 - Growth Pro */}
            <Reveal delay={0.2}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative flex h-full flex-col rounded-3xl glass p-7 sm:p-8"
              >
                <div className="mb-6">
                  <div className="mb-5 text-sm font-bold tracking-widest text-brand-yellow">
                    03 <span className="text-muted-foreground/50">·</span>{" "}
                    Advanced
                  </div>

                  <h3 className="text-2xl font-bold">Growth Pro</h3>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-muted-foreground">
                    For businesses ready to acquire customers through multiple
                    channels.
                  </p>
                </div>

                <div className="mb-6 rounded-2xl bg-brand-yellow/5 p-5">
                  <p className="text-sm font-semibold leading-7">
                    Everything in Growth Essential + AEO + Google Ads + Website
                    Content Marketing.
                  </p>
                </div>

                <div className="mt-auto">
                  <Link
                    href="/contact?quote=true&plan=Growth%20Pro"
                    className="inline-flex w-full items-center justify-center rounded-full border border-brand-yellow/30 px-6 py-3 font-semibold transition hover:border-brand-yellow hover:bg-brand-yellow/10"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            </Reveal>

            {/* 04 - Growth Accelerator */}
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative flex h-full flex-col rounded-3xl glass p-7 sm:p-8"
              >
                <div className="mb-6">
                  <div className="mb-5 text-sm font-bold tracking-widest text-purple-400">
                    04 <span className="text-muted-foreground/50">·</span>{" "}
                    Premium
                  </div>

                  <h3 className="text-2xl font-bold">Growth Accelerator</h3>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-muted-foreground">
                    For businesses looking for strategic performance marketing
                    and brand building.
                  </p>
                </div>

                <div className="mb-6 rounded-2xl bg-purple-400/5 p-5">
                  <p className="text-sm font-semibold leading-7">
                    Performance Marketing Strategy + Branding + Ad Films + Reel
                    Commercials.
                  </p>
                </div>

                <div className="mt-auto">
                  <Link
                    href="/contact?quote=true&plan=Growth%20Accelerator"
                    className="inline-flex w-full items-center justify-center rounded-full border border-purple-400/30 px-6 py-3 font-semibold transition hover:border-purple-400 hover:bg-purple-400/10"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            </Reveal>

            {/* 05 - Custom Growth Solutions */}
            <Reveal delay={0.2}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative flex h-full flex-col rounded-3xl glass p-7 sm:p-8"
              >
                <div className="mb-6">
                  <div className="mb-5 text-sm font-bold tracking-widest text-brand-magenta">
                    05 <span className="text-muted-foreground/50">·</span>{" "}
                    Flexible
                  </div>

                  <h3 className="text-2xl font-bold">
                    Custom Growth Solutions
                  </h3>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-muted-foreground">
                    For businesses with specific marketing requirements.
                  </p>
                </div>

                <div className="mb-6 rounded-2xl bg-brand-magenta/5 p-5">
                  <p className="text-sm font-semibold leading-7">
                    Tailored marketing strategy, services and execution.
                  </p>
                </div>

                <div className="mt-auto">
                  <Link
                    href="/contact?quote=true&plan=Custom%20Growth%20Solutions"
                    className="inline-flex w-full items-center justify-center rounded-full border border-brand-magenta/30 px-6 py-3 font-semibold transition hover:border-brand-magenta hover:bg-brand-magenta/10"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          </div>

          {/* Closing Message */}
          <Reveal delay={0.3}>
            <p className="mt-12 text-center text-sm leading-7 text-muted-foreground">
              Not sure which plan is right for you?{" "}
              <Link
                href="/contact"
                className="font-semibold text-brand-cyan transition hover:text-brand-magenta"
              >
                Talk to our team
              </Link>{" "}
              and get a growth strategy tailored to your business goals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal>
            <Accordion
              type="single"
              collapsible
              className="glass rounded-2xl px-6"
            >
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-border/40"
                >
                  <AccordionTrigger className="text-left font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl bg-gradient-brand p-10 md:p-14 text-center">
              <Film className="h-10 w-10 mx-auto text-primary-foreground mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
                Let's Build Your Growth Plan.
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                Tell us what you're trying to achieve. We'll help you identify
                the right channels, strategy and next steps.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-3.5 font-semibold hover:scale-105 transition-transform"
              >
                Book Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
