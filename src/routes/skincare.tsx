import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/skincare")({
  head: () => ({
    meta: [
      { title: "Skincare — Belletny Nigeria" },
      { name: "description", content: "Cleansers, treatments and moisturizers formulated for Nigerian skin and weather." },
      { property: "og:title", content: "Skincare — Belletny Nigeria" },
      { property: "og:description", content: "Cleansers, treatments and moisturizers formulated for Nigerian skin and weather." },
    ],
  }),
  component: SkincarePage,
});

function SkincarePage() {
  const items = products.filter((p) => p.category === "skincare");
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header variant="solid" />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-sm uppercase tracking-wider text-sage-dark">Collection</p>
          <h1 className="font-display text-5xl sm:text-6xl mt-2">Skincare</h1>
          <p className="mt-4 max-w-xl text-foreground/70">
            A complete routine — designed to be gentle, effective, and effortless.
          </p>
          <div className="mt-12 grid gap-x-6 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
