// REFACTORED
import styles from './CaseStudyDiagram.module.css';

interface BoxProps {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines?: string[];
}

const Box = ({ x, y, w, h, title, lines = [] }: BoxProps) => {
  const titleY = lines.length ? y + 30 : y + h / 2 + 5;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={12} className={styles.box} />
      <text x={x + w / 2} y={titleY} textAnchor="middle" className={styles.boxTitle}>
        {title}
      </text>
      {lines.map((line, index) => (
        <text
          key={line}
          x={x + w / 2}
          y={titleY + 22 * (index + 1)}
          textAnchor="middle"
          className={styles.boxSub}
        >
          {line}
        </text>
      ))}
    </g>
  );
};

interface EdgeProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dashed?: boolean;
  label?: string;
}

const Edge = ({ x1, y1, x2, y2, dashed, label }: EdgeProps) => (
  <>
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      markerEnd="url(#cs-arrow)"
      className={`${styles.edge} ${dashed ? styles.dashed : ''}`.trim()}
    />
    {label ? (
      <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 6} textAnchor="middle" className={styles.edgeLabel}>
        {label}
      </text>
    ) : null}
  </>
);

const FitCallDiagram = () => (
  <svg
    viewBox="0 0 1000 660"
    className={styles.svg}
    role="img"
    aria-label="FitCall architecture: React Native and web clients call a Go API backed by PostgreSQL and Redis, integrating Apple, Google, FCM and Resend, with a Postman/Newman QA suite testing the API."
  >
    <defs>
      <marker id="cs-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
        <path d="M0,0 L7,3 L0,6 Z" className={styles.arrowHead} />
      </marker>
    </defs>

    {/* edges first, so boxes sit on top */}
    <Edge x1={500} y1={110} x2={465} y2={255} />
    <Edge x1={820} y1={110} x2={600} y2={255} />
    <Edge x1={140} y1={110} x2={312} y2={272} dashed label="regression" />
    <Edge x1={400} y1={375} x2={140} y2={545} />
    <Edge x1={470} y1={375} x2={330} y2={545} />
    <Edge x1={610} y1={375} x2={700} y2={520} />

    {/* clients + QA */}
    <Box x={40} y={40} w={200} h={70} title="QA" lines={['Postman · Newman']} />
    <Box x={380} y={40} w={240} h={70} title="Mobile App" lines={['React Native · Expo']} />
    <Box x={700} y={40} w={240} h={70} title="Web" lines={['fitcall.me']} />

    {/* API */}
    <Box
      x={300}
      y={255}
      w={400}
      h={120}
      title="FitCall API"
      lines={['Go · Gin', 'Handlers → Services → Repositories']}
    />

    {/* data + integrations */}
    <Box x={40} y={545} w={190} h={70} title="PostgreSQL" lines={['primary store']} />
    <Box x={260} y={545} w={150} h={70} title="Redis" lines={['availability cache']} />
    <Box
      x={470}
      y={520}
      w={470}
      h={120}
      title="External services"
      lines={['Apple Sign-In · StoreKit 2', 'Google IAP · Google Meet', 'FCM Push · Resend Email']}
    />
  </svg>
);

const GenderizeDiagram = () => (
  <svg
    viewBox="0 0 1000 410"
    className={styles.svg}
    role="img"
    aria-label="Genderize Wrapper architecture: a client calls the API through Caddy TLS; the API validates input and calls Genderize.io upstream, mapping errors to 400/404/422/502. GitHub Actions deploys the Docker container to AWS EC2."
  >
    <defs>
      <marker id="cs-arrow-g" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
        <path d="M0,0 L7,3 L0,6 Z" className={styles.arrowHead} />
      </marker>
    </defs>

    <text x={40} y={36} className={styles.bandLabel}>
      REQUEST FLOW
    </text>

    {/* request edges */}
    <line x1={190} y1={93} x2={250} y2={93} markerEnd="url(#cs-arrow-g)" className={styles.edge} />
    <line x1={400} y1={93} x2={460} y2={93} markerEnd="url(#cs-arrow-g)" className={styles.edge} />
    <line x1={780} y1={100} x2={840} y2={93} markerEnd="url(#cs-arrow-g)" className={styles.edge} />
    <line x1={620} y1={160} x2={620} y2={185} markerEnd="url(#cs-arrow-g)" className={styles.edge} />

    <Box x={40} y={60} w={150} h={66} title="Client" />
    <Box x={250} y={60} w={150} h={66} title="Caddy" lines={['TLS · HTTPS']} />
    <Box
      x={460}
      y={50}
      w={320}
      h={110}
      title="GenderClassifyApi"
      lines={['.NET 9 · :8080', 'Validator → Controller → Service']}
    />
    <Box x={840} y={60} w={130} h={66} title="Genderize.io" lines={['upstream']} />
    <Box
      x={460}
      y={185}
      w={320}
      h={66}
      title="GlobalExceptionMiddleware"
      lines={['400 · 404 · 422 · 502 envelopes']}
    />

    <text x={40} y={300} className={styles.bandLabel}>
      DELIVERY · CI/CD
    </text>

    <line x1={270} y1={353} x2={340} y2={353} markerEnd="url(#cs-arrow-g)" className={styles.edge} />
    <text x={305} y={345} textAnchor="middle" className={styles.edgeLabel}>
      SSH
    </text>

    <Box x={40} y={320} w={230} h={66} title="GitHub Actions" lines={['build · test · deploy']} />
    <Box
      x={340}
      y={320}
      w={320}
      h={66}
      title="AWS EC2 · Docker"
      lines={['127.0.0.1:8080 · behind Caddy']}
    />
  </svg>
);

