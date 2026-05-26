import { Link } from "wouter";
import type { Note } from "../../lib/notes";
import { formatNoteDate } from "../../lib/notes";

interface PublicationSequenceProps {
  previous?: Note;
  next?: Note;
}

export default function PublicationSequence({
  previous,
  next,
}: PublicationSequenceProps) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Publication sequence"
      className="mt-16 md:mt-20 pt-8 border-t border-ink/10"
    >
      <p className="text-micro tracking-widest uppercase text-ink-faint mb-8">
        Continue reading
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {previous && (
          <Link
            href={`/notes/${previous.slug}`}
            className="group block"
            aria-label={`Previously: ${previous.title}`}
          >
            <p className="text-micro tracking-widest uppercase text-ink-faint mb-3 flex items-center gap-2">
              <span aria-hidden>&larr;</span>
              <span>Previously</span>
            </p>
            <p className="font-display text-xl font-normal text-ink-muted group-hover:text-ink transition-colors duration-700 ease-gentle leading-[1.3]">
              {previous.title}
            </p>
            <p className="mt-2 text-micro tracking-widests uppercase text-ink-faint num-tab">
              {formatNoteDate(previous.date)}
            </p>
          </Link>
        )}

        {next && (
          <Link
            href={`/notes/${next.slug}`}
            className="group block md:text-right"
            aria-label={`Next: ${next.title}`}
          >
            <p className="text-micro tracking-widest uppercase text-ink-faint mb-3 flex items-center gap-2 md:justify-end">
              <span>Next reading</span>
              <span aria-hidden>&rarr;</span>
            </p>
            <p className="font-display text-xl font-normal text-ink-muted group-hover:text-ink transition-colors duration-700 ease-gentle leading-[1.3]">
              {next.title}
            </p>
            <p className="mt-2 text-micro tracking-widest uppercase text-ink-faint num-tab">
              {formatNoteDate(next.date)}
            </p>
          </Link>
        )}
      </div>
    </nav>
  );
}
