"use client";

import Link from "next/link";

export default function Wordmark({
  size = "default",
  testId = "wordmark",
}: {
  size?: "small" | "default" | "large";
  testId?: string;
}) {
  const cls =
    size === "small"
      ? "text-base"
      : size === "large"
        ? "text-2xl md:text-3xl"
        : "text-lg";

  return (
    <Link
      href="/"
      data-testid={testId}
      className={`font-display font-light tracking-tight text-ink hover:text-river transition-colors duration-700 ease-gentle ${cls}`}
    >
      <span className="italic">tattva</span>
      <span>shila</span>
    </Link>
  );
}
