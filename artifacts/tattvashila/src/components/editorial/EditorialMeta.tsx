import { formatNoteDate } from "../../content/notes";
import { getCategoryBySlug } from "../../content/taxonomy";

interface EditorialMetaProps {
  date: string;
  reading: string;
  category?: string;
  author?: string;
  publicationStatus?: string;
  locale?: string;
  className?: string;
}

export default function EditorialMeta({
  date,
  reading,
  category,
  author,
  publicationStatus,
  locale,
  className = "",
}: EditorialMetaProps) {
  const categoryObj = category ? getCategoryBySlug(category) : undefined;

  const isForthcoming = publicationStatus === "forthcoming";
  const isDraft       = publicationStatus === "draft";

  return (
    <div
      className={`flex flex-wrap items-baseline gap-x-5 gap-y-1 ${className}`}
      aria-label="Publication metadata"
    >
      <time
        dateTime={date}
        className="text-micro tracking-widest uppercase text-ink-faint num-tab"
      >
        {formatNoteDate(date)}
      </time>

      <span className="text-micro tracking-widest uppercase text-ink-faint">
        &middot; {reading} read
      </span>

      {categoryObj && (
        <span className="text-micro tracking-widest uppercase text-ink-faint">
          &middot; {categoryObj.label}
        </span>
      )}

      {author && (
        <span className="text-micro tracking-widest uppercase text-ink-faint">
          &middot; {author}
        </span>
      )}

      {locale && locale !== "en" && (
        <span className="text-micro tracking-widest uppercase text-ink-faint">
          &middot; {locale === "hi" ? "Hindi" : locale === "sa" ? "Sanskrit" : locale}
        </span>
      )}

      {(isForthcoming || isDraft) && (
        <span className="text-micro tracking-widest uppercase text-river border border-river/30 px-2 py-0.5 rounded-[2px]">
          {isForthcoming ? "Forthcoming" : "In preparation"}
        </span>
      )}
    </div>
  );
}
