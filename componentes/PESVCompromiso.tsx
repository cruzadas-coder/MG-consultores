import Image from "next/image";

export default function PESVCompromiso() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0B2A5B] via-[#123C78] to-[#0B2A5B] py-20">

      {/* Fondo decorativo */}

      <div className="absolute inset-0 opacity-10">

        <Image
          src="/images/patron-carretera.png"
          alt="Patrón Carretera"
          fill
          className="object-cover"
        />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-10 items-center">

          {/* Icono */}

          <div className="flex justify-center">

            <Image
              src="/icons/compromiso-vial.png"
              alt="Compromiso Vial"
              width={220}
              height={220}
            />

          </div>

          {/* Texto */}

          <div className="lg:col-span-2 text-white">

            <h2 className="text-4xl font-bold mb-6">

              Nuestro compromiso con la Seguridad Vial

            </h2>

            <p className="text-blue-100 text-xl leading-9">

              En MG Consultores promovemos una cultura organizacional
              enfocada en la prevención de accidentes, la protección de la
              vida y el cumplimiento de los requisitos establecidos en el
              Plan Estratégico de Seguridad Vial, fortaleciendo el
              bienestar de los colaboradores y la sostenibilidad de las
              organizaciones.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}