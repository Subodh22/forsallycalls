"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Sparkles, Zap, ArrowRight, Play, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      {/* No background - using unified site background */}

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Professional Content */}
          <div className="text-left lg:text-left space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm animate-fade-in-up hover-lift">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary tracking-wide">AI-Powered Voice Agent</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
                <span className="block gradient-text">Never Miss</span>
                <span className="block gradient-text-2">a Call Again</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
                Instantly qualify and book every opportunity into your calendar to close more deals
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-xl hover:shadow-2xl hover-lift group font-semibold">
                <Link href="#demo" className="flex items-center gap-2">
                  Try it now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 border-2 hover-lift group font-semibold">
                <Link href="#features" className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="font-medium">Trusted by 50+ companies</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <Phone className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">35+ booked this month</span>
              </div>
            </div>
          </div>

          {/* Right side - Professional Visual element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-96 h-96">
                  {/* Subtle rotating rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-rotate"></div>
                  <div className="absolute inset-8 rounded-full border-2 border-purple-500/25 animate-rotate" style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
                  
                  {/* Inner circle with professional glow */}
                  <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary via-purple-600 to-indigo-600 flex items-center justify-center shadow-2xl">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 via-purple-600/50 to-indigo-600/50 blur-2xl opacity-30"></div>
                    <Phone className="w-24 h-24 text-white relative z-10" />
                  </div>
                  
                  {/* Professional floating elements */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center shadow-xl animate-float border-2 border-white/30">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-6 right-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg animate-float delay-200 border-2 border-white/30">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-1/2 -left-6 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg animate-float delay-300 border-2 border-white/30">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

