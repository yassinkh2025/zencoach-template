// src/components/AmbientSound.tsx
import { useEffect, useRef, useState } from "react"

export default function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const tryPlay = () => {
      audio.volume = muted ? 0 : 0.4
      audio.loop = true
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            document.removeEventListener("click", tryPlay)
            document.removeEventListener("scroll", tryPlay)
          })
          .catch(() => {})
      }
    }

    document.addEventListener("click", tryPlay)
    document.addEventListener("scroll", tryPlay)

    return () => {
      document.removeEventListener("click", tryPlay)
      document.removeEventListener("scroll", tryPlay)
    }
  }, [muted])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  return (
    <>
      <audio
        ref={(el) => {
          if (el) audioRef.current = el
        }}
        src="/leaves.mp3"
        preload="auto"
      />

      {/* 🔊 Bouton sonore magique */}
      <button
        onClick={toggleMute}
        className={`fixed bottom-4 left-4 z-50 w-12 h-12 rounded-full flex items-center justify-center
          ${muted ? "bg-gray-300" : "bg-green-300 animate-glow"}
          shadow-lg transition-all duration-300`}
        aria-label="Activer ou couper le son"
      >
        <div className={`relative w-6 h-6 ${muted ? "" : "animate-bouncewing"}`}>
          {!muted && (
            <span className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping-fast opacity-60" />
          )}
          <div
            className={`w-full h-full rounded-full shadow-inner ${
              muted
                ? "bg-gradient-to-br from-gray-300 to-gray-100"
                : "bg-gradient-to-tr from-green-700 to-lime-400"
            }`}
          />
        </div>
      </button>
    </>
  )
}
