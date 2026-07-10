"use client";

import Image from "next/image";

export default function AuditoriaHero() {
  return (
    <section className="relative overflow-hidden">

      <Image
        src="/images/AuditoriaHeroBanner.png"
        alt="Auditorías Empresariales"
        width={1920}
        height={850}
        priority
        className="w-full h-auto"
      />

    </section>
  );
}