const SwiftAuthDiagram = () => (
  <svg
    viewBox="0 0 1020 530"
    className={styles.svg}
    role="img"
    aria-label="SwiftAuth SDK architecture: an app wraps AuthProvider (AuthConfig), which exposes AuthContext consumed by AuthScreen and the useAuth hook; useAuth drives Firebase Auth (email, Google, Apple), an errorMapper producing typed exceptions, and AsyncStorage session with a Firebase token for the backend."
  >
    <defs>
      <marker id="cs-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
        <path d="M0,0 L7,3 L0,6 Z" className={styles.arrowHead} />
      </marker>
    </defs>

    {/* vertical spine */}
    <Edge x1={500} y1={76} x2={500} y2={108} />
    <Edge x1={500} y1={188} x2={500} y2={220} />
    <Edge x1={500} y1={268} x2={500} y2={300} />
    <Edge x1={500} y1={384} x2={500} y2={440} />
    {/* consumers + services */}
    <Edge x1={330} y1={342} x2={375} y2={342} label="consumes" />
    <Edge x1={430} y1={384} x2={250} y2={440} />
    <Edge x1={570} y1={384} x2={770} y2={440} />

    <Box x={400} y={24} w={200} h={52} title="Your App" />
    <Box
      x={355}
      y={108}
      w={290}
      h={80}
      title="AuthProvider"
      lines={['AuthConfig · Firebase init', 'persistence: local | memory']}
    />
    <Box x={400} y={220} w={200} h={48} title="AuthContext" />
    <Box
      x={375}
      y={300}
      w={250}
      h={84}
      title="useAuth()"
      lines={['user · status · error · isLoading', 'signIn / signUp · signOut · reset']}
    />
    <Box
      x={60}
      y={302}
      w={270}
      h={80}
      title="AuthScreen"
      lines={['LoginForm · SignUpForm', 'PasswordInput']}
    />
    <Box
      x={375}
      y={440}
      w={250}
      h={66}
      title="Firebase Auth"
      lines={['Email/Pwd · Google · Apple']}
    />
    <Box
      x={60}
      y={440}
      w={270}
      h={66}
      title="errorMapper"
      lines={['→ typed AuthException']}
    />
    <Box
      x={670}
      y={440}
      w={290}
      h={66}
      title="Session · AsyncStorage"
      lines={['user.token → backend']}
    />
  </svg>
);

const InsightaDiagram = () => (
  <svg
    viewBox="0 0 1020 440"
    className={styles.svg}
    role="img"
    aria-label="Insighta Labs+ architecture: a C# CLI and web client call the ASP.NET Core backend (OAuth, RBAC, CSV ingestion, NL query), which uses SQLite and reaches inference APIs; a separate live .NET 9 Genderize microservice sits alongside."
  >
    <defs>
      <marker id="cs-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
        <path d="M0,0 L7,3 L0,6 Z" className={styles.arrowHead} />
      </marker>
    </defs>

    <Edge x1={245} y1={106} x2={430} y2={168} />
    <Edge x1={555} y1={106} x2={560} y2={168} />
    <Edge x1={430} y1={268} x2={300} y2={350} />
    <Edge x1={620} y1={268} x2={700} y2={350} />

    <Box x={130} y={40} w={230} h={66} title="Insighta CLI" lines={['C# · dotnet tool']} />
    <Box x={440} y={40} w={230} h={66} title="Web client" lines={['HNGinsighta-Web']} />
    <Box
      x={250}
      y={168}
      w={520}
      h={100}
      title="Insighta Backend"
      lines={[
        'ASP.NET Core · EF Core · SQLite (WAL)',
        'GitHub OAuth+PKCE · JWT · admin/analyst RBAC',
        'CSV ingestion · NL query · cached export',
      ]}
    />
    <Box
      x={120}
      y={350}
      w={360}
      h={66}
      title="Inference APIs"
      lines={['Genderize · Agify · Nationalize']}
    />
    <Box
      x={520}
      y={350}
      w={420}
      h={66}
      title="Genderize microservice · .NET 9"
      lines={['live · EC2 + Caddy · CI/CD']}
    />
  </svg>
);

