"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Send, Sparkles } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export function DemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Format phone number: if it starts with 0, replace with +61
      let formattedPhone = formData.phone.trim();
      if (formattedPhone.startsWith("0")) {
        formattedPhone = "+61" + formattedPhone.substring(1);
      }
      
      const formDataToSend = {
        ...formData,
        phone: formattedPhone,
      };
      
      const response = await fetch("https://bapi33.app.n8n.cloud/webhook/7e76b655-82c7-417d-be8b-d3a8b7e8d36f", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        alert("Thank you! We'll call you soon to schedule a demo.");
        setFormData({ name: "", phone: "", email: "", company: "", message: "" });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* No background - using unified site background */}

      <div className="container mx-auto max-w-2xl relative z-10">
        <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden relative group">
          {/* Gradient glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"></div>
          
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <CardHeader className="text-center relative z-10">
            <div className="relative mx-auto mb-5 w-fit">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold gradient-text">
                Try it for yourself!
              </CardTitle>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            </div>
            <CardDescription className="text-lg text-center">
             Our agent will call you in less than 10 seconds
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="demo-name" className="text-base font-medium">Name *</Label>
                <Input
                  id="demo-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-phone" className="text-base font-medium">Phone *</Label>
                <Input
                  id="demo-phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0469004456 or +61469004456"
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-email" className="text-base font-medium">Email *</Label>
                <Input
                  id="demo-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-company" className="text-base font-medium">Company</Label>
                <Input
                  id="demo-company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-message" className="text-base font-medium">Message</Label>
                <Textarea
                  id="demo-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs..."
                  rows={4}
                  className="border-2 focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full h-12 text-lg bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 shadow-lg hover:shadow-xl transition-all" disabled={isSubmitting}>
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                By clicking &apos;Send Message&apos; you agree to receive autodialed calls & emails from{" "}
                <span className="font-semibold text-primary">Sally Calls</span> and agree to our{" "}
                <a href="#" className="underline hover:text-primary transition-colors">Privacy Policy</a>.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

