import React, { useEffect, useState } from "react";

import "./header.scss";

import spinner from "../../images/logo/logoSPINNER.svg";
import hydra from "../../images/logo/logoHYDRA.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeBurgerMenu() {
    setIsMenuOpen(false);
  }

  function handleButtonClick(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <header>
      <div className="logo">
        <img className="logoSPINNER" src={spinner} alt="logoSPINNER" />
        <img className="logoHYDRA" src={hydra} alt="logoHYDRA" />
      </div>

      <nav className={`navMenu ${isMenuOpen ? "_active" : ""}`}>
        <a href="#aboutCon" onClick={closeBurgerMenu}>
          ABOUT
        </a>

        <a href="#servicesCon" onClick={closeBurgerMenu}>
          SERVICES
        </a>

        <a href="#technologies" onClick={closeBurgerMenu}>
          TECHNOLOGIES
        </a>

        <a href="#processCon" onClick={closeBurgerMenu}>
          HOW TO
        </a>

        <a
          className="burgerLinks"
          href="#technologies"
          onClick={closeBurgerMenu}
        >
          CONTACT US
        </a>
        <a className="burgerLinks" href="#regForm" onClick={closeBurgerMenu}>
          JOIN HYDRA
        </a>
      </nav>

      <div className="headButtons">
        <button href='#footer' 
          onClick={handleButtonClick}
        className="contactUsButton">CONTACT US</button>
        <button
          href="#regForm"
          onClick={handleButtonClick}
          className="joinHydraButton"
        >
          JOIN HYDRA
        </button>
      </div>

      <div
        className={`burger ${isMenuOpen ? "_active" : ""}`}
        onClick={handleMenuToggle}
      >
        <span></span>
      </div>
    </header>
  );
}

export default Header;
