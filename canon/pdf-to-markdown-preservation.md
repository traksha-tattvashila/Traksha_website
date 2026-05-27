# PDF-to-Markdown Preservation — Tattvashila

**Document Type:** Manuscript Extraction Governance  
**Canonical Status:** Primary  
**Scope:** All processes that extract canonical manuscript content from PDF or physical form
into the markdown source format  
**Authority:** These rules govern extraction, validation, and acceptance of manuscript source files

---

## Why Extraction Governance Is Necessary

The canonical source of a Tattvashila manuscript does not begin as a markdown file.
It begins as a composed text — in the author's working environment, eventually
expressed in print or PDF form. The process of converting that source into a
markdown file for rendering is not a neutral technical act. It is an extraction
process that carries risk at every step.

OCR systems introduce character errors. PDF parsing introduces line-break artifacts.
Devanagari encoding fails silently in ways that are not immediately visible.
Punctuation is normalized by extraction tools trained on English-language documents.
Diacritical marks are dropped or corrupted. Paragraph boundaries are misread as
line breaks, or line breaks are read as paragraph boundaries.

Each of these failure modes corrupts the canonical source — and the corruption,
once embedded in the markdown source, propagates into every rendering derived
from it.

This document governs the extraction process so that the markdown source that
enters the canonical archive is faithful to the manuscript from which it was
extracted.

---

## I. Extraction Principles

### 1.1 The Markdown Source Is Not the Canonical Text

The canonical text is the composed manuscript. The markdown source is a digital
representation of the canonical text, prepared for rendering. These are not the same.

This distinction has consequences:

- If the markdown source is found to differ from the canonical manuscript,
  the markdown source is wrong — not the manuscript.
- The markdown source may never be used to argue that the canonical manuscript
  "should have" a different form. The manuscript is authoritative.
- Changes to the markdown source that affect the text (not just formatting markup)
  require verification against the manuscript.

### 1.2 Extraction Is a One-Time Process Per Chapter

Each chapter of the canonical manuscript is extracted once, verified, and then
frozen. Subsequent rendering uses the verified markdown source. The extraction
process is not repeated unless a verification failure requires re-extraction.

### 1.3 Extraction Produces a Draft — Not a Source

The output of any extraction process (OCR, PDF parsing, manual transcription)
is a draft markdown document — not a canonical source. The draft is subject to
verification before it may be used as a rendering source.

No draft is ever used directly for rendering without passing through the
verification process defined in this document.

---

## II. Paragraph Structure During Extraction

### 2.1 Paragraph Boundary Detection

Paragraph boundaries in the source manuscript are marked by vertical space between
blocks of prose. Extraction systems must preserve these boundaries exactly.

The specific risk: PDF extraction tools frequently confuse paragraph boundaries
with line breaks within a paragraph. The result is a markdown source in which what
was one paragraph appears as multiple short "paragraphs" separated by single blank
lines, or in which what were two paragraphs are rendered as one block.

**Extraction rule:** After initial extraction, each paragraph boundary must be
verified against the source manuscript. Where the source shows a paragraph break,
the markdown must show a paragraph break (a blank line between paragraphs). Where
the source shows a line break within a paragraph (continuation), the markdown must
show a continuation (no blank line).

### 2.2 The Paragraph Boundary Verification Checklist

For each chapter, after extraction:

☐ Count the number of paragraphs in the source  
☐ Count the number of paragraphs in the extracted markdown  
☐ These counts must match  
☐ Verify the first three words of each paragraph match the source  
☐ Verify the last three words of each paragraph match the source  
☐ Flag any paragraph where the word count differs by more than 5% from the source

### 2.3 Line Breaks Within Paragraphs

Line breaks within a paragraph (soft returns in the source) must be treated as
continuations — not as paragraph boundaries. The markdown source does not introduce
line breaks within prose paragraphs.

Exception: If the manuscript itself uses line breaks for structural emphasis (as
in a list, a quoted passage, or a verse), those line breaks are preserved and
marked up appropriately.

---

## III. Devanagari Preservation

### 3.1 The Devanagari Encoding Standard

All Devanagari text in the markdown source must be encoded in UTF-8. No other
encoding is acceptable. No romanized approximation may substitute for Devanagari
in the canonical markdown source.

### 3.2 Character-Level Verification

