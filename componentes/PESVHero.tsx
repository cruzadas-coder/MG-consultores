import Image from "next/image";

export default function PESVHero() {
  return (
    <section className="pt-28 pb-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl shadow-2xl">

          <Image
            src="/images/pesv-banner.png"
            alt="Plan Estratégico de Seguridad Vial"
            width={1920}
            height={650}
            priority
            className="w-full h-auto object-cover"
          />

        </div>

      </div>

    </section>
  );
}