"use client";

import Image from "next/image";
import Link from "next/link";

export default function CapacitacionesHero() {
  return (
    <section className="relative overflow-hidden">

      <Image
        src="/images/capacitaciones-hero-banner.png"
        alt="Capacitaciones Empresariales"
        width={1920}
        height={900}
        priority
        className="w-full h-auto"
      />

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

          <div className="max-w-xl">

            <span className="uppercase tracking-widest text-red-500 font-bold">
              CAPACITACIONES
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-5 leading-tight">
              Formación que transforma
              <br />
              y genera cultura
            </h1>

            <div className="w-24 h-1 bg-red-600 rounded-full my-8"></div>

            <p className="text-gray-200 text-lg leading-8">
              Diseñamos e impartimos capacitaciones prácticas y
              especializadas que fortalecen las competencias,
              promueven la prevención y mejoran el desempeño de
              su equipo.
            </p>

            <Link
              href="/contacto"
              className="inline-flex mt-10 bg-red-600 hover:bg-red-700 transition text-white font-semibold px-8 py-4 rounded-lg"
            >
              Conoce nuestras capacitaciones
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}