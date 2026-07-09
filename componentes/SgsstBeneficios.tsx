"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const beneficios = [
  {
    titulo: "Cumplimiento Legal",
    descripcion:
      "Evite sanciones cumpliendo con la legislación vigente en Seguridad y Salud en el Trabajo.",
    icono: "/icons/cumplimiento.png",
  },
  {
    titulo: "Prevención de Accidentes",
    descripcion:
      "Identifique peligros y reduzca la ocurrencia de accidentes e incidentes laborales.",
    icono: "/icons/salud.png",
  },
  {
    titulo: "Bienestar del Personal",
    descripcion:
      "Fortalezca el bienestar físico, mental y emocional de sus colaboradores.",
    icono: "/icons/equipo.png",
  },
  {
    titulo: "Mejora Continua",
    descripcion:
      "Implemente indicadores y acciones de mejora para fortalecer el desempeño del SG-SST.",
    icono: "/icons/mejora-continua.png",
  },
];

export default function SgsstBeneficios() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
          >

            <span className="text-red-600 uppercase font-bold tracking-widest">
              ¿Por qué implementar un SG-SST?
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">
              Beneficios para su empresa y sus trabajadores
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full mt-6 mb-8"></div>

            <p className="text-gray-600 leading-8">
              Un Sistema de Gestión de Seguridad y Salud en el Trabajo
              permite prevenir accidentes, proteger la salud de los
              trabajadores y garantizar el cumplimiento de la normativa
              vigente. Además, fortalece la cultura de prevención y mejora
              el desempeño organizacional.
            </p>

          </motion.div>

          {/* Beneficios */}

          <div className="grid md:grid-cols-2 gap-8">

            {beneficios.map((beneficio, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .45 }}
                viewport={{ once: true }}
                className="flex gap-5 bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
              >

                <Image
                  src={beneficio.icono}
                  alt={beneficio.titulo}
                  width={70}
                  height={70}
                />

                <div>

                  <h3 className="font-bold text-slate-800 mb-2">
                    {beneficio.titulo}
                  </h3>

                  <p className="text-gray-600 text-sm leading-6">
                    {beneficio.descripcion}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}