import Image from "next/image";

export default function Calidad() {
  const servicios = [
    { icono: "/icons/iso9001.png", titulo: "Implementación ISO 9001", descripcion: "Diseñamos e implementamos Sistemas de Gestión de Calidad conforme a la norma ISO 9001:2015." },
    { icono: "/icons/auditoria-calidad.png", titulo: "Auditorías de Calidad", descripcion: "Evaluamos procesos para verificar el cumplimiento de requisitos y detectar oportunidades de mejora." },
    { icono: "/icons/control-calidad.png", titulo: "Control de Calidad", descripcion: "Fortalecemos el seguimiento y control de procesos para garantizar resultados consistentes." },
    { icono: "/icons/mejora-calidad.png", titulo: "Mejora Continua", descripcion: "Impulsamos la mejora continua y la eficiencia de la organización." }
  ];

  return (
    <section id="calidad" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
          <div>
            <span className="uppercase tracking-[0.35em] text-red-600 font-semibold">Nuestros Servicios</span>
            <div className="w-20 h-1 bg-red-600 rounded-full mt-3 mb-6"></div>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Calidad</h2>
            <h3 className="text-3xl font-semibold text-slate-800 mb-6">Sistemas de Gestión de Calidad</h3>
            <p className="text-slate-600 leading-8">Ayudamos a implementar y mantener Sistemas de Gestión de Calidad orientados a mejorar procesos, cumplir requisitos y fortalecer la competitividad.</p>
          </div>
          <Image src="/images/Calidad.png" alt="Calidad" width={900} height={650} className="w-full rounded-3xl shadow-2xl"/>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {servicios.map((item)=>(
            <div key={item.titulo} className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition-all">
              <Image src={item.icono} alt={item.titulo} width={95} height={95} className="mx-auto mb-6"/>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.titulo}</h3>
              <p className="text-slate-600 leading-7">{item.descripcion}</p>
              <div className="w-14 h-1 bg-red-600 rounded-full mx-auto mt-8"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
