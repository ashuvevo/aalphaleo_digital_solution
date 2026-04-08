"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, PhoneCall, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Shopify Development", href: "#shopify" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-tight text-slate-900">
          Aalphaleo Digital Solution
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="gradient-btn inline-flex items-center gap-2">
            <PhoneCall className="h-4 w-4" />
            Get Free Consultation
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className={cn(
          "overflow-hidden border-t border-slate-200/60 bg-white/90 md:hidden",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div className="section-shell flex flex-col gap-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gradient-btn inline-flex w-full items-center justify-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <PhoneCall className="h-4 w-4" />
            Get Free Consultation
          </a>
        </div>
      </motion.div>
    </header>
  );
}
