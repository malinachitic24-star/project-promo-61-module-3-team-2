import "../../styles/LandingSyles/Landing.scss";
import Hero from "../Landing/Hero.jsx";
import AboutSection from "./AboutSection.jsx";

function Landing() {
  return (
    <>
      <main className="landing">
        <Hero/>
        <AboutSection/>
      </main>
    </>
  );
}

export default Landing;
