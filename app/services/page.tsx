"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Brain,
  LayoutDashboard,
  Share2,
  BarChart3,
  Workflow,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Content Creation",
    tagline: "From brief to publish-ready in minutes",
    description:
      "Stop staring at blank pages. Slyte AI generates research-backed first drafts for blog posts, landing pages, email sequences, and social content — all in your brand voice. Feed it a topic, a URL, or a transcript and watch it work.",
    features: [
      "Brand voice training from existing content",
      "Long-form articles, threads, and ad copy",
      "Repurpose one asset into 10 formats automatically",
      "SEO keyword integration built in",
      "Multi-language support (40+ languages)",
    ],
    accent: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/20",
  },
  {
    icon: LayoutDashboard,
    title: "Content Planning & Calendar",
    tagline: "A content strategy your whole team can execute",
    description:
      "Build 90-day content plans in an afternoon. Slyte AI clusters topics by intent, suggests publishing cadences based on your resources, and keeps your editorial calendar in sync with company goals — automatically.",
    features: [
      "AI-generated content strategy from your ICP",
      "Topic cluster mapping with search demand data",
      "Editorial calendar with drag-and-drop scheduling",
      "Campaign and launch coordination",
      "Capacity planning across writers and channels",
    ],
    accent: "from-purple-500 to-fuchsia-500",
    glow: "shadow-purple-500/20",
  },
  {
    icon: Workflow,
    title: "Approval Workflows",
    tagline: "Ship fast without shipping junk",
    description:
      "Define review stages, assign approvers, and set SLAs — then let Slyte handle the follow-ups. No more &quot;did you see my Slack?&quot; Your stakeholders review directly in the platform with inline comments and one-click approvals.",
    features: [
      "Multi-stage approval workflows",
      "Role-based access for writers, editors, and execs",
      "Real-time collaboration and inline commenting",
      "Automated reminders and escalation rules",
      "Full version history and audit log",
    ],
    accent: "from-fuchsia-500 to-pink-500",
    glow: "shadow-fuchsia-500/20",
  },
  {
    icon: Share2,
    title: "Multi-Channel Distribution",
    tagline: "Write once, publish everywhere",
    description:
      "Connect your CMS, email platform, and social accounts. Slyte auto-adapts your content for each channel — formatting for LinkedIn looks different than a newsletter — and publishes on schedule without you lifting a finger.",
    features: [
      "Native integrations with WordPress, Webflow, HubSpot",
      "Social publishing to LinkedIn, Twitter/X, Instagram",
      "Email sequencing via Mailchimp, ActiveCampaign, Klaviyo",
      "Channel-specific formatting and tone adjustment",
      "Scheduling, queuing, and evergreen recycling",
    ],
    accent: "from-blue-500 to-violet-500",
    glow: "shadow-blue-500/20",
  },
  {
    icon: BarChart3,
    title: "Analytics & Attribution",
    tagline: "Content metrics that actually matter",
    description:
      "Most content teams measure pageviews. Slyte measures pipeline. See which articles are driving trials, which newsletters are converting, and where to double down — with attribution models that connect content to closed revenue.",
    features: [
      "Content-to-pipeline attribution",
      "Organic traffic and ranking tracking",
      "Engagement and conversion metrics by channel",
      "Custom dashboards for exec reporting",
      "CRM sync (Salesforce, HubSpot) for closed-loop reporting",
    ],
    accent: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
  },
  {
    icon: Sparkles,
    title: "Brand Intelligence",
    tagline: "AI that sounds like you, not everyone else",
    description:
      "Slyte's Brand Intelligence engine ingests your existing content, style guides, and guidelines to build a model of your voice. Every AI generation — no matter the author — passes through this filter before it reaches a reviewer.",
    features: [
      "Custom brand voice model trained on your content",
      "Tone-of-voice scoring for every draft",
      "Competitor differentiation guardrails",
      "Compliance and legal term checking",
      "Style guide enforcement across all formats",
    ],
    accent: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/20",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/8 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 border-violet-500/30 bg-violet-500/10 text-violet-300"
            >
              What we offer
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
              The full content stack,{" "}
              <span className="gradient-text">in one place</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Every tool your content operation needs — from ideation and AI creation to
              distribution, analytics, and brand safety. Built to work together out of the box.
            </p>
            <Link href="/pricing">
              <Button
                size="lg"
                className="h-12 px-8 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 shadow-xl shadow-violet-500/30 font-semibold"
              >
                View pricing
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="group bg-card rounded-2xl border border-border hover:border-violet-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 border-b md:border-b-0 md:border-r border-border">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-5 shadow-lg ${service.glow}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-2">
                      {service.tagline}
                    </p>
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                  <div className="p-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5">
                      What&apos;s included
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to see it in action?</h2>
          <p className="text-muted-foreground mb-8">
            Book a 30-minute demo and we&apos;ll show you exactly how Slyte AI would work for your team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="h-12 px-8 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 font-semibold"
              >
                Book a demo
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="h-12 px-8 border-border hover:bg-white/5">
                See pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
