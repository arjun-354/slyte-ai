"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, DollarSign, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    company: "Meridian Health",
    industry: "Healthcare SaaS",
    logo: "MH",
    gradient: "from-emerald-500 to-teal-500",
    challenge:
      "Meridian's 3-person content team was spending 70% of their time on research and first drafts — leaving almost no bandwidth for strategy or distribution.",
    result:
      "After 60 days on Slyte AI, their team now publishes 4x more content with the same headcount. Organic traffic grew 187% and content-driven pipeline tripled.",
    metric: { value: "4x", label: "content output", icon: TrendingUp, color: "text-emerald-400" },
    secondMetric: { value: "187%", label: "organic traffic growth" },
    quote:
      "Slyte didn't just speed us up — it changed how we think about content. We went from reactive to having a 90-day content machine.",
    author: "Sarah Chen",
    role: "Head of Marketing",
  },
  {
    company: "Volta Commerce",
    industry: "E-commerce",
    logo: "VC",
    gradient: "from-violet-500 to-purple-500",
    challenge:
      "Volta was running 12 different tools for content: Notion for planning, Docs for drafting, Buffer for scheduling, and a spreadsheet for tracking. Nothing talked to each other.",
    result:
      "Consolidating onto Slyte AI cut their content ops time by 58% and brought their time-to-publish from 11 days to under 3. ROAS on content-influenced ads improved 40%.",
    metric: { value: "58%", label: "less time on ops", icon: Clock, color: "text-violet-400" },
    secondMetric: { value: "3 days", label: "average time-to-publish" },
    quote:
      "We finally have one source of truth. The ROI was obvious within the first month — we cut two tool subscriptions and shipped more content than ever.",
    author: "Marcus Reid",
    role: "Director of Growth",
  },
  {
    company: "Foundry Capital",
    industry: "Venture & Finance",
    logo: "FC",
    gradient: "from-amber-500 to-orange-500",
    challenge:
      "Foundry needed to establish thought leadership in a crowded VC market but had no dedicated content team — just partners who were already stretched thin.",
    result:
      "Slyte AI's brand voice training meant founders could generate on-brand LinkedIn posts, newsletters, and blog content in minutes. LinkedIn followers grew from 8K to 51K in 8 months.",
    metric: { value: "6.4x", label: "LinkedIn growth", icon: DollarSign, color: "text-amber-400" },
    secondMetric: { value: "51K", label: "LinkedIn followers in 8 months" },
    quote:
      "We looked like a full content team with zero full-time content hires. Slyte handles the heavy lifting so our partners can focus on deals.",
    author: "David Park",
    role: "Partner, Brand & Communications",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Real results
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Teams that ship more, stress less
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From lean startups to enterprise marketing teams — here&apos;s what happens
            when you replace the content chaos with a real system.
          </p>
        </motion.div>

        <div className="space-y-6">
          {caseStudies.map((study, i) => {
            const MetricIcon = study.metric.icon;
            return (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="group bg-card rounded-2xl border border-border hover:border-violet-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Left: company info + metrics */}
                  <div className="md:col-span-2 p-8 border-b md:border-b-0 md:border-r border-border flex flex-col justify-between">
                    <div>
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0`}
                        >
                          {study.logo}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{study.company}</h3>
                          <Badge
                            variant="secondary"
                            className="text-xs mt-1 bg-white/5 text-muted-foreground border-0"
                          >
                            {study.industry}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-background/50 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <MetricIcon className={`w-4 h-4 ${study.metric.color}`} />
                            <span className={`text-3xl font-bold ${study.metric.color}`}>
                              {study.metric.value}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{study.metric.label}</p>
                        </div>
                        <div className="bg-background/50 rounded-xl p-4">
                          <span className="text-3xl font-bold gradient-text">
                            {study.secondMetric.value}
                          </span>
                          <p className="text-sm text-muted-foreground mt-1">
                            {study.secondMetric.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: narrative */}
                  <div className="md:col-span-3 p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          The challenge
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          The outcome
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {study.result}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <blockquote className="text-base font-medium text-foreground italic mb-4 leading-relaxed">
                        &ldquo;{study.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm">{study.author}</p>
                          <p className="text-xs text-muted-foreground">{study.role}, {study.company}</p>
                        </div>
                        <button className="flex items-center gap-1.5 text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors group-hover:gap-2">
                          Read full story
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
