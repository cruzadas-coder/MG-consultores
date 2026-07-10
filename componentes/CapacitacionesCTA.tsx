"use client";

import Image from "next/image";

export default function CapacitacionesCTA() {
  return (
    <section className="relative overflow-hidden">

      <Image
        src="/images/cta-capacitaciones-banner.png"
        alt="Capacitaciones Empresariales"
        width={1920}
        height={700}
        className="w-full h-auto"
      />

    </section>
  );
}