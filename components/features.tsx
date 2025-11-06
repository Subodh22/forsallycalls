"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, Shield, Zap, Users, BarChart, Sparkles, ArrowRight, DollarSign, TrendingUp, Palette, Wrench, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    title: "Sales on Autopilot",
    description: "AI Voice Agents automatically engage leads, qualify them, and book appointments, freeing up your time to focus on closing deals effectively.",
    gradient: "from-blue-500 to-cyan-500",
    color: "text-blue-600",
    illustration: "sales-autopilot",
  },
  {
    icon: Phone,
    title: "AI Receptionist",
    description: "AI Voice Agents handle calls 24/7, answering questions, routing inquiries, and booking appointments to keep your customers satisfied.",
    gradient: "from-purple-500 to-indigo-500",
    color: "text-purple-600",
    illustration: "receptionist",
  },
  {
    icon: Palette,
    title: "Custom Agents",
    description: "Have a specific idea for your business? We'll build an AI Agent tailored to your needs, making sure it fits perfectly into your workflow.",
    gradient: "from-pink-500 to-rose-500",
    color: "text-pink-600",
    illustration: "custom",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Lightning-fast response times that keep your customers engaged and satisfied with immediate answers.",
    gradient: "from-amber-500 to-orange-500",
    color: "text-amber-600",
    illustration: "instant",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability to protect your business and customer data.",
    gradient: "from-green-500 to-emerald-500",
    color: "text-green-600",
    illustration: "secure",
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Get detailed analytics on call volumes, customer satisfaction, and business insights.",
    gradient: "from-indigo-500 to-blue-500",
    color: "text-indigo-600",
    illustration: "analytics",
  },
];

// Simplified icon-focused illustrations matching website aesthetic
function SalesAutopilotIllustration() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center gap-2 px-2">
        {/* Lead icons - reduced to 2 */}
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, scale: 0, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.div
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            >
              <Users className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>
        ))}
        
        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <motion.div
            animate={{
              x: [0, 2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRight className="w-4 h-4 text-primary" />
          </motion.div>
        </motion.div>
        
        {/* AI Processing icon */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.div
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary via-purple-600 to-indigo-600 flex items-center justify-center shadow-xl"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Zap className="w-7 h-7 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        >
          <motion.div
            animate={{
              x: [0, 2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.3,
              ease: "easeInOut",
            }}
          >
            <ArrowRight className="w-4 h-4 text-primary" />
          </motion.div>
        </motion.div>
        
        {/* Revenue icons - reduced to 2 */}
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 + i * 0.08, type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.div
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            >
              <DollarSign className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ReceptionistIllustration() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Central phone icon */}
        <motion.div
          className="relative z-10"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.div
            className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-xl"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Phone className="w-10 h-10 text-white" />
          </motion.div>
          
          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-purple-300/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        {/* Connection icons around - properly centered */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i * 360) / 6 - 90; // Start from top (-90 degrees)
          const radius = 50;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          return (
            <motion.div
              key={i}
              className="absolute z-0"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.div
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.12,
                  ease: "easeInOut",
                }}
              >
                <Users className="w-4 h-4 text-white" />
              </motion.div>
            </motion.div>
          );
        })}
        
        {/* 24/7 badge */}
        <motion.div
          className="absolute top-0 right-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-lg z-20"
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1.2, 1],
          }}
          transition={{
            delay: 1,
            duration: 0.5,
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <CheckCircle2 className="w-4 h-4 text-white" />
        </motion.div>
      </div>
    </div>
  );
}

