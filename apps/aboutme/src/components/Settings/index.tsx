import Language from "./Language";
import Theme from "./Theme";

const Settings = () => {
  return (
    <div className="sticky left-0 top-0 flex h-10 w-full items-center gap-4 bg-main bg-opacity-70 px-10">
      <Theme />
      <div className="h-4 w-px bg-primary" />
      <Language />
    </div>
  );
};

export default Settings;
