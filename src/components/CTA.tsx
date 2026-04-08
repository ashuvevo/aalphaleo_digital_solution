"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 px-6 py-14 text-white sm:px-10"
      >
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-16 left-10 h-44 w-44 rounded-full bg-blue-300/20 blur-2xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Launch Your Shopify Store Today</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-indigo-100">
            Start selling online with a professional Shopify website designed to
            increase your sales.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5"
            >
              Start Your Shopify Website
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
