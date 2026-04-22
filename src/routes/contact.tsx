import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lumière Beauty Nigeria" },
      { name: "description", content: "Get in touch with the Lumière Beauty team in Lagos, Nigeria." },
      { property: "og:title", content: "Contact — Lumière Beauty Nigeria" },
      { property: "og:description", content: "Get in touch with the Lumière Beauty team in Lagos, Nigeria." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent", {
        description: "We'll get back to you within two business days.",
      });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header variant="solid" />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-sm uppercase tracking-wider text-wine">Contact</p>
          <h1 className="font-display text-5xl sm:text-6xl mt-2">Get in touch</h1>
          <p className="mt-4 text-foreground/70">
            Questions about a product or your order? Our Lagos-based team is happy to help — call, WhatsApp or email us.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 text-sm">
            <div className="rounded-2xl border border-border bg-cream-soft p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone / WhatsApp</p>
              <p className="mt-1 font-medium text-ink">+234 803 123 4567</p>
            </div>
            <div className="rounded-2xl border border-border bg-cream-soft p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="mt-1 font-medium text-ink">hello@lumierebeauty.ng</p>
            </div>
            <div className="rounded-2xl border border-border bg-cream-soft p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Showroom</p>
              <p className="mt-1 font-medium text-ink">15 Adeola Odeku St, Victoria Island, Lagos</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required className="rounded-2xl h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required className="rounded-2xl h-12" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required className="rounded-2xl h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={6} className="rounded-2xl" />
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-wine hover:bg-wine-dark text-cream h-12 px-8"
            >
              {submitting ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
