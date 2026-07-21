import { Menu, X, Download, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-blue-950/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto flex justify-between items-center px-6"
        aria-label="Primary Navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white hover:text-blue-400 transition duration-300"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
            <Sparkles size={18} className="animate-pulse" />
          </div>
          <span className="font-outfit">
            Prajil<span className="text-blue-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 block relative ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md shadow-blue-500/25"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Resume Action */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg bg-slate-900/80 border border-slate-800"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <nav className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/80 px-6 py-6 shadow-2xl animate-fadeIn">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-medium transition ${
                    activeSection === item.id
                      ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium py-3 rounded-xl shadow-lg shadow-blue-500/20"
              >
                <Download size={18} />
                Download Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;