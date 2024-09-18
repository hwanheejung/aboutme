import { ReactNode } from "react";
import Section from "./Section";

const Process = ({ children }: { children: ReactNode }) => {
  return <Section.Table>{children}</Section.Table>;
};

interface ProcessProps {
  num: number;
  title: string;
  lists?: string[];
}

const Item = (props: ProcessProps) => {
  return (
    <div className="flex flex-col items-center pt-5">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-main/20 text-center text-lg font-semibold text-main">
        {props.num}
      </span>
      <div className="py-3 pb-2 pt-2 text-center text-lg text-primary">
        {props.title}
      </div>
      {props.lists && (
        <ul className="!m-0 !p-0 text-center text-primary/60 prose-li:list-none">
          {props.lists.map((list, index) => (
            <li key={index} className="!m-0">
              {list}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Process.Item = Item;
export default Process;
