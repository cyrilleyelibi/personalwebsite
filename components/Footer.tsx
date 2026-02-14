export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-700/50 bg-navy-900/80 py-6">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-navy-400">© {year} Cyrille Yelibi</p>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/cyrilleyelibi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy-400 transition hover:text-navy-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/cyrilleyelibi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy-400 transition hover:text-navy-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
