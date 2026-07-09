"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SgsstCTA() {
  return (
    <section className="relative overflow-hidden">

      <Image
        src="/images/cta-sgsst-banner.png"
        alt="CTA Sistema de Gestión de Seguridad y Salud en el Trabajo"
        width={1920}
        height={600}
        className="w-full h-auto"
      />

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >

            <span className="text-red-500 uppercase font-bold tracking-widest">
              ¿Necesita implementar o actualizar su SG-SST?
            </span>

            <h2 className="text-5xl font-bold text-white leading-tight mt-4">
              Estamos listos para ayudarle
            </h2>

            <p className="text-gray-200 text-lg leading-8 mt-6">
              Nuestro equipo de especialistas acompaña a su organización
              durante todas las etapas del Sistema de Gestión de Seguridad
              y Salud en el Trabajo, garantizando cumplimiento normativo,
              prevención y mejora continua.
            </p>

            <Link
              href="/contacto"
              className="inline-flex items-center mt-10 bg-red-600 hover:bg-red-700 transition text-white font-semibold px-8 py-4 rounded-lg shadow-lg"
            >
              Solicitar Diagnóstico
            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}