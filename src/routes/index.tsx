import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";
import hero from "@/assets/belletny-hero.jpg";
import promo1 from "@/assets/belletny-promo-1.jpg";
import promo2 from "@/assets/belletny-promo-2.jpg";
import catHair from "@/assets/cat-hair.jpg";
import catBrushes from "@/assets/cat-brushes.jpg";
import catPerfume from "@/assets/cat-perfume.jpg";
import catSkincare from "@/assets/cat-skincare.jpg";
import catLipstick from "@/assets/cat-lipstick.jpg";
import catFaceCream from "@/assets/cat-facecream.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière Beauty — Premium beauty & skincare" },
      {
        name: "description",
        content:
          "Lumière Beauty brings you premium cosmetics, skincare and fragrance — luxury formulas, honest ingredients, and elegant essentials for every glow.",
      },
      { property: "og:title", content: "Lumière Beauty — Premium beauty & skincare" },
      {
        property: "og:description",
        content: "Premium cosmetics, skincare and fragrance for every glow.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: HomePage,
});

const categories = [
  { label: "Hair Cream", img: catHair, to: "/hair-body" as const },
  { label: "Makeup Brushes", img: catBrushes, to: "/accessories" as const },
  { label: "Perfumes", img: catPerfume, to: "/catalog" as const },
  { label: "Skincare Cream", img: catSkincare, to: "/skincare" as const },
  { label: "Makeup Lipstick", img: catLipstick, to: "/catalog" as const },
  { label: "Face Cream", img: catFaceCream, to: "/skincare" as const },
];

const tabs = ["New Arrivals", "Bestseller", "Special"] as const;

function HomePage() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("New Arrivals");

  const tabProducts =
    activeTab === "New Arrivals"
      ? products.slice(0, 6)
      : activeTab === "Bestseller"
      ? products.slice(6, 12)
      : [...products].reverse().slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero banner */}
        <section className="bg-background pt-4 sm:pt-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden bg-cream">
              <div className="grid lg:grid-cols-2">
                <div className="px-6 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-20 flex flex-col justify-center order-2 lg:order-1">
                  <p className="text-sm text-wine font-medium">Sale Up To 40% Off</p>
                  <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
                    Aloe Vera Natural<br />Cosmetics
                  </h1>
                  <p className="mt-5 max-w-md text-ink/70 leading-relaxed text-[15px]">
                    Discover gentle, plant-powered formulas that nourish your
                    skin and reveal your natural glow.
                  </p>
                  <div className="mt-7">
                    <Link
                      to="/catalog"
                      className="inline-flex items-center justify-center rounded-full bg-wine text-cream text-sm font-medium h-12 px-8 hover:bg-wine-dark transition-colors"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] order-1 lg:order-2">
                  <img
                    src={hero}
                    alt="Smiling model applying Lumière Beauty natural face cream"
                    width={1920}
                    height={1080}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service strip */}
        <section className="bg-background py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 rounded-2xl border border-border bg-cream-soft p-6 sm:p-8">
              {[
                { icon: Truck, title: "Free Shipping", body: "On Lagos orders over ₦50,000" },
                { icon: RotateCcw, title: "Easy Returns", body: "7-day money back" },
                { icon: ShieldCheck, title: "Secure Payment", body: "Paystack & Flutterwave" },
                { icon: Headphones, title: "24/7 Support", body: "WhatsApp +234 803 123 4567" },
              ].map((s) => (
                <div key={s.title} className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-wine/10 text-wine flex items-center justify-center shrink-0">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-ink">{s.title}</p>
                    <p className="text-xs text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-background py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {categories.map((c) => (
                <Link
                  key={c.label}
                  to={c.to}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="aspect-square w-full max-w-[140px] rounded-full bg-cream-soft border border-border overflow-hidden flex items-center justify-center transition-shadow group-hover:shadow-product">
                    <img
                      src={c.img}
                      alt={c.label}
                      loading="lazy"
                      className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-ink group-hover:text-wine transition-colors">
                    {c.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Promo banners */}
        <section className="bg-background py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 lg:grid-cols-2">
            {[
              {
                discount: "25% Discount",
                title: "Cosmetic Skin",
                title2: "Perfectly",
                img: promo1,
                to: "/catalog" as const,
              },
              {
                discount: "30% Discount",
                title: "Hydrated Skin",
                title2: "Perfectly",
                img: promo2,
                to: "/skincare" as const,
              },
            ].map((b) => (
              <div
                key={b.title}
                className="relative rounded-2xl overflow-hidden bg-cream"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center min-h-[220px]">
                  <div className="px-6 sm:px-10 py-8 order-2 sm:order-1">
                    <p className="text-sm text-ink/70">{b.discount}</p>
                    <h3 className="mt-1 font-display text-2xl sm:text-3xl lg:text-4xl text-ink leading-tight">
                      {b.title}<br />{b.title2}
                    </h3>
                    <Link
                      to={b.to}
                      className="mt-5 inline-flex items-center justify-center rounded-full bg-wine text-cream text-sm font-medium h-10 px-6 hover:bg-wine-dark transition-colors"
                    >
                      Shop Now
                    </Link>
                  </div>
                  <div className="relative h-full min-h-[220px] order-1 sm:order-2">
                    <img
                      src={b.img}
                      alt={b.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Products */}
        <section className="bg-background py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl sm:text-4xl text-ink">Trending Products</h2>
              <div className="mt-2 mx-auto h-px w-12 bg-wine/40" />
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
              {tabs.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setActiveTab(t)}
                  className={`rounded-full text-sm h-10 px-5 transition-colors ${
                    activeTab === t
                      ? "bg-wine text-cream"
                      : "text-ink/70 hover:text-wine"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {tabProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/catalog"
                className="inline-flex items-center justify-center rounded-full bg-wine text-cream text-sm font-medium h-12 px-8 hover:bg-wine-dark transition-colors"
              >
                View More Products
              </Link>
            </div>
          </div>
        </section>

        <div className="pb-8" />
      </main>

      <Footer />
    </div>
  );
}
