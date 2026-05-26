interface EditorialQuoteProps {
  children: React.ReactNode;
  attribution?: string;
  source?: string;
  tradition?: string;
  className?: string;
}

export default function EditorialQuote({
  children,
  attribution,
  source,
  tradition,
  className = "",
}: EditorialQuoteProps) {
  return (
    <blockquote
      className={`my-8 md:my-10 pl-5 border-l border-ink/20 ${className}`}
    >
      <p className="font-display text-xl md:text-2xl font-normal text-ink leading-[1.32] italic tracking-tight">
        {children}
      </p>
      {(attribution || source) && (
        <cite className="block mt-4 not-italic">
          {attribution && (
            <span className="text-micro tracking-widest uppercase text-ink-muted">
              {attribution}
            </span>
          )}
          {attribution && source && (
            <span className="text-micro tracking-widest uppercase text-ink-faint">
              {" "}&mdash;{" "}
            </span>
          )}
          {source && (
            <span className="text-micro tracking-widest uppercase text-ink-faint italic normal-case">
              {source}
            </span>
          )}
          {tradition && (
            <span className="ml-2 text-micro tracking-widest uppercase text-ink-faint">
              · {tradition}
            </span>
          )}
        </cite>
      )}
    </blockquote>
  );
}
