import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-wine text-cream/85 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-full bg-cream text-wine flex items-center justify-center font-display text-xl leading-none">
              B
            </span>
            <span className="font-display italic text-3xl text-cream leading-none">Belletny</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-cream/70 leading-relaxed">
            Premium beauty and skincare for every glow. Curated formulas, honest
            ingredients, delivered worldwide.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-wine transition-colors"
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
            <li><Link to="/catalog" className="hover:text-cream transition-colors">All Products</Link></li>
            <li><Link to="/skincare" className="hover:text-cream transition-colors">Skincare</Link></li>
            <li><Link to="/hair-body" className="hover:text-cream transition-colors">Hair & Body</Link></li>
            <li><Link to="/accessories" className="hover:text-cream transition-colors">Accessories</Link></li>
            <li><Link to="/blog" className="hover:text-cream transition-colors">Journal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-cream mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-cream transition-colors">About us</Link></li>
            <li><Link to="/contact" className="hover:text-cream transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-cream transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-cream mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>123 Beauty Lane, Suite 400<br />New York, NY 10001</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <span>(+91) 123-456-789</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <span>hello@belletny.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Belletny. All rights reserved.</p>
          <p>Beauty, bottled.</p>
        </div>
      </div>
    </footer>
  );
}
