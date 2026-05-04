import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            About Me
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
            Focused on a professional, compact, and business-ready development approach.
          </h2>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
            I'm Zahid, an engineering-driven developer who turns complex technical challenges into high-speed web products. I manage the entire stack with a focus on clean, reusable code and seamless performance with strong experience in frontend, backend, UI/UX, and database development. I build modern, responsive, and business-ready web applications using React.js, ASP.NET, PHP, Python, JavaScript, HTML, CSS, Bootstrap, jQuery, MS SQL Server, and MySQL. My approach is focused on delivering scalable, user-friendly, and professionally designed digital solutions with strong performance, reliability, and business value.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
            What I Deliver
          </h3>
          <div className="mt-5 space-y-4">
            {[
              "Modern and professional user interfaces with precise alignment and clean spacing",
              "End-to-end solutions covering frontend, backend, and database development",
              "Fully responsive designs for desktop, tablet, and mobile platforms",
              "Clean, maintainable code with scalable component-based structure",
              "Professional business web applications, management systems, and dashboards",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700 dark:bg-slate-950 dark:text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}