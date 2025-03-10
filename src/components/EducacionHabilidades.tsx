import CardEducacionHabilidad from "./CardEducacionHabilidad";
import Title from "./Title";
import Skill from "./Skill";
import { useEffect, useState } from "react";
import tecnologias from "../data/tecnologias.json";

interface Tech {
  nombre: string;
  imagen: string;
}

const EducacionHabilidades = () => {
  const [techs, setTechs] = useState<Tech[]>([]);

  useEffect(() => {
    setTechs(tecnologias);
  }, []);

  return (
    <main className="pr-4 min-h-screen">
      <Title title={"Educación y Habilidades"} />
      <div className="flex flex-col lg:flex-row lg:justify-center gap-20">
        {/* Sección de Educación */}
        <section>
          <ul className="space-y-3">
            <CardEducacionHabilidad
              año={"Agosto 2024 - Actualidad"}
              titulo={"Técnico Desarrollador de Software"}
              institucion={"Instituto Formación Superior Técnica N° 29"}
            />
            <CardEducacionHabilidad
              año={"Marzo 2024 - Diciembre 2024"}
              titulo={"Diplomatura en Desarrollo Web Backend"}
              institucion={"Universidad Nacional de Tres de Febrero"}
            />
            <CardEducacionHabilidad
              año={"Febrero 2023 - Julio 2023"}
              titulo={"Curso FullStack Web Developer Python"}
              institucion={"Codo a Codo 4.0"}
            />
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-4">Tecnologías</h3>
          <ul className="grid grid-cols-3 gap-4 text-center">
            {techs.length > 0 ? (
              techs.map((tech, index) => (
                <Skill key={index} skill={tech.nombre} logo={tech.imagen} />
              ))
            ) : (
              <li>No habilidades disponibles</li>
            )}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default EducacionHabilidades;
