# Paragraph Integrity Systems — Tattvashila

**Document Type:** Structural Preservation Governance  
**Canonical Status:** Primary  
**Scope:** All processes that handle, render, or transmit canonical manuscript paragraphs  
**Authority:** These rules govern paragraph handling in all rendering, extraction, and
transmission systems

---

## The Governing Principle

A paragraph in a philosophical manuscript is not a unit of content. It is a unit of
thought — a complete movement of the mind from one position to another, held together
by the author's decision that these sentences belong together and that the thought ends
here.

This decision — where to begin a paragraph, how long to sustain it, and where to close
it — is the author's deepest structural act. It is not a formatting convention. It is
not a visual artifact. It is philosophical structure made visible as prose.

Paragraph integrity means: the paragraph moves through every stage of rendering exactly
as the author composed it — without being merged, split, reordered, trimmed, or
augmented.

---

## I. Paragraph-Preservation Rules

### Rule 1: A Paragraph Is Immutable

Once verified against the canonical source, a paragraph is immutable. Its text does
not change. Its boundaries do not change. Its position within the chapter does not
change.

The only permitted alteration to a verified paragraph is typographic correction
of a demonstrable error — and that correction requires canonical review before it
is made.

### Rule 2: Paragraph Boundaries Are Semantic Decisions

Every blank line between paragraphs in the canonical source represents the author's
decision to create a pause — a moment where one unit of thought concludes and the
next has not yet begun. This pause is philosophically significant.

Rendering systems must render paragraph boundaries as visible space — not collapsed,
not minimized, not normalized to the same visual weight as the space between sentences
within a paragraph.

The typographic paragraph spacing specified in the Rendering Constitution governs
the visual rendering of this boundary. The underlying principle is here: the
boundary marks a pause the reader needs.

### Rule 3: No Content May Be Added Within a Paragraph

Rendering may not add any content within a canonical paragraph:

- No editorial footnotes within the prose
- No parenthetical clarifications inserted into the text
- No transitional phrases added between sentences
- No "see also" references embedded in the prose
- No emphasis added (bold, italic) that the source does not have

All additions contaminate the paragraph. A contaminated paragraph is not the author's
paragraph.

### Rule 4: No Content May Be Added Between Paragraphs

Rendering may not add any content between canonical paragraphs:

- No editorial transitions ("In the next passage..." / "Here, the author turns to...")
- No thematic subheadings inserted mid-chapter that the source does not have
- No summaries of what the preceding paragraph said
- No introductions to what the next paragraph will say

Between paragraphs there is only the blank line that marks the boundary. Nothing more.

### Rule 5: Paragraph Order Is the Author's Argument

The sequence of paragraphs within a chapter is the structure of the argument. It may
not be reordered. Even where a later paragraph appears to introduce a concept more
helpfully than the paragraph in which it actually appears, the reordering is not
permitted.

The author's decision about what comes first and what follows is not a pedagogical
choice that rendering can improve. It is the philosophical structure of the chapter.

---

## II. Line-Break Handling

### 2.1 Soft Line Breaks Within Paragraphs

A soft line break (a single newline within a paragraph, without a blank line before
the next line) occurs in source manuscripts when:

- The author uses line breaks for visual clarity in physical composition (as in
  traditional manuscript presentation)
- The PDF extraction introduces line breaks at the physical page width

In either case, a soft line break within a paragraph must be rendered as a continuation
of the paragraph — not as a paragraph boundary.

In markdown, soft line breaks are represented as a single newline (no blank line between
lines). In HTML rendering, single newlines within a markdown paragraph are treated as
spaces. This is the correct behavior — the line break should not be visible to the reader.

### 2.2 Hard Line Breaks

A hard line break — one that should be visible to the reader as a line break within
a paragraph — is represented in markdown as two spaces before the newline (or a
backslash before the newline, depending on the markdown flavor).

Hard line breaks are used only where the canonical source demonstrates a visible
line break within a paragraph: in quoted verse, in structured lists that the author
presents as prose, or in passages where the source's own layout creates a lineated
structure.

Hard line breaks must not be used to impose visual structure that the source does
not have.

### 2.3 Paragraph Break vs. Line Break: The Critical Distinction

| Source condition | Markdown representation | Rendered result |
|---|---|---|
| Blank line between prose blocks | Blank line in markdown | Paragraph space (visible) |
| Continued prose on next line | Single newline, no blank line | No break (treated as space) |
| Visible line break within paragraph | Two spaces + newline | Visible line break |

This table must be consulted during extraction. Misapplication of these representations
is the most common structural corruption in markdown manuscript sources.

---

## III. Quotation Handling

### 3.1 Quotations Within the Manuscript Prose

Where the canonical manuscript quotes another source — a classical text, a passage
from another grantha, a specific formulation being examined — the quotation must be
preserved exactly as the author has given it, including:

- The exact wording as the author has rendered it (not corrected against the "original")
- The author's chosen quotation marks or citation format
- The author's choice of whether to block-quote or inline-quote

**Important:** The author's rendering of a classical quotation is canonical — even if
it differs from other published translations or scholarly editions. The author's
quotation is an interpretive act, and that interpretation belongs to the manuscript.

