import "../../styles/LandingSyles/Hero.scss";
//import { Link } from "react-router-dom";
import HeroImage from "../../images/Women-in-Tech-Space.jpeg"
import HeroButton from "../propts/HeroButton";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">Women in Tech Space</h1>
      <p className="hero__text"> Consigue tu match empresarial. Trabajamos duro por un mundo más igualitario</p>
      <div className="hero__actions">
        <p>¿Eres empresa y buscas la candidata perfecta?</p>
        <HeroButton text="Ver proyectos" to="/projects" />
        <p>¿Eres creadora y quieres mostrar tus proyectos?</p>
        <HeroButton text="Crear proyecto" to="/create" />
      </div>
      <img src={HeroImage} className="hero__image"></img>
    </section>
  );
}

export default Hero;
