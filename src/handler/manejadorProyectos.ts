type Proyecto = {
  id: number;
  title: string;
  descripcion: string;
  link: string;
  portada: string;
};

export const handlerProyectos = async (data: Proyecto[]): Promise<Proyecto[]> => {
  try {
    if (!Array.isArray(data)) {
      throw new Error("El dato proporcionado no es un array");
    }

    const proyectos: Proyecto[] = data.map((item) => {
      if (
        typeof item.id === "number" &&
        typeof item.title === "string" &&
        typeof item.descripcion === "string" &&
        typeof item.link === "string" &&
        typeof item.portada === "string"
      ) {
        return item;
      }
      throw new Error(`Un elemento tiene un formato incorrecto: ${JSON.stringify(item)}`);
    });

    return proyectos;
  } catch (err) {
    throw err;
  }
};
