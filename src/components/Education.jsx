import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from "lucide-react";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Rajiv Gandhi Institute of Technology, Kottayam",
      location: "Kottayam, Kerala",
      year: "2025 - Present",
      status: "Pursuing",
      description:
        "Specializing in Full Stack Software Engineering, Artificial Intelligence, Machine Learning, Database Management Systems, and Modern Web Architectures.",
      highlights: ["React & FastAPI", "Machine Learning & AI", "Database Systems"],
    },
    {
      degree: "Bachelor's Degree in Computer Applications / Science",
      institution: "Mahatma Gandhi University Affiliated College",
      location: "Kerala, India",
      year: "2022 - 2025",
      status: "Completed",
      description:
        "Gained comprehensive foundational knowledge in Object-Oriented Programming, Data Structures & Algorithms, Mathematics, and Software Design Principles.",
      highlights: ["Data Structures", "Python & C", "Web Development"],
    },
    {
      degree: "Higher Secondary Education (Plus Two)",
      institution: "Computer Science Stream",
      location: "Kerala, India",
      year: "2020 - 2022",
      status: "Completed",
      description:
        "Focused on Computer Science, Mathematics, Physics, and Chemistry with top academic standing.",
      highlights: ["Computer Science", "Mathematics"],
    },
  ];

  return (
    <section
      id="education"
      className="bg-slate-950 py-28 px-6 relative overflow-hidden"
      aria-labelledby="education-heading"
    >
      {/* Glow background */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <header className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Award size={14} />
            <span>Academic Qualifications</span>
          </div>

          <h2
            id="education-heading"
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Education Journey</span>
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg font-light">
            Academic background and technical qualifications in Computer Applications.
          </p>
        </header>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-500/30 ml-4 md:ml-10 space-y-12">

          {education.map((item, index) => (
            <article
              key={index}
              className="relative ml-8 md:ml-12 group"
            >

              {/* Timeline Icon Node */}
              <span className="absolute -left-[45px] md:-left-[61px] top-1.5 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-slate-900 border-2 border-blue-500/80 text-blue-400 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <GraduationCap size={22} />
              </span>

              {/* Glass Card */}
              <div className="glass-card glass-card-hover rounded-3xl p-7 sm:p-8 border border-slate-800/80 space-y-4">

                <header className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      item.status === "Pursuing"
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 animate-pulse"
                        : "bg-slate-800 text-slate-400 border border-slate-700"
                    }`}>
                      {item.status}
                    </span>

                    <h3 className="text-2xl font-bold text-white font-outfit">
                      {item.degree}
                    </h3>

                    <p className="text-blue-400 font-medium text-base mt-1">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1 text-slate-400 text-xs sm:text-sm">
                    <span className="flex items-center gap-1.5 glass-card px-3 py-1 rounded-lg border border-slate-800 font-medium text-slate-300">
                      <Calendar size={14} className="text-cyan-400" />
                      {item.year}
                    </span>

                    <span className="flex items-center gap-1 text-slate-500 mt-1">
                      <MapPin size={12} />
                      {item.location}
                    </span>
                  </div>
                </header>

                <p className="text-slate-300 leading-relaxed text-base font-light">
                  {item.description}
                </p>

                {/* Key Focus Tags */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {item.highlights.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800 flex items-center gap-1.5"
                    >
                      <CheckCircle size={12} className="text-cyan-400" />
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;