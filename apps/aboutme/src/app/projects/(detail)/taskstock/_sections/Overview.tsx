import Section from "../../../_components/Section";

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
          href="https://github.com/hwanheejung/TaskStock-App-Client"
          className="block underline opacity-60 hover:text-main"
        >
          Github Repository
        </a>
        <a
          href="https://hwanheejung.tistory.com/category/Projects%2CActivity/TaskStock%28RN%29"
          className="block underline opacity-60 hover:text-main"
        >
          Tech Blog
        </a>
      </div>
    </Section.Table>
    <Section.Divider />
    <Section.Table>
      <div className="pr-3">
        <h3>Timeline & Status</h3>
        <p className="opacity-60">Nov '23 - Mar '24, Sunset</p>
      </div>
      <div className="pr-3">
        <h3>Team</h3>
        <p className="opacity-60">FE 2</p>
        <p className="opacity-60">BE 2</p>
        <p className="opacity-60">Designer 1</p>
      </div>
      <div className="pr-3">
        <h3>Responsibilities</h3>
        <p className="opacity-60">Frontend Developer</p>
      </div>
      <div className="pr-3">
        <h3>FE Tech Stack</h3>
        <p className="opacity-60">React Native</p>
        <p className="opacity-60">TypeScript</p>
        <p className="opacity-60">Redux Toolkit</p>
        <p className="opacity-60">Firebase</p>
      </div>
    </Section.Table>
  </Section>
);

export default Overview;
