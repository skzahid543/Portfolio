import { metrics } from "../data/portfolioData";

export default function Counters() {
  return (
    <section className="px-6 pb-8 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-3xl font-black text-slate-950 dark:text-white">
              {item.value}
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}