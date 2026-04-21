import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <article className="group flex flex-col">
      <Link
        to="/product/$productId"
        params={{ productId: product.id }}
        className="block relative overflow-hidden rounded-3xl bg-secondary aspect-[4/5]"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-xl text-ink truncate">{product.name}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{product.tagline} · {product.size}</p>
        </div>
        <p className="font-medium tabular-nums shrink-0 text-ink">${product.price}</p>
      </div>
      <Button
        type="button"
        onClick={() => add(product.id)}
        className="mt-4 rounded-full bg-ink text-cream hover:bg-ink/85"
      >
        Add to bag
      </Button>
    </article>
  );
}
