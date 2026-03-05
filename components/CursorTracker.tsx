'use client'

import { useEffect } from 'react'

export default function CursorTracker() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring   = document.getElementById('cursorRing')
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top  = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    let raf: number
    const loop = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      raf = requestAnimationFrame(loop)
    }
    loop()

    const onEnter = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(0)'
      ring.style.transform   = 'translate(-50%,-50%) scale(2)'
    }
    const onLeave = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)'
      ring.style.transform   = 'translate(-50%,-50%) scale(1)'
    }

    const targets = document.querySelectorAll('a, button, .skill-chip')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return null
}
