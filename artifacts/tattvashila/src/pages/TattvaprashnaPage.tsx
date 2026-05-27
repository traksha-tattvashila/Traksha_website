import { Link } from "wouter";
import Reveal from "../components/Reveal";
import { PageLayout } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../content/metadata";

export default function TattvaprashnaPage() {
  usePageMeta(PAGE_META.tattvaprashna);

  return (
    <PageLayout testId="tattvaprashna-page">

      {/* ── Canonical Frontispiece ── */}
      <section
        aria-label="Tattvaprashna manuscript frontispiece"
        data-testid="tattvaprashna-frontispiece"
        className="ms-frontispiece"
      >
        <div className="ms-frontispiece-inner">

          <Reveal>
            <p className="ms-series-label">
              तत्त्वग्रंथ शृंखला का एक पूर्व-ग्रंथ
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="ms-title-deva">तत्त्वप्रश्न</h1>
            <p className="ms-title-roman">Tattvaprashna</p>
          </Reveal>

          <Reveal delay={0.10}>
            <div className="ms-rule" />
          </Reveal>

          <Reveal delay={0.13}>
            <p className="ms-subtitle-deva">
              मानव स्वतंत्रता, व्यवस्था<br />
              और उत्तरदायित्व पर<br />
              एक विवेचनात्मक ग्रंथ
            </p>
            <p className="ms-subtitle-roman mt-3">
              A critical inquiry into human freedom, order, and responsibility
            </p>
          </Reveal>

          <div className="ms-silence-lg" />

          <Reveal delay={0.17}>
            <p className="text-micro tracking-widest uppercase text-ink-faint mb-2">
              लेखक
            </p>
            <p className="ms-author">Vikram A. Mitra</p>
          </Reveal>

          <Reveal delay={0.20}>
            <div className="ms-frontispiece-foot mt-8">
              <span className="ms-foot-deva">तत्त्वशिला</span>
              <span className="ms-foot-sep" />
              <span className="ms-foot-roman">Tattvashila</span>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── Language Gateway ── */}
      <section
        aria-label="Manuscript language selection"
        data-testid="tattvaprashna-language-gateway"
        className="ms-language-gateway"
      >
        <div className="ms-gateway-inner">

          <Reveal>
            <p className="ms-gateway-label">पाठ में प्रवेश करें</p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="ms-gateway-options">

              <Link
                href="/granthalaya/tattvaprashna/hindi"
                className="ms-gateway-option"
              >
                <span className="ms-gateway-option-deva">हिंदी पठन</span>
                <span className="ms-gateway-option-arrow">→</span>
              </Link>

              <div className="ms-gateway-option ms-gateway-option--inactive">
                <span className="ms-gateway-option-roman">English Rendering</span>
                <span className="ms-gateway-option-note">Under translation preparation</span>
              </div>

            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Link href="/granthalaya" className="ms-gateway-return">
              <span aria-hidden>←</span>
              <span>Return to Granthālaya</span>
            </Link>
          </Reveal>

        </div>
      </section>

    </PageLayout>
  );
}
