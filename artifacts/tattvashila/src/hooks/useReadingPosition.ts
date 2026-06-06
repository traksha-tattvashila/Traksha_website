import { useEffect } from "react";

/**
 * Quietly preserves the reader's place within a manuscript.
 *
 * On entry, the last scroll position for this manuscript is restored without
 * any announcement — the reader simply resumes where the text was left. While
 * reading, the position is saved continuously. There is no UI, no banner, no
 * "welcome back". It behaves the way a physical book left open behaves.
 *
 * @param key stable manuscript identifier, e.g. "tattvaprashna/hindi"
 */
export function useReadingPosition(key: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storageKey = `tattvashila:reading-position:${key}`;

    // ── Restore, silently ──
    let restoreFrame = 0;
    let restoreTimer = 0;
    const raw = window.localStorage.getItem(storageKey);
    const saved = raw ? parseInt(raw, 10) : NaN;

    if (!Number.isNaN(saved) && saved > 0) {
      // Wait for the manuscript to lay out before settling the reader back.
      restoreFrame = window.requestAnimationFrame(() => {
        restoreFrame = window.requestAnimationFrame(() => {
          window.scrollTo(0, saved);
        });
      });
      // Fallback for late layout (web fonts, images).
      restoreTimer = window.setTimeout(() => {
        if (Math.abs(window.scrollY - saved) > 8) window.scrollTo(0, saved);
      }, 120);
    }

    // ── Save, continuously and cheaply ──
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        window.localStorage.setItem(storageKey, String(Math.round(window.scrollY)));
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (restoreFrame) window.cancelAnimationFrame(restoreFrame);
      if (restoreTimer) window.clearTimeout(restoreTimer);
    };
  }, [key]);
}
