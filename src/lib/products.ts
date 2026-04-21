import cream from "@/assets/glowmuse-cream.jpg";
import foundation from "@/assets/glowmuse-foundation.jpg";
import lips from "@/assets/glowmuse-lips.jpg";
import eye from "@/assets/glowmuse-eye.jpg";
import hero from "@/assets/glowmuse-hero.jpg";

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
    id: "radiance-foundation",
    name: "Radiance Foundation",
    tagline: "Luminous skin-like finish",
    description:
      "A weightless, buildable foundation that evens tone while letting your natural glow show through. Hydrating, breathable, and made for real mornings.",
    price: 42,
    category: "skincare",
    image: foundation,
    size: "30 ml",
  },
  {
    id: "muse-lipstick",
    name: "Muse Satin Lipstick",
    tagline: "Rich satin color",
    description:
      "A creamy, hydrating lipstick in muse-worthy shades. Long-wear pigment with the comfort of a balm — paired with our cult mascara.",
    price: 28,
    category: "skincare",
    image: lips,
    size: "3.5 g",
  },
  {
    id: "glow-cream",
    name: "Inner Glow Cream",
    tagline: "Plump, dewy hydration",
    description:
      "A featherlight moisturizer infused with hyaluronic acid and niacinamide for an instant lit-from-within glow that lasts all day.",
    price: 48,
    category: "skincare",
    image: cream,
    size: "50 ml",
  },
  {
    id: "winged-liner",
    name: "Liquid Winged Liner",
    tagline: "Sharp, all-day wing",
    description:
      "A precision felt-tip liner with intense matte-black pigment. Smudge-proof, waterproof, made for the perfect flick.",
    price: 24,
    category: "accessories",
    image: eye,
    size: "1.2 ml",
  },
  {
    id: "muse-edit",
    name: "The Muse Edit",
    tagline: "Five-piece beauty kit",
    description:
      "Our hero essentials in one curated set: foundation, lipstick, glow cream, mascara, and liner. Everything you need to unleash your inner radiance.",
    price: 138,
    category: "skincare",
    image: hero,
    size: "Set of 5",
  },
  {
    id: "silk-lash-mascara",
    name: "Silk Lash Mascara",
    tagline: "Volume + length",
    description:
      "A buildable mascara that lifts, separates and defines without clumping. Conditions lashes with peptides and silk proteins.",
    price: 26,
    category: "skincare",
    image: lips,
    size: "10 ml",
  },
];

export const findProduct = (id: string) => products.find((p) => p.id === id);
