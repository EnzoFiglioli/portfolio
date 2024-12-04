type Proyecto = {
    id: number;
    titulo: string;
    descripcion: string;
    link: string;
    portada: string;
  };
  
  export const handlerProyectos = (data: unknown): Promise<Proyecto[]> => {
    return new Promise((resolve, reject) => {
      try {
        if (!Array.isArray(data)) {
          throw new Error("El dato proporcionado no es un array");
        }
  
        const proyectos: Proyecto[] = data.map((item) => {
          if (
            typeof item.id === "number" &&
            typeof item.titulo === "string" &&
            typeof item.descripcion === "string" &&
            typeof item.link === "string" &&
            typeof item.portada === "string"
          ) {
            return item as Proyecto;
          }
          throw new Error("Un elemento tiene un formato incorrecto");
        });
  
        resolve(proyectos);
      } catch (err) {
        reject(err);
      }
    });
  };
  