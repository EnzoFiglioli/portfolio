import React from "react";

// Tipado de las props
type Proyecto = {
  banner: string;
  title: string;
  link: string;
  description: string;
};

type ProyectoDetailProps = {
  proyecto: Proyecto;
};

const ProyectoDetail: React.FC<ProyectoDetailProps> = ({ proyecto }) => {
  return (
    <a 
      href={proyecto.link} 
      className="proyecto-detail-container bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group relative"
      target="_blank"
    >
      <img
        src={proyecto.banner}
        alt={proyecto.title}
        className="w-full h-48 object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-80 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg font-bold">{proyecto.title}</h3>
        <p className="text-sm mt-2">{proyecto.descripcion}</p>
      </div>
    </a>
  );
};

export default ProyectoDetail;
