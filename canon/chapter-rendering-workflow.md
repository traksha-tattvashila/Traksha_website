# Chapter Rendering Workflow — Tattvashila

**Document Type:** Rendering Process Governance  
**Canonical Status:** Primary  
**Scope:** The complete workflow for rendering each chapter of each canonical manuscript  
**Authority:** This document governs the sequence, gates, and verification requirements
for every chapter rendering in the Tattvashila Granthālaya

---

## The Governing Principle

Rendering proceeds one chapter at a time. No chapter may be published until it
has passed every verification gate. No subsequent chapter may begin rendering
until the preceding chapter has been verified and accepted.

This is not a technical constraint. It is an institutional commitment to the
integrity of the process. A rendering workflow that allows chapters to be produced
in parallel, verified retrospectively, or published conditionally on later correction
is a workflow in which errors compound and propagate before they are caught.

One chapter. Fully verified. Then the next.

---

## The Rendering Progression

```
Canonical Manuscript Source (PDF / authored document)
        │
        ▼
┌─────────────────────────────┐
│  STAGE 1: Extraction        │
│  PDF → Draft Markdown       │
│  Per chapter                │
└─────────────────────────────┘
        │
        ▼ Gate 1: Extraction Validation
┌─────────────────────────────┐
│  STAGE 2: Source Verification│
│  Draft Markdown vs. Source  │
│  Paragraph · Devanagari ·   │
│  Punctuation · Structure    │
└─────────────────────────────┘
        │
        ▼ Gate 2: Source Acceptance
┌─────────────────────────────┐
│  STAGE 3: Canonical         │
│  Verification               │
│  Terms · Lexicon · Integrity│
│  Rules · Prohibited checks  │
└─────────────────────────────┘
        │
        ▼ Gate 3: Canonical Clearance
┌─────────────────────────────┐
│  STAGE 4: Single-Chapter    │
│  Rendering                  │
│  Apply Rendering Constitution│
│  Typography · Hierarchy ·   │
│  Devanagari · Silence       │
└─────────────────────────────┘
        │
        ▼ Gate 4: Rendering Review
┌─────────────────────────────┐
│  STAGE 5: Integrity         │
│  Verification               │
│  Rendered output vs. Source │
│  Full checklist             │
└─────────────────────────────┘
        │
        ▼ Gate 5: Publication Acceptance
┌─────────────────────────────┐
│  STAGE 6: Chapter           │
│  Published in Granthālaya   │
└─────────────────────────────┘
        │
        ▼
        Proceed to next chapter — Stage 1
```

---

## Stage 1: Extraction

**Input:** Canonical manuscript source (PDF or authored document)  
**Output:** Draft markdown file, one per chapter  
**Governing document:** PDF-to-Markdown Preservation

### Stage 1 Process

1. Extract the chapter from the source document using the method that
   produces the cleanest initial output (typically: PDF text extraction,
   followed by manual correction where the extraction tool introduces artifacts)
2. Apply the paragraph boundary detection rules from the PDF-to-Markdown
   Preservation document
3. Apply the Devanagari extraction rules, with immediate character verification
   for all Devanagari passages
4. Save as a draft markdown file: `draft/[manuscript-slug]/[chapter-slug].md`
5. Do not apply any typography or structural markup at this stage — draft markdown
   is prose only, with paragraph breaks

### Stage 1 Outputs

- `draft/[manuscript-slug]/[chapter-slug].md` — the raw extracted chapter

### Stage 1 Failure Conditions

Extraction fails and the draft must be redone if:
- More than 3% of paragraph boundaries are uncertain after review
- Any Devanagari passage cannot be verified against the source by a Devanagari reader
- Character-level verification reveals OCR substitutions that cannot be corrected

---

## Gate 1: Extraction Validation

Before advancing to Stage 2, the following checklist must be completed and passed:

☐ Paragraph count in draft matches paragraph count in source chapter  
☐ Chapter begins and ends at correct locations in source  
☐ No page-break artifacts detected (running headers, page numbers, footer content)  
☐ All Devanagari passages are UTF-8 encoded Devanagari (no Latin substitutions)  
☐ No lines appear to be missing (approximate line count comparison)  
☐ No content from adjacent chapters has been included  

**If any item is unchecked:** Return to Stage 1. Do not advance.

---

## Stage 2: Source Verification

**Input:** Draft markdown file  
**Output:** Verified source markdown file  
**Governing documents:** PDF-to-Markdown Preservation, Paragraph Integrity Systems,
Sanskrit & Devanagari Protection

