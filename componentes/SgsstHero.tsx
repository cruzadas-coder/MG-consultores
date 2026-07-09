"use client";

import Image from "next/image";
import Link from "next/link";

export default function SgsstHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src="/images/sgsst-hero-banner.png"
        alt="Sistema de Gestión de Seguridad y Salud en el Trabajo"
        width={1920}
        height={850}
        priority
        className="w-full h-auto"
      />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
          <div className="max-w-xl">

            <span className="text-red-500 font-bold uppercase tracking-widest">
              SG-SST
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-white">
              Sistema de Gestión de Seguridad y Salud en el Trabajo
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Protegemos la vida, la salud y el bienestar de los trabajadores
              mediante la implementación del SG-SST conforme a la normativa
              colombiana.
            </p>

            <Link
              href="/contacto"
              className="inline-flex mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition"
            >
              Solicitar Asesoría
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}