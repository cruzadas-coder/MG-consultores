import BarraNavegacion from "@/componentes/BarraNavegacion";
import Footer from "@/componentes/Footer";

import SgsstHero from "@/componentes/SgsstHero";
import SgsstServicios from "@/componentes/SgsstServicios";
import SgsstBeneficios from "@/componentes/SgsstBeneficios";
import SgsstCTA from "@/componentes/SgsstCTA";

export default function SGSSTPage() {
  return (
    <>
      <BarraNavegacion />

      <main className="bg-white">

        <SgsstHero />

        <SgsstServicios />

        <SgsstBeneficios />

        <SgsstCTA />

      </main>

      <Footer />
    </>
  );
}