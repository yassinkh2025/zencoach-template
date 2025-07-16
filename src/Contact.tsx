// src/components/Contact.tsx
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import AmbientSoundWhite from "./AmbientSoundWhite"
import CinematicReveal from "./CinematicReveal"

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "back.out(1.7)",
        }
      )
    }

    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power2.out",
        }
      )
    }
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="scroll-mt-[120px] relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-16 md:pb-24 px-4 md:px-8"
      style={{
        backgroundImage: "url('/contact-fond.jpg')",
      }}
    >
      <CinematicReveal />
      <div className="absolute inset-0 bg-black/30 z-0" />

      <form
        ref={formRef}
        className="z-10 bg-white/20 backdrop-blur-sm border border-white/20 shadow-xl rounded-xl w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-8 flex flex-col gap-4"
      >
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex flex-col w-full md:w-1/2 gap-3">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full p-3 rounded-md border border-white/40 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              placeholder="Votre e-mail"
              className="w-full p-3 rounded-md border border-white/40 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <textarea
            placeholder="Votre message"
            rows={4}
            className="w-full md:w-1/2 p-3 rounded-md border border-white/40 bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 self-center"
        >
          Envoyer 🕊️
        </button>
      </form>

      <div
        ref={footerRef}
        className="z-10 text-center mt-8 text-yellow-400 text-sm md:text-base font-semibold tracking-wide animate-footer-glow"
      >
        ✨ fait avec sagesse par <span className="text-white font-bold">SAYATH</span> ✨
      </div>

      <AmbientSoundWhite />
    </section>
  )
}
