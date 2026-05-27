# Sanskrit & Devanagari Protection — Tattvashila

**Document Type:** Language Preservation Governance  
**Canonical Status:** Primary  
**Scope:** All Sanskrit-derived terminology and Devanagari script across all
Tattvashila canonical manuscripts, institutional documents, and rendered outputs  
**Authority:** These rules govern every system that handles, renders, transforms,
or transmits Devanagari and Sanskrit content

---

## Why Language Protection Is Necessary

Devanagari script and Sanskrit-derived philosophical terminology are not ornamental
features of Tattvashila's manuscripts. They are the primary language of the
canonical tradition — the language in which the institution's philosophical framework
was first articulated and in which it continues to be composed.

The risks to this language in a digital rendering environment are specific and serious:

**Encoding corruption** — Devanagari characters encoded in one system may be rendered
incorrectly in another, silently producing malformed text that appears approximately
correct to someone who cannot read the script.

**Auto-translation** — Language detection and translation systems may identify
Devanagari passages as requiring translation and substitute English equivalents
without notification.

**Transliteration drift** — Systems trained on English-language documents may
substitute romanized equivalents for Devanagari characters, gradually converting
a script-primary document into a transliteration-primary one.

**Terminology substitution** — AI language systems may replace Sanskrit-derived
philosophical terms with English equivalents that appear more accessible, silently
removing the precision that the original terms carry.

**Normalization** — Systems designed to ensure "consistent" language may normalize
diacritical marks in transliteration, dropping distinctions that carry semantic weight
(the difference between ā and a, for example, is the difference between a long and
short vowel — a meaningful phonological distinction that carries into meaning).

This document prevents all of these failures.

---

## I. Devanagari Script Preservation

### 1.1 UTF-8 as the Sole Encoding Standard

All Devanagari text in Tattvashila's digital canonical sources must be encoded
in UTF-8 Unicode. This is non-negotiable.

Any system processing Tattvashila content must:

1. Accept UTF-8 encoded Devanagari without conversion
2. Output UTF-8 encoded Devanagari without conversion
3. Not apply any normalization (NFC, NFD, NFKC, NFKD) that alters Devanagari
   character sequences without explicit institutional authorization

### 1.2 The Canonical Unicode Codepoints

The Devanagari Unicode block spans U+0900–U+097F. All characters used in
Tattvashila manuscripts must fall within this block or within the Devanagari
Extended block (U+A8E0–U+A8FF) where extended characters are required.

No character outside these blocks may be substituted for a Devanagari character.
Specifically:

- Latin characters that appear visually similar to Devanagari characters may
  not be substituted (this is a known OCR failure mode)
- Characters from other Indian scripts (Bengali, Gujarati, etc.) may not appear
  in Devanagari passages
- Mathematical symbols that share visual similarity with Devanagari characters
  may not be substituted

### 1.3 Normalization Forms

Unicode normalization can alter the internal representation of composed characters
without changing their visible appearance. For Devanagari, the canonical normalization
form is NFC (Canonical Decomposition followed by Canonical Composition).

All Devanagari text in canonical sources must be in NFC form. Processing systems
that apply normalization must apply NFC — not NFD, NFKC, or NFKD, which may
decompose conjunct consonants in ways that alter their encoding without altering
their appearance.

### 1.4 Font Requirements for Rendering

Devanagari text must be rendered in a typeface that satisfies the following requirements:

1. **Calligraphic grounding** — The typeface must be based on traditional handwritten
   Devanagari letterforms, not on geometric or rationalized constructions.
2. **Full Unicode coverage** — The typeface must include complete coverage of the
   Devanagari block, including all conjunct consonants required by the manuscript.
3. **Consistent weight with prose** — The Devanagari typeface must optically match
   the weight of the prose typeface. It must not appear heavier, lighter, or as
   a distinct visual register.
4. **No fallback rendering** — The rendering system must not fall back to a system
   Devanagari font. If the specified Devanagari typeface is unavailable, rendering
   must halt — not proceed with a substitute.

---

## II. Original Devanagari Spelling Preservation

### 2.1 Canonical Devanagari Forms

The canonical Devanagari spelling of all key institutional terms is defined in the
Canonical Lexicon. These spellings are the reference standard for all manuscripts
and renderings.

For immediate reference, the canonical forms of the most frequently occurring terms:

