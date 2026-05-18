"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Play,
  Film,
  Tv,
  Megaphone,
  Monitor,
  Sparkles,
  ArrowRight,
  Mail,
  Quote,
  Clapperboard,
  Video,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DirReveal } from "@/components/DirReveal";

// export const Route = createFileRoute("/entertainment")({
//   head: () => ({
//     meta: [
//       { title: "Boost Up Entertainment — Ad Films, TVCs & Short Films" },
//       {
//         name: "description",
//         content:
//           "Cinematic ad films, TVC integration, digital screens and giant screen content, short films and impactful social promotions.",
//       },
//       { property: "og:image", content: "/src/assets/ent-1.jpg" },
//     ],
//   }),
//   component: Entertainment,
// });

const works = [
  {
    src: "/ent-1.jpg",
    title: "TVC Production",
    tag: "Ad Film",
    span: "md:col-span-2 md:row-span-2",
  },
  { src: "/ent-2.jpg", title: "Giant Screen Campaign", tag: "OOH" },
  { src: "/ent-3.jpg", title: "Short Film Direction", tag: "Cinema" },
  { src: "/ent-4.jpg", title: "Reels & Social Spots", tag: "Social" },
  { src: "/ent-5.jpg", title: "Digital Screen Network", tag: "DOOH" },
  {
    src: "/ent-6.jpg",
    title: "Brand Films",
    tag: "Film",
    span: "md:col-span-2",
  },
];

const offerings = [
  {
    icon: Tv,
    title: "AD Films for TVC",
    desc: "Concept to broadcast — 15s, 30s, 60s spots for television.",
  },
  {
    icon: Monitor,
    title: "Digital & Giant Screens",
    desc: "Mall, multiplex and OOH-ready content optimised per format.",
  },
  {
    icon: Megaphone,
    title: "Social Promotions",
    desc: "Scroll-stopping reels, shorts and YouTube pre-rolls.",
  },
  {
    icon: Film,
    title: "Films & Short Films",
    desc: "Narrative storytelling that builds brand love at scale.",
  },
  {
    icon: Clapperboard,
    title: "Film Production",
    desc: "Full-length cinematic productions from script to screen — storytelling at its finest.",
  },
  {
    icon: Video,
    title: "Web Series",
    desc: "Binge-worthy episodic content crafted for OTT platforms and digital audiences.",
  },
];
const testimonials = [
  {
    quote:
      "Boost Up Entertainment turned our product launch into a cinematic event. The ad film they created drove a 300% spike in pre-orders.",
    name: "Rohit Malakar",
    role: "Marketing Head, NovaTech",
  },
  {
    quote:
      "From script to screen, the team delivered a web series that hit 2 million views in its first month. Pure storytelling magic.",
    name: "Ananya Bose",
    role: "Founder, Bengal Streams",
  },
  {
    quote:
      "Their short film for our CSR campaign won us industry recognition and genuine audience love. Not just views — real impact.",
    name: "Sourav Das",
    role: "Brand Director, GreenLeaf India",
  },
];

export default function Entertainment() {
  return (
    <>
      <section className="pt-24 pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium mb-6">
              <Sparkles className="h-3.5 w-3.5 text-brand-yellow" /> A Boost Up
              Digital Studio
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter">
              <span className="text-gradient-brand">Boost Up</span>
              <br /> Entertainment
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Cinematic ad films, TVCs, films and web series engineered as
              marketing weapons. We don't just shoot — we sell.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
            {works.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06} className={w.span ?? ""}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative h-full w-full rounded-2xl overflow-hidden glass"
                >
                  <img
                    src={w.src}
                    alt={w.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <span className="self-start text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-gradient-brand text-primary-foreground font-semibold">
                      {w.tag}
                    </span>
                    <div className="flex items-end justify-between gap-3">
                      <h3 className="text-lg md:text-xl font-bold">
                        {w.title}
                      </h3>
                      <div className="h-10 w-10 rounded-full bg-gradient-brand grid place-items-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity shadow-glow">
                        <Play className="h-4 w-4 text-primary-foreground ml-0.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
              Capabilities
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Stories that <span className="text-gradient-brand">sell</span>.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 h-full">
                  <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center mb-4 shadow-glow">
                    <o.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{o.title}</h3>
                  <p className="text-sm text-muted-foreground">{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
              Testimonials
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              What our <span className="text-gradient-brand">partners</span>{" "}
              say.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <DirReveal
                key={t.name}
                from={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.12}
              >
                <div className="glass rounded-2xl p-6 h-full flex flex-col">
                  <Quote className="h-8 w-8 text-brand-magenta mb-4 opacity-60" />
                  <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-brand grid place-items-center text-primary-foreground font-bold text-sm">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </DirReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER / COLLABORATION */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl glass p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute -z-10 -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
              <div className="absolute -z-10 -left-20 -bottom-20 h-72 w-72 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
              <div className="text-xs uppercase tracking-[0.3em] text-brand-cyan mb-3">
                Career / Collaboration
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Have a script or story to tell?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                We are always looking for fresh voices, bold scripts and
                creative collaborators. Whether you are a writer, director,
                actor or production partner — we want to hear from you.
              </p>
              <a
                href="mailto:boostupdigital.official03@gmail.com?subject=Script%20Submission%20/%20Collaboration%20Inquiry"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
              >
                <Mail className="h-4 w-4" /> Email Us Your Script
              </a>
              <p className="mt-4 text-xs text-muted-foreground">
                boostupdigital.official03@gmail.com
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
