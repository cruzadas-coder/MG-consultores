import BarraNavegacion from "@/componentes/BarraNavegacion";
import Footer from "@/componentes/Footer";

import PESVHero from "@/componentes/PESVHero";
import PESVServicios from "@/componentes/PESVServicios";
import PESVPorqueElegir from "@/componentes/PESVPorqueElegir";
import PESVCompromiso from "@/componentes/PESVCompromiso";
import PESVProceso from "@/componentes/PESVProceso";
import PESVBeneficios from "@/componentes/PESVBeneficios";
import PESVCTA from "@/componentes/PESVCTA";  


export default function PESVPage() {
  return (
    <>
      <BarraNavegacion />

      <main className="bg-white">

        <PESVHero />

        <PESVServicios />

        <PESVPorqueElegir />

          <PESVCompromiso />

          <PESVProceso />

          <PESVBeneficios />

          <PESVCTA />


      </main>

      <Footer />
    </>
  );
}