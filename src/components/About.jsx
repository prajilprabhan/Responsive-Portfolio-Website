import { useState } from "react";
import {
  GraduationCap,
  MapPin,
  Mail,
  User,
  Briefcase,
  Sparkles,
  Terminal,
  Code2,
  Heart,
  Copy,
  Check,
  Brain,
  Zap,
  Globe,
  FileCode,
  Layers,
  ArrowUpRight,
  BookOpen
} from "lucide-react";

function About() {
  const [activeTab, setActiveTab] = useState("story");
  const [activeCodeFile, setActiveCodeFile] = useState("prajil.config.ts");
  const [copied, setCopied] = useState(false);

  const infoCards = [
    {
      icon: <User className="text-blue-400" size={24} />,
      title: "Profile Details",
      details: [
        { label: "Full Name", value: "Prajil P" },
        { label: "Primary Role", value: "Full Stack & AI Developer" },
        { label: "Academic Standing", value: "MCA Postgraduate Student" },
      ],
      tag: "Active Developer",
    },
    {
      icon: <GraduationCap className="text-cyan-400" size={24} />,
      title: "Education",
      details: [
        { label: "Degree", value: "Master of Computer Applications" },
        { label: "Institution", value: "Rajiv Gandhi Inst. of Tech (RIT)" },
        { label: "Timeline", value: "2025 - Present" },
      ],
      tag: "Postgraduate",
    },
    {
      icon: <MapPin className="text-indigo-400" size={24} />,
      title: "Location & Status",
      details: [
        { label: "Base Location", value: "Kerala, India 🇮🇳" },
        { label: "Work Preference", value: "Remote / Hybrid / On-Site" },
        { label: "Languages Spoken", value: "English, Malayalam" },
      ],
      tag: "Open to Work",
    },
    {
      icon: <Briefcase className="text-emerald-400" size={24} />,
      title: "Core Domain",
      details: [
        { label: "Web Tech", value: "React, FastAPI, Tailwind CSS" },
        { label: "AI & ML", value: "Machine Learning, NLP, Python" },
        { label: "Focus Area", value: "Clean Architectures & Interactive UIs" },
      ],
      tag: "Full Stack",
    },
  ];

  const codeSnippets = {
    "prajil.config.ts": `/**
 * @developer Prajil P
 * @role Full Stack & AI Developer
 * @location Kerala, India 🇮🇳
 */

export const developer = {
  name: "Prajil P",
  title: "Full Stack & AI Engineer",
  education: {
    degree: "Master of Computer Applications (MCA)",
    college: "Rajiv Gandhi Institute of Technology, Kottayam",
    status: "Enrolled (2025 - Present)"
  },
  skills: {
    frontend: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"],
    backend: ["FastAPI", "Python", "RESTful APIs", "Database Design"],
    ai_ml: ["Machine Learning", "NLP", "Scikit-Learn", "Model Integration"]
  },
  featuredProject: "MediSync — Intelligent Drug Interaction Predictor",
  availability: "Open for Software Engineering & AI Developer Roles"
};`,
    "tech_stack.json": `{
  "developer": "Prajil P",
  "technologies": {
    "frontend": {
      "framework": "React 19",
      "styling": "Tailwind CSS v4",
      "icons": "Lucide React",
      "bundler": "Vite"
    },
    "backend": {
      "framework": "FastAPI",
      "language": "Python 3.11+",
      "architecture": "Modular REST API"
    },
    "ai_engine": {
      "libraries": ["Scikit-learn", "Pandas", "NumPy"],
      "domains": ["Drug Interaction ML", "Predictive Analytics"]
    }
  }
}`,
    "bio.md": `# About Prajil P

I am an MCA Postgraduate student at Rajiv Gandhi Institute of Technology with a strong foundation in **Full Stack Software Development** and **Artificial Intelligence**.

### Core Mission:
> "Building seamless web platforms that combine modern frontend elegance with intelligent backend predictive services."

- 💡 Passionate about clean code, UI polish, and scalable web solutions.
- 🚀 Created **MediSync**, an ML-based drug interaction evaluation platform.
- 📬 Reach out at: prajilprabhan26@gmail.com`
  };

  const handleCopyCode = () => {
    const textToCopy = codeSnippets[activeCodeFile];
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const philosophyItems = [
    {
      icon: <Zap className="text-amber-400" size={26} />,
      title: "User-Centric Design",
      subtitle: "Aesthetics Meets Functionality",
      description: "Code should not only run efficiently but also empower users with intuitive interfaces, silky smooth interactions, and fluid dark-mode themes.",
    },
    {
      icon: <Brain className="text-cyan-400" size={26} />,
      title: "AI & Web Synergy",
      subtitle: "Intelligent Web Systems",
      description: "Merging modern web architectures with machine learning models to build data-driven applications like predictive diagnostics and smart automation.",
    },
    {
      icon: <Code2 className="text-blue-400" size={26} />,
      title: "Scalable Architecture",
      subtitle: "Clean Code Standard",
      description: "Writing maintainable, modular, and component-driven React applications paired with lightweight RESTful APIs in FastAPI.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-950 py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden transition-colors duration-500"
      aria-labelledby="about-heading"
    >
      {/* Dynamic Background Accent Lights */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">

        {/* Section Header */}
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider backdrop-blur-md">
            <Sparkles size={15} className="animate-spin-slow text-cyan-400" />
            <span>Discover My Background</span>
          </div>

          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Me</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Bridging software engineering and artificial intelligence to design intuitive, high-performance digital experiences.
          </p>

          {/* Quick Stat Pill Bar */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
            <div className="px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 flex items-center gap-2">
              <GraduationCap size={16} className="text-cyan-400" />
              <span>MCA @ RIT Kottayam</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 flex items-center gap-2">
              <Layers size={16} className="text-blue-400" />
              <span>React & FastAPI</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 flex items-center gap-2">
              <Brain size={16} className="text-indigo-400" />
              <span>AI & ML Solutions</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open for Roles</span>
            </div>
          </div>
        </header>

        {/* Tab Navigation Controls */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-lg gap-1 sm:gap-2 shadow-2xl max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab("story")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === "story"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <BookOpen size={16} />
              <span>My Journey</span>
            </button>

            <button
              onClick={() => setActiveTab("terminal")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === "terminal"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Terminal size={16} />
              <span>Developer Terminal</span>
            </button>

            <button
              onClick={() => setActiveTab("philosophy")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === "philosophy"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Heart size={16} />
              <span>Core Values</span>
            </button>

            <button
              onClick={() => setActiveTab("highlights")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === "highlights"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <User size={16} />
              <span>Quick Info Grid</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display Area */}
        <div className="transition-all duration-500">

          {/* TAB 1: MY JOURNEY STORY */}
          {activeTab === "story" && (
            <div className="grid lg:grid-cols-12 gap-8 items-stretch animate-fadeIn">
              
              {/* Main Bio Card (7 cols) */}
              <article className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl space-y-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-semibold">
                      <Terminal size={14} />
                      <span>Software Engineer & Student</span>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">whoami.sh</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                    Turning complex ideas into <span className="text-cyan-400">clean code</span> and <span className="text-blue-400">intelligent solutions</span>.
                  </h3>

                  <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-light">
                    Hello! I’m <strong className="text-white font-semibold">Prajil P</strong>, an MCA student at <span className="text-blue-400 font-medium">Rajiv Gandhi Institute of Technology, Kottayam</span>. I build modern web applications leveraging <strong className="text-cyan-400 font-medium">React</strong>, <strong className="text-blue-400 font-medium">Tailwind CSS</strong>, and <strong className="text-indigo-400 font-medium">FastAPI</strong>.
                  </p>

                  <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-light">
                    My developer journey revolves around combining practical full-stack software development with artificial intelligence. A highlight of my work includes <strong className="text-cyan-300">MediSync</strong>, an intelligent platform engineered to predict drug-drug interactions using Machine Learning models.
                  </p>

                  {/* Highlighted Quote Box */}
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-start gap-4 shadow-inner">
                    <Code2 size={24} className="text-cyan-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white text-base">Development Motto</h4>
                      <p className="text-slate-400 text-sm mt-1 leading-normal italic">
                        "Build applications that seamlessly pair functional perfection with captivating visual design."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Bar inside story */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Mail className="text-blue-400" size={16} />
                    <a
                      href="mailto:prajilprabhan26@gmail.com"
                      className="hover:text-cyan-400 transition-colors font-mono"
                    >
                      prajilprabhan26@gmail.com
                    </a>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-cyan-400 font-semibold transition-colors group"
                  >
                    <span>Get in Touch</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </article>

              {/* Side Highlight Card (5 cols) */}
              <aside className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="glass-card glass-card-hover p-8 rounded-3xl space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Globe size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white">What Drives Me</h4>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      I believe the future of software lies in combining slick, responsive web frontends with intelligent machine learning services that solve real-world problems.
                    </p>
                  </div>

                  {/* Floating Skill Badges */}
                  <div className="space-y-3 pt-4 border-t border-slate-800/80">
                    <h5 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Primary Tech Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {["React 19", "FastAPI", "Python", "Tailwind CSS", "Machine Learning", "REST APIs", "Git"].map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-medium hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">Featured Project</div>
                      <div className="text-slate-400 text-xs">MediSync Drug Predictor</div>
                    </div>
                  </div>
                  <a
                    href="#projects"
                    className="text-xs font-semibold px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </aside>

            </div>
          )}

          {/* TAB 2: DEVELOPER TERMINAL */}
          {activeTab === "terminal" && (
            <div className="animate-fadeIn max-w-5xl mx-auto">
              <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
                
                {/* IDE Title Bar */}
                <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                      ~/prajil-portfolio/src/config/{activeCodeFile}
                    </span>
                  </div>

                  {/* IDE File Tabs */}
                  <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-lg border border-slate-800">
                    {Object.keys(codeSnippets).map((fileName) => (
                      <button
                        key={fileName}
                        onClick={() => setActiveCodeFile(fileName)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                          activeCodeFile === fileName
                            ? "bg-slate-800 text-cyan-400 font-semibold"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <FileCode size={13} />
                        <span>{fileName}</span>
                      </button>
                    ))}
                  </div>

                  {/* Copy Code Button */}
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors cursor-pointer"
                    title="Copy snippet"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} className="text-cyan-400" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Window Display */}
                <div className="p-6 bg-slate-950/90 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
                  <pre className="whitespace-pre">
                    <code>{codeSnippets[activeCodeFile]}</code>
                  </pre>
                </div>

                {/* IDE Status Footer */}
                <div className="bg-slate-900/80 border-t border-slate-800 px-4 py-2 flex items-center justify-between text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      TypeScript React
                    </span>
                    <span>UTF-8</span>
                  </div>
                  <div>Prajil P Dev Config</div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: CORE PHILOSOPHY */}
          {activeTab === "philosophy" && (
            <div className="grid md:grid-cols-3 gap-6 animate-fadeIn">
              {philosophyItems.map((item, idx) => (
                <article
                  key={idx}
                  className="glass-card glass-card-hover p-8 rounded-3xl flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="p-4 w-fit rounded-2xl bg-slate-900/90 border border-slate-800 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs font-semibold text-cyan-400/80 uppercase tracking-wider mt-1">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>Pillar {idx + 1}</span>
                    <Sparkles size={14} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* TAB 4: QUICK INFO GRID */}
          {activeTab === "highlights" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
              {infoCards.map((card, idx) => (
                <article
                  key={idx}
                  className="glass-card glass-card-hover p-6 rounded-3xl flex flex-col justify-between space-y-6 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 group-hover:scale-110 transition-transform">
                        {card.icon}
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                        {card.tag}
                      </span>
                    </div>

                    <h4 className="font-bold text-lg text-white mb-4">
                      {card.title}
                    </h4>

                    <dl className="space-y-3 text-xs sm:text-sm">
                      {card.details.map((item, itemIdx) => (
                        <div key={itemIdx} className="space-y-0.5">
                          <dt className="text-slate-500 text-[11px] uppercase tracking-wider">{item.label}</dt>
                          <dd className="text-slate-200 font-medium">{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="pt-3 border-t border-slate-800/60 flex items-center justify-end">
                    <span className="text-[11px] text-slate-500 font-mono">0{idx + 1}</span>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default About;