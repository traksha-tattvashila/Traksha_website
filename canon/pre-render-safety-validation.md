# Pre-Render Safety Validation — Tattvashila

**Document Type:** Final Safety Gate  
**Canonical Status:** Primary  
**Scope:** The complete validation that must be passed before any chapter rendering begins  
**Authority:** This document defines the final institutional checkpoint before
Tattvaprashna — or any canonical manuscript — enters the rendering workflow

---

## The Purpose of This Validation

The canonical architecture has been established. The lexicon is defined.
The rendering constitution governs typography. The integrity rules govern what
may not be done. The preservation principles govern what must be protected.
The verification systems govern how rendering is confirmed to be faithful.

Before any chapter enters the rendering workflow, one final question must be answered:

**Is the system in which rendering will occur actually prepared to preserve
the manuscript — or has something been overlooked?**

This validation is the institution asking itself that question, systematically,
before beginning the irreversible process of placing a manuscript into a rendering
environment that will propagate it.

An improperly prepared rendering environment does not simply fail technically —
it introduces corruptions that may not be detected until they are already in the
published form. This validation is the final opportunity to find what is missing
before it becomes what is wrong.

---

## The Validation Checklist

Each item below must be confirmed before rendering begins. The checklist is not
a formality — it is the institution's commitment that each item has been verified,
not assumed.

---

### SECTION A — Canonical File Consistency

**A1. All canonical files are present and complete**

☐ `canon/tattvaprashna-source-of-truth.md` — present and internally consistent  
☐ `canon/canonical-lexicon.md` — present and complete for all core terms  
☐ `canon/rendering-constitution.md` — present and internally consistent  
☐ `canon/manuscript-integrity-rules.md` — present and internally consistent  
☐ `canon/granthalaya-preservation-principles.md` — present and internally consistent  
☐ `canon/doctrinal-continuity-governance.md` — present and internally consistent  
☐ `canon/rendering-fidelity-rules.md` — present and internally consistent  
☐ `canon/pdf-to-markdown-preservation.md` — present and internally consistent  
☐ `canon/paragraph-integrity-systems.md` — present and internally consistent  
☐ `canon/sanskrit-devanagari-protection.md` — present and internally consistent  
☐ `canon/chapter-rendering-workflow.md` — present and internally consistent  
☐ `canon/canonical-verification-systems.md` — present and internally consistent  
☐ `canon/pre-render-safety-validation.md` — this document, present  

**A2. No contradictions exist between canonical documents**

The canonical documents must be mutually consistent. Where one document defers to
another (e.g., "see the Canonical Lexicon"), the document deferred to must actually
address the referenced subject.

Known cross-references to verify:

☐ Rendering Constitution references Devanagari rendering → Sanskrit & Devanagari
  Protection is consistent with those references  
☐ Manuscript Integrity Rules references the Canonical Lexicon as a constraint →
  the Canonical Lexicon is complete enough to function as that constraint  
☐ Chapter Rendering Workflow references verification checklists from other documents →
  those checklists exist in those documents  
☐ Pre-Render Safety Validation references all other canonical documents →
  all referenced documents exist  

**A3. The Canonical Lexicon is complete for the manuscript to be rendered**

Before rendering Tattvaprashna:

☐ All Sanskrit-derived philosophical terms that appear in Tattvaprashna are
  either defined in the Canonical Lexicon or have been reviewed and determined
  not to require formal definition before rendering begins  
☐ All Devanagari forms in the Canonical Lexicon have been verified against
  the manuscript  
☐ All IAST transliterations in the Canonical Lexicon carry correct diacritical marks  

---

### SECTION B — Terminology Systems Stability

**B1. No unresolved terminology questions**

☐ No canonical term has a contested or ambiguous definition that would affect
  rendering decisions  
☐ The institutional position on all terms appearing in the Canonical Lexicon is stable  
☐ No term used in the manuscript to be rendered falls outside the Canonical
  Lexicon and requires urgent institutional review before rendering begins  

