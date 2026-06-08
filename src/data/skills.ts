// REFACTORED
import type { SkillCategory } from './types';

export const skills: SkillCategory[] = [
  {
    title: 'Front-end',
    items: [
      'TypeScript',
      'React',
      'Next.js',
      'React Native',
      'Expo',
      'Redux',
      'TanStack Query',
      'Vite',
    ],
  },
  {
    title: 'Styles',
    items: ['Tailwind CSS', 'CSS Modules', 'Styled Components', 'Responsive UI', 'Figma'],
  },
  {
    title: 'Back-end',
    items: [
      'Node.js',
      'Express',
      'FastAPI',
      'Python',
      'Java',
      'Spring Boot',
      'Microservices',
      'ASP.NET Core',
      'C#',
      'PostgreSQL',
      'Redis',
      'REST',
      'WebSockets',
    ],
  },
  {
    title: 'DevOps',
    items: [
      'Docker',
      'Docker Compose',
      'Nginx',
      'Caddy',
      'GitHub Actions',
      'AWS EC2',
      'OPA',
      'Prometheus',
      'Trivy',
      'CI/CD',
    ],
  },
];
