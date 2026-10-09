import { Clock, MapPin, Phone, Star } from "lucide-react";
import MediaImage from "./MediaImage";
import InstagramIcon from "./InstagramIcon";
import { site } from "@/lib/data";
import { LOGO, heroStock } from "@/lib/images";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pb-16 pt-28 md:pt-40">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <MediaImage
            src={LOGO}
            alt={`${site.name} logo`}
            className="h-32 w-32 rounded-3xl bg-white object-contain p-2 shadow-xl md:h-40 md:w-40"
          />
          <span className="mt-6 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600 dark:bg-orange-500/15 dark:text-orange-400">
            Latino-owned and locally operated
          </span>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight md:text-6xl">
            {site.tagline.split(" and ")[0]} and{" "}
            <span className="text-orange-500">{site.tagline.split(" and ")[1]}</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-stone-600 dark:text-stone-300">
            {site.sub}. Teriyaki, Chinese favorites and fresh sushi, made to order on Central Ave.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
            >
              <InstagramIcon />
              Order on Instagram
            </a>
            <a
              href="#menu"
              className="rounded-full border border-orange-500 px-7 py-3.5 font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white dark:text-orange-400 dark:hover:text-white"
            >
              View Menu
            </a>
          </div>
        </div>

        <div className="relative">
          <MediaImage
            src="/images/hero.jpg"
            fallbackSrc={heroStock}
            alt="Sushi from Wok & Roll"
            className="aspect-square w-full rounded-[2.5rem] shadow-2xl"
          />
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-5 py-3 shadow-xl dark:border-white/10 dark:bg-slate-900">
            <Star className="h-6 w-6 fill-orange-500 text-orange-500" />
            <div>
              <p className="font-heading text-xl font-bold leading-none">4.7</p>
              <p className="text-xs text-stone-500 dark:text-stone-400">on DoorDash</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket-style info strip */}
      <div className="relative mt-20 rounded-3xl border border-black/5 bg-white p-6 shadow-lg md:p-8 dark:border-white/10 dark:bg-slate-900">
        <span className="absolute -left-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-stone-50 md:block dark:bg-[#0b1220]" />
        <span className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-stone-50 md:block dark:bg-[#0b1220]" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex gap-4">
            <Clock className="mt-1 h-6 w-6 shrink-0 text-orange-500" />
            <div>
              <p className="font-heading font-bold">Hours</p>
              {site.hours.map((h) => (
                <p key={h.days} className="text-sm text-stone-600 dark:text-stone-300">
                  {h.days}: {h.time}
                </p>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="mt-1 h-6 w-6 shrink-0 text-orange-500" />
            <div>
              <p className="font-heading font-bold">Call us</p>
              <a href={site.phoneHref} className="text-sm text-stone-600 hover:text-orange-500 dark:text-stone-300">
                {site.phone}
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin className="mt-1 h-6 w-6 shrink-0 text-orange-500" />
            <div>
              <p className="font-heading font-bold">Visit us</p>
              <p className="text-sm text-stone-600 dark:text-stone-300">{site.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}