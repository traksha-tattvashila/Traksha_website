interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SiteContainer({ children, className }: Props) {
  return (
    <div className={`max-w-site w-full mx-auto px-6 md:px-10 lg:px-16${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
