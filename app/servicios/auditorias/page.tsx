import BarraNavegacion from "@/componentes/BarraNavegacion";
import AuditoriaHero from "@/componentes/AuditoriaHero";
import AuditoriaServicios from "@/componentes/AuditoriaServicios";
import AuditoriaPorqueElegir from "@/componentes/AuditoriaPorqueElegir";
import AuditoriaCTA from "@/componentes/AuditoriaCTA";
import Footer from "@/componentes/Footer";

export default function Page() {
  return (
    <>
      <BarraNavegacion />

      <AuditoriaHero />

      <AuditoriaServicios />

      <AuditoriaPorqueElegir />

      <AuditoriaCTA />

      <Footer />
    </>
  );
}