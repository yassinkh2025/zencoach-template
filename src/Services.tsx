import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AmbientSoundPink from "./AmbientSoundPink"
import CinematicReveal from "./CinematicReveal"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".service-card")
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.8,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          delay: i * 0.2,
        }
      )
    })

    gsap.fromTo(
      ".services-title",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-title",
          start: "top 90%",
        },
      }
    )

    gsap.fromTo(
      ".services-subtitle",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: ".services-subtitle",
          start: "top 90%",
        },
      }
    )
  }, [])

  return (
    <section
      id="services"
      className="relative w-full min-h-screen text-white bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/le-paysage-fantastique-du-japon.jpg')" }}
    >
      <CinematicReveal />

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Titre */}
      <div className="relative z-10 text-center max-w-4xl mx-auto pt-28 px-4">
        <h2 className="services-title text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md">
          🌸 Nos Services Zen
        </h2>
        <p className="services-subtitle mt-4 text-base sm:text-lg text-white/80">
          Explorez nos disciplines inspirées par la nature et la paix intérieure.
        </p>
      </div>

      {/* Cartes avec emoji */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16 px-6 md:px-16 pb-16">
        {[
          {
            emoji: "🧘‍♂️",
            title: "Yoga",
            text: "Éveillez votre corps et votre esprit avec nos cours quotidiens.",
          },
          {
            emoji: "🧘‍♀️",
            title: "Méditation",
            text: "Plongez dans une paix intérieure guidée par nos maîtres.",
          },
          {
            emoji: "🥗",
            title: "Nutrition",
            text: "Adoptez une alimentation zen pour votre énergie et sérénité.",
          },
        ].map((service, i) => (
          <div
            key={i}
            className="service-card bg-white/90 text-black p-6 rounded-2xl shadow-xl transform transition duration-700 hover:scale-105 hover:shadow-pink-400/80 hover:backdrop-blur-md border-t-2 border-b-2 border-transparent hover:border-pink-400 group"
          >
            <div className="text-4xl text-center mb-3 group-hover:animate-pulse">{service.emoji}</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-pink-600 mb-2 text-center drop-shadow">
              {service.title}
            </h3>
            <p className="text-sm text-gray-700 text-center group-hover:text-pink-600 transition duration-300">
              {service.text}
            </p>
          </div>
        ))}
      </div>

      {/* Bouton sonore rose */}
      <AmbientSoundPink />
    </section>
  )
}
