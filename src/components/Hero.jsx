import { Mail, Download, ArrowDown, Sparkles, Code, Brain, Cpu, ArrowRight } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { useState, useEffect } from "react";

const ROLES = [
  "Full Stack Developer",
  "AI & ML Enthusiast",
  "React & FastAPI Specialist",
  "MCA Postgraduate Student",
];

function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetRole = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(targetRole.substring(0, displayText.length + 1));
        if (displayText === targetRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(targetRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 bg-slate-950 overflow-hidden"
    >
      {/* Background Animated Glow Gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] animate-pulse-glow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-[30rem] h-[30rem] bg-cyan-500/15 rounded-full blur-[140px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">

        {/* Left Side Content (7 cols) */}
        <article className="lg:col-span-7 space-y-6 text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md text-blue-400 text-sm font-medium animate-float">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            <Sparkles size={16} className="text-cyan-400" />
            <span>Available for Internships & Projects</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide">
              Hello, I am
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Prajil <span className="text-shimmer">P</span>
            </h1>
          </div>

          {/* Animated Dynamic Role */}
          <div className="h-12 flex items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-200 flex items-center gap-3">
              <span className="text-cyan-400">&gt;</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300">
                {displayText}
              </span>
              <span className="w-1 h-8 bg-cyan-400 animate-pulse ml-1 inline-block"></span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            Passionate Master of Computer Applications student crafting high-performance full-stack web applications, modern AI-driven solutions, and clean scalable APIs with <strong className="text-blue-400 font-semibold">React</strong>, <strong className="text-cyan-400 font-semibold">FastAPI</strong>, and <strong className="text-indigo-400 font-semibold">Machine Learning</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold px-7 py-3.5 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold border border-slate-700/80 hover:border-blue-500/50 hover:text-white backdrop-blur-md transition-all duration-300 shadow-md hover:-translate-y-1"
            >
              <span>Get In Touch</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-blue-400" />
            </a>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg">
            <div className="glass-card p-4 rounded-xl border border-slate-800/80 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-outfit">MCA</p>
              <p className="text-xs text-slate-400 mt-1">RGIT Kottayam</p>
            </div>
            <div className="glass-card p-4 rounded-xl border border-slate-800/80 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-outfit">Full Stack</p>
              <p className="text-xs text-slate-400 mt-1">React & FastAPI</p>
            </div>
            <div className="glass-card p-4 rounded-xl border border-slate-800/80 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-outfit">AI/ML</p>
              <p className="text-xs text-slate-400 mt-1">MediSync & More</p>
            </div>
          </div>

          {/* Social Icons Navigation */}
          <div className="flex items-center gap-5 pt-4">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Connect:</span>
            
            <a
              href="https://github.com/prajilprabhan"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 hover:scale-110 transition-all duration-300"
            >
              <Github size={22} />
            </a>

            <a
              href="https://linkedin.com/in/prajilprabhan"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:prajilprabhan924@gmail.com"
              aria-label="Send Email"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 hover:scale-110 transition-all duration-300"
            >
              <Mail size={22} />
            </a>
          </div>

        </article>

        {/* Right Side Visual / Profile Image (5 cols) */}
        <aside className="lg:col-span-5 flex justify-center items-center relative">
          
          <div className="relative group w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">

            {/* Glowing animated background rings */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 opacity-60 blur-xl group-hover:opacity-100 animate-spin-slow transition duration-700"></div>

            {/* Decorative Glass Circle Ring */}
            <div className="absolute -inset-1 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 shadow-2xl">
              
              {/* Profile Image */}
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
                <img
                  src="/profile.JPG"
                  alt="Prajil P - Full Stack Developer & AI Enthusiast"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>

            {/* Floating Tech Pill 1 (React) */}
            <div className="absolute -top-4 -left-4 glass-card px-4 py-2 rounded-2xl border border-blue-500/40 shadow-xl flex items-center gap-2 animate-float">
              <Code size={18} className="text-blue-400" />
              <span className="text-xs font-semibold text-white">React 19</span>
            </div>

            {/* Floating Tech Pill 2 (AI/ML) */}
            <div className="absolute top-1/2 -right-6 glass-card px-4 py-2 rounded-2xl border border-cyan-500/40 shadow-xl flex items-center gap-2 animate-float-reverse">
              <Brain size={18} className="text-cyan-400" />
              <span className="text-xs font-semibold text-white">FastAPI & AI</span>
            </div>

            {/* Floating Tech Pill 3 (PostgreSQL / Python) */}
            <div className="absolute -bottom-4 left-6 glass-card px-4 py-2 rounded-2xl border border-indigo-500/40 shadow-xl flex items-center gap-2 animate-float">
              <Cpu size={18} className="text-indigo-400" />
              <span className="text-xs font-semibold text-white">Python & PostgreSQL</span>
            </div>

          </div>

        </aside>

      </div>

      {/* Animated Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-blue-400 transition"
        aria-label="Scroll to About section"
      >
        <span className="text-xs font-medium tracking-widest uppercase text-slate-500">Explore</span>
        <ArrowDown className="animate-bounce text-cyan-400" size={20} />
      </a>
    </section>
  );
}

export default Hero;