// src/App.tsx
import { useEffect, useState } from "react"
import Hero from "./Hero"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact" // ✅ import de la section contact
import MagicMenu from "./MagicMenu"

export default function App() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return <Hero onNavigate={setActiveSection} />
      case "about":
        return <About />
      case "services":
        return <Services />
      case "contact":
        return <Contact /> // ✅ ajout ici
      default:
        return <Hero onNavigate={setActiveSection} />
    }
  }

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {renderSection()}
      <MagicMenu onNavigate={setActiveSection} current={activeSection} />
    </div>
  )
}
