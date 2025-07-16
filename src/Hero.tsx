// src/components/Hero.tsx
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import FlyingLeaves from "./FlyingLeaves"
import AmbientSound from "./AmbientSound"
import MagicMenu from "./MagicMenu"

type HeroProps = {
  onNavigate: (section: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { scale: 0.8, rotate: -3, opacity: 0 },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      }
    )

    gsap.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 1.2,
      }
    )

    gsap.fromTo(
      buttonRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 2,
        repeat: -1,
        yoyo: true,
      }
    )
  }, [])

  return (
    <section
      id="hero"
      className="scroll-mt-[120px] relative w-full min-h-screen flex items-center justify-center text-center bg-cover bg-center overflow-hidden px-4 md:px-10"
      style={{ backgroundImage: "url('/zen-hero.jpg')" }}
    >
      <FlyingLeaves />
      <AmbientSound />
      <MagicMenu onNavigate={onNavigate} current="hero" />

      {/* Brume douce */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent animate-pulse z-10" />

      {/* Contenu principal */}
      <div className="z-20 w-full max-w-xl bg-white/60 backdrop-blur-sm text-black p-6 md:p-10 rounded-xl shadow-2xl border border-white/40">
        <h1
          ref={titleRef}
          className="text-3xl md:text-6xl font-bold tracking-wide text-green-900 drop-shadow-xl"
        >
          ZenCoach
        </h1>
        <p
          ref={subtitleRef}
          className="mt-4 text-base md:text-xl font-light text-gray-800"
        >
          Trouvez votre équilibre intérieur avec nos programmes bien-être.
        </p>
        <button
          ref={buttonRef}
          onClick={() => onNavigate("about")}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg shadow-md"
        >
          Rejoindre la session 🌿
        </button>
      </div>
    </section>
  )
}
