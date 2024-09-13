import Section from "../../../_components/Section";

const Overview = () => (
  <Section>
    <Section.Header title="DizzyCode Overview" subTitle="process highlights" />
    <Section.Table>
      <div className="pr-3">
        <h3>Focus</h3>
        <p className="opacity-60"></p>
      </div>
      <div className="pr-3">
        <h3>Links</h3>
        <a
          href="https://github.com/DizzyCode2024/client"
          className="block underline opacity-60 hover:text-main"
        >
          Github Repository
        </a>
        <a
          href="https://hwanheejung.tistory.com/category/Projects%2CActivity/DizzyCode%28React%29"
          className="block underline opacity-60 hover:text-main"
        >
          Tech Blog
        </a>
      </div>
    </Section.Table>
    <Section.Divider />
    <Section.Table>
      <div className="pr-3">
        <h3>Timeline</h3>
        <p className="opacity-60">Jun - Aug 2024</p>
      </div>
      <div className="pr-3">
        <h3>Team</h3>
        <p className="opacity-60">4</p>
      </div>
      <div className="pr-3">
        <h3>Responsibilities</h3>
        <p className="opacity-60">Frontend Developer</p>
        <p className="opacity-60">Frontend Deployment</p>
      </div>
      <div className="pr-3">
        <h3>FE Tech Stack</h3>
        <p className="opacity-60">React</p>
        <p className="opacity-60">TypeScript</p>
        <p className="opacity-60">TanStack Query</p>
        <p className="opacity-60">Zustand</p>
        <p className="opacity-60">ChakraUI</p>
        <p className="opacity-60">Styled-Components</p>
      </div>
    </Section.Table>
  </Section>
);

export default Overview;
