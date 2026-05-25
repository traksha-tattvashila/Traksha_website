import Nav from "../components/Nav";
import Threshold from "../components/sections/Threshold";
import Premise from "../components/sections/Premise";
import Philosophy from "../components/sections/Philosophy";
import Ecosystem from "../components/sections/Ecosystem";
import Journey from "../components/sections/Journey";
import Intake from "../components/sections/Intake";
import Closing from "../components/sections/Closing";

export default function HomePage() {
  return (
    <main data-testid="home-page" className="relative min-h-screen bg-bone text-ink">
      <Nav />
      <Threshold />
      <Premise />
      <Philosophy />
      <Ecosystem />
      <Journey />
      <Intake />
      <Closing />
    </main>
  );
}
