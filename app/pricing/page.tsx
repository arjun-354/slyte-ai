"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Check, Minus, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "For small teams getting started with AI content",
    monthlyPrice: 49,
    annualPrice: 39,
    badge: null,
    features: [
      { label: "3 team seats", included: true },
      { label: "50 AI content generations / month", included: true },
      { label: "Blog, email & social formats", included: true },
      { label: "Content calendar", included: true },
      { label: "2 channel integrations", included: true },
      { label: "Basic analytics", included: true },
      { label: "Brand voice training", included: false },
      { label: "Approval workflows", included: false },
      { label: "Attribution reporting", included: false },
      { label: "Priority support", included: false },
    ],
    cta: "Start free trial",
    ctaVariant: "outline" as const,
  },
  {
    name: "Growth",
    tagline: "For scaling content teams that need more firepower",
    monthlyPrice: 149,
    annualPrice: 119,
    badge: "Most popular",
    features: [
      { label: "10 team seats", included: true },
      { label: "Unlimited AI generations", included: true },
      { label: "All content formats + video scripts", included: true },
      { label: "Content calendar + campaign planning", included: true },
      { label: "Unlimited channel integrations", included: true },
      { label: "Advanced analytics & dashboards", included: true },
      { label: "Brand voice training", included: true },
      { label: "Approval workflows (3 stages)", included: true },
      { label: "Attribution reporting", included: false },
      { label: "Priority support", included: false },
    ],
    cta: "Start free trial",
    ctaVariant: "default" as const,
  },
  {
    name: "Scale",
    tagline: "For enterprise teams with complex content operations",
    monthlyPrice: 399,
    annualPrice: 319,
    badge: null,
    features: [
      { label: "Unlimited team seats", included: true },
      { label: "Unlimited AI generations", included: true },
      { label: "All content formats + custom templates", included: true },
      { label: "Full editorial suite + OKR alignment", included: true },
      { label: "Unlimited channel integrations + API", included: true },
      { label: "Executive dashboards + export", included: true },
      { label: "Custom brand intelligence model", included: true },
      { label: "Unlimited approval workflow stages", included: true },
      { label: "Full attribution + CRM sync", included: true },
      { label: "Dedicated CSM + priority support", included: true },
    ],
    cta: "Talk to sales",
    ctaVariant: "outline" as const,
  },
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes — every plan comes with a 14-day free trial, no credit card required. You get full access to all features on your chosen plan.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. You can upgrade or downgrade at any time. Upgrades take effect immediately; downgrades apply at your next billing cycle.",
  },
  {
    q: "What counts as an AI generation?",
    a: "One generation is one output — a blog post draft, a batch of social captions, or an email sequence. Repurposing an existing piece counts as one generation.",
  },
  {
    q: "Do you offer discounts for non-profits or startups?",
    a: "Yes. We have a startup program for companies under 2 years old and annual revenue under $1M. Reach out to our team for details.",
  },
  {
    q: "How does brand voice training work?",
    a: "You feed Slyte your best existing content — blog posts, case studies, emails. Our model extracts your tone, vocabulary, and style. Generations match your brand, not a generic AI voice.",
  },
  {
    q: "What integrations are available?",
    a: "We connect with WordPress, Webflow, HubSpot CMS, Contentful, Ghost, Mailchimp, ActiveCampaign, Klaviyo, LinkedIn, Twitter/X, Instagram, Slack, and 15+ more. Full API access on Scale.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/8 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-5">
              Simple, honest{" "}
              <span className="gradient-text">pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              No seats-times-features matrices. Pick the plan that fits your team and
              start shipping content that works.
            </p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full p-1">
              <button
                onClick={() => setAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  !annual
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  annual
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <Badge className="bg-emerald-500/20 text-emerald-400 border-0 text-[10px] px-1.5 py-0">
                  Save 20%
                </Badge>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.badge
                  ? "border-violet-500/50 bg-gradient-to-b from-violet-950/30 to-card glow-violet"
                  : "border-border bg-card"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-violet-600 to-purple-600 text-white border-0 px-4 py-1">
                    <Zap className="w-3 h-3 mr-1" fill="currentColor" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
                <p className="text-sm text-muted-foreground leading-snug">{plan.tagline}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold">
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground text-sm mb-2">/month</span>
                </div>
                {annual && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Billed annually (${plan.annualPrice * 12}/yr)
                  </p>
                )}
              </div>

              <Link href="/contact" className="mb-8">
                <Button
                  size="lg"
                  variant={plan.ctaVariant}
                  className={`w-full h-11 font-semibold ${
                    plan.ctaVariant === "default"
                      ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-violet-500/25"
                      : "border-border hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>

              <Separator className="mb-6 bg-border" />

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                    ) : (
                      <Minus className="w-4 h-4 text-border flex-shrink-0" />
                    )}
                    <span
                      className={feature.included ? "text-foreground" : "text-muted-foreground/50"}
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </section>

      {/* FAQs */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">Frequently asked questions</h2>
          <p className="text-muted-foreground">
            Can&apos;t find the answer you&apos;re looking for?{" "}
            <Link href="/contact" className="text-violet-400 hover:text-violet-300 transition-colors">
              Reach out to our team.
            </Link>
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-medium text-sm">{faq.q}</span>
                <span className="text-muted-foreground text-lg flex-shrink-0">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-violet-950/40 to-card rounded-2xl border border-violet-500/20 p-10">
            <h2 className="text-2xl font-bold mb-3">Need something custom?</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Large teams, custom integrations, on-prem deployments, or white-label needs —
              we handle it all. Let&apos;s build the right package for your organization.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="h-11 px-8 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 font-semibold"
              >
                Talk to enterprise sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
