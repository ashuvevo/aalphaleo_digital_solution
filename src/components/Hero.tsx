"use client";

import { motion } from "framer-motion";
import { BadgeCheck, MessageCircle } from "lucide-react";
import { defaultWebsiteContent, WebsiteContentData } from "@/types/cms";

const highlights = [
  "Custom coded Shopify websites",
  "Mobile responsive design",
  "Secure payment gateway integration",
  "Conversion optimized product pages",
];

type HeroProps = {
  content?: WebsiteContentData["hero"];
  phone?: string;
};

function normalizePhoneToWhatsApp(phone: string) {
  return phone.replace(/[^\d]/g, "");
}

export function Hero({ content, phone = "+91 9288621081" }: HeroProps) {
  const hero = content ?? defaultWebsiteContent.hero;
  const whatsappNumber = normalizePhoneToWhatsApp(phone);

  return (
    <section id="home" className="section-shell relative pt-16 sm:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
            {hero.badge}
          </span>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            {hero.description}
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a href="#contact" className="gradient-btn text-center">
              {hero.primaryCta}
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              {hero.secondaryCta}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="surface-card relative overflow-hidden p-4 sm:p-6"
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r from-orange-500/20 to-red-400/20 blur-2xl" />
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">Shopify Dashboard</p>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                Live Store
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-xs text-slate-500">Today&apos;s Sales</p>
                <p className="pt-2 text-2xl font-bold text-slate-900">₹48,750</p>
                <p className="pt-1 text-xs text-emerald-600">+18.2%</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-xs text-slate-500">Conversion Rate</p>
                <p className="pt-2 text-2xl font-bold text-slate-900">3.8%</p>
                <p className="pt-1 text-xs text-orange-600">Optimized</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-white p-4 shadow-sm">
              <p className="mb-3 text-xs text-slate-500">Top Products</p>
              <div className="space-y-2">
                {[
                  { value: 70, widthClass: "w-[70%]" },
                  { value: 55, widthClass: "w-[55%]" },
                  { value: 44, widthClass: "w-[44%]" },
                ].map((item, i) => (
                  <div key={item.value} className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Product {i + 1}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className={`h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 ${item.widthClass}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
