import Link from "next/link";
import Image from "next/image";

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-32 pb-16 overflow-hidden"
    >

      {/* Imagen de fondo */}

      <Image
        src="/images/inicio-fondo.webp"
        alt="Martínez González Consultores"
        fill
        priority
        className="object-cover -z-20"
      />

      {/* Degradado azul */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A5B]/45 via-white/25 to-[#0B2A5B]/45 -z-10"></div>

      {/* Contenido */}

      <div className="relative z-10 flex flex-col items-center">

        <Image
          src="/logos/logo.png"
          alt="Martínez González Consultores"
          width={200}
          height={200}
          priority
          className="mb-4 md:mb-6 md:w-[260px] md:h-[260px]"
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 text-center leading-tight">
          MARTÍNEZ
          <br />
          GONZÁLEZ
        </h1>

        <h2 className="mt-3 text-lg sm:text-xl md:text-2xl uppercase tracking-[0.4em] text-blue-700 font-light text-center">
          CONSULTORES
        </h2>

        <div className="w-24 h-1 bg-red-600 rounded-full mt-6"></div>

        <p className="mt-8 text-lg sm:text-xl md:text-2xl text-center text-slate-800 max-w-4xl">
          Consultoría Integral en Sistemas de Gestión
        </p>

        <p className="mt-4 text-base sm:text-lg text-center text-slate-700 max-w-3xl leading-8">
          Calidad • Seguridad y Salud en el Trabajo • Gestión Ambiental •
          Seguridad Vial • Ingeniería
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md">

         <Link
         href="/contacto"
        className="w-full bg-slate-900 hover:bg-blue-900 text-white py-4 rounded-xl font-semibold shadow-xl transition-all duration-300 text-center"
          >
        Solicitar Asesoría
        </Link>
        <Link
           href="/servicios"
          className="w-full bg-slate-900 hover:bg-blue-900 text-white py-4 rounded-xl font-semibold shadow-xl transition-all duration-300 text-center"
          >
          Conocer Servicios
        </Link>

        </div>

      </div>

    </section>
  );
}