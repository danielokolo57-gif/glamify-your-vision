import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { Sparkles, Clock, Leaf, ShieldCheck } from "lucide-react";
import hero from "@/assets/glowmuse-hero.jpg";
import foundation from "@/assets/glowmuse-foundation.jpg";
import lips from "@/assets/glowmuse-lips.jpg";
import cream from "@/assets/glowmuse-cream.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glowmuse — Unleash your inner radiance" },
      {
        name: "description",
        content:
          "Glowmuse is effortless beauty: easy-to-apply, dermatologist-tested products that save time and let you feel like you. Skincare, makeup & essentials.",
      },
      { property: "og:title", content: "Glowmuse — Unleash your inner radiance" },
      {
        property: "og:description",
        content: "Effortless beauty essentials for real mornings. Clean, fast, made for you.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: HomePage,
});

const features = [
  {
    icon: ShieldCheck,
    title: "Safe, clean beauty",
    body: "Tested by dermatologists",
  },
  {
    icon: Clock,
    title: "Fast & flawless",
    body: "Makeup made for real mornings",
  },
  {
    icon: Leaf,
    title: "No animal testing — ever",
    body: "Certified cruelty-free",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="overlay" />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-nude-light">
            <div className="grid lg:grid-cols-2">
              {/* Left content */}
              <div className="px-6 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-20 flex flex-col justify-center">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-ink leading-[1.02]">
                  Unleash Your<br />
                  <span className="italic">Inner Radiance</span>
                </h1>
                <p className="mt-6 max-w-md text-ink/65 leading-relaxed text-[15px]">
                  Look effortlessly radiant with easy-to-apply products that
                  save time and feel like you.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    className="rounded-full bg-ink text-cream hover:bg-ink/85 h-12 px-7 text-sm"
                  >
                    <Link to="/catalog">Shop Quick Beauty Kits</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-ink/25 bg-transparent text-ink hover:bg-ink hover:text-cream h-12 px-7 text-sm"
                  >
                    <Link to="/blog">Watch a 2-Minute Tutorial</Link>
                  </Button>
                </div>

                <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-xl">
                  {features.map((f) => (
                    <div key={f.title} className="flex flex-col gap-2">
                      <div className="h-9 w-9 rounded-full bg-ink/5 flex items-center justify-center">
                        <f.icon className="h-4 w-4 text-ink" />
                      </div>
                      <p className="text-[13px] leading-snug text-ink/75">
                        <span className="font-medium text-ink">{f.title}.</span>{" "}
                        {f.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right image */}
              <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[640px]">
                <img
                  src={hero}
                  alt="Glowmuse model with radiant skin and soft natural makeup"
                  width={1280}
                  height={1536}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <section className="bg-background py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-ink/40">
            {["VOGUE", "ELLE", "HARPER'S", "ALLURE", "BAZAAR", "BYRDIE"].map((m) => (
              <span key={m} className="font-display italic text-2xl tracking-wide">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-ink/50">Shop by category</p>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl text-ink">
                Find your <span className="italic">muse</span>
              </h2>
            </div>
            <Link
              to="/catalog"
              className="text-sm underline underline-offset-4 text-ink/70 hover:text-ink"
            >
              View all products
            </Link>
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: foundation, label: "Skin", to: "/catalog" },
              { img: lips, label: "Lips", to: "/hair-body" },
              { img: cream, label: "Skincare", to: "/skincare" },
            ].map((c) => (
              <Link
                key={c.label}
                to={c.to}
                className="group relative block aspect-[4/5] rounded-3xl overflow-hidden bg-secondary"
              >
                <img
                  src={c.img}
                  alt={c.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-cream">
                  <span className="font-display italic text-3xl">{c.label}</span>
                  <span className="h-9 w-9 rounded-full bg-cream text-ink flex items-center justify-center text-lg">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial split */}
      <section className="bg-nude-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-background">
            <img
              src={cream}
              alt="Glowmuse Inner Glow Cream open jar"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="max-w-lg lg:pl-8">
            <p className="text-xs uppercase tracking-[0.18em] text-ink/50">The philosophy</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Beauty that <span className="italic">begins</span> with care.
            </h2>
            <p className="mt-6 text-ink/70 leading-relaxed">
              We believe great makeup starts with great skin. Every Glowmuse
              formula is built on a base of skincare-grade ingredients —
              hydrating, soothing, and clinically tested for real results.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Sparkles className="h-5 w-5 text-ink" />
              <p className="text-sm text-ink/70">
                Loved by 50,000+ muses worldwide.
              </p>
            </div>
            <Button
              asChild
              className="mt-8 rounded-full bg-ink text-cream hover:bg-ink/85 h-12 px-7"
            >
              <Link to="/about">More about Glowmuse</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-ink/50">Loved by all</p>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl text-ink">
                Bestsellers
              </h2>
            </div>
            <Link
              to="/catalog"
              className="hidden sm:inline text-sm underline underline-offset-4 text-ink/70 hover:text-ink"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-x-6 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-background pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-ink text-cream px-6 sm:px-12 py-14 sm:py-20 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-cream/50">Join the muse list</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
              Beauty notes, <span className="italic">delivered.</span>
            </h2>
            <p className="mt-4 max-w-md mx-auto text-cream/70 text-sm leading-relaxed">
              Tutorials, new launches, and 10% off your first order — straight to your inbox.
            </p>
            <form
              className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 rounded-full bg-cream/10 border border-cream/20 px-5 h-12 text-sm text-cream placeholder:text-cream/50 focus:outline-none focus:border-cream/60"
              />
              <button
                type="submit"
                className="rounded-full bg-cream text-ink h-12 px-7 text-sm font-medium hover:bg-cream/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
