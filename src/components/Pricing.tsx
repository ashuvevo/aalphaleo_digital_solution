"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter Package",
    price: "₹10,000",
    cta: "Get Starter Package",
    featured: false,
    features: [
      "Shopify store setup",
      "Custom homepage design",
      "Mobile responsive layout",
      "Product upload (10 products)",
      "Payment gateway integration",
      "Shipping setup",
      "WhatsApp chat integration",
      "Basic SEO setup",
    ],
  },
  {
    name: "Premium Package",
    price: "₹20,000",
    cta: "Get Premium Package",
    featured: true,
    features: [
      "Fully custom coded Shopify website",
      "Premium homepage design",
      "Mobile + desktop responsive design",
      "Product upload (30 products)",
      "Payment gateway integration",
      "Shipping partner integration",
      "One click checkout integration",
      "WhatsApp integration",
      "Conversion optimized product pages",
      "Speed optimized store",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-shell py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Pricing
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Shopify Website Packages
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {plans.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "surface-card p-7",
              plan.featured &&
                "relative border-indigo-300 bg-gradient-to-b from-indigo-50 to-white shadow-[0_18px_40px_-18px_rgba(79,70,229,0.65)]",
            )}
          >
            {plan.featured && (
              <span className="absolute right-6 top-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
            <p className="mt-3 text-4xl font-bold text-slate-900">{plan.price}</p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={cn(
                "mt-8 inline-flex w-full items-center justify-center",
                plan.featured ? "gradient-btn" : "ghost-btn",
              )}
            >
              {plan.cta}
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
