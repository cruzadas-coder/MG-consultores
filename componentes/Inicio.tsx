import Image from "next/image";

export default function Inicio() {
  return (
   <section
  id="inicio"
  className="min-h-screen bg-white flex flex-col items-center justify-start px-6 pt-32 pb-16"
>

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

      <p className="mt-8 text-lg sm:text-xl md:text-2xl text-center text-slate-700 max-w-4xl">
        Consultoría Integral en Sistemas de Gestión
      </p>

      <p className="mt-4 text-base sm:text-lg text-center text-slate-500 max-w-3xl leading-8">
        Calidad • Seguridad y Salud en el Trabajo • Gestión Ambiental •
        Seguridad Vial • Ingeniería
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md">

        <button className="w-full bg-slate-900 hover:bg-slate-400 text-white py-4 rounded-xl font-semibold shadow-lg transition-all duration-300">
          Solicitar Asesoría
        </button>

        <button className="w-full bg-slate-900 hover:bg-slate-400 text-white py-4 rounded-xl font-semibold shadow-lg transition-all duration-300">
          Conocer Servicios
        </button>

      </div>

    </section>
  );
}