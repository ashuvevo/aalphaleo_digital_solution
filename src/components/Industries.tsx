"use client";

import { motion } from "framer-motion";

const industries = [
  "Fashion & Clothing",
  "Cosmetics & Perfume",
  "Electronics",
  "Jewelry",
  "Handmade Products",
  "Local Businesses",
  "Dropshipping Stores",
];

export function Industries() {
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
          Industries We Serve
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, index) => (
          <motion.div
            key={industry}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="surface-card px-5 py-4 text-sm font-semibold text-slate-800"
          >
            {industry}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
