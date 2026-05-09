"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

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
        throw new Error(data?.detail?.[0]?.msg || data?.detail || "Something didn't go through.");
      }
      setState("done");
    } catch (err: any) {
      setError(err.message || "Something didn't go through.");
      setState("error");
    }
  }

  return (
    <section
      id="intake"
      data-testid="section-intake"
      className="relative py-32 md:py-48 border-t border-ink/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-12">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="text-micro tracking-widest uppercase text-ink-muted">
                V &nbsp;·&nbsp; Stay in touch
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9 max-w-prose-wide">
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-light text-ink leading-tight">
                Two questions, <span className="italic text-river">if you'd like.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-body text-ink-muted max-w-reading">
                We don't keep a list. We keep correspondence. Write rarely, when there
                is something worth reading &mdash; and only to people who quietly asked.
              </p>
            </Reveal>

            <AnimatePresence mode="wait">
              {state !== "done" ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.6 } }}
                  className="mt-20 md:mt-24 space-y-16"
                  data-testid="intake-form"
                >
                  <Reveal delay={0.05}>
                    <div>
                      <label
                        htmlFor="reflection"
                        className="block font-display text-xl md:text-2xl font-light text-ink"
                      >
                        <span className="text-river-soft mr-3 num-osf">i.</span>
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
                        className="mt-6 w-full bg-transparent text-body text-ink placeholder:text-ink-faint resize-none border-0 border-b border-ink/20 focus:border-river pb-3 transition-colors duration-700 ease-gentle"
                        placeholder="A line, a phrase &mdash; whatever feels honest."
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-display text-xl md:text-2xl font-light text-ink"
                      >
                        <span className="text-river-soft mr-3 num-osf">ii.</span>
                        Where would you like the updates to find you?
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        data-testid="intake-email"
                        className="mt-6 w-full bg-transparent text-body text-ink placeholder:text-ink-faint border-0 border-b border-ink/20 focus:border-river pb-3 transition-colors duration-700 ease-gentle"
                        placeholder="your@email"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <div className="flex items-center justify-between gap-6 pt-4">
                      <p
                        data-testid="intake-error"
                        className={`text-small ${error ? "text-river-deep" : "text-ink-faint"}`}
                      >
                        {error || "We write rarely. When we do, it will be worth reading."}
                      </p>
                      <button
                        type="submit"
                        disabled={state === "submitting"}
                        data-testid="intake-submit"
                        className="group inline-flex items-center gap-3 text-micro tracking-widest uppercase text-ink hover:text-river transition-colors duration-700 ease-gentle disabled:opacity-40"
                      >
                        <span>{state === "submitting" ? "Sending" : "Send"}</span>
                        <span
                          aria-hidden
                          className="block w-10 h-px bg-current transition-[width] duration-700 ease-gentle group-hover:w-16"
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
                  animate={{ opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.22, 0.61, 0.36, 1] } }}
                  className="mt-20 md:mt-24 max-w-reading"
                >
                  <p className="font-display text-2xl md:text-3xl font-light text-ink leading-snug">
                    Received, with care.
                  </p>
                  <p className="mt-6 text-body text-ink-muted">
                    Thank you for the trust of even a single line. We will write
                    only when something is genuinely ready &mdash; not before.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
