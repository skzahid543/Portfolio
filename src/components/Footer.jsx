export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-6 dark:border-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 dark:text-slate-400 md:flex-row">
        <p>© 2026 Developer Portfolio. Built with React.</p>
        <div className="flex gap-5">
          <a href="#hero" className="hover:text-slate-900 dark:hover:text-white">
            Home
          </a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}