import Image from "next/image";

export default function AmbientalHero() {
  return (
    <section className="pt-24 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl shadow-2xl">

          <Image
            src="/images/gestion-ambiental-banner.png"
            alt="Gestión Ambiental"
            width={1920}
            height={650}
            priority
            className="w-full h-auto"
          />

        </div>

      </div>
    </section>
  );
}