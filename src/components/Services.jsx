import { motion } from "framer-motion";
import { Code2, Database, Layout, Monitor, Server, Sparkles } from "lucide-react";
import { services } from "../data/portfolioData";

const icons = [Sparkles, Code2, Layout, Monitor, Server, Database];

export default function Services() {
  return (
    <section id="services" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
            Premium services with professional presentation
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="inline-flex rounded-2xl bg-slate-900 p-3 text-white dark:bg-white dark:text-slate-900">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}