import {
  ArrowUp,
  Mail,
  Heart,
} from "lucide-react";
import { Github, Linkedin } from "./Icons";


function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <section className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <article>

            <h2 className="text-2xl font-bold text-blue-400">
              Prajil<span className="text-white">.</span>
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              MCA Student passionate about Full Stack Development,
              Artificial Intelligence, and creating responsive web
              applications.
            </p>

          </article>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation">

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href="#hero" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-blue-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#education" className="hover:text-blue-400 transition">
                  Education
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-blue-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </nav>

          {/* Contact */}
          <address className="not-italic">

            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href="mailto:yourmail@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400"
              >
                <Mail size={18} />
                yourmail@gmail.com
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

            </div>

          </address>

        </section>

        {/* Bottom */}
        <section className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <small className="text-slate-500 text-center">
            © {year} Prajil P. All Rights Reserved.
          </small>

          <small className="flex items-center gap-2 text-slate-500">
            Made with
            <Heart
              size={16}
              className="text-red-500 fill-red-500"
            />
            React & Tailwind CSS
          </small>

          <a
            href="#hero"
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>

        </section>

      </div>
    </footer>
  );
}

export default Footer;