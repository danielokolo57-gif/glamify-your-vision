import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { CartProvider } from "@/contexts/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { Toaster } from "@/components/ui/sonner";
import { NotFound } from "@/components/NotFound";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lumière Beauty — Premium beauty & skincare in Nigeria" },
      {
        name: "description",
        content:
          "Lumière Beauty is Nigeria's home for premium cosmetics, skincare and fragrance. Shop curated formulas with delivery across Lagos, Abuja, Port Harcourt and nationwide.",
      },
      { name: "author", content: "Lumière Beauty" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Lumière Beauty — Premium beauty & skincare in Nigeria" },
      { name: "twitter:title", content: "Lumière Beauty — Premium beauty & skincare in Nigeria" },
      { property: "og:description", content: "Premium cosmetics, skincare and fragrance — delivered across Nigeria." },
      { name: "twitter:description", content: "Premium cosmetics, skincare and fragrance — delivered across Nigeria." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/30f649c6-bd43-43b2-88f5-791f4c8daf34/id-preview-3a30a0f4--60c9000d-9a66-4fc9-9d1c-34d10510443a.lovable.app-1776795266740.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/30f649c6-bd43-43b2-88f5-791f4c8daf34/id-preview-3a30a0f4--60c9000d-9a66-4fc9-9d1c-34d10510443a.lovable.app-1776795266740.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <CartProvider>
      <Outlet />
      <CartDrawer />
      <Toaster />
    </CartProvider>
  );
}
