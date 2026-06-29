import Image from "next/image";

export default function Nosotros() {
  return (
    <section
      className="bg-slate-50 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}

        <div>

          <p className="text-blue-700 font-semibold uppercase tracking-[0.3em]">
            Nosotros
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900 leading-tight">
            Construimos organizaciones más eficientes, seguras y competitivas.
          </h2>

          <div className="w-24 h-1 bg-red-600 rounded-full mt-6 mb-8"></div>

          <p className="text-lg text-slate-600 leading-8 mb-6">
            En Martínez González Consultores acompañamos a empresas públicas y
            privadas en el diseño, implementación y fortalecimiento de Sistemas
            Integrados de Gestión, generando soluciones que permiten mejorar la
            productividad, el cumplimiento normativo y la sostenibilidad.
          </p>

          <p className="text-lg text-slate-600 leading-8 mb-10">
            Nuestro compromiso es brindar asesoría técnica con altos estándares
            de calidad, apoyando a nuestros clientes en la toma de decisiones y
            en el crecimiento continuo de sus organizaciones.
          </p>

          <button className="bg-slate-900 hover:bg-slate-400 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300">
            Conoce más sobre nosotros
          </button>

        </div>

        {/* Imagen */}

        <div>

          <Image
            src="/images/Nosotros.png"
            alt="Equipo de Martínez González Consultores"
            width={700}
            height={500}
            className="rounded-3xl shadow-2xl w-full object-cover"
            priority
          />

        </div>

      </div>
    </section>
  );
}