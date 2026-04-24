import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/accessories")({
  head: () => ({
    meta: [
      { title: "Accessories — Lumière Beauty Nigeria" },
      { name: "description", content: "Tools and accessories to complement your daily ritual." },
      { property: "og:title", content: "Accessories — Lumière Beauty Nigeria" },
      { property: "og:description", content: "Tools and accessories to complement your daily ritual." },
    ],
  }),
  component: AccessoriesPage,
});

function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header variant="solid" />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-sm uppercase tracking-wider text-wine">Collection</p>
          <h1 className="font-display text-5xl sm:text-6xl mt-2">Accessories</h1>
          <p className="mt-4 max-w-xl text-foreground/70">
            Coming soon — a thoughtfully curated set of tools to elevate your routine.
          </p>
          <div className="mt-12 rounded-3xl bg-accent/50 p-12 text-center">
            <p className="font-display text-3xl">Launching this season</p>
            <p className="mt-3 text-foreground/70 max-w-md mx-auto">
              In the meantime, discover our skincare collection.
            </p>
            <Button asChild className="mt-6 rounded-full bg-wine hover:bg-wine-dark text-cream">
              <Link to="/catalog">Browse catalog</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
