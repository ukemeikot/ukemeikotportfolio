// REFACTORED
// Real posts from https://medium.com/@ukemeetim2222
import type { ArticleEntry } from './types';

export const articles: ArticleEntry[] = [
  {
    title: 'Building a Reusable Bare-Metal Observability & Reliability Platform',
    excerpt:
      'How we deployed Prometheus, Loki, Tempo, and Grafana with Terraform and systemd — no Docker, one command, and a complete reliability story with SLOs and DORA.',
    url: 'https://medium.com/@ukemeetim2222/how-we-deployed-prometheus-loki-tempo-and-grafana-with-terraform-and-systemd-no-docker-one-92f400df8f8a',
    tag: 'DevOps',
  },
  {
    title: 'The Deploy Tool That Says "No" — And Why That Might Save Your Job',
    excerpt:
      'How one YAML file, a policy engine, and a little chaos engineering can prevent the kind of 2 AM disasters that end careers.',
    url: 'https://medium.com/@ukemeetim2222/swiftdeploy-one-yaml-file-to-rule-your-entire-container-stack-48732927222f',
    tag: 'DevOps',
  },
  {
    title: 'How I Built a DDoS Detection Engine for Nextcloud in Python',
    excerpt:
      'And what "normal traffic" actually looks like — sliding windows, baselines, and automatic IP bans.',
    url: 'https://medium.com/@ukemeetim2222/how-i-built-a-ddos-detection-engine-for-nextcloud-in-python-227c42ac56b5',
    tag: 'Backend',
  },
  {
    title: 'Building CredNews: Live APIs, Offline Support, Firebase & Gemini AI',
    excerpt:
      'A cross-platform news app focused on real-time discovery and personalization, built for HNG Mobile Stage 3.',
    url: 'https://medium.com/@ukemeetim2222/building-crednews-a-news-app-with-live-apis-offline-support-firebase-and-gemini-ai-70a68c205999',
    tag: 'Mobile',
  },
  {
    title: 'The Brownfield Strategy: Native App and React Native as Teammates',
    excerpt:
      'The "pick a side" debate is costing mobile teams months of engineering time. Here is how to make both work together.',
    url: 'https://medium.com/@ukemeetim2222/the-brownfield-strategy-why-your-native-app-and-react-native-should-be-teammates-not-rivals-92c073bbf9bb',
    tag: 'Mobile',
  },
  {
    title: 'Face Verification & Liveness Detection in React Native / Expo',
    excerpt:
      'Implementing live face detection and user-presence confirmation in a React Native / Expo app.',
    url: 'https://medium.com/@ukemeetim2222/built-a-face-verification-liveness-detection-flow-for-a-react-native-expo-app-recently-and-i-ddcef1068b61',
    tag: 'Mobile',
  },
  {
    title: 'A Tiny Tool to Stop Developers From Committing Secrets',
    excerpt:
      'Every developer has that quiet fear — so I built a small guard against accidentally committing secrets.',
    url: 'https://medium.com/@ukemeetim2222/i-built-a-tiny-tool-to-stop-developers-from-accidentally-committing-secrets-e3733d4ff626',
    tag: 'DevOps',
  },
];
