import Button from "./Button";
import Title from "./Title";

const Contactame = () => {
  return (
    <main className="Contacto-container min-h-screen px-4 lg:px-8 py-8">
      <Title title={'Contacto'} />
      <section className="Contacto flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Información de contacto */}
        <div className="flex flex-col items-start bg-gray-100 dark:bg-stone-950 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 ">What’s your story? Get in touch</h3>
          <p className="mb-4">Always available for freelancing or full-time jobs if the right project comes along. Feel free to contact me.</p>
          <ul className="space-y-2">
            <li className="flex items-center"><i className="fa-regular fa-map mr-2"></i> Olavarria, Argentina</li>
            <li className="flex items-center"><i className="fa-regular fa-envelope mr-2"></i> enzofiglioli.p@gmail.com</li>
            <li className="flex items-center"><i className="fa-solid fa-mobile-screen mr-2"></i> +54 9 2284650777</li>
          </ul>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-3/4">
          <form className="contact-form flex flex-col gap-4">
            <h3 className="text-2xl font-semibold mb-4 dark:text-black">Hablemos!</h3>
            <div className="inputs-form flex flex-col lg:flex-row gap-4">
              <input type="text" placeholder="Nombre*" className="border p-2 rounded w-full lg:w-1/2 text-black" required />
              <input type="email" placeholder="Email*" className="border p-2 rounded w-full lg:w-1/2 text-black" required />
            </div>
            <input type="text" placeholder="Asunto*" className="border p-2 rounded text-black" required />
            <textarea placeholder="Tu mensaje*" className="border p-2 rounded text-black" required></textarea>
            <section className="mt-4">
              <Button text={'Message'} />
            </section>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contactame;
