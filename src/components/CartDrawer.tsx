import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";

export function CartDrawer() {
  const { isOpen, setOpen, detailedItems, setQuantity, remove, subtotal, clear } = useCart();

  const handleCheckout = () => {
    toast.success("Order placed", {
      description: "This is a demo checkout. Thanks for shopping with Belletny!",
    });
    clear();
    setOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background">
        <SheetHeader>
          <SheetTitle className="font-display text-3xl text-left">Your bag</SheetTitle>
        </SheetHeader>

        {detailedItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <p className="font-display text-2xl text-foreground">Your bag is empty</p>
            <p className="text-sm text-muted-foreground mt-2">
              Discover thoughtful skincare designed for everyday care.
            </p>
            <Button
              className="mt-6 rounded-full bg-wine hover:bg-wine-dark text-cream"
              onClick={() => setOpen(false)}
              asChild
            >
              <Link to="/catalog">Browse catalog</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto -mx-6 px-6 divide-y divide-border">
              {detailedItems.map(({ product, quantity }) => (
                <div key={product.id} className="py-4 flex gap-4">
                  <div className="h-20 w-20 rounded-2xl overflow-hidden bg-secondary shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.size}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-border">
                        <button
                          type="button"
                          className="h-7 w-7 flex items-center justify-center text-foreground/70 hover:text-foreground"
                          onClick={() => setQuantity(product.id, quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm tabular-nums">{quantity}</span>
                        <button
                          type="button"
                          className="h-7 w-7 flex items-center justify-center text-foreground/70 hover:text-foreground"
                          onClick={() => setQuantity(product.id, quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium tabular-nums">
                        ₦{(product.price * quantity).toLocaleString("en-NG")}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(product.id)}
                    className="text-muted-foreground hover:text-destructive self-start p-1"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-display text-2xl tabular-nums">₦{subtotal.toLocaleString("en-NG")}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout. Free delivery in Lagos on orders over ₦50,000.
              </p>
              <Button
                onClick={handleCheckout}
                className="w-full rounded-full bg-wine hover:bg-wine-dark text-cream h-12"
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
