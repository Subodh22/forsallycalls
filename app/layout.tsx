import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sally Calls - AI-Powered Voice Agent for Businesses",
  description: "Transform your business communication with intelligent voice agents that handle calls, answer questions, and provide exceptional customer service 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        {/* Unified background for entire site */}
        <div className="fixed inset-0 -z-20 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30">
          {/* Subtle radial gradients */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
          
          {/* Clean geometric lines */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </div>
        
        <Navigation />
        <main className="min-h-screen overflow-x-hidden relative z-10">{children}</main>
        <footer className="border-t py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Sally Calls. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

