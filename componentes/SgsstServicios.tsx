"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const servicios = [
  {
    titulo: "Diagnóstico Inicial",
    descripcion:
      "Evaluamos el estado actual de su empresa frente a los requisitos del Sistema de Gestión de Seguridad y Salud en el Trabajo.",
    icono: "/icons/auditoria.png",
  },
  {
    titulo: "Diseño e Implementación",
    descripcion:
      "Diseñamos e implementamos el SG-SST de acuerdo con la normatividad vigente y las necesidades de la organización.",
    icono: "/icons/implementacion.png",
  },
  {
    titulo: "Cumplimiento Legal",
    descripcion:
      "Verificamos el cumplimiento de la legislación aplicable para reducir riesgos y evitar sanciones.",
    icono: "/icons/cumplimiento.png",
  },
  {
    titulo: "Capacitaciones",
    descripcion:
      "Desarrollamos programas de formación para fortalecer la cultura de prevención y el autocuidado.",
    icono: "/icons/capacitacion.png",
  },
  {
    titulo: "Auditorías Internas",
    descripcion:
      "Realizamos auditorías del SG-SST para evaluar la eficacia del sistema y proponer oportunidades de mejora.",
    icono: "/icons/evaluacion.png",
  },
  {
    titulo: "Seguimiento de Indicadores",
    descripcion:
      "Monitoreamos indicadores de gestión para medir el desempeño y la mejora continua del sistema.",
    icono: "/icons/productividad.png",
  },
  {
    titulo: "Mejora Continua",
    descripcion:
      "Implementamos acciones correctivas y preventivas que fortalecen la gestión de la seguridad y salud laboral.",
    icono: "/icons/mejora-continua.png",
  },
  {
    titulo: "Acompañamiento Permanente",
    descripcion:
      "Brindamos asesoría técnica durante todas las etapas del SG-SST para garantizar resultados sostenibles.",
    icono: "/icons/acompanamiento.png",
  },
];

export default function SgsstServicios() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-red-600 font-bold uppercase tracking-widest">
            Nuestros Servicios
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            ¿Cómo podemos ayudar a su empresa?
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100"
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={servicio.icono}
                  alt={servicio.titulo}
                  width={82}
                  height={82}
                />
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {servicio.titulo}
              </h3>

              <p className="text-gray-600 leading-7 text-sm">
                {servicio.descripcion}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}