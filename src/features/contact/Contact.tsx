import {
  Mail,
  MapPin,
  Send,
} from "lucide-react"; 
import { SiGithub as Github, SiLinkerd as Linkedin } from "react-icons/si";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Contacto
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Hablemos
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          ¿Tenés una propuesta, un proyecto o simplemente querés
          contactarme? Podés escribirme directamente.
        </p>
      </div>

      {/* Content */}
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Contact information */}
        <div className="rounded-3xl border border-[var(--border)] bg-white/[0.02] p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-white">
            Información de contacto
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Estoy abierto a oportunidades laborales, proyectos y
            colaboraciones relacionadas con desarrollo de software.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href="mailto:tuemail@example.com"
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-[var(--border)]
                bg-white/[0.02]
                p-4
                transition
                hover:border-blue-400/40
                hover:bg-white/[0.04]
              "
            >
              <div
                className="
                  flex
                  size-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <Mail size={20} />
              </div>

              <div>
                <p className="text-xs text-zinc-500">
                  Email
                </p>

                <p className="mt-1 text-sm font-medium text-zinc-200 group-hover:text-white">
                  enzofiglioli.p@gmail.com
                </p>
              </div>
            </a>

            <div
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-[var(--border)]
                bg-white/[0.02]
                p-4
              "
            >
              <div
                className="
                  flex
                  size-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs text-zinc-500">
                  Ubicación
                </p>

                <p className="mt-1 text-sm font-medium text-zinc-200">
                  Argentina · Trabajo remoto
                </p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-8 border-t border-[var(--border)] pt-6">
            <p className="mb-4 text-sm font-medium text-zinc-300">
              También podés encontrarme en
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/EnzoFiglioli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  size-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-white/[0.02]
                  text-zinc-400
                  transition
                  hover:border-blue-400/40
                  hover:bg-blue-500/10
                  hover:text-blue-400
                "
              >
                <Github size={20} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  size-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-white/[0.02]
                  text-zinc-400
                  transition
                  hover:border-blue-400/40
                  hover:bg-blue-500/10
                  hover:text-blue-400
                "
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          className="
            rounded-3xl
            border
            border-[var(--border)]
            bg-white/[0.02]
            p-6
            sm:p-8
          "
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Nombre
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                className="
                  w-full
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-black/20
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-zinc-600
                  transition
                  focus:border-blue-400
                  focus:ring-2
                  focus:ring-blue-400/10
                "
              />
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                className="
                  w-full
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-black/20
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-zinc-600
                  transition
                  focus:border-blue-400
                  focus:ring-2
                  focus:ring-blue-400/10
                "
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Asunto
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="¿En qué podemos trabajar?"
                className="
                  w-full
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-black/20
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-zinc-600
                  transition
                  focus:border-blue-400
                  focus:ring-2
                  focus:ring-blue-400/10
                "
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Mensaje
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Escribí tu mensaje..."
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-black/20
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-zinc-600
                  transition
                  focus:border-blue-400
                  focus:ring-2
                  focus:ring-blue-400/10
                "
              />
            </div>
          </div>

          <button
            type="submit"
            className="
              mt-6
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-500
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-blue-400
              active:scale-[0.99]
            "
          >
            <Send size={18} />
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};
