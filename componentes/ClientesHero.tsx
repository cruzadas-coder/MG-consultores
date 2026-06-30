"use client";

import Image from "next/image";

export default function ClientesHeroV2() {
  return (
    <section className="w-full bg-white py-6">
      <div className="w-full max-w-6xl mx-auto px-4">
        <Image
          src="/images/clientes-banner.png"
          alt="Banner Clientes"
          width={1920}
          height={700}
          priority
          className="w-full h-auto rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}