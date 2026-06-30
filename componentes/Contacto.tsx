import HeroContacto from "./contacto/HeroContacto";
import InformacionContacto from "./contacto/InformacionContacto";
import MapaContacto from "./contacto/MapaContacto";

export default function Contacto() {
  return (
    <main className="bg-white">

      <HeroContacto />

      <InformacionContacto />

      <MapaContacto />

    </main>
  );
}