import { Link } from "@tanstack/react-router";
import { Star, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const hasDiscount = !!product.oldPrice && product.oldPrice > product.price;
  const discount = hasDiscount
    ? Math.round(((product.oldPrice! - product.price) / product.oldPrice!) * 100)
    : 0;

  return (
    <article className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden hover:shadow-product transition-shadow">
      <Link
        to="/product/$productId"
        params={{ productId: product.id }}
        className="relative block aspect-square bg-background"
      >
        {hasDiscount && (
          <span className="absolute top-3 left-3 z-10 rounded-md bg-wine text-cream text-[11px] font-semibold px-2.5 py-1">
            {discount}% OFF
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            add(product.id);
          }}
          className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-wine text-cream flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </Link>
      <div className="px-4 py-4 flex flex-col items-center text-center border-t border-border">
        <div className="flex items-center gap-0.5 text-gold mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-current" />
          ))}
        </div>
        <h3 className="text-sm font-medium text-ink line-clamp-1 w-full">
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="text-sm font-semibold text-ink tabular-nums">
            ₦{product.price.toLocaleString("en-NG")}
          </span>
          {hasDiscount && (
            <span className="text-xs text-muted-foreground line-through tabular-nums">
              ₦{product.oldPrice!.toLocaleString("en-NG")}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
