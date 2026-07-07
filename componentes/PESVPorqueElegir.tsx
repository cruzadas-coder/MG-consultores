import Image from "next/image";

const ventajas = [
  "Especialistas en implementación del Plan Estratégico de Seguridad Vial.",
  "Cumplimiento de la normatividad vigente aplicable al PESV.",
  "Profesionales con experiencia en diferentes sectores económicos.",
  "Acompañamiento durante auditorías y procesos de verificación.",
  "Seguimiento mediante indicadores para garantizar la mejora continua.",
  "Soluciones personalizadas de acuerdo con la operación de cada organización.",
];

export default function PESVPorqueElegir() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Imagen */}

          <div>

            <Image
              src="/images/pesv-conductor.png"
              alt="Plan Estratégico de Seguridad Vial"
              width={700}
              height={520}
              className="rounded-3xl shadow-2xl"
            />

          </div>

          {/* Contenido */}

          <div>

            <span className="uppercase tracking-[0.35em] text-red-600 font-semibold">
              ¿POR QUÉ ELEGIRNOS?
            </span>

            <h2 className="text-4xl font-bold text-[#0B2A5B] mt-4">

              MG Consultores fortalece la seguridad vial de su organización

            </h2>

            <div className="w-24 h-1 bg-red-600 mt-6 rounded-full mb-8"></div>

            <p className="text-gray-600 leading-8 mb-10">

              Implementamos soluciones integrales que ayudan a prevenir
              accidentes, proteger la vida de los colaboradores y cumplir
              con las obligaciones legales relacionadas con la seguridad vial.

            </p>

            <div className="space-y-5">

              {ventajas.map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4"
                >

                  <Image
                    src="/icons/seguridad-vial.png"
                    alt=""
                    width={28}
                    height={28}
                  />

                  <p className="text-gray-700 leading-7">

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