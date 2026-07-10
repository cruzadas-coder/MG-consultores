"use client";

import Image from "next/image";

export default function MedicionHero() {
  return (
    <section className="relative overflow-hidden">

      <Image
        src="/images/MedicionHeroBanner.png"
        alt="Mediciones Ocupacionales y Ambientales"
        width={1920}
        height={850}
        priority
        className="w-full h-auto"
      />

    </section>
  );
}