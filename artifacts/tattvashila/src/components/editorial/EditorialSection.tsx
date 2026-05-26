interface EditorialSectionProps {
  children: React.ReactNode;
  numeral?: string;
  label?: string;
  title?: string;
  id?: string;
  className?: string;
}

export default function EditorialSection({
  children,
  numeral,
  label,
  title,
  id,
  className = "",
}: EditorialSectionProps) {
  return (
    <section id={id} className={`editorial-section ${className}`}>
      {(numeral || label) && (
        <p className="text-micro tracking-widest uppercase text-ink-faint mb-5 md:mb-6">
          {numeral && <span className="num-tab">{numeral}</span>}
          {numeral && label && <span> &nbsp;&middot;&nbsp; </span>}
          {label && <span>{label}</span>}
        </p>
      )}
      {title && (
        <h2 className="font-display text-subhead font-normal text-ink leading-[1.2] tracking-tight mb-7 md:mb-9 max-w-prose-wide">
          {title}
        </h2>
      )}
      <div className="editorial-section-body">{children}</div>
    </section>
  );
}
