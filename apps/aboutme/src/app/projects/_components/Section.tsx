import { ReactNode, Children } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-5">{children}</div>;
};

const Header = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <div className="border-b border-b-primary/30 pb-5 pt-24">
      {subTitle && (
        <span className="mb-2 block text-xs font-thin uppercase tracking-widest opacity-60">
          {subTitle}
        </span>
      )}
      <h2 className="text-2xl text-main">{title}</h2>
    </div>
  );
};

const Body = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

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

const Divider = () => <div className="h-px w-full bg-primary/30"></div>;

Section.Body = Body;
Section.Divider = Divider;
Section.Table = Table;
Section.Header = Header;
export default Section;
