"use client";

import { motion } from "framer-motion";
import { Brain, BarChart3, Share2, Users, Workflow, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Creation",
    description:
      "Generate first drafts, repurpose content across formats, and refine with AI that learns your brand voice over time.",
    accent: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/20",
  },
  {
    icon: Workflow,
    title: "Content Calendar & Workflows",
    description:
      "Plan months of content in minutes. Built-in approval workflows mean your team stays aligned without the Slack chaos.",
    accent: "from-purple-500 to-fuchsia-500",
    glow: "shadow-purple-500/20",
  },
  {
    icon: Share2,
    title: "Multi-Channel Distribution",
    description:
      "Publish to your blog, LinkedIn, Twitter, newsletter, and 20+ channels in one click. No more copy-pasting.",
    accent: "from-fuchsia-500 to-pink-500",
    glow: "shadow-fuchsia-500/20",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "See what's actually driving traffic and revenue. Slyte ties content performance back to pipeline so you can double down on what works.",
    accent: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/20",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Role-based access, real-time editing, comments, and version history. Bring your writers, editors, and stakeholders into one system.",
    accent: "from-blue-500 to-violet-500",
    glow: "shadow-blue-500/20",
  },
  {
    icon: Shield,
    title: "Brand Safety & Compliance",
    description:
      "Style guides, tone checkers, and compliance rules built in. Every piece of content that ships reflects your brand.",
    accent: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function ValuePropsSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Everything you need
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            One platform. Every content need.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stop stitching together Notion, Google Docs, Buffer, and five other tools.
            Slyte AI is the single system your content operation runs on.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center mb-5 shadow-lg ${feature.glow}`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border"
        >
          {[
            { value: "10x", label: "average content output increase" },
            { value: "500+", label: "content teams worldwide" },
            { value: "4.2M", label: "pieces of content created" },
            { value: "62%", label: "average CAC reduction from content" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card px-8 py-8 text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
