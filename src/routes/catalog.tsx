import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { useMemo, useState } from "react";

const categories = [
  { id: "all", label: "All" },
  { id: "skincare", label: "Skincare" },
  { id: "hair", label: "Hair" },
  { id: "body", label: "Body" },
  { id: "accessories", label: "Accessories" },
] as const;

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Catalog — Sage" },
      { name: "description", content: "Browse the complete Sage skincare and body care catalog." },
      { property: "og:title", content: "Catalog — Sage" },
      { property: "og:description", content: "Browse the complete Sage skincare and body care catalog." },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const [active, setActive] = useState<(typeof categories)[number]["id"]>("all");

  const filtered = useMemo(
    () => (active === "all" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header variant="solid" />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Catalog</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl mt-3">Catalog</h1>
          <p className="mt-3 max-w-xl text-foreground/70">
            Thoughtful formulas for skin, hair and body — designed to work together.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`rounded-full px-4 py-2 text-sm border transition-colors ${
                  active === cat.id
                    ? "bg-wine text-cream border-wine"
                    : "border-border text-foreground/80 hover:border-foreground/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-muted-foreground">
              No products in this category yet — check back soon.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
