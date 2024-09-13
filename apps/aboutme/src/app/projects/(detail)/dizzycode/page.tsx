import { PROJECTS } from "contents/projects/data";
import Intro from "../../_components/Intro";
import Section from "../../_components/Section";
import Navigator from "../../_components/Navigator";

const DizzycodePage = () => {
  const data = PROJECTS.DIZZYCODE;
  return (
    <div>
      <Navigator />
      <Intro data={data} />
      <Section>
        <Section.Header
          title="DizzyCode Overview"
          subTitle="process highlights"
        />
      </Section>
      <Section>
        <Section.Header title="The Process" />
      </Section>
      <Section>
        <Section.Header title="Next Steps" subTitle="reflection" />
      </Section>
    </div>
  );
};

export default DizzycodePage;
