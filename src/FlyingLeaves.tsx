// src/components/FlyingLeaves.tsx
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(MotionPathPlugin)

export default function FlyingLeaves() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createLeaf = () => {
      const leaf = document.createElement("img")
      leaf.src = "/feuillage.png"
      leaf.className = "leaf absolute w-10 h-10 pointer-events-none opacity-80"
      leaf.style.left = `${Math.random() * window.innerWidth}px`
      leaf.style.top = `-50px`
      container.appendChild(leaf)

      const midY = gsap.utils.random(window.innerHeight * 0.4, window.innerHeight * 0.6)
      const endX = window.innerWidth + 150
      const controlX = gsap.utils.random(100, 200)
      const controlY = gsap.utils.random(100, 200)
      const scale = gsap.utils.random(0.4, 0.8)
      const rotation = gsap.utils.random(180, 360)

      gsap.set(leaf, { scale, rotation: 0 })

      gsap.to(leaf, {
        motionPath: {
          path: [
            { x: 0, y: 0 },
            { x: controlX, y: midY },
            { x: endX, y: midY - controlY },
          ],
          autoRotate: true,
        },
        duration: gsap.utils.random(5, 8),
        ease: "power1.inOut",
        rotation,
        onComplete: () => {
          if (container.contains(leaf)) {
            container.removeChild(leaf)
          }
        },
      })
    }

    const interval = setInterval(() => {
      for (let i = 0; i < gsap.utils.random(1, 2); i++) {
        createLeaf()
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-10 overflow-hidden"
    />
  )
}
