import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <nav
        className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4"
        aria-label="Primary Navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold text-blue-400 hover:text-cyan-400 transition"
        >
          Prajil<span className="text-white">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300">
          {links.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-blue-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}

          <li>
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col p-5 gap-5 text-center">
            {links.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-300 hover:text-blue-400"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li>
              <a
                href="/resume.pdf"
                download
                className="block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
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