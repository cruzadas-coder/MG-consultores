import Image from "next/image";

const servicios = [
  {
    titulo: "Diagnóstico Psicosocial",
    descripcion:
      "Evaluamos los factores de riesgo psicosocial presentes en la organización para establecer una línea base que facilite la toma de decisiones y el cumplimiento de la normatividad vigente.",
    icono: "/icons/diagnostico.png",
  },
  {
    titulo: "Aplicación de Baterías",
    descripcion:
      "Aplicamos los instrumentos definidos por el Ministerio del Trabajo garantizando confidencialidad, objetividad y rigurosidad técnica durante todo el proceso.",
    icono: "/icons/evaluacion.png",
  },
  {
    titulo: "Interpretación de Resultados",
    descripcion:
      "Analizamos la información obtenida y elaboramos informes técnicos con conclusiones, hallazgos y recomendaciones para la organización.",
    icono: "/icons/capacitacion.png",
  },
  {
    titulo: "Planes de Intervención",
    descripcion:
      "Diseñamos estrategias orientadas a disminuir los factores de riesgo psicosocial y fortalecer el bienestar integral de los colaboradores.",
    icono: "/icons/implementacion.png",
  },
  {
    titulo: "Capacitaciones",
    descripcion:
      "Desarrollamos programas de formación enfocados en salud mental, liderazgo, comunicación, manejo del estrés y fortalecimiento del clima organizacional.",
    icono: "/icons/capacitacion.png",
  },
  {
    titulo: "Seguimiento y Asesoría",
    descripcion:
      "Realizamos acompañamiento permanente para verificar la implementación de las acciones propuestas y promover la mejora continua.",
    icono: "/icons/acompanamiento.png",
  },
];

export default function RiesgoServicios() {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-[#0B2A5B]">
            Nuestros Servicios
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Desarrollamos soluciones integrales para identificar,
            evaluar, intervenir y hacer seguimiento a los factores de
            riesgo psicosocial, fortaleciendo el bienestar laboral y el
            cumplimiento de la normatividad colombiana.
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