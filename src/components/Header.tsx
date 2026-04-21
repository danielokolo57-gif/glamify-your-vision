import { Link } from "@tanstack/react-router";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { to: "/about", label: "About us" },
  { to: "/catalog", label: "Catalog" },
  { to: "/skincare", label: "Skincare" },
  { to: "/hair-body", label: "Hair & Body" },
  { to: "/accessories", label: "Accessories" },
  { to: "/blog", label: "Blog" },
] as const;

export function Header({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const { count, setOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const baseClass =
    variant === "overlay"
      ? "absolute top-0 left-0 right-0 z-30"
      : "sticky top-0 z-30 bg-background/90 backdrop-blur border-b border-border/60";

  return (
    <header className={baseClass}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div
          className={`flex items-center justify-between gap-4 rounded-full px-4 sm:px-6 py-3 ${
            variant === "overlay"
              ? "bg-foreground/15 backdrop-blur-md border border-white/10"
              : "bg-card border border-border"
          }`}
        >
          <Link
            to="/"
            className={`flex items-center justify-center h-9 w-9 rounded-full ${
              variant === "overlay" ? "bg-cream" : "bg-sage-light"
            }`}
            aria-label="Sage home"
          >
            <span className="font-display text-xl text-sage-dark leading-none">s</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm transition-opacity hover:opacity-100 ${
                  variant === "overlay"
                    ? "text-cream/90 hover:text-cream"
                    : "text-foreground/80 hover:text-foreground"
                }`}
                activeProps={{ className: "opacity-100 font-medium" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={`relative flex items-center justify-center h-10 w-10 rounded-full transition-colors ${
                variant === "overlay"
                  ? "text-cream hover:bg-white/10"
                  : "text-foreground hover:bg-secondary"
              }`}
              aria-label={`Open cart, ${count} items`}
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-5 w-5 rounded-full bg-sage text-primary-foreground text-[11px] font-medium flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            <button
              type="button"
              className={`lg:hidden flex items-center justify-center h-10 w-10 rounded-full ${
                variant === "overlay" ? "text-cream" : "text-foreground"
              }`}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-3 rounded-3xl bg-card border border-border p-4 shadow-soft">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-2xl text-foreground/85 hover:bg-secondary transition-colors"
                  activeProps={{ className: "bg-secondary font-medium" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
