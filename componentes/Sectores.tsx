import Image from "next/image";

export default function Sectores() {
  const sectores = [
    { titulo:"Construcción", icono:"/icons/construccion.png", descripcion:"Acompañamos proyectos de construcción e infraestructura con seguridad y calidad."},
    { titulo:"Industria", icono:"/icons/industria.png", descripcion:"Mejoramos procesos industriales con sistemas de gestión eficientes."},
    { titulo:"Transporte", icono:"/icons/transporte.png", descripcion:"Impulsamos la seguridad vial y la eficiencia operativa."},
    { titulo:"Salud", icono:"/icons/salud.png", descripcion:"Implementamos sistemas para instituciones del sector salud."},
    { titulo:"Energía", icono:"/icons/energia.png", descripcion:"Asesoramos proyectos energéticos y de sostenibilidad."},
    { titulo:"Sector Público", icono:"/icons/sectorpublico.png", descripcion:"Apoyamos entidades públicas en el cumplimiento normativo."},
  ];

  const cifras = [
    {titulo:"+10 Años", texto:"de experiencia"},
    {titulo:"+200 Clientes", texto:"en diferentes sectores"},
    {titulo:"Compromiso", texto:"con la calidad y la seguridad"},
    {titulo:"Sostenibilidad", texto:"como eje de nuestro trabajo"},
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.35em] text-red-600 font-semibold">Sectores</p>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto my-5"></div>
          <h2 className="text-5xl font-bold text-slate-900">Trabajamos con organizaciones<br/>de diferentes sectores</h2>
          <p className="text-slate-600 text-lg mt-6 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales y personalizadas que se adaptan a las necesidades y desafíos de cada industria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {sectores.map((s,i)=>(
            <div key={i} className="group bg-white rounded-3xl border border-gray-100 shadow-lg p-7 hover:-translate-y-2 hover:shadow-2xl transition-all">
              <div className="flex gap-5">
                <Image src={s.icono} alt={s.titulo} width={80} height={80} className="group-hover:scale-110 transition-transform"/>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{s.titulo}</h3>
                  <p className="text-slate-600 mt-3 leading-7">{s.descripcion}</p>
                  <div className="mt-5 w-14 h-1 bg-red-600 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <Image src="/images/Sectores.png" alt="Sectores" width={1600} height={800} className="w-full object-cover"/>
          <div className="bg-[#0F223F] grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {cifras.map((c,i)=>(
              <div key={i} className="p-8 text-center">
                <h3 className="text-white text-3xl font-bold">{c.titulo}</h3>
                <p className="text-gray-300 mt-2">{c.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
