"use client";

import Image from "next/image";

export default function AuditoriaCTA() {
  return (
    <section className="relative overflow-hidden">

      <Image
        src="/images/AuditoriaCTABanner.png"
        alt="Auditorías Empresariales"
        width={1920}
        height={650}
        className="w-full h-auto"
      />

    </section>
  );
}