const CardEducacionHabilidad = ({ año, titulo, institucion }) => {
    return (
      <li className="p-5">
        <section className="dark:bg-stone-950 bg-gray-50 md:py-0 rounded-lg ">
          <span className="text-sm p-1 dark:text-black text-gray-500 font-semibold text-xs bg-yellow-300">{año}</span>
          <h4 className="text-lg font-bold text-gray-800 mt-2 dark:text-white">{titulo}</h4>
          <p className="presentacion-content text-gray-600 mt-1 dark:text-white">{institucion}</p>
        </section>
      </li>
    );
  };
  
  export default CardEducacionHabilidad;
  