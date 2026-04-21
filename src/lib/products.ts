import jar from "@/assets/product-jar.jpg";
import spray from "@/assets/product-spray.jpg";
import pump from "@/assets/product-pump.jpg";
import trio from "@/assets/product-trio.jpg";
import collection from "@/assets/product-collection.jpg";
import tubes from "@/assets/product-tubes.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: "skincare" | "hair" | "body" | "accessories";
  image: string;
  size: string;
};

export const products: Product[] = [
  {
    id: "renewal-cream",
    name: "Renewal Night Cream",
    tagline: "Restorative overnight treatment",
    description:
      "A rich, slow-absorbing cream formulated with squalane, ceramides, and bakuchiol to support your skin's natural overnight renewal cycle.",
    price: 48,
    category: "skincare",
    image: jar,
    size: "50 ml",
  },
  {
    id: "hydrating-mist",
    name: "Hydrating Botanical Mist",
    tagline: "Refresh & set",
    description:
      "A fine, weightless mist of rose water, aloe and hyaluronic acid. Use to refresh skin throughout the day or set makeup with a soft dewy finish.",
    price: 28,
    category: "skincare",
    image: spray,
    size: "100 ml",
  },
  {
    id: "gentle-cleanser",
    name: "Gentle Daily Cleanser",
    tagline: "Calm, balanced skin",
    description:
      "A pH-balanced gel cleanser that lifts impurities without stripping. Suitable for sensitive and reactive skin, every day, morning and night.",
    price: 32,
    category: "skincare",
    image: pump,
    size: "200 ml",
  },
  {
    id: "all-in-one-trio",
    name: "All-in-One Routine Trio",
    tagline: "Three steps, every day",
    description:
      "Cleanser, serum and moisturizer — the complete daily routine in three thoughtful formulas. A gentle introduction to the Sage philosophy.",
    price: 96,
    category: "skincare",
    image: trio,
    size: "Set of 3",
  },
  {
    id: "complete-collection",
    name: "The Complete Collection",
    tagline: "Everything you need",
    description:
      "Our full skincare line in one carefully curated set. Cleanser, toner, serum and treatment — designed to work in harmony.",
    price: 168,
    category: "skincare",
    image: collection,
    size: "Set of 4",
  },
  {
    id: "hand-balm-duo",
    name: "Hand & Cuticle Balm Duo",
    tagline: "Pocket-sized care",
    description:
      "A pair of nourishing balms infused with shea butter and sweet almond oil. Slip one in your bag, keep one by the sink.",
    price: 24,
    category: "body",
    image: tubes,
    size: "2 × 30 ml",
  },
];

export const findProduct = (id: string) => products.find((p) => p.id === id);
