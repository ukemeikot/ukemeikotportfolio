// REFACTORED
import { useCallback, useEffect, useRef, useState } from 'react';
import { experience } from '../../data/experience';
import { projects } from '../../data/projects';
import { socialLinks } from '../../data/siteContent';
import { skills } from '../../data/skills';
import styles from './Terminal.module.css';

interface Line {
  type: 'in' | 'out';
  text: string;
}

const PROMPT = 'ukeme@portfolio:~$';

const HELP = [
  'Available commands:',
  '  whoami      who is Ukeme',
  '  skills      tech stack',
  '  projects    selected work',
  '  experience  work history',
  '  socials     where to find me',
  '  hire-me     let’s talk',
  '  clear       clear the screen',
  '  help        show this list',
];

const Terminal = () => {
  const [history, setHistory] = useState<Line[]>([
    { type: 'out', text: "Welcome to my terminal. Type 'help' to get started." },
  ]);
  const [input, setInput] = useState('');
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const body = bodyRef.current;
    if (body) {
      body.scrollTop = body.scrollHeight;
    }
  }, [history]);

  const run = useCallback((raw: string) => {
    const cmd = raw.trim();
    if (!cmd) {
      return;
    }

    const lower = cmd.toLowerCase();
    const out: Line[] = [{ type: 'in', text: `${PROMPT} ${cmd}` }];
    const push = (lines: string[]) =>
      lines.forEach((text) => out.push({ type: 'out', text }));

    switch (lower) {
      case 'help':
        push(HELP);
        break;
      case 'whoami':
        push(['Ukeme Ikot — Full-stack engineer.', 'Frontend → backend → DevOps.']);
        break;
      case 'skills':
        push(skills.map((s) => `${s.title}: ${s.items.join(', ')}`));
        break;
      case 'projects':
        push(projects.map((p) => `• ${p.title} — ${p.type}`));
        break;
      case 'experience':
      case 'work':
        push(experience.map((e) => `${e.period}  ${e.company} — ${e.role}`));
        break;
      case 'socials':
      case 'contact':
        push(socialLinks.map((s) => `${s.label}: ${s.href}`));
        break;
      case 'ls':
        push(['about  skills  projects  articles  contact']);
        break;
      case 'date':
        push([new Date().toString()]);
        break;
      case 'hire-me':
      case 'sudo hire-me':
        push(['access granted ✓', 'opening mail…']);
        window.location.href = 'mailto:ukemeetim2222@gmail.com';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        push([`command not found: ${cmd} — type 'help'.`]);
    }

    setHistory((current) => [...current, ...out]);
    setInput('');
  }, []);

  return (
    <div className={styles.terminal} onClick={() => inputRef.current?.focus()}>
      <div className={styles.bar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.barTitle}>bash — portfolio</span>
      </div>
      <div className={styles.body} ref={bodyRef}>
        {history.map((line, index) => (
          <p
            key={`${index}-${line.text}`}
            className={line.type === 'in' ? styles.in : styles.out}
          >
            {line.text}
          </p>
        ))}
        <form
          className={styles.inputRow}
          onSubmit={(event) => {
            event.preventDefault();
            run(input);
          }}
        >
          <span className={styles.prompt}>{PROMPT}</span>
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="Terminal command input"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
