import Section from "@/app/projects/_components/Section";
import Timeline from "@/app/projects/_components/Timeline";

const MVPTimeline = () => (
  <Section>
    <Section.Header
      title="Release Timeline & Added Features"
      subTitle="Major Milestones for MVP Development"
    />
    <Timeline>
      <Timeline.Item
        date="7.24"
        title="Beta Launch: Core Features"
        lists={[
          "Create Board",
          "Upload and Display Polaroid Photos",
          "Share Boards via Link",
        ]}
      />
      <Timeline.Item
        date="8.21"
        title="2nd Iteration: Login Integration"
        lists={["Kakao Login"]}
      />
      <Timeline.Item
        date="8.29"
        title="3rd Iteration: Social Sharing & UI Overhaul"
        lists={[
          "Share Boards on Social Media",
          "My Board Page",
          "Revamped User Interface",
        ]}
      />
      <Timeline.Item
        date="9.14"
        title="4th Iteration: Customization & Save Options"
        lists={[
          "Export Board as Image",
          "Board Sticker",
          "New Polaroid Frame Designs",
        ]}
      />
      <Timeline.Item date="9.26" title="Final Presentation" lists={[]} />
    </Timeline>
  </Section>
);

export default MVPTimeline;
