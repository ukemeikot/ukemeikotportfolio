import { useState } from 'react';
import ukemeImg from './assets/ukeme.jpg';

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

  const techStack = [
    "React Native", "Node.js", "TypeScript", "React.js", 
    "PostgreSQL", "Redis", "Socket.io", "WebRTC", "Firebase", 
    "Tailwind CSS", "MongoDB", "Express", "Expo"
  ];

  const projects: Project[] = [
    {
      title: "Noramum.app",
      type: "Web & Mobile Ecosystem",
      description: "Full-cycle development of a cross-platform ecosystem for mothers and childcare.",
      details: "For Noramum, I was responsible for bridging the user experience between a high-performance React web dashboard and a native mobile application. The project involved complex state synchronization to ensure mothers have real-time access to data across all their devices. I implemented a unified design system using Tailwind CSS to maintain brand consistency.",
      tech: ["React.js", "React Native", "Tailwind CSS", "Redux", "Node.js"],
      liveLink: "https://noramum.app",
      link: "https://github.com/ukemeikot",
      images: ["/src/assets/nora-web.jpg", "/src/assets/nora-mobile.jpg"] // Replace with your filenames
    },
    {
      title: "CryptoCredWallet",
      type: "Mobile App",
      description: "A high-performance Web3 dashboard featuring live market data and offline resilience.",
      details: "Built to solve data volatility issues in Web3. It features a robust caching layer using AsyncStorage and custom OHLC Candlestick charts. Includes search, favorites, and multi-theme support.",
      tech: ["React Native", "TypeScript", "Expo Router", "CoinGecko API"],
      link: "https://github.com/ukemeikot/CryptoCredWallet",
      images: ["/src/assets/crypto1.jpg", "/src/assets/crypto2.jpg"] // Replace with your filenames
    },
    {
      title: "Real-Time Comms Backend",
      type: "System Architecture",
      description: "Backend infrastructure for high-concurrency messaging and VoIP calling.",
      details: "A specialized backend designed for low-latency communication. Leveraging Socket.io for messaging and WebRTC for voice/video signaling. Optimized for scalability using Redis as a message broker.",
      tech: ["Node.js", "Socket.io", "WebRTC", "PostgreSQL", "Redis"],
      link: "https://github.com/ukemeikot",
    }
  ];

  // --- DETAIL VIEW ---
  if (activeProject) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] text-white p-6 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button 
          onClick={() => {
            setActiveProject(null);
            window.scrollTo(0, 0);
          }}
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

            <div className="grid grid-cols-1 gap-6">
              {activeProject.images?.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-gray-900 bg-[#161616] group shadow-2xl">
                   <img src={img} alt="Project Preview" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
              ))}
              {!activeProject.images && (
                <div className="aspect-video bg-[#161616] rounded-2xl border border-gray-900 flex items-center justify-center text-gray-700 font-mono text-xs text-center p-8 uppercase tracking-widest">
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
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('projects')}>Projects</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('stack')}>Tech Stack</li>
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
             <li className="list-none text-white cursor-pointer" onClick={() => scrollToSection('projects')}>PROJECTS</li>
             <li className="list-none text-white cursor-pointer" onClick={() => scrollToSection('stack')}>TECH STACK</li>
             <li className="list-none text-white cursor-pointer" onClick={() => scrollToSection('contact')}>CONTACT</li>
          </div>
        )}

        <button onClick={() => scrollToSection('contact')} className="hidden md:block border border-[#4ADE80] text-[#4ADE80] px-6 py-2 rounded-full text-xs font-bold hover:bg-[#4ADE80] hover:text-black transition-all">LET'S COLLABORATE</button>
      </nav>

      <main id="home" className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-20">
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-40">
          <div className="md:col-span-8">
            <div className="inline-block bg-[#1A1A1A] px-4 py-1 rounded-full border border-gray-800 mb-6 font-mono text-[10px] tracking-[0.2em] text-[#4ADE80]">
              {"< Full Stack & Mobile Engineer />"}
            </div>
            <h1 className="text-5xl md:text-[100px] font-black leading-[0.85] uppercase tracking-tighter mb-8 italic">
              Engineering<br />Mobile-First<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-600">Full Stack Apps</span>
            </h1>

            {/* RESTORED SOCIAL LINKS */}
            <div className="flex flex-wrap gap-6 text-gray-500 font-mono text-xs uppercase tracking-wider mb-12">
              <a href="https://x.com/UkemeEtim7" target="_blank" rel="noreferrer" className="hover:text-[#4ADE80] transition-colors underline decoration-gray-800 underline-offset-4">Twitter (X)</a>
              <a href="https://linkedin.com/in/ukeme-ikot" target="_blank" rel="noreferrer" className="hover:text-[#4ADE80] transition-colors underline decoration-gray-800 underline-offset-4">LinkedIn</a>
              <a href="https://github.com/ukemeikot" target="_blank" rel="noreferrer" className="hover:text-[#4ADE80] transition-colors underline decoration-gray-800 underline-offset-4">GitHub</a>
            </div>

            <p className="text-gray-400 max-w-lg text-lg font-light leading-relaxed">Bridging high-level backend architecture with pixel-perfect mobile user experiences.</p>
          </div>
          <div className="md:col-span-4 relative group">
             <div className="absolute -inset-4 bg-[#4ADE80]/5 blur-2xl rounded-full group-hover:bg-[#4ADE80]/10 transition-all"></div>
             <img src={ukemeImg} className="relative grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl border border-gray-900 aspect-[4/5] object-cover w-full shadow-2xl" />
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 border-t border-gray-900">
          <p className="text-[#4ADE80] font-mono text-[10px] mb-4 uppercase tracking-[0.3em]">{"[ Selection ]"}</p>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-16 italic">Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => {
                   setActiveProject(project);
                   window.scrollTo(0,0);
                }}
                className="group cursor-pointer bg-[#0A0A0A] border border-gray-900 p-8 rounded-3xl hover:border-[#4ADE80]/40 transition-all duration-500"
              >
                <div className="mb-12">
                   <p className="text-[#4ADE80] font-mono text-[9px] uppercase tracking-widest mb-2 italic">0{index + 1} / {project.type}</p>
                   <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-[#4ADE80] transition-colors">{project.title}</h3>
                </div>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 line-clamp-3">{project.description}</p>
                <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                   View Case Study <span className="text-[#4ADE80]">+</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section id="stack" className="py-32 overflow-hidden border-y border-gray-900">
           <div className="flex gap-12 animate-marquee whitespace-nowrap opacity-20">
            {[...techStack, ...techStack].map((tech, index) => (
              <span key={index} className="text-5xl font-black uppercase tracking-tighter text-white">
                {tech} <span className="text-[#4ADE80] mx-4">/</span>
              </span>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-40 text-center">
          <h2 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-none mb-12">Talk</h2>
          <a href="mailto:ukemeetim7@gmail.com" className="text-2xl md:text-4xl font-light hover:text-[#4ADE80] transition-colors border-b border-gray-800 pb-2">ukemeetim7@gmail.com</a>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;