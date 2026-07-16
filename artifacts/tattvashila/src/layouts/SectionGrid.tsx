interface Props {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center" | "end";
  gapY?: "gap-y-8" | "gap-y-10" | "gap-y-12";
}

export default function SectionGrid({
  children,
  className,
  align = "start",
  gapY = "gap-y-10",
}: Props) {
  const alignClass = { start: "items-start", center: "items-center", end: "items-end" }[align];

  const parts = [
    "grid grid-cols-12 md:gap-x-12 lg:gap-x-14 xl:gap-x-16",
    gapY,
    alignClass,
    className ?? "",
  ].filter(Boolean).join(" ");

  return <div className={parts}>{children}</div>;
}
