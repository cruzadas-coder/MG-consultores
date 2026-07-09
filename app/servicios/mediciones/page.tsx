import BarraNavegacion from "@/componentes/BarraNavegacion";
import Footer from "@/componentes/Footer";

import MedicionHero from "@/componentes/MedicionHero";
import MedicionServicios from "@/componentes/MedicionServicios";
import MedicionBeneficios from "@/componentes/MedicionBeneficios";
import MedicionCTA from "@/componentes/MedicionCTA";

export default function MedicionesPage() {
  return (
    <>
      <BarraNavegacion />

      <main className="bg-white">

        <MedicionHero />

        <MedicionServicios />

        <MedicionBeneficios />

        <MedicionCTA />

      </main>

      <Footer />
    </>
  );
}