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
      className="relative min-h-screen lg:h-screen lg:max-h-[960px] flex items-center pt-20 pb-12 lg:py-0 bg-slate-950 overflow-hidden"
    >
      {/* Background Animated Glow Gradients */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-blue-600/15 rounded-full blur-[120px] animate-pulse-glow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10 w-full pt-16 lg:pt-12">

        {/* Left Side Content (7 cols) */}
        <article className="lg:col-span-7 space-y-4 lg:space-y-5 text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md text-blue-400 text-xs font-medium animate-float">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <Sparkles size={14} className="text-cyan-400" />
            <span>Available for Internships & Projects</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-1">
            <p className="text-slate-400 text-base lg:text-lg font-medium tracking-wide">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Prajil <span className="text-shimmer">P</span>
            </h1>
          </div>

          {/* Animated Dynamic Role */}
          <div className="h-10 flex items-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 flex items-center gap-2">
              <span className="text-cyan-400">&gt;</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300">
                {displayText}
              </span>
              <span className="w-1 h-6 bg-cyan-400 animate-pulse ml-1 inline-block"></span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
            Passionate Master of Computer Applications student crafting high-performance full-stack web applications, modern AI-driven solutions, and clean scalable APIs with <strong className="text-blue-400 font-semibold">React</strong>, <strong className="text-cyan-400 font-semibold">FastAPI</strong>, and <strong className="text-indigo-400 font-semibold">Machine Learning</strong>.
          </p>

          {/* Action Buttons & Socials */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 text-sm font-semibold border border-slate-700/80 hover:border-blue-500/50 hover:text-white backdrop-blur-md transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              <span>Get In Touch</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-blue-400" />
            </a>

            {/* Social Links Bar */}
            <div className="flex items-center gap-2.5 ml-1">
              <a
                href="https://github.com/prajilprabhan"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 hover:scale-105 transition-all duration-300"
              >
                <Github size={18} />
              </a>

              <a
                href="https://linkedin.com/in/prajilprabhan"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 hover:scale-105 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:prajilprabhan924@gmail.com"
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 hover:scale-105 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
            <div className="glass-card p-3 rounded-xl border border-slate-800/80 text-center">
              <p className="text-xl sm:text-2xl font-extrabold text-blue-400 font-outfit">MCA</p>
              <p className="text-[11px] text-slate-400 mt-0.5">RGIT Kottayam</p>
            </div>
            <div className="glass-card p-3 rounded-xl border border-slate-800/80 text-center">
              <p className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-outfit">Full Stack</p>
              <p className="text-[11px] text-slate-400 mt-0.5">React & FastAPI</p>
            </div>
            <div className="glass-card p-3 rounded-xl border border-slate-800/80 text-center">
              <p className="text-xl sm:text-2xl font-extrabold text-indigo-400 font-outfit">AI/ML</p>
              <p className="text-[11px] text-slate-400 mt-0.5">MediSync & More</p>
            </div>
          </div>

        </article>

        {/* Right Side Visual / Profile Image (5 cols) */}
        <aside className="lg:col-span-5 flex justify-center items-center relative my-4 lg:my-0">
          
          <div className="relative group w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88">

            {/* Glowing animated background rings */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 opacity-60 blur-xl group-hover:opacity-100 animate-spin-slow transition duration-700"></div>

            {/* Decorative Glass Circle Ring */}
            <div className="absolute -inset-1 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 shadow-2xl">
              
              {/* Profile Image */}
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
                <img
                  src={`${import.meta.env.BASE_URL}profile.JPG`}
                  alt="Prajil P - Full Stack Developer & AI Enthusiast"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>

            {/* Floating Tech Pill 1 (React) */}
            <div className="absolute -top-2 -left-2 glass-card px-3 py-1.5 rounded-xl border border-blue-500/40 shadow-xl flex items-center gap-1.5 animate-float">
              <Code size={16} className="text-blue-400" />
              <span className="text-[11px] font-semibold text-white">React 19</span>
            </div>

            {/* Floating Tech Pill 2 (AI/ML) */}
            <div className="absolute top-1/2 -right-4 glass-card px-3 py-1.5 rounded-xl border border-cyan-500/40 shadow-xl flex items-center gap-1.5 animate-float-reverse">
              <Brain size={16} className="text-cyan-400" />
              <span className="text-[11px] font-semibold text-white">FastAPI & AI</span>
            </div>

            {/* Floating Tech Pill 3 (PostgreSQL / Python) */}
            <div className="absolute -bottom-2 left-4 glass-card px-3 py-1.5 rounded-xl border border-indigo-500/40 shadow-xl flex items-center gap-1.5 animate-float">
              <Cpu size={16} className="text-indigo-400" />
              <span className="text-[11px] font-semibold text-white">Python & PostgreSQL</span>
            </div>

          </div>

        </aside>

      </div>

      {/* Animated Scroll Indicator */}
      <a
        href="#about"
        className="hidden lg:flex absolute bottom-3 left-1/2 -translate-x-1/2 flex-col items-center gap-0.5 text-slate-400 hover:text-blue-400 transition"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase text-slate-500">Explore</span>
        <ArrowDown className="animate-bounce text-cyan-400" size={16} />
      </a>
    </section>
  );
}

export default Hero;