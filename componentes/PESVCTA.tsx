import Image from "next/image";
import Link from "next/link";

export default function PESVCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Fondo */}

      <div className="absolute inset-0">

        <Image
          src="/images/cta-pesv-fondo.png"
          alt="CTA PESV"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#0B2A5B]/80"></div>

      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Texto */}

          <div>

            <span className="uppercase tracking-[0.35em] text-red-400 font-semibold">

              CONTACTO

            </span>

            <h2 className="text-5xl font-bold text-white mt-4 mb-6">

              Proteja la vida de sus colaboradores con un PESV efectivo

            </h2>

            <p className="text-blue-100 text-xl leading-9 mb-10">

              Nuestro equipo de especialistas está preparado para diseñar,
              implementar y fortalecer el Plan Estratégico de Seguridad Vial
              de su organización conforme a la normatividad vigente.

            </p>

            <Link
              href="/contacto"
              className="inline-block bg-white text-[#0B2A5B] px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-[#D62828] hover:text-white transition-all duration-300"
            >
              Solicitar Asesoría
            </Link>

          </div>

          {/* Icono */}

          <div className="flex justify-center">

            <Image
              src="/icons/cta-escudo.png"
              alt="Seguridad Vial"
              width={260}
              height={260}
            />

          </div>

        </div>

      </div>

    </section>
  );
}