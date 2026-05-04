import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Briefcase,
  Code2,
  Database,
  LayoutPanelTop,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const highlightCards = [
  {
    icon: <Code2 size={18} />,
    title: "Frontend",
    desc: "React.js, JavaScript, HTML, CSS, Bootstrap, jQuery",
  },
  {
    icon: <Briefcase size={18} />,
    title: "Backend",
    desc: "ASP.NET, PHP, Python, APIs, Business Logic",
  },
  {
    icon: <Database size={18} />,
    title: "Database",
    desc: "MS SQL Server, MySQL, Query Design, Reporting",
  },
  {
    icon: <LayoutPanelTop size={18} />,
    title: "UI / UX",
    desc: "Professional Layouts, Responsive Design, Photoshop",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pb-16 pt-16 lg:px-8 lg:pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_30%),radial-gradient(circle_at_left,rgba(59,130,246,0.08),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_25%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_20%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
            Premium Developer Portfolio
          </div> */}

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white md:text-5xl lg:text-6xl">
            Web Software Engineer
            <span className="mt-2 block text-slate-600 dark:text-slate-300">
              Full Stack Developer, UI/UX, Frontend, Backend & Database Specialist
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            {personalInfo.shortHeadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300/30 transition duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-slate-900 dark:shadow-none"
            >
              View Projects
              <ArrowRight size={16} />
            </a>

            {/* <a
              href={personalInfo.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            >
              Download Resume
              <Download size={16} />
            </a> */}
          </div>

          <div className="mt-8 flex items-center gap-5 text-xl text-slate-500 dark:text-slate-300">
            <a
              href={personalInfo.github}
              className="transition duration-300 hover:scale-110 hover:text-slate-950 dark:hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              className="transition duration-300 hover:scale-110 hover:text-slate-950 dark:hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="transition duration-300 hover:scale-110 hover:text-slate-950 dark:hover:text-white"
            >
              <FaEnvelope />
            </a>
          </div>

          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-[30px] border border-slate-200 bg-white/95 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/95">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  Expertise Snapshot
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                  Professional Profile
                </h3>
              </div>

              <div className="rounded-2xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white dark:bg-white dark:text-slate-900">
                Available
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlightCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-900"
                >
                  <div className="inline-flex rounded-xl bg-slate-900 p-2 text-white dark:bg-white dark:text-slate-900">
                    {item.icon}
                  </div>

                  <h4 className="mt-4 text-base font-semibold text-slate-950 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Professional Focus
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
              I build business-ready digital solutions with modern design, scalable backend systems, and dependable database integration that deliver performance, usability, and a strong professional impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
