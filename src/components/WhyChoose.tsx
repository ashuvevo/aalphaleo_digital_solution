"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Handshake, IndianRupee, Timer, Wrench } from "lucide-react";
import { defaultWebsiteContent } from "@/types/cms";

const fallbackItems = [
  "Experienced developers",
  "Custom coded solutions",
  "Affordable pricing",
  "Fast project delivery",
  "Dedicated support",
];

const icons = [BadgeCheck, Wrench, IndianRupee, Timer, Handshake];

type WhyChooseProps = {
  heading?: string;
  items?: string[];
};

export function WhyChoose({
  heading = defaultWebsiteContent.about.heading,
  items = defaultWebsiteContent.about.items,
}: WhyChooseProps) {
  const activeItems = items.length > 0 ? items : fallbackItems;

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
          {heading}
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {activeItems.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="surface-card p-5 text-center"
          >
            <div className="mx-auto inline-flex rounded-xl bg-orange-50 p-3 text-orange-600">
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-800">{item}</p>
          </motion.div>
          );
        })}
      </div>
    </section>
  );
}
