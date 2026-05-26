"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";

export function EmailCaptureSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      toast.success("You're on the list! Check your inbox shortly.", {
        description: "We'll be in touch within 24 hours.",
      });
    } catch {
      toast.error("Network error — please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-sm text-violet-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Free 14-day trial · No credit card required
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Ready to 10x your content?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Join 500+ teams already using Slyte AI to build content machines that
            drive real pipeline. Get early access and 3 months free on any annual plan.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 py-8"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <p className="font-semibold text-lg mb-1">
                  {name ? `You're on the list, ${name.split(" ")[0]}!` : "You're on the list!"}
                </p>
                <p className="text-muted-foreground text-sm">
                  We&apos;ll be in touch within 24 hours with your early access link.
                </p>
              </div>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 bg-card border-border focus:border-violet-500 text-base px-4 sm:w-40 flex-shrink-0"
                disabled={loading}
                autoComplete="name"
              />
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-card border-border focus:border-violet-500 text-base px-4 flex-1"
                disabled={loading}
                required
                autoComplete="email"
              />
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="h-12 px-6 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-violet-500/30 font-semibold whitespace-nowrap flex-shrink-0"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Joining…
                  </>
                ) : (
                  "Get early access"
                )}
              </Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-5">
            By signing up you agree to our{" "}
            <a href="#" className="underline hover:text-foreground transition-colors">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