| Term | Canonical Devanagari | Notes |
|---|---|---|
| Tattva | तत्त्व | Conjunct: त + ् + त + ् + व |
| Prashna | प्रश्न | Conjunct: प + ् + र + श + ् + न |
| Tattvashila | तत्त्वशिला | Compound of Tattva + Shila |
| Tattvaprashna | तत्त्वप्रश्न | Compound of Tattva + Prashna |
| Tattvagrantha | तत्त्वग्रन्थ | Compound of Tattva + Grantha |
| Grantha | ग्रन्थ | Conjunct: ग + ् + र + न + ् + थ |
| Granthālaya | ग्रन्थालय | Grantha + Ālaya |
| Dharma | धर्म | र-vowel form |
| Sādhanā | साधना | With long ā (ā = आ) |
| Viveka | विवेक | |
| Antaḥkaraṇa | अन्तःकरण | With visarga and ṇa |
| Tīkā | टीका | Long ī, long ā |
| Saṃsthā | संस्था | With anusvara |
| Chetanā | चेतना | |
| Anushāsan | अनुशासन | |

These forms must be verified in every manuscript source and every rendered output.

### 2.2 Conjunct Consonant Integrity

The conjunct consonants in the canonical terms above are among the most vulnerable
to extraction and encoding failure. Each conjunct must be verified:

**तत्त्व (Tattva):**  
The double त conjunct (त + ् + त + ् + व) must appear as the canonical conjunct form.
If it appears as separate characters without the halant, it is malformed.

**प्रश्न (Prashna):**  
The प+र conjunct (प + ् + र) and the श+न conjunct (श + ् + न) must both be correctly formed.

**ग्रन्थ (Grantha):**  
The ग+र conjunct (ग + ् + र) and the न+थ conjunct (न + ् + थ) must both be correctly formed.

### 2.3 No Spelling Normalization

Spelling normalization — changing the Devanagari spelling of a word to conform to
a dictionary standard, a different regional convention, or a system's trained
expectations — is prohibited.

The canonical spelling is what the manuscript has. If the manuscript spells a word
in a specific way, that spelling is canonical for this institution's texts — even
if it differs from the spelling found in other published works.

---

## III. Sanskrit-Derived Terminology Preservation

### 3.1 Terminology Immutability

All Sanskrit-derived philosophical terms in Tattvashila manuscripts are immutable
once defined in the Canonical Lexicon. They may not be:

- Replaced with English equivalents
- Replaced with Hindi equivalents that are not canonical
- Simplified to common-usage forms that lose semantic precision
- Abbreviated or shortened for any reason

The Canonical Lexicon is the authority. If a term appears in the Canonical Lexicon,
it is used exactly as defined. If a term does not appear in the Canonical Lexicon
and carries philosophical weight, it is added to the Canonical Lexicon before
it appears in a rendered output.

### 3.2 Term Isolation from Rendering Systems

Rendering systems that apply language processing — spell-checking, grammar-checking,
style-checking, or AI language assistance — may not apply their processing to
Sanskrit-derived terms.

If the rendering system cannot be configured to exclude specific terms or languages
from processing, it must not be used for canonical manuscript rendering.

Spell-checkers, in particular, will flag Sanskrit-derived terms as errors and
suggest replacements. These suggestions must never be applied.

### 3.3 Terminology Context Preservation

The philosophical meaning of a Sanskrit-derived term depends partly on the context
in which it appears — the terms that surround it, the question it is addressing,
the passage of which it is part.

Rendering systems must not extract terms from their context for any purpose:
not for glossary generation, not for keyword indexing, not for "term definition"
tooltips, not for any mechanism that presents a term in isolation from the prose
in which the author placed it.

A term presented in isolation loses part of its meaning. The Canonical Lexicon
provides definitions — but definitions are not substitutes for the term in context.

---

## IV. Diacritic Consistency

### 4.1 The IAST Standard

All transliterated Sanskrit and Hindi terms in Tattvashila documents use the
International Alphabet of Sanskrit Transliteration (IAST). The IAST standard
must be applied consistently throughout all canonical documents.

IAST diacritical distinctions that are semantically meaningful and must not be dropped:

