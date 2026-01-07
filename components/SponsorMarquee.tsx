"use client";

import { useState } from "react";
import Image from "next/image";
import { sponsorLogos } from "@/data/sponsor-logos";

export function SponsorMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...sponsorLogos, ...sponsorLogos];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex gap-8 md:gap-12">
        <div
          className={`flex gap-8 md:gap-12 shrink-0 ${isPaused ? "animation-paused" : "animate-scroll"}`}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex items-center justify-center h-20 w-32 md:h-24 md:w-40 shrink-0 surface-light rounded-lg border border-light p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              <Image
                src={logo}
                alt={`Sponsor logo ${index + 1}`}
                width={160}
                height={96}
                className="object-contain h-full w-full"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}