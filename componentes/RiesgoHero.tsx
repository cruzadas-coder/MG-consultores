import Image from "next/image";

export default function RiesgoHero() {
  return (
    <section className="relative w-full overflow-hidden">

      <div className="relative w-full aspect-[16/7] min-h-[360px] md:min-h-[500px] lg:min-h-[620px]">

        <Image
          src="/images/riesgo-hero-banner.png"
          alt="Riesgo Psicosocial"
          fill
          priority
          quality={100}
          className="object-cover"
        />

      </div>

    </section>
  );
}