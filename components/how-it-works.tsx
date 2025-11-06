"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Rocket, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Set Up Your Account",
    description: "Create your account in minutes. No technical expertise required. Just provide your business details and preferences.",
    icon: Settings,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    title: "Configure Your Agent",
    description: "Customize Sally to match your brand voice and business needs. Set up call flows, responses, and integrations.",
    icon: Settings,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    step: "03",
    title: "Start Receiving Calls",
    description: "Sally goes live immediately. Start handling customer calls, answering questions, and providing support right away.",
    icon: Rocket,
    gradient: "from-green-500 to-emerald-500",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* No background - using unified site background */}

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/20">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">How It Works</h2>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-200/30">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with Sally Calls in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent -z-10" style={{ width: 'calc(100% - 4rem)' }} />
                )}
                <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden relative group">
                  {/* Gradient glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg blur-sm`}></div>
                  
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                        <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs px-3 py-1.5 bg-primary/10 text-primary border-primary/20 font-bold shadow-sm">
                        {step.step}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-sm leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

