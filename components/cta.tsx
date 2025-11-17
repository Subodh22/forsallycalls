"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Rocket, Sparkles } from "lucide-react";

const benefits = [
  "Reduce operational costs by up to 60%",
  "Improve customer satisfaction scores",
  "Handle peak call volumes effortlessly",
  "Never miss an important call",
  "Scale your support without hiring",
  "Get detailed insights and analytics",
];

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* No background - using unified site background */}

      <div className="container mx-auto max-w-4xl relative z-10">
        <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden relative group">
          {/* Gradient glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"></div>
          
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <CardHeader className="text-center pb-8 relative z-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/20">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-4xl md:text-5xl font-bold gradient-text">
                Ready to automate your business?
              </CardTitle>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/20">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
            </div>
            <CardDescription className="text-lg md:text-xl">
              Join thousands of businesses using Sally Calls to revolutionize their customer communication
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3"
                >
                  <div className="relative mt-0.5">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mb-6">
              <Button asChild size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 shadow-lg hover:shadow-xl transition-all">
                <Link href="/demo">Book a Demo</Link>
              </Button>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <p className="text-sm font-semibold text-primary">Get started today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

