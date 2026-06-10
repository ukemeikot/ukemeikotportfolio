// REFACTORED
import type { ProjectEntry } from './types';

export const projects: ProjectEntry[] = [
  // ---------- FitCall (flagship, full-stack + QA) ----------
  {
    slug: 'fitcall',
    title: 'FitCall',
    type: 'Full-Stack Fitness Platform',
    categories: ['backend', 'frontend-mobile', 'devops'],
    summary:
      'A personal-training marketplace where clients discover trainers, book sessions, subscribe, and meet over video — live on the web (fitcall.me) and Android. I worked across the Go backend, the React Native app, and the QA automation suite.',
    challenge:
      'Delivering real payments, real-time notifications, and video booking across web and mobile — with three teams shipping on protected dev/staging/prod branches without breaking each other.',
    stackLine:
      'Stack: Go, Gin, PostgreSQL, Redis, React Native, Expo, TypeScript, Apple StoreKit 2, Google IAP, FCM, Postman/Newman, AWS EC2, Nginx, GitHub Actions.',
    impact:
      'Impact: a live product (fitcall.me + Google Play) with tamper-evident Apple/Google purchases, push and booking reminders, video sessions, a stabilized regression suite, and automated deploys to AWS.',
    details:
      'FitCall connects clients with personal trainers and lets them book and meet over video. It ships as a web app and a React Native Android app on top of a Go (Gin) API. Unusually, I contributed to all four repositories — backend, mobile, QA, and DevOps — so my work on it spans server-side payments and notifications, mobile product flows, the automated testing that keeps it stable, and the deployment that ships it.',
    tech: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'React Native', 'Expo', 'TypeScript', 'StoreKit 2', 'FCM', 'Postman', 'AWS EC2', 'Nginx', 'GitHub Actions'],
    liveUrl: 'https://fitcall.me',
    repoUrl: 'https://github.com/hngprojects/personal-trainer-be',
    caseStudy: {
      intro:
        'FitCall is a personal-training marketplace: clients discover a trainer, book a slot, subscribe, and meet over video. It ships as a web app at fitcall.me and an Android app on Google Play, backed by a Go API. I rarely get to point at one product and say I touched the backend, the mobile app, the test suite, and the deployment — on FitCall I did all four, so this is a rare end-to-end look at one product, from API to app to tests to the servers it runs on.',
      problem:
        'Connecting people with trainers is the easy part; making the loop trustworthy is not. FitCall had to handle the whole journey — discover, book, pay/subscribe, and join a call — across web and mobile, with the seriousness of real money (Apple and Google in-app purchases), real-time notifications, and secure authentication. Three teams (backend, mobile, QA) had to move quickly on protected branches that require multiple approvals before staging or production.',
      architecture:
        'A Go (Gin) backend exposes a versioned REST API over PostgreSQL, with Redis caching booking availability. Two clients consume it: a React Native (Expo) Android app and the fitcall.me web app. The backend fans out to a stack of external services — Apple Sign-In and StoreKit 2, Google in-app purchases, Google Meet for sessions, Firebase Cloud Messaging for push, and Resend for email — while a Postman/Newman suite runs regression flows against staging. The server follows layered clean architecture (handlers → services → repositories → domain), and dev/staging/prod branches are protected behind two-approval reviews. It all runs on a single AWS EC2 (Ubuntu) host: Nginx terminates TLS and reverse-proxies the web frontend and Go API, systemd manages the services, and GitHub Actions deploys via a non-privileged deploybot user — with staging and production running side by side (frontend 3001/3002, backend 4001/4002).',
      diagram: 'fitcall',
      contributions: [
        {
          area: 'Backend · Go / Gin',
          items: [
            'Implemented Sign in with Apple — verifying identity tokens against Apple’s JWKS and storing a stable apple_user_id as the lookup key.',
            'Migrated in-app purchases to Apple StoreKit 2 with offline JWS signature verification against a pinned Apple Root CA G3, replacing the deprecated verifyReceipt flow.',
            'Built the in-app notification system: admin broadcast fan-out, event hooks for bookings/subscriptions/trainer creation, WebSocket diagnostics (RFC 6455 validation), FCM fallback with dead-token auto-deactivation, and 30-minute booking reminders.',
            'Added slot-availability filtering with date-pinned queries, Redis cache invalidation, and timezone normalization.',
            'Integrated Google Meet and Messenger as booking/meeting channels (org-account OAuth, a bootstrap CLI, and operator docs).',
            'Fixed a critical security regression by restoring bcrypt validation on login, and hardened migrations with information_schema guards.',
          ],
        },
        {
          area: 'Mobile · React Native / Expo',
          items: [
            'Built the “Request a Call” three-step booking flow.',
            'Built the media system for video and image uploads — media selection, upload, and media-driven video/image content across the home and trainer screens (PR #34).',
            'Shipped onboarding and home screens, the updated trainer UI, and auth/home polish.',
            'Added push notifications.',
            'Wired the app UI to the backend APIs and set up the Android release pipeline, CI (debug APKs to Appetize), and splash-screen flow.',
          ],
        },
        {
          area: 'QA · Postman / Newman',
          items: [
            'Stabilized the automated API regression suite — fixed auth and environment-variable wiring that was failing the entire run.',
            'Repaired API request definitions for Newman and hardened assertions against non-JSON responses.',
            'Built automated failure triage (backend bug / known gap / environment / test data) and documented defects (FC-BUG-001…007).',
          ],
        },
        {
          area: 'DevOps · AWS / CI-CD',
          items: [
            'Set up deployment on a single AWS EC2 (Ubuntu) host running staging and production side by side (frontend 3001/3002, backend 4001/4002, FitCall service on 8080).',
            'Automated releases with GitHub Actions deploying through a non-privileged deploybot user, with systemd managing the long-running services.',
            'Configured Nginx as the reverse proxy with TLS termination in front of the Go API and the web frontend.',
            'Ran PostgreSQL and Redis on the host and wired environment-specific configuration across tiers.',
          ],
        },
      ],
      challenge: {
        title: 'Trusting in-app purchases without trusting the network',
        solution:
          'Receipt validation is where fitness apps quietly lose money — a spoofed receipt can grant a free subscription. I moved Apple IAP to StoreKit 2 and verified the signed transaction (JWS) offline against a pinned Apple Root CA G3 certificate chain, instead of calling Apple’s deprecated verifyReceipt endpoint. That removed a network round-trip from the purchase path and made verification tamper-evident and resilient to endpoint outages. The same rigor carried into Sign in with Apple, where identity tokens are validated against Apple’s JWKS before an account is ever created.',
      },
      links: [
        { label: 'Live · fitcall.me', href: 'https://fitcall.me' },
        { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=net.emerj.fitcall' },
        { label: 'Backend repo', href: 'https://github.com/hngprojects/personal-trainer-be' },
        { label: 'Mobile repo', href: 'https://github.com/hngprojects/personal-trainer-mobile-rn' },
        { label: 'QA repo', href: 'https://github.com/hngprojects/personal-trainer-qa' },
        { label: 'DevOps repo', href: 'https://github.com/hngprojects/personal-trainer-devops' },
      ],
    },
  },

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
    caseStudy: {
      intro:
        'Noramum is a childcare-management platform for families and carers — one product with a Next.js web surface and React Native mobile apps, built so shared records, schedules, and milestones stay in sync across everyone’s devices.',
      problem:
        'Childcare coordination is multi-device and multi-person by nature: a parent updates something on their phone, a carer needs it on the web a moment later, and the network can drop at the worst time. Noramum had to keep everyone’s view consistent, protect sensitive family data, and stay usable offline.',
      architecture:
        'A Next.js administrative web app and React Native (Expo) mobile clients share a Node.js backend over WebSockets and PostgreSQL, with Redux managing client state. The system is built around realtime parity — changes propagate live — backed by optimistic updates, a queue-based sync layer, and automatic retries so a device that goes offline catches up cleanly on reconnect. Family data is access-controlled and encrypted end to end.',
      modules: [
        { name: 'Next.js admin', detail: 'Web surface for managing appointments, childcare records, and family/carer accounts.' },
        { name: 'React Native apps · Expo', detail: 'Mobile clients for families and carers, sharing the same records.' },
        { name: 'realtime sync · WebSockets', detail: 'Live propagation of changes across devices with optimistic updates.' },
        { name: 'offline queue', detail: 'Queue-based syncing with automatic retries so work continues when connectivity drops.' },
        { name: 'data protection', detail: 'Role-based access and end-to-end encryption for sensitive family data.' },
      ],
      challenge: {
        title: 'Consistency across devices when the network can’t be trusted',
        solution:
          'The core problem was keeping multiple devices in agreement without a reliable connection. Noramum applies optimistic updates locally for instant feedback, queues mutations when offline, and replays them with automatic retries on reconnect, while WebSockets push authoritative state to every client so views converge. The result is an app that feels live when connected and never loses a parent’s or carer’s change when it is not.',
      },
      links: [{ label: 'Live · noramum.app', href: 'https://noramum.app' }],
    },
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
      'Stack: TypeScript, React Native, Expo, Firebase Auth, Google & Apple Sign-In, AsyncStorage, published to npm.',
    impact:
      'Impact: gave developers a faster integration path, friendly typed errors, and a reusable package adoptable in minutes — drop-in UI or fully headless.',
    details:
      'SwiftAuth abstracts common Firebase authentication workflows into a typed React Native package with extensible options, structured error handling, and production-ready defaults. It was built so teams can move quickly without scattering auth complexity through their app code — wrap the app in one provider, call one hook, and optionally render a polished pre-built screen. Published to npm as rn-swiftauth-sdk; built as an HNG Stage 8 team project (Mobile Ninjas).',
    tech: ['TypeScript', 'React Native', 'Expo', 'Firebase Auth', 'Google Sign-In', 'Apple Sign-In', 'AsyncStorage', 'npm'],
    repoUrl: 'https://github.com/allcodez/Auth-SDK_Stage8',
    caseStudy: {
      intro:
        'SwiftAuth is a React Native authentication SDK that turns the usual auth boilerplate — Firebase wiring, Google and Apple sign-in, session persistence, and error handling — into a drop-in package. Wrap your app in one provider, call one hook, and optionally render a polished pre-built screen. It is published to npm as rn-swiftauth-sdk and was built as an HNG Stage 8 team project (Mobile Ninjas).',
      problem:
        'Every React Native app re-implements the same authentication plumbing: initialise Firebase, add Google and Apple sign-in with their platform quirks, persist sessions, and translate cryptic Firebase error codes into messages people can read. It is repetitive, easy to get subtly wrong, and rarely typed well. SwiftAuth packages that plumbing behind a small, fully typed surface so teams adopt it in minutes and still keep full control when they need it.',
      architecture:
        'A three-layer design. <AuthProvider> takes a typed AuthConfig (Firebase keys plus enableGoogle / enableApple / googleWebClientId and a persistence mode of "local" or "memory"), initialises Firebase, and exposes everything through AuthContext. The useAuth() hook is the public surface — it returns { user, status, error, isLoading } plus signInWithEmail, signUpWithEmail, signOut, sendPasswordReset, and clearError. For teams that do not want to build their own UI, <AuthScreen> (composed of LoginForm, SignUpForm, and a reusable PasswordInput) ships a customisable screen out of the box. Social auth runs through @react-native-google-signin and Apple Authentication, sessions persist via AsyncStorage, and the Firebase ID token is exposed as user.token for backend Bearer verification. It is 100% TypeScript with a compiled dist/ and an Expo example app.',
      diagram: 'swiftauth',
      modules: [
        { name: 'core/AuthProvider.tsx · AuthContext.tsx', detail: 'Initialises Firebase from AuthConfig, owns auth state, and provides it through context.' },
        { name: 'hooks/useAuth.ts', detail: 'The public hook — user/status/error/isLoading plus signIn/signUp/signOut/sendPasswordReset/clearError.' },
        { name: 'components/AuthScreen.tsx', detail: 'Drop-in, customisable auth UI built from LoginForm, SignUpForm, and PasswordInput.' },
        { name: 'errors/errorMapper.ts · exceptions.ts', detail: 'Maps Firebase codes to a typed AuthException hierarchy (InvalidCredentials, EmailAlreadyInUse, WeakPassword, Network, TokenExpired, Google/Apple cancelled).' },
        { name: 'providers · Google / Apple', detail: 'Social sign-in via @react-native-google-signin and Apple Authentication, gated by enableGoogle / enableApple.' },
        { name: 'types/*.ts', detail: 'auth.types, config.types, error.types, ui.types — fully typed config, state, errors, and component props.' },
      ],
      sections: [
        {
          heading: 'Two levels of adoption',
          body: 'SwiftAuth meets teams where they are. Drop in <AuthScreen> for a complete, styled flow in minutes, or ignore the UI entirely and drive everything from useAuth() to build a custom experience. Both paths share the same provider, status state, and error handling, so you can start with the screen and graduate to full control without rewiring auth.',
        },
        {
          heading: 'Errors humans can read',
          body: 'Firebase throws codes like auth/weak-password; SwiftAuth routes them through a single errorMapper into a typed AuthException hierarchy, each carrying code, message, timestamp, and the originalError. Components read a friendly message and call clearError() to reset — no scattered try/catch parsing Firebase strings.',
        },
      ],
      challenge: {
        title: 'Hiding three auth providers behind one consistent surface',
        solution:
          'Email/password, Google, and Apple each have different SDKs, platform constraints (Apple is iOS-only), cancellation semantics, and error shapes. The hard part was presenting them as one predictable API. SwiftAuth normalises all three into a single useAuth() contract and a unified status state, gates the social providers with enableGoogle / enableApple flags, and funnels every failure — including user-cancelled Google/Apple flows — through one typed exception layer. The upshot: turning on Apple sign-in is a config flag, not a refactor.',
      },
      links: [
        { label: 'npm · rn-swiftauth-sdk', href: 'https://www.npmjs.com/package/rn-swiftauth-sdk' },
        { label: 'GitHub repo', href: 'https://github.com/allcodez/Auth-SDK_Stage8' },
      ],
    },
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
    title: 'Insighta Labs+',
    type: 'Name-Intelligence Platform',
    categories: ['backend', 'devops'],
    summary:
      'A name-intelligence platform that infers gender, age, and nationality from names — an ASP.NET Core backend with OAuth, RBAC and bulk CSV tooling, a live .NET 9 Genderize microservice, and a C# CLI client.',
    challenge:
      'Aggregating multiple inference signals behind secure, role-aware access with bulk ingestion and natural-language queries — and shipping a hardened, deployed classification service in front of flaky upstreams.',
    stackLine:
      'Stack: C#, ASP.NET Core, .NET 9, EF Core, SQLite (WAL), GitHub OAuth + PKCE, JWT, Docker, AWS EC2, Caddy, GitHub Actions, xUnit.',
    impact:
      'Impact: secure admin/analyst analytics with streaming CSV ingestion and export, plus a live, tested Genderize API (api.hng.credianlab.xyz) and an installable operator CLI.',
    details:
      'Insighta Labs+ is a name-intelligence platform: give it names and it infers gender, age, and nationality. It is made of three parts I worked on — an ASP.NET Core backend that aggregates the signals with secure access and bulk-data tools, a focused .NET 9 Genderize microservice deployed live to AWS, and a C# CLI client for operators and analysts.',
    tech: ['C#', 'ASP.NET Core', '.NET 9', 'EF Core', 'SQLite', 'GitHub OAuth', 'PKCE', 'JWT', 'RBAC', 'Docker', 'AWS EC2', 'Caddy', 'GitHub Actions'],
    liveUrl: 'https://api.hng.credianlab.xyz/index.html',
    repoUrl: 'https://github.com/ukemeikot/genderise-api',
    caseStudy: {
      intro:
        'Insighta Labs+ is a name-intelligence platform — give it names and it infers gender, age, and nationality. It is not one repo but three that I worked on: an ASP.NET Core backend that aggregates the signals behind secure, role-aware access; a focused .NET 9 Genderize microservice that is live on AWS; and a C# command-line client for operators and analysts.',
      problem:
        'Demographic inference from names is easy to demo and hard to run for real. Insighta Labs+ had to aggregate several third-party inference APIs, ingest large datasets, answer flexible queries, and expose all of it behind secure multi-role access — while staying fast on a single embedded datastore. And because it leans on flaky upstreams, the classification layer in front of them had to be more reliable than the services it calls.',
      architecture:
        'The backend is ASP.NET Core with EF Core over SQLite in WAL mode for concurrent reads/writes. Authentication uses GitHub OAuth with PKCE, JWT access tokens with refresh rotation, and HTTP-only cookies for web clients, gated by admin/analyst role-based authorization. A streaming upload endpoint ingests CSV (up to 500MB) with per-row validation, batch processing, and deduplication; a natural-language parser turns phrases like "young males from Nigeria" into structured filters, and the same filters drive a cached CSV export. Performance comes from composite indexes, versioned distributed caching, and DbContext pooling. Beside the backend sit a separate, hardened .NET 9 Genderize microservice — live on AWS EC2 behind Caddy — and a C# CLI that is the operator/analyst client for the platform.',
      diagram: 'insighta',
      modules: [
        { name: 'Backend · ASP.NET Core', detail: 'EF Core over SQLite (WAL) with GitHub OAuth + PKCE, JWT access/refresh rotation, and admin/analyst RBAC.' },
        { name: 'CSV ingestion', detail: 'Streaming upload (up to 500MB) with per-row validation, batch processing, and deduplication.' },
        { name: 'Natural-language query + export', detail: 'Parses phrases like "young males from Nigeria" into structured filters; the same filters power a cached CSV export.' },
        { name: 'Genderize microservice · .NET 9', detail: 'A hardened wrapper over Genderize.io: input validation, is_confident scoring, 502 on upstream failure, 19 xUnit tests — live on EC2 behind Caddy with GitHub Actions CI/CD.' },
        { name: 'Insighta CLI · C#', detail: 'A dotnet global tool (HngInsightaLabs.Cli): login / whoami, profile list/search/get/create/delete, and profiles export to CSV; configurable backend URL.' },
        { name: 'Performance', detail: 'Composite indexes, versioned distributed caching, DbContext pooling, and SQLite WAL pragmas for concurrent access.' },
      ],
      sections: [
        {
          heading: 'The Genderize microservice',
          body: 'The classification layer is a standalone .NET 9 service exposing GET /api/classify?name=. It validates input before any network call (400/422), maps the upstream response into a clean DTO — renaming count to sample_size and computing a single is_confident flag (probability ≥ 0.7 AND sample_size ≥ 100) — and turns any upstream timeout or outage into a clean 502 instead of a leaked exception. 19 xUnit tests (Moq + FluentAssertions) lock the behaviour in, and a GitHub Actions pipeline builds, tests, and deploys the Docker container to AWS EC2 behind Caddy on every push. It is live and documented with Swagger at api.hng.credianlab.xyz.',
        },
        {
          heading: 'The operator CLI',
          body: 'HNGinsighta-CLI is a C# global .NET tool (HngInsightaLabs.Cli, installable via dotnet tool install) and the operator/analyst client for the platform. It offers insighta login / logout / whoami, profile list / search / get / create / delete, and profiles export to filtered CSV, caching credentials at ~/.insighta/credentials.json with a configurable backend URL (INSIGHTA_BACKEND_URL or insighta config set-backend). It talks to the Insighta backend, giving analysts the same querying and export power from the terminal.',
        },
      ],
      challenge: {
        title: 'Being more reliable than the APIs you depend on',
        solution:
          'The platform is only as trustworthy as the third-party inference APIs behind it. The Genderize microservice makes that boundary defensive: input is validated before any network call, the upstream base URL, timeout, and key are validated at startup, and any upstream timeout, outage, or unusable payload is caught and surfaced as a clean 502 with a stable message. Confidence is reduced to one is_confident boolean instead of a raw probability callers must interpret, and 19 xUnit tests pin the validation rules, confidence boundaries, zero-sample handling, and upstream failure paths — so the contract holds even when the upstream wobbles.',
      },
      links: [
        { label: 'Live · Swagger', href: 'https://api.hng.credianlab.xyz/index.html' },
        { label: 'Try · classify?name=James', href: 'https://api.hng.credianlab.xyz/api/classify?name=James' },
        { label: 'Backend repo', href: 'https://github.com/ukemeikot/genderise-api' },
        { label: 'Genderize service repo', href: 'https://github.com/ukemeikot/genderize-wrapper-api' },
        { label: 'CLI repo', href: 'https://github.com/ukemeikot/HNGinsighta-CLI' },
      ],
    },
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
    caseStudy: {
      intro:
        'Nextcloud DDoS Detector is a small SRE-style service that watches a Nextcloud instance’s traffic in real time, decides when something abnormal is happening, and acts — banning offenders and alerting the team — without a human in the loop.',
      problem:
        'Volumetric spikes and credential-stuffing do not announce themselves, and naive fixed thresholds either miss real attacks or lock out legitimate users during normal busy periods. The detector had to tell the difference using the traffic’s own rolling baseline, then respond automatically and proportionally.',
      architecture:
        'A Python/FastAPI service tails the Nginx access logs of a Nextcloud + MySQL stack (all in Docker Compose). It keeps 60-second sliding-window deques for per-IP and global request rates, and a rolling 30-minute baseline blended with EWMA so "normal" is modelled per hour of day. Each window is scored with both a z-score and a multiplier check — whichever trips first flags an anomaly — and an error-surge rule tightens thresholds when 4xx/5xx rates spike (the signature of credential stuffing). Offending IPs get a graduated ban via iptables, and a FastAPI dashboard refreshes every 3 seconds while bans, unbans, and global anomalies fire Slack alerts.',
      modules: [
        { name: 'sliding windows', detail: '60-second deques tracking per-IP and global request rates in real time.' },
        { name: 'rolling baseline', detail: 'A 30-minute baseline with EWMA blending models normal traffic by hour of day.' },
        { name: 'anomaly scoring', detail: 'Combined z-score + multiplier detection; whichever threshold breaches first triggers.' },
        { name: 'error-surge tightening', detail: 'Tightens thresholds when 4xx/5xx rates spike to catch credential stuffing.' },
        { name: 'graduated bans · iptables', detail: 'Escalating bans (10 min → 30 min → 2 hr → permanent) for repeat offenders.' },
        { name: 'dashboard + Slack', detail: 'A FastAPI dashboard refreshing every 3s, with Slack alerts on bans/unbans/anomalies.' },
      ],
      challenge: {
        title: 'Telling an attack apart from a busy Tuesday',
        solution:
          'Static rate limits are blunt — set them low and you ban real users at peak, set them high and you miss slow attacks. I made the detector learn the site’s own rhythm: a rolling 30-minute baseline blended with EWMA captures normal load per hour, and anomalies are judged relative to that baseline using both a z-score and a multiplier, so a spike only counts as a spike compared to what is normal right now. Error-surge tightening adds a second signal for credential stuffing, and bans escalate gradually so a one-off burst does not earn a permanent block.',
      },
      links: [{ label: 'Repo', href: 'https://github.com/ukemeikot/nextcloud-ddos-detector' }],
    },
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
    caseStudy: {
      intro:
        'DevOps Sandbox is a self-service platform for throwaway environments: spin one up, deploy into it, break it on purpose, watch it heal or fail, and have it clean itself up — all from a small REST control plane.',
      problem:
        'Teams need safe, isolated places to test deployments and failure scenarios, but standing these up by hand is slow and they are easy to leave running and forget. The sandbox had to automate the whole lifecycle — provision, deploy, monitor, chaos-test, and tear down — on a single VM, and behave identically whether the host is Linux or Windows.',
      architecture:
        'A Python/Flask REST control plane (port 5000) drives Docker and Docker Compose, with Nginx as the reverse proxy. Each environment gets its own Docker network and container so they cannot interfere. The lifecycle layer is implemented twice — Bash and PowerShell — producing identical on-disk results, so the same platform runs on Linux or Windows. A background cleanup daemon destroys environments when their TTL expires, a health monitor polls every 30 seconds and flips an environment to "degraded" after three consecutive failures (~90s), and chaos modes simulate crash, pause, network disruption, recovery, and stress. Logs are shipped in real time with a forensic archive retained.',
      modules: [
        { name: 'control plane · Flask', detail: 'REST API on port 5000 to provision, deploy, inspect, and tear down environments.' },
        { name: 'isolation', detail: 'Each environment gets its own Docker network and container to prevent cross-env interference.' },
        { name: 'dual lifecycle · Bash + PowerShell', detail: 'The lifecycle layer is implemented twice with identical results, for Linux and Windows hosts.' },
        { name: 'cleanup daemon · TTL', detail: 'Background daemon destroys environments when their time-to-live expires.' },
        { name: 'health monitor', detail: 'Polls every 30s; flips status to degraded after three consecutive failures (~90s).' },
        { name: 'chaos modes', detail: 'Simulates crash, pause, network disruption, recovery, and stress for failure testing.' },
      ],
      challenge: {
        title: 'One platform, two operating systems, identical behaviour',
        solution:
          'The hard requirement was that the same sandbox behave the same on Linux and Windows. Rather than abstract over a single scripting language, the lifecycle layer is implemented twice — once in Bash, once in PowerShell — and verified to produce identical on-disk results, while the Flask control plane and Docker orchestration stay shared. That keeps the developer experience and the REST contract identical regardless of host, and makes the chaos and health behaviour reproducible across environments.',
      },
      links: [{ label: 'Repo', href: 'https://github.com/ukemeikot/devops-sandbox' }],
    },
  },
];
