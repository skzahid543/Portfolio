import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.user_name || !form.user_email || !form.subject || !form.message) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
     await emailjs.sendForm(
  "service_czdcoiq",        // ✅ your service id
  "template_3uqo72l",        // 🔥 paste YOUR real template id
  formRef.current,
  "gChhE6HWWRlg0_GDr"        // 🔥 paste YOUR real public key
);

      setSuccess("Message sent successfully.");
      setForm({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
  console.log("EmailJS Error:", err);   // 👈 ADD THIS
  setError("Failed to send message. Please try again.");
} finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
            Let’s build something professional
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Have a project, freelance requirement, or collaboration idea? Send a message and I will get back to you.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
              <Mail size={18} />
              <span className="text-sm">{personalInfo.email}</span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
              <Phone size={18} />
              <span className="text-sm">{personalInfo.phone}</span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
              <MapPin size={18} />
              <span className="text-sm">{personalInfo.location}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={form.user_name}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:focus:border-white"
              onChange={(e) =>
                setForm({ ...form, user_name: e.target.value })
              }
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={form.user_email}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:focus:border-white"
              onChange={(e) =>
                setForm({ ...form, user_email: e.target.value })
              }
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:focus:border-white"
              onChange={(e) =>
                setForm({ ...form, subject: e.target.value })
              }
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={form.message}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:focus:border-white"
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            {error && <p className="text-sm text-red-500">{error}</p>}
            {success && (
              <p className="text-sm text-green-600 dark:text-green-400">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-900"
            >
              <Send size={16} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}