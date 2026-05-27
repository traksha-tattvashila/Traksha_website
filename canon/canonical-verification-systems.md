# Canonical Verification Systems — Tattvashila

**Document Type:** Verification Governance  
**Canonical Status:** Primary  
**Scope:** All verification processes applied to canonical manuscript content before
rendering approval  
**Authority:** This document defines what verification means, what systems perform it,
and what constitutes a passed verification

---

## The Function of Verification

Verification is the process through which the institution confirms that a rendered
chapter remains faithful to the canonical source from which it was derived.

Verification is not quality assurance in the product development sense. It is not
a check that the rendering looks good, functions correctly, or meets accessibility
standards. It is a check that the rendering is the manuscript — that nothing has
been added, removed, reordered, or altered between the canonical source and the
rendered output.

A rendering that looks beautiful but differs from the canonical source in any
textual dimension has failed verification. A rendering that is typographically
imperfect but textually identical to the canonical source has passed verification.

---

## I. Comparing Rendered Text Against Source

### 1.1 The Comparison Method

Verification compares the rendered text against the verified canonical source
markdown at three levels:

**Level 1: Structural comparison**  
The number of paragraphs, sections, and headings in the rendered output must
match the canonical source. This comparison can be performed programmatically
where the output format allows.

**Level 2: Boundary comparison**  
The first and last sentences of each paragraph in the rendered output must
match the first and last sentences of each corresponding paragraph in the
canonical source. This comparison is performed manually — sentence by sentence.

**Level 3: Full-text spot verification**  
A minimum of 20% of the chapter's paragraphs are compared in full between
rendered output and canonical source. The selection of paragraphs for full-text
comparison must include:
- The first paragraph of the chapter
- The last paragraph of the chapter
- Three randomly selected paragraphs from the body of the chapter
- Any paragraph that contains Devanagari or transliterated Sanskrit terms

### 1.2 What the Comparison Looks For

The comparison is not looking for differences in whitespace or typographic
presentation — those are rendering-layer decisions governed by the Rendering
Constitution. The comparison is looking for differences in the text itself:

- Words added
- Words removed
- Words substituted
- Sentence order changed
- Paragraph order changed
- Punctuation changed (beyond typographic rendering differences)

### 1.3 The Comparison Record

For each chapter verification, the comparison record must include:

- Confirmation that Level 1, Level 2, and Level 3 comparisons were performed
- The specific paragraphs selected for Level 3 full-text comparison
- Any discrepancies identified (even minor ones) and their resolution
- The date and verifier

The comparison record is a permanent institutional document. It does not expire
and is not deleted after publication.

---

## II. Semantic Drift Detection

### 2.1 What Semantic Drift Is

Semantic drift in rendered manuscripts occurs when the meaning of a passage
changes between the canonical source and the rendered output — not through
obvious text alteration (which would be caught by the Level 2 and Level 3
comparisons) but through subtle changes that alter meaning while leaving most
words intact.

Semantic drift is caused by:

- Word substitution with near-synonyms that carry different connotations
- Punctuation changes that alter sentence rhythm and therefore meaning
  (a comma replacing a period changes the relationship between two clauses)
- The removal of a qualifying clause that shifts a broad statement to absolute
- The addition of an explanatory phrase that pins down a meaning the author
  left deliberately open

### 2.2 Semantic Drift Detection Protocol

Semantic drift detection is not a mechanical process. It requires a reader with
philosophical familiarity with the manuscript's framework to read the rendered
passage and ask: does this passage communicate the same thing as the canonical source?

For each chapter, semantic drift detection is performed on:
- All passages containing canonical philosophical terms (as defined in the Canonical Lexicon)
- All passages that the author has structured as inquiries (passages containing Prashnas)
- All passages containing Devanagari or Sanskrit material
- The first and last paragraph of each major section

Semantic drift detection produces one of three findings:

**No drift detected** — The rendered passage communicates the same thing as the
canonical source. Proceed.

**Potential drift detected** — The rendered passage communicates something slightly
different from the canonical source. The specific difference must be identified and
resolved against the canonical source.

**Confirmed drift detected** — The rendered passage communicates something different
from the canonical source. The chapter fails verification and must be corrected and
re-verified.

---

## III. Terminology Drift Detection

### 3.1 What Terminology Drift Is

Terminology drift is distinct from semantic drift. Semantic drift affects the
meaning of passages. Terminology drift affects the consistency of specific terms —
a term used correctly in earlier chapters begins to be used slightly differently
in later ones, or a term is used in two different senses within the same chapter
without the manuscript having authorized that dual usage.

Terminology drift is particularly dangerous across chapters rendered at different
times — if the rendering system has been updated, if the Canonical Lexicon has
been amended, or if different people have performed verification at different stages.

### 3.2 Terminology Drift Detection Protocol

For each chapter, before publication:

1. Extract every occurrence of every Canonical Lexicon term from the rendered chapter
2. For each term, confirm that each occurrence falls within the term's defined semantic
   boundary as stated in the Canonical Lexicon
3. Confirm that the term is used consistently within the chapter (no occurrence
   uses the term in a sense that differs from other occurrences in the same chapter)
4. Confirm that the term is used consistently with its usage in already-published
   chapters of the same manuscript

Any inconsistency must be traced to its source: is it in the canonical manuscript
itself (in which case it requires institutional review) or is it a rendering artifact
(in which case it must be corrected)?

### 3.3 The Cross-Chapter Terminology Record

As chapters are published, a cross-chapter terminology record is maintained.
For each Canonical Lexicon term, the record notes:

