import "../../styles/LandingSyles/AboutSection.scss";

function AboutSection() {
  return (
    <section className="about">
      <h2 className="about__title">¿Qué es Women in Tech Space?</h2>
      <p className="about__text">Una iniciativa impulsada por Global Tech y Adalab para impulsar perfiles tecnológicos femeninos en el mundo laboral. </p>
      <button className="about__button">
        Conócenos
      </button>
    </section>
  );
}

export default AboutSection;