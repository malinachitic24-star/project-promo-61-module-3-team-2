import "../../styles/LandingSyles/AboutSection.scss";
import HeroButton from "../propts/HeroButton";

function AboutSection() {
  return (
    <section className="about">
      <h2 className="about__title">¿Qué es Women in Tech Space?</h2>
      <p className="about__text">Una iniciativa impulsada por Global Tech y Adalab para impulsar perfiles tecnológicos femeninos en el mundo laboral. </p>
        <HeroButton text="Conócenos" to={"/aboutus"} ></HeroButton>
    </section>
  );
}

export default AboutSection;