"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Monitor } from "lucide-react";
import { websiteProjects } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export default function WebsiteProjects() {
  return (
    <section
      id="website-projects"
      className="relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-brand-cyan/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-brand-magenta/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <Reveal>
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan sm:text-xs">
              <Globe size={14} />
              Digital Experiences
            </span>

            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Websites We've{" "}
              <span className="text-gradient-brand">Brought to Life</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Explore the digital experiences we've designed and developed to
              help businesses build their brand and grow online.
            </p>
          </div>
        </Reveal>

        {/* Project cards */}
        <div className="mx-auto w-full max-w-[800px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 lg:gap-6 xl:gap-7">
            {websiteProjects.map((project, index) => (
              <Reveal key={project.name}>
                <motion.article
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.08,
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.09] bg-[#111d32]/80 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:shadow-xl hover:shadow-brand-cyan/[0.07]"
                >
                  {/* Browser preview */}
                  <div className="relative p-2.5 pb-0 sm:p-3 sm:pb-0">
                    <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0c1526]">
                      {/* Browser toolbar */}
                      <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.07] bg-white/[0.04] px-3">
                        <span className="h-2 w-2 rounded-full bg-red-400/80" />
                        <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                        <span className="h-2 w-2 rounded-full bg-green-400/80" />

                        <div className="ml-2 flex h-5 min-w-0 flex-1 items-center justify-center gap-1 rounded bg-white/[0.05] px-2">
                          <Globe size={9} className="shrink-0 text-white/35" />
                          <span className="truncate text-[9px] text-white/35">
                            {project.url
                              .replace(/^https?:\/\//, "")
                              .replace(/\/$/, "")}
                          </span>
                        </div>
                      </div>

                      {/* Website screenshot */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#18243a]">
                        <Image
                          src={project.image}
                          alt={`${project.name} website preview`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#10192d]/35 via-transparent to-transparent opacity-80" />

                        {/* Industry badge */}
                        <span className="absolute left-3 top-3 max-w-[85%] truncate rounded-full border border-white/20 bg-[#10192d]/80 px-3 py-1.5 text-[10px] font-semibold text-white shadow-lg backdrop-blur-md">
                          {project.industry}
                        </span>

                        {/* Desktop hover action */}
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.name} website`}
                          className="absolute bottom-3 right-3 hidden h-9 w-9 items-center justify-center rounded-full bg-gradient-brand text-[#10192d] shadow-xl transition-all duration-300 hover:scale-110 group-hover:flex"
                        >
                          <ArrowUpRight className="text-white" size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Project information */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold leading-snug text-white transition-colors duration-300 group-hover:text-gradient-brand sm:text-lg">
                        {project.name}
                      </h3>

                      <Monitor
                        size={16}
                        className="mt-0.5 shrink-0 text-brand-cyan/60"
                      />
                    </div>

                    <p className="mt-2.5 flex-1 text-xs leading-6 text-white/55 sm:text-[13px]">
                      {project.description}
                    </p>

                    {/* Live link */}
                    <div className="mt-4 border-t border-white/[0.08] pt-3.5">
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-gradient-brand transition-all duration-300 hover:gap-3 hover:text-white sm:text-sm"
                      >
                        Explore Live Website
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="h-[2px] w-0 bg-gradient-brand transition-all duration-500 group-hover:w-full" />
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <Reveal>
          <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:mt-12">
            <div className="flex items-center gap-2 text-xs text-white/40">
              <span className="h-px w-8 bg-white/15" />
              <span>Designed with purpose. Built for growth.</span>
              <span className="h-px w-8 bg-white/15" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
