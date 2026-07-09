"use client";

import Image from "next/image";
import Link from "next/link";

export default function MedicionHero() {
  return (
    <section className="relative overflow-hidden">

      <Image
        src="/images/MedicionHeroBanner.png"
        alt="Mediciones Ocupacionales y Ambientales"
        width={1920}
        height={850}
        priority
        className="w-full h-auto"
      />

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

          <div className="max-w-xl">

            <span className="uppercase tracking-widest text-red-500 font-bold">
              MEDICIONES
            </span>

            <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-white leading-tight">
              Datos precisos,
              <br />
              decisiones seguras,
              <br />
              <span className="text-red-500">
                entornos saludables
              </span>
            </h1>

            <div className="w-24 h-1 bg-red-600 rounded-full my-8"></div>

            <p className="text-gray-200 text-lg leading-8">
              Realizamos mediciones ambientales y ocupacionales con
              equipos certificados y personal especializado,
              garantizando el cumplimiento normativo y la protección
              de sus trabajadores.
            </p>

            <Link
              href="/contacto"
              className="inline-flex mt-10 bg-red-600 hover:bg-red-700 transition text-white font-semibold px-8 py-4 rounded-lg"
            >
              Solicitar mediciones
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}