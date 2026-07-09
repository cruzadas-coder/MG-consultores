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

        {/* Información */}

        <div className="space-y-5">

          <div className="rounded-3xl bg-white shadow-xl border border-slate-200 p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-blue-700" />
              </div>

              <div>
                <h3 className="text-xl font-bold">Dirección</h3>
                <p className="text-slate-600">
                  Calle 6 # 2B-45
                  <br />
                  Chía - Cundinamarca
                  <br />
                  Colombia
                </p>
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

                <a
                  href="tel:+573143717690"
                  className="text-slate-600 hover:text-blue-700"
                >
                  +57 314 371 7690
                </a>
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

                <a
                  href="mailto:gerencia@mgconsultoressas.com"
                  className="text-slate-600 hover:text-blue-700"
                >
                  gerencia@mgconsultoressas.com
                </a>
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

                <p className="text-slate-600">
                  Lunes a Viernes
                  <br />
                  8:00 a.m. - 5:30 p.m.
                </p>
              </div>
            </div>
          </div>

          {/* Redes */}

          <div className="grid md:grid-cols-3 gap-4">

            <a
              href="https://www.facebook.com/mgconsultoressas"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-blue-700 hover:bg-blue-800 transition text-white p-6 flex items-center justify-center gap-3"
            >
              <Globe className="w-6 h-6" />
              Facebook
            </a>

            <a
              href="https://www.facebook.com/messages/t/mgconsultoressas/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-slate-800 hover:bg-slate-900 transition text-white p-6 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Messenger
            </a>

            <a
              href="https://wa.me/573143717690?text=Hola,%20quiero%20información%20sobre%20los%20servicios%20de%20Martínez%20González%20Consultores."
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] transition text-white p-6 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>

          </div>

        </div>

        {/* Formulario */}

        <div
          id="formulario-contacto"
          className="rounded-3xl bg-white shadow-2xl border border-slate-200 p-10"
        >

          <h2 className="text-3xl font-bold mb-8">
            Envíenos su mensaje
          </h2>

          <form className="space-y-5">

            <div className="grid md:grid-cols-2 gap-5">

              <input
                className="border rounded-xl p-4"
                placeholder="Nombre completo"
              />

              <input
                className="border rounded-xl p-4"
                placeholder="Empresa"
              />

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="email"
                className="border rounded-xl p-4"
                placeholder="Correo electrónico"
              />

              <input
                className="border rounded-xl p-4"
                placeholder="Celular"
              />

            </div>

            <select className="border rounded-xl p-4 w-full">

              <option>Seleccione un servicio</option>

              <option>SG-SST</option>
              <option>Sistema de Gestión de Calidad</option>
              <option>Gestión Ambiental</option>
              <option>PESV</option>
              <option>Riesgo Psicosocial</option>
              <option>Capacitaciones</option>
              <option>Mediciones</option>
              <option>Auditorías</option>
              <option>Ingeniería</option>
              <option>Otro servicio</option>

            </select>

            <textarea
              rows={6}
              className="border rounded-xl p-4 w-full"
              placeholder="Cuéntenos cómo podemos ayudarle..."
            />

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition"
            >
              SOLICITAR ASESORÍA
            </button>

            <a
              href="https://wa.me/573143717690?text=Hola,%20quiero%20recibir%20asesoría%20de%20Martínez%20González%20Consultores."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] transition text-white font-bold py-4 rounded-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Escribir por WhatsApp
            </a>

          </form>

        </div>

      </div>
    </section>
  );
}