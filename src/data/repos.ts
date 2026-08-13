// REFACTORED
import type { RepoEntry } from './types';

// High-quality repositories worth reading — work without a live production link,
// kept here as source rather than as featured case studies. Roles are scoped to
// my own contribution so nothing overstates a team effort.
export const repos: RepoEntry[] = [
  {
    name: 'Insighta Labs+',
    role: 'Backend · .NET 9 microservice · CLI',
    description:
      'Name-intelligence platform that infers gender, age and nationality from names — an ASP.NET Core backend with GitHub OAuth + PKCE, RBAC and streaming CSV tooling, a hardened .NET 9 Genderize microservice (19 xUnit tests), and a C# global-tool CLI.',
    tech: ['C#', 'ASP.NET Core', '.NET 9', 'EF Core', 'SQLite', 'xUnit'],
    links: [
      { label: 'Backend', href: 'https://github.com/ukemeikot/genderise-api' },
      { label: 'Genderize service', href: 'https://github.com/ukemeikot/genderize-wrapper-api' },
      { label: 'CLI', href: 'https://github.com/ukemeikot/HNGinsighta-CLI' },
    ],
  },
  {
    name: 'SwiftAuth SDK',
    role: 'Team SDK · contributor',
    description:
      'A React Native authentication SDK that turns Firebase wiring, Google/Apple sign-in, session persistence and typed error handling into a drop-in package — one provider, one hook, an optional pre-built screen. Published to npm as rn-swiftauth-sdk (HNG Stage 8 team project).',
    tech: ['TypeScript', 'React Native', 'Expo', 'Firebase Auth', 'npm'],
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/rn-swiftauth-sdk' },
      { label: 'GitHub', href: 'https://github.com/allcodez/Auth-SDK_Stage8' },
    ],
  },
  {
    name: 'Nextcloud DDoS Detector',
    role: 'Author',
    description:
      'A real-time traffic anomaly detector for Nextcloud: sliding-window analytics over Nginx logs with a rolling EWMA baseline and z-score scoring, graduated iptables auto-bans, and Slack alerts on a live dashboard.',
    tech: ['Python', 'FastAPI', 'iptables', 'Docker Compose', 'Slack'],
    links: [{ label: 'GitHub', href: 'https://github.com/ukemeikot/nextcloud-ddos-detector' }],
  },
  {
    name: 'SwiftDeploy',
    role: 'Author',
    description:
      'A declarative deployment CLI: one YAML manifest renders docker-compose, Nginx and OPA policy via Jinja2, with policy-gated stable/canary promotion, chaos testing, live metrics and an append-only audit trail.',
    tech: ['Python', 'Jinja2', 'Docker Compose', 'Nginx', 'OPA'],
    links: [{ label: 'GitHub', href: 'https://github.com/ukemeikot/swiftdeploy' }],
  },
  {
    name: 'DevOps Sandbox',
    role: 'Author',
    description:
      'A self-service platform for throwaway environments — provision isolated Docker networks, deploy, simulate failures, health-monitor, and auto-tear-down on TTL. The lifecycle layer is implemented twice (Bash + PowerShell) with identical results.',
    tech: ['Python', 'Flask', 'Docker', 'Bash', 'PowerShell'],
    links: [{ label: 'GitHub', href: 'https://github.com/ukemeikot/devops-sandbox' }],
  },
  {
    name: 'Mira Care',
    role: 'Frontend · Next.js',
    description:
      'The web frontend for a preventive health-tech platform: a Next.js App Router app with two role surfaces (admin and frontline workers), secure multi-step auth, a typed per-domain API layer, and flash-free session rehydration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'App Router'],
    links: [{ label: 'GitHub', href: 'https://github.com/ukemeikot/mira-fe' }],
  },
];
