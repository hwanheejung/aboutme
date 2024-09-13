import Section from "../../../_components/Section";

const MainFeatures = () => {
  return (
    <Section>
      <Section.Header title="Main Features" subTitle="about" />
      <Section.Table>
        <div>
          <p className="opacity-60">1:1, N:N Chat</p>
          <p className="opacity-60">Drag & Drop File Upload</p>
          <p className="opacity-60">Real Time On/Offline Status Tracking</p>
          <p className="opacity-60">Video Conference</p>
          <p className="opacity-60">Screen Share</p>
          <p className="opacity-60">Search & Join Room</p>
          <p className="opacity-60">Add Friend</p>
        </div>
      </Section.Table>
    </Section>
  );
};

export default MainFeatures;
