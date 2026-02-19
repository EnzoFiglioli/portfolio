type Proyecto = {
  id: number;
  title: string;
  description: string;
  link: string;
  banner: string;
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
        typeof item.description === "string" &&
        typeof item.link === "string" &&
        typeof item.banner === "string"
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
