import BarraNavegacion from "@/componentes/BarraNavegacion";
import Footer from "@/componentes/Footer";

import CapacitacionesHero from "@/componentes/CapacitacionesHero";
import CapacitacionesServicios from "@/componentes/CapacitacionesServicios";
import CapacitacionesBeneficios from "@/componentes/CapacitacionesBeneficios";
import CapacitacionesCTA from "@/componentes/CapacitacionesCTA";

export default function CapacitacionesPage() {
  return (
    <>
      <BarraNavegacion />

      <main className="bg-white">

        <CapacitacionesHero />

        <CapacitacionesServicios />

        <CapacitacionesBeneficios />

        <CapacitacionesCTA />

      </main>

      <Footer />
    </>
  );
}