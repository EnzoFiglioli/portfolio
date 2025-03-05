import CardEducacionHabilidad from "./CardEducacionHabilidad";
import Title from "./Title";
import Skill from "./Skill";

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
            <Skill skill="HTML" />
            <Skill skill="CSS" />
            <Skill skill="Javascript" />
            <Skill skill="Tailwind" />
            <Skill skill="React" />
            <Skill skill="NodeJS" />
            <Skill skill="TypeScript" />
            <Skill skill="Express" />
            <Skill skill="MongoDB" />
            <Skill skill="MySQL" />
            <Skill skill="Python" />
            <Skill skill="Django" />
          </ul>
        </section>
      </div>
    </main>
  );
};

export default EducacionHabilidades;
