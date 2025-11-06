"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Stethoscope, TrendingUp, Award, Sparkles } from "lucide-react";

const caseStudies = [
  {
    icon: Building2,
    company: "@Realty",
    industry: "Real Estate",
    location: "Australia",
    metric: "90% Reduction in Costs",
    details: "304 Hours Reallocated / mo",
    result: "$140,000 of Labour Saved",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Stethoscope,
    company: "Dental Implants Australia",
    industry: "Dental",
    location: "Medical",
    metric: "20% Lead Qualification",
    details: "24 Hour Reduction in Lead Response",
    result: "$300,000 Pipeline Generated",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    icon: TrendingUp,
    company: "Tech Solutions Inc",
    industry: "Technology",
    location: "USA",
    metric: "250% Increase in Bookings",
    details: "Zero Missed Calls",
    result: "$500,000 Revenue Generated",
    gradient: "from-purple-600 to-indigo-600",
  },
];

export function CaseStudies() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Our Success Stories</h2>
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses are transforming their operations with Sally Calls
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card 
                key={index} 
                className="border bg-white/90 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover-lift overflow-hidden relative group"
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${study.gradient} flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{study.company}</CardTitle>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs px-2.5 py-1 bg-primary/5 text-primary border-primary/10 font-medium">{study.industry}</Badge>
                    <Badge variant="outline" className="text-xs px-2.5 py-1 border-muted-foreground/20 text-muted-foreground">{study.location}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div>
                      <p className={`font-semibold text-base bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-1`}>{study.metric}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.details}</p>
                    </div>
                    <div className="pt-4 border-t border-muted">
                      <p className="font-semibold text-base text-primary">{study.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

