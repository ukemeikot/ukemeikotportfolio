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
    caseStudy: {
      problem:
        'Care teams need a fast, role-aware web app to coordinate patients: admins manage agents, appointments, calendars, EHR and team invites, while frontline workers run a live patient queue and activity feed. The frontend had to deliver two distinct role experiences, secure multi-step auth, and a structure that stays maintainable as features grow.',
      architecture:
        'A Next.js App Router app in TypeScript and Tailwind. Route groups separate concerns cleanly: (auth) holds login, signup, email verification, password reset and invite-acceptance flows, while (Dashboard)/admin and (Dashboard)/workers are the two role surfaces with their own layouts and navigation. A typed api-client sits beneath a per-domain API layer (patients, appointments, teams, calls, EHR and calendar integrations, analytics). Auth lives in a dedicated store with use-auth and use-auth-bootstrap hooks behind a ProtectedRoute guard. Quality is enforced with Husky pre-commit/pre-push hooks and GitHub Actions, and the app is served with PM2.',
      modules: [
        { name: 'app/(auth)', detail: 'Login, signup, verify-email, reset-password and accept-invite flows.' },
        { name: 'app/(Dashboard)/admin', detail: 'Agents, appointments, calendar, EHR, patients, team management and settings.' },
        { name: 'app/(Dashboard)/workers', detail: 'Activity feed, appointments and a live patient queue.' },
        { name: 'app/lib/api/*', detail: 'Typed per-domain API modules over a single shared api-client.' },
        { name: 'app/stores/auth-store.ts', detail: 'Auth state with use-auth, use-auth-bootstrap and a ProtectedRoute guard.' },
        { name: 'components', detail: 'Reusable modals (patients, appointments, teams) and dashboard widgets (stat cards, charts, queue cards).' },
      ],
      challenge: {
        title: 'Two products in one app, with no protected-content flash on reload',
        solution:
          'Admin and worker are effectively two apps sharing one codebase. App Router route groups give each role its own layout, navigation and access boundary while reusing the same component library, typed api-client and auth store. The harder detail was session rehydration: on a hard refresh the app must restore the session before rendering, or protected screens flash and trigger redirect loops. A use-auth-bootstrap hook rehydrates auth into the store first, and ProtectedRoute holds rendering until bootstrap resolves — so the correct dashboard appears once, cleanly, with no flash.',
      },
    },
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
    caseStudy: {
      problem:
        'News consumption is fragmented across apps and devices, and most apps degrade badly on poor connections. CredNews unifies a fast headlines feed, tech-event discovery, offline saved reading, community fact-checking, and a streaming AI assistant — and runs on iOS, Android, web, and Windows desktop from a single codebase.',
      architecture:
        'One React Native (Expo) source compiles to every target: mobile, web via Expo Web and React Native Web, and desktop via Electron 41 wrapping the exported web bundle. Expo Router drives a single navigation tree — tabbed feed, events, saved and search, an article/[id] detail route, auth flows, and an interests modal that overlays in place. TanStack Query is the unified cache, persisted to AsyncStorage so feed, search results and AI briefs survive restarts; a pending-actions queue stores comments, votes and evidence uploads and replays them on reconnect via expo-network. Firebase (Auth, Firestore, Storage) backs accounts and community data, and the layout adapts by width — bottom tabs under 768px, top navigation above.',
      modules: [
        { name: 'src/app/(tabs)', detail: 'Expo Router feed, events, saved and search screens shared across platforms.' },
        { name: 'src/api/aiProviders/*', detail: 'Groq, Cerebras and OpenRouter backends plus geminiApi, with streaming and prompting utilities.' },
        { name: 'src/hooks/queries/*', detail: 'useNewsQueries, useEventsQuery and useAiBriefQuery built on TanStack Query.' },
        { name: 'src/services/pendingActionsService.ts', detail: 'Offline action queue that replays comments, votes and uploads on reconnect.' },
        { name: 'src/components/community + evidence', detail: 'Comments, voting and evidence attachments for community fact-checking.' },
        { name: 'desktop/main.cjs', detail: 'Electron shell with native menus and app:// protocol handling.' },
      ],
      challenge: {
        title: 'Staying responsive under free-tier AI rate limits',
        solution:
          'A single AI provider on a free tier rate-limits almost immediately. CredNews rotates round-robin across four providers — Groq (fastest), Cerebras (quality), OpenRouter (free routes) and Gemini — with per-provider cooldowns when one returns 429 or errors, pooling roughly 80 requests/minute of free capacity. Responses stream via SSE over XHR and render character-by-character at about 125 chars/second, so even an instant reply feels like natural typing. On desktop, excluding node_modules from the Electron package kept the installer near 99 MB instead of 800 MB+.',
      },
    },
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
    caseStudy: {
      problem:
        'Almost every product that needs chat or calling rebuilds the same backend from scratch — authentication, contacts, presence, message storage, call signalling, and search. I packaged all of it into a single installable FastAPI SDK, with a CLI that scaffolds a new project, so a team can stand up a production communication layer in minutes instead of reassembling the same primitives every time.',
      architecture:
        'It is a layered FastAPI application. Requests enter the versioned API surface — REST routers under /api/v1 plus a WebSocket signalling endpoint — then pass through JWT authentication and dependency-injected context (core/security.py, core/dependencies.py). From there they hand off to a service layer (chat, call, contact, search, profile, OAuth, and email services) that owns the business logic. Services persist asynchronously to PostgreSQL via asyncpg, with Alembic managing schema migrations, while Pydantic schemas validate every request and response. A dedicated websocket_manager tracks live connections so messages and call events are delivered in real time.',
      modules: [
        { name: 'auth · /api/v1/auth', detail: 'JWT register/login and current-user, plus email verification, password reset, and Google OAuth.' },
        { name: 'chat · /api/v1/chat', detail: 'Direct and group messaging with read receipts, backed by chat_service.' },
        { name: 'calls · /api/v1/calls', detail: 'Call lifecycle management handled by call_service.' },
        { name: 'websocket_signaling', detail: 'Real-time messaging and WebRTC-style call signalling over a managed WebSocket layer.' },
        { name: 'search · /api/v1/search', detail: 'PostgreSQL full-text search across users, messages, conversations, and global queries.' },
        { name: 'contacts & profile', detail: 'Contact requests with blocking, plus profile management and picture uploads.' },
        { name: 'cli', detail: 'Scaffolds and configures a new FastAPI project from the SDK.' },
      ],
      challenge: {
        title: 'Authorising real-time connections, not just REST calls',
        solution:
          'A signalling WebSocket is easy to get wrong: with only a valid token, anyone could try to join another call’s signalling room and eavesdrop on or inject SDP/ICE messages. REST auth alone does not cover this. I made signalling access depend on real call participation — when a socket connects to a call’s channel it is checked against that call’s participant records before the websocket_manager registers it, so only verified participants can exchange signalling traffic. Membership is enforced at connection time rather than per message, keeping the hot path cheap.',
      },
    },
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
    caseStudy: {
      problem:
        'Shipping a containerised web stack usually means hand-writing and constantly re-syncing several config files — a Compose file, an Nginx config, and policy rules — which drift apart and quietly let unsafe deploys through. SwiftDeploy makes one manifest.yaml the single source of truth, generates everything else from it, and refuses to deploy or promote unless explicit policy gates pass.',
      architecture:
        'A three-layer model. The user layer is a single manifest.yaml (services, nginx, network, thresholds). The generation layer is a Python CLI that uses Jinja2 to render docker-compose.yml, nginx.conf, and opa-data.json on every init. The runtime layer is Docker Compose running a Flask API and Nginx on a public network, with an Open Policy Agent sidecar isolated on an internal policy network bound to 127.0.0.1:8181. "swiftdeploy deploy" scrapes host stats and asks OPA for an infrastructure decision; on ALLOW it brings the stack up and polls /healthz, on DENY it prints the violation and exits. "promote canary" scrapes /metrics twice across a window, computes error rate and p99 latency, then queries the canary-safety policy.',
      modules: [
        { name: 'deploy', detail: 'Runs the infrastructure gate, starts the stack, then health-checks /healthz before declaring success.' },
        { name: 'promote', detail: 'Switches stable/canary modes; promoting to canary must clear the canary-safety gate first.' },
        { name: 'validate', detail: 'Five pre-flight checks (images, ports, config syntax) before anything runs.' },
        { name: 'status · dashboard.py', detail: 'Live terminal dashboard that scrapes /metrics on an interval and appends each reading to history.jsonl.' },
        { name: 'audit', detail: 'Renders history.jsonl into a Markdown report: timeline, policy violations, and forced overrides.' },
        { name: 'opa.py', detail: 'HTTP client that wraps every allow/deny decision from the OPA sidecar in typed dataclasses.' },
        { name: 'app · /chaos', detail: 'Canary-only endpoint that injects slow or error responses to test the safety gates.' },
      ],
      challenge: {
        title: 'Making deploy/promote decisions trustworthy and tamper-evident',
        solution:
          'The CLI never decides allow/deny on its own — it always queries the OPA sidecar, and all thresholds live only in the manifest (rendered to opa-data.json), so the Rego policies contain no hardcoded numbers and changing a limit is a manifest edit plus init, not a code change. The canary gate compares the change in error rate and p99 over a fixed window rather than absolute values, isolating the canary’s behaviour from long-term drift. OPA is bound to localhost on an internal-only Docker network so it is unreachable from outside, and every emergency --force override is appended to history.jsonl, leaving a complete audit trail of who overrode what and when.',
      },
    },
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
