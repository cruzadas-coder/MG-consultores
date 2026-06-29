import Image from "next/image";

export default function SGSST() {
  const servicios=[
    {icono:"/icons/implementacion.png",titulo:"Implementación SG-SST",descripcion:"Diseñamos, implementamos y fortalecemos Sistemas de Gestión de Seguridad y Salud en el Trabajo conforme a la normativa vigente."},
    {icono:"/icons/ruc.png",titulo:"Registro RUC y Planes HSE",descripcion:"Apoyo en auditorías RUC y elaboración de Planes HSE para diferentes sectores."},
    {icono:"/icons/psicosocial.png",titulo:"Riesgo Psicosocial",descripcion:"Diagnóstico, clima laboral, pausas activas y programas de prevención."},
    {icono:"/icons/vigilancia.png",titulo:"Prevención y Vigilancia",descripcion:"Programas de vigilancia epidemiológica y prevención de enfermedades laborales."}
  ];

  return (
    <section id="sgsst" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-red-600 font-semibold">Seguridad y Salud en el Trabajo</p>
          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto my-5"></div>
          <h2 className="text-5xl font-bold text-slate-900">Protegemos el bienestar de su organización</h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Implementamos soluciones integrales para fortalecer la cultura preventiva y el cumplimiento normativo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Image src="/images/SGSST.png" alt="SGSST" width={900} height={700} className="rounded-3xl shadow-2xl w-full object-cover"/>

          <div className="grid gap-6">
            {servicios.map((item,index)=>(
              <div key={index} className="flex gap-5 p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all">
                <Image src={item.icono} alt={item.titulo} width={72} height={72}/>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{item.titulo}</h3>
                  <p className="text-slate-600 mt-3 leading-7">{item.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
