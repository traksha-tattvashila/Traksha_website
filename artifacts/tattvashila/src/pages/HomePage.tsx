import { PageLayout } from "../layouts";
import Threshold from "../components/sections/Threshold";
import Premise from "../components/sections/Premise";
import Philosophy from "../components/sections/Philosophy";
import KnowledgeRecord from "../components/sections/KnowledgeRecord";
import Traksha from "../components/sections/Traksha";
import Composition from "../components/sections/Composition";
import Intake from "../components/sections/Intake";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";

export default function HomePage() {
  usePageMeta(PAGE_META.home);

  return (
    <PageLayout testId="home-page">
      <Threshold />
      <Premise />
      <Philosophy />
      <KnowledgeRecord />
      <Traksha />
      <Composition />
      <Intake />
    </PageLayout>
  );
}
