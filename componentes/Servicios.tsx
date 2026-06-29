import Image from "next/image";

export default function Servicios() {
  const servicios = [
    {
      titulo: "Gestión de Calidad",
      descripcion:
        "Implementamos y mejoramos Sistemas de Gestión de Calidad bajo la norma ISO 9001.",
      icono: "/icons/calidad.png",
    },
    {
      titulo: "Seguridad y Salud en el Trabajo",
      descripcion:
        "Diseñamos e implementamos SG-SST para proteger a las personas y fortalecer la cultura de prevención.",
      icono: "/icons/sst.png",
    },
    {
      titulo: "Gestión Ambiental",
      descripcion:
        "Asesoramos la implementación de sistemas ambientales y el cumplimiento de la normativa vigente.",
      icono: "/icons/ambiental.png",
    },
    {
      titulo: "Plan Estratégico de Seguridad Vial",
      descripcion:
        "Desarrollamos e implementamos el PESV para fortalecer la seguridad vial.",
      icono: "/icons/pesv.png",
    },
    {
      titulo: "Auditorías Internas",
      descripcion:
        "Evaluamos procesos para impulsar la mejora continua.",
      icono: "/icons/auditoria.png",
    },
    {
      titulo: "Capacitación Empresarial",
      descripcion:
        "Formamos equipos para fortalecer competencias y cumplimiento.",
      icono: "/icons/capacitacion.png",
    },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        <div>
          <p className="text-red-600 uppercase tracking-[0.3em] font-semibold">
            Nuestros Servicios
          </p>

          <div className="w-20 h-1 bg-red-600 rounded-full mt-5 mb-8"></div>

          <h2 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
            Soluciones integrales para cada necesidad empresarial
          </h2>

          <p className="text-slate-600 text-lg leading-8 mb-10">
            Acompañamos a las organizaciones en el diseño, implementación y mejora
            continua de sus sistemas de gestión.
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-gray-100 shadow-lg p-9 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={servicio.icono}
                  alt={servicio.titulo}
                  width={80}
                  height={80}
                  className="mb-6 transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="text-xl font-bold text-slate-900 mb-5 leading-8">
                  {servicio.titulo}
                </h3>

                <p className="text-slate-600 leading-8 text-[16px]">
                  {servicio.descripcion}
                </p>

                <div className="mt-8 w-0 h-1 bg-red-600 rounded-full transition-all duration-300 group-hover:w-20"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky top-32">
          <Image
            src="/images/Servicios.png"
            alt="Servicios"
            width={700}
            height={900}
            priority
            className="rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.20)] w-full object-cover"
          />

          <div className="mt-10 bg-white rounded-3xl border border-gray-100 shadow-xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                En Martínez González Consultores
              </h3>

              <p className="text-slate-700">
                Convertimos los retos en oportunidades de crecimiento para su empresa.
              </p>
            </div>

            <button className="bg-red-600 hover:bg-red-700 hover:scale-105 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition-all duration-300">
              Conozca más
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
