import { ReactNode } from "react";

const Timeline = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};

interface ItemProps {
  date: string;
  title: string;
  lists: string[];
}

const Item = (props: ItemProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-1 lg:pb-5">
      <div>
        <div className="flex items-center gap-3 lg:items-start">
          <div className="w-[56px] rounded-lg border border-gray-300 bg-gray-100 py-1 text-center dark:border-neutral-700 dark:bg-neutral-800/30">
            {props.date}
          </div>
          <div className="text-primary">{props.title}</div>
        </div>
      </div>
      <ul className="!m-0 lg:pl-[68px]">
        {props.lists.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

Timeline.Item = Item;
export default Timeline;
