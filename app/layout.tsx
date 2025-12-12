import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display, JetBrains_Mono, Great_Vibes } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-great-vibes" })

export const metadata: Metadata = {
  title: "Madan Rajendra | Flutter Developer, AI Engineer & Tech Founder | Nuvrexio CEO",
  description:
    "Madan Rajendra is a top Flutter developer, AI engineer, and tech startup founder. CEO of Nuvrexio - building AI-powered code generation tools. Expert in Flutter app development, Firebase backend, Next.js, machine learning, and scalable mobile applications. Hire a skilled software engineer for your next project.",
  generator: "v0.app",
  keywords: [
    "Madan Rajendra",
    "Nuvrexio",
    "Flutter developer",
    "Flutter app development",
    "AI engineer",
    "software engineer",
    "mobile app developer",
    "tech founder",
    "startup founder",
    "AI code generation",
    "Flutter expert",
    "Firebase developer",
    "Next.js developer",
    "full stack developer",
    "React developer",
    "Dart programming",
    "cross-platform mobile apps",
    "iOS developer",
    "Android developer",
    "machine learning engineer",
    "LLM applications",
    "GPT integration",
    "AI startup",
    "tech entrepreneur",
    "software architect",
    "cloud computing",
    "GPU cloud",
    "scalable architecture",
    "e-commerce app development",
    "sports app development",
    "grocery delivery app",
    "hire Flutter developer",
    "freelance mobile developer",
    "India tech talent",
    "remote software engineer",
    "app development services",
    "custom mobile app development",
    "UI/UX design",
    "product development",
    "MVP development",
    "tech consulting",
    "NovaFuze",
    "PlayNexa",
    "CrezAIPro",
    "Monomode",
    "DailyKart",
    "GSC Coach",
  ],
  authors: [{ name: "Madan Rajendra", url: "https://madanrajendra.com" }],
  creator: "Madan Rajendra",
  publisher: "Madan Rajendra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Madan Rajendra | Flutter Developer, AI Engineer & Tech Founder",
    description:
      "Top Flutter developer and AI engineer building next-gen mobile apps and AI-powered developer tools. CEO of Nuvrexio.",
    siteName: "Madan Rajendra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madan Rajendra | Flutter Developer & AI Engineer",
    description: "Tech founder building AI-powered Flutter code generation tools. Expert mobile app developer.",
  },
  alternates: {
    canonical: "https://madanrajendra.com",
  },
  category: "technology",
}

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} ${greatVibes.variable} font-sans antialiased bg-slate-950`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
