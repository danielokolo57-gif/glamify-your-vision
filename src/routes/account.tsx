import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { LogOut } from "lucide-react";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "My account — Lumière Beauty Nigeria" },
      { name: "description", content: "Manage your Lumière Beauty profile and preferences." },
    ],
  }),
  component: AccountPage,
});

const profileSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
});

function AccountPage() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: "/auth", search: { redirect: "/account", mode: "signin" } });
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    supabase
      .from("profiles")
      .select("full_name, phone")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          toast.error("Could not load your profile.");
        } else if (data) {
          setFullName(data.full_name ?? "");
          setPhone(data.phone ?? "");
        }
        setLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, [user]);

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const parsed = profileSchema.safeParse({ fullName, phone });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        full_name: parsed.data.fullName,
        phone: parsed.data.phone || null,
      });
    setSaving(false);
    if (error) {
      toast.error("Could not save your profile.");
      return;
    }
    toast.success("Profile saved.");
  };

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out.");
    navigate({ to: "/" });
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">My account</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl mt-3">My account</h1>
          <p className="mt-2 text-foreground/70 text-sm">{user.email}</p>

          <form onSubmit={handleSave} className="mt-10 space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-2xl">Profile</h2>
            {!loaded ? (
              <p className="text-sm text-muted-foreground">Loading profile...</p>
            ) : (
              <>
                <div className="space-y-1.5">
                  <Label htmlFor="fullName">Full name</Label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    maxLength={100}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={30}
                    placeholder="+234 803 123 4567"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={saving}
                  className="rounded-full bg-wine hover:bg-wine-dark text-cream h-11 px-8"
                >
                  {saving ? "Saving..." : "Save changes"}
                </Button>
              </>
            )}
          </form>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-2xl">Session</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign out of your Lumière Beauty account on this device.
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={handleSignOut}
              className="mt-5 rounded-full h-11"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
