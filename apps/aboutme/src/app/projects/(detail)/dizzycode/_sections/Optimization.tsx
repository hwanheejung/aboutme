import Section from "@/components/Layouts/Section";

const Optimization = () => {
  return (
    <Section>
      <Section.Header
        title="Caching Strategy"
        subTitle="Optimization"
        type="secondary"
      />
      <Section.Body title="TanStack Query">
        <div>Explanation...</div>
      </Section.Body>

      <Section.Header
        title="State Management Separation"
        subTitle="Optimization"
        type="secondary"
      />
      <Section.Body title="Server State Management: TanStack Query">
        <div>Explanation...</div>
      </Section.Body>
      <Section.Body title="Client State Management: Zustand">
        <div>Explanation...</div>
      </Section.Body>

      <Section.Header
        title="Lighthouse"
        subTitle="Optimization"
        type="secondary"
      />
      <Section.Body title="Performance Metrics">
        <div>Explanation...</div>
      </Section.Body>
    </Section>
  );
};

export default Optimization;
