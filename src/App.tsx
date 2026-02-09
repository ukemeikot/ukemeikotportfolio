import { useState } from 'react';
import { 
  Smartphone, 
  Server, 
  Package, 
  Activity, 
  Home, 
  Users,
  Github,
  Linkedin,
  X,
  Mail,
  ArrowLeft,
  ExternalLink,
  Code2,
  HeartPulse, 
  Bell, 
  TrendingUp, 
  CheckCircle2, 
  LayoutDashboard,
  Calendar,
  Settings
} from 'lucide-react';

// --- IMAGE IMPORTS ---
import ukemeImg from './assets/ukeme.jpg';
import noraWeb from './assets/nora-web.jpg';
import noraMobile from './assets/nora-mobile.jpg';
import crypto1 from './assets/crypto1.jpg';
import crypto2 from './assets/crypto2.jpg';

// --- MIRA MOBILE MOCKUP ---
const MiraMobileMockup = () => {
  return (
    <div className="w-75 h-150 bg-neutral-900 rounded-[50px] p-3 shadow-2xl relative border-4 border-neutral-800 mx-auto">
      <div className="absolute top-24 -left-1.5 w-0.75 h-10 bg-neutral-800 rounded-l-md" />
      <div className="absolute top-32 -right-1.5 w-0.75 h-16 bg-neutral-800 rounded-r-md" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-neutral-900 rounded-b-2xl z-20 flex justify-center items-center">
        <div className="w-8 h-2 bg-neutral-800 rounded-full" />
      </div>
      <div className="w-full h-full bg-[#F8FAFC] rounded-[38px] overflow-hidden relative flex flex-col font-sans text-neutral-900">
        <div className="p-6 pt-10 flex-1 overflow-y-auto scrollbar-hide">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <HeartPulse size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black tracking-tight leading-none uppercase">Mira</span>
                <span className="text-[9px] text-blue-600 font-bold uppercase tracking-widest">Care</span>
              </div>
            </div>
            <Bell size={20} className="text-neutral-400" />
          </div>
          
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-neutral-100 mb-6">
            <div className="flex justify-between items-start mb-2">
              <p className="text-[10px] text-neutral-400 uppercase font-black tracking-tighter">Risk Score</p>
              <TrendingUp size={14} className="text-emerald-500" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-neutral-900">94.2</span>
              <span className="text-xs font-bold text-neutral-400">/ 100</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-neutral-100">
              <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-2">
                <Users size={16} />
              </div>
              <p className="text-[10px] text-neutral-500 mb-1">Patients</p>
              <p className="text-xl font-bold text-neutral-900">1,248</p>
            </div>
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-neutral-100">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
                <Activity size={16} />
              </div>
              <p className="text-[10px] text-neutral-500 mb-1">Score</p>
              <p className="text-xl font-bold text-neutral-900">98%</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-[10px] text-neutral-500 uppercase font-black tracking-widest ml-1 mb-2">Active Tasks</p>
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white rounded-2xl border border-neutral-100 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-blue-500" />
                  <div className="h-2 w-24 bg-neutral-100 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="h-16 bg-white/80 backdrop-blur-md border-t border-neutral-100 flex items-center justify-around px-6 pb-4 shrink-0">
          <LayoutDashboard size={22} className="text-blue-600" />
          <Activity size={22} className="text-neutral-300" />
          <Users size={22} className="text-neutral-300" />
        </div>
      </div>
    </div>
  );
};

