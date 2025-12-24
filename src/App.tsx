import { useState } from 'react';

// --- IMAGE IMPORTS ---
// Importing ensures Vite bundles assets correctly for Vercel deployment
import ukemeImg from './assets/ukeme.jpg';

// Project: Noramum
import noraWeb from './assets/nora-web.jpg';
import noraMobile from './assets/nora-mobile.jpg';

// Project: CryptoCred
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
      items: ["Flutter & Dart", "Android SDK (Kotlin)", "Jetpack Compose", "React Native"]
    },
    {
      title: "Backend & APIs",
      icon: "⚙️",
      items: ["Python (FastAPI)", "Java (Spring Boot)", "Node.js", "RESTful & GraphQL"]
    },
    {
      title: "Frontend Development",
      icon: "code",
      items: ["React.js & Next.js", "TypeScript", "Responsive UI Design", "State Management"]
    },
    {
      title: "DevOps & Tooling",
      icon: "📊",
      items: ["CI/CD (GitHub Actions)", "Firebase Services", "Gradle Optimization", "App Store Publishing"]
    },
    {
      title: "Architecture & Practices",
      icon: "🏠",
      items: ["Clean Architecture", "Modular Codebases", "Performance Optimization", "Microservices"]
    },
    {
      title: "Collaboration & Leadership",
      icon: "👥",
      items: ["Technical Communication", "Documentation", "Mentorship"]
    }
  ];

  const projects: Project[] = [
    {
      title: "CryptoCredWallet",
      type: "High-Performance Web3 Mobile App",
      description: "A production-ready, non-custodial wallet engineered for speed, offline resilience, and secure key management.",
      details: "CryptoCredWallet is a showcase of high-concurrency mobile engineering. To eliminate the CPU-intensive lag typical of seed-phrase generation, I implemented a background pre-generation architecture using React hooks and Zustand, running heavy calculations during the app splash screen to ensure a zero-latency onboarding experience. The app features a secure 4-step onboarding flow, real-time market data integration via CoinGecko, and a custom persistence layer using SecureStore and AsyncStorage to maintain functionality during offline states. It adheres to strict Web3 aesthetic standards with a custom high-contrast dark theme and interactive charting.",
      tech: ["React Native", "TypeScript", "Zustand", "Expo Router", "SecureStore", "CoinGecko API"],
      link: "https://github.com/ukemeikot/CryptoCredWallet",
      images: [crypto1, crypto2] 
    },
    {
      title: "Noramum.app",
      type: "Web & Mobile Ecosystem",
      description: "Full-cycle development of a cross-platform ecosystem for mothers and childcare.",
      details: "For Noramum, I was responsible for bridging the user experience between a high-performance React web dashboard and a native mobile application. The project involved complex state synchronization to ensure mothers have real-time access to data across all their devices. I implemented a unified design system using Tailwind CSS to maintain brand consistency.",
      tech: ["React.js", "React Native", "Tailwind CSS", "Redux", "Node.js"],
      liveLink: "https://noramum.app",
      link: "https://github.com/ukemeikot",
      images: [noraWeb, noraMobile] 
    },
    {
      title: "Real-Time Comms Backend",
      type: "System Architecture",
      description: "Backend infrastructure for high-concurrency messaging and VoIP calling.",
      details: "A specialized backend designed for low-latency communication. Leveraging Socket.io for messaging and WebRTC for voice/video signaling. Optimized for scalability using Redis as a message broker. The system follows Clean Architecture principles for modularity and high performance.",
      tech: ["Node.js", "Socket.io", "WebRTC", "PostgreSQL", "Redis"],
      link: "https://github.com/ukemeikot",
    }
  ];

  // --- DETAIL VIEW ---
  if (activeProject) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] text-white p-6 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button 
          onClick={() => { setActiveProject(null); window.scrollTo(0, 0); }}
          className="text-[#4ADE80] font-mono mb-12 hover:tracking-widest transition-all flex items-center gap-2 text-xs uppercase tracking-widest"
        >
          ← BACK TO EXPLORATION
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#4ADE80] font-mono text-[10px] uppercase tracking-[0.3em] mb-4">{activeProject.type}</p>
              <h1 className="text-6xl md:text-8xl font-black uppercase mb-8 tracking-tighter leading-none">{activeProject.title}</h1>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-white font-bold text-sm mb-4 uppercase tracking-widest border-b border-gray-900 pb-2">Overview</h2>
                  <p className="text-gray-400 leading-relaxed text-lg font-light">{activeProject.details}</p>
                </div>

                <div>
                  <h2 className="text-white font-bold text-sm mb-4 uppercase tracking-widest border-b border-gray-900 pb-2">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <span key={t} className="bg-[#1A1A1A] border border-gray-800 px-3 py-1 rounded-sm text-[10px] text-gray-400 uppercase font-mono">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-8">
                  {activeProject.liveLink && (
                    <a href={activeProject.liveLink} target="_blank" rel="noreferrer" className="bg-[#4ADE80] text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform font-bold">
                      View Live Site
                    </a>
                  )}
                  {activeProject.link && (
                    <a href={activeProject.link} target="_blank" rel="noreferrer" className="border border-gray-700 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all font-bold">
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Optimized Phone-Sized Image Gallery */}
            <div className="flex flex-col items-center lg:items-end gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 w-full max-w-[320px] md:max-w-full lg:max-w-[340px]">
                {activeProject.images?.map((img, i) => (
                  <div 
                    key={i} 
                    className="relative rounded-[2.5rem] overflow-hidden border-[8px] border-[#1A1A1A] bg-[#000] shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                    style={{ aspectRatio: '9/19' }} 
                  >
                    <img 
                      src={img} 
                      alt="App Screenshot" 
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent"></div>
                  </div>
                ))}
              </div>
              {!activeProject.images && (
                <div className="aspect-video w-full bg-[#161616] rounded-2xl border border-gray-900 flex items-center justify-center text-gray-700 font-mono text-xs text-center p-8 uppercase tracking-widest">
                  [ System Architecture Visual Placeholder ]
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN PORTFOLIO ---
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white font-sans selection:bg-[#4ADE80] selection:text-black">
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto relative z-[60]">
        <div className="text-2xl font-bold flex items-center gap-2 tracking-tighter cursor-pointer" onClick={() => scrollToSection('home')}>
          <span className="text-[#4ADE80]">//</span> Ukeme Ikot
        </div>
        
        <ul className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-semibold text-gray-500">
          <li className="text-[#4ADE80] cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('projects')}>Work</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('skills')}>Skills</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>

        <button 
          className="md:hidden text-[#4ADE80] font-mono z-[70] relative" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#0F0F0F] z-[55] flex flex-col items-center justify-center gap-8 text-4xl font-black uppercase tracking-tighter animate-in fade-in zoom-in duration-300">
             <li className="list-none text-[#4ADE80] cursor-pointer" onClick={() => scrollToSection('home')}>HOME</li>
             <li className="list-none text-white cursor-pointer" onClick={() => scrollToSection('projects')}>WORK</li>
             <li className="list-none text-white cursor-pointer" onClick={() => scrollToSection('skills')}>SKILLS</li>
             <li className="list-none text-white cursor-pointer" onClick={() => scrollToSection('contact')}>CONTACT</li>
          </div>
        )}

        <button onClick={() => scrollToSection('contact')} className="hidden md:block border border-[#4ADE80] text-[#4ADE80] px-6 py-2 rounded-full text-xs font-bold hover:bg-[#4ADE80] hover:text-black transition-all">LET'S COLLABORATE</button>
      </nav>

      <main id="home" className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-40">
          <div className="md:col-span-7">
            <div className="inline-block bg-[#1A1A1A] px-4 py-1 rounded-full border border-gray-800 mb-6 font-mono text-[10px] tracking-[0.2em] text-[#4ADE80]">
              {"< Full Stack & Mobile Engineer />"}
            </div>
            <h1 className="text-5xl md:text-[100px] font-black leading-[0.85] uppercase tracking-tighter mb-8 italic">
              Engineering<br />Mobile-First<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-600">Full Stack Apps</span>
            </h1>

            <div className="flex flex-wrap gap-6 text-gray-500 font-mono text-xs uppercase tracking-wider mb-12">
              <a href="https://x.com/UkemeEtim7" target="_blank" rel="noreferrer" className="hover:text-[#4ADE80] transition-colors underline decoration-gray-800 underline-offset-4">Twitter (X)</a>
              <a href="https://linkedin.com/in/ukeme-ikot" target="_blank" rel="noreferrer" className="hover:text-[#4ADE80] transition-colors underline decoration-gray-800 underline-offset-4">LinkedIn</a>
              <a href="https://github.com/ukemeikot" target="_blank" rel="noreferrer" className="hover:text-[#4ADE80] transition-colors underline decoration-gray-800 underline-offset-4">GitHub</a>
            </div>

            <p className="text-gray-400 max-w-lg text-lg font-light leading-relaxed italic">
                Specialized in <span className="text-white font-bold">SDK development</span>, <span className="text-white font-bold">Clean Architecture</span>, and <span className="text-white font-bold">Distributed Systems</span>.
            </p>
          </div>
          <div className="md:col-span-5 relative group flex justify-center">
             <div className="absolute -inset-2 bg-gradient-to-b from-[#4ADE80]/20 to-transparent blur-2xl rounded-full group-hover:opacity-40 transition-all duration-700"></div>
             <div className="relative w-full max-w-[420px] rounded-[3rem] border border-gray-800 bg-[#161616] p-4 overflow-hidden shadow-2xl">
                <img 
                    src={ukemeImg} 
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 rounded-[2.5rem] object-cover object-center scale-[1.02]" 
                    alt="Ukeme Ikot"
                />
             </div>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 border-t border-gray-900 mb-20">
          <p className="text-[#4ADE80] font-mono text-[10px] mb-4 uppercase tracking-[0.3em]">{"[ Expertise ]"}</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-[#161616] border border-gray-800 p-8 rounded-3xl hover:border-[#4ADE80]/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-2xl flex items-center justify-center border border-gray-700 text-xl">
                    {skill.icon === "code" ? <span className="text-[#4ADE80] font-mono">&lt;/&gt;</span> : skill.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">{skill.title}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-500 font-medium flex items-center gap-2">
                      <span className="text-[#4ADE80] text-lg leading-none">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 border-t border-gray-900">
          <p className="text-[#4ADE80] font-mono text-[10px] mb-4 uppercase tracking-[0.3em]">{"[ Selection ]"}</p>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-16 italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => {
                   setActiveProject(project);
                   window.scrollTo(0,0);
                }}
                className="group cursor-pointer bg-[#0A0A0A] border border-gray-900 p-8 rounded-3xl hover:border-[#4ADE80]/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="mb-12">
                   <p className="text-[#4ADE80] font-mono text-[9px] uppercase tracking-widest mb-2 italic">0{index + 1} / {project.type}</p>
                   <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-[#4ADE80] transition-colors">{project.title}</h3>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 line-clamp-3">{project.description}</p>
                  <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    View Case Study <span className="text-[#4ADE80]">+</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-40 text-center">
          <h2 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-none mb-12">Talk</h2>
          <a href="mailto:ukemeetim2222@gmail.com" className="text-2xl md:text-4xl font-light hover:text-[#4ADE80] transition-colors border-b border-gray-800 pb-2">ukemeetim2222@gmail.com</a>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;