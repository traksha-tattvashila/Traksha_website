import { Link, useParams } from "wouter";
import Reveal from "../components/Reveal";
import QuietImage from "../components/QuietImage";
import { PageLayout, SiteContainer, SectionGrid } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META, buildNotePublicationMeta } from "../content/metadata";
import { getNote, getNextNote, getPreviousNote } from "../content/notes";
import { getCategoryBySlug, getTagsBySlug } from "../content/taxonomy";
import { images } from "../system/images/registry";
import {
  EditorialMeta,
  EditorialDivider,
  PublicationSequence,
} from "../components/editorial";

export default function NotePage() {
  const { slug } = useParams<{ slug: string }>();
  const note = getNote(slug);

  const meta = note ? buildNotePublicationMeta(note) : PAGE_META.notes;
  usePageMeta(meta);

  const category = note ? getCategoryBySlug(note.category) : undefined;
  const tags = note ? getTagsBySlug(note.tags) : [];
  const nextNote = note ? getNextNote(note) : undefined;
  const previousNote = note ? getPreviousNote(note) : undefined;

  if (!note) {
    return (
      <PageLayout testId="note-not-found">
        <div className="pt-40 pb-20">
          <SiteContainer>
            <p className="text-lead text-ink-soft">Note not found.</p>
            <Link
              href="/notes"
              className="mt-6 inline-block text-small text-ink-muted hover:text-ink quiet-link"
            >
              Back to Quiet Notes
            </Link>
          </SiteContainer>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout testId="note-page">
      <article
        data-testid={`note-${note.slug}`}
        lang={note.locale === "hi" ? "hi" : note.locale === "sa" ? "sa" : "en"}
        itemScope
        itemType="https://schema.org/Article"
        className="relative pt-28 md:pt-36 pb-20 md:pb-28"
      >
        <SiteContainer>
          <SectionGrid gapY="gap-y-8">

            {/* Left column — navigation + category + editorial image */}
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <nav aria-label="Publication breadcrumb">
                  <Link
                    href="/notes"
                    data-testid="note-back"
                    className="inline-flex items-center gap-2 text-micro tracking-widest uppercase text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle"
                  >
                    <span aria-hidden>&larr;</span>
                    <span>Quiet Notes</span>
                  </Link>
                </nav>
              </Reveal>

              {category && (
                <Reveal delay={0.06}>
                  <p className="mt-6 text-micro tracking-widest uppercase text-ink-faint">
                    {category.label}
                  </p>
                </Reveal>
              )}

              {/* Sidebar editorial image — notebook reading atmosphere */}
              <Reveal delay={0.18}>
                <div className="mt-10 md:mt-14 hidden md:block">
                  <QuietImage
                    src={images.notebookReading.src}
                    alt={images.notebookReading.alt}
                    aspectClass="aspect-[4/3]"
                    fallbackTone="warm"
                    className="rounded-[2px]"
                  />
                  <p className="mt-3 text-micro tracking-widest uppercase text-ink-faint">
                    {images.notebookReading.credit}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right column — the publication */}
            <div className="col-span-12 md:col-span-9 max-w-prose-wide">

              <header>
                <Reveal delay={0.05}>
                  <EditorialMeta
                    date={note.date}
                    reading={note.reading}
                    category={note.category}
                    publicationStatus={note.publicationStatus}
                    locale={note.locale}
                  />
                  {note.updatedAt && (
                    <time
                      dateTime={note.updatedAt}
                      itemProp="dateModified"
                      className="sr-only"
                    >
                      {note.updatedAt}
                    </time>
                  )}
                </Reveal>

                <Reveal delay={0.1}>
                  <h1
                    data-testid="note-title"
                    itemProp="headline"
                    className="mt-5 md:mt-6 font-display text-display-xl font-normal text-ink leading-[1.12] tracking-tight"
                  >
                    {note.title}
                  </h1>
                </Reveal>

                {note.summary && (
                  <Reveal delay={0.14}>
                    <p
                      itemProp="description"
                      className="mt-5 md:mt-7 text-lead text-ink-soft max-w-reading"
                    >
                      {note.summary}
                    </p>
                  </Reveal>
                )}

                <Reveal delay={0.16}>
                  <EditorialDivider kind="rule" className="mt-9 md:mt-11 mb-0" />
                </Reveal>
              </header>

              <Reveal delay={0.20}>
                <div
                  data-testid="note-body"
                  itemProp="articleBody"
                  className="note-body mt-10 md:mt-12"
                >
                  {note.body.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </Reveal>

              <footer>
                <Reveal delay={0.24}>
                  <p
                    data-testid="note-signed"
                    className="mt-12 md:mt-14 text-body text-ink"
                  >
                    <span itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">&mdash; {note.signed}</span>
                    </span>
                  </p>
                </Reveal>

                {tags.length > 0 && (
                  <Reveal delay={0.27}>
                    <div className="mt-8 flex flex-wrap gap-2" aria-label="Publication tags">
                      {tags.map((tag) => (
                        <span
                          key={tag.slug}
                          className="text-micro tracking-widest uppercase text-ink-faint border border-ink/10 px-3 py-1 rounded-[2px]"
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                )}

                {/* Publication sequence — calm editorial continuity */}
                <Reveal delay={0.1}>
                  <PublicationSequence
                    previous={previousNote}
                    next={nextNote}
                  />
                </Reveal>

                <Reveal delay={0.32}>
                  <div className="mt-12 md:mt-16 pt-6 border-t border-ink/10 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <Link
                      href="/notes"
                      data-testid="note-cta-back"
                      className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                    >
                      Back to Quiet Notes
                    </Link>
                    <a
                      href="/#intake"
                      data-testid="note-cta-intake"
                      className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                    >
                      Stay in touch
                    </a>
                  </div>
                </Reveal>
              </footer>

            </div>
          </SectionGrid>
        </SiteContainer>
      </article>
    </PageLayout>
  );
}
