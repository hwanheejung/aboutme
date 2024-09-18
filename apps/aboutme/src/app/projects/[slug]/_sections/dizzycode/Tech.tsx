import Process from "@/components/Layouts/Process";
import Section from "@/components/Layouts/Section";
import Security from "./Security";
import Websocket from "./Websocket";
import OpenVidu from "./OpenVidu";
import Optimization from "./Optimization";

const Tech = () => (
  <>
    <Section>
      <Section.Header
        title="Key Features and Technical Decisions"
        subTitle="our considerations"
      />
      <Process>
        <Process.Item num={1} title="Security" lists={["WebSocket+JWT"]} />
        <Process.Item
          num={2}
          title="Websocket"
          lists={[
            "Messaging",
            "User Status Tracking",
            "Notifications",
            "Recovering Abnormal Closure",
          ]}
        />
        <Process.Item
          num={3}
          title="Video Conference"
          lists={["1:1, N:N", "OpenVidu", "Architecture", "Screen Share"]}
        />
        <Process.Item
          num={4}
          title="Optimization"
          lists={["Caching", "State Management", "Lighthouse"]}
        />
      </Process>
      <Security />
      <Websocket />
      <OpenVidu />
      <Optimization />
    </Section>
  </>
);

export default Tech;
