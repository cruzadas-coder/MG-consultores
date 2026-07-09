"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const beneficios = [
  {
    titulo: "Cumplimiento Normativo",
    descripcion:
      "Capacitaciones alineadas con la legislación vigente y los requisitos de los Sistemas de Gestión.",
    icono: "/icons/cumplimiento.png",
  },
  {
    titulo: "Mayor Productividad",
    descripcion:
      "Equipos mejor preparados ejecutan sus actividades con mayor eficiencia y mejores resultados.",
    icono: "/icons/productividad.png",
  },
  {
    titulo: "Cultura Organizacional",
    descripcion:
      "Fortalecemos el compromiso, la comunicación y el trabajo colaborativo dentro de la empresa.",
    icono: "/icons/equipo.png",
  },
  {
    titulo: "Acompañamiento Especializado",
    descripcion:
      "Nuestros profesionales brindan asesoría permanente antes, durante y después de cada proceso de formación.",
    icono: "/icons/acompanamiento.png",
  },
];

export default function CapacitacionesBeneficios() {
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
              ¿POR QUÉ ELEGIRNOS?
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">
              Capacitaciones que generan valor para su organización
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full my-6"></div>

            <p className="text-gray-600 leading-8">
              La formación continua fortalece las competencias del talento
              humano, mejora el cumplimiento de la normativa, incrementa la
              productividad y promueve una cultura de prevención y mejora
              continua dentro de la organización.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">

            {beneficios.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-6"
              >

                <Image
                  src={item.icono}
                  alt={item.titulo}
                  width={70}
                  height={70}
                  className="mb-5"
                />

                <h3 className="font-bold text-xl text-slate-800 mb-3">
                  {item.titulo}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.descripcion}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}