- Every chapter in which the term appears
- The specific section and paragraph
- A brief note on the semantic context of each occurrence

This record enables drift detection across the full manuscript as it accumulates
— not just within individual chapters.

---

## IV. Paragraph Corruption Detection

### 4.1 What Paragraph Corruption Is

Paragraph corruption occurs when a paragraph in the rendered output differs from
the corresponding paragraph in the canonical source in any of the following ways:

- The paragraph has been split into two or more paragraphs
- The paragraph has been merged with an adjacent paragraph
- Content has been added to the beginning or end of the paragraph
- Content has been removed from within the paragraph
- The paragraph's position within the chapter has changed
- A line break within the paragraph has been promoted to a paragraph break

### 4.2 Paragraph Corruption Detection Protocol

Paragraph corruption is detected through the structural and boundary comparisons
described in Section I. The paragraph integrity verification checklist (from the
Paragraph Integrity Systems document) is the operational checklist for this detection.

Additionally:

☐ Any paragraph significantly longer than its canonical source counterpart is
  flagged for potential merging or content addition  
☐ Any paragraph significantly shorter than its canonical source counterpart is
  flagged for potential splitting or content removal  
☐ Any run of paragraphs that appears to have gained or lost a paragraph boundary
  is flagged immediately  

---

## V. Punctuation Corruption Detection

### 5.1 Punctuation as Philosophical Structure

As established in the Rendering Fidelity Rules and the PDF-to-Markdown Preservation
document, punctuation in philosophical prose is not merely grammatical — it is
rhythmic and structural. Punctuation corruption alters the rhythm of the prose
and therefore alters the reader's experience of the philosophical argument.

### 5.2 Punctuation Corruption Detection Protocol

For every chapter, a punctuation spot-check is performed on a minimum of 10
randomly selected sentences. For each sentence:

☐ All commas present and in the correct positions  
☐ All semicolons, colons, and em-dashes present and in the correct positions  
☐ All periods at sentence endings (no sentences joined or split)  
☐ All daṇḍas (।) preserved where the source uses them  
☐ All ellipses (…) preserved where the source uses them  
☐ All quotation marks (opening and closing) in the correct positions  

Additionally, a full-chapter search for the following potential corruption:

☐ Search for hyphens surrounded by spaces (potential em-dash corruption)  
☐ Search for double periods (..  potential ellipsis corruption)  
☐ Search for inconsistent quotation mark forms (mixing straight and typographic)  

---

## VI. Devanagari Inconsistency Detection

### 6.1 The Devanagari Verification Pass

The Sanskrit & Devanagari Protection document defines the full Devanagari
verification protocol. This section identifies the specific verification tasks
that belong to the canonical verification systems rather than to extraction
or rendering.

At the verification stage — after rendering, before publication — the Devanagari
verification pass confirms:

☐ All Devanagari passages are rendering in the specified Devanagari typeface
  (no system font fallback)  
☐ All canonical terms in Devanagari match their Canonical Lexicon forms exactly
  (verified character by character)  
☐ The Devanagari-to-transliteration hierarchy is maintained throughout
  (Devanagari appears first; transliteration follows if it appears at all)  
☐ No Devanagari passage has been auto-translated (no English text appearing
  where Devanagari appeared in the source)  

### 6.2 Devanagari Rendering Integrity

Beyond character-level accuracy, the verification pass checks the visual rendering
of Devanagari passages:

☐ Conjunct consonants are rendering as conjuncts, not as separate characters
  with visible halant marks  
☐ Vowel mātrās are attached correctly to their base consonants  
☐ The visual weight of Devanagari matches the Rendering Constitution specification  
☐ No character rendering artifacts (strange spacing, misaligned mātrās, broken
  conjuncts) are visible  

---

## VII. Verification Authorization

### 7.1 Who May Verify

Canonical verification is performed by persons with the following qualifications:

**For structural and text comparison (Levels 1, 2, 3):**  
A person with careful reading ability in the manuscript's language (Hindi)
and familiarity with the Canonical Lexicon and Manuscript Integrity Rules.

**For Devanagari verification:**  
A person with reading ability in Devanagari script — able to recognize character
errors, misformed conjuncts, and incorrect mātrā placement.

**For semantic drift detection:**  
A person with philosophical familiarity with Tattvashila's framework — able to
read a passage and determine whether it communicates the same thing as the
canonical source.

**AI systems alone are not sufficient for any of these verifications.** An AI
system may assist in structural comparisons (counting paragraphs, identifying
potential punctuation inconsistencies) but may not serve as the sole verifier
for any verification gate. AI systems are among the primary sources of the
corruptions that verification is designed to detect — they cannot be the sole
protection against their own failure modes.

### 7.2 Verification Independence

The person who performs a verification should not be the same person who performed
the extraction or the rendering for the same chapter. Independence in verification
reduces the risk of a verifier accepting errors they introduced during an earlier stage.

This is a principle, not an absolute rule. When the institution has only one person
available for rendering and verification, a deliberate interval between the rendering
stage and the verification stage serves as partial substitute for personnel independence.

### 7.3 The Verification Record

Every chapter's passage through the verification stages produces a verification record.
The record is a permanent document. It includes:

- Chapter title and manuscript slug
- Date of each verification stage
- Verifier for each stage
- Specific checks performed
- Any discrepancies identified and their resolution
- Final authorization for publication

The verification record is archived alongside the canonical source and is never deleted.

---

*Tattvashila Canonical Verification Systems — maintained for rendering accuracy.*  
*The source manuscript must always remain authoritative.*  
*तत्त्वशिला — the foundation stone.*
