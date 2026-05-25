import type { SectionSize } from "../tokens/spacing";

const paddingMap: Record<SectionSize, string> = {
  sm:   "py-12 md:py-16",
  base: "py-14 md:py-20",
  md:   "py-16 md:py-24",
  lg:   "py-20 md:py-28",
};

interface Props {
  children: React.ReactNode;
  id?: string;
  testId?: string;
  size?: SectionSize;
  border?: boolean;
  bg?: string;
  className?: string;
  as?: React.ElementType;
}

export default function SectionShell({
  children,
  id,
  testId,
  size = "base",
  border = true,
  bg,
  className,
  as: Tag = "section",
}: Props) {
  const parts = [
    "relative",
    paddingMap[size],
    border ? "border-t border-ink/10" : "",
    bg ?? "",
    className ?? "",
  ].filter(Boolean).join(" ");

  return (
    <Tag id={id} data-testid={testId} className={parts}>
      {children}
    </Tag>
  );
}
