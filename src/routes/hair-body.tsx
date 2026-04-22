import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/hair-body")({
  head: () => ({
    meta: [
      { title: "Hair & Body — Sage" },
      { name: "description", content: "Soft, nourishing care for your body and hair." },
      { property: "og:title", content: "Hair & Body — Sage" },
      { property: "og:description", content: "Soft, nourishing care for your body and hair." },
    ],
  }),
  component: HairBodyPage,
});

function HairBodyPage() {
  const items = products.filter((p) => p.category === "hair" || p.category === "body");
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header variant="solid" />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-sm uppercase tracking-wider text-wine">Collection</p>
          <h1 className="font-display text-5xl sm:text-6xl mt-2">Hair & Body</h1>
          <p className="mt-4 max-w-xl text-foreground/70">
            Everyday rituals for soft skin and healthy-looking hair.
          </p>
          {items.length === 0 ? (
            <p className="mt-16 text-foreground/60">New launches coming soon.</p>
          ) : (
            <div className="mt-12 grid gap-x-6 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
