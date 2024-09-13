import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const Header = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <div className="border-b border-b-primary/30 pb-5 pt-24">
      {subTitle && (
        <span className="mb-2 block text-xs font-thin uppercase tracking-widest opacity-60">
          {subTitle}
        </span>
      )}
      <h2 className="text-2xl">{title}</h2>
    </div>
  );
};

Section.Header = Header;
export default Section;
