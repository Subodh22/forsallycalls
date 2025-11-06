"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote as QuoteIcon, Star, Sparkles } from "lucide-react";

const testimonials = [
  {
    quote: "Sally Calls is going to change your business and your life, guaranteed.",
    author: "Dimitri P",
    company: "CIRCA94",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    quote: "We've seen a 350% increase in appointments since implementing Sally Calls. It's been a game-changer for our business.",
    author: "Sarah Johnson",
    company: "Tech Solutions Inc",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    quote: "The ROI has been incredible. We're saving thousands of dollars monthly while improving customer satisfaction.",
    author: "Michael Chen",
    company: "Real Estate Partners",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* No background - using unified site background */}

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/20">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">What Our Clients Say</h2>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center border border-yellow-200/30">
              <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden relative group"
            >
              {/* Gradient glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg blur-sm`}></div>
              
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="pt-6 relative z-10">
                <div className="relative mb-5">
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <QuoteIcon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-base mb-6 italic text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-muted pt-4">
                  <p className="font-semibold text-base">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

