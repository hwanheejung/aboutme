import { Children, ReactNode } from "react";

const Table = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${Children.count(children)}, minmax(0, 1fr))`,
      }}
    >
      {children}
    </div>
  );
};

export default Table;
