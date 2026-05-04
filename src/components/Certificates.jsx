import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certificates } from "../data/portfolioData";

export default function Certificates() {
  return (
    <section id="certificates" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Certificates
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
            Learning and professional credibility
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certificates.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="inline-flex rounded-2xl bg-slate-900 p-3 text-white dark:bg-white dark:text-slate-900">
                <Award size={18} />
              </div>
              <p className="mt-5 text-sm font-medium leading-7 text-slate-700 dark:text-slate-300">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}