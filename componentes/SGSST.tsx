import Image from "next/image";

const servicios = [
  {
    icono: "/icons/implementacion.png",
    titulo: "Implementación SG-SST",
    descripcion:
      "Diseñamos, implementamos y mantenemos Sistemas de Gestión de Seguridad y Salud en el Trabajo de acuerdo con el Decreto 1072 de 2015 y la Resolución 0312 de 2019.",
  },
  {
    icono: "/icons/ruc.png",
    titulo: "Registro RUC y Planes HSE",
    descripcion:
      "Preparamos empresas para auditorías RUC, documentación HSE y cumplimiento de requisitos para contratistas del sector industrial y petrolero.",
  },
  {
    icono: "/icons/psicosocial.png",
    titulo: "Riesgo Psicosocial",
    descripcion:
      "Aplicación de baterías de riesgo psicosocial, programas de bienestar, clima organizacional y planes de intervención.",
  },
  {
    icono: "/icons/vigilancia.png",
    titulo: "Programas de Vigilancia",
    descripcion:
      "Diseño e implementación de Programas de Vigilancia Epidemiológica para prevenir enfermedades laborales.",
  },
];

export default function SGSST() {
  return (
    <main className="bg-white">

      <section className="max-w-7xl mx-auto px-6 pt-10">

        <Image
          src="/images/SGSST.png"
          alt="Seguridad y Salud en el Trabajo"
          width={1600}
          height={700}
          priority
          className="w-full rounded-3xl shadow-xl"
        />

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-red-600 font-semibold">
            Nuestros Servicios
          </p>

          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-4 mb-6"></div>

          <h1 className="text-5xl font-bold text-slate-900">
            Seguridad y Salud en el Trabajo
          </h1>

          <p className="mt-8 text-lg text-slate-600 max-w-4xl mx-auto leading-8">
            Ayudamos a las organizaciones a implementar Sistemas de Gestión de
            Seguridad y Salud en el Trabajo, garantizando el cumplimiento de la
            legislación colombiana y promoviendo una cultura preventiva.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {servicios.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">

                <Image
                  src={item.icono}
                  alt={item.titulo}
                  width={90}
                  height={90}
                  className="flex-shrink-0"
                />

                <div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    {item.titulo}
                  </h2>

                  <p className="text-slate-600 leading-8">
                    {item.descripcion}
                  </p>

                </div>

              </div>

              <div className="w-16 h-1 bg-red-600 rounded-full mt-8"></div>

            </div>
          ))}

        </div>

        <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center">

          <h2 className="text-4xl font-bold text-white">
            Protegemos el activo más importante de su empresa
          </h2>

          <p className="text-gray-300 mt-6 max-w-4xl mx-auto leading-8">
            Nuestro equipo acompaña a empresas públicas y privadas en la
            implementación, actualización y mantenimiento del Sistema de
            Gestión de Seguridad y Salud en el Trabajo, promoviendo ambientes
            laborales seguros, saludables y alineados con la legislación
            colombiana.
          </p>

          <a
            href="/contacto"
            className="inline-block mt-10 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Solicitar Asesoría
          </a>

        </div>
      </section>

      <section className="bg-slate-100 py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            ¿Necesita fortalecer su Sistema de Gestión?
          </h2>

          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-8 mb-10">
            En Martínez González Consultores acompañamos a las organizaciones en
            cada etapa del proceso, desde el diagnóstico inicial hasta la
            implementación, auditoría y mejora continua del Sistema de Gestión
            de Seguridad y Salud en el Trabajo.
          </p>

          <a
            href="/contacto"
            className="inline-flex items-center justify-center bg-slate-900 hover:bg-red-600 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Contáctenos
          </a>

        </div>

      </section>

    </main>
  );
}