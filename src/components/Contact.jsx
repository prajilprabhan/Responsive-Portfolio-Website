import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";
import { Github, Linkedin } from "./Icons";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <section
      id="contact"
      className="bg-slate-900 py-24 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <header className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-4xl font-bold text-white"
          >
            Contact Me
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Have a project, internship opportunity, or just want to say hello?
            Feel free to reach out.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <article className="space-y-8">

            <header>
              <h3 className="text-2xl font-semibold text-blue-400">
                Get In Touch
              </h3>

              <p className="text-slate-400 mt-3 leading-7">
                I'm always interested in learning, collaborating,
                and working on exciting projects.
              </p>
            </header>

            <address className="not-italic space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" />
                <a
                  href="mailto:prajilprabhan924@gmail.com"
                  className="text-slate-300 hover:text-blue-400"
                >
                  prajilprabhan924@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-blue-400" />
                <a
                  href="tel:+919999999999"
                  className="text-slate-300 hover:text-blue-400"
                >
                  +91 99999 99999
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" />
                <span className="text-slate-300">
                  Kerala, India
                </span>
              </div>

            </address>

            {/* Social Links */}
            <nav
              aria-label="Social Media Links"
              className="flex gap-5"
            >
              <a
                href="https://github.com/prajilprabhan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition"
              >
                <Github />
              </a>

              <a
                href="https://linkedin.com/in/prajilprabhan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition"
              >
                <Linkedin />
              </a>

              <a
                href="mailto:prajilprabhan924@gmail.com"
                className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition"
              >
                <Mail />
              </a>
            </nav>

          </article>

          {/* Contact Form */}
          <article className="bg-slate-800 rounded-2xl border border-slate-700 p-8">

            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500 text-green-300 flex items-center gap-3">
                <CheckCircle size={24} />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-slate-300"
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
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-white outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-slate-300"
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
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-white outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-white outline-none focus:border-blue-500 resize-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </article>

        </div>

      </div>
    </section>
  );
}

export default Contact;