Devanagari characters are complex — conjunct consonants, vowel marks (mātrās),
anusvara (ं), visarga (ः), chandrabindu (ँ), and halant (्) are all characters that
may be incorrectly recognized, dropped, or corrupted during OCR extraction.

For each passage containing Devanagari:

☐ Verify conjunct consonants are correctly formed (e.g., क्ष, ज्ञ, त्त, त्व, न्य)  
☐ Verify vowel marks are attached to the correct base consonant  
☐ Verify anusvara (ं) is not confused with chandrabindu (ँ)  
☐ Verify halant (्) is not dropped in conjunct formation  
☐ Verify nukta (़) where present is preserved (e.g., ड़, ढ़, ज़, फ़)  
☐ Verify no character has been converted to a visually similar Latin character

### 3.3 OCR Failure Modes for Devanagari

The following OCR failure modes are known and must be specifically checked:

**Silent substitution:** A Devanagari character is replaced by a visually similar
character from a different Unicode block. The result appears correct visually but
is encoded incorrectly and will fail in rendering systems that check encoding.

**Mātrā attachment failure:** A vowel mark is extracted as a standalone character
rather than attached to its base consonant. The word appears correctly in isolation
but is malformed at the Unicode level.

**Conjunct decomposition:** A conjunct consonant (e.g., त्त in Tattva — तत्त्व) is
decomposed into its component characters without the halant. The result is
incorrect Devanagari.

**Anusvara as punctuation:** The anusvara (ं) is incorrectly recognized as a period,
bullet, or other punctuation mark.

**Entire word transliteration:** An OCR system, failing to recognize a Devanagari
word, substitutes its best guess in Roman characters. This is a catastrophic
failure — it converts Devanagari to Latin without marking the conversion.

### 3.4 Manual Verification for Devanagari

Given the failure modes above, Devanagari passages in any extracted markdown must
be verified by a person with reading ability in Devanagari script — not by
automated comparison alone.

The automated comparison checks encoding. The human verification checks meaning
and correctness.

### 3.5 The Canonical Devanagari Reference

The canonical spelling of all key terms appears in the Canonical Lexicon. For
any Devanagari word that also appears in the Canonical Lexicon, the Canonical
Lexicon form is authoritative. If the extracted form differs from the Canonical
Lexicon form, the discrepancy must be resolved — either by correcting the
extraction or by flagging a potential inconsistency in the manuscript for
institutional review.

---

## IV. Punctuation Rhythm Preservation

### 4.1 The Philosophical Function of Punctuation

In philosophical prose, punctuation is not merely grammatical — it is rhythmic.
The em-dash (—) marks a pause of a different quality than a comma. The semicolon
marks a different relationship between clauses than a period. The colon introduces
with a different tone than a dash.

These distinctions are part of the manuscript's compositional voice. Extraction
must preserve them exactly.

### 4.2 Punctuation Normalization Failures

Extraction tools are often trained to normalize punctuation to a standard set.
The following normalizations are prohibited:

**Em-dash to hyphen:** The em-dash (—) may not be replaced with a hyphen (-) or
en-dash (–). These are different marks with different rhythmic functions.

**Smart quotes to straight quotes:** Typographic quotation marks ("") may not be
replaced with straight quotation marks (""). If the source uses typographic quotes,
they must be preserved or converted to their canonical markdown equivalent
consistently.

**Multiple spaces:** If the manuscript uses multiple spaces for rhythmic effect
(uncommon in prose, but possible in certain structural elements), they must be
preserved, not collapsed to a single space by whitespace normalization.

**Ellipsis as three periods:** An ellipsis (…) in the source is the author's mark.
Three periods (...) may look the same but are not the same Unicode character.
Consistency must be maintained — either always use the ellipsis character or
always use three periods, according to the manuscript.

**Removal of terminal punctuation in headings:** Chapter headings and section
titles in the manuscript may or may not carry terminal punctuation. The extraction
must preserve whatever the manuscript has.

### 4.3 Hindi-Specific Punctuation

Hindi prose uses the daṇḍa (।) as sentence-terminal punctuation in traditional
contexts. Where the manuscript uses the daṇḍa, it must be preserved exactly.
It must not be converted to a period.

---

## V. Chapter Continuity

### 5.1 Chapter Boundary Detection

PDF extraction tools may fail to correctly identify chapter boundaries —
particularly when chapters begin with Devanagari headings, when chapter openings
use significant whitespace, or when the PDF's internal structure does not map
cleanly to the visual chapter divisions.

