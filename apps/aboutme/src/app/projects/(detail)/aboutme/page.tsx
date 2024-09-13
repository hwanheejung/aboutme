import { PROJECTS } from "contents/projects/data";
import Navigator from "../../_components/Navigator";
import Intro from "../../_components/Intro";
import Section from "../../_components/Section";

const AboutmePage = () => {
  const data = PROJECTS.ABOUTME;
  return (
    <div>
      <Navigator />
      <Intro data={data} />
      <Section>
        <Section.Header
          title="Aboutme Overview"
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

export default AboutmePage;
