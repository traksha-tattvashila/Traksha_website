import { Link } from "wouter";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-bone text-ink flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-32 text-center">
        <p className="text-micro tracking-widest uppercase text-ink-muted mb-6">
          404 &nbsp;·&nbsp; Not found
        </p>
        <h1 className="font-display font-normal text-ink leading-[1.12]"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.25rem)" }}>
          This page does not exist.
        </h1>
        <p className="mt-6 text-lead text-ink-soft max-w-reading mx-auto">
          You may have followed a broken link, or the page may have moved.
        </p>
        <div className="mt-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-small font-medium text-ink hover:text-river transition-colors duration-500 ease-gentle"
          >
            <span>Return home</span>
            <span aria-hidden className="block w-8 h-px bg-current transition-[width] duration-500 ease-gentle group-hover:w-12" />
          </Link>
        </div>
      </div>
    </main>
  );
}
