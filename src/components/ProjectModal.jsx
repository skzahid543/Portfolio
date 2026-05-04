import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4">
      <div className="w-full max-w-2xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {project.tech}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700"
          >
            <X size={18} />
          </button>
        </div>

        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          {project.details}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.github}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold dark:border-slate-700 dark:bg-slate-950"
          >
            <FaGithub size={16} /> GitHub
          </a>

          <a
            href={project.live}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}