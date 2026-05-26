interface EditorialCitationProps {
  id?: string;
  number?: number;
  author?: string;
  title?: string;
  source?: string;
  year?: string | number;
  tradition?: string;
  note?: string;
  children?: React.ReactNode;
}

export default function EditorialCitation({
  id,
  number,
  author,
  title,
  source,
  year,
  tradition,
  note,
  children,
}: EditorialCitationProps) {
  return (
    <li
      id={id}
      className="text-small text-ink-muted leading-relaxed flex gap-3"
    >
      {number !== undefined && (
        <span className="text-micro text-ink-faint num-tab flex-shrink-0 pt-0.5">
          {number}.
        </span>
      )}
      <span>
        {author && <span className="text-ink-soft">{author}. </span>}
        {title && <em className="text-ink-muted">{title}. </em>}
        {source && <span>{source}. </span>}
        {year && <span className="num-tab">{year}. </span>}
        {tradition && (
          <span className="text-micro tracking-widest uppercase text-ink-faint">
            [{tradition}]
          </span>
        )}
        {note && <span className="ml-1 text-ink-faint">{note}</span>}
        {children}
      </span>
    </li>
  );
}

export function EditorialCitationList({
  children,
  label = "References",
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <aside className="mt-12 md:mt-16 pt-6 border-t border-ink/12" aria-label={label}>
      <p className="text-micro tracking-widest uppercase text-ink-faint mb-5">
        {label}
      </p>
      <ol className="space-y-3">{children}</ol>
    </aside>
  );
}
