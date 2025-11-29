"use client"

import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

import { cn } from "@/lib/utils"

interface SnowfallProps {
  className?: string
  id?: string
}

export function Snowfall({ className, id = "snowfall" }: SnowfallProps) {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init) {
    return null
  }

  return (
    <Particles
      id={id}
      className={cn("fixed inset-0 pointer-events-none z-0", className)}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false,
            },
            resize: {
              enable: true,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          move: {
            direction: "bottom",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              height: 800,
              width: 800,
            },
            value: 40, // Minimal amount
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 0.3,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
          wobble: {
            enable: true,
            distance: 5,
            speed: 5,
          },
        },
        detectRetina: true,
      }}
    />
  )
}
