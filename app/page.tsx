import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticleCanvas from '@/components/ParticleCanvas'
import CursorTracker from '@/components/CursorTracker'
import ScrollReveal from '@/components/ScrollReveal'
import ThemeScript from '@/components/ThemeScript'
import ChatBot from '@/components/ChatBot'

export default function Home() {
  return (
    <>
      {/* Inlines a tiny script before paint to avoid theme flicker */}
      <ThemeScript />

      {/* Custom cursor */}
      <div className="cursor"    id="cursor" />
      <div className="cursor-ring" id="cursorRing" />

      {/* Background layers */}
      <ParticleCanvas />
      <div className="grid-overlay" />
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />

      {/* Ripple overlay for theme switch */}
      <div className="ripple-wrap">
        <div className="ripple" id="ripple" />
      </div>

      {/* Page */}
      <Nav />
      <main>
        <Hero />
        <hr className="divider" />
        <About />
        <hr className="divider" />
        <Skills />
        <hr className="divider" />
        <Experience />
        <hr className="divider" />
        <Education />
        <hr className="divider" />
        <Resume />
        <hr className="divider" />
        <Contact />
      </main>
      <Footer />

      {/* Client-side interactivity */}
      <CursorTracker />
      <ScrollReveal />
      <ChatBot />
    </>
  )
}
