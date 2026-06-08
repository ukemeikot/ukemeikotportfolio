// REFACTORED
import { ArrowUpRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { ProjectEntry } from '../../data/types';
import styles from './TechConstellation.module.css';

interface TechConstellationProps {
  projects: ProjectEntry[];
  onOpen: (project: ProjectEntry) => void;
}

const ALIASES: Record<string, string> = {
  WebSockets: 'WebSocket',
};

const norm = (tech: string) => ALIASES[tech] ?? tech;

const SHORT: Record<string, string> = {
  'mira-care': 'Mira Care',
  'crednews-newsroom': 'CredNews',
  'noramum-app': 'Noramum',
  'swiftauth-sdk': 'SwiftAuth',
  'messaging-calling-backend': 'Messaging API',
  'insighta-genderise-api': 'Insighta API',
  'genderize-wrapper-api': 'Genderize API',
  'nextcloud-ddos-detector': 'DDoS Detector',
  swiftdeploy: 'SwiftDeploy',
  'hng-stage2-devops': 'HNG Stage 2',
  'devops-sandbox': 'DevOps Sandbox',
};

const CX = 500;
const CY = 340;
const R_PROJECT = 165;
const R_TECH = 290;
const VIEW_W = 1000;
const VIEW_H = 690;

interface ProjectNode {
  id: string;
  kind: 'project';
  label: string;
  x: number;
  y: number;
  angle: number;
  project: ProjectEntry;
  techs: Set<string>;
}

interface TechNode {
  id: string;
  kind: 'tech';
  label: string;
  x: number;
  y: number;
  angle: number;
  tech: string;
  count: number;
}

type GraphNode = ProjectNode | TechNode;

interface Edge {
  id: string;
  from: { id: string; x: number; y: number };
  to: { id: string; x: number; y: number };
}

const TechConstellation = ({ projects, onOpen }: TechConstellationProps) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const active = hovered ?? pinned;

  const { nodes, edges, nodeById } = useMemo(() => {
    const projectCount = projects.length;
    const projectNodes: ProjectNode[] = projects.map((project, index) => {
      const angle = (index / projectCount) * Math.PI * 2 - Math.PI / 2;
      return {
        id: `p:${project.slug}`,
        kind: 'project',
        label: SHORT[project.slug] ?? project.title,
        x: CX + Math.cos(angle) * R_PROJECT,
        y: CY + Math.sin(angle) * R_PROJECT,
        angle,
        project,
        techs: new Set(project.tech.map(norm)),
      };
    });

    // Only technologies shared by 2+ projects become connecting nodes.
    const techCount = new Map<string, number>();
    projectNodes.forEach((node) => {
      node.techs.forEach((tech) => techCount.set(tech, (techCount.get(tech) ?? 0) + 1));
    });
    const sharedTechs = [...techCount.entries()].filter(([, count]) => count >= 2);

    // Order each tech near the mean angle of its projects to reduce edge crossings.
    const ordered = sharedTechs
      .map(([tech, count]) => {
        let sx = 0;
        let sy = 0;
        projectNodes.forEach((node) => {
          if (node.techs.has(tech)) {
            sx += Math.cos(node.angle);
            sy += Math.sin(node.angle);
          }
        });
        return { tech, count, mean: Math.atan2(sy, sx) };
      })
      .sort((a, b) => a.mean - b.mean);

    const techNodes: TechNode[] = ordered.map((item, index) => {
      const angle = (index / ordered.length) * Math.PI * 2 - Math.PI / 2;
      return {
        id: `t:${item.tech}`,
        kind: 'tech',
        label: item.tech,
        x: CX + Math.cos(angle) * R_TECH,
        y: CY + Math.sin(angle) * R_TECH,
        angle,
        tech: item.tech,
        count: item.count,
      };
    });

    const edgeList: Edge[] = [];
    techNodes.forEach((techNode) => {
      projectNodes.forEach((projectNode) => {
        if (projectNode.techs.has(techNode.tech)) {
          edgeList.push({
            id: `${techNode.id}__${projectNode.id}`,
            from: { id: techNode.id, x: techNode.x, y: techNode.y },
            to: { id: projectNode.id, x: projectNode.x, y: projectNode.y },
          });
        }
      });
    });

    const all: GraphNode[] = [...projectNodes, ...techNodes];
    const byId = new Map<string, GraphNode>(all.map((node) => [node.id, node]));
    return { nodes: all, edges: edgeList, nodeById: byId };
  }, [projects]);

  const neighbors = useMemo(() => {
    if (!active) {
      return null;
    }
    const set = new Set<string>([active]);
    edges.forEach((edge) => {
      if (edge.from.id === active) {
        set.add(edge.to.id);
      }
      if (edge.to.id === active) {
        set.add(edge.from.id);
      }
    });
    return set;
  }, [active, edges]);

  const activeNode = active ? nodeById.get(active) ?? null : null;

  const caption = (() => {
    if (!activeNode) {
      return null;
    }
    if (activeNode.kind === 'tech') {
      const used = nodes.filter(
        (node): node is ProjectNode => node.kind === 'project' && node.techs.has(activeNode.tech)
      );
      return {
        title: activeNode.tech,
        body: `Connects ${used.length} projects — ${used.map((node) => node.label).join(', ')}`,
        project: null as ProjectEntry | null,
      };
    }
    return {
      title: activeNode.project.title,
      body: activeNode.project.tech.join(' · '),
      project: activeNode.project,
    };
  })();

  const togglePin = (id: string) => setPinned((current) => (current === id ? null : id));

  return (
    <div className={styles.wrap}>
      <p className={styles.hint}>
        Tap a <strong>tech</strong> to see what it connects — or a <strong>project</strong> to
        light up its stack.
      </p>

      <svg
        className={styles.svg}
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        role="img"
        aria-label="Interactive map connecting projects to shared technologies"
      >
        <rect
          x={0}
          y={0}
          width={VIEW_W}
          height={VIEW_H}
          fill="transparent"
          onClick={() => setPinned(null)}
        />

        {edges.map((edge) => {
          const on = active != null && (edge.from.id === active || edge.to.id === active);
          const faded = active != null && !on;
          return (
            <line
              key={edge.id}
              x1={edge.from.x}
              y1={edge.from.y}
              x2={edge.to.x}
              y2={edge.to.y}
              className={`${styles.edge} ${on ? styles.edgeOn : ''} ${
                faded ? styles.edgeFaded : ''
              }`.trim()}
            />
          );
        })}

        {nodes.map((node) => {
          const isActive = node.id === active;
          const isNeighbor = neighbors?.has(node.id) ?? false;
          const faded = neighbors != null && !isNeighbor;
          const right = Math.cos(node.angle) >= 0;
          const labelX = node.x + (right ? 14 : -14);
          const anchor = right ? 'start' : 'end';

          return (
            <g
              key={node.id}
              className={`${styles.node} ${faded ? styles.nodeFaded : ''}`.trim()}
              tabIndex={0}
              role="button"
              aria-label={
                node.kind === 'tech' ? `Technology ${node.label}` : `Project ${node.label}`
              }
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(node.id)}
              onBlur={() => setHovered(null)}
              onClick={() => togglePin(node.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  togglePin(node.id);
                }
              }}
            >
              {node.kind === 'project' ? (
                <rect
                  x={node.x - 7}
                  y={node.y - 7}
                  width={14}
                  height={14}
                  transform={`rotate(45 ${node.x} ${node.y})`}
                  className={`${styles.project} ${isActive ? styles.dotActive : ''}`.trim()}
                />
              ) : (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={5.5}
                  className={`${styles.tech} ${isActive ? styles.dotActive : ''}`.trim()}
                />
              )}
              <text
                x={labelX}
                y={node.y + 4}
                textAnchor={anchor}
                className={`${styles.label} ${node.kind === 'project' ? styles.labelProject : ''} ${
                  isActive || isNeighbor ? styles.labelOn : ''
                }`.trim()}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className={styles.caption} aria-live="polite">
        {caption ? (
          <>
            <div className={styles.captionText}>
              <span className={styles.captionTitle}>{caption.title}</span>
              <span className={styles.captionBody}>{caption.body}</span>
            </div>
            {caption.project ? (
              <button
                type="button"
                className={styles.openBtn}
                onClick={() => caption.project && onOpen(caption.project)}
              >
                Open project
                <ArrowUpRight size={15} />
              </button>
            ) : null}
          </>
        ) : (
          <span className={styles.captionIdle}>Nothing selected — hover or tap a node.</span>
        )}
      </div>
    </div>
  );
};

export default TechConstellation;
