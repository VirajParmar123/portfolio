'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const saved = (localStorage.getItem('vp-theme') as 'dark' | 'light') || 'dark'
    setTheme(saved)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('vp-theme', next)
    setTheme(next)

    // Ripple
    const ripple = document.getElementById('ripple')
    if (ripple) {
      ripple.classList.remove('go')
      void ripple.offsetWidth
      ripple.classList.add('go')
    }
  }

  return (
    <nav>
      <Link href="#hero" className="logo">
        VP<span> ✦</span>
      </Link>

      <div className="nav-right">
        <ul className="nav-links">
          {['about', 'skills', 'experience', 'education', 'resume', 'projects', 'contact'].map((s) => (
            <li key={s}>
              <a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
            </li>
          ))}
        </ul>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          <i className="fas fa-moon t-icon t-icon-moon" />
          <i className="fas fa-sun t-icon t-icon-sun" />
          <div className="toggle-thumb">
            <i className="fas fa-moon thumb-moon" />
            <i className="fas fa-sun thumb-sun" />
          </div>
        </button>
      </div>
    </nav>
  )
}
