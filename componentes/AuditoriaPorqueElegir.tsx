"use client";

import Image from "next/image";

const beneficios = [
  {
    icono: "/icons/acompanamiento.png",
    titulo: "Acompañamiento Profesional",
    descripcion:
      "Nuestro equipo lo acompaña durante todas las etapas del proceso de auditoría."
  },
  {
    icono: "/icons/control-calidad.png",
    titulo: "Control y Seguimiento",
    descripcion:
      "Realizamos seguimiento a los hallazgos y oportunidades de mejora identificadas."
  },
  {
    icono: "/icons/compromiso.png",
    titulo: "Compromiso con el Cliente",
    descripcion:
      "Trabajamos con ética, confidencialidad y enfoque en resultados."
  },
  {
    icono: "/icons/iso9001.png",
    titulo: "Mejora Continua",
    descripcion:
      "Impulsamos el fortalecimiento permanente de sus Sistemas de Gestión."
  }
];

export default function AuditoriaPorqueElegir() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-slate-900">
          ¿Por qué elegirnos?
        </h2>

        <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-6 mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {beneficios.map((item) => (
            <div
              key={item.titulo}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 text-center hover:-translate-y-2 transition"
            >
              <Image
                src={item.icono}
                alt={item.titulo}
                width={90}
                height={90}
                className="mx-auto mb-6"
              />

              <h3 className="text-xl font-bold mb-4">
                {item.titulo}
              </h3>

              <p className="text-slate-600 leading-7">
                {item.descripcion}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}