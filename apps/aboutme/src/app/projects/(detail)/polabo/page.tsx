import { PROJECTS } from "contents/projects/data";
import Intro from "../../_components/Intro";
import Navigator from "../../_components/Navigator";
import Overview from "./_sections/Overview";
import Tech from "./_sections/Tech";
import Reflection from "./_sections/Reflection";
import MVPTimeline from "./_sections/MVPTimeline";
import TechReflection from "./_sections/TechReflection";

const PolaboPage = () => {
  const data = PROJECTS.POLABO;
  return (
    <div>
      <Navigator />
      <Intro data={data} />
      <Overview />
      <MVPTimeline />
      <Tech />
      <TechReflection />
      <Reflection />
    </div>
  );
};

export default PolaboPage;
