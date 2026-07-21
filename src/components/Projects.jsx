import {
  ExternalLink,
  ShieldCheck,
  HeartHandshake,
  CloudSun,
} from "lucide-react";
import { Github } from "./Icons";


function Projects() {
  const projects = [
    {
      title: "MediSync",
      icon: <ShieldCheck size={50} className="text-blue-400" />,
      description:
        "AI-powered Drug-to-Drug Interaction Analyzer that predicts interaction severity and displays interaction information using React, FastAPI, and Machine Learning.",
      technologies: [
        "React",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "Machine Learning",
        "PostgreSQL",
      ],
      github: "https://github.com/yourusername/medisync",
      demo: "#",
    },
    {
      title: "Charity Management App",
      icon: <HeartHandshake size={50} className="text-pink-400" />,
      description:
        "Flutter application for charity organizations to manage donations, campaigns, volunteers, and beneficiaries with an intuitive mobile interface.",
      technologies: [
        "Flutter",
        "Firebase",
        "Dart",
      ],
      github: "https://github.com/yourusername/charity-app",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      icon: <CloudSun size={50} className="text-yellow-400" />,
      description:
        "Responsive weather application that fetches real-time weather information using external APIs with a clean and modern user interface.",
      technologies: [
        "React",
        "REST API",
        "CSS",
        "JavaScript",
      ],
      github: "https://github.com/yourusername/weather-app",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 py-24 px-6"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <header className="text-center mb-16">
          <h2
            id="projects-heading"
            className="text-4xl font-bold text-white"
          >
            My Projects
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Some of the projects I've built while learning and exploring
            Full Stack Development, AI, and Mobile Application Development.
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Project Image/Icon */}
              <figure className="flex items-center justify-center h-52 bg-slate-800">
                {project.icon}
              </figure>

              {/* Project Details */}
              <div className="flex flex-col flex-1 p-6">

                <header>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </header>

                <p className="mt-4 text-slate-400 leading-7 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <section
                  className="mt-6"
                  aria-labelledby={`${project.title}-tech`}
                >
                  <h4
                    id={`${project.title}-tech`}
                    className="text-white font-semibold mb-3"
                  >
                    Technologies
                  </h4>

                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Buttons */}
                <footer className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 py-3 rounded-lg transition"
                  >
                    <Github size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>

                </footer>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;