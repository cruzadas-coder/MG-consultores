import Image from "next/image";

export default function Nosotros() {
  return (
    <section className="bg-slate-50 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Sección principal */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-blue-700 font-semibold uppercase tracking-[0.3em]">
              Nosotros
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900 leading-tight">
              Construimos organizaciones más eficientes, seguras y competitivas.
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full mt-6 mb-8"></div>

            <p className="text-lg text-slate-600 leading-8 mb-6">
              En Martínez González Consultores acompañamos a empresas públicas
              y privadas en el diseño, implementación y fortalecimiento de
              Sistemas Integrados de Gestión, generando soluciones que permiten
              mejorar la productividad, el cumplimiento normativo y la
              sostenibilidad.
            </p>

            <p className="text-lg text-slate-600 leading-8">
              Nuestro compromiso es brindar asesoría técnica con altos
              estándares de calidad, apoyando a nuestros clientes en la toma de
              decisiones y en el crecimiento continuo de sus organizaciones.
            </p>

          </div>

          <div>

            <Image
              src="/images/Nosotros.png"
              alt="Equipo de Martínez González Consultores"
              width={700}
              height={500}
              priority
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

          </div>

        </div>

        {/* Misión y Visión */}

        <div className="grid lg:grid-cols-2 gap-10 mt-24">

          {/* MISIÓN */}

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10">

            <p className="text-blue-700 font-semibold uppercase tracking-[0.3em]">
              Nuestra Misión
            </p>

            <div className="w-20 h-1 bg-red-600 rounded-full mt-4 mb-6"></div>

            <p className="text-slate-600 text-lg leading-8">
              Brindar soluciones integrales en consultoría, asesoría,
              capacitación e implementación de Sistemas de Gestión,
              contribuyendo al fortalecimiento de la seguridad, la calidad,
              la gestión ambiental, la productividad y el cumplimiento legal
              de nuestros clientes mediante un servicio profesional,
              oportuno y de alto valor agregado.
            </p>

          </div>

          {/* VISIÓN */}

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10">

            <p className="text-blue-700 font-semibold uppercase tracking-[0.3em]">
              Nuestra Visión
            </p>

            <div className="w-20 h-1 bg-red-600 rounded-full mt-4 mb-6"></div>

            <p className="text-slate-600 text-lg leading-8">
              Consolidarnos como una firma líder en consultoría empresarial a
              nivel nacional, reconocida por la excelencia de nuestros
              servicios, la innovación, el compromiso con nuestros clientes y
              la generación de soluciones sostenibles que impulsen el
              crecimiento de las organizaciones.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}