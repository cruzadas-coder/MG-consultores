"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const servicios = [
  {
    titulo: "Ruido Ocupacional",
    descripcion:
      "Evaluación de niveles de presión sonora para verificar el cumplimiento de la normativa y proteger la salud auditiva.",
    icono: "/icons/diagnostico.png",
  },
  {
    titulo: "Iluminación",
    descripcion:
      "Medición de niveles de iluminación para garantizar ambientes seguros y confortables.",
    icono: "/icons/evaluacion.png",
  },
  {
    titulo: "Confort Térmico",
    descripcion:
      "Determinamos las condiciones térmicas del ambiente para mejorar el bienestar del personal.",
    icono: "/icons/salud.png",
  },
  {
    titulo: "Calidad del Aire",
    descripcion:
      "Mediciones para evaluar contaminantes y condiciones ambientales en los lugares de trabajo.",
    icono: "/icons/ambiental.png",
  },
  {
    titulo: "Agentes Químicos",
    descripcion:
      "Evaluación de la exposición ocupacional a sustancias químicas presentes en el ambiente laboral.",
    icono: "/icons/energia.png",
  },
  {
    titulo: "Material Particulado",
    descripcion:
      "Cuantificación de partículas suspendidas para la prevención de enfermedades ocupacionales.",
    icono: "/icons/vigilancia.png",
  },
];

export default function MedicionServicios() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="uppercase tracking-widest text-red-600 font-bold">
            NUESTROS SERVICIOS
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Mediciones que generan confianza
          </h2>

          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {servicios.map((servicio, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .45 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-8 text-center"
            >

              <Image
                src={servicio.icono}
                alt={servicio.titulo}
                width={90}
                height={90}
                className="mx-auto mb-6"
              />

              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {servicio.titulo}
              </h3>

              <p className="text-gray-600 leading-7">
                {servicio.descripcion}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}