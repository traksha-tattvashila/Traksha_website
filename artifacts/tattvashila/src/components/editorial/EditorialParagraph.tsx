interface EditorialParagraphProps {
  children: React.ReactNode;
  variant?: "body" | "lead" | "closing";
  className?: string;
}

export default function EditorialParagraph({
  children,
  variant = "body",
  className = "",
}: EditorialParagraphProps) {
  const base = "text-wrap-pretty hanging-punctuation-first";

  const variants = {
    body:    "text-body text-ink-soft",
    lead:    "text-lead text-ink-soft leading-relaxed",
    closing: "text-body text-ink",
  };

  return (
    <p className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </p>
  );
}
