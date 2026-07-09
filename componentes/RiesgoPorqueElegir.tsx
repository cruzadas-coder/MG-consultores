import Image from "next/image";

const ventajas = [
  {
    titulo: "Cumplimiento Normativo",
    descripcion:
      "Implementamos procesos alineados con la legislación colombiana en materia de Riesgo Psicosocial y Seguridad y Salud en el Trabajo.",
    icono: "/icons/cumplimiento.png",
  },
  {
    titulo: "Bienestar Organizacional",
    descripcion:
      "Promovemos ambientes laborales saludables que fortalecen el compromiso y la satisfacción de los colaboradores.",
    icono: "/icons/salud.png",
  },
  {
    titulo: "Profesionales Especializados",
    descripcion:
      "Contamos con un equipo multidisciplinario con experiencia en evaluación, intervención y seguimiento del Riesgo Psicosocial.",
    icono: "/icons/equipo.png",
  },
  {
    titulo: "Mejora Continua",
    descripcion:
      "Acompañamos a la organización en la implementación de acciones preventivas y correctivas orientadas al bienestar laboral.",
    icono: "/icons/mejora-continua.png",
  },
];

export default function RiesgoPorqueElegir() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-[#0B2A5B]">
            ¿Por qué elegir a Martínez González Consultores?
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Nuestro compromiso es contribuir al bienestar de los trabajadores
            mediante soluciones integrales que permitan identificar,
            evaluar e intervenir los factores de riesgo psicosocial,
            fortaleciendo la productividad y el cumplimiento legal.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {ventajas.map((item, index) => (

            <div
              key={index}
              className="flex gap-6 bg-slate-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >

              <Image
                src={item.icono}
                alt={item.titulo}
                width={70}
                height={70}
              />

              <div>

                <h3 className="text-xl font-bold text-[#0B2A5B] mb-3">
                  {item.titulo}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.descripcion}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}