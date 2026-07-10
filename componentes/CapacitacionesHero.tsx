"use client";

import Image from "next/image";

export default function CapacitacionesHero() {
  return (
    <section className="relative overflow-hidden">

      <Image
        src="/images/capacitaciones-hero-banner.png"
        alt="Capacitaciones Empresariales"
        width={1920}
        height={900}
        priority
        className="w-full h-auto"
      />

    </section>
  );
}