import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  Check,
  MessageSquare,
} from "lucide-react";
import { Github, Linkedin } from "./Icons";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("prajilprabhan924@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 py-28 px-6 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background Lights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Heading */}
        <header className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>

          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Let's Connect & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Collaborate</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Whether you have a project idea, internship opportunity, or technical inquiry, feel free to drop a message!
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Contact Information (5 cols) */}
          <article className="lg:col-span-5 space-y-8">

            <div className="glass-card p-8 rounded-3xl border border-slate-800/80 space-y-6">
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white font-outfit">
                  Contact Details
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  Reach out directly via email, phone, or connect on social networks.
                </p>
              </div>

              <address className="not-italic space-y-4 pt-2">

                {/* Email Box with Copy */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3 group hover:border-blue-500/50 transition">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div className="truncate">
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Email Address</p>
                      <a
                        href="mailto:prajilprabhan924@gmail.com"
                        className="text-slate-200 font-medium hover:text-cyan-400 transition text-sm truncate block"
                      >
                        prajilprabhan26@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 transition shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3 hover:border-blue-500/50 transition">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Phone / WhatsApp</p>
                    <a
                      href="tel:+919999999999"
                      className="text-slate-200 font-medium hover:text-cyan-400 transition text-sm"
                    >
                      +91 7902210559
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Location</p>
                    <p className="text-slate-200 font-medium text-sm">
                      Kerala, India 🇮🇳
                    </p>
                  </div>
                </div>

              </address>

              {/* Social Links Bar */}
              <div className="pt-4 border-t border-slate-800">
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                  Follow & Connect
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/prajilprabhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-white flex items-center justify-center gap-2 transition text-sm font-medium"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/prajilprabhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-white flex items-center justify-center gap-2 transition text-sm font-medium"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </article>

          {/* Right Contact Form (7 cols) */}
          <article className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-slate-800/80 shadow-2xl">

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-fadeIn">
                <CheckCircle size={22} className="shrink-0" />
                <span className="text-sm font-medium">Thank you! Your message has been sent successfully. I will get back to you soon!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xs font-semibold text-slate-300 uppercase tracking-wider"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl bg-slate-900/90 border border-slate-800 px-4 py-3.5 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition duration-300 text-sm placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-xs font-semibold text-slate-300 uppercase tracking-wider"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-xl bg-slate-900/90 border border-slate-800 px-4 py-3.5 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition duration-300 text-sm placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-xs font-semibold text-slate-300 uppercase tracking-wider"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, opportunity, or inquiry..."
                  className="w-full rounded-xl bg-slate-900/90 border border-slate-800 px-4 py-3.5 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition duration-300 text-sm placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold py-4 rounded-xl shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </button>

            </form>

          </article>

        </div>

      </div>
    </section>
  );
}

export default Contact;