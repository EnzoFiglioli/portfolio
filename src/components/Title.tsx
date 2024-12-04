type TitleProps = {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="text-center mb-8">
      {/* Título */}
      <h3 className="section-title text-3xl font-bold text-black dark:text-white">
        {title}
      </h3>
      {/* Subrayado decorativo */}
      <section className="subrayado flex items-center justify-center mt-4">
        <hr className="linea w-16 border-t-4 border-yellow-400 text-black dark:text-white" />
        <span className="circulo w-4 h-4 bg-yellow-400 rounded-full mx-2"></span>
        <hr className="linea w-16 border-t-4 border-yellow-400" />
      </section>
    </div>
  );
};

export default Title;
