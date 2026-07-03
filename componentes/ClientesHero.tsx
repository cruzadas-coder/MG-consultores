"use client";

import Image from "next/image";

export default function ClientesHeroV2() {
  return (
    <section className="w-full pt-20 overflow-hidden">
      <div className="relative w-full h-[320px] md:h-[420px] lg:h-[500px]">
        <Image
          src="/images/clientes-banner.png"
          alt="Banner Clientes"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}