interface EditorialAnnotationProps {
  children: React.ReactNode;
  id?: string;
  number?: number;
  kind?: "footnote" | "marginal" | "editorial";
}

export function FootnoteRef({
  number,
  targetId,
}: {
  number: number;
  targetId: string;
}) {
  return (
    <sup>
      <a
        href={`#${targetId}`}
        className="footnote-ref text-micro text-river hover:text-river-soft no-underline num-tab"
        aria-label={`Footnote ${number}`}
      >
        {number}
      </a>
    </sup>
  );
}

export default function EditorialAnnotation({
  children,
  id,
  number,
  kind = "footnote",
}: EditorialAnnotationProps) {
  const kindStyles = {
    footnote:  "text-small text-ink-muted leading-relaxed",
    marginal:  "text-micro tracking-wide text-ink-faint leading-relaxed italic",
    editorial: "text-small text-ink-soft leading-relaxed border-l border-ink/15 pl-4",
  };

  return (
    <aside
      id={id}
      role="note"
      className={`mt-2 ${kindStyles[kind]}`}
    >
      {number !== undefined && (
        <span className="text-micro text-ink-faint num-tab mr-2">{number}.</span>
      )}
      {children}
    </aside>
  );
}
