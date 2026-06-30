import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Globe,
  MessageCircle,
} from "lucide-react";

export default function InformacionContacto() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-10">

        <div className="space-y-5">

          <div className="rounded-3xl bg-white shadow-xl border border-slate-200 p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dirección</h3>
                <p className="text-slate-600">Calle 6 # 2B-45<br/>Chía - Cundinamarca<br/>Colombia</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white shadow-xl border border-slate-200 p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Phone className="w-7 h-7 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Celular</h3>
                <a href="tel:+573143717690" className="text-slate-600 hover:text-blue-700">+57 314 371 7690</a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white shadow-xl border border-slate-200 p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Mail className="w-7 h-7 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Correo</h3>
                <a href="mailto:gerencia@mgconsultoressas.com" className="text-slate-600 hover:text-blue-700">gerencia@mgconsultoressas.com</a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white shadow-xl border border-slate-200 p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Clock3 className="w-7 h-7 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Horario</h3>
                <p className="text-slate-600">Lunes a Viernes<br/>8:00 a.m. - 5:30 p.m.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a href="https://www.facebook.com/mgconsultoressas" target="_blank" rel="noreferrer" className="rounded-2xl bg-blue-700 text-white p-6 flex items-center gap-3">
              <Globe className="w-6 h-6" />
              Facebook
            </a>

            <a href="https://www.facebook.com/messages/t/mgconsultoressas/" target="_blank" rel="noreferrer" className="rounded-2xl bg-slate-800 text-white p-6 flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              Messenger
            </a>
          </div>

        </div>

        <div className="rounded-3xl bg-white shadow-2xl border border-slate-200 p-10">
          <h2 className="text-3xl font-bold mb-8">Envíenos su mensaje</h2>
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input className="border rounded-xl p-4" placeholder="Nombre completo"/>
              <input className="border rounded-xl p-4" placeholder="Empresa"/>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <input type="email" className="border rounded-xl p-4" placeholder="Correo electrónico"/>
              <input className="border rounded-xl p-4" placeholder="Celular"/>
            </div>
            <select className="border rounded-xl p-4 w-full">
              <option>Seleccione un servicio</option>
              <option>SG-SST</option>
              <option>Sistema de Gestión de Calidad</option>
              <option>Gestión Ambiental</option>
              <option>PESV</option>
            </select>
            <textarea rows={6} className="border rounded-xl p-4 w-full" placeholder="Cuéntenos cómo podemos ayudarle..." />
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl">SOLICITAR ASESORÍA</button>
          </form>
        </div>

      </div>
    </section>
  );
}
