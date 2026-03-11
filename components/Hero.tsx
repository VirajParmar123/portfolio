import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero">
      {/* Left content */}
      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for Summer 2026 Internship
        </div>

        <h1 className="hero-name">
          <span className="first">Viraj</span>
          <span className="last">Parmar</span>
        </h1>

        <p className="hero-title-line">Cloud Engineer &amp; Full Stack Developer</p>

        <p className="hero-sub">
          MS CS @ <em>Rowan University</em> — Building scalable systems at the
          intersection of <em>Cloud Infrastructure</em>, <em>DevOps</em>, and Full
          Stack Engineering. Docker · Kubernetes · AWS · MERN · CI/CD
        </p>

        <div className="hero-btns">
          <a href="#contact" className="btn btn-gold">
            <i className="fas fa-paper-plane" /> Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/virajparmar-716209279"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <i className="fab fa-linkedin" /> LinkedIn
          </a>
        </div>
      </div>

      {/* Round Photo */}
      <div className="hero-photo-wrap">
        <div className="photo-ring-outer">
          <div className="photo-circle">
            <Image
              src="/your-photo.jpeg"
              alt="Viraj Parmar"
              fill
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                objectPosition: "center 20%",
              }}
              priority
            />
          </div>
          <div className="gem gem1" />
          <div className="gem gem2" />
          <div className="gem gem3" />
          <div className="gem gem4" />
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to About section">
        <div className="scroll-line" />
        Scroll
      </a>
    </section>
  )
}
