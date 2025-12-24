import { useState } from 'react';
// Ensure this image exists at src/assets/ukeme.jpg
import ukemeImg from './assets/ukeme.jpg';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // FIXED: Added ': string' type to resolve the 'any' type error
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const techStack = [
    "React Native", "Node.js", "TypeScript", "React.js", 
    "PostgreSQL", "Firebase", "Tailwind CSS", "MongoDB", "Express"
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white font-sans selection:bg-[#4ADE80] selection:text-black">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto relative z-50">
        <div className="text-2xl font-bold flex items-center gap-2 tracking-tighter">
          <span className="text-[#4ADE80]">//</span> Ukeme Ikot
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-semibold text-gray-500">
          <li className="text-[#4ADE80] cursor-pointer hover:text-white transition-colors" onClick={() => scrollToSection('home')}>Home</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('projects')}>Projects</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('stack')}>Tech Stack</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('contact')}>Contact Me</li>
        </ul>

        <button className="hidden md:block border border-[#4ADE80] text-[#4ADE80] px-6 py-2 rounded-full text-xs font-bold hover:bg-[#4ADE80] hover:text-black transition-all duration-300">
          LET'S COLLABORATE
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-[#4ADE80] font-mono z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
        </button>

        {/* Mobile Dropdown Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#0F0F0F] z-40 flex flex-col items-center justify-center gap-8 text-xl font-bold">
             <li className="list-none text-[#4ADE80] cursor-pointer" onClick={() => scrollToSection('home')}>HOME</li>
             <li className="list-none text-gray-400 cursor-pointer hover:text-white" onClick={() => scrollToSection('projects')}>PROJECTS</li>
             <li className="list-none text-gray-400 cursor-pointer hover:text-white" onClick={() => scrollToSection('stack')}>TECH STACK</li>
             <li className="list-none text-gray-400 cursor-pointer hover:text-white" onClick={() => scrollToSection('contact')}>CONTACT</li>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main id="home" className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Headline */}
          <div className="md:col-span-8">
            <div className="inline-block bg-[#1A1A1A] px-4 py-1 rounded-full border border-gray-800 mb-6">
              <p className="text-[#4ADE80] font-mono text-xs uppercase tracking-[0.2em]">
                {"< Full Stack & Mobile Engineer />"}
              </p>
            </div>

            <h1 className="text-5xl md:text-[100px] font-black leading-[0.85] uppercase tracking-tighter mb-8">
              Engineering<br />
              Mobile-First<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-600">
                Full Stack Apps
              </span>
            </h1>
            
            <div className="flex flex-wrap gap-6 text-gray-500 font-mono text-xs uppercase tracking-wider mb-12">
              <a href="https://x.com/UkemeEtim7" target="_blank" rel="noreferrer" className="hover:text-[#4ADE80] transition-colors underline decoration-gray-800 underline-offset-4">Twitter (X)</a>
              <a href="https://linkedin.com/in/ukeme-ikot" target="_blank" rel="noreferrer" className="hover:text-[#4ADE80] transition-colors underline decoration-gray-800 underline-offset-4">LinkedIn</a>
              <a href="https://github.com/ukemeikot" target="_blank" rel="noreferrer" className="hover:text-[#4ADE80] transition-colors underline decoration-gray-800 underline-offset-4">GitHub</a>
            </div>

            <p className="text-gray-400 max-w-lg leading-relaxed text-lg md:text-xl font-light">
              I bridge the gap between complex backend logic and pixel-perfect mobile interfaces. 
              Specializing in <span className="text-white font-medium">React Native</span>, 
              <span className="text-white font-medium"> Node.js</span>, and 
              <span className="text-white font-medium"> Scalable Architectures</span>.
            </p>
          </div>

          {/* Right Column: Image & About */}
          <div className="md:col-span-4 flex flex-col gap-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-b from-[#4ADE80] to-transparent opacity-20 group-hover:opacity-40 transition duration-500 rounded-lg"></div>
              <img 
                src={ukemeImg} 
                alt="Ukeme Ikot" 
                className="relative w-full grayscale hover:grayscale-0 transition-all duration-700 rounded-lg border border-gray-800 object-cover aspect-[4/5]"
              />
              <div className="mt-4 flex justify-between items-end">
                 <div>
                    <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">Lead Developer</p>
                    <p className="font-bold text-lg">Ukeme Ikot</p>
                 </div>
                 <p className="text-[#4ADE80] font-mono text-xs">// Based in Akwa Ibom</p>
              </div>
            </div>

            <div className="bg-[#161616] p-6 rounded-lg border border-gray-900">
              <p className="text-[#4ADE80] font-mono text-xs mb-3 uppercase tracking-widest">{"[ The Mission ]"}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                To build high-performance digital products that solve real-world problems. 
                Whether it's a native mobile app or a complex web ecosystem, I focus on 
                scalability, security, and the end-user.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-900 pt-16">
          <div className="group">
            <p className="text-gray-600 font-mono text-[10px] mb-2 uppercase tracking-[0.2em] group-hover:text-[#4ADE80] transition-colors">{"// Projects Done"}</p>
            <h3 className="text-5xl font-black tracking-tighter">10<span className="text-[#4ADE80]">+</span></h3>
          </div>
          <div className="group">
            <p className="text-gray-600 font-mono text-[10px] mb-2 uppercase tracking-[0.2em] group-hover:text-[#4ADE80] transition-colors">{"// Exp Years"}</p>
            <h3 className="text-5xl font-black tracking-tighter">03<span className="text-[#4ADE80]">+</span></h3>
          </div>
          <div className="group">
            <p className="text-gray-600 font-mono text-[10px] mb-2 uppercase tracking-[0.2em] group-hover:text-[#4ADE80] transition-colors">{"// Satisfied Clients"}</p>
            <h3 className="text-5xl font-black tracking-tighter">17<span className="text-[#4ADE80]">+</span></h3>
          </div>
        </div>

        {/* Tech Stack Horizontal Scroll */}
        <div id="stack" className="mt-32 overflow-hidden border-y border-gray-900 py-10">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, index) => (
              <span key={index} className="text-2xl md:text-4xl font-black text-gray-800 hover:text-[#4ADE80] transition-colors uppercase tracking-tighter">
                {tech} <span className="text-[#4ADE80] mx-4">/</span>
              </span>
            ))}
          </div>
        </div>

        {/* Placeholder for Projects */}
        <section id="projects" className="mt-32">
          <h2 className="text-3xl font-bold mb-12">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video bg-[#161616] rounded-lg border border-gray-800 flex items-center justify-center text-gray-600">
              Project Card coming soon...
            </div>
            <div className="aspect-video bg-[#161616] rounded-lg border border-gray-800 flex items-center justify-center text-gray-600">
              Project Card coming soon...
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;