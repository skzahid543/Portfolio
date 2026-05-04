import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
            Technical strength with compact visual presentation
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <div className="mb-2 flex justify-between text-sm font-medium">
                <span>{skill.name}</span>
                <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
              </div>
              <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-800">
                <div
                  className="h-3 rounded-full bg-slate-900 transition-all dark:bg-white"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}