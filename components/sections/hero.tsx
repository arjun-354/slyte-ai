"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: EASE },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-fuchsia-600/8 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(139,92,246,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1.5 border-violet-500/30 bg-violet-500/10 text-violet-300 inline-flex items-center gap-2"
          >
            <Sparkles className="w-3 h-3" />
            Introducing the Content OS built for AI-era teams
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
        >
          Your content team,{" "}
          <span className="gradient-text">supercharged</span>
          <br className="hidden sm:block" /> by AI.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Slyte AI is the end-to-end content operating system that lets ambitious
          brands plan, create, and distribute high-performing content at scale —
          without burning out your team.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="h-12 px-8 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-xl shadow-violet-500/30 border-0 text-base font-semibold"
            >
              Start for free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              variant="ghost"
              className="h-12 px-8 text-base font-medium text-muted-foreground hover:text-foreground"
            >
              See how it works
            </Button>
          </Link>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["BG", "JK", "ML", "SR", "TC"].map((initials) => (
                <div
                  key={initials}
                  className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 border-2 border-background flex items-center justify-center text-[9px] font-bold text-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            <span>Trusted by 500+ content teams</span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>4.9/5 from 200+ reviews</span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>10x average content output</span>
          </div>
        </motion.div>

        {/* Hero product screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
          className="mt-20 relative"
        >
          <div className="gradient-border rounded-2xl overflow-hidden glow-violet max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-1">
              {/* Browser chrome */}
              <div className="bg-black/30 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-black/20">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <div className="flex-1 mx-4">
                    <div className="bg-white/5 rounded-md h-6 w-48 mx-auto flex items-center justify-center">
                      <span className="text-[10px] text-muted-foreground">app.slyte.ai/dashboard</span>
                    </div>
                  </div>
                </div>
                <Image
                  src="/dashboard-preview.png"
                  alt="Slyte AI dashboard — content analytics and video performance overview"
                  width={1512}
                  height={945}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
