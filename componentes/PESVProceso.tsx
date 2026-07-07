import Image from "next/image";

const proceso = [
  {
    titulo: "Diagnóstico",
    descripcion:
      "Evaluamos el estado actual de la organización para identificar riesgos y oportunidades de mejora en seguridad vial.",
    icono: "/icons/auditoria.png",
  },
  {
    titulo: "Planeación",
    descripcion:
      "Diseñamos el Plan Estratégico de Seguridad Vial conforme a la normatividad vigente.",
    icono: "/icons/pesv.png",
  },
  {
    titulo: "Implementación",
    descripcion:
      "Ejecutamos las acciones necesarias para fortalecer la cultura de seguridad vial.",
    icono: "/icons/implementacion.png",
  },
  {
    titulo: "Seguimiento",
    descripcion:
      "Monitoreamos indicadores y realizamos acciones de mejora continua para garantizar la eficacia del PESV.",
    icono: "/icons/mejora-continua.png",
  },
];

export default function PESVProceso() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.35em] text-red-600 font-semibold">
            METODOLOGÍA
          </span>

          <h2 className="text-4xl font-bold text-[#0B2A5B] mt-4">

            Nuestro Proceso de Trabajo

          </h2>

          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-5 mb-6"></div>

          <p className="text-gray-600 max-w-3xl mx-auto leading-8">

            Acompañamos a nuestros clientes durante todas las etapas del
            Plan Estratégico de Seguridad Vial mediante una metodología
            organizada y enfocada en resultados.

          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {proceso.map((item, index) => (

            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-xl border border-slate-100 p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="flex justify-center mb-6">

                <Image
                  src={item.icono}
                  alt={item.titulo}
                  width={85}
                  height={85}
                />

              </div>

              <h3 className="text-2xl font-bold text-[#0B2A5B] mb-4">

                {item.titulo}

              </h3>

              <p className="text-gray-600 leading-7">

                {item.descripcion}

              </p>

              {index < proceso.length - 1 && (

                <div className="hidden lg:flex absolute top-1/2 -right-8 transform -translate-y-1/2 text-red-600 text-4xl">

                  ➜

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}