### 3.2 Block Quotations

A passage that the author has formatted as a block quotation must be rendered as a
block quotation. In markdown, this means the indented blockquote syntax (`>`).

Block quotations must not be:
- Converted to inline quotations (because the passage is "short enough")
- Left without the blockquote markup (because the layout system will handle spacing)
- Given additional attribution lines that the author did not provide

### 3.3 Inline Quotations

A passage that the author has kept within the prose flow as an inline quotation
(marked with quotation marks) must be kept inline. It must not be:
- Promoted to a block quotation (because the passage is "long enough to stand alone")
- Stripped of quotation marks (because the layout system will distinguish it visually)

### 3.4 The Attribution of Quotations

Where the author attributes a quotation — naming the source, the tradition, the text —
that attribution is part of the prose and is preserved exactly.

Where the author does not attribute a quotation, no attribution is added by the
rendering system. The decision not to attribute is itself an authorial decision —
perhaps because the passage is being held up for examination rather than credited,
perhaps because the author assumes familiarity, perhaps for other reasons that are
not the rendering system's to second-guess.

---

## IV. Emphasis Preservation

### 4.1 Emphasis in the Canonical Source

Emphasis in the canonical manuscript — italicization, occasional bold, underline —
carries the author's specific intent. The rendering must preserve the form of emphasis
exactly as it appears in the source.

Specifically:

- **Italic** in the source → italic in the rendering
- **Bold** in the source → bold in the rendering (rare in philosophical prose)
- **Underline** in the source → underline in the rendering (rare; distinguished from links)

### 4.2 Emphasis Addition Is Prohibited

The rendering system may not add emphasis that the source does not have. Common
violations:

- Bolding key terms for reader navigation
- Italicizing Sanskrit terms that the author did not italicize
- Adding emphasis to "important" sentences that the rendering system identifies as significant

The rendering system is not the author. It does not know which sentences are most
important. The author's emphasis decisions are the correct ones.

### 4.3 Devanagari Emphasis

Devanagari script carries emphasis differently from Latin script. The Devanagari
rendering convention (typeface weight, size, presence) is specified in the Rendering
Constitution. Any additional visual emphasis applied to Devanagari passages must be
present in the canonical source.

---

## V. Intentional Silence Preservation

### 5.1 What Intentional Silence Is

In philosophical prose, silence is not the absence of content. It is a deliberate
structural element: a short paragraph following a long one; a single sentence that
closes a chapter; a passage that does not complete the thought it opened; a pause
where the reader is expected to stop before continuing.

Intentional silence is encoded in the prose's structure. It cannot be extracted
separately from the prose — it can only be recognized by reading the prose carefully
and noticing where the author chose brevity, incompletion, or pause.

### 5.2 Preservation of Short Paragraphs

A paragraph of one or two sentences is not too brief to be a paragraph. In
philosophical prose, the shortest paragraphs are often the most structurally
significant. They arrive after sustained argumentation as moments of rest, emphasis,
or redirection.

Short paragraphs must be preserved as standalone units — not merged with the
paragraphs before or after them because they appear "too short to stand alone."
A paragraph that stands alone in the source stands alone in the rendering.

### 5.3 Preservation of Incomplete Thoughts

A passage that does not complete its thought — that opens a question without closing
it, that traces an inquiry without resolving it — is preserved as the author wrote it.
The rendering system does not complete what the author left open.

### 5.4 Preservation of Chapter Endings

Chapter endings in philosophical prose are often structurally different from the
chapters they close: shorter, quieter, more elliptical. They may end without
resolution. They may end with a question. They may end with a statement that does
not feel like a conclusion.

These endings are preserved exactly as they appear. The rendering system does not
add a summary, a transitional link, or a closing statement that the author did not write.

---

## VI. The Paragraph Integrity Verification Checklist

For each chapter, after rendering is complete and before the chapter is accepted
for publication in the Granthālaya:

### Structural Checks

☐ Paragraph count in rendering matches paragraph count in canonical source  
☐ First three words of each paragraph match canonical source  
☐ Last three words of each paragraph match canonical source  
☐ No blank lines appear within paragraphs (soft breaks are not paragraph breaks)  
☐ No paragraphs have been merged (check for unusual length)  
☐ No paragraphs have been split (check for unexpected short paragraphs)  
☐ Paragraph sequence matches canonical source  

### Content Checks

☐ No editorial content has been added within paragraphs  
☐ No editorial content has been added between paragraphs  
☐ Intentional repetition is preserved in full  
☐ Short paragraphs are preserved as standalone units  
☐ Chapter ending matches canonical source exactly  

### Emphasis Checks

☐ All italic passages in the source are italic in the rendering  
☐ All bold passages (if any) in the source are bold in the rendering  
☐ No emphasis has been added that the source does not have  

### Quotation Checks

☐ All block quotations are rendered as block quotations  
☐ All inline quotations preserve original quotation marks  
☐ Attribution lines match source exactly  

---

*Tattvashila Paragraph Integrity Systems — maintained for philosophical structure preservation.*  
*Paragraph rhythm is philosophical structure — not formatting decoration.*  
*तत्त्वशिला — the foundation stone.*
