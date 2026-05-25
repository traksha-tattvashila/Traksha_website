import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Closing from "@/components/sections/Closing";
import { NOTES_SORTED, formatNoteDate } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Quiet Notes — Tattvashila",
  description:
    "Rare reflections, written when there is something honest worth saying. We do not keep a schedule.",
};

export default function NotesIndexPage() {
  return (
    <main data-testid="notes-page" className="relative min-h-screen bg-bone text-ink">
      <Nav />

      {/* Opening */}
      <section
        data-testid="notes-hero"
        className="relative pt-28 md:pt-36 pb-12 md:pb-16"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-12">
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  Quiet Notes
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <Reveal delay={0.05}>
                <h1
                  data-testid="notes-headline"
                  className="font-display font-normal text-ink leading-[1.12] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4.4vw, 3.25rem)" }}
                >
                  Rare reflections, written when there is something honest worth saying.
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 md:mt-8 text-lead text-ink-soft max-w-reading">
                  We do not keep a schedule. New notes appear when they are
                  ready &mdash; not before. The list below is intentionally short,
                  and is meant to remain that way.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Index */}
      <section
        data-testid="notes-index"
        className="relative py-12 md:py-16 border-t border-ink/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-12 items-start">
            <div className="col-span-12 md:col-span-3">
              <Reveal>
                <p className="text-micro tracking-widest uppercase text-ink-muted">
                  The notes
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9 max-w-prose-wide">
              <ul className="divide-y divide-ink/10 border-y border-ink/15">
                {NOTES_SORTED.map((n, i) => (
                  <Reveal key={n.slug} delay={0.05 + i * 0.04} as="li">
                    <Link
                      href={`/notes/${n.slug}`}
                      data-testid={`note-link-${n.slug}`}
                      className="block py-8 md:py-10 group"
                    >
                      <div className="flex items-baseline gap-4 flex-wrap">
                        <time
                          dateTime={n.date}
                          className="text-micro tracking-widest uppercase text-ink-faint num-tab"
                        >
                          {formatNoteDate(n.date)}
                        </time>
                        <span className="text-micro tracking-widest uppercase text-ink-faint">
                          · {n.reading} read
                        </span>
                      </div>
                      <h2 className="mt-3 font-display font-normal text-ink leading-[1.18] group-hover:text-river transition-colors duration-500 ease-gentle"
                          style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.85rem)" }}>
                        {n.title}
                      </h2>
                      <p className="mt-3 text-body text-ink-soft">
                        {n.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-3 text-small text-ink-muted group-hover:text-ink transition-colors duration-500 ease-gentle">
                        Read the note
                        <span aria-hidden className="block w-8 h-px bg-current transition-[width] duration-500 ease-gentle group-hover:w-12" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.2}>
                <p className="mt-10 text-small text-ink-faint max-w-reading">
                  Future notes will appear here as they are written. If you
                  would like them sent to you when they are ready,{" "}
                  <a href="/#intake" className="text-ink-muted hover:text-ink quiet-link transition-colors">
                    leave us a quiet line
                  </a>
                  .
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Closing />
    </main>
  );
}
