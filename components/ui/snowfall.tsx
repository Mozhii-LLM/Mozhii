"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface Snowflake {
  x: number
  y: number
  radius: number
  speed: number
  wind: number
  opacity: number
}

interface SnowfallProps {
  snowflakeCount?: number
  className?: string
  id?: string
}

export function Snowfall({ snowflakeCount = 100, className, id }: SnowfallProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        setDimensions({
          width: canvasRef.current.offsetWidth,
          height: canvasRef.current.offsetHeight,
        })
      } else if (typeof window !== "undefined") {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const snowflakes: Snowflake[] = []

    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 1 + 0.5,
        wind: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    let animationFrameId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      snowflakes.forEach((flake) => {
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`
        ctx.fill()

        flake.y += flake.speed
        flake.x += flake.wind

        if (flake.y > canvas.height) {
          flake.y = -flake.radius
          flake.x = Math.random() * canvas.width
        }
        if (flake.x > canvas.width) {
          flake.x = 0
        } else if (flake.x < 0) {
          flake.x = canvas.width
        }
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => cancelAnimationFrame(animationFrameId)
  }, [dimensions, snowflakeCount])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("pointer-events-none fixed inset-0 z-50", className)}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
