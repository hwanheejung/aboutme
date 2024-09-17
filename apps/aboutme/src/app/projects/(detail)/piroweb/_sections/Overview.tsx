import Section from "../../../../../components/Layouts/Section";

const Overview = () => (
  <Section>
    <Section.Header title="DizzyCode Overview" subTitle="process highlights" />
    <Section.Table>
      <div className="pr-3">
        <h3>Focus</h3>
        <p className="opacity-60"></p>
      </div>
    </Section.Table>
    <Section.Divider />
    <Section.Table>
      <div className="pr-3">
        <h3>Timeline & Status</h3>
        <p className="opacity-60">Nov '23, handed off</p>
      </div>
      <div className="pr-3">
        <h3>Team</h3>
        <p className="opacity-60">FE 1</p>
        <p className="opacity-60">BE 1</p>
      </div>
      <div className="pr-3">
        <h3>Responsibilities</h3>
        <p className="opacity-60">Frontend Developer</p>
      </div>
      <div className="pr-3">
        <h3>FE Tech Stack</h3>
        <p className="opacity-60">Django</p>
        <p className="opacity-60">vanilla js</p>
      </div>
    </Section.Table>
  </Section>
);

export default Overview;
