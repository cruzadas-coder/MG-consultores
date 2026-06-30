import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 gap-12">

        {/* Logo */}

        <div>

          <Image
            src="/logos/logo.png"
            alt="Martínez González Consultores"
            width={90}
            height={90}
            className="mb-6"
          />

          <h2 className="text-2xl font-bold">
            MARTÍNEZ GONZÁLEZ
          </h2>

          <p className="uppercase tracking-[0.35em] text-blue-400 text-sm">
            CONSULTORES
          </p>

          <p className="text-gray-300 mt-6 leading-7">
            Somos una firma especializada en consultoría integral,
            implementación de Sistemas de Gestión, Seguridad y Salud
            en el Trabajo, Calidad, Gestión Ambiental, Ingeniería,
            capacitación y cumplimiento legal para empresas de todos
            los sectores económicos.
          </p>

        </div>

        {/* Servicios */}

        <div>

          <h3 className="text-xl font-bold mb-6">
            Servicios
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>
              <Link href="/servicios/sgsst">SG-SST</Link>
            </li>

            <li>
              <Link href="/servicios/calidad">Calidad</Link>
            </li>

            <li>
              <Link href="/servicios/ambiental">Gestión Ambiental</Link>
            </li>

            <li>
              <Link href="/servicios/pesv">PESV</Link>
            </li>

            <li>
              <Link href="/servicios/riesgo-psicosocial">
                Riesgo Psicosocial
              </Link>
            </li>

            <li>
              <Link href="/servicios/capacitaciones">
                Capacitaciones
              </Link>
            </li>

          </ul>

        </div>

        {/* Empresa */}

        <div>

          <h3 className="text-xl font-bold mb-6">
            Empresa
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>
              <Link href="/">Inicio</Link>
            </li>

            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>

            <li>
              <Link href="/sectores">Sectores</Link>
            </li>

            <li>
              <Link href="/contacto">Contacto</Link>
            </li>

          </ul>

        </div>

        {/* Contacto */}

        <div>

          <h3 className="text-xl font-bold mb-6">
            Contacto
          </h3>

          <div className="space-y-4 text-gray-300">

            <p>
              📍 Calle 6 # 2B-45
              <br />
              Chía - Cundinamarca
              <br />
              Colombia
            </p>

            <a
              href="tel:+573143717690"
              className="block hover:text-white transition"
            >
              📞 +57 314 371 7690
            </a>

            <a
              href="mailto:gerencia@mgconsultoressas.com"
              className="block hover:text-white transition"
            >
              ✉ gerencia@mgconsultoressas.com
            </a>

            <a
              href="https://www.facebook.com/mgconsultoressas"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-blue-400 transition"
            >
              Facebook
            </a>

            <a
              href="https://www.facebook.com/messages/t/mgconsultoressas/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-blue-400 transition"
            >
              Messenger
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Martínez González Consultores SAS.
            Todos los derechos reservados.
          </p>

          <p>
            Diseñado y desarrollado por Sittcom - SAS.
          </p>

        </div>

      </div>

    </footer>
  );
}