// --- MIRA DESKTOP MOCKUP ---
const MiraDesktopMockup = () => {
  return (
    <div className="relative max-w-5xl mx-auto h-150 perspective-1000">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full bg-white rounded-xl border border-neutral-200 shadow-2xl overflow-hidden flex flex-col hover:-translate-y-2.5 transition-transform duration-500">
        <div className="h-10 bg-neutral-100 border-b border-neutral-200 flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="ml-4 flex-1 bg-white h-6 rounded-md border border-neutral-200 text-[10px] flex items-center px-2 text-neutral-400">
            app.miraproject.online/dashboard
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="w-64 bg-neutral-900 text-neutral-400 p-4 flex flex-col gap-1">
            <div className="mb-8 px-2 flex items-center gap-2 text-white font-semibold tracking-tighter">
              <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                <HeartPulse size={14} className="text-white" />
              </div>
              Mira Care
            </div>

            <div className="px-3 py-2 bg-white/10 text-white rounded-lg flex items-center gap-3">
              <LayoutDashboard size={18} />
              <span className="text-sm font-medium">Dashboard</span>
            </div>
            <div className="px-3 py-2 hover:bg-white/5 rounded-lg flex items-center gap-3 transition-colors">
              <Users size={18} />
              <span className="text-sm font-medium">Patients</span>
            </div>
            <div className="px-3 py-2 hover:bg-white/5 rounded-lg flex items-center gap-3 transition-colors">
              <Activity size={18} />
              <span className="text-sm font-medium">Care Plans</span>
            </div>
            <div className="px-3 py-2 hover:bg-white/5 rounded-lg flex items-center gap-3 transition-colors">
              <Calendar size={18} />
              <span className="text-sm font-medium">Schedule</span>
            </div>

            <div className="mt-auto pt-4 border-t border-white/10">
              <div className="px-3 py-2 hover:bg-white/5 rounded-lg flex items-center gap-3 transition-colors">
                <Settings size={18} />
                <span className="text-sm font-medium">Settings</span>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-neutral-50 p-6 overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">Good Morning, Dr. Sarah</h2>
                <p className="text-sm text-neutral-500">Here's what needs your attention today.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Bell size={20} className="text-neutral-500" />
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-neutral-50" />
                </div>
                <div className="w-8 h-8 rounded-full bg-neutral-200 border border-neutral-300" />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { label: "Active Patients", val: "1,248", change: "+12%" },
                { label: "Tasks Due", val: "24", change: "-5%" },
                { label: "High Risk", val: "12", change: "+2" },
                { label: "Care Plans", val: "85%", change: "Complete" }
              ].map((s, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
                  <p className="text-xs text-neutral-500 font-medium mb-1">{s.label}</p>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold text-neutral-900">{s.val}</span>
                    <span className="text-xs font-medium text-green-500">{s.change}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 shadow-sm flex-1 p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-neutral-900">Priority Alerts</h3>
                <button className="text-xs font-medium text-neutral-500 hover:text-neutral-900">View All</button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 hover:bg-neutral-50 rounded-lg transition-colors border border-transparent hover:border-neutral-100">
                    <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-xs text-neutral-600">JD</div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-neutral-900">John Doe</p>
                        <span className="text-xs text-neutral-400">2m ago</span>
                      </div>
                      <p className="text-xs text-neutral-500">Blood pressure spike reported. Requires immediate review.</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Project {
  title: string;
  description: string;
  details?: string;
  tech: string[];
  link?: string;
  liveLink?: string;
  type: string;
  images?: string[];
  isMira?: boolean;
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
    { title: "Mobile Development", icon: Smartphone, items: ["React Native (Expo/CLI)", "Flutter & Dart", "Android SDK (Kotlin)", "Native Modules"] },
    { title: "Backend & APIs", icon: Server, items: ["Node.js", "Python (FastAPI)", "Java (Spring Boot)", "Firebase Auth/Functions"] },
    { title: "Systems & SDKs", icon: Package, items: ["SDK Architecture", "NPM Publishing", "Bash/Shell Scripting", "TypeScript Abstraction"] },
    { title: "DevOps & Tooling", icon: Activity, items: ["CI/CD (GitHub Actions)", "Git Hooks", "Gradle Optimization", "App Store Publishing"] },
    { title: "Architecture", icon: Home, items: ["Clean Architecture", "Modular Codebases", "Microservices", "Offline-First Design"] },
    { title: "Leadership", icon: Users, items: ["Technical Strategy", "Mentorship", "Documentation", "Project Management"] }
  ];

  const projects: Project[] = [
    {
      title: "Mira Care",
      type: "Health-Tech AI Platform",
      description: "AI-powered preventive healthcare platform with real-time patient monitoring, early risk detection algorithms, and HIPAA-compliant data handling for proactive care coordination.",
      details: "Engineered a comprehensive health-tech solution using Next.js for the web dashboard and React Native for mobile applications, implementing sophisticated real-time data synchronization across care teams. The platform features custom AI-driven risk assessment algorithms that analyze patient vitals and identify early warning signs before conditions escalate. Built a highly resilient data layer capable of handling continuous streams of physiological metrics with sub-second latency. Implemented advanced SVG-based data visualization engine for interactive health trend charts and risk score displays. The architecture emphasizes enterprise-grade security with end-to-end encryption, role-based access control, and full HIPAA compliance for patient data protection. Integrated intelligent notification systems with priority-based alerting to ensure critical health deviations reach care providers immediately. The mobile app features offline-first capabilities, allowing healthcare workers to access patient records and update care plans even in low-connectivity environments. Utilized WebSocket connections for real-time collaboration features, enabling multiple care team members to coordinate patient treatment simultaneously. The dashboard includes comprehensive analytics tools for tracking care plan effectiveness, patient outcomes, and operational efficiency metrics.",
      tech: ["Next.js", "React Native", "TypeScript", "AI/ML Integration", "WebSocket", "PostgreSQL", "Redis", "HIPAA Compliance"],
      isMira: true,
      liveLink: "https://app.miraproject.online",
      link: "https://github.com/ukemeikot"
    },
    {
      title: "CryptoCredWallet",
      type: "High-Performance Mobile App",
      description: "Enterprise-grade cryptocurrency wallet with zero-latency onboarding, hardware-backed encryption, and advanced offline portfolio tracking for seamless crypto asset management.",
      details: "Architected a sophisticated background processing system that eliminates the traditional CPU-intensive lag during seed-phrase generation. By implementing a pre-generation architecture using Zustand state management, cryptographic calculations execute asynchronously during the application splash screen, resulting in an instant 4-step onboarding experience. The application employs a 'Last Known Value' persistence strategy leveraging AsyncStorage, ensuring users maintain full visibility of their portfolio data even in complete network dead zones. Security is paramount—all sensitive data is encrypted using SecureStore with hardware-backed keystores on both iOS and Android platforms. Real-time market data synchronization is handled through the CoinGecko API with intelligent caching mechanisms to minimize network calls while maintaining data freshness. Implemented advanced transaction signing with multi-signature support and biometric authentication for enhanced security.",
      tech: ["React Native", "TypeScript", "Zustand", "SecureStore", "CoinGecko API", "AsyncStorage", "Crypto.js", "Biometric Auth"],
      link: "https://github.com/ukemeikot/CryptoCredWallet",
      images: [crypto1, crypto2] 
    },
    {
      title: "SwiftAuth SDK",
      type: "Infrastructure Developer Tool",
      description: "Production-ready authentication SDK for React Native with Firebase integration, enterprise-grade error handling, automated CI/CD pipeline, and comprehensive TypeScript support.",
      details: "Developed 'rn-swiftauth-sdk' as a comprehensive authentication solution designed to streamline Firebase integration for React Native developers globally. The SDK implements the Options Pattern for maximum API extensibility, allowing developers to customize authentication flows while maintaining type safety. Features a sophisticated dual-layer error handling system that intelligently maps Firebase provider exceptions to user-friendly, actionable error messages. Version 1.1.0 introduced a complete password recovery protocol with email verification and secure reset flows. The package includes production-ready custom UI components optimized for both iOS and Android platforms, following platform-specific design guidelines. Comprehensive TypeScript definitions ensure excellent developer experience with full autocomplete and type checking. Published with automated CI/CD pipeline via GitHub Actions, ensuring consistent builds and semantic versioning. Documentation includes integration guides, API references, and real-world implementation examples.",
      tech: ["TypeScript", "Firebase Auth", "NPM Package", "React Native", "GitHub Actions", "ESLint", "Jest", "CI/CD"],
      link: "https://www.npmjs.com/package/rn-swiftauth-sdk",
    },
    {
      title: "Noramum.app",
      type: "Full Stack SaaS Platform",
      description: "Comprehensive childcare management SaaS with Next.js web dashboard, React Native mobile apps, real-time data synchronization, and end-to-end encryption for sensitive family data.",
      details: "Led end-to-end development of a sophisticated childcare platform encompassing both a Next.js administrative dashboard and React Native mobile applications. The system architecture focuses on complex real-time state synchronization to ensure absolute data parity across all user devices, enabling mothers to manage childcare records, appointments, and developmental milestones seamlessly. Implemented Redux for predictable state management with optimistic updates and conflict resolution strategies. The web dashboard features a responsive Tailwind CSS interface with advanced data visualization components for tracking child development metrics. Backend built on Node.js with WebSocket connections for real-time updates, ensuring parents receive instant notifications for important events. The mobile app utilizes Expo for rapid iteration while maintaining native performance, with offline-first architecture allowing full functionality even without network connectivity. Data synchronization employs a queue-based system with automatic retry logic and conflict resolution. Implemented comprehensive security measures including end-to-end encryption for sensitive child data and role-based access control for multi-user households.",
      tech: ["Next.js", "React Native", "Expo", "Tailwind CSS", "Redux", "Node.js", "WebSocket", "PostgreSQL", "E2E Encryption"],
      liveLink: "https://noramum.app",
      link: "https://github.com/ukemeikot",
      images: [noraWeb, noraMobile] 
    },
    {
      title: "Real-Time Comms Backend",
      type: "Scalable System Architecture",
      description: "Production-grade communication backend with Socket.io messaging, WebRTC video/voice calling, Redis message brokering, and sub-100ms latency for enterprise collaboration.",
      details: "Designed and implemented a production-grade communication backend optimized for enterprise-scale real-time interactions. The system leverages Socket.io for bidirectional messaging with automatic reconnection handling and message queuing during network interruptions. WebRTC integration provides secure peer-to-peer video and voice calling with STUN/TURN server fallbacks for NAT traversal. Redis serves as a high-performance message broker, enabling horizontal scaling across multiple server instances while maintaining message ordering guarantees. The architecture follows strict Clean Architecture principles with clear separation between domain logic, application services, and infrastructure concerns, ensuring maintainability and testability. PostgreSQL handles persistent data storage with optimized indexing strategies for fast message retrieval and search functionality. Implemented comprehensive monitoring and logging using structured logging patterns, enabling rapid debugging and performance optimization. The system handles presence detection, typing indicators, read receipts, and delivery confirmations with minimal latency. Built-in rate limiting and authentication middleware protect against abuse while maintaining sub-100ms message delivery times under normal load conditions.",
      tech: ["Node.js", "Socket.io", "WebRTC", "PostgreSQL", "Redis", "Express", "JWT", "Docker", "Microservices"],
      link: "https://github.com/ukemeikot/messaging_and_calling_backend",
    }
  ];

  if (activeProject) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] text-white p-6 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-x-hidden">
        <button 
          onClick={() => { setActiveProject(null); window.scrollTo(0, 0); }}
          className="text-[#4ADE80] font-mono mb-12 flex items-center gap-2 text-xs uppercase tracking-widest hover:gap-3 transition-all duration-300"
        >
          <ArrowLeft size={16} />
          BACK TO EXPLORATION
        </button>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="overflow-hidden">
              <p className="text-[#4ADE80] font-mono text-[10px] uppercase tracking-[0.3em] mb-4">{activeProject.type}</p>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase mb-8 tracking-tighter leading-tight wrap-break-word">{activeProject.title}</h1>
              <div className="space-y-8">
                <div className="transform transition-all duration-500 hover:translate-x-1">
                  <h2 className="text-white font-bold text-sm mb-4 uppercase tracking-widest border-b border-gray-900 pb-2">Overview</h2>
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light">{activeProject.details}</p>
                </div>
                <div className="transform transition-all duration-500 hover:translate-x-1">
                  <h2 className="text-white font-bold text-sm mb-4 uppercase tracking-widest border-b border-gray-900 pb-2">Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t) => (
                      <span key={t} className="bg-[#1A1A1A] border border-gray-800 px-3 py-1 rounded-sm text-[10px] text-gray-400 uppercase font-mono hover:border-[#4ADE80]/50 hover:text-[#4ADE80] transition-all duration-300">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-8">
                  {activeProject.liveLink && (
                    <a 
                      href={activeProject.liveLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="bg-[#4ADE80] text-black px-8 py-3 md:py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:scale-105 hover:shadow-lg hover:shadow-[#4ADE80]/20 transition-all duration-300 flex items-center gap-2"
                    >
                      View Live Site
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {activeProject.link && (
                    <a 
                      href={activeProject.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="border border-gray-700 text-white px-8 py-3 md:py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
                    >
                      <Github size={14} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center lg:items-end gap-8 mt-12 lg:mt-0">
              {activeProject.isMira ? (
                <>
                  {/* Mobile Mockup - shows on small screens */}
                  <div className="lg:hidden relative group flex justify-center items-center py-10">
                    <div className="absolute -inset-20 bg-blue-600/10 blur-[100px] rounded-full animate-pulse" />
                    <MiraMobileMockup />
                  </div>
                  
                  {/* Desktop Mockup - shows on large screens */}
                  <div className="hidden lg:block w-full">
                    <div className="relative group">
                      <div className="absolute -inset-20 bg-blue-600/10 blur-[100px] rounded-full animate-pulse" />
                      <MiraDesktopMockup />
                    </div>
                  </div>
                </>
              ) : activeProject.images ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 w-full max-w-75 md:max-w-full lg:max-w-85">
                  {activeProject.images.map((img, i) => (
                    <div 
                      key={i} 
                      className="relative rounded-[2.5rem] overflow-hidden border-8 border-[#1A1A1A] bg-black shadow-2xl mx-auto md:mx-0 hover:scale-[1.02] transition-transform duration-500"
                    >
                      <img src={img} alt="Screenshot" className="w-full h-auto object-contain" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full aspect-video bg-[#161616] rounded-2xl border border-gray-900 flex items-center justify-center text-gray-700 font-mono text-[10px] text-center p-8 uppercase tracking-widest">
                  <Code2 size={48} className="opacity-30" />
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
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto relative z-60">
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2 tracking-tighter cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => scrollToSection('home')}>
          <span className="text-[#4ADE80]">//</span> Ukeme Ikot
        </div>
        <ul className="hidden md:flex gap-10 text-[10px] uppercase tracking-widest font-semibold text-gray-500">
          <li className="text-[#4ADE80] cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => scrollToSection('home')}>Home</li>
          <li className="hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" onClick={() => scrollToSection('projects')}>Work</li>
          <li className="hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" onClick={() => scrollToSection('skills')}>Skills</li>
          <li className="hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
        <button className="md:hidden text-[#4ADE80] font-mono z-70 relative text-sm hover:scale-110 transition-transform duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
        </button>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#0F0F0F] z-55 flex flex-col items-center justify-center gap-8 text-2xl md:text-4xl font-black uppercase tracking-tighter animate-in fade-in zoom-in duration-300">
             <li className="list-none text-[#4ADE80] cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => scrollToSection('home')}>HOME</li>
             <li className="list-none text-white cursor-pointer hover:scale-110 hover:text-[#4ADE80] transition-all duration-300" onClick={() => scrollToSection('projects')}>WORK</li>
             <li className="list-none text-white cursor-pointer hover:scale-110 hover:text-[#4ADE80] transition-all duration-300" onClick={() => scrollToSection('skills')}>SKILLS</li>
             <li className="list-none text-white cursor-pointer hover:scale-110 hover:text-[#4ADE80] transition-all duration-300" onClick={() => scrollToSection('contact')}>CONTACT</li>
          </div>
        )}
      </nav>

      <main id="home" className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-24 md:mb-40">
          <div className="md:col-span-7">
            <div className="inline-block bg-[#1A1A1A] px-4 py-1 rounded-full border border-gray-800 mb-6 font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-[#4ADE80] hover:border-[#4ADE80]/50 transition-all duration-300">
              {"< Mobile and Full Stack Software Engineer />"}
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-[90px] font-black leading-[0.9] md:leading-[0.85] uppercase tracking-tighter mb-8 italic wrap-break-word animate-in slide-in-from-left duration-700">
              Building<br />Scaleable<br /><span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-gray-600">Infrastructures</span>
            </h1>
            <div className="flex flex-wrap gap-4 md:gap-6 text-gray-500 font-mono text-[10px] uppercase tracking-wider mb-12">
              <a href="https://linkedin.com/in/ukeme-ikot" target="_blank" className="hover:text-[#4ADE80] transition-all duration-300 underline decoration-gray-800 underline-offset-4 flex items-center gap-1 hover:gap-2">
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a href="https://github.com/ukemeikot" target="_blank" className="hover:text-[#4ADE80] transition-all duration-300 underline decoration-gray-800 underline-offset-4 flex items-center gap-1 hover:gap-2">
                <Github size={14} />
                GitHub
              </a>
              <a href="https://x.com/UkemeEtim7" target="_blank" className="hover:text-[#4ADE80] transition-all duration-300 underline decoration-gray-800 underline-offset-4 flex items-center gap-1 hover:gap-2">
                <X size={14} />
                X (Twitter)
              </a>
            </div>
            
            <p className="text-gray-300 max-w-2xl text-base md:text-lg font-light leading-relaxed text-justify mb-8 animate-in slide-in-from-left duration-700 delay-150">
                I'm a <span className="text-white font-semibold">Mobile and Full Stack Software Engineer</span> specializing in <span className="text-white font-semibold">React Native development</span>, <span className="text-white font-semibold">Node.js backend architecture</span>, and <span className="text-white font-semibold">scalable cloud infrastructure</span>. With proven expertise in building production-grade applications used by thousands of users globally, I architect high-performance mobile apps with sophisticated offline-first capabilities, develop enterprise-ready SDKs published on NPM for the developer community, and engineer real-time communication systems with sub-100ms latency. My technical approach combines <span className="text-[#4ADE80] font-semibold">Clean Architecture principles</span>, <span className="text-[#4ADE80] font-semibold">Test-Driven Development</span>, and modern <span className="text-[#4ADE80] font-semibold">CI/CD practices</span> to deliver maintainable, testable, and scalable solutions across the entire software development lifecycle—from system design and API development to deployment automation and performance optimization. I'm passionate about developer experience, technical documentation, code quality, and mentoring engineering teams to adopt industry best practices that accelerate product velocity while maintaining exceptional standards.
            </p>

            <p className="text-gray-500 max-w-lg text-sm md:text-base font-light leading-relaxed italic border-l-2 border-[#4ADE80]/30 pl-4 animate-in slide-in-from-left duration-700 delay-300">
              Currently focused on <span className="text-white font-bold">SDK Development</span>, <span className="text-white font-bold">Systems Automation</span>, and pushing the boundaries of <span className="text-white font-bold">Mobile Performance Engineering</span>.
            </p>
          </div>
          <div className="md:col-span-5 relative group flex justify-center mt-12 md:mt-0 animate-in slide-in-from-right duration-700">
             <div className="absolute -inset-2 bg-linear-to-b from-[#4ADE80]/20 to-transparent blur-2xl rounded-full group-hover:opacity-60 transition-all duration-700"></div>
             <div className="relative w-full max-w-[320px] md:max-w-105 rounded-[3rem] border border-gray-800 bg-[#161616] p-4 overflow-hidden shadow-2xl hover:border-[#4ADE80]/30 transition-all duration-500 hover:scale-[1.02]">
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
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-16 italic text-transparent bg-clip-text bg-linear-to-b from-white to-gray-800">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div 
                key={idx} 
                className="bg-[#161616] border border-gray-800 p-8 rounded-3xl hover:border-[#4ADE80]/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#4ADE80]/10 group animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center border border-gray-700 text-lg group-hover:border-[#4ADE80]/50 group-hover:bg-[#4ADE80]/10 transition-all duration-500">
                    <skill.icon className="text-[#4ADE80] w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight group-hover:text-[#4ADE80] transition-colors duration-300">{skill.title}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-500 font-medium text-sm flex items-center gap-2 group-hover:text-gray-400 transition-colors duration-300">
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
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 italic text-transparent bg-clip-text bg-linear-to-b from-white to-gray-800">Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => { setActiveProject(project); window.scrollTo(0,0); }}
                className="group cursor-pointer bg-[#0A0A0A] border border-gray-900 p-6 md:p-8 rounded-3xl hover:border-[#4ADE80]/40 transition-all duration-500 flex flex-col justify-between hover:scale-[1.02] hover:shadow-lg hover:shadow-[#4ADE80]/10 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-12">
                   <p className="text-[#4ADE80] font-mono text-[9px] uppercase tracking-widest mb-2 italic">0{index + 1} / {project.type}</p>
                   <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter group-hover:text-[#4ADE80] transition-colors duration-300 wrap-break-word">{project.title}</h3>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 line-clamp-3 group-hover:text-gray-400 transition-colors duration-300">{project.description}</p>
                  <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:translate-x-2 group-hover:gap-3 transition-all duration-300">
                    View Project <span className="text-[#4ADE80]">→</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-40 text-center border-t border-gray-900">
          <p className="text-[#4ADE80] font-mono text-[10px] mb-4 uppercase tracking-[0.3em]">{"[ Contact ]"}</p>
          <h2 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-12 italic hover:text-[#4ADE80] transition-colors duration-500">Connect</h2>
          
          <div className="flex flex-col items-center gap-8">
            <a 
              href="mailto:ukemeetim2222@gmail.com" 
              className="text-lg md:text-4xl font-light hover:text-[#4ADE80] transition-all duration-300 border-b border-gray-800 pb-2 italic break-all flex items-center gap-3 hover:gap-4 hover:scale-105"
            >
              <Mail className="w-6 h-6 md:w-10 md:h-10" />
              ukemeetim2222@gmail.com
            </a>
            
            <div className="flex gap-8 md:gap-12 mt-4 flex-wrap justify-center font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-500">
              <a 
                href="https://linkedin.com/in/ukeme-ikot" 
                target="_blank" 
                className="hover:text-white transition-all duration-300 flex items-center gap-2 hover:gap-3 hover:scale-110"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a 
                href="https://github.com/ukemeikot" 
                target="_blank" 
                className="hover:text-white transition-all duration-300 flex items-center gap-2 hover:gap-3 hover:scale-110"
              >
                <Github size={16} />
                GitHub
              </a>
              <a 
                href="https://x.com/UkemeEtim7" 
                target="_blank" 
                className="hover:text-white transition-all duration-300 flex items-center gap-2 hover:gap-3 hover:scale-110"
              >
                <X size={16} />
                X (Twitter)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-10 border-t border-gray-900 text-gray-600 text-[8px] md:text-[10px] uppercase tracking-widest flex flex-col md:flex-row justify-between gap-4 text-center md:text-left">
         <p>© 2026 UKEME IKOT</p>
         <p>NIGERIA</p>
      </footer>
    </div>
  );
};

export default Portfolio;