// REFACTORED
import type { ProjectEntry } from './types';

export const projects: ProjectEntry[] = [
  // ---------- Frontend & Mobile ----------
  {
    slug: 'mira-care',
    title: 'Mira Care',
    type: 'Health-Tech AI Platform',
    categories: ['frontend-mobile'],
    summary:
      'A preventive healthcare platform that combines web and mobile experiences for care teams managing high-signal patient data.',
    challenge:
      'The core challenge was orchestrating realtime monitoring, risk detection, and role-aware workflows without sacrificing responsiveness or compliance boundaries.',
    stackLine:
      'Stack: Next.js, React Native, TypeScript, WebSockets, PostgreSQL, Redis, AI/ML integration.',
    impact:
      'Impact: enabled proactive care coordination with faster alerting, collaborative workflows, and infrastructure designed for sensitive medical operations.',
    details:
      'Mira Care pairs a Next.js dashboard with a React Native mobile experience to support clinicians and care teams working from live patient signals. The system handles realtime updates, collaborative task management, and intelligent notifications while protecting sensitive data with strong access control and encryption. The product architecture was shaped around fast data access, low-latency streams, and offline resilience for healthcare workers who cannot depend on perfect connectivity.',
    tech: ['Next.js', 'React Native', 'TypeScript', 'WebSocket', 'PostgreSQL', 'Redis', 'AI/ML Integration', 'HIPAA Compliance'],
    repoUrl: 'https://github.com/ukemeikot/mira-fe',
  },
  {
    slug: 'crednews-newsroom',
    title: 'CredNews',
    type: 'Cross-Platform News App',
    categories: ['frontend-mobile'],
    summary:
      'A cross-platform news app delivering live headlines, AI-powered summaries, and community fact-checking across mobile, web, and desktop from a single codebase.',
    challenge:
      'The challenge was shipping one Expo / React Native codebase to iOS, Android, web, and a Windows desktop app while keeping it fast, offline-capable, and streaming AI in real time.',
    stackLine:
      'Stack: React Native, Expo, Expo Router, TypeScript, TanStack Query, Firebase, Electron, React Native Web.',
    impact:
      'Impact: one codebase running on mobile, web, and desktop with live feeds, a streaming multi-provider AI assistant, offline caching, and community fact-checking.',
    details:
      'CredNews delivers headlines, article discovery, AI-powered summaries, and community fact-checking across iOS, Android, web, and Windows desktop from a single Expo / React Native codebase. It uses Expo Router for navigation, TanStack Query with AsyncStorage persistence for offline-first data, and Firebase (Auth, Firestore, Storage) for accounts, comments, and evidence uploads, with Electron 41 wrapping the web bundle for desktop. Live feeds come from GNews and events from PredictHQ, while a streaming multi-provider AI assistant chains Groq, Cerebras, OpenRouter, and Gemini with a fallback chain. It adds community comments and fact-checking with voting, evidence submission with image uploads, desktop keyboard shortcuts and context menus, and a typewriter-style AI brief reveal. Built for HNG Mobile Stage 3.',
    tech: ['React Native', 'Expo', 'TypeScript', 'TanStack Query', 'Firebase', 'Electron', 'React Native Web', 'Gemini AI'],
    liveUrl: 'https://mobile.hng.credianlab.xyz/',
    repoUrl: 'https://github.com/ukemeikot/newsroom',
  },
  {
    slug: 'noramum-app',
    title: 'Noramum.app',
    type: 'Full-Stack SaaS Platform',
    categories: ['frontend-mobile'],
    summary:
      'A childcare management platform with web and mobile clients designed around shared records, realtime updates, and sensitive family data.',
    challenge:
      'This product required dependable cross-device state synchronisation, careful access control, and user experience that remained stable when connectivity dropped.',
    stackLine:
      'Stack: Next.js, React Native, Expo, Tailwind CSS, Redux, Node.js, WebSockets, PostgreSQL.',
    impact:
      'Impact: delivered a unified childcare workflow for families with realtime updates, better operational visibility, and stronger data protection.',
    details:
      'Noramum.app combines a Next.js administrative surface with React Native mobile apps so families can track appointments, childcare records, and developmental milestones from multiple devices. The architecture emphasised realtime parity, optimistic updates, queue-based syncing, and automatic retries so users could continue working with confidence in unstable network conditions. Security controls and encrypted handling of family data were a first-order concern throughout the build.',
    tech: ['Next.js', 'React Native', 'Expo', 'Tailwind CSS', 'Redux', 'Node.js', 'WebSocket', 'PostgreSQL', 'E2E Encryption'],
    liveUrl: 'https://noramum.app',
  },
  {
    slug: 'swiftauth-sdk',
    title: 'SwiftAuth SDK',
    type: 'Mobile Developer Tool',
    categories: ['frontend-mobile'],
    summary:
      'A React Native authentication SDK that simplifies Firebase integration for teams shipping production mobile apps.',
    challenge:
      'The challenge was exposing flexible authentication flows through a typed interface while handling provider-specific failures cleanly.',
    stackLine:
      'Stack: TypeScript, Firebase Auth, React Native, Jest, GitHub Actions, NPM publishing.',
    impact:
      'Impact: gave developers a faster integration path, clearer errors, and a reusable package built for repeatable releases.',
    details:
      'SwiftAuth SDK abstracts common Firebase authentication workflows into a typed package with extensible options, structured error handling, and production-ready defaults. It was designed for teams that want to move quickly without scattering auth complexity throughout their application code. The package includes strong TypeScript support, automated release workflows, and documentation that lowers setup friction for new adopters.',
    tech: ['TypeScript', 'Firebase Auth', 'NPM Package', 'React Native', 'GitHub Actions', 'ESLint', 'Jest', 'CI/CD'],
    repoUrl: 'https://www.npmjs.com/package/rn-swiftauth-sdk',
  },

  // ---------- Backend ----------
  {
    slug: 'messaging-calling-backend',
    title: 'Messaging & Calling Backend',
    type: 'FastAPI Communication SDK',
    categories: ['backend'],
    summary:
      'A production-ready FastAPI backend SDK for messaging and calling, with authentication, contacts, chat, calling, and WebSocket signalling out of the box.',
    challenge:
      'The focus was packaging realtime communication primitives — auth, presence, signalling, and search — into a reusable SDK teams can drop in instead of rebuilding from scratch.',
    stackLine:
      'Stack: Python, FastAPI, PostgreSQL, JWT + Google OAuth, WebSockets, full-text search, CLI scaffolding.',
    impact:
      'Impact: gives teams direct messaging, group chat with read receipts, voice/video signalling, and PostgreSQL-powered search behind a documented, testable API.',
    details:
      'A FastAPI SDK that provides pre-built components for authentication (JWT with Google OAuth, email verification, password reset), profile management with picture uploads, a contact request and blocking system, direct and group messaging with read receipts, and voice/video calling over WebSocket signalling. PostgreSQL powers full-text search across users, messages, and conversations. It ships with CLI scaffolding for new FastAPI projects, customizable email templates, tests, deployment guides, and release automation.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'JWT', 'Google OAuth', 'WebSockets', 'Full-Text Search', 'CLI', 'Pytest'],
    liveUrl: 'https://messagingandcallingbackend.credianlab.xyz/',
    repoUrl: 'https://github.com/ukemeikot/messaging_and_calling_backend',
  },
  {
    slug: 'insighta-genderise-api',
    title: 'Insighta Labs+ / Genderise API',
    type: 'ASP.NET Core Platform',
    categories: ['backend'],
    summary:
      'An ASP.NET Core backend for a profile-intelligence platform with OAuth, RBAC, CSV ingestion, natural-language query parsing, and export.',
    challenge:
      'The system had to support secure multi-role access, large CSV ingestion, fast filtered queries, and natural-language search while staying performant on a single SQLite store.',
    stackLine:
      'Stack: C#, ASP.NET Core, EF Core, SQLite (WAL), GitHub OAuth + PKCE, JWT, distributed cache, Docker.',
    impact:
      'Impact: delivers admin/analyst RBAC, streaming CSV ingestion up to 500MB with validation and dedup, cached filtered exports, and natural-language querying.',
    details:
      'An ASP.NET Core backend that aggregates demographic profile data and lets users query, filter, search, and export it. Authentication uses GitHub OAuth with PKCE, JWT access tokens with refresh rotation, and HTTP-only cookies for web clients, gated by role-based authorization. Performance work includes composite indexes, versioned distributed caching, DbContext pooling, and SQLite WAL pragmas for concurrent access. A streaming upload endpoint handles CSV ingestion with per-row validation, batch processing, and deduplication, and a natural-language parser turns phrases like "young males from Nigeria" into structured filters.',
    tech: ['C#', 'ASP.NET Core', 'EF Core', 'SQLite', 'GitHub OAuth', 'PKCE', 'JWT', 'RBAC', 'Docker'],
    repoUrl: 'https://github.com/ukemeikot/genderise-api',
  },
  {
    slug: 'genderize-wrapper-api',
    title: 'Genderize Wrapper API',
    type: '.NET 9 REST API · Live',
    categories: ['backend', 'devops'],
    summary:
      'A .NET 9 REST API that classifies names by gender with input validation, confidence scoring, structured responses, and full CI/CD to AWS.',
    challenge:
      'Beyond wrapping an upstream API, the goal was production hygiene: validation, confidence flags, comprehensive error handling, tests, and automated deployment.',
    stackLine:
      'Stack: C#, .NET 9, ASP.NET Core, xUnit + Moq + FluentAssertions, Swagger, Docker, AWS EC2, Caddy, GitHub Actions.',
    impact:
      'Impact: a documented, tested, live API (api.hng.credianlab.xyz) with auto-deploy on push and 19 automated tests guarding behaviour.',
    details:
      'A .NET 9 REST API exposing GET /api/classify?name={name}. It validates input, calls Genderize.io, and returns structured results — renaming the upstream count to sample_size and computing an is_confident flag (probability ≥ 0.7 and sample_size ≥ 100). It handles 400/404/422/500/502 responses, enables CORS, and is documented with Swagger. The project includes 19 xUnit tests (Moq, FluentAssertions) and a GitHub Actions workflow that builds the Docker image and auto-deploys to AWS EC2 behind a Caddy reverse proxy.',
    tech: ['C#', '.NET 9', 'xUnit', 'Moq', 'Swagger', 'Docker', 'AWS EC2', 'Caddy', 'GitHub Actions'],
    liveUrl: 'https://api.hng.credianlab.xyz/index.html',
    repoUrl: 'https://github.com/ukemeikot/genderize-wrapper-api',
  },
  {
    slug: 'nextcloud-ddos-detector',
    title: 'Nextcloud DDoS Detector',
    type: 'Realtime Security Service',
    categories: ['backend', 'devops'],
    summary:
      'A real-time traffic anomaly detector for Nextcloud that scores Nginx access logs, auto-bans offending IPs, and alerts admins on Slack.',
    challenge:
      'The hard part was distinguishing genuine attacks from normal traffic swings using rolling baselines, then acting on them automatically without false-positive lockouts.',
    stackLine:
      'Stack: Python, FastAPI, sliding-window analytics (deque + z-score/EWMA), iptables, Slack, Docker Compose, Nginx, MySQL.',
    impact:
      'Impact: detects credential-stuffing and volumetric spikes in real time, applies graduated IP bans, and surfaces everything on a live dashboard.',
    details:
      'A real-time anomaly detection system that monitors HTTP traffic to a Nextcloud instance via Nginx access logs. It uses 60-second sliding-window deques for per-IP and global request rates, a rolling 30-minute baseline with EWMA blending to model normal traffic by hour, and combined z-score + multiplier scoring to flag anomalies. Error-surge tightening catches credential-stuffing when 4xx/5xx rates spike. Offenders get a graduated ban schedule (10 min → 30 min → 2 hr → permanent) via iptables, with Slack alerts on bans/unbans and a FastAPI dashboard refreshing every 3 seconds.',
    tech: ['Python', 'FastAPI', 'iptables', 'Slack API', 'Docker Compose', 'Nginx', 'MySQL', 'Anomaly Detection'],
    repoUrl: 'https://github.com/ukemeikot/nextcloud-ddos-detector',
  },

  // ---------- DevOps ----------
  {
    slug: 'swiftdeploy',
    title: 'SwiftDeploy',
    type: 'Declarative Deployment CLI',
    categories: ['devops'],
    summary:
      'A declarative Python CLI that builds, validates, and promotes a containerised web stack from a single YAML manifest, with OPA policy gates.',
    challenge:
      'The aim was a single source of truth: drive compose files, Nginx config, and policy from one manifest, and block unsafe promotions automatically.',
    stackLine:
      'Stack: Python, Flask, Gunicorn, Jinja2, Docker Compose, Nginx, Open Policy Agent, Prometheus.',
    impact:
      'Impact: enables policy-gated stable/canary promotion with chaos testing, live metrics, and append-only audit history — zero hand-edited config.',
    details:
      'SwiftDeploy turns a single YAML manifest into all deployment artifacts — docker-compose.yml, nginx.conf, and OPA policies — via Jinja2 templating. Two OPA-enforced gates (infrastructure resources and canary safety on error rates/latency) prevent unsafe promotions. A /chaos endpoint simulates degraded conditions in canary mode, observability comes from a live dashboard and Prometheus metrics, and audit trails are kept as append-only JSON logs. OPA runs on an internal-only network while only Nginx faces the public port, and stable/canary modes switch without downtime.',
    tech: ['Python', 'Flask', 'Jinja2', 'Docker Compose', 'Nginx', 'OPA', 'Prometheus', 'YAML'],
    repoUrl: 'https://github.com/ukemeikot/swiftdeploy',
  },
  {
    slug: 'hng-stage2-devops',
    title: 'HNG Stage 2 DevOps',
    type: 'Containerised Job System',
    categories: ['devops'],
    summary:
      'A containerised job-processing system — Express dashboard, FastAPI API, Redis queue, and a Python worker — with rolling EC2 deploys.',
    challenge:
      'The task was a properly networked microservice system with a real CI/CD pipeline: linting, tests, security scanning, and zero-downtime deploys.',
    stackLine:
      'Stack: Node.js/Express, Python/FastAPI, Redis, Docker Compose, GitHub Actions, Trivy, AWS EC2.',
    impact:
      'Impact: jobs flow from dashboard → Redis queue → worker with health checks, isolated networking, Trivy image scanning, and rolling EC2 deployment.',
    details:
      'A job-processing system where users submit jobs through a Node/Express dashboard; jobs are queued in Redis, processed by a Python background worker, and tracked from submission to completion through a FastAPI API. All services run on an internal Docker network with Redis never exposed to the host. The multi-stage GitHub Actions pipeline runs linting, unit and integration tests, Trivy security scans, and coverage reporting, then performs a rolling deployment to EC2 with health checks for zero-downtime updates.',
    tech: ['Node.js', 'Express', 'FastAPI', 'Redis', 'Docker Compose', 'GitHub Actions', 'Trivy', 'AWS EC2'],
    repoUrl: 'https://github.com/ukemeikot/hng14-stage2-devops',
  },
  {
    slug: 'devops-sandbox',
    title: 'DevOps Sandbox',
    type: 'Self-Service Environments',
    categories: ['devops'],
    summary:
      'A self-service platform to provision isolated temporary environments, deploy apps, simulate failures, and monitor health — then auto-tear down.',
    challenge:
      'It had to manage full environment lifecycles on a single VM, with chaos simulation and health tracking, implemented identically in both Bash and PowerShell.',
    stackLine:
      'Stack: Python, Flask, Docker, Docker Compose, Nginx, Bash + PowerShell, REST control plane.',
    impact:
      'Impact: each deployment gets an isolated Docker network, a TTL cleanup daemon, 30s health polling, chaos modes, and real-time log shipping.',
    details:
      'A self-service platform that provisions isolated, temporary environments, deploys applications, simulates infrastructure failures, monitors health, and tears resources down on TTL expiry or on demand. Each deployment gets its own Docker network and container to prevent cross-environment interference. The lifecycle layer is implemented twice (Bash + PowerShell) with identical results. A background cleanup daemon destroys expired environments, a health monitor polls every 30 seconds and flips status to degraded after three consecutive failures, and chaos modes simulate crash, pause, network disruption, recovery, and stress. A REST control plane on port 5000 manages everything.',
    tech: ['Python', 'Flask', 'Docker', 'Nginx', 'Bash', 'PowerShell', 'Chaos Engineering', 'REST'],
    repoUrl: 'https://github.com/ukemeikot/devops-sandbox',
  },
];
