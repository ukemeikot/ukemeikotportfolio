// REFACTORED
import {
  Activity,
  ArrowLeft,
  Bell,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Github,
  HeartPulse,
  LayoutDashboard,
  Settings,
  TrendingUp,
  Users,
} from 'lucide-react';
import type { ProjectEntry } from '../../data/types';
import styles from './ProjectDetail.module.css';

interface ProjectDetailProps {
  project: ProjectEntry;
  onClose: () => void;
}

const MiraMobileMockup = () => (
  <div className={styles.mobileDevice}>
    <div className={styles.mobileShell}>
      <div className={styles.mobileCamera} />
      <div className={styles.mobileScreen}>
        <div className={styles.mobileTop}>
          <div className={styles.mobileBrand}>
            <div className={styles.mobileLogo}>
              <HeartPulse size={16} />
            </div>
            <div>
              <strong>Mira</strong>
              <span>Care</span>
            </div>
          </div>
          <Bell size={18} />
        </div>
        <div className={styles.mobileCard}>
          <p>Risk Score</p>
          <div className={styles.mobileScore}>
            <strong>94.2</strong>
            <span>/100</span>
          </div>
          <TrendingUp size={14} />
        </div>
        <div className={styles.mobileStats}>
          <div>
            <Users size={16} />
            <span>Patients</span>
            <strong>1,248</strong>
          </div>
          <div>
            <Activity size={16} />
            <span>Score</span>
            <strong>98%</strong>
          </div>
        </div>
        <div className={styles.mobileTasks}>
          {[1, 2, 3].map((value) => (
            <div key={value}>
              <CheckCircle2 size={16} />
              <span />
            </div>
          ))}
        </div>
        <div className={styles.mobileNav}>
          <LayoutDashboard size={18} />
          <Activity size={18} />
          <Users size={18} />
        </div>
      </div>
    </div>
  </div>
);

const MiraDesktopMockup = () => (
  <div className={styles.desktopMockup}>
    <div className={styles.desktopBar}>
      <div className={styles.trafficLights}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.address}>app.miraproject.online/dashboard</div>
    </div>
    <div className={styles.desktopBody}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>
          <HeartPulse size={16} />
          <span>Mira Care</span>
        </div>
        <button className={styles.sidebarLink}>
          <LayoutDashboard size={16} />
          Dashboard
        </button>
        <button className={styles.sidebarGhost}>
          <Users size={16} />
          Patients
        </button>
        <button className={styles.sidebarGhost}>
          <Activity size={16} />
          Care Plans
        </button>
        <button className={styles.sidebarGhost}>
          <Calendar size={16} />
          Schedule
        </button>
        <button className={styles.sidebarGhost}>
          <Settings size={16} />
          Settings
        </button>
      </aside>
      <div className={styles.workspace}>
        <div className={styles.workspaceHeader}>
          <div>
            <h3>Good morning, Dr. Sarah</h3>
            <p>Here&apos;s what needs attention today.</p>
          </div>
          <Bell size={18} />
        </div>
        <div className={styles.workspaceStats}>
          {[
            ['Active Patients', '1,248'],
            ['Tasks Due', '24'],
            ['High Risk', '12'],
            ['Care Plans', '85%'],
          ].map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <div className={styles.alerts}>
          {[1, 2, 3].map((value) => (
            <div key={value} className={styles.alertRow}>
              <div className={styles.avatar}>JD</div>
              <div>
                <strong>John Doe</strong>
                <p>Blood pressure spike reported. Immediate review required.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => (
  <div className={styles.page}>
    <button className={styles.back} onClick={onClose}>
      <ArrowLeft size={16} />
      Back to portfolio
    </button>
    <div className={styles.layout}>
      <div className={styles.copy}>
        <p className={styles.type}>{project.type}</p>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.details}>{project.details}</p>
        <div className={styles.meta}>
          <p><strong>What it is:</strong> {project.summary}</p>
          <p><strong>Technical challenge:</strong> {project.challenge}</p>
          <p>{project.impact}</p>
        </div>
        <div className={styles.techList}>
          {project.tech.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.primaryLink}>
              View live
              <ExternalLink size={14} />
            </a>
          ) : null}
          {project.repoUrl ? (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className={styles.secondaryLink}>
              <Github size={14} />
              Source
            </a>
          ) : null}
        </div>
      </div>
      <div className={styles.media}>
        {project.isMira ? (
          <>
            <div className={styles.desktopOnly}>
              <MiraDesktopMockup />
            </div>
            <div className={styles.mobileOnly}>
              <MiraMobileMockup />
            </div>
          </>
        ) : project.images?.length ? (
          <div className={styles.imageGrid}>
            {project.images.map((image) => (
              <div key={image.alt} className={styles.imageFrame}>
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.placeholder}>Project visuals available on request.</div>
        )}
      </div>
    </div>
  </div>
);

export default ProjectDetail;
