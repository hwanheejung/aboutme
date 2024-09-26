import { twMerge } from "tailwind-merge";

interface HeaderProps {
  title: string;
  subTitle?: string;
  type?: "primary" | "secondary";
}

const Header = ({ title, subTitle, type = "primary" }: HeaderProps) => {
  const textColor = () => {
    if (type === "primary") {
      return "text-accent-yellow";
    } else {
      return "text-primary";
    }
  };

  return (
    <div
      className={`border-b border-b-primary/30 pb-3 ${type === "primary" ? "pt-16" : "pt-10"}`}
    >
      {subTitle && (
        <span className="mb-2 block text-sm font-thin uppercase tracking-widest">
          {subTitle}
        </span>
      )}
      <div className={twMerge(`text-3xl font-bold text-primary`, textColor())}>
        {title}
      </div>
    </div>
  );
};

export default Header;