const XentalDiagram = () => (
  <svg
    viewBox="0 0 1000 620"
    className={styles.svg}
    role="img"
    aria-label="Xental architecture: a React dashboard, parent app and school systems (via a public API key) call the PayLibre .NET API, which consumes the Xental payments platform (sub-merchants, dedicated virtual accounts, settlement) over Nomba. Xental posts signed deposit.reconciled webhooks back to PayLibre, which reconciles against PostgreSQL. A background worker runs reminders, late fees and delivers signed outbound webhooks to schools. It runs on AWS EC2 behind Traefik, deployed by GitHub Actions."
  >
    <defs>
      <marker id="cs-arrow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
        <path d="M0,0 L7,3 L0,6 Z" className={styles.arrowHead} />
      </marker>
    </defs>

    {/* edges */}
    <Edge x1={165} y1={110} x2={400} y2={205} />
    <Edge x1={500} y1={110} x2={500} y2={205} />
    <Edge x1={835} y1={110} x2={600} y2={205} dashed label="X-Api-Key" />
    <Edge x1={700} y1={250} x2={800} y2={250} label="client-creds" />
    <Edge x1={890} y1={300} x2={890} y2={360} />
    <Edge x1={800} y1={300} x2={620} y2={270} dashed label="deposit.reconciled · HMAC" />
    <Edge x1={410} y1={325} x2={200} y2={430} />
    <Edge x1={520} y1={325} x2={470} y2={430} />
    <Edge x1={620} y1={470} x2={800} y2={470} dashed label="signed webhooks" />

    {/* clients */}
    <Box x={50} y={40} w={210} h={70} title="Dashboard" lines={['React · Next.js']} />
    <Box x={390} y={40} w={220} h={70} title="Parent app" lines={['bearer JWT']} />
    <Box x={720} y={40} w={240} h={70} title="School systems" lines={['Public API · SIS sync']} />

    {/* PayLibre API */}
    <Box
      x={300}
      y={205}
      w={400}
      h={120}
      title="PayLibre API"
      lines={['.NET 10 · Clean architecture', 'multi-tenant · fees · reconciliation · refunds']}
    />

    {/* Xental platform + Nomba */}
    <Box x={800} y={205} w={180} h={95} title="Xental API" lines={['sub-merchants · DVAs', 'settlement']} />
    <Box x={810} y={360} w={160} h={60} title="Nomba" lines={['bank rails']} />

    {/* data + worker + outbound */}
    <Box x={50} y={430} w={200} h={70} title="PostgreSQL" lines={['row-level tenant isolation']} />
    <Box
      x={300}
      y={430}
      w={280}
      h={95}
      title="Background worker"
      lines={['reminders · late fees', 'webhook delivery · advisory lock']}
    />
    <Box x={800} y={440} w={170} h={60} title="School endpoints" lines={['outbound webhooks']} />

    {/* infra band */}
    <text x={50} y={575} className={styles.bandLabel}>
      AWS EC2 · Traefik + Let’s Encrypt TLS · GitHub Actions → GHCR → infra deploy
    </text>
  </svg>
);

const CaseStudyDiagram = ({ id }: { id: string }) => {
  if (id === 'xental') {
    return (
      <div className={styles.wrap}>
        <XentalDiagram />
      </div>
    );
  }
  if (id === 'insighta') {
    return (
      <div className={styles.wrap}>
        <InsightaDiagram />
      </div>
    );
  }
  if (id === 'swiftauth') {
    return (
      <div className={styles.wrap}>
        <SwiftAuthDiagram />
      </div>
    );
  }
  if (id === 'fitcall') {
    return (
      <div className={styles.wrap}>
        <FitCallDiagram />
      </div>
    );
  }
  if (id === 'genderize') {
    return (
      <div className={styles.wrap}>
        <GenderizeDiagram />
      </div>
    );
  }
  return null;
};

export default CaseStudyDiagram;
