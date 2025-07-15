import { useEffect, useRef, useState } from "react"

export default function AmbientSoundBlue() {
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

      <button
        onClick={toggleMute}
        className={`fixed bottom-4 left-4 z-50 w-12 h-12 rounded-full flex items-center justify-center
          ${muted ? "bg-blue-200" : "bg-blue-400 animate-glow"}
          shadow-lg transition-all duration-300`}
        aria-label="Activer ou couper le son"
      >
        <div className={`relative w-6 h-6 ${muted ? "" : "animate-bouncewing"}`}>
          {!muted && (
            <span className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping-fast opacity-60" />
          )}
          <div
            className={`w-full h-full rounded-full shadow-inner ${
              muted
                ? "bg-gradient-to-br from-blue-200 to-blue-100"
                : "bg-gradient-to-tr from-blue-700 to-cyan-400"
            }`}
          />
        </div>
      </button>
    </>
  )
}
