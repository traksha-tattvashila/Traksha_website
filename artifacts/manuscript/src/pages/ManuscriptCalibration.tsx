import "../manuscript.css";

export default function ManuscriptCalibration() {
  return (
    <div className="manuscript-root">

      {/* ── PHASE 1 · TITLE PAGE ── */}
      <section className="ms-title-page">
        <div className="ms-title-inner">
          <div className="ms-title-devanagari">तत्त्वशिला</div>
          <div className="ms-title-roman">Tattvashilā</div>
          <div className="ms-title-rule" />
          <div className="ms-title-subtitle">
            एक दार्शनिक अन्वेषण
          </div>
          <div className="ms-title-subtitle-roman">A Philosophical Inquiry</div>
          <div className="ms-title-spacer" />
          <div className="ms-title-author-label">लेखक</div>
          <div className="ms-title-author">अनिरुद्ध वर्मा</div>
          <div className="ms-title-author-roman">Aniruddha Varma</div>
          <div className="ms-title-foot">
            <span className="ms-title-foot-item">प्रथम संस्करण</span>
            <span className="ms-title-foot-sep">·</span>
            <span className="ms-title-foot-item">२०२५</span>
          </div>
        </div>
      </section>

      {/* ── PHASE 2 · OPENING SILENCE ── */}
      <section className="ms-silence">
        <div className="ms-silence-block ms-silence-block--tall" />
        <div className="ms-silence-mark">❧</div>
        <div className="ms-silence-block ms-silence-block--medium" />
        <div className="ms-silence-epigraph">
          <p className="ms-epigraph-deva">
            यत्र नान्यत्पश्यति, नान्यच्छृणोति,<br />
            नान्यद्विजानाति, स भूमा।
          </p>
          <p className="ms-epigraph-source">— छान्दोग्योपनिषद् ७.२४.१</p>
          <p className="ms-epigraph-trans">
            Where one sees nothing else, hears nothing else,<br />
            knows nothing else — that is the Infinite.
          </p>
        </div>
        <div className="ms-silence-block ms-silence-block--tall" />
      </section>

      {/* ── PHASE 3 · CHAPTER OPENING ── */}
      <section className="ms-chapter-opening">
        <div className="ms-chapter-num-deva">प्रथम अध्याय</div>
        <div className="ms-chapter-num-roman">Chapter One</div>
        <div className="ms-chapter-title-deva">
          प्रश्न का जन्म
        </div>
        <div className="ms-chapter-title-roman">The Birth of the Question</div>
        <div className="ms-chapter-rule" />
        <div className="ms-chapter-opening-silence" />
      </section>

      {/* ── PHASE 4 · SINGLE-PROSE SAMPLE ── */}
      <section className="ms-prose-section">
        <div className="ms-prose-column">

          <p className="ms-prose ms-prose--deva">
            हर प्रश्न एक रहस्य से नहीं, बल्कि एक असुविधा से जन्म लेता है।
            जब हम किसी बात को इतनी बार दोहराते हैं कि वह पारदर्शी हो जाती है —
            तब, उसी पारदर्शिता में, कुछ और दिखने लगता है।
          </p>

          <p className="ms-prose ms-prose--roman">
            Every question is born not from mystery, but from discomfort. When we
            repeat something often enough that it becomes transparent — it is
            precisely in that transparency that something else begins to appear.
          </p>

          <div className="ms-prose-break" />

          <p className="ms-prose ms-prose--deva">
            तत्त्व शब्द संस्कृत में 'तत्' से आता है — अर्थात् 'वह'।
            जो दूर है, जो अनिर्वचनीय है, जो केवल संकेत से जाना जाता है।
            और 'शिला' अर्थात् पाषाण — जो स्थिर है, जो काल के प्रवाह में भी अडिग रहता है।
          </p>

          <p className="ms-prose ms-prose--roman">
            The word <em>tattva</em> in Sanskrit derives from <em>tat</em> — meaning
            "that." That which is distant, that which resists articulation, that
            which is known only through gesture. And <em>śilā</em> means stone —
            that which is stable, that which endures unmoved even in the passage
            of time.
          </p>

          <div className="ms-prose-break" />

          <p className="ms-prose ms-prose--deva">
            यह ग्रंथ किसी उत्तर की खोज नहीं है।
            यह उस प्रश्न की खोज है जो उत्तर से पुराना है।
          </p>

          <p className="ms-prose ms-prose--roman">
            This work is not a search for answers.<br />
            It is a search for the question that is older than the answer.
          </p>

        </div>
      </section>

      {/* ── PHASE 5 · TYPOGRAPHY CALIBRATION ── */}
      <section className="ms-calibration-panel">
        <div className="ms-cal-label">Typography Calibration</div>
        <div className="ms-cal-grid">

          <div className="ms-cal-cell">
            <div className="ms-cal-cell-label">Prose Measure</div>
            <div className="ms-cal-prose-sample">
              The measure of this prose column is set to approximately 66–68
              characters per line — the classical optimum for sustained reading
              in a contemplative register.
            </div>
          </div>

          <div className="ms-cal-cell">
            <div className="ms-cal-cell-label">Line Height</div>
            <div className="ms-cal-lh-deva">
              धर्म अर्थ काम मोक्ष।<br />
              यह चार पुरुषार्थ हैं।<br />
              परंतु इनसे परे भी कुछ है।
            </div>
            <div className="ms-cal-lh-roman">
              The four aims of life.<br />
              Yet beyond them lies another.<br />
              The unnamed.
            </div>
          </div>

          <div className="ms-cal-cell">
            <div className="ms-cal-cell-label">Paragraph Spacing</div>
            <p className="ms-cal-para">First paragraph. The space between paragraphs is architectural — it is not air but a pause, the way a musician's rest carries meaning equal to the note.</p>
            <p className="ms-cal-para">Second paragraph. The silence between these two blocks of text is not emptiness. It is the hinge on which meaning turns.</p>
            <p className="ms-cal-para">Third paragraph. Notice how the eye arrives here refreshed, not fatigued. That is the function of the space above.</p>
          </div>

        </div>
      </section>

      {/* ── PHASE 6 · DEVANAGARI VALIDATION ── */}
      <section className="ms-deva-validation">
        <div className="ms-cal-label">Devanagari Rendering Validation</div>

        <div className="ms-deva-grid">

          <div className="ms-deva-cell">
            <div className="ms-deva-cell-label">Mātrā Rendering</div>
            <div className="ms-deva-sample">
              कि की कु कू के कै को कौ कं कः क्<br />
              आ इ ई उ ऊ ए ऐ ओ औ अं अः<br />
              सीमा · नीति · भूमि · कैसे · कौशल
            </div>
          </div>

          <div className="ms-deva-cell">
            <div className="ms-deva-cell-label">Conjunct Rendering</div>
            <div className="ms-deva-sample">
              क्ष त्र ज्ञ श्र ट्ट ड्ड<br />
              प्र द्व ग्र ब्र ह्म न्य<br />
              स्त्र क्त्र ष्ट्र ज्ञान तत्त्व<br />
              उत्कर्ष · संस्कृत · अन्वेषण
            </div>
          </div>

          <div className="ms-deva-cell">
            <div className="ms-deva-cell-label">Long-Form Wrap Behaviour</div>
            <div className="ms-deva-sample ms-deva-sample--prose">
              यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।
              अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥
              परित्राणाय साधूनां विनाशाय च दुष्कृताम्।
              धर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥
            </div>
          </div>

          <div className="ms-deva-cell">
            <div className="ms-deva-cell-label">Unicode Stability</div>
            <div className="ms-deva-sample">
              <span>श्री</span> · <span>ॐ</span> · <span>।</span> · <span>॥</span> · <span>॰</span><br />
              <span>ऋ ॠ ऌ</span><br />
              <span>ञ ण</span> · <span>ङ</span> · <span>ँ ं ः ़</span>
            </div>
          </div>

          <div className="ms-deva-cell">
            <div className="ms-deva-cell-label">Breathing Space — Mixed Script</div>
            <div className="ms-deva-sample ms-deva-sample--prose">
              तत्त्व (<em>tattva</em>) का अर्थ केवल 'सत्य' नहीं है —
              यह वह आधार है जिस पर सत्य टिकता है।
              इसे <em>substratum</em> भी कह सकते हैं,
              परंतु वह शब्द भी अधूरा है।
            </div>
          </div>

        </div>
      </section>

      {/* ── PHASE 7 · ATMOSPHERE VERIFICATION ── */}
      <section className="ms-atmosphere">
        <div className="ms-silence-block ms-silence-block--medium" />
        <div className="ms-atm-inner">
          <div className="ms-atm-deva">
            यह स्थान एक पाण्डुलिपि-कक्ष है।
          </div>
          <div className="ms-atm-roman">
            This space is a manuscript chamber.
          </div>
          <div className="ms-atm-rule" />
          <p className="ms-atm-note">
            The reading environment must carry no trace of commerce, no urgency
            of product, no rhythm of the feed. It must feel as though time has
            slowed — not because of ornament, but because of restraint. The
            page itself must become the institution.
          </p>
          <p className="ms-atm-note ms-atm-note--deva">
            यह वातावरण किसी उत्पाद का नहीं, किसी पुस्तकालय का है।
            किसी ऐप का नहीं, किसी संस्था का।
            किसी स्क्रीन का नहीं — एक पाण्डुलिपि का।
          </p>
        </div>
        <div className="ms-silence-block ms-silence-block--tall" />
        <div className="ms-colophon">
          <span className="ms-colophon-mark">—</span>
          <span className="ms-colophon-text">अंशांकन पूर्ण · Calibration Complete</span>
          <span className="ms-colophon-mark">—</span>
        </div>
        <div className="ms-silence-block ms-silence-block--medium" />
      </section>

    </div>
  );
}
