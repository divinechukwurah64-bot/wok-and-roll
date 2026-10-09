"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MediaImage from "./MediaImage";
import { menu, slug } from "@/lib/data";
import { stockImage } from "@/lib/images";

export default function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-20">
      <div className="text-center">
        <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
          Our <span className="text-orange-500">Menu</span>
        </h2>
        <p className="mt-3 text-stone-600 dark:text-stone-300">
          Tap a dish to see the details, then order on Instagram.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {menu.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              active === c.id
                ? "bg-orange-500 text-white"
                : "border border-black/10 bg-white text-stone-700 hover:border-orange-500 dark:border-white/10 dark:bg-slate-900 dark:text-stone-200"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item, i) => (
          <Link
            key={item.name}
            href={`/menu/${slug(item.name)}`}
            className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
          >
            <MediaImage
              src={`/images/menu/${slug(item.name)}.jpg`}
              fallbackSrc={stockImage(category.id, item.name, slug(item.name), i)}
              alt={item.name}
              className="h-44 w-full"
            />
            <div className="flex items-center justify-between gap-4 p-5">
              <div>
                <h3 className="font-heading text-lg font-bold">{item.name}</h3>
                {item.price !== undefined && (
                  <p className="mt-1 font-semibold text-orange-500">${item.price.toFixed(2)}</p>
                )}
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white transition group-hover:bg-orange-600">
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-stone-500 dark:text-stone-400">
        Prices match the online ordering listings and may change. Message us to confirm.
      </p>
    </section>
  );
}