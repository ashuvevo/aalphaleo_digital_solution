"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  Megaphone,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import { serviceLinks } from "@/lib/services";

const services = [
  {
    title: "Shopify Development",
    icon: ShoppingCart,
  },
  {
    title: "Website Development",
    icon: Globe,
  },
  {
    title: "WooCommerce Development",
    icon: LayoutDashboard,
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
  },
];

const servicesWithRoutes = services.map((service) => {
  const matchedRoute = serviceLinks.find((item) => item.label === service.title);

  return {
    ...service,
    href: matchedRoute?.href ?? "/services",
    description: matchedRoute?.description ?? "",
  };
});

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
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
          Services
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Our Digital Services
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesWithRoutes.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="surface-card group p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <Link href={service.href} className="block">
              <div className="mb-4 inline-flex rounded-xl bg-orange-50 p-3 text-orange-600">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-orange-200 to-red-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
