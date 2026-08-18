// REFACTORED
import type { ProjectEntry } from './types';

export const projects: ProjectEntry[] = [
  // ---------- Xental (flagship, payments platform + product) ----------
  {
    slug: 'xental',
    title: 'Xental',
    type: 'Payments Infrastructure Platform',
    categories: ['backend', 'devops', 'frontend-mobile'],
    summary:
      'A payments infrastructure platform — hosted checkout, sub-merchant onboarding + KYC, dedicated virtual accounts, split settlement, transfers/payouts, and a full developer platform (API keys, OAuth, sandbox, webhooks) — on Nomba bank rails, with an AI-native layer (a payments Copilot, insights/forecasting, automation flows, and agent-discoverable APIs). I built it end-to-end: the .NET backend and its React/Next dashboard + checkout, the developer platform, security, CI/CD and AWS operations — plus PayLibre, a multi-tenant school-fee product built on top of Xental.',
    challenge:
      'Move real money reliably and safely: reconcile bank transfers into the right student’s fees, pay schools out, and expose a public API to third parties — multi-tenant, idempotent, and hardened against fraud and concurrency, shipping continuously to staging and production.',
    stackLine:
      'Stack: .NET 10, ASP.NET Core, EF Core, PostgreSQL, Nomba, HMAC-signed webhooks, JWT + HttpOnly cookies, React, Next.js, TypeScript; infra: Docker + Docker Compose, Traefik + Let’s Encrypt, GitHub Actions → GHCR, AWS EC2, Trivy + gitleaks scanning, OpenTelemetry, pg_dump backups.',
    impact:
      'Impact: a live payments platform (xental.online) — hosted checkout, sub-merchant onboarding, virtual accounts, split settlement, and a developer platform with sandbox + webhooks — plus PayLibre processing real deposits, refunds and settlements on top of it, all deployed continuously to staging and prod behind a review-driven security hardening pass.',
    details:
      'Xental is a payments infrastructure platform: businesses onboard as sub-merchants (KYC + document review), collect via a hosted checkout or a dedicated virtual account, split and settle funds to multiple parties, and pay out — all on Nomba bank rails. It ships with a real developer platform (scoped API keys, OAuth, a live sandbox, managed webhook endpoints, OpenAPI docs) and an AI-native layer: a payments Copilot you can ask in natural language, insights/aging/forecast analytics, automation flows, and agent-discoverable APIs (a `/.well-known/llms.txt`). I built the .NET 10 backend, the React/Next dashboard, hosted checkout and sandbox, the developer platform, and ran it in production on AWS. PayLibre — a multi-tenant school-fee platform — is the flagship product I built on top of Xental, and I operate the wider family (PayLibre, Kredar, AjoVault) on shared infrastructure.',
    tech: ['.NET 10', 'ASP.NET Core', 'EF Core', 'PostgreSQL', 'Nomba', 'React', 'Next.js', 'TypeScript', 'Docker', 'Docker Compose', 'Traefik', 'GitHub Actions', 'GHCR', 'AWS EC2', 'Trivy', 'OpenTelemetry'],
    liveUrl: 'https://xental.online',
    preview: '/previews/xental.png',
    caseStudy: {
      intro:
        'Xental is a payments infrastructure platform — think of the primitives a business needs to accept and move money: hosted checkout, sub-merchant onboarding with KYC, dedicated virtual accounts for bank-transfer collection, split settlement across parties, transfers/payouts, and a full developer platform (scoped API keys, OAuth, a live sandbox, managed webhooks, OpenAPI docs) — all riding Nomba bank rails. On top of the money primitives it has an AI-native layer: a Copilot you can ask about your payments in plain language, insights/aging/forecast analytics, automation flows, and APIs designed to be discoverable by AI agents. I built it end-to-end — the .NET 10 backend, the React/Next dashboard and hosted checkout, the developer platform and sandbox, the security hardening, and the AWS CI/CD that ships it — and I run it in production. PayLibre, a multi-tenant school-fee product, is the flagship built on Xental’s API, so this is a rare full-stack story: the rail and a real product on top of it.',
      problem:
        'Money is unforgiving. A deposit must land against the correct student’s oldest-due fees, exactly once, even when two transfers arrive at the same instant; refunds must never double-pay; a public API opened to schools must not leak one tenant’s data to another; and inbound provider webhooks must be authenticated, audited, and recoverable when they fail. All of this had to be multi-tenant, continuously deployed, and safe enough to touch real bank rails.',
      architecture:
        'Xental is an ASP.NET Core (.NET 10) platform in layered clean architecture (Api → Application → Infrastructure → Domain) over PostgreSQL with EF Core, fronting Nomba for the bank rails. The API surface is broad by design: merchant onboarding/KYC, sub-merchants, virtual accounts, hosted checkout (with a Server-Sent-Events stream so a checkout page shows live payment status), transactions and transfers, settlement splits with hold/release, and an admin plane to review and approve merchants. Around the money core sits a real developer platform — scoped API keys, OAuth, a live sandbox environment, managed webhook endpoints with signed delivery, and OpenAPI docs — plus an AI-native layer: a Copilot (`POST /copilot/ask`), insights (aging/forecast/customers), automation flows, and agent-discoverable APIs served at `/.well-known/llms.txt`. Clients are a React/Next merchant dashboard, the hosted checkout, and a developer/sandbox console. PayLibre consumes this API with client-credentials auth to provision sub-merchants and virtual accounts and to trigger settlement/refunds. Everything ships on AWS EC2 behind Traefik (Let’s Encrypt TLS), built by GitHub Actions to GHCR and released via a repository-dispatch to an infrastructure repo, with EF migrations applied on startup, OpenTelemetry tracing, and daily pg_dump backups.',
      diagram: 'xental',
      contributions: [
        {
          area: 'Xental platform · payments infrastructure',
          items: [
            'Built the core money primitives: sub-merchant onboarding with KYC (business details + document upload + review/approval), dedicated virtual accounts, transactions, transfers/payouts, and settlement splits with hold/release across multiple parties — all on Nomba bank rails.',
            'Built a hosted checkout: create a checkout session by API, a hosted payment page, and a Server-Sent-Events stream so the page reflects live payment status without polling.',
            'Built a real developer platform: scoped API keys, OAuth, a live sandbox environment, self-managed webhook endpoints with signed delivery, and published OpenAPI docs.',
            'Added an AI-native layer: a payments Copilot (natural-language questions over your account), insights (aging / forecast / customers), automation flows, and agent-discoverable APIs served at `/.well-known/llms.txt`.',
          ],
        },
        {
          area: 'PayLibre · reconciliation on top of Xental',
          items: [
            'Integrated the Xental platform: sub-merchant + payout provisioning per school, dedicated virtual accounts per student, bank lookup, and settlement-balance reporting.',
            'Built idempotent deposit reconciliation from HMAC-signed webhooks — oldest-due-first fee attribution with partial payments, surplus handling, and exactly-once semantics keyed on the provider transaction reference.',
            'Serialized the money paths with a per-student/per-refund Postgres advisory lock to eliminate concurrent-deposit double-allocation and lost updates.',
            'Implemented dual-control (maker-checker) refunds executed against Xental, plus a per-school settlement report (collected / settled / pending).',
          ],
        },
        {
          area: 'Backend · .NET / product',
          items: [
            'Built PayLibre end-to-end: schools, classes, students (with CSV import), fee categories, fees fanned out to per-student invoices, and payments.',
            'Fees lifecycle: configurable late fees (per-school %, grace, per-fee opt-out) and dunning reminders (T-3 → due → weekly-overdue, capped) driven by a hosted background worker under an advisory lock.',
            'Term rollover + bulk operations (promote, activate/deactivate, CSV export) and a collections dashboard with trends and a next-month forecast.',
            'Parent app: children, fee accounts, payment history, downloadable receipts, payment disputes, and multi-guardian per student.',
          ],
        },
        {
          area: 'Auth & access control',
          items: [
            '2-step emailed-OTP sign-in for the dashboard and parent app, HttpOnly+Secure cookies alongside bearer JWTs, rotating refresh tokens, and forgot/reset password.',
            'Role model with least privilege — Owner/Admin/Bursar plus read-only Accountant/Auditor and a ClassTeacher scoped to their own classes (session-carried class claims + row-level scoping).',
            'Staff invitations (single-use, expiring, emailed tokens) and an immutable per-school audit log of who-did-what.',
            'A scoped API-key layer + public API (X-Api-Key) so schools’ own systems can sync students and read balances, with per-scope authorization.',
          ],
        },
        {
          area: 'Integrations & webhooks',
          items: [
            'Inbound webhook pipeline with HMAC-SHA256 signature verification, an audit trail of every event, a dead-letter queue, and an operator replay endpoint.',
            'Outbound webhooks to schools (payment.received / invoice.paid) — HMAC-signed, delivered with exponential-backoff retries by the background worker.',
            'Config-gated notification channels: transactional email (Resend), SMS (Termii/Twilio), and a push-notification substrate (FCM) with device-token registration.',
          ],
        },
        {
          area: 'Security hardening',
          items: [
            'Ran a multi-angle security review (auth/tenancy, money/idempotency, data exposure, robustness) and fixed the findings.',
            'Closed an SSRF vector in outbound webhooks (block loopback/link-local/metadata/private IPs at send time, disable redirects); made the JWT signing key fail-fast and the inbound webhook fail-closed when misconfigured.',
            'Enforced tenant + role scoping on every read path, added constant-time secret comparisons, neutralized CSV formula injection in exports, HTML-encoded email content, and added GDPR data export + account erasure.',
            'Added `UseForwardedHeaders` so per-client rate limiting works behind Traefik, and restricted API docs to non-production.',
          ],
        },
        {
          area: 'Frontend · React / Next.js',
          items: [
            'Built the dashboard surfaces: school registration, settlement + late-fee settings, and a Developers area (API-key management) with a self-serve public-API docs page.',
            'Wired the frontend to the API with HttpOnly-cookie sessions that work cross-site from localhost without the cookie pitfalls, and fixed a production NEXT_PUBLIC API-URL + CORS misconfiguration.',
          ],
        },
        {
          area: 'DevOps · AWS / CI-CD',
          items: [
            'CI/CD with GitHub Actions building images to GHCR and releasing via repository-dispatch to an infrastructure repo; staging-first, then production.',
            'AWS EC2 hosting behind Traefik with Let’s Encrypt TLS, EF migrations applied on startup, environment secrets rendered at deploy time, and scheduled daily pg_dump backups with rotation.',
            'Operated the wider product family (PayLibre, Kredar, AjoVault) on shared infrastructure and diagnosed a live reconciliation incident from server + provider logs — tracing it to upstream webhook delivery rather than an application fault.',
          ],
        },
      ],
      challenge: {
        title: 'Reconciling real money exactly once, under concurrency',
        solution:
          'The dangerous moment in a payments system is two events touching the same balance at once. Reconciliation reads a student’s open invoices, attributes the deposit oldest-due-first, and writes the results — a classic read-then-write that loses money under a race. I wrapped each money path in a Postgres transaction-scoped advisory lock keyed by the student (and by the refund), so concurrent deposits for the same student serialize instead of double-allocating, and a duplicate webhook becomes a clean no-op instead of a 500 — falling back to a no-op on the test database. Idempotency is anchored on the provider’s transaction reference, refunds require a second approver and lean on the provider’s per-deposit refund idempotency, and every inbound event is audited and replayable. The result is a reconciliation pipeline that is exactly-once, tamper-evident, and safe to run against live bank rails.',
      },
      links: [
        { label: 'Xental · xental.online', href: 'https://xental.online' },
        { label: 'PayLibre · app.paylibre.xental.online', href: 'https://app.paylibre.xental.online' },
      ],
    },
  },

  // ---------- ReadHub (reading & study platform) ----------
  {
    slug: 'readhub',
    title: 'ReadHub',
    type: 'Digital Reading & Study Platform',
    categories: ['backend', 'frontend-mobile', 'devops'],
    summary:
      'A reading and study platform where readers upload their own books (PDF/EPUB), read them in the browser, take notes, and track reading sessions and stats — with Google sign-in and direct-to-storage uploads. I built the Node/Express (TypeScript) API and the React/Vite app, migrated file storage to S3-compatible object storage with presigned uploads, and run it in production with CI/CD and encrypted off-site backups.',
    challenge:
      'Let readers upload large book files straight to object storage — never through the API — read them in-browser, and keep MongoDB and the file store consistent, all deployed continuously and backed up so no reader ever loses their library.',
    stackLine:
      'Stack: Node.js 20, Express 5 (TypeScript/ESM), MongoDB (Mongoose), React 19, Vite 7, Tailwind CSS, Google OAuth, Brevo, MinIO (S3) with presigned PUT, epub.js / pdf.js; infra: Docker + Docker Compose, shared Traefik + Let’s Encrypt, GitHub Actions → GHCR, Cloudflare R2 backups.',
    impact:
      'Impact: a live platform (app.readhub.study) with in-browser PDF/EPUB reading, notes, reading-session tracking, and presigned-upload storage — shipped by a PR-driven CI/CD pipeline to a shared VPS, with nightly age-encrypted database + file backups to Cloudflare R2 and a tested restore.',
    details:
      'ReadHub is a reading platform: readers sign in with Google, upload their own books (PDF and EPUB) straight to object storage, read them in the browser (pdf.js / epub.js), take notes, and see reading-session tracking and stats. I built the Node.js 20 / Express 5 backend in TypeScript (ESM) over MongoDB, and the React 19 / Vite frontend, then migrated file storage off a third-party image host onto S3-compatible MinIO with browser-side presigned-PUT uploads so large files never transit the API. It runs in production on a shared VPS behind one Traefik edge — a separate staging and production stack, each with its own MongoDB and MinIO — released by a pull-request-driven GitHub Actions pipeline, and protected by nightly, age-encrypted database and file backups to Cloudflare R2.',
    tech: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'React', 'Vite', 'Tailwind CSS', 'Google OAuth', 'MinIO / S3', 'Docker', 'Traefik', 'GitHub Actions', 'Cloudflare R2'],
    liveUrl: 'https://app.readhub.study',
    repoUrl: 'https://github.com/READHUB-STUDYAPP/readhub-backend',
    preview: '/previews/readhub.png',
    caseStudy: {
      intro:
        'ReadHub is a reading and study platform — sign in with Google, bring your own books (PDF or EPUB), read them in the browser, take notes, and track your reading sessions and stats. I built both sides: the Node.js / Express (TypeScript) API over MongoDB and the React / Vite app, then re-platformed how files are stored so uploads go straight from the browser to object storage. It runs in production on a shared VPS with a PR-driven CI/CD pipeline and encrypted, off-site backups, so this is a full-stack story from the reader’s upload button down to the nightly backup.',
      problem:
        'Books are big files, and routing every upload through the API wastes bandwidth, ties up request threads, and caps file size. ReadHub needed the browser to upload directly to object storage while the API stayed the source of truth for who owns what — which means signed, time-limited upload URLs, a storage layer the API can also read from, and MongoDB records that never drift from the files they point at. On top of that it had to run two isolated environments (staging + production) cheaply on one box, deploy on every merge, and never lose a reader’s library.',
      architecture:
        'The backend is Express 5 on Node 20, written in TypeScript as ESM, over MongoDB with Mongoose. Auth is Google OAuth plus JWTs with rotating refresh tokens; transactional email goes through Brevo. File storage is S3-compatible MinIO reached with the AWS SDK v3: the browser asks the API for a short-lived presigned PUT URL and uploads the book directly to storage, and delivery is served from a public-read bucket. The React 19 / Vite 7 frontend renders PDFs with pdf.js and EPUBs with epub.js. In production it is a Docker Compose stack — backend, frontend (nginx), MongoDB, and MinIO — running as an isolated project per environment (staging and production) behind a single shared Traefik edge that terminates Let’s Encrypt TLS for every hostname (app./api./files.readhub.study). Releases are pull-request-driven: pushing to staging or main builds images to GHCR and dispatches a deploy to an infrastructure repo, which renders env from secrets, ships over SSH, and health-checks with an auto-rollback on staging. A nightly systemd timer backs the database and files up, age-encrypted, to Cloudflare R2.',
      contributions: [
        {
          area: 'Backend · Node / Express / TypeScript',
          items: [
            'Built the Express 5 (TypeScript, ESM) API over MongoDB: books, notes, reading sessions and stats, user profiles, and a waitlist.',
            'Google OAuth sign-in with JWT access tokens, rotating refresh tokens in HttpOnly cookies, and email verification / password reset via Brevo.',
            'Modelled reading-session tracking and per-user stats, and a notes system tied to each book.',
          ],
        },
        {
          area: 'Storage · Cloudinary → MinIO / S3',
          items: [
            'Migrated file storage from a third-party image host to S3-compatible MinIO using the AWS SDK v3, so books and cover images live in a bucket the platform controls.',
            'Implemented browser-side presigned-PUT uploads: the API signs a short-lived URL and the browser uploads the file directly to storage, keeping large files off the request path.',
            'Fixed a real production upload bug — presigned URLs must be signed against the public files host, not the internal container endpoint — and disabled the SDK’s default flexible checksum so MinIO accepts the real-body PUT.',
          ],
        },
        {
          area: 'Frontend · React / Vite',
          items: [
            'Built the React 19 / Vite reader UI with in-browser PDF (pdf.js) and EPUB (epub.js) reading, a library, notes, and profile.',
            'Wired uploads to the presigned-URL flow and reworked the client so it stores the returned public file URL.',
          ],
        },
        {
          area: 'DevOps · shared VPS / CI-CD',
          items: [
            'Stood up the infrastructure repo: a Docker Compose stack (backend, frontend, MongoDB, MinIO) run as an isolated project per environment behind one shared Traefik edge with Let’s Encrypt TLS.',
            'Built the PR-driven pipeline: push to staging/main → GitHub Actions builds per-environment images to GHCR → repository-dispatch → deploy over SSH with a health check and staging auto-rollback; production rollback is a manual workflow.',
            'Added nightly backups to Cloudflare R2 — an age-encrypted mongodump plus a copy of the file store — behind a systemd timer, and verified a full restore end-to-end.',
            'Added PR CI checks (build / lint) as required status checks and branch protection so changes reach staging and main only through reviewed pull requests.',
          ],
        },
      ],
      challenge: {
        title: 'Uploading big files without routing them through the API',
        solution:
          'The naive design streams every book upload through the API, which throttles throughput and caps file size. Instead the browser uploads straight to object storage: the API issues a short-lived presigned PUT URL scoped to a single object key, the browser PUTs the file directly to MinIO, and only the resulting public URL is recorded in MongoDB. The subtle failure was that presigned URLs must be signed against the public files hostname the browser will actually reach — signing against the internal container endpoint produced an unreachable, mixed-content URL — and the AWS SDK’s default flexible checksum, computed over an empty presign body, had to be disabled so MinIO accepts the real upload. With those fixed, uploads bypass the API entirely, stay fast, and the database and file store stay consistent.',
      },
      links: [
        { label: 'Live · app.readhub.study', href: 'https://app.readhub.study' },
        { label: 'API docs · api.readhub.study', href: 'https://api.readhub.study/api-docs' },
      ],
    },
  },

  // ---------- Kredar (B2B virtual-accounts fintech — my role: deployment / DevOps) ----------
  {
    slug: 'kredar',
    title: 'Kredar',
    type: 'B2B Fintech · Deployment & DevOps',
    categories: ['devops', 'backend'],
    summary:
      'Kredar is a team-built Dedicated Virtual Accounts (DVA) fintech — businesses provision and reconcile dedicated virtual bank accounts for their customers on Nomba bank rails, built for the DevCareer × Nomba Hackathon. My contribution was deployment and production-readiness across the Kredar family (Kredar + AjoVault): Dockerizing the .NET and Next.js services, adding health checks and configurable CORS, wiring transactional email, building the GitHub Actions CI/CD, hardening the containers, and helping run the shared AWS infrastructure.',
    challenge:
      'Take a hackathon codebase written by the team and make it safely deployable and continuously shipped — containerized, health-checked, security-hardened, and promoted staging-first with a reviewer-gated production release, across two products sharing infrastructure.',
    stackLine:
      'My layer: Docker + Docker Compose, Traefik + Let’s Encrypt, GitHub Actions (build → GHCR → infra dispatch), AWS EC2 (eu-west-1), Trivy hardening. Product stack (team-built): .NET 10 / ASP.NET Core / EF Core / PostgreSQL / Nomba; Next.js frontend.',
    impact:
      'Impact: the Kredar family (kredar.xyz + AjoVault) deployed to AWS with a staging-first, reviewer-gated production pipeline — containerized, health-checked, CORS-configurable, and security-hardened.',
    details:
      'Kredar is a Dedicated Virtual Accounts engine built by a team for the DevCareer × Nomba Hackathon: businesses onboard as tenants, complete KYC, and provision a dedicated virtual bank account per customer on Nomba bank rails. I did not write the product features — my role across the family (Kredar and its companion savings app, AjoVault) was deployment and production-readiness: I containerized the .NET and Next.js services, added /health endpoints and configurable CORS, bound the Resend transactional-email config, built the GitHub Actions build-and-dispatch CI/CD, hardened the Docker images (non-root, Trivy findings), and contributed to the shared AWS infrastructure that runs both products behind Traefik with staging-first, reviewer-gated production releases.',
    tech: ['Docker', 'Docker Compose', 'Traefik', 'GitHub Actions', 'GHCR', 'AWS EC2', 'Trivy', '.NET 10', 'Next.js', 'CORS', 'Resend'],
    liveUrl: 'https://kredar.xyz',
    repoUrl: 'https://github.com/kredar-vault/kredar-backend',
    preview: '/previews/kredar.png',
    caseStudy: {
      intro:
        'Kredar is a Dedicated Virtual Accounts (DVA) fintech — infrastructure that lets a business give each of its customers a dedicated virtual bank account and reconcile the money that arrives — built by a team for the DevCareer × Nomba Hackathon. I want to be precise about my role: I did not build the product features. I joined as the deployment / DevOps engineer for the family (Kredar and its companion savings app, AjoVault), and my job was to take the application code the team wrote and make it production-ready and continuously deployable.',
      problem:
        'A hackathon codebase runs on a laptop; production does not. To ship Kredar and AjoVault safely I had to containerize the .NET and Next.js services, give each a health endpoint and configurable CORS, get transactional email working, harden the images against common findings, and stand up a pipeline that builds and deploys on every merge — across two separate products that share one set of infrastructure, without letting an unreviewed change reach production.',
      architecture:
        'The products are team-built: the Kredar backend is ASP.NET Core (.NET 10) with EF Core over PostgreSQL on Nomba rails, and the frontends are Next.js. My layer sits around that code. Each service ships as a Docker image (Next.js built in standalone output to keep images small; the backend runs as a non-root user), exposes a /health endpoint, and reads CORS origins from configuration so the same image runs in staging and production. GitHub Actions builds each image, pushes it to GHCR, and fires a repository-dispatch to a shared infrastructure repo that deploys over the family’s AWS EC2 (eu-west-1) host behind Traefik with Let’s Encrypt TLS — promoting staging first, then production behind a reviewer gate. AjoVault follows the same shape on the same shared infrastructure.',
      contributions: [
        {
          area: 'Deployment & production-readiness',
          items: [
            'Wrote the Dockerfiles for the .NET backend and the Next.js frontends (Next.js standalone output for small images), and added a root landing route.',
            'Added /health endpoints and made CORS origins configurable so one image runs across staging and production.',
            'Bound the Resend transactional-email configuration so account and notification email works in deployed environments.',
          ],
        },
        {
          area: 'CI/CD · GitHub Actions',
          items: [
            'Built the build-and-dispatch pipeline: GitHub Actions builds each service image, pushes to GHCR, and fires a repository-dispatch to the shared infrastructure repo to deploy.',
            'Made the infra dispatch best-effort and taught CI to ignore .env.* secret files; enforced LF line endings for Dockerfiles and workflows.',
            'Kept production builds from failing on pre-existing type/lint errors so deploys stay unblocked, matching the pipeline used across the family.',
          ],
        },
        {
          area: 'Security hardening',
          items: [
            'Ran the containers as a non-root user to clear a Trivy DS-0002 finding, and kept secret files (.env.*) out of the build context and CI.',
            'Deployed with configurable CORS and a scoped production configuration rather than permissive defaults.',
          ],
        },
        {
          area: 'Shared infrastructure',
          items: [
            'Contributed to the shared kredar-infrastructure (Docker Compose + Terraform for bare-VPS / multi-cloud) that hosts the family.',
            'Helped operate Kredar and AjoVault together on AWS EC2 (eu-west-1) behind Traefik, with staging-first, reviewer-gated production releases.',
          ],
        },
      ],
      challenge: {
        title: 'Making a hackathon build production-ready without owning its code',
        solution:
          'The work was to industrialize code I did not write, without changing its behaviour. I kept every deployment concern outside the application logic: containerization with a non-root runtime and Next.js standalone output, a /health endpoint per service, CORS driven entirely by configuration, transactional email bound from config, and a GitHub Actions pipeline that builds to GHCR and dispatches a deploy to shared infrastructure. Production is promoted staging-first behind a reviewer gate, and secret files are kept out of the image and CI — so two hackathon products became something that ships continuously and safely on shared AWS infrastructure.',
      },
      links: [
        { label: 'Live · kredar.xyz', href: 'https://kredar.xyz' },
        { label: 'Backend repo (team)', href: 'https://github.com/kredar-vault/kredar-backend' },
      ],
    },
  },

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
    preview: '/previews/fitcall.png',
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
    preview: '/previews/crednews-newsroom.png',
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

  // ---------- TADIS 2026 (3D conference site) ----------
  {
    slug: 'tadis',
    title: 'TADIS 2026',
    type: '3D Conference Website',
    categories: ['frontend-mobile'],
    summary:
      'A 3D, scroll-driven marketing site for The African Dream Network International Summit (TADIS 2026) — a WebGL Africa globe, sticky-stack narrative panels, speaker stages, and one-tap registration delegated to Luma. Built with React, TypeScript and three.js, and tuned to run the whole scroll choreography at 60fps.',
    challenge:
      'Drive a page full of scroll-linked 3D and motion at 60fps without re-rendering React on every frame, and degrade gracefully to a calm, fast layout on phones and for reduced-motion users.',
    stackLine:
      'Stack: React, TypeScript, Vite, three.js (WebGL), feature-sliced architecture, a shared rAF scroll driver, the Luma checkout embed; deployed on Vercel.',
    impact:
      'Impact: a live event site (tadis-conference.vercel.app) with a WebGL globe and scroll-driven storytelling that stays at 60fps, collapses cleanly to one column on mobile, honours prefers-reduced-motion, and hands ticketing to Luma with a plain-link fallback.',
    details:
      'TADIS 2026 is the marketing site for a one-day summit in Uyo, Akwa Ibom. It is a single, richly animated page: a three.js Africa globe behind the hero, sticky-stack panels that swap as you scroll, speaker stages and reveal rails, a countdown, programme, venue and FAQ. It is feature-sliced (one folder per section) with all copy kept out of the components in a typed content layer, so the running order or a speaker can change by editing data, not JSX. Registration is delegated to Luma via its official embed. I built it end-to-end and deployed it on Vercel.',
    tech: ['React', 'TypeScript', 'Vite', 'three.js', 'WebGL', 'CSS', 'Vercel'],
    liveUrl: 'https://tadis-conference.vercel.app',
    repoUrl: 'https://github.com/ukemeikot/tadis-conference',
    preview: '/previews/tadis.png',
    caseStudy: {
      intro:
        'TADIS 2026 is the site for The African Dream Network International Summit — one day, in Uyo. I wanted it to feel like the event: a WebGL Africa globe behind the hero, narrative panels that stack and swap as you scroll, speaker stages that come forward, a live countdown. But a page like that is easy to make janky, so the real work was making all of it run smoothly and still be fast and calm on a phone. I built it solo — architecture, 3D, motion, content model, and deploy.',
      problem:
        'Scroll-driven 3D is where marketing sites go to die: bind effects to React state and you re-render the tree dozens of times a second and drop frames. On top of that the motion has to be a feature on a laptop and a non-issue on a phone — no wasted battery, no motion for people who ask for less — and registration has to actually issue a ticket, which a static site can’t do on its own.',
      architecture:
        'A feature-sliced React + TypeScript app (Vite): one folder per page section, a shared layer for cross-cutting UI and hooks, and every piece of copy/data in a typed content layer so editors never touch JSX. All scroll-driven effects subscribe to one rAF-throttled listener (useScrollFrame) and write straight to the DOM through refs — deliberately not React state — so the 60fps path never re-renders the tree; useScrollSpy is the single exception, because the nav underline changes only a handful of times per page. A useRichMotion() gate enables the 3D choreography only at viewport ≥900px and when prefers-reduced-motion is off; below that the CSS has already collapsed to one column, and the three.js globe renders a single static frame instead of animating. Registration is delegated to Luma’s official checkout embed, with each trigger a real <a href> so it degrades to a plain link if the embed script is blocked. Deployed on Vercel.',
      contributions: [
        {
          area: '3D & motion',
          items: [
            'Built the three.js Africa globe behind the hero, with a static-frame fallback under reduced motion.',
            'Wrote a single rAF-throttled scroll driver that all scroll effects share, writing to the DOM via refs to avoid per-frame React re-renders.',
            'Built the sticky-stack about panels, speaker stages and reveal rails, and a live countdown.',
            'Added a motion budget (useRichMotion) that gates the 3D on width ≥900px and no prefers-reduced-motion.',
          ],
        },
        {
          area: 'Architecture & content',
          items: [
            'Structured the app feature-sliced (one folder per section) with a shared UI/hooks layer.',
            'Kept all copy and data in a typed content layer so the programme, speakers, venue and FAQ change by editing data, not components.',
            'Centralised date/venue/contact in a single site config that the hero, countdown, programme, registration and footer all read from.',
          ],
        },
        {
          area: 'Registration & delivery',
          items: [
            'Integrated Luma’s official checkout embed for ticketing, loaded after mount and re-scanned because React renders the triggers late.',
            'Made every register trigger a real <a href> so it degrades to a plain link if the embed is blocked.',
            'Built the asset pipeline — full-size (≤1600px) plus 900px card crops with EXIF rotation baked in — and deployed on Vercel.',
          ],
        },
      ],
      challenge: {
        title: '60fps scroll choreography without re-rendering React',
        solution:
          'The trap in a scroll-animated page is running the animation through React state — every frame becomes a re-render and the page stutters. Instead, all scroll-driven effects subscribe to one rAF-throttled listener and mutate the DOM directly through refs, so the 60fps path never touches React’s render cycle. The only component allowed to re-render on scroll is the nav (useScrollSpy), because its underline moves just a few times per page. Combined with a motion budget that switches the 3D off entirely on phones and under prefers-reduced-motion, the page feels alive on a laptop and stays fast and calm everywhere else.',
      },
      links: [
        { label: 'Live · tadis-conference.vercel.app', href: 'https://tadis-conference.vercel.app' },
        { label: 'GitHub repo', href: 'https://github.com/ukemeikot/tadis-conference' },
        { label: 'Event · Luma', href: 'https://luma.com/xpbcg8ks' },
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
    preview: '/previews/messaging-calling-backend.png',
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
];
