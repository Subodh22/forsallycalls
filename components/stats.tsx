"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, ArrowUpRight, Zap, Clock } from "lucide-react";

const stats = [
  {
    value: "100%",
    label: "of leads qualified",
    icon: Target,
    gradient: "from-green-500 to-emerald-500",
    rotation: "-1deg",
  },
  {
    value: "350%",
    label: "boost in appointments",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
    rotation: "1deg",
  },
  {
    value: "+45%",
    label: "in lead conversion rates",
    icon: Users,
    gradient: "from-purple-500 to-indigo-500",
    rotation: "-1deg",
  },
];

export function Stats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* No background - using unified site background */}

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/20">
            <Clock className="w-5 h-5 text-primary" />
            <p className="text-sm font-semibold text-primary tracking-wide">24/7 AI Assistant</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Card 
                  className="border-0 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden relative group text-center"
                  style={{ transform: `rotate(${stat.rotation})` }}
                >
                  {/* Gradient glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg blur-sm`}></div>
                  
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <CardContent className="pt-8 pb-8 relative z-10">
                    {/* Dynamic Icon with glow */}
                    <div className="relative inline-block mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <ArrowUpRight className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    {/* Value with gradient */}
                    <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <div className="text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                      {stat.label}
                    </div>
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

