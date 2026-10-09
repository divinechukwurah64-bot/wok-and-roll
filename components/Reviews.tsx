import { Star } from "lucide-react";
import { ratings, reviews } from "@/lib/data";

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-20">
      <div className="text-center">
        <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
          What <span className="text-orange-500">They Say</span>
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {ratings.map((r) => (
            <div
              key={r.source}
              className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-5 py-3 shadow-sm dark:border-white/10 dark:bg-slate-900"
            >
              <Star className="h-6 w-6 fill-orange-500 text-orange-500" />
              <div className="text-left">
                <p className="font-heading text-xl font-bold leading-none">{r.score}</p>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  {r.source}, {r.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <figure
            key={r.source}
            className="flex flex-col rounded-3xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900"
          >
            <Stars />
            <blockquote className="mt-4 flex-1 text-lg font-medium leading-relaxed">
              &ldquo;{r.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-stone-500 dark:text-stone-400">
              <span className="font-semibold text-stone-800 dark:text-stone-100">{r.name}</span>
              {" on "}
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                {r.source}
              </a>
              {r.date && `, ${r.date}`}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}