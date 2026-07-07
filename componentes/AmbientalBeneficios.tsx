import Image from "next/image";

const beneficios = [
  {
    titulo: "Cumplimiento Legal",
    descripcion:
      "Aseguramos el cumplimiento de la legislación ambiental vigente reduciendo riesgos legales.",
    icono: "/icons/cumplimiento.png",
  },
  {
    titulo: "Reducción de Impactos",
    descripcion:
      "Implementamos estrategias para disminuir los impactos ambientales y optimizar recursos.",
    icono: "/icons/reduccion-impactos.png",
  },
  {
    titulo: "Mejora Continua",
    descripcion:
      "Fortalecemos el desempeño ambiental mediante seguimiento e indicadores de gestión.",
    icono: "/icons/mejora-continua.png",
  },
  {
    titulo: "Desarrollo Sostenible",
    descripcion:
      "Promovemos un crecimiento responsable que genera valor para la organización y el medio ambiente.",
    icono: "/icons/ambiental.png",
  },
];

export default function AmbientalBeneficios() {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-[#0B2A5B]">
            Beneficios para su Organización
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {beneficios.map((beneficio, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <div className="flex justify-center mb-5">

                <Image
                  src={beneficio.icono}
                  alt={beneficio.titulo}
                  width={70}
                  height={70}
                />

              </div>

              <h3 className="text-xl font-bold text-[#0B2A5B] text-center mb-4">
                {beneficio.titulo}
              </h3>

              <p className="text-gray-600 text-center leading-7">
                {beneficio.descripcion}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}