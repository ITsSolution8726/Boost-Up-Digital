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
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// export const Route = createFileRoute("/services")({
//   head: () => ({
//     meta: [
//       {
//         title:
//           "Digital Marketing Services in India — SEO, Ads, Social & Web | Boost Up Digital",
//       },
//       {
//         name: "description",
//         content:
//           "Full-service digital marketing agency offering SEO, Meta Ads, Google Ads, social media management, conversion-focused web design and cinematic ad film production — engineered for measurable ROI.",
//       },
//       {
//         name: "keywords",
//         content:
//           "digital marketing services, SEO agency India, Meta Ads, Google Ads, social media marketing, web design, Boost Up Digital",
//       },
//       { property: "og:title", content: "Services — Boost Up Digital" },
//       {
//         property: "og:description",
//         content:
//           "SEO, Meta & Google Ads, social media management, web design, and ad films — built around your business outcomes.",
//       },
//     ],
//   }),
//   component: Services,
// });

const services = [
  {
    icon: Search,
    color: "from-brand-magenta to-brand-pink",
    title: "Search Engine Optimisation",
    tag: "SEO",
    image: "/svc-seo.jpg",
    desc: "Rank where buyers search. We engineer on-page, off-page and technical SEO programmes that turn Google into your most reliable salesperson — compounding traffic and qualified leads month after month.",
    long: "From technical audits and Core Web Vitals fixes to high-intent keyword strategy, content briefs, authority link building and local SEO for Google Business Profile — every lever is pulled to dominate your category SERPs.",
    points: [
      "Keyword research & mapping",
      "Technical & on-page SEO",
      "Authority link building",
      "Local & Google Business SEO",
      "Monthly rank & traffic reports",
    ],
  },
  {
    icon: Share2,
    color: "from-brand-pink to-brand-orange",
    title: "Social Media Marketing",
    tag: "SMM",
    image: "/svc-social.jpg",
    desc: "Show up daily, sound like a brand, sell every week. We run end-to-end social media strategy, content calendars and community building across Instagram, Facebook, LinkedIn and YouTube.",
    long: "Strategy-first content systems — pillar-driven reels, carousels, stories and long-form video produced in-house. We blend brand storytelling with performance hooks so every post earns either attention, trust or a tap on 'Buy Now'.",
    points: [
      "Brand voice & content pillars",
      "Daily publishing & reels",
      "Community management",
      "Influencer & UGC outreach",
      "Monthly growth reports",
    ],
  },
  {
    icon: Target,
    color: "from-brand-orange to-brand-yellow",
    title: "Meta Ads — Facebook & Instagram",
    tag: "Meta Ads",
    image: "/svc-meta.jpg",
    desc: "Funnels engineered for CAC, not vanity metrics. Our Meta Ads pods build creative-led campaigns across Facebook and Instagram designed to lower cost-per-lead and scale ROAS predictably.",
    long: "From Advantage+ shopping campaigns to retargeting funnels, catalog ads, lead-gen forms and conversion API tracking — we run rapid creative testing cycles to find winners fast and pour budget into what actually pays back.",
    points: [
      "Creative testing framework",
      "Advantage+ & Manual campaigns",
      "Retargeting & catalog ads",
      "Conversion API setup",
      "Daily optimisation",
    ],
  },
  {
    icon: Megaphone,
    color: "from-brand-yellow to-brand-orange",
    title: "Google Ads & Performance Max",
    tag: "Google Ads",
    image: "/svc-google.jpg",
    desc: "Capture demand the moment it appears. Search, Shopping, YouTube, Display and Performance Max campaigns built around conversion tracking and daily bid optimisation.",
    long: "We architect Google Ads accounts the right way — clean campaign structure, exact-match priority, SKAGs where they fit, asset-rich PMax, and YouTube TrueView funnels that drive both reach and revenue.",
    points: [
      "Search & Shopping ads",
      "Performance Max campaigns",
      "YouTube video ads",
      "Bid & budget optimisation",
      "GA4 & GTM tracking setup",
    ],
  },
  {
    icon: Globe,
    color: "from-brand-cyan to-brand-magenta",
    title: "Web Design & Development",
    tag: "Web",
    image: "/svc-web.jpg",
    desc: "Lightning-fast, conversion-first websites that look stunning on every screen. We build landing pages, full marketing sites and e-commerce experiences with measurable goals baked in.",
    long: "Modern stack, blazing performance, SEO-ready architecture and pixel-perfect UI. Whether it's a 3-page lead magnet, a 50-page corporate site or a fully integrated Shopify/WordPress build — we ship sites that convert.",
    points: [
      "High-converting landing pages",
      "Corporate & marketing sites",
      "E-commerce builds",
      "Core Web Vitals tuning",
      "CMS training & handoff",
    ],
  },
  {
    icon: MessageCircle,
    color: "from-brand-magenta to-brand-cyan",
    title: "End-to-End Social Media Handling",
    tag: "Handling",
    image: "/svc-handling.jpg",
    desc: "Hand us the keys. We manage every channel — Facebook, Instagram, LinkedIn, WhatsApp Business, YouTube — replying, posting, growing and reporting so you can focus on the business.",
    long: "From inbox triage and WhatsApp catalogue setup to LinkedIn thought-leadership posting and YouTube channel growth — your customers feel heard within minutes and your brand stays in conversation 365 days a year.",
    points: [
      "Inbox & DM management",
      "WhatsApp Business setup",
      "LinkedIn growth",
      "Reels & shorts production",
      "Weekly performance recap",
    ],
  },
];

const faqs = [
  {
    q: "How long until I see results from digital marketing?",
    a: "Paid media usually delivers measurable leads within 14–30 days of going live. Organic SEO compounds over 3–6 months. Most of our clients see a clear lift in pipeline within the first quarter of working with us.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Absolutely. From local boutiques in Hooghly and Kolkata to D2C startups across India — if you're serious about growth, we tailor packages to your stage and budget.",
  },
  {
    q: "Do you produce video content in-house?",
    a: "Yes. Through our sister studio Boost Up Entertainment we shoot, edit and deliver ad films, TVCs, reels and corporate videos end-to-end — no third-party hand-offs.",
  },
  {
    q: "How do you report on performance?",
    a: "Every client gets a live Looker Studio dashboard plus a monthly strategy review call. You always know exactly what's been spent, what's been earned, and what we're testing next.",
  },
  {
    q: "Can I hire you for just one service?",
    a: "Yes. While most clients prefer our integrated growth retainer, you can hire us for SEO only, Ads only or Web only — pricing scales with scope.",
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
              One studio, six disciplines, zero hand-offs. From keyword to
              conversion — and the cinematic ad film that seals the deal — we
              run the full growth stack under one roof.
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
              Four steps from{" "}
              <span className="text-gradient-brand">brief to boom</span>.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A repeatable, transparent system that takes your brand from
              kickoff call to compounding growth — without the agency runaround.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: "01",
                t: "Discover",
                d: "Deep-dive audits, audience research and goal-setting so every rupee has a target.",
              },
              {
                n: "02",
                t: "Design",
                d: "Strategy, funnels, messaging and creative direction — locked before a single ad goes live.",
              },
              {
                n: "03",
                t: "Deploy",
                d: "Campaigns, websites and films launched on tight timelines with rigorous QA.",
              },
              {
                n: "04",
                t: "Double Down",
                d: "Weekly optimisation, monthly reviews — kill what fails, scale what wins.",
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
                Let's draft a plan.
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                A free 30-minute strategy call — we'll map quick wins and a
                90-day roadmap tailored to your business.
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
