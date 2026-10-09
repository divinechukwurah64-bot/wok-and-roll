import { Clock, MapPin, Phone } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl font-extrabold">{site.name}</p>
          <p className="mt-3 text-stone-600 dark:text-stone-300">{site.sub}</p>
          <a
            href={site.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            <InstagramIcon />
            Message us to order
          </a>
        </div>

        <div className="space-y-4 text-stone-600 dark:text-stone-300">
          <p className="flex gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
            {site.address}
          </p>
          <p className="flex gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
            <a href={site.phoneHref} className="hover:text-orange-500">
              {site.phone}
            </a>
          </p>
          <p className="flex gap-3">
            <InstagramIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              @{site.instagramHandle}
            </a>
          </p>
        </div>

        <div className="flex gap-3 text-stone-600 dark:text-stone-300">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
          <div className="space-y-1">
            {site.hours.map((h) => (
              <p key={h.days}>
                <span className="font-semibold text-stone-900 dark:text-stone-100">{h.days}</span>
                <br />
                {h.time}
              </p>
            ))}
          </div>
        </div>
      </div>
      <p className="border-t border-black/5 py-6 text-center text-xs text-stone-500 dark:border-white/10 dark:text-stone-400">
        &copy; 2026 {site.name}. Locally owned and operated in Kent, WA.
      </p>
    </footer>
  );
}