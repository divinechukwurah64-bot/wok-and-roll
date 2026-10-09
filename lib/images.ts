export const LOGO = "/images/logo.jpg";

const unsplash = (id: string, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=70`;

const photos = {
  sushiOne: "photo-1712725214706-e564b8dd1bbe",
  sushiTwo: "photo-1667510293794-d3b02072d154",
  chineseChicken: "photo-1747628857852-2ffef1e3d06b",
  friedRice: "photo-1627308595186-e6bb36712645",
};

// To use a better photo for a dish, add its dish slug and an Unsplash photo id
// (the "photo-..." part of an images.unsplash.com link) or a full image URL.
export const overrides: Record<string, string> = {
  // "chicken-teriyaki": "photo-xxxxxxxxxxxx",
};

export const heroStock = unsplash(photos.sushiTwo, 1200);

export function stockImage(
  categoryId: string,
  itemName: string,
  slugValue: string,
  index = 0
): string | undefined {
  const override = overrides[slugValue];
  if (override) return override.startsWith("http") ? override : unsplash(override);

  if (categoryId === "sushi") {
    return unsplash(index % 2 === 0 ? photos.sushiOne : photos.sushiTwo);
  }
  if (categoryId === "rice") return unsplash(photos.friedRice);
  if (categoryId === "chinese" && !/beef/i.test(itemName)) {
    return unsplash(photos.chineseChicken);
  }
  return undefined;
}
