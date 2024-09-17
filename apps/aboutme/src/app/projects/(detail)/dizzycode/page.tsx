import { PROJECTS } from "contents/projects/data";
import Intro from "../../_components/Intro";
import Navigator from "../../_components/Navigator";
import Overview from "./_sections/Overview";
import Reflection from "./_sections/Reflection";
import Tech from "./_sections/Tech";

const DizzycodePage = () => {
  const data = PROJECTS.DIZZYCODE;
  return (
    <div>
      <Navigator />
      <Intro data={data} subTitle="Real-Time Chat, Video Conference" />
      <Overview />
      <Tech />
      <Reflection />
    </div>
  );
};

export default DizzycodePage;
