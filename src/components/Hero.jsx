import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Side */}
        <article>
          <p className="text-blue-400 text-lg font-semibold mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Prajil
            <span className="text-blue-400"> P</span>
          </h1>

          <h2 className="text-2xl md:text-3xl mt-5 text-slate-300">
            MCA Student
          </h2>

          <h3 className="text-xl mt-2 text-cyan-400">
            Full Stack Developer | AI Enthusiast
          </h3>

          <p className="mt-8 text-slate-400 leading-8 max-w-xl">
            Passionate about building responsive web applications,
            AI-powered solutions, and modern user interfaces using
            React, Tailwind CSS, FastAPI, and Machine Learning.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
            >
              <Download size={18} />
              Resume
            </a>

            <a
              href="#contact"
              className="border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-lg transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <nav
            aria-label="Social Links"
            className="flex gap-6 mt-10"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Github size={28} />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Linkedin size={28} />
            </a>

            <a
              href="mailto:youremail@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <Mail size={28} />
            </a>
          </nav>
        </article>

        {/* Right Side */}
        <aside className="flex justify-center">
          <figure className="relative">

            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20"></div>

            <img
              src="/profile.jpg"
              alt="Portrait of Prajil P"
              className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
            />

            <figcaption className="text-center mt-5 text-slate-400">
              Full Stack Developer
            </figcaption>

          </figure>
        </aside>

      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="text-blue-400" size={35} />
      </a>
    </section>
  );
}

export default Hero;