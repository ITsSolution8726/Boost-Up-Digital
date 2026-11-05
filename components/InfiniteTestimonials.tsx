
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

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);

        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else if (speed === "slow") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap items-stretch gap-4 py-4 sm:gap-6 lg:gap-8",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="group relative flex h-[380px] w-[88vw] max-w-[340px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border/40 glass p-5 transition-all duration-300 hover:border-brand-magenta/40 hover:shadow-xl hover:shadow-brand-magenta/10 sm:h-[400px] sm:w-[380px] sm:max-w-[380px] sm:rounded-3xl sm:p-6 lg:h-[420px] lg:w-[520px] lg:max-w-[520px] lg:p-7 xl:w-[600px] xl:max-w-[600px]"
          >
            {/* Gradient hover glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30 sm:h-48 sm:w-48" />

            <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-brand-cyan/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Quote Icon */}
            <Quote className="relative z-10 mb-3 h-7 w-7 shrink-0 text-brand-magenta sm:mb-4 sm:h-8 sm:w-8" />

            {/* Rating Stars */}
            <div className="relative z-10 mb-4 flex shrink-0 gap-1 sm:mb-5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className="h-3.5 w-3.5 fill-brand-yellow text-brand-yellow sm:h-4 sm:w-4"
                />
              ))}
            </div>

            {/* Review */}
            <blockquote className="relative z-10 mb-5 min-h-0 flex-1 overflow-y-auto pr-1 text-[13px] leading-6 text-foreground/90 [scrollbar-width:thin] sm:mb-6 sm:text-sm sm:leading-7 lg:text-base">
              “{item.quote}”
            </blockquote>

            {/* Reviewer Details */}
            <div className="relative z-10 mt-auto flex min-h-[60px] shrink-0 items-center gap-3 border-t border-border/40 pt-3 sm:min-h-[70px] sm:gap-4 sm:pt-4">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-magenta/40 sm:h-12 sm:w-12">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 44px, 48px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
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