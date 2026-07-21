import { useState } from "react";
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  FolderGit2,
  X,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { Github } from "./Icons";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "medisync",
      title: "MediSync",
      category: "AI & ML",
      badge: "Featured AI Project",
      icon: <ShieldCheck size={44} className="text-blue-400" />,
      tagline: "AI-Powered Drug-to-Drug Interaction Analyzer",
      description:
        "An intelligent healthcare analytics platform that predicts severity of drug-to-drug interactions using Machine Learning models. Features interactive search, interaction severity visualizer, and RESTful FastAPI backend integrated with PostgreSQL.",
      technologies: [
        "React 19",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "Machine Learning",
        "PostgreSQL",
      ],
      highlights: [
        "Predicts drug interaction severity in real-time",
        "FastAPI high-speed async backend",
        "Interactive React dashboard with search filters",
      ],
      github: "https://github.com/prajilprabhan/medisync",
      demo: "#",
    },
    {
      id: "charity-app",
      title: "Charity Management App",
      category: "Mobile App",
      badge: "Mobile Application",
      icon: <HeartHandshake size={44} className="text-rose-400" />,
      tagline: "Cross-Platform Donation & Volunteer Management System",
      description:
        "Comprehensive mobile app built with Flutter and Firebase designed for non-profit charity organizations to seamlessly coordinate campaigns, manage donor subscriptions, log volunteer activities, and distribute beneficiary resources.",
      technologies: ["Flutter", "Firebase", "Dart", "Cloud Firestore", "Mobile UI"],
      highlights: [
        "Real-time campaign donation tracking",
        "Volunteer task assignment module",
        "Push notifications & beneficiary verification",
      ],
      github: "https://github.com/prajilprabhan/charity-app",
      demo: "#",
    },
    {
  id: "flyhigh",
  title: "FlyHigh",
  category: "Full Stack",
  badge: "Django Web Application",
  icon: <HeartHandshake size={44} className="text-rose-400" />,
  tagline: "Empowering Communities Through Digital Charity Management",
  description:
    "A comprehensive charity management platform built with Django that streamlines donations, volunteer coordination, campaign management, and beneficiary support. The application provides an intuitive interface for organizations to efficiently manage fundraising initiatives and community outreach while ensuring secure user authentication and organized data management.",
  technologies: [
    "Django",
    "Python",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "JavaScript",
    "SQLite",
  ],
  highlights: [
    "Secure user authentication and role-based access",
    "Donation and fundraising campaign management",
    "Volunteer registration and activity tracking",
    "Responsive dashboard for administrators and users",
  ],
  github: "https://github.com/prajilprabhan/flyhigh",
  demo: "#",
},
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="bg-slate-950 py-28 px-6 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Heading */}
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 size={14} />
            <span>Featured Portfolio</span>
          </div>

          <h2
            id="projects-heading"
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Projects</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Real-world applications engineered with modern web stacks, artificial intelligence, and mobile frameworks.
          </p>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {["All", "AI & ML", "Full Stack", "Mobile App"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "glass-card text-slate-400 hover:text-white hover:bg-slate-800/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl border border-slate-800/80 overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Top Banner Icon Box */}
                <div className="h-48 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-6 flex flex-col justify-between border-b border-slate-800/80 relative">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      {project.badge}
                    </span>
                    <Sparkles size={16} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 shadow-lg group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-outfit">
                        {project.title}
                      </h3>
                      <p className="text-xs text-cyan-400 mt-0.5">{project.category}</p>
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed font-light line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Technologies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-300 text-xs font-medium border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 text-slate-200 hover:text-white text-xs font-semibold transition flex items-center justify-center gap-1.5"
                >
                  <Layers size={14} className="text-cyan-400" />
                  <span>View Details</span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Source Code"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-800 transition"
                >
                  <Github size={16} />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-card max-w-2xl w-full rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                {selectedProject.icon}
              </div>
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-bold text-white mt-1 font-outfit">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <p className="text-cyan-400 font-medium">{selectedProject.tagline}</p>

            <p className="text-slate-300 leading-relaxed font-light">
              {selectedProject.description}
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Key Highlights</h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-blue-600/20 text-blue-300 text-xs font-semibold border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl border border-slate-800 transition"
              >
                <Github size={18} />
                <span>View Source Code</span>
              </a>

              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium py-3 rounded-xl transition"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={18} />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

export default Projects;