import { PROJECTS } from "contents/projects/data";
import Intro from "../../_components/Intro";
import Navigator from "../../_components/Navigator";
import MainFeatures from "./_sections/MainFeatures";
import Overview from "./_sections/Overview";
import Reflection from "./_sections/Reflection";

const DizzycodePage = () => {
  const data = PROJECTS.DIZZYCODE;
  return (
    <div>
      <Navigator />
      <Intro data={data} />
      <Overview />
      <MainFeatures />
      <Reflection />
    </div>
  );
};

export default DizzycodePage;