| IAST character | Unicode | Represents | Must not become |
|---|---|---|---|
| ā | U+0101 | Long a (आ) | a |
| ī | U+012B | Long i (ई) | i |
| ū | U+016B | Long u (ऊ) | u |
| ṭ | U+1E6D | Retroflex t (ट) | t |
| ḍ | U+1E0D | Retroflex d (ड) | d |
| ṇ | U+1E47 | Retroflex n (ण) | n |
| ś | U+015B | Palatal s (श) | s or sh |
| ṣ | U+1E63 | Retroflex s (ष) | s or sh |
| ḥ | U+1E25 | Visarga (ः) | h or nothing |
| ṃ | U+1E43 | Anusvara (ं) | m or nothing |
| ñ | U+00F1 | Palatal n (ञ) | n |
| ṅ | U+1E45 | Velar n (ङ) | n |

Every one of these distinctions is semantically meaningful in Sanskrit. Dropping them
produces a different word or a malformed transliteration.

### 4.2 Consistency Within a Document

Within any single canonical document, the transliteration of each Sanskrit term
must be consistent. A term may not appear with diacritical marks in one location
and without them in another.

The consistency check: search for every occurrence of each canonical term in a
document. All occurrences must use the same IAST form.

### 4.3 No Simplified Romanization

Simplified romanization systems — those that use sh for ś/ṣ, ee for ī, oo for ū,
and so on — are not permitted in canonical Tattvashila documents.

Simplified romanization is used in some popular publications to make Sanskrit
terms accessible to readers unfamiliar with IAST. In Tattvashila's canonical
documents, accessibility through simplification is not a governing concern. Accuracy
and stability are. IAST is maintained.

---

## V. Prohibited Behaviors

These prohibitions apply to all systems — human, automated, and AI — that handle
Devanagari and Sanskrit content in Tattvashila's canonical materials.

### Auto-Translation Is Prohibited

No system may translate Devanagari passages into English, Hindi prose into English,
or Sanskrit terms into English equivalents without explicit institutional authorization.

Auto-translation features in rendering environments must be disabled for canonical
content. If they cannot be disabled, the rendering environment may not be used.

### Sanskrit Simplification Is Prohibited

No system may replace a Sanskrit term with a simplified form — whether that means
removing diacritical marks, substituting an English equivalent, or using a common-
usage spelling that differs from the IAST form.

### Transliteration Drift Is Prohibited

Transliteration drift is the process by which a document that begins with consistent
IAST gradually acquires inconsistent forms — some occurrences of a term with full
diacritical marks, others without — through the accumulated effect of editing,
copying, and rendering. Each individual change appears minor; the drift is only
visible across the whole document.

Prevention: The consistency check described in IV.2 above is performed after every
rendering pass, not only at initial extraction.

### English Substitution Behavior Is Prohibited

English substitution behavior is the tendency — particularly marked in AI systems —
to replace canonical philosophical terms with English equivalents in generated or
processed text. This behavior activates because the AI system judges the English
equivalent to be "clearer" or "more accessible" to an English-language reader.

This judgment is not the AI system's to make. The canonical terms are what they are.
No English equivalent is authorized as a substitute.

---

## VI. Verification Protocol

For every rendered output containing Devanagari or Sanskrit content:

### Devanagari Verification

☐ All Devanagari passages verified in UTF-8 encoding  
☐ No Latin characters substituted for Devanagari characters  
☐ All conjunct consonants correctly formed (verified by Devanagari reader)  
☐ All canonical terms match the Canonical Lexicon Devanagari forms exactly  
☐ Font rendering confirmed (no fallback fonts, no character substitution)  

### IAST Transliteration Verification

☐ All long vowels marked (ā, ī, ū)  
☐ All retroflex consonants marked (ṭ, ḍ, ṇ, ṣ)  
☐ All sibilant distinctions marked (ś vs. ṣ vs. s)  
☐ Visarga (ḥ) and anusvara (ṃ) correctly placed  
☐ Consistency check: all occurrences of each term use the same IAST form  

### Prohibited Behavior Check

☐ No auto-translated passages detected  
☐ No simplified romanization detected  
☐ No English substitutions for canonical Sanskrit terms  
☐ No terms from the Canonical Lexicon used outside their defined semantic boundaries  

---

*Tattvashila Sanskrit & Devanagari Protection — maintained for language preservation.*  
*Script is not decoration. It is the primary form of the canonical tradition.*  
*तत्त्वशिला — the foundation stone.*
