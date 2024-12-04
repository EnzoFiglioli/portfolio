import Button from "./Button";
import Title from "./Title";

const Contactame = () => {
  return (
    <main className="Contacto-container">
      <Title title={'Contacto'} />
      <section className="Contacto">
        <div>
          <h3>What’s your story? Get in touch</h3>
          <p>Always available for freelancing or full-time jobs if the right project comes along. Feel free to contact me.</p>
          <ul>
            <li><i className="fa-regular fa-map"></i> Olavarria, Argentina</li>
            <li><i className="fa-regular fa-envelope"></i> enzofiglioli.p@gmail.com</li>
            <li><i className="fa-solid fa-mobile-screen"></i> +54 9 2284650777</li>
          </ul>
        </div>
        <div>
          <form className="contact-form">
            <h3>Say something!</h3>
            <div className="inputs-form">
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
            </div>
            <input type="text" placeholder="Subject*" required />
            <textarea placeholder="Your message*" required></textarea>
            <section>
              <Button text={'Message'} />
            </section>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contactame;
