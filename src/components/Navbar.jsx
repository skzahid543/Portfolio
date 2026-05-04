import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
<a
  href="#hero"
  className="flex items-center gap-2"
>
  <img
    src="/sk_logo_transparent.png"
    alt="Zahid Logo"
    className="h-10 w-auto object-contain bg-transparent"
  />
  <span className="flex h-10 items-center text-2xl font-semibold leading-none text-slate-900 dark:text-white">
    Zahid
  </span>
</a>
        <div className="hidden items-center gap-7 rounded-full border border-white/20 bg-white/10 px-6 py-3 shadow-lg backdrop-blur-xl md:flex dark:border-white/10 dark:bg-slate-900/20">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-slate-900/90 px-5 py-2.5 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white dark:text-slate-900"
          >
            Hire Me
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-slate-900 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/20 dark:text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-2 rounded-3xl border border-white/20 bg-white/70 px-6 py-5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}