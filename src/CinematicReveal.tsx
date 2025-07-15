import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function CinematicReveal() {
  const overlayRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!overlayRef.current) return

    const overlay = overlayRef.current

    gsap.fromTo(
      overlay,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -100,
        duration: 1.6,
        ease: "power4.out",
        delay: 0.3,
        onComplete: () => {
          if (overlay) {
            overlay.style.display = "none"
          }
        },
      }
    )
  }, [])

  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 bg-black z-50 pointer-events-none"
    />
  )
}
