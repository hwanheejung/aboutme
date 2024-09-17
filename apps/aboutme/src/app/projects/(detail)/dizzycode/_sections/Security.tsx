import Section from "@/components/Layouts/Section";

const Security = () => {
  return (
    <Section>
      <Section.Header title="JWT" subTitle="Security" type="secondary" />
      <Section.Body title="HTTP">
        <div>Explanation...</div>
      </Section.Body>
      <Section.Header
        title="Websocket Connection"
        subTitle="Security"
        type="secondary"
      />
      <Section.Body title="Problem: Can't we just use JWT?">
        <p>Let's first understand the process of a Websocket connection.</p>
        <strong>1. Initial HTTP Request: </strong>
        <p>
          The WebSocket connection begins with an initial HTTP GET request,
          which includes an "Upgrade" header asking to switch the protocol to
          WebSocket.
        </p>
        {/* <pre>
              <code>
                GET /ws HTTP/1.1 Host: localhost:8080 Upgrade: websocket
                Connection: Upgrade Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
                Sec-WebSocket-Version: 13
              </code>
            </pre> */}

        <strong>2. Server Response:</strong>
        <p>
          The server approves the WebSocket upgrade with a "101 Switching
          Protocols" response.
        </p>
        {/* <pre>
              HTTP/1.1 101 Switching Protocols Upgrade: websocket Connection:
              Upgrade Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
            </pre> */}

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
      <Section.Body title="Solution 1: Including JWT Token in Query String">
        <strong>PROS</strong>
        <ul>
          <li>
            The WebSocket URL, unlike an HTTP URL, is not easily exposed, making
            it difficult for unauthorized users to access.
          </li>
          <li>
            It is minimally exposed through the JavaScript API, meaning that the
            information included in the query string is unlikely to be leaked
            through other web APIs.
          </li>
          <li>
            When using the Authorization header, you'd have to handle a 401
            (Unauthorized) response, but WebSocket APIs do not expose error
            responses to the page for security reasons.
          </li>
          <li>
            Including a short-lived authentication token in the query string may
            currently be the most practical and secure approach.
          </li>
        </ul>
        <strong>CONS</strong>
        <ul>
          <li>
            While technically viable, there’s often a lingering concern about
            security when sensitive information like a token is included in the
            URL, even if the actual risk is low.
          </li>
        </ul>
      </Section.Body>
      <Section.Body title="Solution 2: Sending the Authentication Token with the First WebSocket Message">
        <p>
          In this method, after the WebSocket connection is established, the
          client sends the authentication token{" "}
          <strong>as part of the first message.</strong> This means the token is
          not included in the headers during the initial connection, but
          instead, the client sends a separate authentication message to the
          server once the connection is set up.
        </p>
        <strong>PROS</strong>
        <ul>
          <li>
            <strong>Separation of concerns:</strong> The WebSocket connection
            setup is separated from the authentication process, which can be
            cleaner in terms of code organization.
          </li>
          <li>
            <strong>Token not included in URL or headers:</strong> This method
            avoids placing sensitive information like the JWT token in either
            the query string or the headers during the initial connection,
            reducing exposure risks.
          </li>
        </ul>
        <strong>CONS</strong>
        <ul>
          <li>
            <strong>Resource inefficiency:</strong> Allowing unauthenticated
            WebSocket connections, even temporarily, can waste server resources
            as the server has to handle these connections before determining
            their validity.
          </li>
          <li>
            <strong>Additional overhead:</strong> This adds a bit of complexity
            to the communication protocol since the server must now wait for a
            separate authentication message after the WebSocket connection is
            established, introducing a small delay.
          </li>
        </ul>
      </Section.Body>
      <Section.Body title="Solution 3: Sending Token via Sec-WebSocket-Protocol">
        <p>
          In this solution, the JWT token is included in the{" "}
          <code>Sec-WebSocket-Protocol</code> header when establishing the
          WebSocket connection. The server then extracts and verifies the JWT
          token from this header using a <code>HandshakeInterceptor</code>.
        </p>
        <strong>PROS</strong>
        <ul>
          <li>
            <strong>Token not included in URL or query string:</strong> This
            method avoids the risk of exposing the JWT token in the URL or query
            string, enhancing security against token leakage.
          </li>
          <li>
            <strong>Simplified token transmission:</strong> By utilizing the
            WebSocket protocol header, this method reduces the need for
            additional messaging once the connection is established,
            streamlining the authentication process.
          </li>
        </ul>
        <strong>CONS</strong>
        <ul>
          <li>
            <strong>Limited browser support:</strong> Not all browsers fully
            support passing authentication tokens through the{" "}
            <code>Sec-WebSocket-Protocol</code> header, which may lead to
            compatibility issues across different platforms.
          </li>
          <li>
            <strong>Misuse of the header:</strong> The{" "}
            <code>Sec-WebSocket-Protocol</code> header is primarily intended for
            protocol negotiation, not for authentication, making this approach
            feel like a workaround rather than a proper solution.
          </li>
          <li>
            <strong>Complex token management:</strong> Since this header can
            contain multiple values, managing authentication tokens within it
            may become unnecessarily complicated, especially in cases where
            multiple protocols are negotiated.
          </li>
        </ul>
      </Section.Body>

      <Section.Body title="✅ Solution 4: Introducing Secondary Token (ST) – Our Decision">
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
    </Section>
  );
};

export default Security;
