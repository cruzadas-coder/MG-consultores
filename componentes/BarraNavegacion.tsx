import Image from "next/image";

export default function BarraNavegacion() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900 shadow-lg z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}

        <div className="flex items-center gap-3">
          <Image
            src="/logos/logo.png"
            alt="Martínez González Consultores"
            width={55}
            height={55}
            priority
          />

          <div className="hidden md:block">
            <h1 className="text-white font-bold text-lg">
              MARTÍNEZ GONZÁLEZ
            </h1>

            <p className="text-blue-400 text-xs uppercase tracking-[0.35em]">
              Consultores
            </p>
          </div>
        </div>

        {/* Menú */}

        <ul className="hidden lg:flex items-center gap-8 text-gray-300">

          <li>
            <a
              href="#inicio"
              className="hover:text-white transition-all duration-300"
            >
              Inicio
            </a>
          </li>

          <li>
            <a
              href="#nosotros"
              className="hover:text-white transition-all duration-300"
            >
              Nosotros
            </a>
          </li>

          <li>
            <a
              href="#servicios"
              className="hover:text-white transition-all duration-300"
            >
              Servicios
            </a>
          </li>

          <li>
            <a
              href="#sectores"
              className="hover:text-white transition-all duration-300"
            >
              Sectores
            </a>
          </li>

          <li>
            <a
              href="#porque-elegirnos"
              className="hover:text-white transition-all duration-300"
            >
              ¿Por qué elegirnos?
            </a>
          </li>

        </ul>

        {/* Botón */}

        <a
          href="#contacto"
          className="hidden md:block bg-white text-slate-900 border-2 border-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-slate-900 hover:text-white transition-all duration-300"
        >
          Contáctenos
        </a>

      </nav>
    </header>
  );
}