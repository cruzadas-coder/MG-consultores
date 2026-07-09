import Image from "next/image";

export default function RiesgoCTA() {
  return (
    <section className="relative overflow-hidden py-20">

      {/* Fondo */}
      <div className="absolute inset-0">

        <Image
          src="/images/cta-riesgo-fondo.png"
          alt="Riesgo Psicosocial"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#0B2A5B]/85"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
              MARTÍNEZ GONZÁLEZ CONSULTORES
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">

              Proteja el bienestar de sus colaboradores

            </h2>

            <p className="text-slate-200 text-lg leading-8 mt-8">

              Evaluamos los factores de Riesgo Psicosocial,
              desarrollamos planes de intervención y acompañamos a
              su organización en el cumplimiento de la normatividad
              vigente, promoviendo ambientes laborales saludables,
              seguros y productivos.

            </p>

            <a
              href="/contacto"
              className="inline-flex items-center mt-10 bg-red-600 hover:bg-red-700 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-xl shadow-xl"
            >
              Solicitar Diagnóstico
            </a>

          </div>

          <div className="hidden lg:flex justify-center">

            <Image
              src="/icons/equipo.png"
              alt="Bienestar Organizacional"
              width={280}
              height={280}
              className="drop-shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}