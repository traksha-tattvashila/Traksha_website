import Nav from "../components/Nav";
import Closing from "../components/sections/Closing";

interface Props {
  children: React.ReactNode;
  testId?: string;
  className?: string;
}

export default function PageLayout({ children, testId, className }: Props) {
  return (
    <main
      data-testid={testId}
      className={`relative min-h-screen bg-bone text-ink${className ? ` ${className}` : ""}`}
    >
      <Nav />
      {children}
      <Closing />
    </main>
  );
}
