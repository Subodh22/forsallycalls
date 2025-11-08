"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Sparkles, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Handle form submission here
      console.log("Form submitted:", formData);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
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
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="relative mx-auto mb-5 w-fit">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-500 rounded-xl blur-md opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 mx-auto">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Get in Touch
            </h1>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
            <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden relative group">
              {/* Gradient glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"></div>
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  Send us a message
                </CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-medium">Name *</Label>
                      <Input
                        id="name"
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
                      <Label htmlFor="email" className="text-base font-medium">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="h-12 border-2 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-medium">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0469004456 or +61469004456"
                        className="h-12 border-2 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-base font-medium">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="h-12 border-2 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs..."
                      rows={6}
                      className="border-2 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-12 text-lg bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 shadow-lg hover:shadow-xl transition-all" 
                    disabled={isSubmitting}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By clicking &apos;Send Message&apos; you agree to receive emails from{" "}
                    <span className="font-semibold text-primary">Sally Calls</span> and agree to our{" "}
                    <a href="#" className="underline hover:text-primary transition-colors">Privacy Policy</a>.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
      </div>
    </div>
  );
}
