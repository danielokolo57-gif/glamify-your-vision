import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import heroEye from "@/assets/hero-eye.jpg";
import jar from "@/assets/product-jar.jpg";
import spray from "@/assets/product-spray.jpg";
import pump from "@/assets/product-pump.jpg";
import trio from "@/assets/product-trio.jpg";
import collection from "@/assets/product-collection.jpg";
import tubes from "@/assets/product-tubes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sage — Conscious skincare & body care" },
      {
        name: "description",
        content:
          "Sage is a new philosophy of selfcare. Thoughtful skincare and body formulas designed for healthy, balanced skin and hair — every day.",
      },
      { property: "og:title", content: "Sage — Conscious skincare & body care" },
      {
        property: "og:description",
        content:
          "A new philosophy of selfcare: thoughtful ingredients, soft textures, real everyday results.",
      },
      { property: "og:image", content: heroEye },
      { name: "twitter:image", content: heroEye },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="overlay" />

      {/* Hero */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroEye}
          alt="Close-up of glowing, healthy skin"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/5 to-cream/95" />
        <div className="relative h-full flex items-end justify-center pb-4 sm:pb-8">
          <h1 className="giant-word text-cream text-[28vw] md:text-[26vw] lg:text-[24vw] select-none">
            sage
          </h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-lg">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
              New philosophy<br />of selfcare:<br />healthy skin & hair
            </h2>
            <div className="mt-8 space-y-4 text-foreground/75 leading-relaxed">
              <p>
                Sage is about conscious simplicity — effective formulas, thoughtful
                ingredients, and soft textures designed for real everyday life.
              </p>
              <p>
                We believe skincare should support your skin, not overwhelm it,
                combining modern science with a calm, minimal approach.
              </p>
            </div>
            <Button
              asChild
              className="mt-8 rounded-full bg-sage hover:bg-sage-dark text-primary-foreground h-12 px-7"
            >
              <Link to="/about">More about Sage</Link>
            </Button>
          </div>

          <div className="relative aspect-square max-w-md mx-auto w-full">
            <img
              src={jar}
              alt="Sage Renewal Night Cream open jar"
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-0 h-full w-full object-contain float-slow"
            />
          </div>
        </div>
      </section>

      {/* Pure care by nature */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid gap-6 lg:grid-cols-3">
          <Link
            to="/product/$productId"
            params={{ productId: "hydrating-mist" }}
            className="block aspect-[3/4] rounded-3xl overflow-hidden bg-secondary group"
          >
            <img
              src={spray}
              alt="Hydrating Botanical Mist"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
          <Link
            to="/product/$productId"
            params={{ productId: "gentle-cleanser" }}
            className="block aspect-[3/4] rounded-3xl overflow-hidden bg-secondary group"
          >
            <img
              src={pump}
              alt="Gentle Daily Cleanser"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight">
                Pure care<br />by nature
              </h2>
              <div className="mt-6 space-y-3 text-foreground/75 leading-relaxed text-[15px]">
                <p>
                  Thoughtfully crafted formulas designed to bring balance and calm
                  to your daily routine.
                </p>
                <p>
                  Lightweight textures, gentle ingredients, and a minimalist
                  approach help support healthy-looking skin — effortlessly,
                  every day.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-3xl overflow-hidden aspect-[16/10] bg-secondary">
              <img
                src={tubes}
                alt="Sage hand and cuticle balm tubes"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All-in-One with giant "new" */}
      <section className="bg-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="max-w-md">
              <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight">
                All-in-One<br />Skincare Complex
              </h2>
              <p className="mt-5 text-foreground/75 leading-relaxed text-[15px]">
                Multifunctional line designed to simplify your daily routine
                without compromising results.
              </p>
            </div>
            <div className="rounded-3xl bg-accent/60 p-6 sm:p-10">
              <img
                src={trio}
                alt="All-in-one skincare trio"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div
            aria-hidden
            className="giant-word text-sage-light/70 text-[36vw] md:text-[28vw] lg:text-[24vw] leading-none -mt-4 sm:-mt-12 lg:-mt-20 select-none pointer-events-none"
          >
            new
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center -mt-2 sm:-mt-10 lg:-mt-16 relative">
            <div className="rounded-3xl overflow-hidden bg-secondary">
              <img
                src={collection}
                alt="Sage complete skincare collection"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="max-w-md">
              <p className="text-foreground/75 leading-relaxed text-[15px]">
                Each formula combines hydration, barrier support, and skin-balancing
                ingredients to work in one effortless step. The collection focuses
                on smart minimalism — fewer products, more impact, and consistent
                care for healthy-looking skin.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-6 rounded-full border-foreground/30 hover:bg-foreground hover:text-background"
              >
                <Link to="/catalog">Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-4xl sm:text-5xl text-foreground">Bestsellers</h2>
            <Link
              to="/catalog"
              className="hidden sm:inline text-sm underline underline-offset-4 text-foreground/70 hover:text-foreground"
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

      <Footer />
    </div>
  );
}
