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

const CaseStudyDiagram = ({ id }: { id: string }) => {
  if (id === 'fitcall') {
    return (
      <div className={styles.wrap}>
        <FitCallDiagram />
      </div>
    );
  }
  return null;
};

export default CaseStudyDiagram;
