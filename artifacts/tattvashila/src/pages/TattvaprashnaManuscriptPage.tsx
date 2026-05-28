import { Link } from "wouter";
import Reveal from "../components/Reveal";
import { PageLayout } from "../layouts";
import { usePageMeta } from "../hooks/usePageMeta";

export default function TattvaprashnaManuscriptPage() {
  usePageMeta({
    title: "तत्त्वप्रश्न — हिंदी पठन · Tattvashila",
    description:
      "तत्त्वप्रश्न — मानव स्वतंत्रता, व्यवस्था और उत्तरदायित्व पर एक विवेचनात्मक ग्रंथ। Vikram A. Mitra।",
  });

  return (
    <PageLayout testId="tattvaprashna-manuscript">

      <div className="ms-reading-surface">
        <div className="ms-reading-col">

          {/* ── Reading Navigation ── */}
          <nav className="ms-reading-nav" aria-label="Manuscript navigation">
            <Link
              href="/granthalaya/tattvaprashna"
              className="ms-reading-nav-link"
            >
              <span aria-hidden>←</span>
              <span>वापस जाएँ</span>
            </Link>
          </nav>

          {/* ════════════════════════════════════
              SECTION: प्रकाशन सूचना (Copyright)
          ════════════════════════════════════ */}
          <Reveal>
            <section
              aria-label="Publication notice"
              className="ms-copyright-section"
            >
              <span className="ms-copyright-line--roman">
                © 2026 Vikram A. Mitra
              </span>

              <span className="ms-copyright-gap" />

              <span className="ms-copyright-line--em">सर्वाधिकार सुरक्षित।</span>

              <span className="ms-copyright-gap" />

              <span className="ms-copyright-line">
                यह ग्रंथ लेखक की मौलिक वैचारिक रचना है।
              </span>
              <span className="ms-copyright-line">
                इसका कोई भी अंश — पूर्णतः या आंशिक रूप में —
              </span>
              <span className="ms-copyright-line">
                लेखक की पूर्व अनुमति के बिना
              </span>
              <span className="ms-copyright-line">
                किसी भी माध्यम में पुनः प्रकाशित,
              </span>
              <span className="ms-copyright-line">
                अनुवादित या वितरित नहीं किया जा सकता।
              </span>

              <span className="ms-copyright-gap" />

              <span className="ms-copyright-line">
                यह ग्रंथ
              </span>
              <span className="ms-copyright-line">
                मानव स्वतंत्रता, व्यवस्था और उत्तरदायित्व
              </span>
              <span className="ms-copyright-line">
                से जुड़े दार्शनिक प्रश्नों पर
              </span>
              <span className="ms-copyright-line">
                चिंतन हेतु लिखा गया है।
              </span>
              <span className="ms-copyright-line">
                इसमें प्रस्तुत विचार
              </span>
              <span className="ms-copyright-line">
                लेखक के वैचारिक अध्ययन और मनन का परिणाम हैं।
              </span>

              <span className="ms-copyright-gap" />

              <span className="ms-copyright-line">
                यह ग्रंथ
              </span>
              <span className="ms-copyright-line">
                किसी धार्मिक, राजनीतिक या वैधानिक निर्देश के रूप में नहीं,
              </span>
              <span className="ms-copyright-line">
                बल्कि विवेक और आत्म-चिंतन के माध्यम के रूप में प्रस्तुत है।
              </span>

              <span className="ms-copyright-gap" />

              <span className="ms-copyright-line">
                पाठक से अपेक्षा है कि वे इन विचारों को
              </span>
              <span className="ms-copyright-line">
                स्वतंत्र विवेक और आत्मबोध के साथ ग्रहण करें।
              </span>

              <span className="ms-copyright-gap" />

              <span className="ms-copyright-line">
                प्रथम प्रकाशन : 2026
              </span>
              <span className="ms-copyright-line">
                भाषा : हिन्दी
              </span>
              <span className="ms-copyright-line">
                लेखक : Vikram A. Mitra
              </span>

              <span className="ms-copyright-gap" />

              <span className="ms-copyright-line--roman" style={{ fontStyle: "italic", opacity: 0.6 }}>
                Private reading only
              </span>
            </section>
          </Reveal>

          <div className="ms-rule-full" />

          {/* ════════════════════════════════════
              SILENCE
          ════════════════════════════════════ */}
          <div className="ms-silence-md" />

          {/* ════════════════════════════════════
              SECTION: भूमिका — लेखक का कथन
          ════════════════════════════════════ */}
          <Reveal>
            <section
              aria-label="लेखक का कथन"
              data-testid="tattvaprashna-lekha"
            >
              <p className="ms-section-heading">लेखक का कथन</p>

              <div className="ms-prose-deva-center">

                <p>
                  यह ग्रंथ<br />
                  किसी उत्तर को स्थापित करने के लिए नहीं,<br />
                  बल्कि प्रश्नों को उनके मूल तक ले जाने के लिए लिखा गया है।
                </p>

                <p>
                  "तत्त्वप्रश्न"<br />
                  मानव स्वतंत्रता, व्यवस्था और उत्तरदायित्व —<br />
                  इन तीन के बीच स्थित उस मौन क्षेत्र का अन्वेषण है<br />
                  जहाँ निर्णय जन्म लेते हैं<br />
                  और उनके परिणाम समाज का रूप लेते हैं।
                </p>

                <p>
                  यह रचना<br />
                  न तो उपदेश है,<br />
                  न ही सिद्धांत का संग्रह।<br />
                  यह एक वैचारिक आमंत्रण है — स्वयं से प्रश्न करने का,<br />
                  और उत्तरदायित्व के भार को समझने का।
                </p>

                <p>
                  आधुनिक युग में स्वतंत्रता को उत्तरदायित्व से रहित,<br />
                  सीमा-उल्लंघन की स्वीकृति के रूप में समझा जाने लगा है।<br />
                  यह ग्रंथ उस धारणा को चुनौती देता है, और यह पूछता है कि<br />
                  क्या स्वतंत्रता बिना संरचना के वास्तव में मुक्ति दे सकती है?
                </p>

                <p>
                  यदि यह ग्रंथ पाठक के भीतर<br />
                  एक भी ईमानदार प्रश्न जगा सके,<br />
                  तो इसका उद्देश्य पूर्ण माना जाएगा।
                </p>

                <p>
                  यह ग्रंथ<br />
                  यात्रा का अंत नहीं,<br />
                  बल्कि तत्त्वग्रंथ शृंखला की<br />
                  एक आरंभिक देहली है।
                </p>

              </div>

              <p className="ms-signoff">— Vikram A. Mitra —</p>

            </section>
          </Reveal>

          {/* ════════════════════════════════════
              SILENCE
          ════════════════════════════════════ */}
          <div className="ms-silence-lg" />
          <div className="ms-rule-full" />

          {/* ════════════════════════════════════
              SECTION: अनुक्रमणिका
          ════════════════════════════════════ */}
          <Reveal>
            <section
              aria-label="अनुक्रमणिका"
              data-testid="tattvaprashna-anukramanika"
              className="ms-anukramanika-section"
            >
              <p className="ms-section-heading">अनुक्रमणिका</p>

              <ol className="ms-anukramanika-list">
                <li className="ms-anukramanika-item">
                  भूमिका
                </li>
                <li className="ms-anukramanika-item">
                  अध्याय 1 — मनुष्य क्या है?
                </li>
                <li className="ms-anukramanika-item">
                  अध्याय 2 — ऋत और धर्म का भेद
                </li>
                <li className="ms-anukramanika-item">
                  अध्याय 3 — स्वतंत्रता और उसकी क़ीमत
                </li>
                <li className="ms-anukramanika-item">
                  अध्याय 4 — मानवता को व्यवस्था की आवश्यकता क्यों है?
                </li>
                <li className="ms-anukramanika-item">
                  अध्याय 5 — मनुष्य होने का भार
                </li>
                <li className="ms-anukramanika-item">
                  लेखकीय वक्तव्य — उपसंहार
                </li>
              </ol>

            </section>
          </Reveal>

          <div className="ms-rule-full" />

          {/* ════════════════════════════════════
              SILENCE
          ════════════════════════════════════ */}
          <div className="ms-silence-lg" />

          {/* ════════════════════════════════════
              SECTION: अध्याय 1
              Controlled activation — full first arc.
              Source: canon/tattvaprashna-source-of-truth.md
              Confirmed: PDFs Tattvaprashna_1779906308414.pdf
                         and Tattvaprashna_1779929348057.pdf
              Rendered through para 10 (उत्तरदायित्व आरोपित होता है।)
              Chapter continues beyond this section.
          ════════════════════════════════════ */}
          <Reveal>
            <section
              aria-label="अध्याय 1 — मनुष्य क्या है?"
              data-testid="tattvaprashna-chapter1"
              className="ms-chapter-opening-section"
            >

              <p className="ms-chapter-num">अध्याय १</p>
              <h2 className="ms-chapter-title-deva">मनुष्य क्या है?</h2>
              <div className="ms-chapter-rule-line" />

              {/* Para 1 — Opening frame */}
              <p className="ms-prose-deva-para">
                किसी भी सभ्यता के लिए स्वतंत्रता की बात करने से पहले यह समझना
                आवश्यक है कि वास्तव में स्वतंत्र कौन है। अधिकार की चर्चा से
                पहले यह होना चाहिए कि उत्तरदायित्व का भार किस पर है। और
                प्रगति की आकांक्षा रखने से पहले यह निश्चित करना अनिवार्य है
                कि "मनुष्य" होने का अर्थ क्या है।
              </p>

              {/* Para 2 */}
              <p className="ms-prose-deva-para">
                यह कोई काव्यात्मक प्रश्न नहीं है। यह एक मूलभूत प्रश्न है।
              </p>

              {/* Para 3 */}
              <p className="ms-prose-deva-para">
                नैतिकता, समाज, इच्छा, सत्ता, अनुशासन और पतन — इन सभी क्षेत्रों
                में जो भ्रम दिखाई देता है, उसका मूल कारण यह है। यदि मनुष्य की
                परिभाषा अस्पष्ट हो, तो आगे उत्पन्न होने वाला प्रत्येक निष्कर्ष
                भी भ्रमित होगा।
              </p>

              {/* Para 4 — Modern thought critique */}
              <p className="ms-prose-deva-para">
                आधुनिक चिंतन प्रायः शरीर से आरंभ करता है। वह इंद्रियों, मस्तिष्क,
                व्यवहार, आनुवंशिकता और अनुकूलन का अध्ययन करता है, और फिर मनुष्य
                को पशु के अवलोकन के विस्तार के रूप में समझाने का प्रयास करता है।
                यह पद्धति ऊपर से वैज्ञानिक प्रतीत होती है, किन्तु भीतर ही भीतर
                एक गहरी भूल कर बैठती है। यह यह मान लेती है कि रूप की समानता,
                अस्तित्व की समानता है।
              </p>

              {/* Para 5 — Form does not determine responsibility */}
              <p className="ms-prose-deva-para">
                किन्तु रूप कभी भी उत्तरदायित्व का मापदंड नहीं रहा। एक बालक और
                एक प्रौढ़ का शरीर समान हो सकता है, पर दोनों से समान
                उत्तरदायित्व की अपेक्षा नहीं की जाती। एक औज़ार और एक शस्त्र
                एक ही धातु से निर्मित हो सकते हैं, पर नैतिक दायित्व केवल शस्त्र
                से जुड़ा होता है। केवल संरचना से उत्तरदायित्व निर्धारित नहीं होता।
              </p>

              {/* Para 6 — Intelligence measures capacity, not duty */}
              <p className="ms-prose-deva-para">
                यदि मनुष्य केवल एक उन्नत पशु मात्र होता, तो बुद्धि से सब कुछ
                समझाया जा सकता था। किन्तु बुद्धि क्षमता को मापती है, दायित्व
                को नहीं। पशु भी सीखते हैं, सहयोग करते हैं, अपनी संतति के लिए
                त्याग करते हैं, इच्छा को सीमित करते हैं, और कभी-कभी अद्भुत
                सामंजस्य भी दिखाते हैं। इन तथ्यों से इंकार नहीं है। किन्तु वहाँ
                एक निर्णायक तत्व अनुपस्थित है।
              </p>

              {/* Para 7 — Anaphoric declaration on animal accountability */}
              <p className="ms-prose-deva-lines">
                किसी पशु को नैतिक रूप से उत्तरदायी नहीं ठहराया जाता।<br />
                किसी पशु को अन्याय के लिए दोषी नहीं माना जाता।<br />
                किसी पशु पर अपराधबोध, विधि, पश्चाताप या अजनबियों के प्रति
                कर्तव्य का भार नहीं डाला जाता।<br />
                किसी पशु से यह अपेक्षा नहीं की जाती कि वह अपने कर्म को
                "क्या होना चाहिए था" के प्रकाश में उचित ठहराए।<br />
                पशु व्यवस्था के भीतर जीते हैं, पर उस व्यवस्था के लिए
                उत्तरदायी नहीं होते।<br />
                यही सीमा है।
              </p>

              {/* Para 8 — ऋत and धर्म */}
              <p className="ms-prose-deva-para">
                पशु ऋत के भीतर अस्तित्व में रहते हैं — वह प्राकृतिक व्यवस्था
                जो वृत्ति, ऋतु, जीवन-रक्षा और जातिगत व्यवहार को संचालित करती
                है। मनुष्य धर्म के अधीन जन्म लेता है — एक ऐसा नैतिक दायित्व
                जो वृत्ति से उत्पन्न नहीं होता, बल्कि उससे ऊपर खड़ा होता है।
              </p>

              <p className="ms-prose-deva-lines">
                ऋत यह बताता है कि क्या घटित होता है।<br />
                धर्म यह माँग करता है कि क्या बनाए रखा जाना चाहिए।
              </p>

              {/* Para 9 — The moment of crossing */}
              <p className="ms-prose-deva-para">
                जिस क्षण किसी प्राणी से यह अपेक्षा की जाती है कि वह सिद्धांत
                के कारण इच्छा को रोके, दोष स्वीकार करे, अपने कर्म का औचित्य
                प्रस्तुत करे, स्वार्थ से परे जाकर संरक्षण दे, और परिणाम से नहीं
                बल्कि अंतरात्मा से उत्तर दे — उस क्षण वह एक भिन्न कोटि में
                प्रवेश करता है।
              </p>

              <p className="ms-prose-deva-para">
                यह कोटि न तो शिक्षा से प्राप्त होती है, न प्रशिक्षण से, और
                न ही क्रमिक विकास से। न बुद्धि और न अनुकूलन इस सीमा को
                पार कराते हैं।
              </p>

              {/* Para 10 — Closing declaration */}
              <p className="ms-prose-deva-lines">
                उत्तरदायित्व कोई जैविक गुण नहीं है।<br />
                यह भाषा की भाँति सीखा नहीं जाता।<br />
                यह उत्क्रांति द्वारा अर्जित नहीं होता।<br />
                उत्तरदायित्व आरोपित होता है।
              </p>

              <p className="ms-chapter-continues">· · ·</p>

            </section>
          </Reveal>

          {/* ════════════════════════════════════
              READING FOOTER
          ════════════════════════════════════ */}
          <Reveal delay={0.04}>
            <footer className="ms-reading-footer" aria-label="Reading navigation">

              <Link
                href="/granthalaya/tattvaprashna"
                className="ms-reading-nav-link"
              >
                <span aria-hidden>←</span>
                <span>भाषा चयन पर लौटें</span>
              </Link>

              <Link
                href="/granthalaya"
                className="ms-reading-nav-link"
              >
                <span>Granthālaya</span>
              </Link>

            </footer>
          </Reveal>

        </div>
      </div>

    </PageLayout>
  );
}
