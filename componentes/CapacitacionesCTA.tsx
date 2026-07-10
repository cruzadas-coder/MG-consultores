"use client";

import Image from "next/image";

export default function MedicionCTA() {
  return (
    <section className="relative overflow-hidden">

      <Image
        src="/images/MedicionCTABanner.png"
        alt="Solicite sus mediciones"
        width={1920}
        height={650}
        className="w-full h-auto"
      />

    </section>
  );
}