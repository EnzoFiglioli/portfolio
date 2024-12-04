import { Service } from "../models/Service";
export const handlerServices = (data: unknown): Promise<Service[]> => {
    return new Promise((resolve, reject) => {
      try {
        if (!Array.isArray(data)) {
          throw new Error("El dato proporcionado no es un array");
        }
  
        const services: Service[] = data.map((item) => {
          if (
            typeof item.title === "string" &&
            typeof item.p === "string" &&
            typeof item.ico === "string"
          ) {
            return item as Service;
          }
          throw new Error("Un elemento del array tiene un formato incorrecto");
        });
  
        resolve(services);
      } catch (err) {
        reject(err);
      }
    });
  };
  