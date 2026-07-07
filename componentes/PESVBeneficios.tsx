import Image from "next/image";

const beneficios = [
  {
    titulo: "Cumplimiento Legal",
    descripcion:
      "Garantizamos el cumplimiento de la normativa vigente del Plan Estratégico de Seguridad Vial.",
    icono: "/icons/cumplimiento.png",
  },
  {
    titulo: "Reducción de Accidentes",
    descripcion:
      "Fortalecemos la prevención mediante estrategias que disminuyen la accidentalidad vial.",
    icono: "/icons/reduccion-accidentes.png",
  },
  {
    titulo: "Mayor Productividad",
    descripcion:
      "La movilidad segura reduce tiempos de inactividad y mejora el desempeño operativo.",
    icono: "/icons/productividad.png",
  },
  {
    titulo: "Mejor Imagen Corporativa",
    descripcion:
      "Una organización comprometida con la seguridad vial fortalece su reputación y confianza.",
    icono: "/icons/imagen-corporativa.png",
  },
];

export default function PESVBeneficios() {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.35em] text-red-600 font-semibold">
            BENEFICIOS
          </span>

          <h2 className="text-4xl font-bold text-[#0B2A5B] mt-4">

            Beneficios para su Organización

          </h2>

          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-5 mb-6"></div>

          <p className="text-gray-600 max-w-3xl mx-auto leading-8">

            Implementar un Plan Estratégico de Seguridad Vial fortalece la
            cultura preventiva y genera beneficios para la organización,
            sus colaboradores y la comunidad.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {beneficios.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="flex justify-center mb-6">

                <Image
                  src={item.icono}
                  alt={item.titulo}
                  width={80}
                  height={80}
                />

              </div>

              <h3 className="text-xl font-bold text-[#0B2A5B] mb-4">

                {item.titulo}

              </h3>

              <p className="text-gray-600 leading-7">

                {item.descripcion}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}