import Section from "@/components/Layouts/Section";
import Image from "@/components/Image";

const Overview = () => (
  <Section>
    <Section.Header title="Project Overview" subTitle="process highlights" />
    <Section.Table>
      <div className="pr-3">
        <h3>Focus</h3>
        <p className="opacity-60">
          Built <strong className="font-normal text-main">real-time</strong>{" "}
          chat and video conferencing features using WebSocket and WebRTC.
          Worked on state management, ensuring secure authentication, and
          optimizing frontend performance for smooth user interactions.
        </p>
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
        <h3>Timeline & Status</h3>
        <p className="opacity-60">Jun - Aug '24, Sunset</p>
      </div>
      <div className="pr-3">
        <h3>Team</h3>
        <p className="opacity-60">Frontend 2</p>
        <p className="opacity-60">Backend 2</p>
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
    <div className="h-5 w-full" />
    <Section.Body title="System Architecture">
      <Image
        src={"/projects/dizzycode/comm_arch.png"}
        width={700}
        height={400}
        alt="communication architecture"
        className="mx-auto mt-5"
      />
    </Section.Body>
    <Section.Body title="User Flow Chart">
      <Image
        src={"/projects/dizzycode/flow_chart.png"}
        width={700}
        height={400}
        alt="communication architecture"
        className="mx-auto mt-5"
      />
    </Section.Body>
  </Section>
);

export default Overview;
