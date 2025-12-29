"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppFAB() {
  const phoneNumber = "919538090888"
  const message = "Hi Madan, I'm interested in discussing a project with you."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="WhatsApp Chat"
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500/20 blur-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300 border border-green-300/30 hover:border-green-300/60">
          <MessageCircle className="w-8 h-8 text-white" />
          
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/0 via-green-300/10 to-green-400/0 group-hover:from-green-400/20 group-hover:via-green-300/30 group-hover:to-green-400/20 transition-all duration-300" />
        </div>

        <motion.div
          className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        >
          ✓
        </motion.div>
      </div>
    </motion.a>
  )
}
