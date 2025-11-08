"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Zap } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$0.25",
    period: "/call",
    payAsYouGo: true,
    description: "Perfect for small businesses getting started",
    features: [
      "Pay as you go pricing",
      "AI voice agent",
      "Basic call routing",
      "Calendar integration",
      "Email notifications",
      "Basic analytics",
      "Email support",
    ],
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    name: "Professional",
    price: "$399",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "Unlimited calls",
      "Advanced AI voice agent",
      "Smart call routing",
      "Calendar integration",
      "Advanced analytics",
      "Custom dashboard",
      "Priority support",
      "Custom greetings",
      "Multi-language support",
    ],
    gradient: "from-primary to-purple-500",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited calls",
      "Custom AI training",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "24/7 phone support",
      "SLA guarantee",
      "Custom reporting",
    ],
    gradient: "from-purple-500 to-pink-500",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* No background - using unified site background */}

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/20 mb-8">
            <Zap className="w-5 h-5 text-primary" />
            <p className="text-sm font-semibold text-primary tracking-wide">Simple, Transparent Pricing</p>
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with our Starter plan and scale as you grow. All plans include our AI-powered voice agent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <Card 
                className={`border-0 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden relative group h-full ${
                  plan.popular ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                {/* Gradient glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg blur-sm`}></div>
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="text-center pb-6 relative z-10">
                  <div className="relative inline-block mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 mx-auto`}>
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <div className="mb-2">
                      <span className={`text-5xl font-bold bg-gradient-to-br ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-muted-foreground text-lg ml-1">{plan.period}</span>
                      )}
                    </div>
                    {plan.payAsYouGo && (
                      <div className="text-sm text-muted-foreground mb-2">
                        Pay only for what you use
                      </div>
                    )}
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">$500</span> one-time setup fee
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="relative mt-0.5 flex-shrink-0">
                          <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity`}></div>
                          <div className={`relative w-6 h-6 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    size="lg" 
                    className={`w-full text-lg ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 shadow-lg hover:shadow-xl' 
                        : 'bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800'
                    } transition-all`}
                  >
                    <Link href="/#demo">
                      {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

