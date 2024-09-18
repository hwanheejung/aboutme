import Process from "@/components/Layouts/Process";
import Section from "@/components/Layouts/Section";

const Tech = () => (
  <>
    <Section>
      <Section.Header
        title="Key Features and Technical Decisions"
        subTitle="our considerations"
      />
      <Process>
        <Process.Item
          num={1}
          title="JWT"
          lists={[
            "Multi Device Support",
            "Background Auto-Login",
            "Social Login",
          ]}
        />
        <Process.Item
          num={2}
          title="Architecture"
          lists={["Atomic Design Pattern"]}
        />
        <Process.Item num={3} title="Deployment" lists={["iOS"]} />
      </Process>
    </Section>
  </>
);

export default Tech;
