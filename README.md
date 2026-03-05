# Viraj Parmar — Portfolio (Next.js 14)

Personal portfolio built with **Next.js 14 App Router**, TypeScript, and CSS Variables.

## ✦ Features
- Deep Purple & Gold luxury dark theme
- Soft lavender-grey light mode
- Animated particle network canvas
- Custom cursor with trailing ring
- Scroll-triggered reveal animations
- Theme toggle with ripple effect (persisted via localStorage)
- Round hero photo frame with spinning ring
- Fully responsive

## 🗂 Project Structure

```
viraj-portfolio/
├── app/
│   ├── layout.tsx       # Root layout — fonts, metadata, FA icons
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # All CSS variables, animations, component styles
├── components/
│   ├── Nav.tsx          # Navbar + theme toggle (Client Component)
│   ├── Hero.tsx         # Hero section with round photo
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills chips
│   ├── Experience.tsx   # Timeline
│   ├── Education.tsx    # Edu cards
│   ├── Contact.tsx      # Contact rows + terminal card
│   ├── Footer.tsx       # Footer
│   ├── ParticleCanvas.tsx  # Canvas animation (Client)
│   ├── CursorTracker.tsx   # Custom cursor logic (Client)
│   ├── ScrollReveal.tsx    # IntersectionObserver (Client)
│   └── ThemeScript.tsx     # Inline script — prevents theme flash
└── public/
    └── (add your photo here as photo.jpg)
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → open http://localhost:3000

# Build for production
npm run build
npm start
```

## 📸 Adding Your Photo

1. Copy your photo to `/public/photo.jpg`
2. Open `components/Hero.tsx`
3. Replace the `avatar-placeholder` div with:

```tsx
import Image from 'next/image'

// inside photo-circle:
<Image
  src="/photo.jpg"
  alt="Viraj Parmar"
  fill
  style={{ objectFit: 'cover', borderRadius: '50%' }}
  priority
/>
```

## 🔧 Updating Contact Info

In `components/Contact.tsx`:
- Replace `+1 (234) 567-890` with your real phone
- Replace `@virajparmar` and the Instagram URLs with your real handle

## 🌐 Deploy on Vercel

```bash
npm install -g vercel
vercel
```
Or push to GitHub and import at [vercel.com](https://vercel.com).
"# portfolio" 
