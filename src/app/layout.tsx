import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Synapse-CI | Smart DevOps Automation Platform",
  description:
    "Synapse-CI — Agentic AI-powered CI/CD orchestration with Human-in-the-Loop governance, IaC generation, adaptive test prioritization, and automated chaos/resilience validation.",
  keywords: [
    "DevOps", "CI/CD", "AI", "LangGraph", "Kubernetes", "Terraform",
    "Chaos Engineering", "Test Prioritization", "Agentic AI", "SLIIT"
  ],
  openGraph: {
    title: "Synapse-CI | Smart DevOps Automation Platform",
    description: "Agentic AI-powered DevOps automation with governed CI/CD orchestration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