**B2. Cross-document terminology consistency**

☐ Terms used in the source-of-truth document match the Canonical Lexicon definitions  
☐ Terms used in the Rendering Constitution match the Canonical Lexicon definitions  
☐ Terms used in the Chapter Rendering Workflow match the Canonical Lexicon definitions  
☐ No canonical document uses a term in a way that contradicts its Canonical Lexicon definition  

**B3. Prohibited substitutions are known to the rendering environment**

☐ All rendering systems have been provided with the list of prohibited substitutions
  from the Canonical Lexicon  
☐ Any AI system involved in rendering has been provided with the Canonical Lexicon
  as a constraint document — not as a reference, but as a boundary  
☐ Spell-checkers and grammar checkers have been disabled for canonical terms, or
  the rendering environment has been configured to exclude them from processing  

---

### SECTION C — Rendering Constitution Validation

**C1. No contradictions within the Rendering Constitution**

☐ The typography principles are internally consistent (no conflicting specifications
  for the same typographic element)  
☐ The spacing philosophy is internally consistent  
☐ The silence architecture requirements are actionable (the rendering environment
  can implement them)  
☐ The chapter-opening system is fully specified (no element is left undefined)  
☐ The navigation rules are consistent with the platform architecture  
☐ The ornament restraint rules are clear enough to apply without ambiguity  

**C2. The Rendering Constitution can be implemented in the target rendering environment**

☐ The specified Devanagari typeface is available in the rendering environment  
☐ The specified prose typeface is available  
☐ The type scale specified in the Rendering Constitution can be implemented  
☐ The line height and paragraph spacing can be implemented  
☐ The silence architecture (no progress indicators, no navigation within prose,
  no sharing elements) can be implemented without exceptions  
☐ The ornament restraint rules can be enforced in the rendering environment  

**C3. The rendering environment does not introduce prohibited behaviors by default**

☐ The rendering environment does not apply auto-translation by default  
☐ The rendering environment does not apply grammar or spell correction by default  
☐ The rendering environment does not apply readability optimization by default  
☐ Any AI systems in the rendering pipeline have been configured to not apply
  cleanup or improvement behaviors  
☐ The rendering environment does not add content (suggested reading, metadata,
  annotations) to the manuscript reading view by default  

---

### SECTION D — Manuscript Integrity Rules Are Enforceable

**D1. The absolute prohibitions can be enforced**

☐ There is no pathway through which paragraph merging could occur in the rendering
  pipeline without human authorization  
☐ There is no pathway through which AI cleanup behavior could be applied without
  human detection  
☐ There is no pathway through which terminology replacement could occur in the
  rendering pipeline  
☐ There is no pathway through which the manuscript could be excerpted automatically
  for any purpose (metadata generation, index building, etc.) without going through
  the Manuscript Integrity Rules  

**D2. AI system boundaries are in place**

☐ All AI systems that may interact with manuscript content have been provided
  with the AI governance rules from the Manuscript Integrity Rules  
☐ All AI systems have been provided with the Canonical Lexicon as a constraint  
☐ No AI system has write access to the canonical source files  
☐ No AI system can publish to the Granthālaya without human authorization  

**D3. Translation safeguards are in place**

☐ No translation system has access to the canonical source files  
☐ The rendering environment does not have language detection that would
  trigger auto-translation for Hindi or Devanagari content  

---

### SECTION E — No AI Rewriting Pathways Remain

This section is specific enough to warrant a standalone check. AI rewriting
is the most persistent and most invisible integrity risk in digital rendering.

**E1. Direct AI rewriting pathways**

☐ No AI language model has been granted write access to canonical source files  
☐ No AI "improvement" workflow is active for any canonical content  
☐ No AI system has been asked to generate content for any part of the manuscript
  (including chapter introductions, section headings, or any text that would
  appear in the reading view)  
