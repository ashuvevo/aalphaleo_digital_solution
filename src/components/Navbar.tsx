"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Menu, PhoneCall, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { serviceLinks } from "@/lib/services";
import { defaultSiteSettings, SiteSettingsData } from "@/types/cms";

type NavbarProps = {
  settings?: SiteSettingsData;
};

function toTel(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function Navbar({ settings }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSettings = settings ?? defaultSiteSettings;
  const navItems = activeSettings.navItems.filter((item) => item.label !== "Services");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="text-slate-900" aria-label="Aalphaleo Digital Solution home">
          <Image
            src={activeSettings.logoUrl || "/logo.png"}
            alt="Aalphaleo Digital Solution logo"
            width={300}
            height={300}
            className="h-auto w-[150px] rounded-xl"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          <li className="group relative">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </Link>

            <div className="invisible absolute left-0 top-full z-20 mt-3 w-72 rounded-2xl border border-slate-200/90 bg-white/95 p-2 opacity-0 shadow-xl backdrop-blur transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </li>

          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href={toTel(activeSettings.phone)} className="gradient-btn inline-flex items-center gap-2">
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
          <Link
            href="/services"
            className="text-sm font-semibold text-slate-800"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <div className="ml-3 flex flex-col gap-3 border-l border-slate-200 pl-3">
            {serviceLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="text-sm font-medium text-slate-700"
                onClick={() => setIsOpen(false)}
              >
                {service.label}
              </Link>
            ))}
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={toTel(activeSettings.phone)}
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
