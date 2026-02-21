import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";

const FORM_ENDPOINT = "https://formspree.io/f/xxxxxx"; // replace with your form id

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState({
    submitting: false,
    ok: null,
    msg: ""
  });

  const handleChange = (e) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, ok: null, msg: "" });

    try {
      const data = new FormData();
      data.append("name", formState.name);
      data.append("email", formState.email);
      data.append("message", formState.message);

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        setFormState({ name: "", email: "", message: "" });
        setStatus({
          submitting: false,
          ok: true,
          msg: "Message sent successfully!"
        });
      } else {
        setStatus({
          submitting: false,
          ok: false,
          msg: "Submission failed. Please try again."
        });
      }
    } catch {
      setStatus({
        submitting: false,
        ok: false,
        msg: "Network error. Please try again."
      });
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 text-gray-300"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Contact Me
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            I’m open to professional opportunities, research collaboration,
            and engineering roles. Reach out anytime.
          </p>

          <div className="mb-4 space-y-1 text-sm">
            <p>📍 South Banasree, Bangladesh</p>
            <p>
              📞 <a href="tel:+8801711318734" className="hover:text-white">
                +880 1711-318734
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope />
              <a
                href="mailto:nibrasshamit@gmail.com"
                className="hover:text-white"
              >
                nibrasshamit@gmail.com
              </a>
            </p>
          </div>

          <h4 className="text-white font-semibold mb-3 text-sm">
            Follow Me
          </h4>

          <div className="flex gap-4">
            <a
              href="https://github.com/ShamitNibras"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:scale-105 transition"
            >
              <FaGithub className="text-gray-200" />
            </a>

            <a
              href="https://www.researchgate.net/profile/Shamit-Nibras"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:scale-105 transition"
            >
              <SiResearchgate className="text-gray-200" />
            </a>

            <a
              href="https://www.linkedin.com/in/shamitnibras/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:scale-105 transition"
            >
              <FaLinkedin className="text-gray-200" />
            </a>

            <a
              href="https://wa.me/8801711318734"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-500/20 border border-green-400 flex items-center justify-center hover:scale-105 transition"
            >
              <FaWhatsapp className="text-green-400" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="block mb-1 text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-gray-200 focus:outline-none focus:border-indigo-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-gray-200 focus:outline-none focus:border-indigo-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-gray-200 focus:outline-none focus:border-indigo-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition disabled:opacity-60"
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>

            {status.ok === true && (
              <p className="text-sm text-green-400">{status.msg}</p>
            )}
            {status.ok === false && (
              <p className="text-sm text-red-400">{status.msg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;