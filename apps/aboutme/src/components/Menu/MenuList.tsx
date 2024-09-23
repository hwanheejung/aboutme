import { NAV } from "contents/meta/nav";
import { HTMLAttributes, ReactNode } from "react";

interface MenuListProps {
  renderItem: (
    item: { title: string; link: string },
    index: number,
  ) => ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

const MenuList = ({ renderItem, className }: MenuListProps) => {
  return (
    <div className={className}>
      {NAV.map((item, index) => renderItem(item, index))}
    </div>
  );
};

export default MenuList;
