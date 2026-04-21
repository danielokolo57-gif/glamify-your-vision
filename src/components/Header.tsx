import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/skincare", label: "Eyes" },
  { to: "/hair-body", label: "Lips" },
  { to: "/catalog", label: "Face" },
  { to: "/accessories", label: "Skin" },
  { to: "/about", label: "Offers" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const { count, setOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isOverlay = variant === "overlay";

  return (
    <header
      className={
        isOverlay
          ? "absolute top-0 left-0 right-0 z-30"
          : "sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border/60"
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div
          className={`flex items-center justify-between gap-3 rounded-full pl-5 pr-2 py-2 ${
            isOverlay
              ? "bg-cream/95 backdrop-blur border border-ink/10 shadow-soft"
              : "bg-card border border-border"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Glowmuse home">
            <span className="font-display italic text-2xl text-ink leading-none">Glowmuse</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[13px] text-ink/70 hover:text-ink transition-colors"
                activeProps={{ className: "text-ink font-medium underline underline-offset-[6px]" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              className="hidden sm:flex items-center justify-center h-9 w-9 rounded-full text-ink/80 hover:bg-ink/5"
              aria-label="Search"
            >
              <Search className="h-[17px] w-[17px]" />
            </button>
            <button
              type="button"
              className="hidden sm:flex items-center justify-center h-9 w-9 rounded-full text-ink/80 hover:bg-ink/5"
              aria-label="Wishlist"
            >
              <Heart className="h-[17px] w-[17px]" />
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative flex items-center justify-center h-9 w-9 rounded-full text-ink/80 hover:bg-ink/5"
              aria-label={`Open cart, ${count} items`}
            >
              <ShoppingBag className="h-[17px] w-[17px]" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 rounded-full bg-ink text-cream text-[10px] font-medium flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            <Link
              to="/catalog"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-ink text-cream text-sm h-10 px-5 ml-1 hover:bg-ink/90 transition-colors"
            >
              Buy now
            </Link>

            <button
              type="button"
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full text-ink"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-3 rounded-3xl bg-cream border border-ink/10 p-3 shadow-soft">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-2xl text-ink/85 hover:bg-ink/5 transition-colors"
                  activeProps={{ className: "bg-ink/5 font-medium" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/catalog"
                onClick={() => setMobileOpen(false)}
                className="mt-2 mx-2 mb-1 inline-flex items-center justify-center rounded-full bg-ink text-cream text-sm h-11 px-5"
              >
                Buy now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
