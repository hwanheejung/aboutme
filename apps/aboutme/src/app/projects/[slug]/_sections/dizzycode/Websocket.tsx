import Callout from "@/components/Layouts/Callout";
import Section from "@/components/Layouts/Section";
import Image from "@/components/Image";

const Websocket = () => {
  return (
    <Section>
      <Section.Header
        title="Sock.js + STOMP"
        subTitle="WebSocket"
        type="secondary"
      />
      <Section.Body title="🤔 Problem 1: Limited Browser Support">
        <p>
          While the <code>Can I use</code> website indicates that most modern
          browsers support WebSocket, it's important to note that{" "}
          <strong>
            {" "}
            it does not support in older versions and specific environments.
          </strong>{" "}
          This limitation can affect the reach and compatibility of applications
          relying solely on WebSocket.
        </p>

        <Image
          src={"/blog/dizzycode/2.png"}
          alt="can I use"
          width={600}
          height={400}
          description="https://caniuse.com/?search=websocket"
        />
      </Section.Body>
      <Section.Body title="✅ Solution: Fallback Mechanism">
        <p>
          Environments that do not support Websocket can use{" "}
          <strong>
            alternative technologies such as polling, long polling, streaming
          </strong>
          , etc. This fallback mechanism is used to address browser
          compatibility issues, and libraries like <strong>SockJS</strong> or{" "}
          <strong>Socket.IO</strong> utilize it.
        </p>
      </Section.Body>
      <Section.Body title="🤔 Problem 2: Data is Too Raw">
        <p>
          The WebSocket protocol allows for the transmission of text and binary
          frames, but{" "}
          <strong>
            it doesn't provide a predefined format or structure for messages.
          </strong>{" "}
          This lack of structure presents several issues:
        </p>
        <ul>
          <li>
            As projects grow, developers must design and manage complex logic
            for:
            <ul>
              <li>Determining message types</li>
              <li>Handling message transmission between client and servern</li>
              <li>Parsing incoming messages</li>
            </ul>
          </li>
          <li>
            The flexibility in data types and message structures, while offering
            freedom, also introduces the{" "}
            <strong>burden of definition and management.</strong>
          </li>
          <li>
            Without a standardized approach, maintaining consistency in message
            handling across different parts of the application can become
            increasingly difficult.
          </li>
        </ul>
        <p>
          These issues highlight{" "}
          <strong>the need for additional protocols atop WebSocket</strong> to
          provide more <strong>structured communication</strong> in complex
          applications.
        </p>
      </Section.Body>
      <Section.Body title="✅ Solution: STOMP Protocol">
        <p>
          When using STOMP, messages are managed in a more structured format,
          enabling clear communication STOMP stands for Simple Text Oriented
          Messaging Protocol, a subprotocol that can be used alongside
          WebSocket. STOMP frames consist of COMMAND, Headers, and Body.
        </p>
      </Section.Body>
      <Callout link="/blog/dizzy-stomp" />

      <Section.Header title="Messaging" subTitle="WebSocket" type="secondary" />
      <Section.Body title="Sth..">
        <div>Explanation...</div>
      </Section.Body>

      <Section.Header
        title="User Status Tracking"
        subTitle="WebSocket"
        type="secondary"
      />
      <Section.Body title="Logic">
        <div>Explanation...</div>
      </Section.Body>
      <Section.Header
        title="Notifications"
        subTitle="WebSocket"
        type="secondary"
      />
      <Section.Body title="Logic">
        <div>Explanation...</div>
      </Section.Body>

      <Section.Header
        title="Recovering Abnormal Closure"
        subTitle="WebSocket"
        type="secondary"
      />
      <Section.Body title="Logic">
        <div>Explanation...</div>
      </Section.Body>
    </Section>
  );
};

export default Websocket;
