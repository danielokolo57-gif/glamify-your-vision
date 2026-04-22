import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const posts = [
  {
    slug: "the-philosophy-of-less",
    title: "The philosophy of less in your skincare routine",
    excerpt:
      "Why fewer, smarter products often deliver better results — and how to simplify without sacrificing care.",
    date: "March 14, 2026",
    read: "5 min read",
  },
  {
    slug: "ingredients-we-love",
    title: "Five ingredients we love (and the ones we skip)",
    excerpt:
      "A look at the actives we trust — bakuchiol, niacinamide, ceramides — and why some buzzy ingredients didn't make the cut.",
    date: "February 28, 2026",
    read: "7 min read",
  },
  {
    slug: "evening-ritual",
    title: "Building a slower evening ritual",
    excerpt:
      "Skincare as a moment of pause. Three steps to turn your routine into a quiet practice.",
    date: "February 9, 2026",
    read: "4 min read",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Sage" },
      { name: "description", content: "Notes on skincare, ingredients and quiet rituals." },
      { property: "og:title", content: "Journal — Sage" },
      { property: "og:description", content: "Notes on skincare, ingredients and quiet rituals." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header variant="solid" />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-sm uppercase tracking-wider text-wine">Journal</p>
          <h1 className="font-display text-5xl sm:text-6xl mt-2">Notes & rituals</h1>
          <p className="mt-4 max-w-xl text-foreground/70">
            Beauty stories, ingredient deep-dives and ritual ideas — from our editors in Lagos.
          </p>
          <div className="mt-12 divide-y divide-border">
            {posts.map((post) => (
              <article key={post.slug} className="py-8 group">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {post.date} · {post.read}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl mt-2 group-hover:text-wine transition-colors">
                  <Link to="/blog">{post.title}</Link>
                </h2>
                <p className="mt-3 text-foreground/70 leading-relaxed max-w-2xl">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
