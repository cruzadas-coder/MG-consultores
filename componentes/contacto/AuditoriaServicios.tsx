"use client";

import Image from "next/image";

const servicios = [
  {
    icono: "/icons/auditoria.png",
    titulo: "Auditorías Internas",
    descripcion:
      "Evaluamos la eficacia de los Sistemas de Gestión para identificar oportunidades de mejora."
  },
  {
    icono: "/icons/auditoria-calidad.png",
    titulo: "Auditorías de Calidad",
    descripcion:
      "Verificamos el cumplimiento de los requisitos de las normas ISO y demás estándares."
  },
  {
    icono: "/icons/diagnostico.png",
    titulo: "Diagnóstico Inicial",
    descripcion:
      "Analizamos el estado actual de la organización antes de iniciar procesos de mejora."
  },
  {
    icono: "/icons/evaluacion.png",
    titulo: "Evaluación de Procesos",
    descripcion:
      "Revisamos procesos estratégicos, misionales y de apoyo para fortalecer su desempeño."
  },
  {
    icono: "/icons/cumplimiento.png",
    titulo: "Cumplimiento Normativo",
    descripcion:
      "Comprobamos el cumplimiento legal y reglamentario aplicable a su organización."
  },
  {
    icono: "/icons/mejora-continua.png",
    titulo: "Mejora Continua",
    descripcion:
      "Generamos planes de acción que impulsan el crecimiento y la competitividad empresarial."
  }
];

export default function AuditoriaServicios() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-slate-900">
          Nuestros Servicios
        </h2>

        <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-6 mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {servicios.map((servicio) => (
            <div
              key={servicio.titulo}
              className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 text-center hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={servicio.icono}
                alt={servicio.titulo}
                width={90}
                height={90}
                className="mx-auto mb-6"
              />

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {servicio.titulo}
              </h3>

              <p className="text-slate-600 leading-7">
                {servicio.descripcion}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}