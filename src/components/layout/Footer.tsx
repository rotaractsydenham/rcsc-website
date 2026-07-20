export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-4 py-6 text-sm text-slate-600 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} RCSC. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="/about" className="hover:text-slate-900">
            About
          </a>
          <a href="/contact" className="hover:text-slate-900">
            Contact
          </a>
          <a href="/privacy" className="hover:text-slate-900">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
