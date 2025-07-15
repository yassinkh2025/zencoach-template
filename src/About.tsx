// src/components/About.tsx
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type"
import AmbientSoundBlue from "./AmbientSoundBlue"
import CinematicReveal from "./CinematicReveal"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const heading = headingRef.current
    const paragraph = paragraphRef.current
    if (!section || !heading || !paragraph) return

    const split = new SplitType(heading, { types: "chars" })
    gsap.set(split.chars, { opacity: 0, y: 40 })

    gsap.to(split.chars, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: "power2.out",
    })

    gsap.fromTo(
      paragraph,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraph,
          start: "top 85%",
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('/meditation-sous-la-foret-de-bambou-au-clair-de-lune.jpg')",
      }}
    >
      <CinematicReveal />
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="z-10 max-w-3xl bg-black/60 text-white p-6 md:p-10 rounded-xl shadow-2xl backdrop-blur-md border border-white/20">
        <h2
          ref={headingRef}
          className="text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-xl"
        >
          🌙 À propos de ZenCoach
        </h2>
        <p
          ref={paragraphRef}
          className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-100"
        >
          Chez <strong>ZenCoach</strong>, nous vous guidons vers une paix intérieure
          profonde. Par des pratiques inspirées de la nature, du souffle et de la
          pleine conscience, explorez un chemin de sérénité, d’équilibre et de
          renaissance.
        </p>
      </div>

      <AmbientSoundBlue />
    </section>
  )
}