### Stage 2 Process

1. Perform the paragraph boundary verification checklist (from Paragraph Integrity
   Systems): first three words and last three words of each paragraph verified
   against source
2. Perform the Devanagari character-level verification: all canonical terms checked
   against Canonical Lexicon Devanagari forms
3. Perform the IAST transliteration verification: all diacritical marks present and
   consistent
4. Perform the punctuation preservation check: em-dashes, daṇḍas, ellipses, quotation
   marks all match source
5. Perform the conjunct consonant integrity check for the canonical terms in the chapter
6. Correct only verified errors (confirmed against the source). Document each correction.
7. Save as verified source: `source/[manuscript-slug]/[chapter-slug].md`

### Stage 2 Outputs

- `source/[manuscript-slug]/[chapter-slug].md` — the verified canonical source for this chapter
- `source/[manuscript-slug]/[chapter-slug]-corrections.md` — log of corrections made, if any

### Stage 2 Failure Conditions

Verification fails if:
- Any Devanagari passage cannot be confirmed as correct by a Devanagari reader
- Paragraph boundaries differ from source and cannot be resolved by correction
- IAST diacritical marks are missing and the source is ambiguous about the correct form

---

## Gate 2: Source Acceptance

Before advancing to Stage 3, the following must be confirmed:

☐ Verified source markdown matches canonical source in all paragraph boundaries  
☐ All Devanagari passages verified by Devanagari reader  
☐ All IAST transliterations carry correct diacritical marks  
☐ All punctuation matches source  
☐ Corrections log is complete and accurate  

**If any item is unchecked:** Return to Stage 2. Do not advance.

---

## Stage 3: Canonical Verification

**Input:** Verified source markdown file  
**Output:** Canonically cleared source file  
**Governing documents:** Canonical Lexicon, Manuscript Integrity Rules,
Doctrinal Continuity Governance

### Stage 3 Process

1. Identify every term in the chapter that appears in the Canonical Lexicon
2. Verify each occurrence is used within its defined semantic boundary (as defined
   in the Canonical Lexicon)
3. Identify any new term with philosophical weight that does not appear in the
   Canonical Lexicon — flag for institutional review and possible Lexicon addition
4. Verify the chapter does not contain any content that violates the Manuscript
   Integrity Rules (no added explanations, no editorial transitions, no reformulations)
5. Verify the chapter is consistent with the doctrinal positions of preceding granthas
   in the hierarchy (where the chapter engages with positions addressed in those granthas)
6. Record any flags for institutional review

### Stage 3 Outputs

- A canonical clearance record for this chapter — either clearance confirmed or
  flags requiring institutional review before clearance
