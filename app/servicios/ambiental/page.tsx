import BarraNavegacion from "@/componentes/BarraNavegacion";
import AmbientalHero from "@/componentes/AmbientalHero";
import AmbientalServicios from "@/componentes/AmbientalServicios";
import AmbientalPorqueElegir from "@/componentes/AmbientalPorqueElegir";
import AmbientalCompromiso from "@/componentes/AmbientalCompromiso";
import AmbientalProceso from "@/componentes/AmbientalProceso";
import AmbientalBeneficios from "@/componentes/AmbientalBeneficios";
import AmbientalCTA from "@/componentes/AmbientalCTA";
import Footer from "@/componentes/Footer";

export default function Page() {
  return (
    <>
      <BarraNavegacion />

      <AmbientalHero />

      <AmbientalServicios />

      <AmbientalPorqueElegir />

      <AmbientalCompromiso />

      <AmbientalProceso />

      <AmbientalBeneficios />

      <AmbientalCTA />

      <Footer />
    </>
  );
}