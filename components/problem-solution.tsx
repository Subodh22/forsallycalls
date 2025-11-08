"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, TrendingDown, TrendingUp, Clock, XCircle, Users, Phone, Settings, TrendingUp as TrendingUpIcon, PhoneCall } from "lucide-react";

const problemStats = [
  { icon: Clock, label: "Out-of-hours calls", value: "7", color: "from-red-500 to-orange-500" },
  { icon: XCircle, label: "Canceled tasks", value: "12", color: "from-red-500 to-pink-500" },
  { icon: Users, label: "Unqualified leads", value: "32", color: "from-orange-500 to-red-500" },
  { icon: Phone, label: "Missed calls", value: "7", color: "from-red-500 to-orange-500" },
];

const solutionStats = [
  { icon: Clock, label: "24/7 Availability", value: "", color: "from-green-500 to-emerald-500" },
  { icon: Users, label: "Qualified leads", value: "41", color: "from-green-500 to-emerald-500" },
  { icon: TrendingUpIcon, label: "Freed-up tasks", value: "17", color: "from-emerald-500 to-green-500" },
  { icon: PhoneCall, label: "No missed calls", value: "", color: "from-green-500 to-emerald-500" },
];

const problems = [
  "Overwhelmed by repetitive calls?",
  "Want to get more leads?",
  "Struggling with high call volume?",
  "Distracted from important tasks?",
  "Looking for a scalable, 24/7 solution?",
];

const solutions = [
  "Automate calls with AI Voice Agents",
  "Generate More Leads & Qualified Appointments",
  "Convert More Sales Opportunities",
  "Allocate Your Time to what matters most",
  "Automatically Nurture Leads & Never Miss A Call Again",
];

export function ProblemSolution() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* No background - using unified site background */}

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center border border-red-200/30">
              <TrendingDown className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Missed Calls = Missed Revenue
            </h2>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-200/30">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every missed call costs your company money. Engage every lead 24/7/365.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden relative group">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <AlertCircle className="w-7 h-7 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">Problem</CardTitle>
              </div>
              
              {/* Visual Problem Stats Cards */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {problemStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="relative bg-white rounded-lg p-3 shadow-md border border-gray-100 transform rotate-[-1deg] hover:rotate-0 transition-transform"
                      style={{ transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})` }}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
                      {stat.value && (
                        <div className="text-lg font-bold text-foreground">{stat.value}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="font-bold text-foreground mb-3">Overwhelmed by repetitive calls?</div>
              <ul className="space-y-3">
                {problems.slice(1).map((problem, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-red-100 border-2 border-red-300 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform shadow-sm">
                      <XCircle className="w-3 h-3 text-red-600" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Solution Card */}
          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden relative group">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">Solution</CardTitle>
              </div>
              
              {/* Visual Solution Stats Cards */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {solutionStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="relative bg-white rounded-lg p-3 shadow-md border border-gray-100"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
                      {stat.value && (
                        <div className="text-lg font-bold text-green-600">{stat.value}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="font-bold text-foreground mb-3">Automate calls with AI Voice Agents</div>
              <ul className="space-y-3">
                {solutions.slice(1).map((solution, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className="mt-1 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded blur-sm opacity-0 group-hover/item:opacity-50 transition-opacity"></div>
                      <div className="relative w-5 h-5 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center flex-shrink-0 group-hover/item:border-green-500 group-hover/item:bg-green-50 group-hover/item:scale-110 transition-all shadow-sm">
                        <CheckCircle2 className="w-3 h-3 text-green-600" />
                      </div>
                    </div>
                    <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

