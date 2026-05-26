import { Link } from "wouter";

export default function Wordmark({
  size = "default",
  testId = "wordmark",
}: {
  size?: "small" | "default" | "large";
  testId?: string;
}) {
  const cls =
    size === "small"
      ? "text-[1.0625rem]"
      : size === "large"
        ? "text-2xl md:text-3xl"
        : "text-xl";

  return (
    <Link
      href="/"
      data-testid={testId}
      aria-label="Tattvashila — home"
      className={`font-display font-normal text-ink hover:text-river transition-colors duration-500 ease-gentle ${cls}`}
      style={{ letterSpacing: "-0.005em" }}
    >
      Tattvashila
    </Link>
  );
}
