import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search, User, Phone, Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { to: "/catalog", label: "Shop All" },
  { to: "/skincare", label: "Skincare" },
  { to: "/hair-body", label: "Hair & Body" },
  { to: "/accessories", label: "Accessories" },
  { to: "/blog", label: "Journal" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header({ variant = "solid" }: { variant?: "overlay" | "solid" }) {
  const { count, setOpen } = useCart();
  const { user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  void variant;

  return (
    <header className="sticky top-0 z-30 bg-background">
      {/* Top utility bar */}
      <div className="bg-wine text-cream/95 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Customer Service:</span>
            <span className="font-medium">+234 803 123 4567</span>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <span className="hidden lg:inline">Free delivery in Lagos on orders over ₦50,000</span>
            <a href="#" className="hover:text-cream transition-colors">Track Order</a>
            <a href="#" className="hover:text-cream transition-colors">Help</a>
            {user ? (
              <Link to="/account" className="hover:text-cream transition-colors">My Account</Link>
            ) : (
              <Link to="/auth" search={{ redirect: "/", mode: "signin" }} className="hover:text-cream transition-colors">Sign In</Link>
            )}
          </div>
        </div>
      </div>

      {/* Brand bar */}
      <div className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-sm">
            <div className="flex items-center w-full h-11 rounded-full border border-border bg-cream-soft pl-5 pr-2">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 bg-transparent outline-none text-sm text-ink placeholder:text-muted-foreground"
              />
              <button
                type="button"
                className="h-8 w-8 rounded-full bg-wine text-cream flex items-center justify-center"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Logo */}
          <Link to="/" className="flex-1 flex items-center justify-center md:justify-center" aria-label="Lumière Beauty home">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-wine text-cream flex items-center justify-center font-display text-xl leading-none">
                L
              </span>
              <span className="font-display italic text-2xl sm:text-3xl text-ink leading-none whitespace-nowrap">
                Lumière <span className="not-italic font-sans text-xs tracking-[0.25em] uppercase text-wine align-middle ml-1">Beauty</span>
              </span>
            </div>
          </Link>

          {/* Account & Cart */}
          <div className="flex-1 flex items-center justify-end gap-1">
            <Link
              to={user ? "/account" : "/auth"}
              search={user ? undefined : { redirect: "/", mode: "signin" as const }}
              className="hidden sm:flex h-10 w-10 rounded-full items-center justify-center text-ink hover:bg-cream-soft"
              aria-label={user ? "My account" : "Sign in"}
            >
              <User className="h-5 w-5" />
            </Link>
            <button
              type="button"
              className="hidden sm:flex h-10 w-10 rounded-full items-center justify-center text-ink hover:bg-cream-soft"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative flex h-10 w-10 rounded-full items-center justify-center text-ink hover:bg-cream-soft"
              aria-label={`Open cart, ${count} items`}
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 h-5 min-w-5 px-1 rounded-full bg-wine text-cream text-[10px] font-semibold flex items-center justify-center">
                {count}
              </span>
            </button>

            <button
              type="button"
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full text-ink ml-1"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Category nav */}
      <nav className="hidden lg:block border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-ink/85 hover:text-wine transition-colors relative group"
              activeProps={{ className: "text-wine font-medium" }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-wine transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex items-center w-full h-11 rounded-full border border-border bg-cream-soft pl-5 pr-2 mb-3">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 bg-transparent outline-none text-sm text-ink placeholder:text-muted-foreground"
              />
              <Search className="h-4 w-4 text-wine mr-2" />
            </div>
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={`m-${link.to}`}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-ink/85 hover:bg-cream-soft transition-colors"
                  activeProps={{ className: "bg-cream-soft font-medium text-wine" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
