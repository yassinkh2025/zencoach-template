import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface MagicMenuProps {
  onNavigate: (section: string) => void
  current: string
}

export default function MagicMenu({ onNavigate, current }: MagicMenuProps) {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  // 🎨 Couleur dynamique par section
  const getColor = () => {
    switch (current) {
      case "about":
        return "bg-blue-500"
      case "services":
        return "bg-pink-500"
      case "contact":
        return "bg-purple-500"
      default:
        return "bg-green-500"
    }
  }

  const getGlow = () => {
    switch (current) {
      case "about":
        return "animate-glow-blue"
      case "services":
        return "animate-glow-pink"
      case "contact":
        return "animate-glow-purple"
      default:
        return "animate-glow"
    }
  }

  useEffect(() => {
    setOpen(false) // Ferme le menu à chaque navigation
  }, [current])

  return (
    <>
      {/* 🌀 Bouton magique principal */}
      <button
        onClick={toggleMenu}
        className={`fixed top-4 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${getGlow()}`}
        aria-label="Ouvrir le menu"
      >
        <div className={`relative w-6 h-6`}>
          <span className="absolute inset-0 rounded-full border-2 border-white animate-ping-fast opacity-40" />
          <div className={`w-full h-full rounded-full shadow-inner ${getColor()}`} />
        </div>
      </button>

      {/* ☁️ Menu animé flottant responsive */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="menu"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 1.2, filter: "blur(8px)" }}
            transition={{ duration: 0.5 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-white/80 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl border border-white/30 w-[90%] max-w-sm md:max-w-3xl"
          >
            <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-base sm:text-lg font-semibold text-green-800">
              {[
                { id: "hero", label: "Accueil" },
                { id: "about", label: "À propos" },
                { id: "services", label: "Services" },
                { id: "contact", label: "Contact" },
              ].map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="hover:text-green-600 transition-transform hover:scale-105 cursor-pointer relative"
                  onClick={() => onNavigate(item.id)}
                >
                  <span className="glow-text whitespace-nowrap">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
