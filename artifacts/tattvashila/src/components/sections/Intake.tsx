import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import { SiteContainer, SectionShell, SectionGrid } from "../../layouts";
import { EASE_GENTLE } from "../../system/motion/easings";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export default function Intake() {
  const [reflection, setReflection] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!reflection.trim() || !email.trim()) {
      setError("Both fields are needed, when you're ready.");
      return;
    }
    setError("");
    setState("submitting");
    try {
      const res = await fetch(`${BACKEND_URL}/api/intake`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reflection: reflection.trim(), email: email.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg =
          (Array.isArray(data?.detail) && data.detail[0]?.msg) ||
          (typeof data?.detail === "string" && data.detail) ||
          "Something didn't go through.";
        throw new Error(msg);
      }
      setState("done");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something didn't go through.";
      setError(message);
      setState("error");
    }
  }

  return (
    <SectionShell id="intake" testId="section-intake" bg="bg-bone-light">
      <SiteContainer>
        <SectionGrid>
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                VI &nbsp;·&nbsp; Stay in correspondence
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9 max-w-prose-wide">
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-normal text-ink leading-[1.15]">
                Two questions, if you&rsquo;d like to stay in touch.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-body text-ink-soft max-w-reading">
                We don&rsquo;t keep a mailing list. We keep correspondence.
                We&rsquo;ll write rarely, only when there is genuinely something
                worth reading &mdash; and only to people who quietly asked.
              </p>
            </Reveal>

            <AnimatePresence mode="wait">
              {state !== "done" ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.5 } }}
                  className="mt-12 md:mt-14 space-y-10"
                  data-testid="intake-form"
                >
                  <Reveal delay={0.05}>
                    <div>
                      <label
                        htmlFor="reflection"
                        className="block font-display text-xl md:text-[1.4rem] font-normal text-ink leading-snug"
                      >
                        <span className="text-river-soft mr-3 num-tab text-base">01</span>
                        What brought you here today &mdash; in your own words?
                      </label>
                      <textarea
                        id="reflection"
                        name="reflection"
                        rows={3}
                        maxLength={600}
                        value={reflection}
                        onChange={(e) => setReflection(e.target.value)}
                        data-testid="intake-reflection"
                        className="mt-4 w-full bg-transparent text-body text-ink placeholder:text-ink-faint resize-none border-0 border-b border-ink/25 focus:border-river pb-2 transition-colors duration-500 ease-gentle"
                        placeholder="A line or two — whatever feels honest."
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-display text-xl md:text-[1.4rem] font-normal text-ink leading-snug"
                      >
                        <span className="text-river-soft mr-3 num-tab text-base">02</span>
                        Where would you like the updates to find you?
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        data-testid="intake-email"
                        className="mt-4 w-full bg-transparent text-body text-ink placeholder:text-ink-faint border-0 border-b border-ink/25 focus:border-river pb-2 transition-colors duration-500 ease-gentle"
                        placeholder="your@email"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-5 md:gap-6 pt-2">
                      <p
                        data-testid="intake-error"
                        className={`text-small ${error ? "text-river-deep" : "text-ink-faint"}`}
                      >
                        {error || "We will only ever write — never sell, never share."}
                      </p>
                      <button
                        type="submit"
                        disabled={state === "submitting"}
                        data-testid="intake-submit"
                        className="self-start group inline-flex items-center gap-3 px-6 py-3 bg-ink text-bone-light text-small font-medium rounded-[2px] hover:bg-ink-soft transition-colors duration-500 ease-gentle disabled:opacity-50 disabled:cursor-wait"
                      >
                        <span>{state === "submitting" ? "Sending" : "Send quietly"}</span>
                        <span
                          aria-hidden
                          className="block w-6 h-px bg-current transition-[width] duration-500 ease-gentle group-hover:w-10"
                        />
                      </button>
                    </div>
                  </Reveal>
                </motion.form>
              ) : (
                <motion.div
                  key="done"
                  data-testid="intake-success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_GENTLE } }}
                  className="mt-12 md:mt-14 max-w-reading"
                >
                  <p className="font-display text-2xl md:text-3xl font-normal text-ink leading-snug">
                    Received, with care.
                  </p>
                  <p className="mt-4 text-body text-ink-soft">
                    Thank you for the trust of even a single line. We&rsquo;ll
                    write only when something is genuinely ready &mdash; not
                    before.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SectionGrid>
      </SiteContainer>
    </SectionShell>
  );
}
