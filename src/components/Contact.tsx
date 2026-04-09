"use client";

import { motion } from "framer-motion";
import { Globe, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="surface-card p-6 sm:p-8"
        >
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-sm text-slate-600">
            Tell us about your business goals and we will suggest the best Shopify
            package for your growth.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <Phone className="h-4 w-4 text-orange-600" />
              <a href="tel:+919288621081" className="text-sm font-medium text-slate-800">
                +91 9288621081
              </a>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <Globe className="h-4 w-4 text-orange-600" />
              <a
                href="https://www.aalphaleo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-800"
              >
                https://www.aalphaleo.com
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="surface-card space-y-4 p-6 sm:p-8"
        >
          <label className="block text-sm font-medium text-slate-700">
            Name
            <input
              type="text"
              name="name"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-500"
              placeholder="Your name"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              name="email"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-500"
              placeholder="you@example.com"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Phone
            <input
              type="tel"
              name="phone"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-500"
              placeholder="+91"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Message
            <textarea
              name="message"
              rows={4}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-500"
              placeholder="Tell us about your project"
            />
          </label>
          <button type="submit" className="gradient-btn w-full">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
