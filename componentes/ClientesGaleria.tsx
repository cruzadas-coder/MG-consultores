
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fotos = [
  "1.png","2.png","3.png","4.png","5.png","6.png","7.png",
  "a1.png","a2.png","a3.png",
  "mina1.png","mina2.png","mina3.png","mina4.png",
  "simulacro1.png","simulacro2.png","simulacro3.png","simulacro4.png"
];
export default function ClientesGaleria() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-800">
            Casos de Trabajo Real
          </h2>

          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-5"></div>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-8">
            Cada fotografía refleja parte de nuestra experiencia en proyectos
            desarrollados para diferentes sectores económicos, demostrando el
            compromiso de MG Consultores con la calidad, la seguridad y el
            cumplimiento normativo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {fotos.map((foto,index)=>(

            <motion.div
              key={foto}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{duration:.45,delay:index*0.04}}
              whileHover={{y:-6}}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >

              <div className="relative h-72">

                <Image
                  src={`/images/clientes/${foto}`}
                  alt={foto}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-5 left-5">

                  <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Caso de Trabajo
                  </span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
