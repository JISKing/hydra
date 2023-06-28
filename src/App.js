import React, { useEffect, useState } from "react";

import "./App.scss";

import MenuFixed from "./components/menu/MenuFixed";
import Background from "./components/background/Background";
import Header from "./components/header/Header";
import HeaderINFO from "./components/headerINFO/HeaderINFO";
import About from "./components/section-about/About";
import Services from "./components/section-services/Services";
import Technologies from "./components/section-tech/Technologies";
import Process from "./components/section-process/Process";
import RegForm from "./components/section-OptIn/RegForm";
import Footer from "./components/footer/Footer";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowMenu(scrollTop > headerHeight);
  };
  return (
    <div className="wrapper">
      <Background />
      <MenuFixed showMenu={showMenu} />
      <div className="contentWrapper">
        <Header />
        <HeaderINFO />
        <About />
        <Services />
        <Technologies />
        <Process />
        <RegForm />        
        <Footer />
      </div>
    </div>
  );
}

export default App;
