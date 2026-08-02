import { createElement } from "react";

export const HeroCode = () => {
  return createElement(
    "section",
    {
      className: `
      absolute
    bottom-3
    right-0

    w-[360px]

    rounded-3xl
    border
    border-[var(--border)]

    bg-[rgba(16,24,39,.85)]
    backdrop-blur-xl

    p-6 
  `,
    },
    createElement(
      "pre",
      { className: "overflow-x-auto text-sm leading-8" },
      createElement(
        "code",
        null,
        createElement("span", { className: "text-orange-400" }, "const"),
        " ",
        createElement("span", { className: "text-blue-400" }, "developer"),
        " ",
        createElement("span", { className: "text-white" }, "= {"),
        "\n  ",
        createElement("span", { className: "text-cyan-400" }, "name"),
        createElement("span", { className: "text-white" }, ":"),
        " ",
        createElement(
          "span",
          { className: "text-green-400" },
          '"Enzo Figlioli"',
        ),
        ",\n  ",
        createElement("span", { className: "text-cyan-400" }, "role"),
        createElement("span", { className: "text-white" }, ":"),
        " ",
        createElement(
          "span",
          { className: "text-green-400" },
          '"Full Stack Developer"',
        ),
        ",\n  ",
        createElement("span", { className: "text-cyan-400" }, "stack"),
        createElement("span", { className: "text-white" }, ":"),
        " ",
        createElement(
          "span",
          { className: "text-green-400" },
          '["React", "TypeScript",\n "NestJS", "PostgreSQL"]',
        ),
        ",\n  ",
        createElement("span", { className: "text-cyan-400" }, "passion"),
        createElement("span", { className: "text-white" }, ":"),
        " ",
        createElement(
          "span",
          { className: "text-green-400" },
          '"Building clean\n and scalable applications"',
        ),
        ",\n  ",
        createElement("span", { className: "text-cyan-400" }, "status"),
        createElement("span", { className: "text-white" }, ":"),
        " ",
        createElement(
          "span",
          { className: "text-green-400" },
          '"Available for remote work"',
        ),
        "\n",
        createElement("span", { className: "text-white" }, "}"),
      ),
    ),
  );
};
