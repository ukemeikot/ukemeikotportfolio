// REFACTORED
import crypto1 from '../assets/crypto1.jpg';
import crypto2 from '../assets/crypto2.jpg';
import noraMobile from '../assets/nora-mobile.jpg';
import noraWeb from '../assets/nora-web.jpg';
import type { ProjectEntry } from './types';

export const projects: ProjectEntry[] = [
  {
    slug: 'mira-care',
    title: 'Mira Care',
    type: 'Health-Tech AI Platform',
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
    liveUrl: 'https://app.miraproject.online',
    repoUrl: 'https://github.com/ukemeikot',
    isMira: true,
  },
  {
    slug: 'cryptocredwallet',
    title: 'CryptoCredWallet',
    type: 'High-Performance Mobile App',
    summary:
      'A cryptocurrency wallet focused on secure storage, instant onboarding, and reliable portfolio visibility even when network conditions degrade.',
    challenge:
      'The most interesting problem was removing onboarding lag caused by wallet generation while keeping security controls and state management trustworthy.',
    stackLine:
      'Stack: React Native, TypeScript, Zustand, SecureStore, AsyncStorage, CoinGecko API, biometric auth.',
    impact:
      'Impact: reduced friction in the setup flow, improved perceived speed, and preserved access to key portfolio information in offline scenarios.',
    details:
      'CryptoCredWallet was built around fast first-run experience and dependable mobile performance. Seed phrase generation was moved into a pre-generation flow so heavy cryptographic work happens before the user reaches setup. The app stores critical values securely with hardware-backed protections and keeps a last-known portfolio snapshot available for users when the network disappears. The result is a wallet experience that feels quick without compromising the trust model.',
    tech: ['React Native', 'TypeScript', 'Zustand', 'SecureStore', 'CoinGecko API', 'AsyncStorage', 'Crypto.js', 'Biometric Auth'],
    repoUrl: 'https://github.com/ukemeikot/CryptoCredWallet',
    images: [
      { src: crypto1, alt: 'CryptoCredWallet onboarding screen', width: 1080, height: 2063 },
      { src: crypto2, alt: 'CryptoCredWallet portfolio screen', width: 1080, height: 2059 },
    ],
  },
  {
    slug: 'swiftauth-sdk',
    title: 'SwiftAuth SDK',
    type: 'Infrastructure Developer Tool',
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
  {
    slug: 'noramum-app',
    title: 'Noramum.app',
    type: 'Full Stack SaaS Platform',
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
    repoUrl: 'https://github.com/ukemeikot',
    images: [
      { src: noraWeb, alt: 'Noramum web dashboard', width: 264, height: 698 },
      { src: noraMobile, alt: 'Noramum mobile interface', width: 268, height: 586 },
    ],
  },
  {
    slug: 'realtime-comms-backend',
    title: 'Real-Time Comms Backend',
    type: 'Scalable System Architecture',
    summary:
      'A communication backend for messaging and calling with the infrastructure needed to keep interactions fast and reliable.',
    challenge:
      'The engineering focus was low-latency message delivery, resilient signalling for calling flows, and horizontal scale without brittle state handling.',
    stackLine:
      'Stack: Node.js, Socket.io, WebRTC, PostgreSQL, Redis, Express, JWT, Docker.',
    impact:
      'Impact: supported enterprise-style collaboration features such as presence, read receipts, and calling with sub-100ms delivery targets.',
    details:
      'This backend was built to support realtime messaging and voice or video communication under production constraints. Socket.io handled bidirectional messaging, Redis supported brokering and scaling, and WebRTC powered media sessions with the necessary networking fallbacks. The system also covered presence, typing indicators, receipts, and security middleware so collaboration features stayed fast without turning into operational chaos.',
    tech: ['Node.js', 'Socket.io', 'WebRTC', 'PostgreSQL', 'Redis', 'Express', 'JWT', 'Docker', 'Microservices'],
    repoUrl: 'https://github.com/ukemeikot/messaging_and_calling_backend',
  },
];
