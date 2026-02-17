import adalabLogo from "../images/LogoAdalabVioleta.png"
import  "../styles/Footer.scss"

function Footer() {
  return (
    <footer className="footer">
        <img
          src={adalabLogo}
          alt="Logo Adalab"
          className="footer__logo"
        />
    </footer>
  );
}

export default Footer;