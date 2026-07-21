import {
  ArrowUp,
  Mail,
  Heart,
} from "lucide-react";
import { Github, Linkedin, LogoP } from "./Icons";

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[35rem] h-[15rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 space-y-12">

        {/* Top Section */}
        <section className="grid md:grid-cols-12 gap-10">

          {/* Brand & Bio (5 cols) */}
          <article className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <LogoP size={32} className="shrink-0" />
              <h2 className="text-2xl font-bold text-white font-outfit tracking-tight">
                Prajil<span className="text-blue-400"> P</span>
              </h2>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed font-light max-w-sm">
              MCA Student at Rajiv Gandhi Institute of Technology, Kottayam. Dedicated to engineering robust full-stack applications and AI solutions.
            </p>
          </article>

          {/* Quick Links (4 cols) */}
          <nav aria-label="Footer Navigation" className="md:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-outfit">
              Quick Navigation
            </h3>

            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition">
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Connect & Socials (3 cols) */}
          <article className="md:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-outfit">
              Connect With Me
            </h3>

            <div className="flex flex-col gap-2.5 text-sm text-slate-400">
              <a
                href="mailto:prajilprabhan924@gmail.com"
                className="flex items-center gap-2.5 hover:text-cyan-400 transition"
              >
                <Mail size={16} className="text-blue-400" />
                <span className="truncate">prajilprabhan924@gmail.com</span>
              </a>

              <a
                href="https://github.com/prajilprabhan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-cyan-400 transition"
              >
                <Github size={16} className="text-blue-400" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://linkedin.com/in/prajilprabhan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-cyan-400 transition"
              >
                <Linkedin size={16} className="text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </article>

        </section>

        {/* Bottom Section */}
        <section className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">

          <small className="text-slate-500 text-xs font-light">
            © {year} Prajil P. Built with passion & precision. All rights reserved.
          </small>

          <small className="flex items-center gap-1.5 text-xs text-slate-400">
            <span>Designed with</span>
            <Heart size={14} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span>React 19 & Tailwind CSS</span>
          </small>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>

        </section>

      </div>
    </footer>
  );
}

export default Footer;