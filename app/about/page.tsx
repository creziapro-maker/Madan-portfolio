import { ParticleBackground } from "@/components/particle-background"
import { AboutContent } from "@/components/about-content"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-slate-950">
      <ParticleBackground />
      <AboutContent />

      <footer className="relative py-12 border-t border-cyan-400/10 bg-gradient-to-b from-slate-950 to-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2025 Madan Rajendra. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
