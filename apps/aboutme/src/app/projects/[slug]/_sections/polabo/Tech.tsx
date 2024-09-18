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
          title="Image Optimization"
          lists={["Compression", "Next/Image"]}
        />
      </Process>
    </Section>
  </>
);

export default Tech;
