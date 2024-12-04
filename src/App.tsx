import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import ThemeSelector from "./components/ThemeSelector.js";

const Index = () => {
  // Estado para controlar la visibilidad del menú en dispositivos móviles
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detectar el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      // Eliminar el nodo Header si la ventana es menor a 768px
      setShowHeader(window.innerWidth >= 768);
    };

    // Agregar evento de resize
    handleResize(); // Ejecutar una vez al montar el componente
    window.addEventListener("resize", handleResize);

    // Limpieza
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      {/* Header */}
      {showHeader && (
        <div
          className={`fixed top-0 left-0 z-20 bg-gray-200 dark:bg-stone-950 w-64 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:static`}
        >
          <Header />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Toggle Button for Mobile */}
        <div className="lg:hidden p-4 fixed top-4 right-10 z-30 bg-black dark:bg-white rounded">
          <button onClick={toggleMenu} className="bg-black dark:bg-white">
            <i className={`dark:text-black text-white fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Main Section */}
        <main className="flex-1 flex flex-col items-center justify-center lg:justify-start lg:items-start min-h-screen">
          <Main />
        </main>

        {/* Theme Selector */}
        <div className="absolute bottom-4 right-4">
          <ThemeSelector />
        </div>
      </div>
    </div>
  );
};

export default Index;
