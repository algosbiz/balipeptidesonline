"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PlusIcon } from "@/components/Icons";

export default function FAQ() {
  // Only one answer is open at a time. null means all are closed.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="section bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title" className="section-title mt-4">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-muted">
            Have another question?{" "}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Message us on WhatsApp
            </a>
          </p>
        </div>

        <div className="reveal divide-y divide-line border-y border-line">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    id={`faq-question-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium text-heading transition hover:text-primary-dark sm:text-xl"
                  >
                    {faq.question}
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full border transition duration-300 ${
                        isOpen
                          ? "rotate-45 border-secondary bg-secondary text-white"
                          : "border-line text-heading"
                      }`}
                    >
                      <PlusIcon className="size-4" />
                    </span>
                  </button>
                </h3>

                {/* Animating grid rows from 0fr to 1fr gives a smooth open/close without measuring heights */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pr-12 pb-6 leading-relaxed text-muted">
                      {faq.answer}
                      {faq.link && (
                        <>
                          {" "}
                          <a
                            href={faq.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link"
                          >
                            {faq.link.label}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
