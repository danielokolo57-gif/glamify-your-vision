import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { findProduct, products } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { Minus, Plus, Check } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/product/$productId")({
  loader: ({ params }) => {
    const product = findProduct(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Sage` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.name} — Sage` },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
          { name: "twitter:image", content: loaderData.product.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Header variant="solid" />
      <main className="flex-1 flex items-center justify-center text-center px-4">
        <div>
          <h1 className="font-display text-5xl">Product not found</h1>
          <p className="mt-3 text-muted-foreground">This product doesn't exist or has been removed.</p>
          <Button asChild className="mt-6 rounded-full bg-sage hover:bg-sage-dark text-primary-foreground">
            <Link to="/catalog">Back to catalog</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header variant="solid" />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/catalog" className="hover:text-foreground">Catalog</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground truncate">{product.name}</span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-3xl overflow-hidden bg-secondary aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-6">
              <p className="text-sm uppercase tracking-wider text-sage-dark">{product.category}</p>
              <h1 className="font-display text-4xl sm:text-5xl mt-2">{product.name}</h1>
              <p className="mt-2 text-foreground/70">{product.tagline}</p>
              <p className="mt-6 text-3xl font-display tabular-nums">₦{product.price.toLocaleString("en-NG")}</p>
              <p className="mt-4 text-sm text-muted-foreground">{product.size}</p>

              <p className="mt-8 text-foreground/80 leading-relaxed">{product.description}</p>

              <div className="mt-8 flex items-center gap-4">
                <div className="inline-flex items-center rounded-full border border-border h-12">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="h-12 w-12 flex items-center justify-center text-foreground/70 hover:text-foreground"
                    aria-label="Decrease"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center tabular-nums">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="h-12 w-12 flex items-center justify-center text-foreground/70 hover:text-foreground"
                    aria-label="Increase"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button
                  onClick={() => add(product.id, qty)}
                  className="flex-1 rounded-full bg-wine hover:bg-wine-dark text-cream h-12"
                >
                  Add to bag — ₦{(product.price * qty).toLocaleString("en-NG")}
                </Button>
              </div>

              <ul className="mt-10 space-y-3 text-sm text-foreground/80">
                {[
                  "Dermatologist-tested formula",
                  "Free of parabens, sulfates and harsh fragrance",
                  "Recyclable glass packaging",
                  "Free delivery in Lagos on orders over ₦50,000",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="h-6 w-6 rounded-full bg-sage-light flex items-center justify-center text-sage-dark">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className="mt-24">
            <h2 className="font-display text-3xl sm:text-4xl mb-8">You may also like</h2>
            <div className="grid gap-x-6 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
