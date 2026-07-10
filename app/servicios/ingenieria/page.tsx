import BarraNavegacion from "@/componentes/BarraNavegacion";
import Footer from "@/componentes/Footer";
import Link from "next/link";
import { Wrench, Clock3 } from "lucide-react";

export default function Page() {
  return (
    <>
      <BarraNavegacion />

      <main className="min-h-[75vh] flex items-center justify-center bg-slate-50 px-6">

        <div className="max-w-2xl text-center">

          <div className="flex justify-center mb-8">
            <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center">
              <Wrench className="w-14 h-14 text-blue-700" />
            </div>
          </div>

          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Página en construcción
          </h1>

          <p className="text-xl text-slate-600 leading-9">
            Estamos finalizando el contenido de nuestro servicio de
            <strong> Ingeniería</strong>.
          </p>

          <p className="mt-4 text-lg text-slate-600 leading-8">
            Muy pronto encontrará toda la información relacionada con
            nuestros servicios de diseño, interventoría, infraestructura,
            ingeniería aplicada y acompañamiento técnico.
          </p>

          <div className="flex items-center justify-center gap-3 mt-10 text-blue-700 font-semibold">

            <Clock3 className="w-6 h-6" />

            Próximamente disponible

          </div>

          <Link
            href="/contacto"
            className="inline-block mt-12 bg-red-600 hover:bg-red-700 transition text-white px-10 py-4 rounded-xl font-semibold shadow-lg"
          >
            Solicitar información
          </Link>

        </div>

      </main>

      <Footer />
    </>
  );
}