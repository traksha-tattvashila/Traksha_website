interface EditorialDividerProps {
  kind?: "rule" | "ornament" | "space";
  className?: string;
}

export default function EditorialDivider({
  kind = "rule",
  className = "",
}: EditorialDividerProps) {
  if (kind === "space") {
    return <div className={`h-8 md:h-12 ${className}`} aria-hidden />;
  }

  if (kind === "ornament") {
    return (
      <div className={`my-10 md:my-14 flex items-center justify-start gap-3 ${className}`} aria-hidden>
        <span className="block w-6 h-px bg-ink/15" />
        <span className="text-micro text-ink-faint tracking-widest">&middot;</span>
        <span className="block w-6 h-px bg-ink/15" />
      </div>
    );
  }

  return (
    <hr className={`my-10 md:my-14 border-none border-t border-ink/10 ${className}`} />
  );
}
