import Image from "next/image";

const ventajas = [
  "Experiencia en proyectos públicos y privados.",
  "Profesionales altamente calificados.",
  "Cumplimiento de la normatividad ambiental vigente.",
  "Soluciones sostenibles adaptadas a cada organización.",
  "Acompañamiento técnico durante todo el proceso.",
];

export default function AmbientalPorqueElegir() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Imagen */}

          <div>

            <Image
              src="/images/gestion-ambiental-manos-planta.png"
              alt="Gestión Ambiental"
              width={700}
              height={700}
              className="rounded-3xl shadow-xl w-full h-auto"
            />

          </div>

          {/* Contenido */}

          <div>

            <h2 className="text-4xl font-bold text-[#0B2A5B] mb-6">
              ¿Por qué elegir MG Consultores?
            </h2>

            <p className="text-gray-600 leading-8 mb-8">

              Acompañamos a las organizaciones en la implementación de
              estrategias ambientales sostenibles, garantizando el
              cumplimiento legal y fortaleciendo la competitividad de
              nuestros clientes mediante soluciones responsables con el
              medio ambiente.

            </p>

            <div className="space-y-5">

              {ventajas.map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4"
                >

                  <div className="w-8 h-8 rounded-full bg-[#0B2A5B] text-white flex items-center justify-center font-bold">

                    ✓

                  </div>

                  <p className="text-gray-700">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}