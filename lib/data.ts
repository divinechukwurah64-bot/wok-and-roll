export const site = {
  name: "Wok & Roll",
  tagline: "Big Dreams and Bold Flavors",
  sub: "Teriyaki & Sushi in Kent, WA",
  address: "405 Central Ave N, Kent, WA 98032",
  phone: "(253) 340-7776",
  phoneHref: "tel:+12533407776",
  instagramHandle: "woknroll_kent",
  instagramUrl: "https://www.instagram.com/woknroll_kent/",
  orderUrl: "https://ig.me/m/woknroll_kent",
  hours: [
    { days: "Monday - Saturday", time: "10:00 AM - 9:00 PM" },
    { days: "Sunday", time: "12:00 PM - 8:00 PM" },
  ],
};

export const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export type MenuItem = { name: string; price?: number; description: string };
export type MenuCategory = { id: string; name: string; items: MenuItem[] };

export const menu: MenuCategory[] = [
  {
    id: "sushi",
    name: "Sushi & Fried Sushi",
    items: [
      {
        name: "Diablo Roll",
        price: 30,
        description: "A deep-fried California roll topped with our special house sauce.",
      },
      {
        name: "S15 Wok & Roll",
        price: 32,
        description: "Our namesake signature roll from the fried sushi menu.",
      },
      {
        name: "S16 Miami Roll",
        price: 32,
        description: "A specialty roll from our sushi menu. Message us for the full ingredients.",
      },
      {
        name: "S13 Tempura Cali",
        price: 18,
        description: "A California roll in a crispy tempura coating.",
      },
      {
        name: "California Roll",
        description: "The classic roll with crab, avocado and cucumber.",
      },
      { name: "Spicy Tuna Roll", description: "Tuna rolled with a spicy sauce." },
      { name: "Alaska Roll", description: "A salmon and avocado roll." },
      {
        name: "Hawaiian Roll",
        description: "A sushi roll from our menu. Message us for the ingredients.",
      },
      {
        name: "Las Vegas Roll",
        description: "A sushi roll from our menu. Message us for the ingredients.",
      },
      { name: "Tuna Roll", description: "A simple, classic tuna roll." },
      {
        name: "Caterpillar Roll",
        description: "An avocado-topped roll, traditionally made with eel.",
      },
      {
        name: "Killer Shrimp Roll",
        description: "A shrimp roll from our specialty list. Message us for the ingredients.",
      },
      { name: "Veggie Roll", description: "A vegetable roll with no fish." },
    ],
  },
  {
    id: "teriyaki",
    name: "Teriyaki",
    items: [
      {
        name: "Chicken Teriyaki",
        price: 21,
        description: "Grilled chicken glazed in sweet teriyaki sauce.",
      },
      {
        name: "Beef Teriyaki",
        description: "Grilled beef glazed in sweet teriyaki sauce.",
      },
      { name: "Chicken Katsu", description: "A breaded, crispy fried chicken cutlet." },
      { name: "Beef Short Ribs", description: "Tender beef short ribs from the teriyaki menu." },
    ],
  },
  {
    id: "chinese",
    name: "Chinese Food",
    items: [
      {
        name: "Sweet & Sour Chicken",
        price: 22,
        description: "Crispy chicken pieces in a sweet and tangy sauce.",
      },
      {
        name: "Orange Chicken",
        price: 22,
        description: "Crispy chicken tossed in a sweet orange sauce.",
      },
      {
        name: "Sesame Chicken",
        price: 22,
        description: "Crispy chicken coated in a sweet sesame sauce.",
      },
      {
        name: "Kung Pao Chicken",
        price: 22,
        description: "Chicken stir-fried in a savory sauce with a little heat.",
      },
      {
        name: "General Tso's",
        price: 22,
        description: "Crispy chicken in a tangy, mildly spicy sauce.",
      },
      {
        name: "Hot Crispy Chicken",
        price: 22,
        description: "Crispy fried chicken with a spicy kick.",
      },
      { name: "Spicy Chicken", price: 22, description: "Chicken in a spicy sauce." },
      {
        name: "Mongolian Beef",
        price: 23,
        description: "Sliced beef stir-fried in a savory-sweet sauce.",
      },
      {
        name: "Broccoli Beef",
        price: 23,
        description: "Tender beef stir-fried with broccoli in a savory sauce.",
      },
    ],
  },
  {
    id: "rice",
    name: "Fried Rice",
    items: [
      {
        name: "Vegetable Fried Rice",
        price: 20.99,
        description: "Wok-fried rice with mixed vegetables.",
      },
      { name: "Prawn Fried Rice", price: 21, description: "Wok-fried rice with prawns." },
      { name: "Chicken Fried Rice", price: 22, description: "Wok-fried rice with chicken." },
      { name: "Pork Fried Rice", price: 22, description: "Wok-fried rice with pork." },
      { name: "Beef Fried Rice", price: 23, description: "Wok-fried rice with beef." },
      {
        name: "Combo Fried Rice",
        price: 25,
        description: "Wok-fried rice with a mix of proteins.",
      },
    ],
  },
  {
    id: "yakisoba",
    name: "Yakisoba",
    items: [
      {
        name: "Vegetable Yakisoba",
        price: 22,
        description: "Stir-fried yakisoba noodles with mixed vegetables.",
      },
      {
        name: "Chicken Yakisoba",
        price: 22,
        description: "Stir-fried yakisoba noodles with vegetables and chicken.",
      },
      {
        name: "Beef Yakisoba",
        price: 23,
        description: "Stir-fried yakisoba noodles with vegetables and beef.",
      },
      {
        name: "Pork Yakisoba",
        price: 23,
        description: "Stir-fried yakisoba noodles with vegetables and pork.",
      },
      {
        name: "Yakisoba Combo",
        price: 25,
        description: "A combo meal built around stir-fried yakisoba noodles.",
      },
    ],
  },
  {
    id: "sides",
    name: "Sides & Soup",
    items: [
      { name: "Egg Rolls", description: "Crispy fried egg rolls." },
      { name: "Gyoza", description: "Japanese-style dumplings." },
      { name: "Crab Rangoon", description: "Crispy wontons filled with crab and cream cheese." },
      { name: "Wonton Soup", description: "Savory wonton soup in a generous portion." },
    ],
  },
];

export const allItems = menu.flatMap((category) =>
  category.items.map((item) => ({ item, category }))
);

export const findItem = (itemSlug: string) =>
  allItems.find((entry) => slug(entry.item.name) === itemSlug);

export const ratings = [
  { source: "DoorDash", score: "4.7", count: "50+ ratings" },
  { source: "Postmates", score: "4.6", count: "21 ratings" },
];

export const reviews = [
  {
    name: "Chelsea S.",
    source: "DoorDash",
    date: "March 2026",
    text: "The orange chicken was PERFECTION",
    url: "https://www.doordash.com/store/wok-&-roll---405-central-ave-n-kent-33756815/",
  },
  {
    name: "Tripadvisor reviewer",
    source: "Tripadvisor",
    date: "August 2025",
    text: "Generous portions. We will return.",
    url: "https://www.tripadvisor.ie/ShowUserReviews-g58537-d33400275-r1024594734-What_K_And_Roll_Sushi_Teriyaki-Kent_Washington.html",
  },
  {
    name: "@monkeyandapple",
    source: "TikTok",
    date: "",
    text: "I have yet to be disappointed from anything I've tried.",
    url: "https://www.tiktok.com/place/Wok-Roll-Restaurant-20442395094210294",
  },
];