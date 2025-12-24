import { useState } from 'react';

// --- IMAGE IMPORTS ---
import ukemeImg from './assets/ukeme.jpg';
import noraWeb from './assets/nora-web.jpg';
import noraMobile from './assets/nora-mobile.jpg';
import crypto1 from './assets/crypto1.jpg';
import crypto2 from './assets/crypto2.jpg';

interface Project {
  title: string;
  description: string;
  details?: string;
  tech: string[];
  link?: string;
  liveLink?: string;
  type: string;
  images?: string[];
}

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    {
      title: "Mobile Development",
      icon: "📱",
      items: ["React Native (Expo/CLI)", "Flutter & Dart", "Android SDK (Kotlin)", "Native Modules"]
    },
    {
      title: "Backend & APIs",
      icon: "⚙️",
      items: ["Node.js", "Python (FastAPI)", "Java (Spring Boot)", "Firebase Auth/Functions"]
    },
    {
      title: "Systems & SDKs",
      icon: "📦",
      items: ["SDK Architecture", "NPM Publishing", "Bash/Shell Scripting", "TypeScript Abstraction"]
    },
    {
      title: "DevOps & Tooling",
      icon: "📊",
      items: ["CI/CD (GitHub Actions)", "Git Hooks", "Gradle Optimization", "App Store Publishing"]
    },
    {
      title: "Architecture",
      icon: "🏠",
      items: ["Clean Architecture", "Modular Codebases", "Microservices", "Offline-First Design"]
    },
    {
      title: "Leadership",
      icon: "👥",
      items: ["Technical Strategy", "Mentorship", "Documentation", "Project Management"]
    }
  ];

  const projects: Project[] = [
    {
      title: "CryptoCredWallet",
      type: "High-Performance Mobile App",
      description: "A production-ready crypto wallet engineered for zero-latency onboarding and offline market analysis.",
      details: "To eliminate the CPU-intensive lag of seed-phrase generation, I engineered a background pre-generation architecture using Zustand, running calculations during the splash screen. This results in an instant 4-step onboarding flow. The app uses 'Last Known Value' persistence via AsyncStorage to ensure data visibility even in dead zones.",
      tech: ["React Native", "TypeScript", "Zustand", "SecureStore", "CoinGecko API"],
      link: "https://github.com/ukemeikot/CryptoCredWallet",
      images: [crypto1, crypto2] 
    },
    {
      title: "SwiftAuth SDK",
      type: "Infrastructure / Dev Tool",
      description: "A production-ready authentication SDK for React Native published on NPM for global developers.",
      details: "Architected 'rn-swiftauth-sdk' to streamline Firebase integration. I implemented the Options Pattern for API extensibility and a dual-layer error handling system that maps provider exceptions to user-friendly messages. Recently updated to v1.1.0 with a full password recovery protocol.",
      tech: ["TypeScript", "Firebase", "NPM", "React Native", "GitHub Actions"],
      link: "https://www.npmjs.com/package/rn-swiftauth-sdk",
    },
    {
      title: "Noramum.app",
      type: "Full Stack Ecosystem",
      description: "A comprehensive childcare platform bridging high-fidelity web dashboards with mobile apps.",
      details: "Led the development of both the React web dashboard and the mobile application. Focused on complex real-time state synchronization to ensure data parity across all user devices for mothers managing childcare records.",
      tech: ["React.js", "React Native", "Tailwind CSS", "Redux", "Node.js"],
      liveLink: "https://noramum.app",
      link: "https://github.com/ukemeikot",
      images: [noraWeb, noraMobile] 
    },
    {
      title: "Real-Time Comms Backend",
      type: "System Architecture",
      description: "Backend infrastructure for high-concurrency messaging and secure VoIP calling.",
      details: "A specialized backend designed for low-latency communication. Leveraging Socket.io for messaging and WebRTC for signaling. Optimized for scalability using Redis as a message broker and built following strict Clean Architecture principles.",
      tech: ["Node.js", "Socket.io", "WebRTC", "PostgreSQL", "Redis"],
      link: "https://github.com/ukemeikot/messaging_and_calling_backend",
    }
  ];

  if (activeProject) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] text-white p-6 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-x-hidden">
        <button 
          onClick={() => { setActiveProject(null); window.scrollTo(0, 0); }}
          className="text-[#4ADE80] font-mono mb-12 flex items-center gap-2 text-xs uppercase tracking-widest"
        >
          ← BACK TO EXPLORATION
        </button>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="overflow-hidden">
              <p className="text-[#4ADE80] font-mono text-[10px] uppercase tracking-[0.3em] mb-4">{activeProject.type}</p>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase mb-8 tracking-tighter leading-tight break-words">{activeProject.title}</h1>
              <div className="space-y-8">
                <div>
                  <h2 className="text-white font-bold text-sm mb-4 uppercase tracking-widest border-b border-gray-900 pb-2">Overview</h2>
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light">{activeProject.details}</p>
                </div>
                <div>
                  <h2 className="text-white font-bold text-sm mb-4 uppercase tracking-widest border-b border-gray-900 pb-2">Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <span key={t} className="bg-[#1A1A1A] border border-gray-800 px-3 py-1 rounded-sm text-[10px] text-gray-400 uppercase font-mono">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-8">
                  {activeProject.liveLink && <a href={activeProject.liveLink} target="_blank" rel="noreferrer" className="bg-[#4ADE80] text-black px-8 py-3 md:py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:scale-105 transition-transform">View Live Site</a>}
                  {activeProject.link && <a href={activeProject.link} target="_blank" rel="noreferrer" className="border border-gray-700 text-white px-8 py-3 md:py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-black transition-all">Source Code</a>}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-8 mt-12 lg:mt-0">
              {activeProject.images ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 w-full max-w-[300px] md:max-w-full lg:max-w-[340px]">
                  {activeProject.images.map((img, i) => (
                    <div key={i} className="relative rounded-[2.5rem] overflow-hidden border-[8px] border-[#1A1A1A] bg-[#000] shadow-2xl mx-auto md:mx-0">
                      <img src={img} alt="Screenshot" className="w-full h-auto object-contain" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full aspect-video bg-[#161616] rounded-2xl border border-gray-900 flex items-center justify-center text-gray-700 font-mono text-[10px] text-center p-8 uppercase tracking-widest">
                  [ Architecture Visualization ]
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white font-sans selection:bg-[#4ADE80] selection:text-black overflow-x-hidden">
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto relative z-[60]">
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2 tracking-tighter cursor-pointer" onClick={() => scrollToSection('home')}>
          <span className="text-[#4ADE80]">//</span> Ukeme Ikot
        </div>
        <ul className="hidden md:flex gap-10 text-[10px] uppercase tracking-widest font-semibold text-gray-500">
          <li className="text-[#4ADE80] cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('projects')}>Work</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('skills')}>Skills</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
        <button className="md:hidden text-[#4ADE80] font-mono z-[70] relative text-sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
        </button>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#0F0F0F] z-[55] flex flex-col items-center justify-center gap-8 text-2xl md:text-4xl font-black uppercase tracking-tighter animate-in fade-in zoom-in duration-300">
             <li className="list-none text-[#4ADE80] cursor-pointer" onClick={() => scrollToSection('home')}>HOME</li>
             <li className="list-none text-white cursor-pointer" onClick={() => scrollToSection('projects')}>WORK</li>
             <li className="list-none text-white cursor-pointer" onClick={() => scrollToSection('skills')}>SKILLS</li>
             <li className="list-none text-white cursor-pointer" onClick={() => scrollToSection('contact')}>CONTACT</li>
          </div>
        )}
      </nav>

      <main id="home" className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-24 md:mb-40">
          <div className="md:col-span-7">
            <div className="inline-block bg-[#1A1A1A] px-4 py-1 rounded-full border border-gray-800 mb-6 font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-[#4ADE80]">
              {"< First Class Software Engineer />"}
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-[90px] font-black leading-[0.9] md:leading-[0.85] uppercase tracking-tighter mb-8 italic break-words">
              Building<br />Scaleable<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-600">Infrastructures</span>
            </h1>
            <div className="flex flex-wrap gap-4 md:gap-6 text-gray-500 font-mono text-[10px] uppercase tracking-wider mb-12">
              <a href="https://linkedin.com/in/ukeme-ikot" target="_blank" className="hover:text-[#4ADE80] transition-colors underline decoration-gray-800 underline-offset-4">LinkedIn</a>
              <a href="https://github.com/ukemeikot" target="_blank" className="hover:text-[#4ADE80] transition-colors underline decoration-gray-800 underline-offset-4">GitHub</a>
              <a href="https://x.com/UkemeEtim7" target="_blank" className="hover:text-[#4ADE80] transition-colors underline decoration-gray-800 underline-offset-4">Twitter</a>
            </div>
            <p className="text-gray-400 max-w-lg text-base md:text-lg font-light leading-relaxed italic">
                Specialized in <span className="text-white font-bold">SDK Development</span>, <span className="text-white font-bold">Systems Automation</span>, and <span className="text-white font-bold">High-Performance Mobile Apps</span>.
            </p>
          </div>
          <div className="md:col-span-5 relative group flex justify-center mt-12 md:mt-0">
             <div className="absolute -inset-2 bg-gradient-to-b from-[#4ADE80]/20 to-transparent blur-2xl rounded-full group-hover:opacity-40 transition-all duration-700"></div>
             <div className="relative w-full max-w-[320px] md:max-w-[420px] rounded-[3rem] border border-gray-800 bg-[#161616] p-4 overflow-hidden shadow-2xl">
                <img 
                    src={ukemeImg} 
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 rounded-[2.5rem] object-cover object-center scale-[1.02]" 
                    alt="Ukeme Ikot"
                />
             </div>
          </div>
        </div>

        <section id="skills" className="py-20 border-t border-gray-900 mb-20">
          <p className="text-[#4ADE80] font-mono text-[10px] mb-4 uppercase tracking-[0.3em]">{"[ Expertise ]"}</p>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-16 italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-[#161616] border border-gray-800 p-8 rounded-3xl hover:border-[#4ADE80]/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center border border-gray-700 text-lg">
                    {skill.icon === "code" ? <span className="text-[#4ADE80] font-mono">&lt;/&gt;</span> : skill.icon}
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight">{skill.title}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-500 font-medium text-sm flex items-center gap-2">
                      <span className="text-[#4ADE80] text-lg leading-none">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20 border-t border-gray-900">
          <p className="text-[#4ADE80] font-mono text-[10px] mb-4 uppercase tracking-[0.3em]">{"[ Selection ]"}</p>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => { setActiveProject(project); window.scrollTo(0,0); }}
                className="group cursor-pointer bg-[#0A0A0A] border border-gray-900 p-6 md:p-8 rounded-3xl hover:border-[#4ADE80]/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="mb-12">
                   <p className="text-[#4ADE80] font-mono text-[9px] uppercase tracking-widest mb-2 italic">0{index + 1} / {project.type}</p>
                   <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter group-hover:text-[#4ADE80] transition-colors break-words">{project.title}</h3>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 line-clamp-3">{project.description}</p>
                  <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    View Project <span className="text-[#4ADE80]">+</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-40 text-center border-t border-gray-900">
          <p className="text-[#4ADE80] font-mono text-[10px] mb-4 uppercase tracking-[0.3em]">{"[ Contact ]"}</p>
          <h2 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-12 italic">Connect</h2>
          
          <div className="flex flex-col items-center gap-8">
            <a href="mailto:ukemeetim2222@gmail.com" className="text-lg md:text-4xl font-light hover:text-[#4ADE80] transition-colors border-b border-gray-800 pb-2 italic break-all">
              ukemeetim2222@gmail.com
            </a>
            
            <div className="flex gap-8 md:gap-12 mt-4 flex-wrap justify-center font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-500">
              <a href="https://linkedin.com/in/ukeme-ikot" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/ukemeikot" target="_blank" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://x.com/UkemeEtim7" target="_blank" className="hover:text-white transition-colors">Twitter (X)</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-10 border-t border-gray-900 text-gray-600 text-[8px] md:text-[10px] uppercase tracking-widest flex flex-col md:flex-row justify-between gap-4 text-center md:text-left">
         <p>© 2025 UKEME IKOT</p>
         <p>NIGERIA / WORLDWIDE</p>
      </footer>
    </div>
  );
};

export default Portfolio;