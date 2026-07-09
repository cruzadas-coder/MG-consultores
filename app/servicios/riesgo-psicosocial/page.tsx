import BarraNavegacion from "@/componentes/BarraNavegacion";
import Footer from "@/componentes/Footer";

import RiesgoHero from "@/componentes/RiesgoHero";
import RiesgoServicios from "@/componentes/RiesgoServicios";
import RiesgoPorqueElegir from "@/componentes/RiesgoPorqueElegir";
import RiesgoCTA from "@/componentes/RiesgoCTA";

export default function RiesgoPsicosocialPage() {
  return (
    <>
      <BarraNavegacion />

      <main className="bg-white">

        <RiesgoHero />

        <RiesgoServicios />

        <RiesgoPorqueElegir />

        <RiesgoCTA />

      </main>

      <Footer />
    </>
  );
}