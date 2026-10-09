"use client";

import { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { site } from "@/lib/data";

type Props = { name: string; price?: number };

export default function OrderPanel({ name, price }: Props) {
  const [qty, setQty] = useState(1);
  const [copied, setCopied] = useState(false);

  const message = `Hi ${site.name}, I'd like to order: ${qty}x ${name}`;
  const total = price !== undefined ? (price * qty).toFixed(2) : null;

  const handleOrder = () => {
    try {
      navigator.clipboard
        .writeText(message)
        .then(() => setCopied(true))
        .catch(() => setCopied(false));
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mt-8 rounded-3xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
      <div className="flex items-center justify-between gap-4">
        <span className="font-heading font-bold">Quantity</span>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition hover:border-orange-500 dark:border-white/15"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-6 text-center font-heading text-lg font-bold">{qty}</span>
          <button
            onClick={() => setQty((q) => Math.min(20, q + 1))}
            aria-label="Increase quantity"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition hover:border-orange-500 dark:border-white/15"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {total && (
        <p className="mt-4 text-sm text-stone-600 dark:text-stone-300">
          Estimated total:{" "}
          <span className="font-semibold text-orange-500">${total}</span> before tax
        </p>
      )}

      <div className="mt-5 rounded-2xl bg-stone-100 p-4 text-sm text-stone-700 dark:bg-white/5 dark:text-stone-200">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
          Your message
        </p>
        {message}
      </div>

      <a
        href={site.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleOrder}
        className="mt-5 flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
      >
        <InstagramIcon />
        Order on Instagram
      </a>

      <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-stone-500 dark:text-stone-400">
        {copied && <Check className="h-4 w-4 text-green-500" />}
        {copied
          ? "Message copied. Paste it into the chat when Instagram opens."
          : "We copy this message for you. Paste it into the Instagram chat."}
      </p>
    </div>
  );
}