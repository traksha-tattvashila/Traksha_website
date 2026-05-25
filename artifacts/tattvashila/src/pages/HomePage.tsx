import { PageLayout } from "../layouts";
import Threshold from "../components/sections/Threshold";
import Premise from "../components/sections/Premise";
import Philosophy from "../components/sections/Philosophy";
import Ecosystem from "../components/sections/Ecosystem";
import Journey from "../components/sections/Journey";
import Intake from "../components/sections/Intake";

export default function HomePage() {
  return (
    <PageLayout testId="home-page">
      <Threshold />
      <Premise />
      <Philosophy />
      <Ecosystem />
      <Journey />
      <Intake />
    </PageLayout>
  );
}
