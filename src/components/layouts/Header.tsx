import { CvModal } from "@/features/cv/cvModal";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#hero", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#education", label: "Experiencia" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-6 flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[rgba(11,17,32,.85)] px-4 py-3 text-white backdrop-blur-xl shadow-sm sm:px-6 lg:px-8">
        <a href="/" aria-label="Inicio" className="flex items-center">
          <img src="/logo.svg" alt="Logo Enzo Figlioli" className="h-10 w-10" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setIsCvOpen(true)}
            className="rounded-2xl border border-[var(--border)] bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-blue-400/40 hover:bg-white/10"
          >
            Ver CV
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/5 text-zinc-200 transition hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute inset-x-4 top-[5.5rem] z-40 rounded-3xl border border-[var(--border)] bg-[rgba(11,17,32,.98)] p-4 shadow-xl backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium text-zinc-200">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              setIsCvOpen(true);
              setIsMenuOpen(false);
            }}
            className="mt-4 w-full rounded-2xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Ver CV
          </button>
        </div>
      )}

      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </header>
  );
};
