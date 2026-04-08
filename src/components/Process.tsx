"use client";

import { motion } from "framer-motion";

const steps = [
  "Requirement Discussion",
  "Store Design",
  "Development",
  "Testing",
  "Launch",
];

export function Process() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Our Development Process
        </h2>
      </motion.div>

      <div className="mt-12 surface-card p-6 sm:p-8">
        <ul className="grid gap-5 sm:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative rounded-2xl border border-slate-200 bg-white p-4"
              >
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold text-slate-800">{step}</p>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