For each chapter extraction:

☐ Verify the chapter begins at the correct location in the source  
☐ Verify the chapter ends at the correct location in the source  
☐ Verify no content from the preceding chapter has been included  
☐ Verify no content from the following chapter has been included  
☐ Verify the chapter heading matches the source exactly

### 5.2 Page-Break Artifacts

PDF extraction frequently introduces page-break artifacts: running headers,
page numbers, and footer elements that appear at the point of a page break in
the PDF become embedded in the extracted text.

For each extracted chapter, check for:

☐ Running headers (chapter or section titles) appearing within the prose  
☐ Page numbers appearing within the prose  
☐ Footer content (copyright notices, institutional marks) appearing within the prose  
☐ Hyphenated words at page breaks that must be rejoined (e.g., "con-\ntemplative")

### 5.3 Title Hierarchy Preservation

The manuscript's title hierarchy — chapter number, chapter title in Devanagari,
transliterated title, section headings — must be preserved in the markdown source
using consistent heading levels:

```
# Chapter title (Devanagari)
## Section heading
### Subsection (if any)
```

The heading level assignments must be consistent across all chapters. A heading
that functions as a chapter title must receive the same heading level in every
chapter.

---

## VI. Extraction Validation Systems

### 6.1 OCR Drift Detection

OCR drift occurs when an OCR system's output gradually becomes less accurate
across a long document — often because the system's language model has adjusted
to early patterns in the text that do not hold throughout.

Detection: After extracting a full chapter, compare word counts at the beginning,
middle, and end of the chapter against the source. If there is increasing
divergence between source and extraction in the later portions of the chapter,
OCR drift is likely.

Response: Re-extract the affected portion at higher resolution or with a different
OCR profile. Verify character by character if necessary.

### 6.2 Missing Line Detection

Extraction tools occasionally drop lines — particularly at page breaks, at
transitions between prose and Devanagari, and in passages with dense punctuation.

Detection: Compare paragraph counts and approximate line counts between source and
extraction. If the extraction appears shorter than expected for a section, look
for missing content.

### 6.3 Broken Sanskrit Terms

Sanskrit-derived terms with conjunct consonants are particularly vulnerable to
breakage during extraction — a conjunct may be decomposed, a diacritic dropped,
or a character substituted. The result is a term that looks approximately correct
but is not.

Detection: All Sanskrit-derived terms that appear in the Canonical Lexicon must
be checked letter by letter against the Canonical Lexicon form after extraction.

### 6.4 Transliteration Corruption

Where the manuscript includes transliterated Sanskrit terms (in Roman characters
with diacritical marks), the diacritical marks are vulnerable to extraction
corruption.

Specific characters at risk:
- Macrons: ā, ī, ū (may be extracted as a, i, u)
- Underdots: ṭ, ḍ, ṇ, ṣ, ṣ, ḥ (may be extracted as t, d, n, s, h)
- Overdots: ṃ, ṁ (may be extracted without the diacritic)
- Capitalized versions of all above

Detection: Check all transliterated passages against the Canonical Lexicon IAST forms.

### 6.5 Punctuation Normalization Errors

Detection: Search the extracted text for:
- Hyphens appearing where em-dashes should appear (between words with spaces)
- Straight quotation marks in a document that uses typographic quotes
- Three-period ellipsis where the Unicode ellipsis character should appear

---

## VII. Acceptance Criteria

An extracted chapter is accepted into the canonical markdown source only when:

1. **Paragraph count matches source** — verified manually
2. **First and last words of each paragraph match source** — verified manually
3. **All Devanagari passages verified** — by a Devanagari reader
4. **All canonical terms verified** — against the Canonical Lexicon
5. **All punctuation preserved** — em-dashes, daṇḍas, ellipses, quotation marks
6. **No page-break artifacts** — no running headers, page numbers, or footers in prose
7. **Chapter boundaries correct** — no bleed from adjacent chapters
8. **Title hierarchy consistent** — heading levels match the established pattern

An extracted chapter that does not meet all eight criteria is returned for correction.
No exception is made for time constraints, technical difficulty, or proximity to
an acceptable result.

---

*Tattvashila PDF-to-Markdown Preservation — maintained for canonical source integrity.*  
*The markdown source is a preservation instrument — not an interpretation.*  
*तत्त्वशिला — the foundation stone.*
