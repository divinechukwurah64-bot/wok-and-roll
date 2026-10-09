"use client";

import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import MediaImage from "./MediaImage";
import ThemeToggle from "./ThemeToggle";
import InstagramIcon from "./InstagramIcon";
import { site } from "@/lib/data";
import { LOGO } from "@/lib/images";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#menu", label: "Menu" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

function Brand() {
  return (
    <a href="/" className="flex items-center gap-3">
      <MediaImage
        src={LOGO}
        alt={`${site.name} logo`}
        className="h-10 w-10 rounded-xl bg-white object-contain p-0.5"
      />
      <span className="font-heading text-lg font-bold tracking-tight">{site.name}</span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Laptop: floating glass bar */}
      <header className="fixed left-1/2 top-4 z-50 hidden w-[min(92%,64rem)] -translate-x-1/2 items-center justify-between rounded-full border border-white/50 bg-white/50 px-6 py-3 shadow-lg shadow-black/5 backdrop-blur-xl backdrop-saturate-150 md:flex dark:border-white/10 dark:bg-white/10">
        <Brand />
        <nav className="flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-stone-700 transition hover:text-orange-500 dark:text-stone-200 dark:hover:text-orange-400"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={site.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            <InstagramIcon className="h-4 w-4" />
            Order
          </a>
        </div>
      </header>

      {/* Mobile: top bar with hamburger */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-black/5 bg-white/70 px-4 py-3 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-[#0b1220]/70">
        <Brand />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 dark:border-white/15 dark:bg-white/10"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile: slide-in panel */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-4/5 max-w-sm flex-col bg-stone-50 p-6 shadow-2xl transition-transform duration-300 dark:bg-[#0b1220] ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <span className="font-heading text-lg font-bold">{site.name}</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/15"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-6 font-heading text-2xl font-semibold">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-orange-500"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={site.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 font-semibold text-white"
          >
            <InstagramIcon />
            Order on Instagram
          </a>
        </aside>
      </div>
    </>
  );
}