- If new terms are identified for Canonical Lexicon: flag submitted to institutional
  review (rendering does not halt pending this review; the chapter may proceed if
  the term's usage is clear from context)

### Stage 3 Failure Conditions

Canonical verification fails if:
- A canonical term is used in a way that falls outside its Canonical Lexicon boundary
  and the source text is unambiguous about the usage (indicating a manuscript issue
  requiring institutional review before rendering continues)
- A passage appears to have been modified from the verified source without authorization

---

## Gate 3: Canonical Clearance

Before advancing to Stage 4, the following must be confirmed:

☐ All canonical terms used within their defined semantic boundaries  
☐ No new terms requiring urgent Canonical Lexicon addition identified  
☐ Chapter consistent with preceding grantha positions (where applicable)  
☐ No Manuscript Integrity Rule violations detected in the verified source  

**If any item is unchecked:** Pause rendering. Submit to institutional review.
Do not advance until clearance is granted.

---

## Stage 4: Single-Chapter Rendering

**Input:** Canonically cleared source markdown  
**Output:** Rendered chapter in the target format (HTML/React component for web rendering)  
**Governing documents:** Rendering Constitution, Rendering Fidelity Rules

### Stage 4 Process

1. Apply the Rendering Constitution typography: typeface, size, line height,
   paragraph spacing, measure (column width)
2. Apply chapter opening hierarchy: chapter numeral → Devanagari title →
   transliterated title → Sanskrit meaning → first line of prose
3. Apply Devanagari rendering: font specification, weight, no fallback
4. Apply the silence architecture: no navigation within prose, no progress
   indicators, no sharing elements
5. Apply the ornament restraint rules: only permitted ornamental elements
6. Apply reveal animations only at initial page load — prose is static once visible
7. Verify that no automatic content-processing has been applied to the source
   (no grammar correction, no readability optimization, no AI cleanup)

### Stage 4 Outputs

- Rendered chapter component or HTML output
- A list of every typographic decision applied (for the integrity verification stage)

### Stage 4 Failure Conditions

Rendering fails if:
- Any Devanagari passage falls back to a system font
- Any content-processing tool has been applied to the source during rendering
- The rendering system has applied any of the prohibited behaviors listed in
  the Rendering Fidelity Rules

---

## Gate 4: Rendering Review

Before advancing to Stage 5, the following must be confirmed:

☐ Rendered output visually verified against the Rendering Constitution  
☐ All Devanagari passages rendering in the specified Devanagari typeface  
☐ No system font fallback detected  
☐ Chapter opening hierarchy correct  
☐ Silence architecture intact (no navigation within prose, no metrics)  
☐ No ornamental elements beyond the permitted list  

**If any item is unchecked:** Return to Stage 4. Do not advance.

---

## Stage 5: Integrity Verification

**Input:** Rendered chapter  
**Output:** Accepted chapter ready for publication, or failure report  
**Governing documents:** Rendering Fidelity Rules, Paragraph Integrity Systems,
Sanskrit & Devanagari Protection, Canonical Verification Systems

### Stage 5 Process

1. Compare rendered text against verified canonical source: paragraph by paragraph,
   sentence by sentence for the first and last sentences of each paragraph
2. Verify no rendering system has altered any text during processing
3. Run the paragraph integrity verification checklist (from Paragraph Integrity Systems)
4. Run the Devanagari verification checklist (from Sanskrit & Devanagari Protection)
5. Run the IAST transliteration verification checklist
6. Run the prohibited behavior check (no AI cleanup, no readability rewriting,
   no terminology substitution, no emotional amplification)
7. Verify the chapter's position within the manuscript sequence is correct
8. Record the integrity verification as complete and passed

### Stage 5 Outputs

- Integrity verification record — either accepted or failure report with specific
  items requiring correction
- If accepted: authorization to proceed to Stage 6

### Stage 5 Failure Conditions

Integrity verification fails if:
- Any sentence in the rendered output differs from the verified canonical source
- Any Devanagari passage fails the character-level verification
- Any canonical term has been altered during rendering
- Any prohibited rendering behavior is detected

**Response to failure:** Identify the specific failure. Correct only the specific
failure. Do not re-render the entire chapter unless the failure indicates a systemic
problem with the rendering process.

---

## Gate 5: Publication Acceptance

Before a chapter is placed in the Granthālaya, the following must all be confirmed:

☐ Paragraph integrity verification: complete and passed  
☐ Devanagari verification: complete and passed  
☐ IAST transliteration verification: complete and passed  
☐ Prohibited behavior check: complete and passed  
☐ Typography consistency: confirmed against Rendering Constitution  
☐ Silence architecture: intact  
☐ Sequence position: confirmed  
☐ Integrity verification record: signed  

**If any item is unchecked:** The chapter is not published. Identify the specific
item, correct it, and rerun only the verification stages affected by the correction.

---

## Stage 6: Publication in the Granthālaya

**Input:** Accepted, integrity-verified rendered chapter  
**Output:** Chapter visible in the Granthālaya  

The chapter appears in the Granthālaya at the correct position in the manuscript
sequence. Once published:

- The chapter does not receive updates without the institutional revision process
  described in the Manuscript Integrity Rules
- The verified canonical source for the chapter is preserved in the `source/`
  directory and is not altered
- The integrity verification record is preserved as a permanent institutional record

---

## Proceeding to the Next Chapter

Only after Gate 5 has been passed and the chapter has been published in Stage 6
may the workflow return to Stage 1 for the next chapter.

The workflow is strictly sequential. No concurrent chapter rendering is permitted.

---

## Rendering Pause Protocol

If at any stage a failure is identified that cannot be resolved by the verification
and correction process — a failure that indicates a systemic problem with the
rendering approach, the source extraction, or the manuscript itself — rendering
pauses.

A rendering pause is not a failure. It is the institutional safeguard working as
intended.

During a rendering pause:

1. The specific failure is documented in full
2. The institutional review process is engaged
3. No further rendering proceeds until the pause is resolved
4. No partial chapters are published during the pause

The manuscript waits. The process is more important than the schedule.

---

*Tattvashila Chapter Rendering Workflow — maintained for rendering integrity.*  
*One chapter. Fully verified. Then the next.*  
*तत्त्वशिला — the foundation stone.*
