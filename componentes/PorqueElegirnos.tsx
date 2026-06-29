import Image from "next/image";

export default function PorqueElegirnos() {
  const ventajas=[
    {icono:"/icons/equipo.png",titulo:"Equipo multidisciplinario",descripcion:"Contamos con profesionales especializados en diversas áreas para ofrecer soluciones completas y efectivas."},
    {icono:"/icons/cumplimiento.png",titulo:"Cumplimiento normativo",descripcion:"Garantizamos el cumplimiento de la legislación vigente aplicable a cada sector."},
    {icono:"/icons/soluciones.png",titulo:"Soluciones a la medida",descripcion:"Diseñamos estrategias adaptadas a las necesidades específicas de cada organización."},
    {icono:"/icons/acompanamiento.png",titulo:"Acompañamiento permanente",descripcion:"Brindamos soporte continuo para impulsar la mejora permanente de nuestros clientes."}
  ];
  const indicadores=[
    {icono:"/icons/compromiso.png",titulo:"100%",texto:"Compromiso con la calidad y la seguridad"},
    {icono:"/icons/24-7.png",titulo:"24/7",texto:"Acompañamiento y soporte continuo"},
    {icono:"/icons/iso.png",titulo:"+10 Años",texto:"Experiencia en sistemas de gestión"},
    {icono:"/icons/mejora-continua.png",titulo:"Mejora continua",texto:"Impulsamos el crecimiento de nuestros clientes"}
  ];
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.3em] text-red-600 font-semibold">¿Por qué elegirnos?</p>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto my-5"></div>
          <h2 className="text-5xl font-bold text-slate-900">Más que consultores, somos aliados estratégicos</h2>
        </div>
        <div className="mb-12">
          <Image src="/images/PorqueElegirnos.png" alt="Porque Elegirnos" width={1600} height={700} className="rounded-3xl shadow-2xl w-full object-cover" priority/>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {ventajas.map((v,i)=>(
            <div key={i} className="group bg-white rounded-3xl border border-gray-100 shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all">
              <Image src={v.icono} alt={v.titulo} width={80} height={80} className="mx-auto mb-6 group-hover:scale-110 transition-transform"/>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{v.titulo}</h3>
              <p className="text-slate-600 leading-7">{v.descripcion}</p>
              <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>
            </div>
          ))}
        </div>
        <div className="bg-[#0F223F] rounded-3xl shadow-xl grid md:grid-cols-2 lg:grid-cols-4 overflow-hidden">
          {indicadores.map((it,i)=>(
            <div key={i} className="p-8 flex items-center gap-5 border-b lg:border-b-0 lg:border-r last:border-r-0 border-white/10">
              <Image src={it.icono} alt={it.titulo} width={70} height={70}/>
              <div>
                <h4 className="text-white text-3xl font-bold">{it.titulo}</h4>
                <p className="text-gray-300 mt-2">{it.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
