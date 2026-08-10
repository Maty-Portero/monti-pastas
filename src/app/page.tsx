import Hero from "../components/Hero";
import MenuDestacado from "../components/MenuDestacado";
import Resenas from "../components/Resenas";
import InfoLocal from "../components/InfoLocal";

export default function Home() {
  return (
    <main>
      <Hero />
      <MenuDestacado />
      <Resenas />
      <InfoLocal />
    </main>
  );
}