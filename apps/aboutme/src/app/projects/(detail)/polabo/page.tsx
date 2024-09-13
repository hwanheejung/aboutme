import { PROJECTS } from "contents/projects/data";
import Intro from "../../_components/Intro";
import Navigator from "../../_components/Navigator";
import Overview from "./_sections/Overview";
import Process from "./_sections/Process";
import Reflection from "./_sections/Reflection";
import MVPTimeline from "./_sections/MVPTimeline";

const PolaboPage = () => {
  const data = PROJECTS.POLABO;
  return (
    <div>
      <Navigator />
      <Intro data={data} />
      <Overview />
      <MVPTimeline />
      <Process />
      <Reflection />
    </div>
  );
};

export default PolaboPage;
