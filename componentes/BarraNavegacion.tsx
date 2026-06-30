import Image from "next/image";
import Link from "next/link";

export default function BarraNavegacion() {
  return (
<header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0B2A5B] via-[#123C78] to-[#0B2A5B] shadow-2xl border-b border-blue-900/40 z-50">

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

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

        </Link>

        {/* Menú */}

        <ul className="hidden lg:flex items-center gap-8 text-gray-300">

          <li>
            <Link
              href="/"
              className="hover:text-white transition"
            >
              Inicio
            </Link>
          </li>

         <li>
  <Link
    href="/nosotros"
    className="hover:text-white transition"
  >
    Nosotros
  </Link>
</li>

<li>
  <Link
    href="/clientes"
    className="hover:text-white transition"
  >
    Clientes
  </Link>
</li>

{/* Servicios */}


  
          {/* Servicios */}

          <li className="relative group">

            <button className="hover:text-white transition">
              Servicios ▾
            </button>

            <div className="absolute left-0 mt-3 w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <Link href="/servicios" className="block px-5 py-3 hover:bg-slate-100">
                Todos los Servicios
              </Link>

              <Link href="/servicios/sgsst" className="block px-5 py-3 hover:bg-slate-100">
                SG-SST
              </Link>

              <Link href="/servicios/calidad" className="block px-5 py-3 hover:bg-slate-100">
                Calidad
              </Link>

              <Link href="/servicios/ambiental" className="block px-5 py-3 hover:bg-slate-100">
                Gestión Ambiental
              </Link>

              <Link href="/servicios/pesv" className="block px-5 py-3 hover:bg-slate-100">
                PESV
              </Link>

              <Link href="/servicios/riesgo-psicosocial" className="block px-5 py-3 hover:bg-slate-100">
                Riesgo Psicosocial
              </Link>

              <Link href="/servicios/capacitaciones" className="block px-5 py-3 hover:bg-slate-100">
                Capacitaciones
              </Link>

              <Link href="/servicios/mediciones" className="block px-5 py-3 hover:bg-slate-100">
                Mediciones
              </Link>

              <Link href="/servicios/auditorias" className="block px-5 py-3 hover:bg-slate-100">
                Auditorías
              </Link>

              <Link href="/servicios/ingenieria" className="block px-5 py-3 hover:bg-slate-100">
                Ingeniería
              </Link>

            </div>

          </li>

          <li>
            <Link
              href="/sectores"
              className="hover:text-white transition"
            >
              Sectores
            </Link>
          </li>

        </ul>

        {/* Botón */}

        <Link
          href="/contacto"
          className="hidden md:block bg-white text-slate-900 border-2 border-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-slate-900 hover:text-white transition-all duration-300"
        >
          Contáctenos
        </Link>

      </nav>

    </header>
  );
}