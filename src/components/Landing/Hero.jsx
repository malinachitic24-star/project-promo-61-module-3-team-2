import "../../styles/LandingSyles/Hero.scss";
//import { Link } from "react-router-dom";
import HeroButton from "../propts/HeroButton";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">Woment in Tech Space</h1>
      <p className="hero__text"> Consigue tu match empresarial. Trabajamos duro por un mundo más igualitario</p>
      <div className="hero__actions">
        <HeroButton text="Ver proyectos" to="/projects" />
        <HeroButton text="Crear proyecto" to="/create" />
      </div>
      <div className="hero__image"></div>
    </section>
  );
}

export default Hero;
