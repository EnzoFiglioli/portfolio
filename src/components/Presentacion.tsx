import Button from './Button.js';

const Presentacion = () => {
  return (
    <main className="flex items-center justify-center h-screen px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-screen-lg relative">
        <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0 order-1 lg:order-2">
          <div className="rounded-full w-60 h-60 lg:w-96 lg:h-96 overflow-hidden shadow-lg">
            <img
              src="https://avatars.githubusercontent.com/u/105600952?v=4"
              alt="yo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 pr-0 lg:pr-8 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <h3 className="font-medium text-base lg:text-lg">Hola, soy</h3>
          <h1 className="text-4xl lg:text-7xl font-bold mt-2">Enzo Figlioli</h1>
          <h2 className="font-medium text-base lg:text-lg mt-2">
            FullStack Web Developer
          </h2>
          <p className="dark:text-slate-300 text-slate-700 mt-4 leading-relaxed max-w-sm">
            Desarrollo todo tipo de aplicaciones, desde interfaces gráficas
            intuitivas hasta APIs livianas para un servidor rápido y óptimo. Me
            gusta hacer sitios web modernos.
          </p>
          <div className="my-8 lg:my-20">
            <Button text={'Mis proyectos'} route={"portfolio"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Presentacion;
