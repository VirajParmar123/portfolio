'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  r: number; a: number
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const ctx = cv.getContext('2d')!

    const resize = () => {
      cv.width  = window.innerWidth
      cv.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const P: Particle[] = Array.from({ length: 90 }, () => ({
      x:  Math.random() * window.innerWidth,
      y:  Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r:  Math.random() * 1.6 + 0.3,
      a:  Math.random() * 0.45 + 0.1,
    }))

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, cv.width, cv.height)
      const dark = document.documentElement.getAttribute('data-theme') === 'dark'
      const c    = dark ? '212,175,55' : '110,60,180'

      P.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = cv.width
        if (p.x > cv.width) p.x = 0
        if (p.y < 0) p.y = cv.height
        if (p.y > cv.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${c},${p.a})`
        ctx.fill()
      })

      for (let i = 0; i < P.length; i++) {
        for (let j = i + 1; j < P.length; j++) {
          const dx = P[i].x - P[j].x
          const dy = P[i].y - P[j].y
          const d  = Math.hypot(dx, dy)
          if (d < 130) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${c},${0.07 * (1 - d / 130)})`
            ctx.lineWidth   = 0.5
            ctx.moveTo(P[i].x, P[i].y)
            ctx.lineTo(P[j].x, P[j].y)
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas id="particle-canvas" ref={canvasRef} />
}
