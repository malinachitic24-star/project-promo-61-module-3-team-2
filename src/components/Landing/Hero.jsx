import "../../styles/LandingSyles/Hero.scss";
//import { Link } from "react-router-dom";
import HeroButton from "../propts/HeroButton";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">
        Proyectos <span className="hero__title--accent">Molones</span>
      </h1>

      <p className="hero__text">
        Escaparate en línea para recoger ideas a través de la tecnología.
      </p>

      <div className="hero__actions">
        <HeroButton text="Ver proyectos" to="/projects" />

        <HeroButton text="Crear proyecto" to="/create" />
      </div>
    </section>
  );
}

export default Hero;
