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

              {/* ─── Canonical section break (---) between the declaration
                  and the Sanatan tradition movement ─── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement A — Sanatan tradition's account of human origin
                  Source: canon/tattvaprashna-source-of-truth.md, lines 297–338
                  Confirmed: first PDF extraction + OCR reconstruction notes
              ══════════════════════════════════════ */}

              {/* Block 11 — Sanatan opening */}
              <p className="ms-prose-deva-para">
                इसी कारण सनातन परंपरा मनुष्य को ऐसा पशु नहीं मानती जिसने
                बाद में नैतिकता सीखी हो। वह चेतन वंश की बात करती है।
              </p>

              {/* Block 12 — Manu Svayambhuva */}
              <p className="ms-prose-deva-para">
                सृष्टि के प्रथम प्रकट सिद्धांत के अनुसार: ब्रह्मा से मनु
                स्वायंभुव उत्पन्न होते हैं — उनके प्रिय पुत्र — जिन्हें
                मानवीय व्यवस्था का दायित्व सौंपा गया।
              </p>

              {/* Block 13 */}
              <p className="ms-prose-deva-para">
                मनु कोई प्रतीक मात्र नहीं हैं, न ही कोई काव्यात्मक कल्पना।
                उन्हें प्रथम मानव जनक, धर्म के वहनकर्ता और मानवीय विधि व
                सामाजिक निरंतरता के आरंभकर्ता के रूप में बताया गया है।
              </p>

              {/* Block 14 */}
              <p className="ms-prose-deva-para">
                किन्तु ग्रन्थ यह भी स्पष्ट करते हैं कि मनु अकेले मानव
                संसार की स्थापना नहीं कर सकते।
              </p>

              {/* Block 15 — Shatarupa */}
              <p className="ms-prose-deva-para">
                इसी कारण शतरूपा का प्रादुर्भाव होता है — प्रथम स्त्री का —
                जो मनु के साथ मानवीय संयोग का सूत्र धारण करती है।
              </p>

              {/* Block 16 — Not biological, but dharmic */}
              <p className="ms-prose-deva-lines">
                यह कोई जैव गुणन नहीं है।<br />
                यह धार्मिक निरंतरता की स्थापना है।
              </p>

              {/* Block 17 — Manudharm: the essence */}
              <p className="ms-prose-deva-para">
                मनुधर्म का सार यह है कि मनुष्य को पशुता से ऊपर उठाया
                जाए — आहार, निद्रा, भय, मैथुन — इनसे परे। पर वह परे
                जाना वैराग्य नहीं है। वह नियंत्रित, उद्देश्यपूर्ण,
                उत्तरदायी जीवन है।
              </p>

              {/* Block 18 — Manudharm does not punish instinct */}
              <p className="ms-prose-deva-lines">
                इसी कारण मनुधर्म वृत्ति को दंडित नहीं करता।<br />
                वह उसे सीमाएँ देता है।
              </p>

              {/* Block 19 — Lineage chain: structural notation */}
              <p className="ms-lineage-chain">
                ब्रह्मा → मनु स्वायंभुव → शतरूपा → वंश परंपरा
              </p>

              {/* Block 20 — Closing of this movement */}
              <p className="ms-prose-deva-para">
                इस प्रकार सनातन ग्रन्थ मानवता की उत्पत्ति को केवल
                जीव-विज्ञान की घटना के रूप में नहीं समझाते, बल्कि एक
                नैतिक और आध्यात्मिक व्यवस्था की अभिव्यक्ति के रूप में।
              </p>

              {/* ══════════════════════════════════════
                  Movement B — Dharmic designation
                  Spiritual appointment; moral nature.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 341–380
                  Rendering through the first-truth declaration.
                  Closing reflective movement (lines 384–407) deferred.
              ══════════════════════════════════════ */}

              {/* Architectural silence — between movements, reflecting source --- */}
              <div className="ms-silence-lg" />

              {/* Block 21 — Human as dharmic bearer */}
              <p className="ms-prose-deva-lines">
                मनुष्य होना जन्म से प्रदत्त है,<br />
                क्योंकि मनुष्य धर्म को वहन करने में सक्षम होता है।<br />
                यह तार्किक उपस्थिति नहीं है,<br />
                बल्कि आध्यात्मिक नियुक्ति है।
              </p>

              {/* Block 22 — Dharma arrives with birth */}
              <p className="ms-prose-deva-lines">
                धर्म का दायित्व जन्म के साथ आता है,<br />
                यह सीखने से प्राप्त नहीं होता।
              </p>

              {/* Block 23 — Sanatan texts on dharmic identity */}
              <p className="ms-prose-deva-para">
                इसी कारण सनातन ग्रन्थ मानव होने की क्षमता को
                जैविक वृत्ति से नहीं जोड़ते — वे उसे धार्मिक
                पहचान से जोड़ते हैं।
              </p>

              {/* Silence — source --- between the two sub-movements */}
              <div className="ms-silence-md" />

              {/* Block 24 — The meaning of being human */}
              <p className="ms-prose-deva-lines">
                मनुष्य होने का अर्थ<br />
                केवल जीवन का जीव-धारक होना नहीं है।<br />
                इसका अर्थ है —<br />
                धर्म को जाँचने की शक्ति रखना।
              </p>

              {/* Block 25a — Expectation on those who hold this power */}
              <p className="ms-prose-deva-lines">
                जो इस शक्ति से संपन्न हैं,<br />
                उनसे इसके उपयोग की अपेक्षा की जाती है।
              </p>

              {/* Block 25b — Not a privilege */}
              <p className="ms-prose-deva-lines">
                यह एक विशेषाधिकार नहीं है<br />
                जिसे त्यागा और भुलाया जा सके।<br />
                यह एक दायित्व है जिसे स्वीकार करना है।
              </p>

              {/* Silence before the formal declaration */}
              <div className="ms-silence-sm" />

              {/* Block 26a — Formal declaration prefix */}
              <p className="ms-prose-deva-para">
                अतः मनुष्य होने का प्रथम तथ्य यह है:
              </p>

              {/* Block 26b — The first truth */}
              <p className="ms-prose-deva-lines">
                मनुष्य एक नैतिक प्राणी है।<br />
                न इसलिए कि वह ऐसा चाहता है,<br />
                बल्कि इसलिए कि उसकी स्वतंत्रता<br />
                उसे इससे मुक्त नहीं होने देती।
              </p>

              {/* ══════════════════════════════════════
                  Movement C — Closing reflective movement
                  The perpetual question; the chapter's final arc.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 384–407
                  This completes अध्याय १.
              ══════════════════════════════════════ */}

              {/* Architectural silence — between the first-truth declaration and closing reflection */}
              <div className="ms-silence-lg" />

              {/* Block 27a — The perpetual question */}
              <p className="ms-prose-deva-lines">
                यह पूछना कि 'मनुष्य क्या है' —<br />
                यह कोई ऐतिहासिक जिज्ञासा नहीं है।<br />
                यह एक निरंतर जिज्ञासा है<br />
                जो प्रत्येक पीढ़ी पूछने के लिए विवश है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block 27b — Anaphoric consequence sequence */}
              <p className="ms-prose-deva-lines">
                और जब तक यह उत्तर नहीं मिलता,<br />
                तब तक जो भी निर्णय लिए जाएँ —<br />
                चाहे वे स्वतंत्रता के बारे में हों,<br />
                चाहे शासन के बारे में,<br />
                चाहे शिक्षा के बारे में —<br />
                वे सभी अपूर्ण होंगे।
              </p>

              <div className="ms-silence-sm" />

              {/* Block 27c — The question demands an answer */}
              <p className="ms-prose-deva-lines">
                यह प्रश्न अधूरा नहीं रहता।<br />
                यह उत्तर माँगता है।<br />
                और वह उत्तर पाने की ओर बढ़ने का उपकरण है —<br />
                धर्म, व्यवस्था और उत्तरदायित्व।
              </p>

              <div className="ms-silence-sm" />

              {/* Block 27d — The chapter's self-declaration */}
              <p className="ms-prose-deva-lines">
                तत्त्वप्रश्न का यह आरंभ —<br />
                एक प्रश्न के साथ —<br />
                इसीलिए।
              </p>

              {/* Silence before the terminal question */}
              <div className="ms-silence-md" />

              {/* Block 27e — The terminal question; chapter close */}
              <p className="ms-prose-deva-center">
                मनुष्य क्या है?
              </p>

              {/* Chapter-end architecture */}
              <div className="ms-silence-lg" />
              <hr className="ms-rule-full" />
              <div className="ms-silence-lg" />

            </section>
          </Reveal>

          {/* ════════════════════════════════════
              SECTION: अध्याय 2
              Controlled activation — opening movement only.
              Source: canon/tattvaprashna-source-of-truth.md, lines 409–458
              Rendered through the ऋत boundary statement.
              Chapter continues beyond this section.
          ════════════════════════════════════ */}
          <Reveal delay={0.02}>
            <section
              aria-label="अध्याय 2 — ऋत और धर्म का भेद"
              data-testid="tattvaprashna-chapter2"
              className="ms-chapter-opening-section"
            >

              <p className="ms-chapter-num">अध्याय २</p>
              <h2 className="ms-chapter-title-deva">ऋत और धर्म का भेद</h2>
              <p className="ms-chapter-subtitle-deva">अस्तित्व की दो व्यवस्थाएँ</p>
              <div className="ms-chapter-rule-line" />

              {/* ══════════════════════════════════════
                  Movement A — ऋत: the cosmic order
                  Definition, enumeration, negation.
                  Source: lines 415–441
              ══════════════════════════════════════ */}

              {/* Block C1 — Opening: the universe is not accidental */}
              <p className="ms-prose-deva-lines">
                यह ब्रह्मांड किसी आकस्मिकता से संचालित नहीं होता।<br />
                ऋतुएँ आती हैं,<br />
                नक्षत्र अपने निश्चित मार्ग पर चलते हैं,<br />
                शरीर स्वयं को पुनः स्थापित करता है,<br />
                जातियाँ आगे बढ़ती हैं,<br />
                और जीवन कुछ ऐसे नियमों के अंतर्गत निरंतर चलता रहता है<br />
                जो किसी से अनुमति नहीं माँगते।
              </p>

              <div className="ms-silence-sm" />

              {/* Block C2 — This regularity is not morality; it is order */}
              <p className="ms-prose-deva-lines">
                यह अंत-निहित नियमितता नैतिकता नहीं है।<br />
                यह व्यवस्था है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block C3 — Sanatan thought names it ऋत */}
              <p className="ms-prose-deva-para">
                सनातन चिंतन इस व्यवस्था को ऋत कहता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block C4 — Definition of ऋत with enumeration */}
              <p className="ms-prose-deva-lines">
                ऋत प्रकृति की वह संरचना है<br />
                जिसके अनुसार वस्तुएँ तब गतिमान होती हैं<br />
                जब उन्हें उनके हाल पर छोड़ दिया जाए।<br />
                सूर्य का उदय,<br />
                वर्षा का होना,<br />
                पशु की वृत्तियाँ,<br />
                जन्म और मृत्यु का चक्र —<br />
                ये सभी ऋत के अंतर्गत आते हैं।
              </p>

              <div className="ms-silence-sm" />

              {/* Block C5 — ऋत's three negations */}
              <p className="ms-prose-deva-lines">
                ऋत विचार नहीं करता,<br />
                निर्णय नहीं करता,<br />
                क्षमा नहीं करता।<br />
                वह केवल कार्य करता है।
              </p>

              {/* Architectural silence — source --- between sub-movements */}
              <div className="ms-silence-lg" />

              {/* Block C6 — Animals exist wholly within ऋत */}
              <p className="ms-prose-deva-para">
                पशु पूर्णतः ऋत के भीतर ही जीवन जीते हैं।
                उनका जीवन वृत्ति, पर्यावरण और वंशानुगत प्रतिरूप
                द्वारा आकार लेता है।
              </p>

              {/* Block C7 — Animal acts: no moral conflict */}
              <p className="ms-prose-deva-lines">
                जब कोई पशु हिंसा करता है,<br />
                संगम करता है,<br />
                त्याग करता है,<br />
                परित्याग करता है,<br />
                रक्षा करता है<br />
                या बलिदान देता है,<br />
                तो उसमें कोई नैतिक संघर्ष नहीं होता।<br />
                उससे प्रकृति की अपेक्षा से अधिक कुछ नहीं माँगा जाता।
              </p>

              <div className="ms-silence-sm" />

              {/* Block C8 — No animal can violate ऋत */}
              <p className="ms-prose-deva-lines">
                कोई पशु ऋत का उल्लंघन नहीं कर सकता,<br />
                क्योंकि उसके पास उससे बाहर जाने की क्षमता नहीं होती।
              </p>

              <div className="ms-silence-sm" />

              {/* Block C9 — But the human is not left within this boundary */}
              <p className="ms-prose-deva-para">
                किन्तु मनुष्य को इस प्राकृतिक परिधि में छोड़ नहीं दिया गया है।
              </p>

              {/* ══════════════════════════════════════
                  Movement B — धर्म's entry; the moral distinction
                  Source: canon/tattvaprashna-source-of-truth.md, lines 461–504
                  Rendering through the self-governance declaration.
                  Remaining chapter movements deferred.
              ══════════════════════════════════════ */}

              {/* Architectural silence — source --- between movements */}
              <div className="ms-silence-lg" />

              {/* Block D1 — धर्म's entry: the moment moral responsibility appears */}
              <p className="ms-prose-deva-lines">
                जिस क्षण नैतिक उत्तरदायित्व प्रकट होता है,<br />
                उसी क्षण केवल ऋत पर्याप्त नहीं रह जाता।<br />
                यह धर्म का प्रवेश होता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block D2 — Definition pair: description vs. demand */}
              <p className="ms-prose-deva-lines">
                धर्म उस बात का विवरण नहीं है जो घटित होती है।<br />
                धर्म उस बात की माँग है जिसे बनाए रखा जाना चाहिए।
              </p>

              <div className="ms-silence-sm" />

              {/* Block D3 — Contrast structure: ऋत vs. धर्म (जहाँ…वहाँ x2) */}
              <p className="ms-prose-deva-lines">
                जहाँ ऋत प्रकृति का संचालन करता है,<br />
                वहाँ धर्म आचरण को संचालित करता है।<br />
                जहाँ ऋत स्वतः संतुलन बनाए रखता है,<br />
                वहाँ धर्म चयन की अपेक्षा करता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block D4 — ऋत cannot be broken; धर्म can be violated */}
              <p className="ms-prose-deva-lines">
                ऋत को तोड़ा नहीं जा सकता,<br />
                पर धर्म का उल्लंघन संभव है —<br />
                और इसी कारण उसका संरक्षण आवश्यक हो जाता है।
              </p>

              {/* Architectural silence — source --- between sub-movements */}
              <div className="ms-silence-lg" />

              {/* Block D5 — This distinction is not philosophical ornament */}
              <p className="ms-prose-deva-para">
                यह भेद कोई दार्शनिक सजावट नहीं है।
                यही कारण है कि नैतिकता के अभाव में
                मानवीय जीवन खतरनाक बन जाता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block D6 — When the human tries to live only by ऋत */}
              <p className="ms-prose-deva-lines">
                जब मनुष्य केवल ऋत के अनुसार जीने का प्रयास करता है —<br />
                केवल वृत्ति, लाभ, भूख, इच्छा और अस्तित्व के आधार पर —<br />
                तो वह निर्दोषता की ओर नहीं लौटता।<br />
                वह संघर्ष में उतर जाता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block D7 — What works in the animal becomes destructive in the human */}
              <p className="ms-prose-deva-lines">
                जो पशु में सहज रूप से कार्य करता है,<br />
                वही मनुष्य में विनाशकारी बन जाता है,<br />
                क्योंकि मनुष्य के पास शक्ति होती है,<br />
                पर वृत्तिजन्य सीमाएँ नहीं।
              </p>

              <div className="ms-silence-sm" />

              {/* Block D8 — The three amplifications; धर्म's necessity */}
              <p className="ms-prose-deva-lines">
                बुद्धि इच्छा को बढ़ा देती है।<br />
                स्मृति द्वेष को लंबा कर देती है।<br />
                तकनीक वृत्ति को अनेक गुना बढ़ा देती है।<br />
                धर्म के बिना, ऋत मनुष्य के हाथ में हिंसक हो जाता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block D9 — Nature does not govern the human; the human must govern himself */}
              <p className="ms-prose-deva-lines">
                प्रकृति मनुष्य को नियंत्रित नहीं करती।<br />
                मनुष्य को स्वयं को नियंत्रित करना पड़ता है।
              </p>

              {/* ══════════════════════════════════════
                  Movement C — Morality, freedom, धर्म as alignment
                  Source: canon/tattvaprashna-source-of-truth.md, lines 506–551
                  Rendering through the three-beat consequence triad.
                  Modern confusion passage (lines 553–619) deferred.
              ══════════════════════════════════════ */}

              {/* Architectural silence — source --- between movements */}
              <div className="ms-silence-lg" />

              {/* Block D10 — Morality exists only where freedom exists */}
              <p className="ms-prose-deva-lines">
                इसी कारण नैतिकता प्रकृति में नहीं होती।<br />
                वह केवल वहाँ होती है जहाँ स्वतंत्रता होती है।<br />
                नदी को नीति की आवश्यकता नहीं होती।<br />
                शिकारी को विधि की आवश्यकता नहीं होती।<br />
                परन्तु मनुष्य, जो वृत्ति के विरुद्ध चयन कर सकता है,<br />
                उसे वृत्ति से ऊपर किसी मानक की आवश्यकता होती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block D11 — That standard is dharma */}
              <p className="ms-prose-deva-lines">
                वही मानक धर्म है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block D12 — What dharma actually is */}
              <p className="ms-prose-deva-para">
                धर्म को प्रायः परंपरा, अनुष्ठान या विश्वास के रूप में समझ
                लिया जाता है। वास्तव में धर्म स्वतंत्रता और उत्तरदायित्व
                के बीच का संरेखण है। वह सिद्धांत जो यह सुनिश्चित करता है
                कि शक्ति शिकार में न बदले और स्वतंत्रता अराजकता में न
                बदल जाए।
              </p>

              <div className="ms-silence-sm" />

              {/* Block D13 — Living by dharma is not denial of nature */}
              <p className="ms-prose-deva-lines">
                धर्म के अनुसार जीने का अर्थ प्रकृति का निषेध करना नहीं है।<br />
                इसका अर्थ है —<br />
                प्रकृति के भीतर स्वयं का शासन करना।
              </p>

              {/* Architectural silence — source --- between sub-movements */}
              <div className="ms-silence-lg" />

              {/* Block D14 — ऋत operates independently of human conduct */}
              <p className="ms-prose-deva-lines">
                ऋत मनुष्य के आचरण से स्वतंत्र रूप से कार्य करता रहता है।<br />
                सूर्य धर्म और अधर्म दोनों के लिए समान रूप से उदित होता है।<br />
                प्रकृति न सद्गुण को पुरस्कार देती है,<br />
                न क्रूरता को दंडित करती है।<br />
                यह उत्तरदायित्व पूर्णतः मानवीय क्षेत्र का है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block D15 — Where dharma is absent, order collapses */}
              <p className="ms-prose-deva-lines">
                जहाँ धर्म अनुपस्थित होता है,<br />
                वहाँ व्यवस्था ढह जाती है,<br />
                भले ही प्रकृति चलती रहती हो।
              </p>

              <div className="ms-silence-sm" />

              {/* Block D16 — Societies disintegrate when human restraint fails */}
              <p className="ms-prose-deva-lines">
                इसी कारण समाज तब विघटित होते हैं<br />
                जब प्रकृति विफल होती है — ऐसा नहीं —<br />
                बल्कि तब, जब मानवीय संयम विफल हो जाता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block D17 — Three-beat consequence triad */}
              <p className="ms-prose-deva-lines">
                जब इच्छा दायित्व के बिना संचालित होती है,<br />
                संबंध टूटते हैं।<br />
                जब शक्ति उत्तरदायित्व के बिना प्रयोग होती है,<br />
                हिंसा फैलती है।<br />
                जब स्वतंत्रता बिना मूल्य चुकाए माँगी जाती है,<br />
                उत्तरदायित्व लुप्त हो जाता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block D18 — None of these violate ऋत; all violate धर्म */}
              <p className="ms-prose-deva-lines">
                इनमें से कोई भी ऋत का उल्लंघन नहीं है।<br />
                ये सभी धर्म का उल्लंघन हैं।
              </p>

              {/* ══════════════════════════════════════
                  Movement D — Modern confusion; dharma's necessity; Sanatan placement
                  Source: canon/tattvaprashna-source-of-truth.md, lines 553–619
                  This movement closes अध्याय २.
              ══════════════════════════════════════ */}

              {/* Architectural silence — source --- between movements */}
              <div className="ms-silence-lg" />

              {/* Block E1 — Modern life's confusion: ऋत treated as sufficient */}
              <p className="ms-prose-deva-para">
                आधुनिक जीवन का भ्रम इसी से उत्पन्न होता है कि ऋत को
                मनुष्य के लिए पर्याप्त मान लिया जाता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block E2 — The three slogans and their limit */}
              <p className="ms-prose-deva-lines">
                "प्रकृति का अनुसरण करो",<br />
                "स्वयं बनो",<br />
                "जो ठीक लगे वही करो" —<br />
                ये वाक्य तब तक निर्दोष प्रतीत होते हैं,<br />
                जब तक शक्ति का प्रवेश नहीं करती।
              </p>

              <div className="ms-silence-sm" />

              {/* Block E3 — Three negations: instinct, desire, existence */}
              <p className="ms-prose-deva-lines">
                वृत्ति न्याय को नहीं जानती।<br />
                इच्छा गरिमा को नहीं पहचानती।<br />
                अस्तित्व दुर्बल की रक्षा नहीं करता।
              </p>

              {/* Silence before the isolated declaration */}
              <div className="ms-silence-md" />

              {/* Block E4 — Isolated: only dharma does */}
              <p className="ms-prose-deva-lines">
                केवल धर्म करता है।
              </p>

              <div className="ms-silence-md" />

              {/* Block E5 — Why dharma exists */}
              <p className="ms-prose-deva-lines">
                धर्म इसलिए अस्तित्व में है<br />
                क्योंकि मनुष्य गलत चयन कर सकता है।<br />
                उसका उद्देश्य स्वतंत्रता को दबाना नहीं,<br />
                बल्कि उसे जीवित रखना है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block E6 — Dharma is not optional */}
              <p className="ms-prose-deva-lines">
                इसी कारण धर्म वैकल्पिक नहीं है।<br />
                वह वह शर्त है जिसके अंतर्गत<br />
                मानवीय स्वतंत्रता स्वयं को नष्ट किए बिना बनी रह सकती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block E7 — Two consequences: society and individual */}
              <p className="ms-prose-deva-lines">
                जो समाज धर्म को त्याग देता है,<br />
                वह मुक्त नहीं होता — वह अस्थिर हो जाता है।<br />
                जो मनुष्य धर्म को अस्वीकार करता है,<br />
                वह प्रामाणिक नहीं बनता —<br />
                वह स्वयं के लिए और दूसरों के लिए खतरनाक बन जाता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block E8 — The chapter's philosophical summary */}
              <p className="ms-prose-deva-lines">
                ऋत सृष्टि को गतिमान रखता है।<br />
                धर्म मानवता को स्वयं को नष्ट करने से रोकता है।
              </p>

              {/* Architectural silence — source --- between sub-movements */}
              <div className="ms-silence-lg" />

              {/* Block E9 — Sanatan placement: neither against nor dissolved in nature */}
              <p className="ms-prose-deva-lines">
                इसलिए सनातन परंपरा<br />
                न तो मनुष्य को प्रकृति के विरुद्ध खड़ा करती है,<br />
                न ही उसे प्रकृति में विलीन कर देती है।<br />
                वह उसे वृत्ति से ऊपर<br />
                और उत्तरदायित्व के अधीन स्थापित करती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block E10 — What is expected of the human */}
              <p className="ms-prose-deva-lines">
                मनुष्य से न पशु का अनुकरण अपेक्षित है,<br />
                न अंधाधुंध प्रकृति-शासन।<br />
                उससे अपेक्षा है कि वह स्वयं का शासन करे।
              </p>

              <div className="ms-silence-sm" />

              {/* Block E11 — This governance does not happen by itself */}
              <p className="ms-prose-deva-lines">
                यह शासन स्वतः नहीं होता।<br />
                इसे सिखाना पड़ता है,<br />
                स्मरण कराना पड़ता है,<br />
                पुनः स्थापित करना पड़ता है<br />
                और इसकी रक्षा करनी पड़ती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block E12 — Why every society develops law, discipline, and sanction */}
              <p className="ms-prose-deva-lines">
                इसी कारण प्रत्येक मानवीय समाज<br />
                विधि, नीति, अनुशासन और दंड का विकास करता है।<br />
                ये संस्कृति की कल्पनाएँ नहीं हैं।<br />
                ये स्वतंत्रता के भार के प्रति प्रतिक्रियाएँ हैं।
              </p>

              <div className="ms-silence-sm" />

              {/* Block E13 — The chapter's defining declaration */}
              <p className="ms-prose-deva-lines">
                मनुष्य होना ऋत और धर्म के बीच जीना है —<br />
                एक ओर हाथ में प्रकृति की शक्ति,<br />
                दूसरी ओर अंतरात्मा पर व्यवस्था का दायित्व।
              </p>

              {/* Silence before the terminal statement */}
              <div className="ms-silence-md" />

              {/* Block E14 — Terminal statement; chapter close */}
              <p className="ms-prose-deva-lines">
                जब तक यह भेद स्पष्ट नहीं होता,<br />
                स्वतंत्रता बोझ नहीं बनती —<br />
                और बोझ बने बिना वह विनाश करती रहती है।
              </p>

              {/* Chapter-end architecture */}
              <div className="ms-silence-lg" />
              <hr className="ms-rule-full" />
              <div className="ms-silence-lg" />

            </section>
          </Reveal>

          {/* ════════════════════════════════════
              SECTION: अध्याय 3
              Controlled activation — opening movement only.
              Source: canon/tattvaprashna-source-of-truth.md, lines 621–652
              Rendered through the terminal definition of freedom.
              Chapter continues beyond this section.
          ════════════════════════════════════ */}
          <Reveal delay={0.02}>
            <section
              aria-label="अध्याय 3 — स्वतंत्रता और उसकी क़ीमत"
              data-testid="tattvaprashna-chapter3"
              className="ms-chapter-opening-section"
            >

              <p className="ms-chapter-num">अध्याय ३</p>
              <h2 className="ms-chapter-title-deva">स्वतंत्रता और उसकी क़ीमत</h2>
              <div className="ms-chapter-rule-line" />

              {/* ══════════════════════════════════════
                  Movement A — Freedom as burden
                  The paradox; animals vs. humans; the price never understood.
                  Source: lines 626–652
              ══════════════════════════════════════ */}

              {/* Block F1 — Opening paradox */}
              <p className="ms-prose-deva-lines">
                स्वतंत्रता को प्रायः एक उपहार के रूप में देखा जाता है।<br />
                वास्तव में, वह एक बोझ है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block F2 — Nature does not give animals freedom's burden */}
              <p className="ms-prose-deva-lines">
                प्रकृति पशु को स्वतंत्रता का भार नहीं देती।<br />
                उनका आचरण वृत्ति से संचालित होता है,<br />
                पर्यावरण उनके विकल्प सीमित करता है,<br />
                और परिणाम तुरंत सामने आ जाता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block F3 — The animal's temporal freedom */}
              <p className="ms-prose-deva-lines">
                पशु आने वाले कल का भार अपने विवेक पर नहीं ढोता।<br />
                वह बीते हुए कल के लिए उत्तरदायी नहीं होता।<br />
                उसका जीवन सीमित, किन्तु सुरक्षित परिधि में घटित होता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block F4 — Human life is different; the power to choose beyond instinct */}
              <p className="ms-prose-deva-lines">
                मानव जीवन ऐसा नहीं है।<br />
                मनुष्य होना केवल जीवित रहना नहीं है।<br />
                यह वृत्ति से परे चुनने की शक्ति रखना है —<br />
                भूख के विरुद्ध,<br />
                भय के विरुद्ध,<br />
                लाभ के विरुद्ध,<br />
                और कभी-कभी स्वयं के हित के विरुद्ध भी काम करने की शक्ति।
              </p>

              <div className="ms-silence-sm" />

              {/* Block F5 — This power is celebrated; its price rarely understood */}
              <p className="ms-prose-deva-lines">
                इस शक्ति का उत्सव मनाया जाता है,<br />
                इसे माँगा जाता है,<br />
                और इसकी रक्षा की जाती है।<br />
                पर इसकी क़ीमत को शायद ही समझा जाता है।
              </p>

              {/* Silence before the terminal definition */}
              <div className="ms-silence-md" />

              {/* Block F6 — The opening movement's terminal definition */}
              <p className="ms-prose-deva-lines">
                स्वतंत्रता सीमा का अभाव नहीं है।<br />
                वह उत्तरदायित्व की उपस्थिति है।
              </p>

              {/* ── Canonical section break (---) ── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement B — Freedom multiplying consequence
                  The price; restraint-less societies; degeneration.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 654–695
              ══════════════════════════════════════ */}

              {/* Block G1 — Choice multiplies consequence */}
              <p className="ms-prose-deva-lines">
                जहाँ विकल्प प्रकट होता है,<br />
                वहाँ परिणाम का विस्तार होता है।<br />
                मनुष्य का कोई भी चुनाव<br />
                केवल उसी क्षण तक सीमित नहीं रहता।<br />
                वह परिवार को प्रभावित करता है,<br />
                समाज में उतरता है,<br />
                पीढ़ियों तक पहुँचता है,<br />
                और संस्था का स्वरूप गढ़ देता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block G2 — Anaphoric: the irreversibility of free action */}
              <p className="ms-prose-deva-lines">
                कहे गए शब्द लौटाए नहीं जा सकते।<br />
                छोड़ी गई हिंसा वापस नहीं बुलाई जा सकती।<br />
                उपेक्षित लापरवाही परंपरा बन जाती है।<br />
                स्वतंत्रता भाव को गुणा करती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block G3 — Central assertion: freedom without restraint is dangerous */}
              <p className="ms-prose-deva-lines">
                इसी कारण संयम के बिना स्वतंत्रता खतरनाक होती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block G4 — Three-tier contrast: animal / child / human */}
              <p className="ms-prose-deva-lines">
                पशु को वृत्ति सीमित करती है।<br />
                बालक को अज्ञान सीमित करता है।<br />
                मनुष्य को विधि और विवेक सीमित करना चाहिए।
              </p>

              <div className="ms-silence-sm" />

              {/* Block G5 — Without these limits: erosion from within */}
              <p className="ms-prose-deva-lines">
                इन सीमाओं के बिना स्वतंत्रता ऊपर नहीं उठाती।<br />
                वह भीतर से क्षरण उत्पन्न करती है।
              </p>

              <div className="ms-silence-md" />

              {/* Block G6 — Society that teaches freedom without its price */}
              <p className="ms-prose-deva-lines">
                जो समाज स्वतंत्रता सिखाता है,<br />
                पर उसकी क़ीमत नहीं सिखाता,<br />
                वह बुद्धि का नहीं,<br />
                केवल इच्छा का शिक्षण देता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block G7 — The human type such a society produces
                  OCR note: corrupted noun resolved as "व्यक्ति" */}
              <p className="ms-prose-deva-lines">
                ऐसा समाज ऐसे व्यक्ति उत्पन्न करता है<br />
                जो अधिकार तो माँगते हैं,<br />
                पर कर्तव्य से बचते हैं;<br />
                जो परिणाम के बिना चुनाव चाहते हैं;<br />
                और जो आवेग को सभ्यता समझ बैठते हैं।
              </p>

              <div className="ms-silence-md" />

              {/* Block G8 — Terminal statement of Movement B */}
              <p className="ms-prose-deva-lines">
                ऐसी स्वतंत्रता मुक्ति नहीं देती।<br />
                वह विघटन उत्पन्न करती है।<br />
                वह व्यक्ति को उसके भीतर से तोड़ती है,<br />
                और समाज को उसके आधार से।
              </p>

              {/* ── Canonical section break (---) ── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement C — Sanatan understanding of freedom; dharma's direction
                  Source: canon/tattvaprashna-source-of-truth.md, lines 697–740
              ══════════════════════════════════════ */}

              {/* Block H1 — Freedom as capacity in Sanatan thought */}
              <p className="ms-prose-deva-lines">
                सनातन चिंतन में स्वतंत्रता कभी अंतिम लक्ष्य नहीं रही।<br />
                वह एक क्षमता रही —<br />
                सही चुनने की,<br />
                स्वयं को रोकने की,<br />
                दूसरों की रक्षा करने की,<br />
                और असुविधाजनक होने पर भी<br />
                विधि को थामे रखने की।
              </p>

              <div className="ms-silence-sm" />

              {/* Block H2 — Declarative: freedom without responsibility is not liberation */}
              <p className="ms-prose-deva-lines">
                उत्तरदायित्व के बिना स्वतंत्रता मुक्ति नहीं है।<br />
                वह व्यवस्था का त्याग है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block H3 — Dharma gives freedom direction */}
              <p className="ms-prose-deva-lines">
                इसलिए धर्म स्वतंत्रता का विरोध नहीं करता।<br />
                वह उसे दिशा देता है।
              </p>

              <div className="ms-silence-md" />

              {/* Block H4 — Dharma's single question */}
              <p className="ms-prose-deva-lines">
                धर्म एक ही प्रश्न उपस्थित करता है:<br />
                जब मैं अन्यथा करने के लिए स्वतंत्र हूँ,<br />
                तब मुझे क्या थामे रखना चाहिए?
              </p>

              <div className="ms-silence-sm" />

              {/* Block H5 — Contrast: without and with the question */}
              <p className="ms-prose-deva-lines">
                इस प्रश्न के बिना स्वतंत्रता<br />
                भोग में गिर जाती है।<br />
                इसके साथ स्वतंत्रता<br />
                अर्थ प्राप्त करती है।
              </p>

              {/* ── Canonical section break (---) ── */}
              <div className="ms-silence-lg" />

              {/* Block H6 — The price set by reality, not society */}
              <p className="ms-prose-deva-lines">
                स्वतंत्रता की क़ीमत समाज नहीं लगाता।<br />
                वह यथार्थ स्वयं लगाता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block H7 — Reality's answer to unrestrained freedom */}
              <p className="ms-prose-deva-lines">
                जब स्वतंत्रता संयम के बिना प्रयुक्त होती है,<br />
                तो यथार्थ विघटन के रूप में उत्तर देता है —<br />
                टूटा हुआ विश्वास,<br />
                खंडित परिवार,<br />
                डगमगाती संस्थाएँ,<br />
                और अस्थिर मन।
              </p>

              <div className="ms-silence-sm" />

              {/* Block H8 — Nature holds; human life loses balance */}
              <p className="ms-prose-deva-lines">
                प्रकृति अपना क्रम बनाए रखती है,<br />
                पर मानव जीवन असंतुलित हो जाता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block H9 — Every enduring civilization understood this */}
              <p className="ms-prose-deva-lines">
                हर वह सभ्यता जो टिक पाई,<br />
                इस सत्य को समझती थी।<br />
                स्वतंत्रता सदा अनुशासन से जुड़ी थी,<br />
                शक्ति दायित्व से,<br />
                और इच्छा परिणाम से।
              </p>

              <div className="ms-silence-sm" />

              {/* Block H10 — When balance breaks, no progress compensates */}
              <p className="ms-prose-deva-lines">
                जब यह संतुलन टूटता है,<br />
                तो कोई भी उन्नति उस त्रुटि की पूर्ति नहीं कर पाती।
              </p>

              {/* ── Canonical section break (---) ── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement D — Modern paradox; character formation; chapter close
                  Source: canon/tattvaprashna-source-of-truth.md, lines 746–810
              ══════════════════════════════════════ */}

              {/* Block I1 — The modern paradox: unprepared freedom */}
              <p className="ms-prose-deva-lines">
                आधुनिक जीवन की विडंबना यह नहीं है<br />
                कि मनुष्य स्वतंत्र हो गया।<br />
                विडंबना यह है<br />
                कि वह तैयारी के बिना स्वतंत्र हो गया।
              </p>

              <div className="ms-silence-sm" />

              {/* Block I2 — Preparation for freedom is character, not education */}
              <p className="ms-prose-deva-lines">
                स्वतंत्रता की तैयारी<br />
                केवल शिक्षा नहीं है।<br />
                वह चरित्र का संस्कार है —<br />
                संयम,<br />
                उत्तरदायित्व,<br />
                साहस,<br />
                और आत्म-नियंत्रण का।
              </p>

              <div className="ms-silence-sm" />

              {/* Block I3 — The untrained hand analogy */}
              <p className="ms-prose-deva-lines">
                जो इनसे अशिक्षित है,<br />
                वह स्वतंत्रता को<br />
                बिना हानि के धारण नहीं कर सकता,<br />
                जैसे बिना अभ्यास का हाथ<br />
                शस्त्र धारण नहीं कर सकता।
              </p>

              <div className="ms-silence-sm" />

              {/* Block I4 — Freedom amplifies what already exists within */}
              <p className="ms-prose-deva-lines">
                स्वतंत्रता मनुष्य के भीतर<br />
                जो पहले से विद्यमान है,<br />
                उसी को बढ़ा देती है।<br />
                जहाँ विवेक है,<br />
                वहाँ स्वतंत्रता गरिमा उत्पन्न करती है।<br />
                जहाँ आवेग है,<br />
                वहाँ स्वतंत्रता अराजकता उत्पन्न करती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block I5 — Not all freedoms are equal */}
              <p className="ms-prose-deva-lines">
                इसी कारण सभी स्वतंत्रताएँ समान नहीं होतीं।<br />
                तैयारी के बिना दी गई स्वतंत्रता<br />
                क्रूरता बन जाती है —<br />
                स्वयं के लिए भी<br />
                और दूसरों के लिए भी।
              </p>

              <div className="ms-silence-sm" />

              {/* Block I6 — Freedom's burden falls most on those who deny its price */}
              <p className="ms-prose-deva-lines">
                स्वतंत्रता का भार<br />
                सबसे अधिक उन पर पड़ता है<br />
                जो उसकी क़ीमत से इनकार करते हैं।
              </p>

              {/* ── Canonical section break (---) ── */}
              <div className="ms-silence-lg" />

              {/* Block I7 — Being human is answering for choices */}
              <p className="ms-prose-deva-lines">
                मनुष्य होना केवल चुनना नहीं है।<br />
                मनुष्य होना<br />
                अपने चुनाव के लिए उत्तर देना है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block I8 — Responsibility cannot be delegated */}
              <p className="ms-prose-deva-lines">
                यह उत्तरदायित्व<br />
                न प्रकृति को सौंपा जा सकता है,<br />
                न समाज को,<br />
                न समय को।
              </p>

              <div className="ms-silence-sm" />

              {/* Block I9 — Individual discernment and the structures that protect it */}
              <p className="ms-prose-deva-lines">
                यह व्यक्ति के विवेक पर<br />
                और उन संरचनाओं पर आधारित है<br />
                जो उस विवेक की रक्षा करती हैं।
              </p>

              <div className="ms-silence-sm" />

              {/* Block I10 — Where structures weaken, freedom becomes burden */}
              <p className="ms-prose-deva-lines">
                जहाँ ये संरचनाएँ कमज़ोर पड़ती हैं,<br />
                वहाँ स्वतंत्रता<br />
                वरदान नहीं,<br />
                भार बन जाती है।
              </p>

              <div className="ms-silence-md" />

              {/* Block I11 — Sanatan's call: earn freedom continuously */}
              <p className="ms-prose-deva-lines">
                सनातन<br />
                मनुष्य से स्वतंत्रता त्यागने को नहीं कहती।<br />
                वह कहती है —
              </p>

              <div className="ms-silence-sm" />

              <p className="ms-prose-deva-lines">
                इसे निरंतर अर्जित करो।<br />
                संयम से।<br />
                अनुशासन से।<br />
                उत्तरदायित्व से।
              </p>

              <div className="ms-silence-sm" />

              {/* Block I12 — Freedom is not permanent property; it is an effort */}
              <p className="ms-prose-deva-lines">
                स्वतंत्रता स्थायी संपत्ति नहीं है।<br />
                वह एक प्रयास है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block I13 — Only those willing to bear the price hold its power */}
              <p className="ms-prose-deva-lines">
                केवल वही<br />
                जो उसकी क़ीमत वहन करने को तैयार है,<br />
                उसकी शक्ति का अधिकारी है।
              </p>

              <div className="ms-silence-md" />

              {/* Block I14 — Chapter's self-statement: not against freedom */}
              <p className="ms-prose-deva-lines">
                यह अध्याय<br />
                स्वतंत्रता के विरुद्ध नहीं है।<br />
                यह बिना चुकाई गई स्वतंत्रता के विरुद्ध है।
              </p>

              {/* Chapter 3 — architectural close */}
              <div className="ms-silence-lg" />
              <hr className="ms-rule-full" />
              <div className="ms-silence-lg" />

            </section>
          </Reveal>

          {/* ════════════════════════════════════
              SECTION: अध्याय 4
              Controlled activation — opening movement only.
              Source: canon/tattvaprashna-source-of-truth.md, lines 826–868
              Rendered through the first canonical section break.
              Chapter continues beyond this section.
          ════════════════════════════════════ */}
          <Reveal delay={0.02}>
            <section
              aria-label="अध्याय 4 — मानवता को व्यवस्था की आवश्यकता क्यों है?"
              data-testid="tattvaprashna-chapter4"
              className="ms-chapter-opening-section"
            >

              <p className="ms-chapter-num">अध्याय ४</p>
              <h2 className="ms-chapter-title-deva">मानवता को व्यवस्था की आवश्यकता क्यों है?</h2>
              <div className="ms-chapter-rule-line" />

              {/* ══════════════════════════════════════
                  Movement A — Order misunderstood; nature's contrast;
                  freedom without structure turns against itself.
                  Source: lines 826–868
              ══════════════════════════════════════ */}

              {/* Block J1 — Order misunderstood as bondage */}
              <p className="ms-prose-deva-lines">
                व्यवस्था को अक्सर बंधन समझ लिया जाता है।<br />
                वास्तव में, वही स्वतंत्रता को जीने योग्य बनाती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block J2 — Nature needs no instruction in order */}
              <p className="ms-prose-deva-lines">
                प्रकृति को व्यवस्था सिखानी नहीं पड़ती।<br />
                नदियाँ बहती हैं,<br />
                ऋतुएँ परिवर्तित होती हैं,<br />
                और जीव निश्चित क्रम में आचरण करते हैं।
              </p>

              <div className="ms-silence-sm" />

              {/* Block J3 — Nature self-corrects; humans do not have this facility */}
              <p className="ms-prose-deva-lines">
                प्रकृति में अव्यवस्था परिणाम द्वारा स्वयं सुधर जाती है।<br />
                मनुष्य को यह सुविधा प्राप्त नहीं है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block J4 — Where choice enters, order must be consciously maintained */}
              <p className="ms-prose-deva-lines">
                जहाँ विकल्प का प्रवेश होता है,<br />
                वहाँ व्यवस्था को सचेत रूप से बनाए रखना पड़ता है।
              </p>

              <div className="ms-silence-md" />

              {/* Block J5 — Human decisions; when directionless, desires collide
                  OCR note: "निर्णय अनेक होते हैं" — "अनेक" restored from corrupted "एक" */}
              <p className="ms-prose-deva-lines">
                मनुष्य केवल कर्म नहीं करता।<br />
                वह निर्णय करता है।<br />
                निर्णय अनेक होते हैं।<br />
                और जब वे दिशाहीन होते हैं,<br />
                तो उनके भाव टकराते हैं।<br />
                इच्छा इच्छा से टकराती है।<br />
                शक्ति शक्ति से।<br />
                और भय भय को जन्म देता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block J6 — Terminal assertion: freedom without order turns against itself */}
              <p className="ms-prose-deva-lines">
                व्यवस्था के बिना स्वतंत्रता स्वयं के विरुद्ध हो जाती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block J7 — Freedom as power only while structure holds it */}
              <p className="ms-prose-deva-lines">
                स्वतंत्रता तभी तक शक्ति है,<br />
                जब तक उसे धारण करने की संरचना हो।<br />
                संरचना के बिना स्वतंत्रता<br />
                न मार्ग देती है, न मर्यादा।
              </p>

              {/* ── Canonical section break (---) ── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement B — Civilizational necessity of order;
                  the human distinction; institutions as conscious necessity.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 862–897
              ══════════════════════════════════════ */}

              {/* Block K1 — Every stable civilization formed structure */}
              <p className="ms-prose-deva-lines">
                इसी कारण हर स्थायी मानव समाज ने —<br />
                काल, भूगोल और भाषा से परे —<br />
                व्यवस्था के स्वरूप गढ़े।<br />
                जहाँ —<br />
                कानून,<br />
                परंपरा,<br />
                अनुशासन,<br />
                कर्तव्य,<br />
                और परिणाम<br />
                दमन से नहीं,<br />
                आवश्यकता से उत्पन्न हुए।
              </p>

              <div className="ms-silence-sm" />

              {/* Block K2 — Order is necessary because humans can intentionally harm */}
              <p className="ms-prose-deva-lines">
                व्यवस्था इसलिए आवश्यक है<br />
                क्योंकि मनुष्य जानबूझकर हानि पहुँचा सकता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block K3 — Three-part animal/human distinction */}
              <p className="ms-prose-deva-lines">
                पशु प्रतिद्वंद्विता करते हैं,<br />
                पर षड्यंत्र नहीं करते।<br />
                मनुष्य दोनों कर सकता है।
              </p>

              <div className="ms-silence-sm" />

              <p className="ms-prose-deva-lines">
                पशु मार सकते हैं,<br />
                पर व्यवस्था का शोषण नहीं करते।<br />
                मनुष्य कर सकता है।
              </p>

              <div className="ms-silence-sm" />

              <p className="ms-prose-deva-lines">
                पशु त्याग कर सकते हैं,<br />
                पर त्याग को गुण नहीं बताते।<br />
                मनुष्य ऐसा कर सकता है।
              </p>

              <div className="ms-silence-md" />

              {/* Block K4 — The power of intentionality turns disorder into destruction */}
              <p className="ms-prose-deva-lines">
                उद्देश्य की शक्ति,<br />
                अव्यवस्था को विनाश में बदल देती है।<br />
                इसलिए व्यवस्था,<br />
                मानवता की शत्रु नहीं है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block K5 — Order is the condition keeping humanity within the human
                  OCR note: "    त" restored as "स्थिति" */}
              <p className="ms-prose-deva-lines">
                व्यवस्था वह स्थिति है<br />
                जिस कारण मानवता, मानव में बनी रहती है।
              </p>

              {/* ── Canonical section break (---) ── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement C — Where order collapses; morality requires structure;
                  order as protector of virtue.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 898–935
              ══════════════════════════════════════ */}

              {/* Block L1 — Where order is absent: force, pleasure, noise */}
              <p className="ms-prose-deva-lines">
                जहाँ व्यवस्था नहीं होती,<br />
                वहाँ बल दुर्बलता पर हावी होता है।<br />
                भोग गरिमा को कुचल देता है।<br />
                शोर सत्य का स्थान ले लेता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block L2 — Even compassion becomes unsafe */}
              <p className="ms-prose-deva-lines">
                ऐसी स्थिति में<br />
                दया भी असुरक्षित हो जाती है,<br />
                क्योंकि उसका दुरुपयोग सरल होता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block L3 — Anarchy does not liberate; it promotes cruelty */}
              <p className="ms-prose-deva-lines">
                अराजकता मुक्ति नहीं देती।<br />
                वह निर्दयता को बढ़ावा देती है।
              </p>

              <div className="ms-silence-md" />

              {/* Block L4 — Order precedes morality */}
              <p className="ms-prose-deva-lines">
                इसी कारण<br />
                व्यवस्था नैतिकता से पहले आती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block L5 — Triple descent: goodwill / courage / intelligence fail without structure */}
              <p className="ms-prose-deva-lines">
                संरचना के बिना<br />
                सद्भावना भी विफल हो जाती है।<br />
                सीमा के बिना साहस<br />
                लापरवाही बन जाता है।<br />
                संयम के बिना बुद्धि<br />
                कपट में बदल जाती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block L6 — Order does not suppress virtue; it protects it */}
              <p className="ms-prose-deva-lines">
                व्यवस्था, सद्गुण को दबाती नहीं।<br />
                वह उसकी रक्षा करती है।
              </p>

              <div className="ms-silence-md" />

              {/* Block L7 — Order demands not equality but clarity and continuity of responsibility
                  OCR note: "-ता" before "और निरंतरता" restored as "स्पष्टता" */}
              <p className="ms-prose-deva-lines">
                व्यवस्था समानता नहीं माँगती।<br />
                वह उत्तरदायित्व की<br />
                स्पष्टता और निरंतरता माँगती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block L8 — When order is misread as oppression; the distorted return */}
              <p className="ms-prose-deva-lines">
                जब व्यवस्था को<br />
                उत्पीड़न समझ लिया जाता है,<br />
                तो समाज उसके बिना<br />
                जीने का प्रयास करता है।<br />
                परिणाम व्यवस्था का अंत नहीं,<br />
                उसका विकृत पुनरागमन होता है।
              </p>

              {/* ── Canonical section break (---) ── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement D — True order transparent and internally held;
                  Sanatan understanding; chapter close.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 941–978
              ══════════════════════════════════════ */}

              {/* Block M1 — True order is transparent: known, accepted, enacted */}
              <p className="ms-prose-deva-lines">
                सच्ची व्यवस्था पारदर्शी होती है।<br />
                वह जानी जाती है,<br />
                स्वीकारी जाती है,<br />
                और निभाई जाती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block M2 — Sanatan: order held from within, not imposed from without */}
              <p className="ms-prose-deva-lines">
                सनातन चिंतन में<br />
                व्यवस्था केवल बाहर से थोपी नहीं जाती।<br />
                वह भीतर से धारण की जाती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block M3 — When inner restraint diminishes; when both weaken, collapse is certain */}
              <p className="ms-prose-deva-lines">
                जब आंतरिक संयम घटता है,<br />
                तो बाहरी विधि कठोर होती है।<br />
                और जब दोनों क्षीण होते हैं,<br />
                तो पतन निश्चित होता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block M4 — Not a warning; this is reality's law */}
              <p className="ms-prose-deva-lines">
                यह कोई चेतावनी नहीं।<br />
                यह यथार्थ का विधान है।
              </p>

              <div className="ms-silence-md" />

              {/* Block M5 — Human needs order not because weak but because capable */}
              <p className="ms-prose-deva-lines">
                मनुष्य इसलिए नहीं व्यवस्था का अधिकारी है<br />
                क्योंकि वह कमज़ोर है,
              </p>

              <div className="ms-silence-sm" />

              <p className="ms-prose-deva-lines">
                बल्कि इसलिए क्योंकि वह सक्षम है —<br />
                निर्माण में भी,<br />
                विनाश में भी;<br />
                रक्षा में भी,<br />
                शोषण में भी।
              </p>

              <div className="ms-silence-sm" />

              {/* Block M6 — Order binds capacity in service of continuity */}
              <p className="ms-prose-deva-lines">
                व्यवस्था, क्षमता को निरंतरता की सेवा में बाँधती है।
              </p>

              <div className="ms-silence-md" />

              {/* Block M7 — Chapter's self-statement: not control but inner restraint */}
              <p className="ms-prose-deva-lines">
                यह अध्याय नियंत्रण का आग्रह नहीं करता।<br />
                यह अंतःसंयम का आग्रह करता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block M8 — Terminal: being human is choosing within order */}
              <p className="ms-prose-deva-lines">
                मनुष्य होना<br />
                केवल चुनना नहीं है।<br />
                मनुष्य होना<br />
                व्यवस्था के भीतर चुनना है।
              </p>

              {/* Chapter 4 — architectural close */}
              <div className="ms-silence-lg" />
              <hr className="ms-rule-full" />
              <div className="ms-silence-lg" />

            </section>
          </Reveal>

          {/* ════════════════════════════════════
              SECTION: अध्याय 5
              Controlled activation — opening movement only.
              Source: canon/tattvaprashna-source-of-truth.md, lines 984–1013
              Rendered through the first canonical section break.
              Chapter continues beyond this section.
          ════════════════════════════════════ */}
          <Reveal delay={0.02}>
            <section
              aria-label="अध्याय 5 — मनुष्य होने का भार"
              data-testid="tattvaprashna-chapter5"
              className="ms-chapter-opening-section"
            >

              <p className="ms-chapter-num">अध्याय ५</p>
              <h2 className="ms-chapter-title-deva">मनुष्य होने का भार</h2>
              <div className="ms-chapter-rule-line" />

              {/* ══════════════════════════════════════
                  Movement A — The burden of being human;
                  animals free of it; memory, guilt, regret;
                  the permanent tension between desire and duty.
                  Source: lines 984–1013
              ══════════════════════════════════════ */}

              {/* Block N1 — Opening inversion: not a privilege without price */}
              <p className="ms-prose-deva-lines">
                मनुष्य होना बिना मूल्य का विशेषाधिकार नहीं है।<br />
                यह उद्देश्य के साथ सौंपा गया भार है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block N2 — When responsibility enters, ease departs */}
              <p className="ms-prose-deva-lines">
                जैसे ही उत्तरदायित्व जीवन में प्रवेश करता है,<br />
                सहजता विदा हो जाती है।
              </p>

              <div className="ms-silence-md" />

              {/* Block N3 — Animals are free of this burden */}
              <p className="ms-prose-deva-lines">
                पशु इस भार से मुक्त हैं।<br />
                वे आचरण करते हैं,<br />
                प्रतिक्रिया देते हैं,<br />
                और बिना अर्थ का लेखा रखे आगे बढ़ जाते हैं।
              </p>

              <div className="ms-silence-sm" />

              {/* Block N4 — The human cannot; the five-verb descent */}
              <p className="ms-prose-deva-lines">
                मनुष्य ऐसा नहीं कर सकता।<br />
                वह स्मरण करता है।<br />
                वह अनुमान लगाता है।<br />
                वह मूल्यांकन करता है।<br />
                और वह पश्चाताप भी करता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block N5 — The power to choose against instinct eliminates escape from consequence */}
              <p className="ms-prose-deva-lines">
                वृत्ति के विरुद्ध चुनने की शक्ति,<br />
                परिणाम से पलायन की संभावना समाप्त कर देती है।
              </p>

              <div className="ms-silence-md" />

              {/* Block N6 — This burden is not given by society; it arises from freedom's nature */}
              <p className="ms-prose-deva-lines">
                यह भार केवल समाज द्वारा नहीं दिया जाता।<br />
                यह मानव स्वतंत्रता के स्वभाव से उत्पन्न होता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block N7 — The permanent tension; human life takes shape within it */}
              <p className="ms-prose-deva-lines">
                चुनने की शक्ति इच्छा और कर्तव्य के बीच<br />
                स्थायी तनाव उत्पन्न करती है।<br />
                और इसी तनाव में मानव जीवन आकार लेता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block N8 — The attempt to avoid discomfort; incomplete solutions */}
              <p className="ms-prose-deva-lines">
                यह असहजता से बचने का प्रयास है,<br />
                समाधान खोजने का नहीं।<br />
                और इसी प्रयास से अनेक विकल्प जन्म लेते हैं —<br />
                जो देखने में सरल, पर भीतर से अधूरे होते हैं।
              </p>

              {/* ── Canonical section break (---) ── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement B — Denial of burden; three modes of avoidance;
                  transferred consequence; fragmentation.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 1015–1040
              ══════════════════════════════════════ */}

              {/* Block O1 — Denial is attractive; many choose it */}
              <p className="ms-prose-deva-lines">
                इस भार से इनकार करना आकर्षक लगता है।<br />
                और अनेक लोग ऐसा करते भी हैं।
              </p>

              <div className="ms-silence-sm" />

              {/* Block O2 — Three modes of denial: impulse / silence / confusion */}
              <p className="ms-prose-deva-lines">
                कुछ आवेग को अपनाते हैं,<br />
                और उसे सभ्यता कहते हैं।<br />
                कुछ मौन को चुनते हैं,<br />
                और उसे तटस्थता कहते हैं।<br />
                कुछ उत्तरदायित्व को भ्रम में घोल देते हैं,<br />
                और उसे स्वतंत्रता कहते हैं।
              </p>

              <div className="ms-silence-md" />

              {/* Block O3 — Denial does not end the burden; it transfers the price */}
              <p className="ms-prose-deva-lines">
                पर इनकार भार को समाप्त नहीं करता।<br />
                वह केवल उसकी क़ीमत दूसरों पर डाल देता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block O4 — Where responsibility is not taken up, it falls on another */}
              <p className="ms-prose-deva-lines">
                जहाँ उत्तरदायित्व नहीं उठाया जाता,<br />
                वहाँ उसका भार किसी और को वहन करना पड़ता है।
              </p>

              {/* ── Canonical section break (---) ── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement C — Conscience beneath denial; inner knowing;
                  suppressed but not erased; pleasure cannot satisfy.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 1038–1059
              ══════════════════════════════════════ */}

              {/* Block P1 — The burden manifests first in conscience */}
              <p className="ms-prose-deva-lines">
                मनुष्य होने का भार सबसे पहले अंतःकरण में प्रकट होता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block P2 — Conscience is not a social construction; an inner knowing */}
              <p className="ms-prose-deva-lines">
                विवेक कोई सामाजिक रचना नहीं है।<br />
                यह एक आंतरिक बोध है,<br />
                जो चुनाव और परिणाम के सामने आते ही जाग्रत होता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block P3 — Can be suppressed but not erased; accumulates; returns */}
              <p className="ms-prose-deva-lines">
                उसे कुछ समय दबाया जरूर जा सकता है,<br />
                पर मिटाया नहीं जा सकता।<br />
                वह संचित होता है,<br />
                और अंततः अशांति, कड़वाहट या निरर्थकता के रूप में लौट आता है।
              </p>

              <div className="ms-silence-md" />

              {/* Block P4 — Pleasure alone cannot satisfy; it is transient; responsibility is permanent */}
              <p className="ms-prose-deva-lines">
                इसी कारण केवल सुख मानव जीवन को तृप्त नहीं कर सकता।<br />
                सुख क्षणिक है।<br />
                उत्तरदायित्व स्थायी है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block P5 — A life avoiding duty does not become lighter; it becomes heavier */}
              <p className="ms-prose-deva-lines">
                कर्तव्य से बचा हुआ जीवन हल्का नहीं होता।<br />
                वह अर्थहीन होकर और अधिक भारी हो जाता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block P6 — This burden is not only personal; it is also social */}
              <p className="ms-prose-deva-lines">
                यह भार केवल व्यक्तिगत नहीं है।<br />
                यह सामाजिक भी है।
              </p>

              {/* ── Canonical section break (---) ── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement D — Social dimension of burden; trustworthiness;
                  civilizational decay through refusal of shared burden.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 1061–1090
              ══════════════════════════════════════ */}

              {/* Block Q1 — Humans do not live alone; every act shapes the world others inhabit */}
              <p className="ms-prose-deva-lines">
                मनुष्य अकेले नहीं जीते।<br />
                हर कर्म, हर चूक, हर उपेक्षा उस संसार को आकार देती है<br />
                जिसमें अन्य लोग जीते हैं।
              </p>

              <div className="ms-silence-sm" />

              {/* Block Q2 — Family, society, nation run on trustworthy conduct, not desire */}
              <p className="ms-prose-deva-lines">
                परिवार, समाज और राष्ट्र केवल इच्छा से नहीं चलते।<br />
                वे विश्वसनीय आचरण से चलते हैं।
              </p>

              <div className="ms-silence-sm" />

              {/* Block Q3 — Trustworthiness as the expressed form of responsibility
                  OCR note: "व्यक्त रूप" restored from corrupted source */}
              <p className="ms-prose-deva-lines">
                विश्वसनीयता उत्तरदायित्व का व्यक्त रूप है।
              </p>

              <div className="ms-silence-md" />

              {/* Block Q4 — Civilizations fall not because people err but because they refuse their share */}
              <p className="ms-prose-deva-lines">
                सभ्यताएँ इसलिए नहीं गिरतीं कि लोग भूल करते हैं।<br />
                वे इसलिए गिरती हैं<br />
                क्योंकि लोग अपने हिस्से का भार उठाने से इनकार कर देते हैं।
              </p>

              <div className="ms-silence-sm" />

              {/* Block Q5 — Order, freedom, dignity endure only when sufficient people accept duty */}
              <p className="ms-prose-deva-lines">
                व्यवस्था, स्वतंत्रता और गरिमा तभी टिकती हैं<br />
                जब पर्याप्त लोग अपने दायित्व को स्वीकार करते हैं।
              </p>

              <div className="ms-silence-sm" />

              {/* Block Q6 — This acceptance is not identical for all; wisdom demands sufficiency, not perfection */}
              <p className="ms-prose-deva-lines">
                यह स्वीकार सभी के लिए समान नहीं होता।<br />
                न सभी एक-सा भार उठाते हैं,<br />
                न ऐसा अपेक्षित है।<br />
                बुद्धि पूर्णता की माँग नहीं करती।<br />
                वह पर्याप्त उत्तरदायित्व की अपेक्षा करती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block Q7 — Being imperfect is acceptable; being careless is not */}
              <p className="ms-prose-deva-lines">
                मनुष्य का त्रुटिहीन न होना स्वीकार्य है।<br />
                पर उसका लापरवाह होना अस्वीकार्य है।
              </p>

              <div className="ms-silence-md" />

              {/* Block Q8 — The silent law on which civilizations rest */}
              <p className="ms-prose-deva-lines">
                यही वह मौन नियम है<br />
                जिस पर सभ्यताएँ टिकी रहती हैं।
              </p>

              <div className="ms-silence-sm" />

              {/* ══════════════════════════════════════
                  Movement E — The load distribution; collapse when burden is refused;
                  force filling the void of absent accountability.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 1092–1103
              ══════════════════════════════════════ */}

              {/* Block R1 — Some carry more; most carry their necessary share */}
              <p className="ms-prose-deva-lines">
                कुछ लोग अधिक भार वहन करते हैं।<br />
                अधिकांश लोग अपना आवश्यक भार वहन करते हैं।
              </p>

              <div className="ms-silence-sm" />

              {/* Block R2 — When balance breaks: structures loosen; trust erodes; force fills the void */}
              <p className="ms-prose-deva-lines">
                यह संतुलन तब टूटता है —<br />
                जब बहुत से लोग लाभ चाहते हैं,<br />
                पर दायित्व नहीं।<br />
                तो संरचनाएँ शिथिल होने लगती हैं,<br />
                विश्वास का आधार क्षीण पड़ जाता है,<br />
                सहयोग का स्थान रिक्त हो जाता है,<br />
                और उस रिक्तता में बल स्वयं को व्यवस्था के रूप में स्थापित कर लेता है।
              </p>

              {/* ── Canonical section break (---) ── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement F — Sanatan tradition; burden as meaning, not escape;
                  responsibility accepted is strength; the chapter's terminal statement.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 1105–1131
                  OCR uncertainties:
                    S1: "सनातन परंपरा [?]" — best candidate; alternate: "सनातन धर्म"
                    S6: "बल्कि स्थापना [?]" — best candidate; alternate: "प्रतिष्ठा"
              ══════════════════════════════════════ */}

              {/* Block S1 — Sanatan tradition offers not release from burden but meaning within it */}
              <p className="ms-prose-deva-lines">
                सनातन परंपरा इस भार से मुक्ति का वादा नहीं करती।<br />
                वह उसे अर्थ प्रदान करती है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block S2 — Responsibility joined to dharma ceases to be pressure; it becomes purpose */}
              <p className="ms-prose-deva-lines">
                धर्म से जुड़ा उत्तरदायित्व दबाव नहीं रहता।<br />
                वह उद्देश्य बन जाता है।
              </p>

              <div className="ms-silence-md" />

              {/* Block S3 — Understanding and accepting this burden is strength; fleeing it is not rebellion but neglect */}
              <p className="ms-prose-deva-lines">
                इस भार को समझकर स्वीकार करना बल है।<br />
                और उससे पलायन करना विद्रोह नहीं,<br />
                उपेक्षा है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block S4 — History advances not by removing responsibility but by understanding, accepting, honouring it */}
              <p className="ms-prose-deva-lines">
                इतिहास उत्तरदायित्व हटाने से आगे नहीं बढ़ता।<br />
                वह तब आगे बढ़ता है<br />
                जब उत्तरदायित्व को समझा, स्वीकार किया और सम्मान दिया जाता है।
              </p>

              <div className="ms-silence-md" />

              {/* Block S5 — Human life is not for lightness but for meaning; the four-step descent */}
              <p className="ms-prose-deva-lines">
                मानव जीवन हल्का होने के लिए नहीं है।<br />
                वह अर्थपूर्ण होने के लिए है।<br />
                अर्थ के लिए भार आवश्यक है।<br />
                भार के लिए उत्तरदायित्व।<br />
                और उत्तरदायित्व के लिए स्वीकृति।
              </p>

              <div className="ms-silence-md" />

              {/* Block S6 — Terminal statement: this is the burden of being human —
                  not punishment, not pride, but placement.
                  OCR: "बल्कि स्थापना [?]" — best candidate rendered; alternate: "प्रतिष्ठा" */}
              <p className="ms-prose-deva-lines">
                यही मनुष्य होने का भार है —<br />
                न दंड।<br />
                न गर्व।<br />
                बल्कि स्थापना।
              </p>

              {/* ── Chapter 5 canonical close ── */}
              <div className="ms-silence-lg" />
              <hr className="ms-rule-full" />
              <div className="ms-silence-lg" />

            </section>
          </Reveal>

          {/* ════════════════════════════════════
              SECTION: लेखकीय वक्तव्य — उपसंहार
              Controlled activation — opening movement only.
              Source: canon/tattvaprashna-source-of-truth.md, lines 1136–1155
              Section continues beyond this movement.
          ════════════════════════════════════ */}
          <Reveal delay={0.02}>
            <section
              aria-label="लेखकीय वक्तव्य — उपसंहार"
              data-testid="tattvaprashna-lekhakyavaktavya"
              className="ms-chapter-opening-section"
            >

              <p className="ms-chapter-num">लेखकीय वक्तव्य</p>
              <h2 className="ms-chapter-title-deva">उपसंहार</h2>
              <div className="ms-chapter-rule-line" />

              {/* ── Canonical section break (---) after heading ── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement I — Completion of Tattvaprashna; not a conclusion
                  but a positioning; its task was to open, not answer.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 1140–1155
              ══════════════════════════════════════ */}

              {/* Block T1 — Here Tattvaprashna concludes; not a proclamation of conclusions */}
              <p className="ms-prose-deva-lines">
                यहाँ तत्त्वप्रश्न का समापन होता है।<br />
                यह ग्रंथ किसी निष्कर्ष की घोषणा नहीं करता<br />
                और न ही सिद्धांत की स्थापना करता है।<br />
                इसका प्रयोजन केवल इतना था<br />
                कि मनुष्य को उसकी स्थिति के सामने खड़ा किया जाए —<br />
                स्वतंत्रता, व्यवस्था और उत्तरदायित्व के उस मूल संदर्भ में,<br />
                जहाँ से किसी भी वास्तविक जिज्ञासा का जन्म होता है।
              </p>

              <div className="ms-silence-md" />

              {/* Block T2 — This pre-grantham gave no answers; its task was to clarify questions.
                  OCR: "इसका कार्य प्रश्नों को स्पष्ट [?] करना था" — best candidate rendered.
                  OCR: "जहाँ भ्रम हट जाए [?]" — best candidate rendered. */}
              <p className="ms-prose-deva-lines">
                इस पूर्व-ग्रंथ ने उत्तर नहीं दिए,<br />
                क्योंकि इसका दायित्व उत्तर देना नहीं था।<br />
                इसका कार्य प्रश्नों को स्पष्ट करना था,<br />
                उस बिंदु तक,<br />
                जहाँ भ्रम हट जाए<br />
                और पलायन संभव न रहे।
              </p>

              {/* ── Canonical section break (---) after Movement I ── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement II — Tattvaprashna as a pūrva-grantham, not a complete work;
                  where it brings the reader; curiosity formed but path still to open;
                  questions become existential.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 1157–1172
                  OCR uncertainty: "प्रश्न [?] अब बौद्धिक नहीं रहे" — best candidate rendered.
              ══════════════════════════════════════ */}

              {/* Block U1 — Tattvaprashna is a pūrva-grantham; it brings the reader to a threshold */}
              <p className="ms-prose-deva-lines">
                तत्त्वप्रश्न इस अर्थ में एक पूर्ण ग्रंथ नहीं,<br />
                बल्कि एक पूर्व-ग्रंथ है।<br />
                यह वहाँ तक ले आता है,<br />
                जहाँ मनुष्य यह समझने लगता है<br />
                कि वह क्या है,<br />
                किस भार के साथ खड़ा है,<br />
                और किससे मुक्त होने का दावा वह अब नहीं कर सकता।
              </p>

              <div className="ms-silence-sm" />

              {/* Block U2 — Curiosity has taken shape; the path still remains to open */}
              <p className="ms-prose-deva-lines">
                यहाँ जिज्ञासा आकार ले चुकी है,<br />
                पर मार्ग अभी खुलना शेष है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block U3 — The questions are no longer merely intellectual; they have become existential.
                  OCR: "    अब बौ क नह रहे" — corrupted opening noun.
                  Best reconstruction: "प्रश्न अब बौद्धिक नहीं रहे" — rendered without [?]. */}
              <p className="ms-prose-deva-lines">
                प्रश्न अब बौद्धिक नहीं रहे;<br />
                वे अस्तित्वगत बन चुके हैं।
              </p>

              {/* ── Canonical section break (---) after Movement II ── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement III — From here the TattvaGrantha series begins;
                  the shift is in level, not subject; the triple contrast.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 1177–1191
              ══════════════════════════════════════ */}

              {/* Block V1 — From here the TattvaGrantha series begins */}
              <p className="ms-prose-deva-lines">
                यहाँ से तत्त्वग्रंथ शृंखला का आरंभ होता है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block V2 — Where Tattvaprashna awakened; Tattvagrantham will present direction;
                  the shift is in level, not subject */}
              <p className="ms-prose-deva-lines">
                जहाँ तत्त्वप्रश्न ने मनुष्य को उसके भार के प्रति जाग्रत किया,<br />
                वहाँ तत्त्वग्रंथ उस भार के साथ चलने की दिशा प्रस्तुत करेगा।<br />
                यह परिवर्तन विषय का नहीं, स्तर का है।
              </p>

              <div className="ms-silence-sm" />

              {/* Block V3 — The triple contrast: not right to freedom but its conduct;
                  not need for order but its interior establishment;
                  not acceptance of responsibility but its descent into life */}
              <p className="ms-prose-deva-lines">
                अब आगे चर्चा<br />
                स्वतंत्रता के अधिकार पर नहीं,<br />
                बल्कि उसके निर्वाह पर होगी;<br />
                व्यवस्था की आवश्यकता पर नहीं,<br />
                बल्कि उसके अंतःस्थापन पर होगी;<br />
                और उत्तरदायित्व की स्वीकृति पर नहीं,<br />
                बल्कि उसके जीवन में अवतरण पर होगी।
              </p>

              {/* ── Canonical section break (---) after Movement III ── */}
              <div className="ms-silence-lg" />

              {/* ══════════════════════════════════════
                  Movement IV — The boundary statement; this is not a chapter's end
                  but a sīmā-rekhā; inquiry falls silent; alignment begins;
                  Tattvaprashna completes its work.
                  Source: canon/tattvaprashna-source-of-truth.md, lines 1193–1202
              ══════════════════════════════════════ */}

              {/* Block W1 — Not a chapter's end but a boundary; inquiry falls silent */}
              <p className="ms-prose-deva-lines">
                अतः यह बिंदु किसी अध्याय का अंत नहीं,<br />
                बल्कि एक सीमा-रेखा है।<br />
                यहाँ विराम लेते हैं और अनुशासन आरंभ होता है।<br />
                यहाँ जिज्ञासा मौन धारण करती है<br />
                और संरेखण का काल प्रारंभ होता है।
              </p>

              <div className="ms-silence-md" />

              {/* Block W2 — Terminal statement: Tattvaprashna completes its work */}
              <p className="ms-prose-deva-lines">
                इस प्रकार तत्त्वप्रश्न — एक पूर्व-ग्रंथ — अपना कार्य पूर्ण करता है,<br />
                और इसी क्षण से तत्त्वग्रंथ : खंड प्रथम का प्रवेश आरंभ होता है।
              </p>

              {/* ── Terminal manuscript seal ── */}
              <div className="ms-silence-lg" />
              <hr className="ms-rule-full" />
              <div className="ms-silence-lg" />

            </section>
          </Reveal>

          <div className="ms-silence-lg" />

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
