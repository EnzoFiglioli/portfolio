import React from "react";

// Tipado de las props
type Proyecto = {
  portada: string;
  titulo: string;
  link: string;
};

type ProyectoDetailProps = {
  proyecto: Proyecto;
};

const ProyectoDetail: React.FC<ProyectoDetailProps> = ({ proyecto }) => {
  return (
    <div className="proyecto-detail-container bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Imagen del proyecto */}
      <img
        src={proyecto.portada}
        alt={proyecto.title}
        className="w-full h-48 object-cover"
      />

      {/* Información del proyecto */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{proyecto.title}</h3>
        <a
          href={proyecto.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline mt-2 block"
        >
          Ver Proyecto
        </a>
      </div>
    </div>
  );
};

export default ProyectoDetail;
