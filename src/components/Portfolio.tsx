import { useEffect, useState } from 'react';
import Title from './Title.js';
import { handlerProyectos } from '../handler/manejadorProyectos.js';
import data from '../data/proyectos.json';
import ProyectoDetail from './ProyectoDetail.js';

const Portfolio = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    handlerProyectos(data)
      .then((p) => setProyectos(p))
      .catch((err) => console.error(err));
  }, []); // Ejecutar solo al montar el componente

  return (
    <main className="secciones p-8 min-h-screen">
      {/* Título */}
      <div className="mb-6">
        <Title title={'Mi Portfolio'} />
      </div>

      {/* Contenedor de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((proyecto, index) => (
          <ProyectoDetail proyecto={proyecto} key={index} />
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
