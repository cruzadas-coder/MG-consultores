import Image from "next/image";

export default function HeroContacto() {
  return (
    <section className="relative pt-24">

      <div className="relative h-[680px] overflow-hidden">

        <Image
          src="/images/contacto-banner.webp"
          alt="Contáctenos"
          fill
          priority
          className="object-cover object-right"
        />

        {/* Capa azul */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#08254F]/95 via-[#0D2F63]/88 to-transparent" />

        {/* Contenido */}

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-7xl mx-auto w-full px-10">

            <div className="max-w-xl">

              <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                CONTÁCTENOS
              </h1>

              <div className="w-56 h-[5px] bg-red-600 rounded-full mt-6"></div>

              <h2 className="mt-10 text-4xl italic text-white">
                Estamos listos para ayudarle.
              </h2>

              <p className="mt-10 text-xl leading-9 text-white/90">

                En Martínez González Consultores brindamos soluciones
                integrales para fortalecer la gestión de las organizaciones,
                ofreciendo asesoría especializada y acompañamiento
                profesional para el cumplimiento de los sistemas de gestión.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

