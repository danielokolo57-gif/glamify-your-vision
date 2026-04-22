import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-9xl text-wine/30 leading-none">404</p>
        <h1 className="mt-2 font-display text-4xl text-foreground">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="mt-6 rounded-full bg-wine hover:bg-wine-dark text-cream">
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
