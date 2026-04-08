"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Custom Shopify design",
  "Fast loading website",
  "SEO optimized structure",
  "Secure checkout integration",
  "Mobile optimized experience",
  "Easy product management",
];

export function ShopifySection() {
  return (
    <section id="shopify" className="section-shell py-20 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="space-y-5"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Core Expertise
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Custom Shopify Website Development
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            We build high-performance Shopify stores that are designed for
            conversions, speed, and scalability.
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="surface-card overflow-hidden p-5"
        >
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-900">Storefront Preview</h3>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                Custom Coded
              </span>
            </div>
            <div className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-3">
                {["Hero Banner", "Featured", "Checkout"].map((label) => (
                  <div key={label} className="rounded-xl bg-white p-3 shadow-sm">
                    <p className="text-xs text-slate-500">{label}</p>
                    <div className="mt-2 h-2 rounded bg-gradient-to-r from-indigo-500 to-blue-500" />
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-800">Performance Metrics</p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-lg font-bold text-slate-900">96</p>
                    <p className="text-xs text-slate-500">PageSpeed</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">2.1s</p>
                    <p className="text-xs text-slate-500">Load Time</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">+34%</p>
                    <p className="text-xs text-slate-500">CVR Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
