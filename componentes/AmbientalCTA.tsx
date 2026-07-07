import Link from "next/link";

export default function AmbientalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0B2A5B] via-[#123C78] to-[#0B2A5B]">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-white mb-6">
          Construyamos juntos una organización más sostenible
        </h2>

        <p className="text-blue-100 text-xl leading-8 mb-10">
          Nuestro equipo de profesionales está preparado para acompañar a
          su organización en el diseño, implementación y fortalecimiento
          de estrategias ambientales que impulsen el cumplimiento
          normativo, la sostenibilidad y la mejora continua.
        </p>

        <Link
          href="/contacto"
          className="inline-block bg-white text-[#0B2A5B] px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-[#D62828] hover:text-white transition-all duration-300"
        >
          Solicitar Asesoría
        </Link>

      </div>

    </section>
  );
}