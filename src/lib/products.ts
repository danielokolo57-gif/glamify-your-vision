import eyeshadow from "@/assets/prod-eyeshadow.jpg";
import foundation from "@/assets/belletny-promo-1.jpg";
import lipstickPink from "@/assets/prod-lipstick-pink.jpg";
import sponge from "@/assets/prod-sponge.jpg";
import brow from "@/assets/prod-brow.jpg";
import roller from "@/assets/prod-roller.jpg";
import perfumeGold from "@/assets/prod-perfume-gold.jpg";
import facecream from "@/assets/cat-facecream.jpg";
import lipstickGold from "@/assets/cat-lipstick.jpg";
import hairCream from "@/assets/cat-hair.jpg";
import skincare from "@/assets/cat-skincare.jpg";
import perfumePink from "@/assets/cat-perfume.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  oldPrice?: number;
  category: "skincare" | "hair" | "body" | "accessories";
  image: string;
  size: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "ultimate-eye-shadow",
    name: "Belletny Ultimate Eye Shadow",
    tagline: "10-shade matte palette",
    description:
      "A pro-level eyeshadow palette featuring ten richly pigmented matte and shimmer shades, blendable enough for everyday and bold enough for the Lagos nightlife.",
    price: 17500,
    category: "accessories",
    image: eyeshadow,
    size: "12 g",
    badge: "New",
  },
  {
    id: "nutriglow-foundation",
    name: "NutriGlow Gold Kesar",
    tagline: "Radiance foundation",
    description:
      "Lightweight, buildable coverage infused with saffron and gold particles for a luminous, even complexion that lasts all day in the Nigerian sun.",
    price: 19500,
    oldPrice: 22000,
    category: "skincare",
    image: foundation,
    size: "30 ml",
  },
  {
    id: "fab-renee-glow",
    name: "Fab Renee Glow Combo",
    tagline: "Lipstick + balm duo",
    description:
      "A creamy satin lipstick paired with a hydrating tinted balm — perfect for swiping on color and shine in seconds.",
    price: 20500,
    oldPrice: 23000,
    category: "skincare",
    image: lipstickPink,
    size: "Set of 2",
  },
  {
    id: "makeup-sponges-kit",
    name: "Makeup Sponges Kit",
    tagline: "Flawless blending",
    description:
      "Latex-free, ultra-soft sponges that hug the contours of your face for a streak-free, airbrushed finish every time.",
    price: 8500,
    oldPrice: 10500,
    category: "accessories",
    image: sponge,
    size: "Set of 4",
  },
  {
    id: "yangina-eye-liner",
    name: "Yangina Eye Liner",
    tagline: "Precision liquid liner",
    description:
      "A felt-tip liquid eyeliner with deep matte-black pigment and a precision tip for sharp wings or soft definition.",
    price: 9500,
    oldPrice: 11000,
    category: "skincare",
    image: brow,
    size: "1.2 ml",
  },
  {
    id: "matte-poreless-foundation",
    name: "Matte Poreless Liquid Tube",
    tagline: "Soft matte finish",
    description:
      "A breathable matte foundation that minimizes the look of pores and controls shine for up to 12 hours of natural-looking wear — built for humid days.",
    price: 18500,
    oldPrice: 22500,
    category: "skincare",
    image: foundation,
    size: "30 ml",
  },
  {
    id: "boho-beauty-canvas",
    name: "Boho Beauty Canvas Kit",
    tagline: "Everyday essentials",
    description:
      "A curated kit of must-have beauty essentials packed in a chic canvas pouch — perfect for travel or topping up at the office.",
    price: 15500,
    category: "accessories",
    image: hairCream,
    size: "Set of 6",
  },
  {
    id: "renee-skin-prep-combo",
    name: "Renee Skin Prep Combo",
    tagline: "Roller + serum duo",
    description:
      "Cool, sculpt and glow with a rose quartz facial roller and our cult vitamin C brightening serum — daily ritual, instant results.",
    price: 17000,
    oldPrice: 19500,
    category: "skincare",
    image: roller,
    size: "Set of 2",
  },
  {
    id: "my-tya-makeup-kit",
    name: "My Tya Fashion Makeup Kit",
    tagline: "Complete face kit",
    description:
      "Foundation, blush, highlighter and lipsticks in one beautifully boxed kit — everything you need for a complete owambe-ready face.",
    price: 16500,
    category: "skincare",
    image: facecream,
    size: "Set of 8",
  },
  {
    id: "swiss-beauty-blusher",
    name: "Swiss Beauty Blusher",
    tagline: "Buildable cheek color",
    description:
      "A silky-soft powder blush with finely milled pigments that blend like a dream — for a fresh, healthy flush of color.",
    price: 13500,
    oldPrice: 16000,
    category: "skincare",
    image: perfumeGold,
    size: "8 g",
  },
  {
    id: "satin-rose-lipstick",
    name: "Satin Rose Lipstick",
    tagline: "All-day rose",
    description:
      "A creamy satin-finish lipstick in a flattering rose hue, with peptide complex to keep lips soft and conditioned.",
    price: 7500,
    oldPrice: 9500,
    category: "skincare",
    image: lipstickGold,
    size: "3.5 g",
  },
  {
    id: "rose-eau-de-parfum",
    name: "Rosé Eau de Parfum",
    tagline: "Fresh floral",
    description:
      "A fresh, modern floral fragrance built around bulgarian rose, peony and white musk — light, romantic and unforgettable.",
    price: 24500,
    category: "skincare",
    image: perfumePink,
    size: "50 ml",
  },
  {
    id: "skincare-cleanser",
    name: "Botanical Gel Cleanser",
    tagline: "Daily clarity",
    description:
      "A pH-balanced gel cleanser with green tea and aloe — gentle enough for daily use, strong enough to remove sunscreen and Lagos-day grime.",
    price: 6500,
    category: "skincare",
    image: skincare,
    size: "200 ml",
  },
];

export const findProduct = (id: string) => products.find((p) => p.id === id);
