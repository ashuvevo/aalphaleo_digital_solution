"use client";

import { motion } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  Megaphone,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

const services = [
  {
    title: "Shopify Website Development",
    description:
      "Conversion-first Shopify stores built with custom layouts and optimized user journeys.",
    icon: ShoppingCart,
  },
  {
    title: "Business Website Development",
    description:
      "Professional websites for brands that need speed, credibility, and clear lead capture.",
    icon: Globe,
  },
  {
    title: "WooCommerce Development",
    description:
      "Flexible WooCommerce stores with secure checkout, clean UX, and streamlined catalog setup.",
    icon: LayoutDashboard,
  },
  {
    title: "Mobile App Development",
    description:
      "Scalable mobile apps designed for modern customer experiences and business workflows.",
    icon: Smartphone,
  },
  {
    title: "Digital Marketing Services",
    description:
      "Performance marketing strategies to bring qualified traffic and measurable growth.",
    icon: Megaphone,
  },
];

export function Services() {
  return (
    <section id="services" className="section-shell py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Services
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Our Digital Services
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="surface-card group p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600">
              <service.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {service.description}
            </p>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-indigo-200 to-blue-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
