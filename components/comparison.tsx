"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Sparkles, Trophy } from "lucide-react";

const comparison = [
  {
    feature: "Experienced AI Specialists",
    competitors: false,
    sallyCalls: true,
  },
  {
    feature: "Cutting-Edge Development Techniques",
    competitors: false,
    sallyCalls: true,
  },
  {
    feature: "Custom Tailored Solutions",
    competitors: false,
    sallyCalls: true,
  },
  {
    feature: "Customer-Focused Strategy",
    competitors: false,
    sallyCalls: true,
  },
  {
    feature: "Thorough Testing and Quality Focus",
    competitors: false,
    sallyCalls: true,
  },
  {
    feature: "24/7 Support",
    competitors: false,
    sallyCalls: true,
  },
  {
    feature: "Platform Access & Control",
    competitors: false,
    sallyCalls: true,
  },
];

export function Comparison() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              But, why would you want to work with us?
            </h2>
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
        </div>
        <Card className="border-2 shadow-xl hover-lift animate-scale-in overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardHeader className="relative z-10">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 rounded-lg bg-red-50 border-2 border-red-200">
                <CardTitle className="text-xl text-red-600">Other Agencies</CardTitle>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300">
                <CardTitle className="text-xl text-primary font-bold">Sally Calls</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="space-y-4">
              {comparison.map((item, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-2 gap-4 items-center py-4 border-b last:border-0 hover:bg-muted/30 transition-colors rounded-lg px-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="text-sm font-medium">{item.feature}</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-center">
                      {item.competitors ? (
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                          <X className="w-5 h-5 text-red-600" />
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center">
                      {item.sallyCalls ? (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <X className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

