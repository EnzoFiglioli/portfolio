import { Bot, Send, X } from "lucide-react";
import { useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
}

export const PortfolioBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "¡Hola! 👋 Soy el asistente de Enzo. ¿Qué te gustaría saber?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Respuesta temporal
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: "¡Gracias por tu mensaje! Pronto voy a poder responder preguntas sobre Enzo y sus proyectos. 🤖",
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  return (
    <>
      {/* Botón flotante */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir asistente"
          className="
            fixed
            bottom-6
            right-6
            z-[9998]
            flex
            size-14
            items-center
            justify-center
            rounded-full
            border
            border-blue-400/30
            bg-blue-500
            text-white
            shadow-lg
            shadow-blue-500/20
            transition
            hover:scale-105
            hover:bg-blue-400
            active:scale-95
          "
        >
          <Bot size={25} />
        </button>
      )}

      {/* Ventana del bot */}
      {isOpen && (
        <div
          className="
            fixed
            bottom-6
            right-6
            z-[9998]
            flex
            h-[520px]
            w-[calc(100vw-2rem)]
            max-w-[380px]
            flex-col
            overflow-hidden
            rounded-3xl
            border
            border-[var(--border)]
            bg-[rgba(11,17,32,.98)]
            shadow-2xl
            shadow-black/40
            backdrop-blur-xl
          "
        >
          {/* Header */}
          <header
            className="
              flex
              shrink-0
              items-center
              justify-between
              border-b
              border-[var(--border)]
              px-5
              py-4
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  size-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <Bot size={21} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  Enzo Bot
                </h3>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-400" />

                  <span className="text-xs text-zinc-500">
                    Asistente del portfolio
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar asistente"
              className="
                flex
                size-9
                items-center
                justify-center
                rounded-full
                text-zinc-500
                transition
                hover:bg-white/5
                hover:text-white
              "
            >
              <X size={19} />
            </button>
          </header>

          {/* Messages */}
          <div
            className="
              flex-1
              space-y-4
              overflow-y-auto
              p-5
            "
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[85%]
                    rounded-2xl
                    px-4
                    py-3
                    text-sm
                    leading-5
                    ${
                      message.sender === "user"
                        ? "rounded-br-md bg-blue-500 text-white"
                        : "rounded-bl-md border border-[var(--border)] bg-white/[0.04] text-zinc-300"
                    }
                  `}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          <div className="flex gap-2 overflow-x-auto px-5 pb-3">
            <button
              type="button"
              onClick={() =>
                setInput("¿Qué tecnologías usa Enzo?")
              }
              className="
                shrink-0
                rounded-full
                border
                border-[var(--border)]
                bg-white/[0.03]
                px-3
                py-1.5
                text-xs
                text-zinc-400
                transition
                hover:border-blue-400/40
                hover:text-blue-300
              "
            >
              Tecnologías
            </button>

            <button
              type="button"
              onClick={() =>
                setInput("¿Qué proyectos tiene?")
              }
              className="
                shrink-0
                rounded-full
                border
                border-[var(--border)]
                bg-white/[0.03]
                px-3
                py-1.5
                text-xs
                text-zinc-400
                transition
                hover:border-blue-400/40
                hover:text-blue-300
              "
            >
              Proyectos
            </button>

            <button
              type="button"
              onClick={() =>
                setInput("¿Dónde puedo ver el CV?")
              }
              className="
                shrink-0
                rounded-full
                border
                border-[var(--border)]
                bg-white/[0.03]
                px-3
                py-1.5
                text-xs
                text-zinc-400
                transition
                hover:border-blue-400/40
                hover:text-blue-300
              "
            >
              CV
            </button>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="
              flex
              shrink-0
              items-center
              gap-2
              border-t
              border-[var(--border)]
              p-4
            "
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Escribí una pregunta..."
              className="
                min-w-0
                flex-1
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
              "
            />

            <button
              type="submit"
              aria-label="Enviar mensaje"
              className="
                flex
                size-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-blue-500
                text-white
                transition
                hover:bg-blue-400
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
              disabled={!input.trim()}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
