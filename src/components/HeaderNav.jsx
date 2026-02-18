import { useState } from "react";
import { NavLink } from "react-router-dom";
import adalabLogo from "../images/LogoAdalabVioleta.png";
import menuStar from "../images/menu-stars.png";
import "../styles/HeaderNav.scss";

function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const getLinkClass = ({ isActive }) =>
    `drawer__link ${isActive ? "drawer__link--active" : ""}`;

  return (
    <header className="headerNav">
      {/* Topbar */}
      <div className="topbar">
        <button
          type="button"
          className="topbar__menuBtn"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-drawer"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <img src={menuStar} alt="" className="topbar__icon" />
          <span>Menú</span>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${isMenuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />

      {/* Drawer */}
      <aside
        id="main-drawer"
        className={`drawer ${isMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="drawer__top">
          <img src={menuStar} alt="" className="topbar__icon drawer__icon" />
          <span className="drawer__title">Women in Tech</span>

          <button
            type="button"
            className="drawer__close"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            ×
          </button>
        </div>

        <nav className="drawer__nav" aria-label="Navegación principal">
          <NavLink to="/" end onClick={closeMenu} className={getLinkClass}>
            Inicio
          </NavLink>

          <NavLink to="/projects" onClick={closeMenu} className={getLinkClass}>
            Añadir proyecto
          </NavLink>

          <NavLink to="/create" onClick={closeMenu} className={getLinkClass}>
            Ver proyectos
          </NavLink>

          <NavLink to="/aboutus" onClick={closeMenu} className={getLinkClass}>
            Conócenos
          </NavLink>
        </nav>
      </aside>

      {/* Brand */}
      <NavLink to="/" className="logo__link">
      <div className="header__left">
        <i className="fa-solid fa-laptop-code header__icon--nav" aria-hidden="true"></i>
        <h1 className="header__title-brand">Global Tech</h1>
      </div>
      </NavLink>

      <div className="header__right">
        <img src={adalabLogo} alt="Logo Adalab" className="header__logo--nav" />
      </div>
    </header>
  );
}

export default HeaderNav;
