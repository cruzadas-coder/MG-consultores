"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MedicionCTA() {
  return (
    <section className="relative overflow-hidden">

      <Image
        src="/images/MedicionCTABanner.png"
        alt="Solicite sus mediciones"
        width={1920}
        height={650}
        className="w-full h-auto"
      />

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >

            <span className="uppercase tracking-widest text-red-500 font-bold">
              MEDICIONES OCUPACIONALES
            </span>

            <h2 className="text-5xl font-bold text-white leading-tight mt-5">
              Medimos hoy,
              <br />
              construimos
              <span className="text-red-500">
                {" "}entornos más seguros
              </span>
              <br />
              mañana.
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full my-8"></div>

            <p className="text-gray-200 text-lg leading-8">
              Confíe en nuestro equipo para realizar mediciones
              ambientales y ocupacionales con equipos certificados,
              informes técnicos confiables y acompañamiento
              especializado.
            </p>

            <Link
              href="/contacto"
              className="inline-flex mt-10 bg-red-600 hover:bg-red-700 transition text-white font-semibold px-8 py-4 rounded-lg shadow-lg"
            >
              Solicitar medición
            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}