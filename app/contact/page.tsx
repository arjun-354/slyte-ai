"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Calendar,
  Zap,
} from "lucide-react";

const contactOptions = [
  {
    icon: Calendar,
    title: "Book a demo",
    description: "30 minutes, see the full platform, get your questions answered.",
    badge: "Most popular",
  },
  {
    icon: MessageSquare,
    title: "Talk to sales",
    description: "Custom pricing, enterprise plans, and implementation support.",
    badge: null,
  },
  {
    icon: Mail,
    title: "General inquiry",
    description: "Partnerships, press, or anything else — we read every message.",
    badge: null,
  },
];

type FormState = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message: string;
  interest: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    message: "",
    interest: "demo",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    // Placeholder — Resend integration wired in next step
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  }

  return (
    <div className="pt-24">
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/6 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 border-violet-500/30 bg-violet-500/10 text-violet-300"
            >
              <Zap className="w-3 h-3 mr-2" />
              Typical response time: under 2 hours
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-5">
              Let&apos;s talk <span className="gradient-text">content</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you want to see a demo, get a custom quote, or just have questions —
              our team is standing by.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Left: options + info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-5"
            >
              {contactOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div
                    key={option.title}
                    className="bg-card rounded-xl border border-border p-5 hover:border-violet-500/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-violet-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-sm">{option.title}</h3>
                          {option.badge && (
                            <Badge className="text-[10px] bg-violet-500/20 text-violet-300 border-0 px-1.5">
                              {option.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Trust signals */}
              <div className="bg-card rounded-xl border border-border p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  What happens next
                </p>
                <ol className="space-y-3">
                  {[
                    "We receive your message within minutes",
                    "A human (not a bot) reviews and responds",
                    "We schedule at a time that works for you",
                    "You get a personalized demo or quote",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center text-[10px] font-bold text-violet-400 flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <span className="text-xs text-muted-foreground leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl border border-border p-8">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Message sent!</h3>
                      <p className="text-muted-foreground text-sm max-w-sm">
                        Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}! We&apos;ll be in touch within 2 hours
                        during business hours (9am–6pm ET).
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full name <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Alex Johnson"
                          required
                          className="h-10 bg-background border-border focus:border-violet-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Work email <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          required
                          className="h-10 bg-background border-border focus:border-violet-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium">
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Inc."
                          className="h-10 bg-background border-border focus:border-violet-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="teamSize" className="text-sm font-medium">
                          Content team size
                        </Label>
                        <select
                          id="teamSize"
                          name="teamSize"
                          value={form.teamSize}
                          onChange={handleChange}
                          className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500"
                        >
                          <option value="">Select…</option>
                          <option value="1">Just me</option>
                          <option value="2-5">2–5 people</option>
                          <option value="6-15">6–15 people</option>
                          <option value="16-50">16–50 people</option>
                          <option value="50+">50+ people</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest" className="text-sm font-medium">
                        What are you interested in?
                      </Label>
                      <select
                        id="interest"
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500"
                      >
                        <option value="demo">Product demo</option>
                        <option value="sales">Enterprise / custom pricing</option>
                        <option value="trial">Starting a free trial</option>
                        <option value="partnership">Partnership</option>
                        <option value="press">Press inquiry</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Tell us about your content challenges
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="We're publishing 2x per week but struggling with consistency and repurposing..."
                        className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "loading"}
                      className="w-full h-12 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-violet-500/25 font-semibold"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Send message"
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We&apos;ll never share your info. See our{" "}
                      <a href="#" className="underline hover:text-foreground transition-colors">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
