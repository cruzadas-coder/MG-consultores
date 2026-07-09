"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const servicios = [
  {
    titulo: "Seguridad y Salud en el Trabajo",
    descripcion:
      "Capacitaciones enfocadas en prevención de riesgos laborales, autocuidado y cumplimiento del SG-SST.",
    icono: "/icons/sst2.png",
  },
  {
    titulo: "Trabajo Seguro",
    descripcion:
      "Programas orientados a fortalecer las competencias para la ejecución segura de actividades de alto riesgo.",
    icono: "/icons/capacitacion.png",
  },
  {
    titulo: "Primeros Auxilios",
    descripcion:
      "Entrenamiento práctico para responder de manera adecuada ante emergencias y eventos inesperados.",
    icono: "/icons/salud.png",
  },
  {
    titulo: "Gestión Ambiental",
    descripcion:
      "Capacitaciones para promover buenas prácticas ambientales y el cumplimiento de la normativa vigente.",
    icono: "/icons/ambiental.png",
  },
  {
    titulo: "Seguridad Vial",
    descripcion:
      "Formación en conducción segura, comportamiento vial y fortalecimiento del PESV.",
    icono: "/icons/pesv.png",
  },
  {
    titulo: "Trabajo en Equipo",
    descripcion:
      "Fortalecemos habilidades blandas, liderazgo, comunicación y cultura organizacional.",
    icono: "/icons/equipo.png",
  },
];

export default function CapacitacionesServicios() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="uppercase tracking-widest text-red-600 font-bold">
            NUESTROS PROGRAMAS
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Capacitaciones para fortalecer su organización
          </h2>

          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {servicios.map((servicio, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
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