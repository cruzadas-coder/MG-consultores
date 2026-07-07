import Image from "next/image";

const servicios = [
  {
    titulo: "Diagnóstico Inicial",
    descripcion:
      "Evaluamos el estado actual de la organización para identificar oportunidades de mejora en materia de seguridad vial.",
    icono: "/icons/auditoria.png",
  },
  {
    titulo: "Auditoría Interna PESV",
    descripcion:
      "Verificamos el cumplimiento de los requisitos establecidos en el Plan Estratégico de Seguridad Vial.",
    icono: "/icons/pesv.png",
  },
  {
    titulo: "Actualización del PESV",
    descripcion:
      "Diseñamos y actualizamos el PESV conforme a la normatividad vigente y las necesidades de la organización.",
    icono: "/icons/implementacion.png",
  },
  {
    titulo: "Seguimiento de Indicadores",
    descripcion:
      "Monitoreamos los indicadores del plan para garantizar la mejora continua y la toma de decisiones.",
    icono: "/icons/mejora-continua.png",
  },
  {
    titulo: "Capacitaciones",
    descripcion:
      "Fortalecemos la cultura de seguridad vial mediante programas de formación dirigidos a conductores y colaboradores.",
    icono: "/icons/capacitacion.png",
  },
  {
    titulo: "Acompañamiento Técnico",
    descripcion:
      "Brindamos asesoría permanente durante la implementación y las auditorías del PESV.",
    icono: "/icons/acompanamiento.png",
  },
];

export default function PESVServicios() {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-[#0B2A5B]">
            Nuestros Servicios
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Desarrollamos soluciones integrales para implementar,
            fortalecer y mantener el Plan Estratégico de Seguridad Vial,
            promoviendo la prevención de accidentes y el cumplimiento
            normativo.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {servicios.map((servicio, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="flex items-start gap-5">

                <Image
                  src={servicio.icono}
                  alt={servicio.titulo}
                  width={70}
                  height={70}
                />

                <div>

                  <h3 className="text-xl font-bold text-[#0B2A5B] mb-3">

                    {servicio.titulo}

                  </h3>

                  <p className="text-gray-600 leading-7">

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