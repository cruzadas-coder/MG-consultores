import Image from "next/image";

const servicios = [
  {
    titulo: "Sistema de Gestión Ambiental",
    subtitulo: "ISO 14001",
    descripcion:
      "Diseño e implementación de Sistemas de Gestión Ambiental bajo la norma ISO 14001.",
    icono: "/icons/ambiental.png",
  },
  {
    titulo: "Estudios y Licencias Ambientales",
    descripcion:
      "Elaboración de estudios de impacto y gestión de licencias ambientales.",
    icono: "/icons/estudios-licencias.png",
  },
  {
    titulo: "Gestión Integral de Residuos",
    descripcion:
      "Programas para reducción, reutilización y correcta disposición de residuos.",
    icono: "/icons/gestion-residuos.png",
  },
  {
    titulo: "Planes de Manejo Ambiental",
    descripcion:
      "Diseño e implementación de planes para prevenir y controlar impactos ambientales.",
    icono: "/icons/ambiental.png",
  },
  {
    titulo: "Auditorías y Cumplimiento",
    descripcion:
      "Evaluación del cumplimiento de requisitos ambientales y preparación para auditorías.",
    icono: "/icons/auditoria-calidad.png",
  },
  {
    titulo: "Planes de Emergencia Ambiental",
    descripcion:
      "Preparación y respuesta ante contingencias ambientales.",
    icono: "/icons/cumplimiento.png",
  },
];

export default function AmbientalServicios() {
  return (
    <section className="py-16 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-[#0B2A5B]">
            Nuestros Servicios Ambientales
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border border-slate-100"
            >

              <div className="flex items-start gap-5">

                <Image
                  src={servicio.icono}
                  alt={servicio.titulo}
                  width={70}
                  height={70}
                />

                <div>

                  <h3 className="text-xl font-bold text-[#0B2A5B]">

                    {servicio.titulo}

                    {servicio.subtitulo && (
                      <span className="block text-red-600 text-base mt-1">
                        {servicio.subtitulo}
                      </span>
                    )}

                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {servicio.descripcion}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}