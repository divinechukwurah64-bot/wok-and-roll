import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MediaImage from "@/components/MediaImage";
import OrderPanel from "@/components/OrderPanel";
import ScrollToTop from "@/components/ScrollToTop";
import { allItems, findItem, slug, site } from "@/lib/data";
import { stockImage } from "@/lib/images";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allItems.map((entry) => ({ slug: slug(entry.item.name) }));
}

export async function generateMetadata({ params }: Params) {
  const { slug: itemSlug } = await params;
  const entry = findItem(itemSlug);
  return {
    title: entry ? `${entry.item.name} | ${site.name}` : `Menu | ${site.name}`,
    description: entry?.item.description,
  };
}

export default async function MealPage({ params }: Params) {
  const { slug: itemSlug } = await params;
  const entry = findItem(itemSlug);
  if (!entry) notFound();

  const { item, category } = entry;
  const position = category.items.findIndex((i) => i.name === item.name);
  const related = category.items.filter((i) => i.name !== item.name).slice(0, 3);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 md:pt-36">
        <Link
          href="/#menu"
          className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-orange-500 dark:text-stone-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to menu
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <MediaImage
            key={itemSlug}
            src={`/images/menu/${slug(item.name)}.jpg`}
            fallbackSrc={stockImage(category.id, item.name, slug(item.name), position)}
            alt={item.name}
            className="aspect-square w-full rounded-[2.5rem] shadow-2xl"
          />

          <div>
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600 dark:bg-orange-500/15 dark:text-orange-400">
              {category.name}
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold md:text-5xl">{item.name}</h1>
            {item.price !== undefined && (
              <p className="mt-3 font-heading text-2xl font-bold text-orange-500">
                ${item.price.toFixed(2)}
              </p>
            )}
            <p className="mt-5 text-lg text-stone-600 dark:text-stone-300">{item.description}</p>

            <OrderPanel key={itemSlug} name={item.name} price={item.price} />

            <ol className="mt-8 space-y-3 text-sm text-stone-600 dark:text-stone-300">
              <li>
                <span className="font-semibold text-stone-900 dark:text-stone-100">1.</span> Pick
                your quantity above.
              </li>
              <li>
                <span className="font-semibold text-stone-900 dark:text-stone-100">2.</span> Tap
                Order on Instagram and paste the copied message.
              </li>
              <li>
                <span className="font-semibold text-stone-900 dark:text-stone-100">3.</span> We
                confirm your order and pickup time in the chat.
              </li>
            </ol>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-heading text-2xl font-extrabold">
              More from <span className="text-orange-500">{category.name}</span>
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.name}
                  href={`/menu/${slug(r.name)}`}
                  className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
                >
                  <MediaImage
                    key={slug(r.name)}
                    src={`/images/menu/${slug(r.name)}.jpg`}
                    fallbackSrc={stockImage(
                      category.id,
                      r.name,
                      slug(r.name),
                      category.items.findIndex((i) => i.name === r.name)
                    )}
                    alt={r.name}
                    className="h-36 w-full"
                  />
                  <div className="p-4">
                    <p className="font-heading font-bold">{r.name}</p>
                    {r.price !== undefined && (
                      <p className="mt-1 text-sm font-semibold text-orange-500">
                        ${r.price.toFixed(2)}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}