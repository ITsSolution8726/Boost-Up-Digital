
"use client";

import { cn } from "@/lib/utils";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);

      scrollerRef.current?.appendChild(duplicatedItem);
    });

    getDirection();
    getSpeed();
    setStart(true);
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );
  };

  const getSpeed = () => {
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "90s";

    containerRef.current?.style.setProperty(
      "--animation-duration",
      duration,
    );
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
      )}
    >
      <ul
        ref={scrollerRef}
        onClick={togglePause}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap items-stretch gap-4 py-3 sm:gap-6 sm:py-4 lg:gap-8",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
          isPaused && "[animation-play-state:paused]",
          className,
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            aria-label={`Testimonial from ${item.name}. Click or tap to ${
              isPaused ? "resume" : "pause"
            } testimonials.`}
            className="group relative flex h-auto min-h-[300px] w-[88vw] max-w-[340px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border/40 glass p-4 transition-all duration-300 hover:border-brand-magenta/40 hover:shadow-xl hover:shadow-brand-magenta/10 sm:min-h-[320px] sm:w-[380px] sm:max-w-[380px] sm:rounded-3xl sm:p-6 lg:min-h-[340px] lg:w-[520px] lg:max-w-[520px] xl:w-[600px] xl:max-w-[600px]"
          >
            {/* Gradient hover glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30 sm:h-48 sm:w-48" />

            {/* Bottom glow */}
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-brand-cyan/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Quote Icon */}
            <Quote className="relative z-10 mb-3 h-6 w-6 shrink-0 text-brand-magenta sm:mb-4 sm:h-8 sm:w-8" />

            {/* Rating Stars */}
            <div className="relative z-10 mb-3 flex shrink-0 gap-1 sm:mb-5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className="h-3.5 w-3.5 fill-brand-yellow text-brand-yellow sm:h-4 sm:w-4"
                />
              ))}
            </div>

            {/* Review */}
            <blockquote className="relative z-10 mb-5 break-words text-[13px] leading-6 text-foreground/90 sm:mb-6 sm:text-sm sm:leading-7 lg:text-base">
              “{item.quote}”
            </blockquote>

            {/* Reviewer Details */}
            <div className="relative z-10 flex shrink-0 items-center gap-3 border-t border-border/40 pt-3 sm:gap-4 sm:pt-4">
              {/* Reviewer Image */}
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-magenta/40 sm:h-12 sm:w-12">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 40px, 48px"
                  className="object-cover"
                />
              </div>

              {/* Reviewer Info */}
              <div className="min-w-0 flex-1">
                <div className="break-words text-sm font-semibold leading-snug text-foreground sm:text-base">
                  {item.name}
                </div>

                <div className="mt-1 break-words text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  {item.title}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
