const Header = () => {
    return (
      <header className="top-0 left-0 w-64 h-screen bg-gray-200 dark:bg-stone-950 flex flex-col justify-between py-4 z-20">
        {/* Imagen de perfil */}
        <div className="flex justify-center align-center mb-6">
          <span className="rounded-full h-16 w-16 border-white border-solid border-2">
            <img 
              src="./icono.png" 
              alt="yo" 
              className="rounded-full h-16 w-16"
            />
          </span>
        </div>
  
        {/* Menú de navegación */}
        <ul className="flex flex-col m-auto p-4 space-y-4 items-start">
          <li><i className="fa-solid fa-house dark:text-white text-black"></i><a href="#" className="px-2 dark:text-white text-black font-medium">Home</a></li>
          <li><i className="fa-regular fa-id-card dark:text-white text-black"></i><a href="#about-me" className="px-2 dark:text-white text-black font-medium">Acerca de mi</a></li>
          <li><i className="fa-solid fa-sliders dark:text-white text-black"></i><a href="#services" className="px-2 dark:text-white text-black font-medium">Servicios</a></li>
          <li><i className="fa-solid fa-book-bookmark dark:text-white text-black"></i><a href="#portfolio" className="px-2 dark:text-white text-black font-medium">Portfolio</a></li>
          <li><i className="fa-regular fa-map dark:text-white text-black"></i><a href="#contact" className="px-2 dark:text-white text-black font-medium">Contactame</a></li>
        </ul>
  
        {/* Iconos de redes sociales */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://www.linkedin.com/in/enzo-figlioli/" target="_blank"><i className="fa-brands fa-linkedin text-black dark:text-white"></i></a>
          <a href="https://github.com/EnzoFiglioli" target="_blank"><i className="fa-brands fa-github text-black dark:text-white"></i></a>
        </div>
      </header>
    );
  };
  
  export default Header;
  