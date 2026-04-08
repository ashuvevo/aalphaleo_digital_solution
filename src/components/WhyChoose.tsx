"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Handshake, IndianRupee, Timer, Wrench } from "lucide-react";

const items = [
  { title: "Experienced developers", icon: BadgeCheck },
  { title: "Custom coded solutions", icon: Wrench },
  { title: "Affordable pricing", icon: IndianRupee },
  { title: "Fast project delivery", icon: Timer },
  { title: "Dedicated support", icon: Handshake },
];

export function WhyChoose() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Why Choose Aalphaleo Digital Solution
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="surface-card p-5 text-center"
          >
            <div className="mx-auto inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600">
              <item.icon className="h-5 w-5" />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-800">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
