import adalabLogo from "../images/LogoAdalabVioleta.png"
import  "../styles/Header.scss"

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <i className="fa-solid fa-laptop-code header__icon"></i>
        <h1 className="header__title">Global Tech</h1>
      </div>

      <div className="header__right">
        <img
          src={adalabLogo}
          alt="Logo Adalab"
          className="header__logo"
        />
      </div>
    </header>
  );
}

export default Header;