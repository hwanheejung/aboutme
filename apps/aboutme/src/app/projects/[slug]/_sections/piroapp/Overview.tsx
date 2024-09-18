import Section from "../../../../../components/Layouts/Section";

const Overview = () => (
  <Section>
    <Section.Header title="Overview" subTitle="process highlights" />
    <Section.Table>
      <div className="pr-3">
        <h3>Focus</h3>
        <p className="opacity-60"></p>
      </div>
      <div className="pr-3">
        <h3>Links</h3>
        <a
          href="https://github.com/Pironeer-APP/client"
          className="block underline opacity-60 hover:text-main"
        >
          Github Repository
        </a>
      </div>
    </Section.Table>
    <Section.Divider />
    <Section.Table>
      <div className="pr-3">
        <h3>Timeline & Status</h3>
        <p className="opacity-60">Sep - Oct '23, Sunset</p>
      </div>
      <div className="pr-3">
        <h3>Team</h3>
        <p className="opacity-60">FE 2</p>
        <p className="opacity-60">BE 4</p>
      </div>
      <div className="pr-3">
        <h3>Responsibilities</h3>
        <p className="opacity-60">Frontend Developer</p>
      </div>
      <div className="pr-3">
        <h3>FE Tech Stack</h3>
        <p className="opacity-60">React Native</p>
      </div>
    </Section.Table>
  </Section>
);

export default Overview;
