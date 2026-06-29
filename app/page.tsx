import BarraNavegacion from "@/componentes/BarraNavegacion";
import Inicio from "@/componentes/Inicio";
import Nosotros from "@/componentes/Nosotros";
import Servicios from "@/componentes/Servicios";
import SGSST from "@/componentes/SGSST";
import Calidad from "@/componentes/Calidad";
import Sectores from "@/componentes/Sectores";
import PorqueElegirnos from "@/componentes/PorqueElegirnos";

export default function Home() {
  return (
    <>
      <BarraNavegacion />

      <main>
        <Inicio />
        <Nosotros />
        <Servicios />
        <SGSST />
        <Calidad />
        <Sectores />
        <PorqueElegirnos />
      </main>
    </>
  );
}