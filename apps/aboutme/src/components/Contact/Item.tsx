import { HTMLAttributes, ReactNode } from "react";
import ButtonTransition from "../Transitions/ButtonTransition";
import { twMerge } from "tailwind-merge";

interface ItemProps {
  link: string;
  icon: ReactNode;
  text?: string;
  className?: HTMLAttributes<HTMLLIElement>["className"];
}

const Item = ({ link, icon, text, className }: ItemProps) => {
  return (
    <ButtonTransition>
      <a
        href={link}
        className={twMerge(
          `${text ? "flex items-center gap-2" : ""}`,
          className,
        )}
        target="_blank"
      >
        {icon}
        {text && <span>{text}</span>}
      </a>
    </ButtonTransition>
  );
};

export default Item;
