import CardEducacionHabilidad from "./CardEducacionHabilidad";
import Title from "./Title";

const EducacionHabilidades = () => {
  return (
    <main className="pr-4 min-h-screen">
      <Title title={"Educación y Habilidades"} />
      <div className="flex flex-col lg:flex-row lg:justify-center gap-20">
        {/* Sección de Educación */}
        <section>
          <ul className="space-y-3">
            <CardEducacionHabilidad
              año={"2024 - Actualidad"}
              titulo={"Técnico Desarrollador de Software"}
              institucion={"Instituto Formación Superior Técnica N° 29"}
            />
            <CardEducacionHabilidad
              año={"2024"}
              titulo={"Diplomatura en Desarrollo Web Backend"}
              institucion={"Universidad Nacional de Tres de Febrero"}
            />
            <CardEducacionHabilidad
              año={"2023"}
              titulo={"Curso FullStack Web Developer Python"}
              institucion={"Codo a Codo 4.0"}
            />
          </ul>
        </section>

        {/* Sección de Habilidades */}
        <section>
          <h3 className="text-xl font-bold mb-4">Mis Habilidades</h3>
          <ul className="grid grid-cols-3 gap-4 text-center">
            <li className="bg-white p-2 rounded shadow-md dark:text-black">HTML</li>
            <li className="bg-white p-2 rounded shadow-md dark:text-black">CSS</li>
            <li className="bg-white p-2 rounded shadow-md dark:text-black">Javascript</li>
            <li className="bg-white p-2 rounded shadow-md dark:text-black" >Python</li>
            <li className="bg-white p-2 rounded shadow-md dark:text-black">React</li>
            <li className="bg-white p-2 rounded shadow-md dark:text-black">NodeJS</li>
            <li className="bg-white p-2 rounded shadow-md dark:text-black">Express</li>
            <li className="bg-white p-2 rounded shadow-md dark:text-black">MongoDB</li>
            <li className="bg-white p-2 rounded shadow-md dark:text-black">MySQL</li>
            <li className="bg-white p-2 rounded shadow-md dark:text-black">Django</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default EducacionHabilidades;
