type typeButton = {
   text: string
  };

const Button = ({ text }: typeButton) => {
  return (
    <div className=" inline-block">
      {/* Rectángulo amarillo */}
      <a
        href="#"
        className="dark:bg-yellow-400 bg-black dark:text-black text-white px-8 py-4 rounded z-10"
      >
        {text}
      </a>
      
      {/* Rectángulo blanco debajo del amarillo, desplazado */}
      <span className="bg-white w-32 h-12  bottom-5 left-4 rounded"></span>
    </div>
  );
};

export default Button;
