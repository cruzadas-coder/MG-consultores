"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CapacitacionesCTA() {
  return (
    <section className="relative overflow-hidden">

      <Image
        src="/images/cta-capacitaciones-banner.png"
        alt="Capacitaciones Empresariales"
        width={1920}
        height={700}
        className="w-full h-auto"
      />

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >

            <span className="uppercase tracking-widest text-red-500 font-bold">
              FORMACIÓN EMPRESARIAL
            </span>

            <h2 className="text-5xl font-bold text-white leading-tight mt-5">
              Capacitamos a su equipo
              <br />
              para construir un
              <span className="text-red-500"> mejor futuro</span>
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full my-8"></div>

            <p className="text-gray-200 text-lg leading-8">
              Diseñamos programas de formación adaptados a las
              necesidades de su organización, fortaleciendo las
              competencias de los colaboradores y promoviendo una
              cultura de seguridad, calidad y mejora continua.
            </p>

            <Link
              href="/contacto"
              className="inline-flex mt-10 bg-red-600 hover:bg-red-700 transition text-white font-semibold px-8 py-4 rounded-lg shadow-lg"
            >
              Solicitar Información
            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}