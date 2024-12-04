import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import ThemeSelector from "./components/ThemeSelector.js";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowHeader(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      {/* Mostrar el menú en dispositivos móviles solo si isMenuOpen es true */}
      {isMenuOpen || showHeader ? (
        <div
          className={`top-0 left-0 z-20 bg-gray-200 dark:bg-stone-950 w-64 max-h-screen fixed transform ${
            isMenuOpen
              ? "translate-x-0 transition-transform duration-300 ease-in-out"
              : "-translate-x-full transition-transform duration-300 ease-in-out"
          } lg:translate-x-0 lg:fixed lg:w-64`}
        >
          <Header />
        </div>
      ) : null}

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Botón de alternancia para móviles */}
        <div className="lg:hidden p-4 fixed top-4 right-4 z-30 bg-black dark:bg-white rounded">
          <button onClick={toggleMenu} className="bg-black dark:bg-white">
            <i className={`dark:text-black text-white fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        <main className="flex-1 flex flex-col items-center justify-center lg:justify-start lg:items-start min-h-screen lg:ml-64">
          <Main />
        </main>

        {/* Selector de tema */}
        <div className="absolute bottom-4 right-4">
          <ThemeSelector />
        </div>
      </div>
    </div>
  );
};

export default Index;
