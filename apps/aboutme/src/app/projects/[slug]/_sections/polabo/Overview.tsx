import Section from "../../../../../components/Layouts/Section";

const Overview = () => (
  <Section>
    <Section.Header title="Polabo Overview" subTitle="process highlights" />
    <Section.Table>
      <div className="pr-3">
        <h3>Focus</h3>
        <p className="opacity-60"></p>
      </div>
      <div className="pr-3">
        <h3>Links</h3>
        <a
          href="https://polabo.site/"
          className="block underline opacity-60 hover:text-main"
        >
          Release
        </a>
        <a
          href="https://github.com/DDD-Community/DDD-11-Sonny-Polabo-FE"
          className="block underline opacity-60 hover:text-main"
        >
          Github Repository
        </a>
        <a
          href="https://hwanheejung.tistory.com/category/Projects%2CActivity/DDD%28Next%29"
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
        <p className="opacity-60">Jun '24 - Current, 3rd MVP Released</p>
      </div>
      <div className="pr-3">
        <h3>Team</h3>
        <p className="opacity-60">Product Manager 1</p>
        <p className="opacity-60">Frontend 2</p>
        <p className="opacity-60">Backend 1</p>
        <p className="opacity-60">Designer 2</p>
      </div>
      <div className="pr-3">
        <h3>Responsibilities</h3>
        <p className="opacity-60">Frontend Developer</p>
      </div>
      <div className="pr-3">
        <h3>FE Tech Stack</h3>
        <p className="opacity-60">Next.js</p>
        <p className="opacity-60">TypeScript</p>
        <p className="opacity-60">Tailwind.css</p>
      </div>
    </Section.Table>
  </Section>
);

export default Overview;
