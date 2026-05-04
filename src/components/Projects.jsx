import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
            Featured work with premium card layout
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  Featured
                </span>
                <ExternalLink className="text-slate-400 transition group-hover:text-slate-900 dark:group-hover:text-white" size={18} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                {project.tech}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
                >
                  View Details
                </button>
                {/* <a
                  href={project.live}
                  className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold dark:border-slate-700 dark:bg-slate-950"
                >
                  Live Demo
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}