// src/components/Services.tsx
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AmbientSoundPink from "./AmbientSoundPink"
import CinematicReveal from "./CinematicReveal"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  useEffect(() => {
    gsap.set(".service-card", { opacity: 0, y: 50, scale: 0.96, filter: "blur(4px)" })

    ScrollTrigger.batch(".service-card", {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        })
      },
    })

    gsap.fromTo(
      ".services-title",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
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
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".services-subtitle",
          start: "top 90%",
        },
      }
    )
  }, [])

  const services = [
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
  ]

  return (
    <section
      id="services"
      className="scroll-mt-[120px] relative w-full text-white pt-16 pb-32 min-h-[120vh] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/le-paysage-fantastique-du-japon.jpg')" }}
    >
      <CinematicReveal />
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Titre */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h2 className="services-title text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md">
          🌸 Nos Services Zen
        </h2>
        <p className="services-subtitle mt-4 text-base sm:text-lg text-white/80">
          Explorez nos disciplines inspirées par la nature et la paix intérieure.
        </p>
      </div>

      {/* Cartes - mobile triangle + desktop grid */}
      <div className="relative z-10 px-6 mt-12 max-w-6xl mx-auto w-full">
        {/* MOBILE */}
        <div className="block sm:hidden w-full space-y-4">
          <div className="flex justify-center gap-4">
            {services.slice(0, 2).map((service, i) => (
              <div
                key={i}
                className="service-card w-1/2 bg-white/90 text-black p-4 rounded-3xl shadow-md border border-pink-200 transition transform active:scale-95 sm:active:scale-100 duration-300 hover:scale-105 hover:shadow-pink-400/60 hover:border-pink-400"
              >
                <div className="text-3xl text-center mb-2">{service.emoji}</div>
                <h3 className="text-lg font-semibold text-pink-600 text-center">{service.title}</h3>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="service-card w-2/3 bg-white/90 text-black p-5 rounded-3xl shadow-lg border border-pink-300 transition transform active:scale-95 sm:active:scale-100 duration-300 hover:scale-105 hover:shadow-pink-400/70 hover:border-pink-400">
              <div className="text-3xl text-center mb-2">{services[2].emoji}</div>
              <h3 className="text-xl font-semibold text-pink-600 text-center">{services[2].title}</h3>
              <p className="text-sm text-gray-700 text-center mt-2">{services[2].text}</p>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card bg-white/90 text-black p-6 rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-pink-400/80 hover:backdrop-blur-md border-t-2 border-b-2 border-transparent hover:border-pink-400 group"
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
      </div>

      <AmbientSoundPink />
    </section>
  )
}
