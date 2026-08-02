import * as Icons from "lucide-react";

export type IconName = keyof typeof Icons;

interface ButtonType {
  color?: string;
  padding: string;
  name: string;
  icon: IconName;
  styles?: string;
  onClick?: () => void;
}

export const Button = ({ color, padding, name, icon, onClick }: ButtonType) => {
  const LucideIcon = Icons[icon] as React.ElementType;

  return (
    <button
      type="button"
      className={`
        flex items-center gap-2
        bg-${color}-500
        p-${padding}
        rounded
        m-1
        text-white
      `}
      onClick={onClick}
    >
      <span>{name}</span>

      {LucideIcon && <LucideIcon className="h-5 w-5" />}
    </button>
  );
};
