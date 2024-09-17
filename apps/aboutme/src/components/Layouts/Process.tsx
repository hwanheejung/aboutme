import { ReactNode } from "react";
import Section from "./Section";

const Process = ({ children }: { children: ReactNode }) => {
  return <Section.Table>{children}</Section.Table>;
};

interface ProcessProps {
  num: number;
  title: string;
  lists: string[];
}

const Item = (props: ProcessProps) => {
  return (
    <div className="flex flex-col items-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-main/20 text-center text-lg font-semibold text-main">
        {props.num}
      </span>
      <h3 className="py-3 text-lg">{props.title}</h3>
      <ul className="text-center opacity-60">
        {props.lists.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

Process.Item = Item;
export default Process;
