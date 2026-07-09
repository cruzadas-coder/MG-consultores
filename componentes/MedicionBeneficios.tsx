"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const beneficios = [
  {
    titulo: "Cumplimiento Normativo",
    descripcion:
      "Las mediciones permiten verificar el cumplimiento de la legislación vigente y los estándares técnicos aplicables.",
    icono: "/icons/cumplimiento.png",
  },
  {
    titulo: "Protección de la Salud",
    descripcion:
      "Identificamos factores de riesgo para proteger la salud y el bienestar de los trabajadores.",
    icono: "/icons/salud.png",
  },
  {
    titulo: "Mayor Productividad",
    descripcion:
      "Ambientes laborales seguros y controlados favorecen un mejor desempeño organizacional.",
    icono: "/icons/productividad.png",
  },
  {
    titulo: "Mejora Continua",
    descripcion:
      "Los resultados obtenidos permiten implementar acciones correctivas y fortalecer la gestión del riesgo.",
    icono: "/icons/mejora-continua.png",
  },
];

export default function MedicionBeneficios() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-widest text-red-600 font-bold">
              BENEFICIOS
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">
              ¿Por qué realizar mediciones ocupacionales y ambientales?
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full my-6"></div>

            <p className="text-gray-600 leading-8">
              Las mediciones proporcionan información técnica confiable
              para identificar riesgos, tomar decisiones oportunas y
              desarrollar estrategias que protejan la salud de los
              trabajadores y garanticen el cumplimiento de la normativa.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">

            {beneficios.map((beneficio, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-6"
              >

                <Image
                  src={beneficio.icono}
                  alt={beneficio.titulo}
                  width={70}
                  height={70}
                  className="mb-5"
                />

                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {beneficio.titulo}
                </h3>

                <p className="text-gray-600 leading-7">
                  {beneficio.descripcion}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}