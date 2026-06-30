
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "plare.png",
  "operadora-centro.png",
  "sma.png",
  "urbacusules.png",
  "gomez-abogados.png",
  "rga.png",
  "transmilenio.png",
  "dextera.png",
  "mezza.png",
  "slyn.png",
  "insercor.png",
  "finmaq.png",
  "fundacion-tennis.png",
  "colegio-militar.png",
  "multicore.png"
];

export default function ClientesLogos() {
  const items = [...logos, ...logos];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-slate-800">
            Empresas que confían en nosotros
          </h2>
          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-4" />
          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Estas son algunas de las organizaciones públicas y privadas con las
            que hemos trabajado a nivel nacional.
          </p>
        </div>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6 w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((logo, index) => (
            <div
              key={index}
              className="w-56 h-28 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all flex items-center justify-center shrink-0"
            >
              <Image
                src={`/images/clientes/logos/${logo}`}
                alt={logo}
                width={150}
                height={70}
                className="object-contain max-w-[150px] max-h-[60px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
