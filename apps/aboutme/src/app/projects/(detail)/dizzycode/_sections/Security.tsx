import Callout from "@/components/Layouts/Callout";
import Section from "@/components/Layouts/Section";
import Link from "next/link";

const Security = () => {
  return (
    <Section>
      <Section.Header
        title="Websocket + JWT Scenario"
        subTitle="Security"
        type="secondary"
      />
      <Section.Body title="🤔 Problem: Can't include custom headers">
        <p>Let's first understand the process of a Websocket connection.</p>
        <strong>1. Initial HTTP Request: </strong>
        <p>
          The WebSocket connection begins with an initial HTTP GET request,
          which includes an "Upgrade" header asking to switch the protocol to
          WebSocket.
        </p>

        <strong>2. Server Response:</strong>
        <p>
          The server approves the WebSocket upgrade with a "101 Switching
          Protocols" response.
        </p>

        <strong>3. Protocol Upgrade:</strong>
        <p>
          At this point, the HTTP protocol is upgraded to WebSocket, and further
          communication occurs through WebSocket frames rather than HTTP
          headers.
        </p>

        <p>
          In other words,{" "}
          <strong>
            custom headers are only valid during the initial GET request.
          </strong>{" "}
          At this stage, it might make sense to try sending tokens via custom
          headers. However, once the WebSocket connection is established, all
          further communication is done via WebSocket frames, and HTTP headers
          are no longer used. Additionally,{" "}
          <strong>
            browsers do not allow certain custom headers to be included in
            WebSocket upgrade requests
          </strong>{" "}
          due to security reasons, such as preventing CSRF attacks.
        </p>
      </Section.Body>

      <Section.Body title="✅ Solution: Introducing Secondary Token">
        <p>
          <strong>
            Including a short-lived authentication token in the query string
          </strong>{" "}
          may be the most practical and secure approach.
        </p>
        <p>
          For convenience, I’ll refer to this as ST. This method solves the
          security issues I've encountered. Let’s go over the logic step by
          step:
        </p>
        <div className="box">
          <strong>[CLIENT]</strong>
          <ul>
            <li>The client requests an ST using the JWT</li>
          </ul>

          <strong>[SERVER]</strong>
          <ul>
            <li>
              The server receives the JWT, verifies it, and issues the ST.
            </li>
            <li>
              The ST has a very short lifespan, typically around 30 seconds.
            </li>
          </ul>
          <strong>[CLIENT]</strong>
          <ul>
            <li>
              The client includes the ST in the query parameters when requesting
              the WebSocket upgrade.
            </li>
          </ul>
          <strong>[SERVER]</strong>
          <ul>
            <li>
              The server extracts and verifies the ST using a{" "}
              <code>HandshakeInterceptor</code>.
            </li>
          </ul>
        </div>
        <p>
          Once the WebSocket upgrade is complete, the STOMP connection and
          message transmission use the JWT.
        </p>
        <strong>Advantages of this Method</strong>
        <ul>
          <li>
            <strong>Short-lived ST:</strong> Since the ST has a very short
            lifespan, even if exposed, the risk is minimal.
          </li>
          <li>
            <strong>Limited scope:</strong> The ST is used solely for the
            WebSocket upgrade process, meaning it has more restricted
            permissions compared to a general access token.
          </li>
          <li>
            <strong>Independent management of WebSocket and JWT: </strong>Using
            an ST allows us to manage the WebSocket connection state
            independently of the JWT’s state. Even if the access token expires,
            we can request a new one before establishing the WebSocket
            connection, keeping the logic cleanly separated.
          </li>
        </ul>
      </Section.Body>
      <Callout link="/blog/dizzy-jwt" />
    </Section>
  );
};

export default Security;
