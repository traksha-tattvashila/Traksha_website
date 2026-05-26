import Nav from "../components/Nav";
import Closing from "../components/sections/Closing";

interface Props {
  children: React.ReactNode;
  testId?: string;
  className?: string;
}

export default function PageLayout({ children, testId, className }: Props) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[200] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-ink focus:text-bone-light focus:text-small focus:font-medium focus:rounded-[2px] focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Nav />
      <main
        id="main-content"
        data-testid={testId}
        className={`relative min-h-screen bg-bone text-ink${className ? ` ${className}` : ""}`}
      >
        {children}
      </main>
      <Closing />
    </>
  );
}
