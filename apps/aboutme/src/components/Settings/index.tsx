import Language from "./Language";
import Theme from "./Theme";

const Settings = () => {
  return (
    <div className="sticky top-0 left-0 bg-main bg-opacity-70 h-10 w-full flex items-center px-10 gap-4">
      <Theme />
      <div className="w-px bg-primary h-4" />
      <Language />
    </div>
  );
};

export default Settings;
