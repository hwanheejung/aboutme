import { PROJECTS } from "contents/projects/data";
import Intro from "../../_components/Intro";
import Navigator from "../../_components/Navigator";
import Overview from "./_sections/Overview";
import Reflection from "./_sections/Reflection";
import Tech from "./_sections/Tech";
import TechReflection from "./_sections/TechReflection";

const TaskStockPage = () => {
  const data = PROJECTS.TASKSTOCK;
  return (
    <div>
      <Navigator />
      <Intro data={data} />
      <Overview />
      <Tech />
      <TechReflection />
      <Reflection />
    </div>
  );
};

export default TaskStockPage;
