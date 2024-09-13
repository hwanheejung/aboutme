import { PROJECTS } from "contents/projects/data";
import Navigator from "../../_components/Navigator";
import Intro from "../../_components/Intro";
import Section from "../../_components/Section";
import Overview from "./_sections/Overview";

const PiroWebPage = () => {
  const data = PROJECTS.PIROGRAMMING_WEB;
  return (
    <div>
      <Navigator />
      <Intro data={data} />
      <Overview />
      <Section>
        <Section.Header title="The Process" />
      </Section>
      <Section>
        <Section.Header title="Next Steps" subTitle="reflection" />
      </Section>
    </div>
  );
};

export default PiroWebPage;
