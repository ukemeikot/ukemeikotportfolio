// REFACTORED
import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectDetail from './components/ProjectDetail';
import ScrollReveal from './components/ScrollReveal';
import SectionWrapper from './components/SectionWrapper';
import SkillBadge from './components/SkillBadge';
import { experience } from './data/experience';
import { projects } from './data/projects';
import {
  aboutContent,
  contactContent,
  heroContent,
  navItems,
  portrait,
  socialLinks,
} from './data/siteContent';
import { skills } from './data/skills';
import type { ProjectEntry } from './data/types';

const About = lazy(() => import('./components/About'));
const ExperienceTimeline = lazy(() => import('./components/ExperienceTimeline'));
const ProjectGrid = lazy(() => import('./components/ProjectGrid'));

const App = () => {
  const [activeProject, setActiveProject] = useState<ProjectEntry | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark' | null>(() => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    const storedTheme = window.localStorage.getItem('theme');
    return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark';
  });

  useEffect(() => {
    if (!theme) {
      delete document.documentElement.dataset.theme;
      return;
    }

    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const handleNavigate = useCallback(
    (id: string) => {
      if (activeProject) {
        setActiveProject(null);
        requestAnimationFrame(() => {
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return;
      }

      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [activeProject]
  );

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      if (!current) {
        return 'light';
      }

      return current === 'dark' ? 'light' : 'dark';
    });
  }, []);

  const openProject = useCallback((project: ProjectEntry) => {
    setActiveProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const skillCards = useMemo(
    () =>
      skills.map((skill, index) => (
        <SkillBadge key={skill.title} skill={skill} delay={index * 100} />
      )),
    []
  );

  if (activeProject) {
    return (
      <div className="app-shell">
        <Navbar
          items={navItems}
          onNavigate={handleNavigate}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <ProjectDetail project={activeProject} onClose={() => setActiveProject(null)} />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Navbar
        items={navItems}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero
          content={heroContent}
          socials={socialLinks}
          portrait={portrait}
          onNavigate={handleNavigate}
        />
        <Suspense fallback={null}>
          <About content={aboutContent} />
        </Suspense>
        <SectionWrapper
          id="skills"
          eyebrow="Skills"
          title="A stack built for product delivery, not buzzword collection."
          intro="I work where interface quality, application logic, and delivery systems meet."
        >
          <div className="skills-grid">{skillCards}</div>
        </SectionWrapper>
        <Suspense fallback={null}>
          <ProjectGrid projects={projects} onOpen={openProject} />
        </Suspense>
        <Suspense fallback={null}>
          <ExperienceTimeline items={experience} />
        </Suspense>
        <SectionWrapper
          id="contact"
          eyebrow={contactContent.eyebrow}
          title={contactContent.title}
          intro={contactContent.body}
          align="center"
        >
          <ScrollReveal>
            <Footer email={contactContent.email} socials={socialLinks} />
          </ScrollReveal>
        </SectionWrapper>
      </main>
    </div>
  );
};

export default App;