☐ No AI system has been asked to "clean up" or "fix" any canonical source passage  

**E2. Indirect AI rewriting pathways**

☐ No rendering pipeline step passes canonical source through an AI system
  that applies text normalization, cleanup, or improvement as part of its default behavior  
☐ No markdown processor used in the rendering pipeline applies text transformations
  that could alter the source  
☐ No static site generator or build tool applies content optimization that could
  alter the source  
☐ No CDN or caching layer applies content transformation to the rendered output  

**E3. AI-assisted tools in the workflow**

If AI-assisted tools are used for any part of the rendering workflow (e.g., for
PDF extraction assistance, for structural markup, for build processes):

☐ Each AI-assisted tool has been tested to confirm it does not apply text
  transformations to content it processes  
☐ The output of each AI-assisted tool is verified against input before proceeding
  to the next stage  
☐ The use of each AI-assisted tool in the workflow is documented  

---

### SECTION F — Rendering Workflow Is Preservation-First

**F1. The Chapter Rendering Workflow has been reviewed and understood**

☐ The complete rendering workflow (Stage 1 through Stage 6) is documented
  in `canon/chapter-rendering-workflow.md`  
☐ All persons involved in the rendering process have read the workflow document  
☐ All verification gate checklists are accessible during the rendering process  
☐ The rendering pause protocol is understood: if a systemic failure is detected,
  rendering halts — no partial publishing proceeds  

**F2. Verification is independent from rendering**

☐ The person responsible for verification at each gate is identified  
☐ Wherever possible, the verifier is not the same person who performed the
  preceding rendering stage  
☐ The verification records system is in place and ready to receive records  

**F3. The rendering sequence is established**

☐ The chapter sequence for Tattvaprashna (or the manuscript being rendered)
  is documented  
☐ The starting chapter is identified  
☐ No concurrent chapter rendering will begin before the first chapter has
  passed Gate 5  

---

### SECTION G — Final Institutional Confirmation

**G1. The institution is ready to receive this manuscript into the Granthālaya**

Rendering a canonical manuscript for placement in the Granthālaya is an
institutional act — not a technical task. Before rendering begins, the
institution confirms:

☐ The manuscript is genuinely complete and has been held until ready  
☐ The institution is prepared to maintain this manuscript in the Granthālaya
  permanently — not to withdraw it, revise it casually, or treat it as provisional  
☐ The canonical architecture is in place to protect the manuscript through all
  future rendering, translation, and transmission  

**G2. The canonical architecture will remain maintained**

☐ The canonical files will be reviewed when new manuscripts enter the rendering
  workflow (to confirm they remain accurate and complete)  
☐ The Canonical Lexicon will be updated when new terms requiring protection emerge  
☐ The Doctrinal Continuity Governance will be consulted when new granthas are placed  

---

## Validation Outcome

When all items above are confirmed:

**Rendering may begin.**

The institution proceeds to Stage 1 of the Chapter Rendering Workflow, beginning
with the first chapter of the manuscript.

---

When any item above is unconfirmed:

**Rendering does not begin.**

The specific unconfirmed item is addressed. If it can be resolved quickly
(a missing canonical file, a terminology question, a rendering environment
configuration), it is resolved and the validation is re-run for that section.

If it cannot be resolved quickly (a systemic question about the rendering
environment, an unresolved institutional review, a question about the
manuscript's completeness), the rendering pause protocol is invoked and
rendering waits until the question is resolved.

**There is no schedule pressure that overrides this validation.**

The manuscript has waited through its entire composition. It will wait through
its validation. The institution does not rush the last gate before the manuscript
enters the Granthālaya.

---

*Tattvashila Pre-Render Safety Validation — the final institutional checkpoint.*  
*Only after all validations pass may chapter rendering begin.*  
*तत्त्वशिला — the foundation stone.*
