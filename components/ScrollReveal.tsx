'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal, .timeline-item').forEach((el) => obs.observe(el))

    // Stagger timeline items
    document.querySelectorAll<HTMLElement>('.timeline-item').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.18}s`
    })

    return () => obs.disconnect()
  }, [])

  return null
}
