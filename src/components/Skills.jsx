import {
  Code2,
  Server,
  Database,
  Wrench,
  Brain,
} from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 size={32} className="text-blue-400" />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      icon: <Server size={32} className="text-green-400" />,
      skills: [
        "Python",
        "FastAPI",
        "Django",
        "REST API",
        "Node.js (Basics)",
      ],
    },
    {
      title: "Database",
      icon: <Database size={32} className="text-yellow-400" />,
      skills: [
        "MySQL",
        "PostgreSQL",
        "SQLite",
      ],
    },
    {
      title: "Programming",
      icon: <Brain size={32} className="text-pink-400" />,
      skills: [
        "Python",
        "Java",
        "C",
        "Machine Learning",
      ],
    },
    {
      title: "Tools",
      icon: <Wrench size={32} className="text-cyan-400" />,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Docker",
        "Postman",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 px-6"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <header className="text-center mb-16">
          <h2
            id="skills-heading"
            className="text-4xl font-bold text-white"
          >
            Skills
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Technologies and tools that I use to build modern,
            responsive, and scalable applications.
          </p>
        </header>

        {/* Skill Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              <header className="flex items-center gap-4 mb-6">
                {category.icon}

                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </header>

              <ul className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-slate-800 text-slate-300 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
                  >
                    {skill}
                  </li>
                ))}

              </ul>

            </article>
          ))}

        </div>

        {/* Additional Information */}
        <article className="mt-20 bg-slate-900 border border-slate-800 rounded-xl p-8">

          <header>
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Currently Learning
            </h3>
          </header>

          <p className="text-slate-300 leading-8">
            I continuously improve my skills by exploring advanced React,
            TypeScript, AI, Machine Learning, Cloud Computing,
            Docker, and modern backend architectures.
          </p>

        </article>

      </div>
    </section>
  );
}

export default Skills;