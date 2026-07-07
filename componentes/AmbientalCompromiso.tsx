import Image from "next/image";

export default function AmbientalCompromiso() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0B2A5B] via-[#123C78] to-[#0B2A5B] py-20">

      {/* Patrón decorativo */}

      <div className="absolute inset-0 opacity-10">

        <Image
          src="/images/patron-hojas.png"
          alt="Patrón Hojas"
          fill
          className="object-cover"
        />

      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-white mb-6">

          Nuestro compromiso con la sostenibilidad

        </h2>

        <p className="text-blue-100 text-xl leading-9 max-w-4xl mx-auto">

          En MG Consultores desarrollamos soluciones ambientales que
          integran el cumplimiento normativo, la protección de los
          recursos naturales y la mejora continua, fortaleciendo la
          sostenibilidad de cada organización.

        </p>

      </div>

    </section>
  );
}