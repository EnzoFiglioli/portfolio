import Button from './Button.js';

const Presentacion = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex w-full max-w-screen-lg relative">
        <div className="flex-none w-1/2 pr-8 flex flex-col justify-center">
          <h3 className="font-medium text-lg">Hola, soy</h3>
          <h1 className="text-7xl font-bold">Enzo Figlioli</h1>
          <h2 className="font-medium text-lg">FullStack Web Developer</h2>
          <p className="dark:text-slate-300 text-slate-700">
            Desarrollo todo tipo de aplicaciones, desde interfaces gráficas
            intuitivas hasta APIs livianas para un servidor rápido y óptimo. Me
            gusta hacer sitios web modernos.
          </p> 
          <div className='my-20'>
            <Button text={'Mis proyectos'} />
          </div>
        </div>

        <div className="flex-none w-1/2 flex justify-center items-center">
          <div className="rounded-full w-96 h-96 overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLrq4s4xwmnVwnLBDcBPH7CZY4SSto1DoDA&s"
              alt="yo"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Presentacion;
