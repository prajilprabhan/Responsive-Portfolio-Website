import { GraduationCap, MapPin, Mail, User, Briefcase } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24 px-6"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <header className="text-center mb-16">
          <h2
            id="about-heading"
            className="text-4xl font-bold text-white"
          >
            About Me
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Get to know more about my background, interests, and what I enjoy
            building as a developer.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Content */}
          <article>

            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Who Am I?
            </h3>

            <p className="text-slate-300 leading-8 mb-6">
              Hello! I'm <strong>Prajil P</strong>, an MCA student passionate
              about Full Stack Web Development, Artificial Intelligence,
              Machine Learning, and modern UI design.
            </p>

            <p className="text-slate-300 leading-8 mb-6">
              I enjoy transforming ideas into responsive web applications using
              React, Tailwind CSS, FastAPI, and Python. I also work with
              databases like MySQL and PostgreSQL while continuously learning
              new technologies.
            </p>

            <p className="text-slate-300 leading-8">
              My goal is to build impactful software that solves real-world
              problems while improving my skills as a software engineer.
            </p>

          </article>

          {/* Right Content */}
          <aside>

            <div className="grid sm:grid-cols-2 gap-6">

              {/* Card 1 */}
              <article className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition">

                <User className="text-blue-400 mb-4" size={32} />

                <h4 className="font-semibold text-xl mb-3">
                  Profile
                </h4>

                <dl className="space-y-2">

                  <div>
                    <dt className="text-slate-400">Name</dt>
                    <dd className="text-white">Prajil P</dd>
                  </div>

                  <div>
                    <dt className="text-slate-400">Role</dt>
                    <dd className="text-white">
                      Full Stack Developer
                    </dd>
                  </div>

                </dl>

              </article>

              {/* Card 2 */}
              <article className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition">

                <GraduationCap
                  className="text-blue-400 mb-4"
                  size={32}
                />

                <h4 className="font-semibold text-xl mb-3">
                  Education
                </h4>

                <p className="text-slate-300">
                  Master of Computer Applications
                </p>

                <p className="text-slate-400 mt-2">
                  Rajiv Gandhi Institute of Technology
                </p>

              </article>

              {/* Card 3 */}
              <article className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition">

                <MapPin className="text-blue-400 mb-4" size={32} />

                <h4 className="font-semibold text-xl mb-3">
                  Location
                </h4>

                <p className="text-slate-300">
                  Kerala, India
                </p>

              </article>

              {/* Card 4 */}
              <article className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition">

                <Briefcase className="text-blue-400 mb-4" size={32} />

                <h4 className="font-semibold text-xl mb-3">
                  Interests
                </h4>

                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>Web Development</li>
                  <li>Artificial Intelligence</li>
                  <li>Machine Learning</li>
                  <li>Open Source</li>
                </ul>

              </article>

            </div>

            {/* Contact Box */}
            <article className="mt-8 bg-slate-800 rounded-xl p-6 border border-slate-700">

              <h4 className="text-xl font-semibold mb-4">
                Contact Information
              </h4>

              <address className="not-italic space-y-4">

                <div className="flex items-center gap-3">

                  <Mail className="text-blue-400" size={20} />

                  <a
                    href="mailto:yourmail@gmail.com"
                    className="text-slate-300 hover:text-blue-400"
                  >
                    yourmail@gmail.com
                  </a>

                </div>

              </address>

            </article>

          </aside>

        </div>

      </div>
    </section>
  );
}

export default About;