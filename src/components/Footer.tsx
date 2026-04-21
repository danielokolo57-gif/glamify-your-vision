import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/85 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display italic text-5xl text-cream leading-none">Glowmuse</div>
          <p className="mt-4 max-w-sm text-sm text-cream/60 leading-relaxed">
            Effortless radiance, bottled. Easy-to-apply beauty essentials made for real
            mornings — clean, dermatologist-tested, cruelty-free.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full border border-cream/15 flex items-center justify-center hover:bg-cream hover:text-ink transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl text-cream mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/catalog" className="hover:text-cream transition-colors">All products</Link></li>
            <li><Link to="/skincare" className="hover:text-cream transition-colors">Eyes</Link></li>
            <li><Link to="/hair-body" className="hover:text-cream transition-colors">Lips</Link></li>
            <li><Link to="/accessories" className="hover:text-cream transition-colors">Skin</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-cream mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-cream transition-colors">About us</Link></li>
            <li><Link to="/blog" className="hover:text-cream transition-colors">Journal</Link></li>
            <li><Link to="/contact" className="hover:text-cream transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Glowmuse. All rights reserved.</p>
          <p>Unleash your inner radiance.</p>
        </div>
      </div>
    </footer>
  );
}
