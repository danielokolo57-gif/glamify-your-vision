import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import jar from "@/assets/glowmuse-cream.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sage — A new philosophy of selfcare" },
      {
        name: "description",
        content:
          "Learn about Sage's approach to conscious skincare — thoughtful ingredients, soft textures, and a calm, minimal philosophy.",
      },
      { property: "og:title", content: "About Sage — A new philosophy of selfcare" },
      {
        property: "og:description",
        content: "Conscious simplicity. Effective formulas. Real everyday care.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header variant="solid" />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="text-sm uppercase tracking-wider text-sage-dark">About us</p>
          <h1 className="font-display text-5xl sm:text-7xl mt-3 leading-[1.05]">
            A calm philosophy<br />of selfcare.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed">
            Sage was born from a simple idea: skincare should feel honest. We
            create thoughtful formulas with carefully chosen ingredients,
            beautiful textures, and packaging that respects the planet.
          </p>
        </section>

        <section className="bg-accent/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl overflow-hidden aspect-square bg-secondary">
              <img src={jar} alt="Sage product" className="h-full w-full object-contain" />
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "Conscious ingredients",
                  body: "We choose every ingredient with care — favouring proven, gentle actives and skipping anything that doesn't earn its place.",
                },
                {
                  title: "Made for everyday",
                  body: "Routines should fit into your life, not the other way around. Our formulas are designed for real mornings and quiet evenings.",
                },
                {
                  title: "Considered packaging",
                  body: "Recyclable glass, refillable formats and minimal materials — because how a product is made matters as much as what's inside.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-2xl text-foreground">{item.title}</h3>
                  <p className="mt-2 text-foreground/75 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <h2 className="font-display text-4xl sm:text-5xl">Start with the essentials</h2>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
            Three thoughtful steps. Everything you need, nothing you don't.
          </p>
          <Button asChild className="mt-8 rounded-full bg-sage hover:bg-sage-dark text-primary-foreground h-12 px-7">
            <Link to="/catalog">Shop the collection</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
