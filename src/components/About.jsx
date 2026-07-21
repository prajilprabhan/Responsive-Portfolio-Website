import { GraduationCap, MapPin, Mail, User, Briefcase, Sparkles, Terminal, Code2, Heart } from "lucide-react";

function About() {
  const infoCards = [
    {
      icon: <User className="text-blue-400" size={28} />,
      title: "Profile",
      details: [
        { label: "Name", value: "Prajil P" },
        { label: "Role", value: "Full Stack & AI Developer" },
        { label: "Degree", value: "MCA Postgraduate Student" },
      ],
    },
    {
      icon: <GraduationCap className="text-cyan-400" size={28} />,
      title: "Education",
      details: [
        { label: "Master of Computer Applications", value: "2025 - Present" },
        { label: "Institution", value: "Rajiv Gandhi Institute of Tech" },
        { label: "Focus", value: "Web Systems & AI / ML" },
      ],
    },
    {
      icon: <MapPin className="text-indigo-400" size={28} />,
      title: "Location & Status",
      details: [
        { label: "Based In", value: "Kerala, India 🇮🇳" },
        { label: "Work Status", value: "Open for Opportunities" },
        { label: "Languages", value: "English, Malayalam" },
      ],
    },
    {
      icon: <Briefcase className="text-emerald-400" size={28} />,
      title: "Interests",
      details: [
        { label: "Specializations", value: "Full Stack Web Apps" },
        { label: "AI Domains", value: "Machine Learning & NLP" },
        { label: "Passion", value: "Building Clean User UIs" },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-950 py-28 px-6 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Accent Lights */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <header className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} />
            <span>Discover My Background</span>
          </div>

          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Me</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            A passionate developer blending full-stack software craftsmanship with artificial intelligence to engineer modern, responsive, and user-centric web applications.
          </p>
        </header>

        {/* Grid Content */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">

          {/* Left Main Bio (7 cols) */}
          <article className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-slate-800/80 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              
              <div className="flex items-center gap-3 text-blue-400 font-semibold text-lg">
                <Terminal size={22} />
                <h3>Who Am I?</h3>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Crafting digital experiences with <span className="text-cyan-400">code</span> and <span className="text-blue-400">creativity</span>.
              </h4>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-light">
                Hello! I’m <strong className="text-white font-semibold">Prajil P</strong>, an MCA student at Rajiv Gandhi Institute of Technology, Kottayam. I specialize in developing end-to-end full-stack web solutions using <strong className="text-blue-400">React</strong>, <strong className="text-cyan-400 font-medium">Tailwind CSS</strong>, and <strong className="text-indigo-400 font-medium">FastAPI</strong>.
              </p>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-light">
                I thrive at the intersection of web technology and Artificial Intelligence, having created machine-learning powered applications like <strong className="text-cyan-300">MediSync</strong> (Drug Interaction Predictor). My focus is writing clean, scalable architecture and designing sleek, intuitive interfaces.
              </p>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <Code2 size={24} className="text-cyan-400 shrink-0 mt-1" />
                <div>
                  <h5 className="font-semibold text-white text-base">Core Philosophy</h5>
                  <p className="text-slate-400 text-sm mt-1 leading-normal">
                    "Build software that not only functions flawlessly but inspires through simplicity, aesthetics, and user delight."
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Contact Line */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <Mail className="text-blue-400" size={18} />
                <a href="mailto:prajilprabhan924@gmail.com" className="hover:text-cyan-400 transition">
                  prajilprabhan924@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Heart size={14} className="text-rose-500 fill-rose-500" />
                <span>Driven by curiosity</span>
              </div>
            </div>

          </article>

          {/* Right Info Cards Grid (5 cols) */}
          <aside className="lg:col-span-5 grid sm:grid-cols-2 gap-5">

            {infoCards.map((card, idx) => (
              <article
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 w-fit rounded-xl bg-slate-900/90 border border-slate-800 mb-4 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>

                  <h4 className="font-bold text-xl text-white mb-3 font-outfit">
                    {card.title}
                  </h4>

                  <dl className="space-y-2.5 text-sm">
                    {card.details.map((item, itemIdx) => (
                      <div key={itemIdx}>
                        <dt className="text-slate-500 text-xs uppercase tracking-wider">{item.label}</dt>
                        <dd className="text-slate-200 font-medium mt-0.5">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}

          </aside>

        </div>

      </div>
    </section>
  );
}

export default About;