const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-60 h-full bg-gray-200 dark:bg-stone-950 flex flex-col justify-between py-4">
      {/* Imagen de perfil */}
      <div className="flex justify-center align-items-center mb-6">
        <span className="rounded-full h-16 w-16 border-white border-solid border-2">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLrq4s4xwmnVwnLBDcBPH7CZY4SSto1DoDA&s" 
            alt="yo" 
            className="rounded-full h-16 w-16"
          />
        </span>
      </div>

      {/* Menú de navegación */}
      <ul className="flex flex-col m-auto p-4 space-y-4 items-start">
        <li><i className="fa-solid fa-house dark:text-white text-black"></i><a href="#" className="px-2 dark:text-white text-black font-medium">Home</a></li>
        <li><i className="fa-regular fa-id-card dark:text-white text-black"></i><a href="#" className="px-2 dark:text-white text-black font-medium">Acerca de mi</a></li>
        <li><i className="fa-solid fa-sliders dark:text-white text-black"></i><a href="#" className="px-2 dark:text-white text-black font-medium">Servicios</a></li>
        <li><i className="fa-solid fa-book-bookmark dark:text-white text-black"></i><a href="#" className="px-2 dark:text-white text-black font-medium">Portfolio</a></li>
        <li><i className="fa-regular fa-map dark:text-white text-black"></i><a href="#" className="px-2 dark:text-white text-black font-medium">Contactame</a></li>
      </ul>

      {/* Iconos de redes sociales */}
      <div className="flex justify-center space-x-6 mt-6">
        <i className="fa-brands fa-github text-black dark:text-white"></i>
        <i className="fa-brands fa-linkedin text-black dark:text-white"></i>
      </div>
    </header>
  );
};

export default Header;