function CustomAgentsIllustration() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Stacked icon cards */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
        >
          {/* Bottom card */}
          <motion.div
            className="absolute w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg"
            style={{ transform: 'translate(8px, 8px)' }}
            animate={{
              y: [8, 6, 8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            <DollarSign className="w-7 h-7 text-white" />
          </motion.div>
          
          {/* Middle card */}
          <motion.div
            className="absolute w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg"
            style={{ transform: 'translate(4px, 4px)' }}
            animate={{
              y: [4, 2, 4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 0.3,
            }}
          >
            <Palette className="w-7 h-7 text-white" />
          </motion.div>
          
          {/* Top card */}
          <motion.div
            className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-xl z-10"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 0.6,
            }}
          >
            <Wrench className="w-7 h-7 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Custom badge */}
        <motion.div
          className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg z-20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <CheckCircle2 className="w-4 h-4 text-white" />
        </motion.div>
      </div>
    </div>
  );
}

function InstantIllustration() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center gap-3">
        {/* Lightning icon */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <motion.div
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Speed indicators */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.15 }}
          >
            <motion.div
              className="w-3 h-12 rounded-full bg-gradient-to-b from-amber-500 to-orange-500 shadow-md"
              style={{ height: `${20 + i * 8}px` }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          </motion.div>
        ))}
        
        {/* Speed particles */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-amber-400"
            style={{
              left: `${60 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, 20],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function SecureIllustration() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Shield icon */}
        <motion.div
          className="relative"
          initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
        >
          <motion.div
            className="w-20 h-20 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-xl"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            <Shield className="w-10 h-10 text-white" />
          </motion.div>
          
          {/* Protection rings */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-green-300/40"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-green-200/30"
            style={{ transform: 'scale(1.3)' }}
            animate={{
              scale: [1.3, 1.5, 1.3],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: 0.5,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

function AnalyticsIllustration() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center gap-2">
        {/* Chart bars as icons */}
        {[
          { height: 20, delay: 0 },
          { height: 32, delay: 0.1 },
          { height: 44, delay: 0.2 },
          { height: 52, delay: 0.3 },
        ].map((bar, i) => (
          <motion.div
            key={i}
            className="relative flex flex-col items-center gap-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + bar.delay, type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="w-8 rounded-t-lg bg-gradient-to-t from-indigo-600 to-blue-500 shadow-lg"
              style={{ height: `${bar.height}px` }}
              initial={{ height: 0 }}
              animate={{
                height: bar.height,
                scale: [1, 1.05, 1],
              }}
              transition={{
                delay: 0.5 + bar.delay,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                },
              }}
            />
            <span className="text-xs font-semibold text-muted-foreground">Q{i + 1}</span>
          </motion.div>
        ))}
        
        {/* Trend arrow */}
        <motion.div
          className="absolute top-4 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <TrendingUp className="w-6 h-6 text-indigo-600" />
        </motion.div>
      </div>
    </div>
  );
}

const illustrationMap: Record<string, () => JSX.Element> = {
  "sales-autopilot": SalesAutopilotIllustration,
  "receptionist": ReceptionistIllustration,
  "custom": CustomAgentsIllustration,
  "instant": InstantIllustration,
  "secure": SecureIllustration,
  "analytics": AnalyticsIllustration,
};

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* No background - using unified site background */}

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/20">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">How we will transform your business</h2>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/20">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to revolutionize your customer communication
          </p>
        </div>
        
        {/* Dynamic grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const Illustration = illustrationMap[feature.illustration] || (() => null);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card 
                  className="border-0 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden relative group h-full flex flex-col"
                >
                  {/* Gradient glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg blur-sm`}></div>
                  
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="pb-4 relative z-10 flex-shrink-0">
                    {/* Visual Illustration - Clean animated style */}
                    <motion.div 
                      className="mb-5 p-6 rounded-xl bg-gradient-to-br from-slate-50/80 to-white border border-slate-200/50 shadow-sm h-40 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Illustration />
                    </motion.div>
                    
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 flex-grow flex flex-col">
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground mb-5 flex-grow">
                      {feature.description}
                    </CardDescription>
                    
                    {/* Dynamic Learn more link */}
                    <motion.div 
                      className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto"
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
