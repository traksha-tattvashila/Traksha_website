import { Link, useParams } from "wouter";
import Reveal from "../components/Reveal";
import { PageLayout } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { buildTitle, buildCanonicalUrl } from "../content/metadata";
import { getGranthaBySlug } from "../content/granthalaya";
import NotFound from "./not-found";

/**
 * Grantha — Frontispiece + Language Gateway.
 * The title page of a readable manuscript, followed by the threshold at which a
 * reading language is chosen. Both are composed entirely from the grantha's
 * frontispiece data and its language list — no work is named in the markup.
 */
export default function GranthaFrontispiecePage() {
  const { slug } = useParams<{ slug: string }>();
  const grantha = getGranthaBySlug(slug);
  const fp = grantha?.frontispiece;

  usePageMeta(
    grantha
      ? {
          title: buildTitle(`${grantha.title} — ${grantha.devanagari}`),
          description: fp?.subtitleRoman ?? grantha.subtitle,
          ogTitle: buildTitle(`${grantha.title} — ${grantha.devanagari}`),
          ogDescription: fp?.subtitleRoman ?? grantha.titleDisplay,
          ogType: "article",
          canonicalUrl: buildCanonicalUrl(`/granthalaya/${grantha.slug}/enter`),
        }
      : {
          title: buildTitle("Not found — Granthālaya"),
          description: "This manuscript does not exist.",
          canonicalUrl: buildCanonicalUrl("/granthalaya/catalogue"),
        },
  );

  // No readable manuscript → nothing to enter.
  if (!grantha || !grantha.hasManuscript || !fp) return <NotFound />;

  return (
    <PageLayout testId="grantha-frontispiece-page">

      {/* ── Canonical Frontispiece ── */}
      <section
        aria-label={`${grantha.title} manuscript frontispiece`}
        data-testid="grantha-frontispiece"
        className="ms-frontispiece"
      >
        <div className="ms-frontispiece-inner">

          <Reveal>
            <p className="ms-series-label">{fp.seriesLabel}</p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="ms-title-deva">{fp.titleDeva}</h1>
            <p className="ms-title-roman">{fp.titleRoman}</p>
          </Reveal>

          <Reveal delay={0.10}>
            <div className="ms-rule" />
          </Reveal>

          <Reveal delay={0.13}>
            <p className="ms-subtitle-deva">
              {fp.subtitleDevaLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < fp.subtitleDevaLines.length - 1 && <br />}
                </span>
              ))}
            </p>
            <p className="ms-subtitle-roman mt-3">{fp.subtitleRoman}</p>
          </Reveal>

          <div className="ms-silence-lg" />

          <Reveal delay={0.17}>
            <p className="text-micro tracking-widest uppercase text-ink-faint mb-2">
              {fp.authorLabel}
            </p>
            <p className="ms-author">{fp.author}</p>
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
        data-testid="grantha-language-gateway"
        className="ms-language-gateway"
      >
        <div className="ms-gateway-inner">

          <Reveal>
            <p className="ms-gateway-label">{fp.gatewayLabel}</p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="ms-gateway-options">
              {grantha.languages.map((lang) =>
                lang.state === "active" && lang.routeLang ? (
                  <Link
                    key={lang.code}
                    href={`/granthalaya/${grantha.slug}/${lang.routeLang}`}
                    className="ms-gateway-option"
                    data-testid={`gateway-${lang.code}`}
                  >
                    {lang.labelDeva && (
                      <span className="ms-gateway-option-deva">{lang.labelDeva}</span>
                    )}
                    {lang.labelRoman && (
                      <span className="ms-gateway-option-roman">{lang.labelRoman}</span>
                    )}
                    <span className="ms-gateway-option-arrow">→</span>
                  </Link>
                ) : (
                  <div
                    key={lang.code}
                    className="ms-gateway-option ms-gateway-option--inactive"
                    data-testid={`gateway-${lang.code}`}
                  >
                    {lang.labelDeva && (
                      <span className="ms-gateway-option-deva">{lang.labelDeva}</span>
                    )}
                    {lang.labelRoman && (
                      <span className="ms-gateway-option-roman">{lang.labelRoman}</span>
                    )}
                    {lang.note && (
                      <span className="ms-gateway-option-note">{lang.note}</span>
                    )}
                  </div>
                ),
              )}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Link href={`/granthalaya/${grantha.slug}`} className="ms-gateway-return">
              <span aria-hidden>←</span>
              <span>Return to {grantha.title}</span>
            </Link>
          </Reveal>

        </div>
      </section>

    </PageLayout>
  );
}
