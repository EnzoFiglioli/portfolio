import Title from "./Title";
import { useEffect, useState } from "react";
import { handlerServices } from '../handler/manejadorServicios';
import servicios from '../data/servicios.json';
import { Service } from "../models/Service";

const Servicios = () => {
  const [cards, setCards] = useState<Service[]>([]);

  useEffect(() => {
    handlerServices(servicios)
      .then(i => setCards(i))
      .catch(err => console.error(err));
  }, []);

  return (
    <main id="services" className="secciones Servicio p-8 text-white min-h-screen">
      {/* Título */}
      <Title title={'¿Que es lo que hago?'} />

      {/* Contenedor de servicios */}
      <div className="service-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        {cards.map((c, index) => (
          <div
            className="card dark:bg-stone-950 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg dark:hover:bg-yellow-500 dark:hover:text-black hover:bg-yellow-500 transition-all h-50"
            key={index}
          >
            {/* Ícono */}
            <div className=" dark:text-white mb-4 text-gray-400">
              <i className={c.ico}></i>
            </div>
            {/* Título */}
            <h3 className="text-black dark:text-white font-semibold mb-2">{c.title}</h3>
            {/* Descripción */}
            <p className="text-black dark:text-white">{c.p}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Servicios;
