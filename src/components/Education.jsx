import { GraduationCap } from "lucide-react";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Rajiv Gandhi Institute of Technology, Kottayam",
      year: "2025 - Present",
      description:
        "Currently pursuing MCA with a focus on Full Stack Development, Artificial Intelligence, Machine Learning, and Database Systems.",
    },
    {
      degree: "Bachelor's Degree",
      institution: "Your College Name",
      year: "2022 - 2025",
      description:
        "Completed undergraduate studies with a strong foundation in programming, mathematics, and computer science.",
    },
    {
      degree: "Higher Secondary (Plus Two)",
      institution: "Your Higher Secondary School",
      year: "2020 - 2022",
      description:
        "Studied Computer Science, Mathematics, and related subjects.",
    },
    {
      degree: "SSLC",
      institution: "Your School Name",
      year: "2019 - 2020",
      description:
        "Successfully completed secondary education with excellent academic performance.",
    },
  ];

  return (
    <section
      id="education"
      className="bg-slate-900 py-24 px-6"
      aria-labelledby="education-heading"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <header className="text-center mb-20">

          <h2
            id="education-heading"
            className="text-4xl font-bold text-white"
          >
            Education
          </h2>

          <p className="mt-4 text-slate-400">
            My academic journey in Computer Science.
          </p>

        </header>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500 ml-6">

          {education.map((item, index) => (
            <article
              key={index}
              className="relative mb-16 ml-10"
            >

              {/* Timeline Icon */}
              <span className="absolute -left-16 top-2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 border-4 border-slate-900">

                <GraduationCap size={20} className="text-white" />

              </span>

              {/* Card */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition duration-300">

                <header>

                  <h3 className="text-2xl font-semibold text-white">
                    {item.degree}
                  </h3>

                  <p className="text-blue-400 mt-2">
                    {item.institution}
                  </p>

                  <time className="block mt-2 text-slate-400">
                    {item.year}
                  </time>

                </header>

                <p className="mt-5 text-slate-300 leading-7">
                  {item.description}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;