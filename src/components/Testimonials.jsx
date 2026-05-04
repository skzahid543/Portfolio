import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/portfolioData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
            Professional impression from others
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="inline-flex rounded-2xl bg-slate-100 p-3 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <Quote size={18} />
              </div>
              <p className="mt-5 text-sm leading-8 text-slate-600 dark:text-slate-300">
                “{item.text}”
              </p>
              <h4 className="mt-5 text-base font-semibold text-slate-950 dark:text-white">
                {item.name}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}