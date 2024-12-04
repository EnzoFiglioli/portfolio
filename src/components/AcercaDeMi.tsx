import Button from "./Button";

const AcercaDeMi = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6 lg:flex lg:items-center lg:justify-between min-h-screen">
      {/* Contenedor de la sección */}
      <div className="lg:flex lg:space-x-8">
        <div className="absolute top-10 right-4 w-8 h-8 bg-yellow-600 rounded-full"></div>
        <div className="absolute top-20 right-2 w-4 h-4 bg-yellow-500 rounded-full"></div>
        <div className="absolute top-50 left-10 w-6 h-6 bg-yellow-700 rounded-full"></div>
        <div className="relative flex-none">
          <img
            src="https://s0.smartresize.com/wallpaper/789/997/HD-wallpaper-code-programming-text-technology.jpg"
            alt="profile"
            className="w-60 h-60 rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Información y texto */}
        <div className="flex-1 mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Acerca de mi.
          </h2>
          <p className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-200">
            Soy un desarrollador Full Stack apasionado por la creacion de aplicaciones funcionales y el aprendizaje.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Me fascina crear aplicaciones tanto desde la interfaz grafica como construir servidores competentes para mejorar la experiencia del usuario.
          </p>

          {/* Botón */}
          <div className="mt-8">
            <Button text="Contactame" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDeMi;
