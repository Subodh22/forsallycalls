"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "Do your AI Voice Agents integrate with my CRM & Booking System?",
    answer: "Yes! Sally Calls seamlessly integrates with popular CRM systems and booking platforms including Salesforce, HubSpot, Calendly, and many others. We can also create custom integrations for your specific needs.",
  },
  {
    question: "Does it Sound Human-Like?",
    answer: "Absolutely! Our AI voice agents use advanced natural language processing and voice synthesis technology to create conversations that are virtually indistinguishable from human agents. Customers often can't tell the difference.",
  },
  {
    question: "Can You Trust The AI?",
    answer: "Yes, our AI is built with enterprise-grade security and reliability. All conversations are encrypted, and we follow strict data privacy regulations. Plus, you have full control and can monitor all interactions through our dashboard.",
  },
  {
    question: "How Long Does Development Take?",
    answer: "Typically, we can have your custom AI voice agent up and running within 2-4 weeks. This includes discovery, configuration, testing, and deployment. Simple setups can be done even faster.",
  },
  {
    question: "Do You Offer Management?",
    answer: "Yes! We offer comprehensive management services including monitoring, optimization, updates, and 24/7 support. You can choose to manage it yourself or let us handle everything for you.",
  },
  {
    question: "Can You Make Edits to the Agents?",
    answer: "Absolutely! We can make edits, updates, and improvements to your AI agents at any time. Changes can be implemented quickly, often within 24-48 hours depending on complexity.",
  },
  {
    question: "How Much Does Development Cost?",
    answer: "Pricing varies based on your specific needs, complexity, and scale. We offer flexible pricing plans to fit businesses of all sizes. Contact us for a custom quote tailored to your requirements.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* No background - using unified site background */}

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/20">
              <HelpCircle className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Everything you need to know.
            </h2>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/20">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. Here&apos;s everything you need to know before getting started.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="border-0 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden relative group"
            >
              {/* Gradient glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"></div>
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader
                className="cursor-pointer relative z-10"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-500 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <HelpCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg pr-8 group-hover:text-primary transition-colors">{faq.question}</CardTitle>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors" />
                  )}
                </div>
              </CardHeader>
              {openIndex === index && (
                <CardContent className="relative z-10 animate-fade-in-up">
                  <CardDescription className="text-base pl-14 leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

