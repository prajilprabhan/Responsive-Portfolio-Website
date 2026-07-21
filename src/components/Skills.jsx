import { useState } from "react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Brain,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const skillCategories = [
    {
      id: "Frontend",
      title: "Frontend Development",
      icon: <Code2 size={26} className="text-blue-400" />,
      color: "from-blue-500/20 to-cyan-500/20",
      skills: [
        { name: "React 19", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5 / CSS3", level: "Advanced font" },
        { name: "Bootstrap", level: "Intermediate" },
        { name: "Responsive Design", level: "Advanced" },
      ],
    },
    {
      id: "Backend",
      title: "Backend Development",
      icon: <Server size={26} className="text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/20",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "FastAPI", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "Django", level: "Intermediate" },
        { name: "Node.js Basics", level: "Beginner" },
      ],
    },
    {
      id: "Database",
      title: "Database Systems",
      icon: <Database size={26} className="text-amber-400" />,
      color: "from-amber-500/20 to-yellow-500/20",
      skills: [
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "MySQL", level: "Intermediate" },
        { name: "SQLite", level: "Intermediate" },
        { name: "Database Design", level: "Intermediate" },
      ],
    },
    {
      id: "Programming",
      title: "AI & Programming",
      icon: <Brain size={26} className="text-pink-400" />,
      color: "from-pink-500/20 to-rose-500/20",
      skills: [
        { name: "Machine Learning", level: "Intermediate" },
        { name: "Python", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "C Language", level: "Intermediate" },
      ],
    },
    {
      id: "Tools",
      title: "Tools & Workflow",
      icon: <Wrench size={26} className="text-cyan-400" />,
      color: "from-cyan-500/20 to-blue-500/20",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "Postman", level: "Advanced" },
        { name: "Vite", level: "Advanced" },
      ],
    },
  ];

  const filteredCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section
      id="skills"
      className="py-28 bg-slate-950 px-6 relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Zap size={14} />
            <span>Technical Expertise</span>
          </div>

          <h2
            id="skills-heading"
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Skills & Tech Stack</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Technologies, frameworks, and developer tools I leverage daily to engineer robust software products.
          </p>
        </header>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === "All"
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                : "glass-card text-slate-400 hover:text-white hover:bg-slate-800/80"
            }`}
          >
            All Skills
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "glass-card text-slate-400 hover:text-white hover:bg-slate-800/80"
              }`}
            >
              {cat.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => (
            <article
              key={category.title}
              className="glass-card glass-card-hover rounded-3xl p-7 border border-slate-800/80 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <header className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-800/80">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} border border-slate-700/60 group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white font-outfit">
                    {category.title}
                  </h3>
                </header>

                {/* Skill Pills */}
                <ul className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-sm font-medium flex items-center gap-2 hover:border-blue-500/50 hover:text-white hover:bg-blue-600/10 transition-all duration-300"
                    >
                      <CheckCircle2 size={14} className="text-cyan-400" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Currently Learning Banner */}
        <article className="mt-16 glass-card p-8 rounded-3xl border border-slate-800/80 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm">
              <Sparkles size={16} />
              <span>Continuous Growth</span>
            </div>
            <h3 className="text-2xl font-bold text-white font-outfit">
              Currently Learning & Deepening Expertise
            </h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-xl">
              Exploring advanced React patterns, Microservices, Cloud Architecture (AWS/GCP), Advanced Machine Learning, and Containerization with Docker.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Let's Collaborate
          </a>
        </article>

      </div>
    </section>
  );
}

export default Skills;