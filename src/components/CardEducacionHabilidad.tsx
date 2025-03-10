type SkillEducProps = {
  año: string,
  titulo: string,
  institucion: string
}

const CardEducacionHabilidad = ({ año, titulo, institucion }: SkillEducProps) => {
  return (
    <li className="p-5">
      <section className="dark:bg-stone-950 bg-gray-50 lg:py-0 rounded-lg h-40">
        <div className="relative">
          <span className="lazo"></span> {/* Esto será el lazo */}
          <span className="text-sm p-1 dark:text-black text-gray-500 font-semibold text-xs bg-yellow-300">{año}</span>
        </div>
        <div className="p-3">
          <h4 className="text-lg font-bold text-gray-800 mt-2 dark:text-white">{titulo}</h4>
          <p className="presentacion-content text-gray-600 mt-1 dark:text-gray-300">{institucion}</p>
        </div>
      </section>
    </li>
  );
};

export default CardEducacionHabilidad;
