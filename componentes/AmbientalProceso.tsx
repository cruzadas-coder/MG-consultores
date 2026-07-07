import Image from "next/image";

const proceso = [
  {
    titulo: "Diagnóstico",
    descripcion:
      "Evaluamos el estado actual de la organización e identificamos los aspectos e impactos ambientales.",
    icono: "/icons/auditoria.png",
  },
  {
    titulo: "Evaluación",
    descripcion:
      "Analizamos el cumplimiento legal y definimos las oportunidades de mejora.",
    icono: "/icons/auditoria-calidad.png",
  },
  {
    titulo: "Implementación",
    descripcion:
      "Desarrollamos e implementamos las acciones necesarias para fortalecer la gestión ambiental.",
    icono: "/icons/implementacion.png",
  },
  {
    titulo: "Seguimiento",
    descripcion:
      "Realizamos seguimiento continuo mediante indicadores y planes de mejora.",
    icono: "/icons/mejora-continua.png",
  },
];

export default function AmbientalProceso() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-[#0B2A5B]">
            Nuestro Proceso de Trabajo
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Nuestro proceso garantiza una implementación ordenada,
            eficiente y alineada con la normatividad ambiental vigente.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {proceso.map((item, index) => (

            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="flex justify-center mb-6">

                <Image
                  src={item.icono}
                  alt={item.titulo}
                  width={80}
                  height={80}
                />

              </div>

              <h3 className="text-2xl font-bold text-[#0B2A5B] text-center mb-4">

                {item.titulo}

              </h3>

              <p className="text-gray-600 text-center leading-7">

                {item.descripcion}

              </p>

              {index < proceso.length - 1 && (

                <div className="hidden lg:flex absolute top-1/2 -right-7 transform -translate-y-1/2 text-red-600 text-4xl font-bold">

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