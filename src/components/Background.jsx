import { useEffect, useRef } from 'react'

function getTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ||
    (!document.documentElement.getAttribute('data-theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
    ? 'dark'
    : 'light'
}

const SECTION_PALETTE = [
  { hue: 35, sat: 70, light: 55 },
  { hue: 210, sat: 55, light: 50 },
  { hue: 150, sat: 45, light: 45 },
  { hue: 280, sat: 40, light: 55 },
  { hue: 25, sat: 65, light: 50 },
  { hue: 190, sat: 50, light: 45 },
  { hue: 340, sat: 45, light: 50 },
  { hue: 50, sat: 60, light: 50 },
]

export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    let stars = []
    let shootingStars = []
    let scrollY = 0

    function onScroll() { scrollY = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
      initDots()
    }

    function initParticles() {
      const w = canvas.width
      const h = canvas.height
      const area = w * h

      stars = Array.from({ length: Math.min(Math.floor(area / 1800), 500) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        baseY: Math.random() * h,
        r: Math.random() * 2 + 0.3,
        twinkleSpeed: Math.random() * 0.03 + 0.008,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: Math.random() > 0.85
          ? `hsl(${[220, 200, 30, 340, 180][Math.floor(Math.random() * 5)]}, 60%, 80%)`
          : '#e8e4dc',
        depth: Math.random() * 0.25 + 0.05,
      }))

      particles = Array.from({ length: 12 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        baseY: Math.random() * h,
        r: Math.random() * 200 + 80,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.06,
        hue: [220, 280, 340, 200, 160, 30][Math.floor(Math.random() * 6)],
        sat: Math.random() * 40 + 30,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.003 + 0.001,
        depth: Math.random() * 0.2 + 0.1,
      }))

      shootingStars = []
    }

    function maybeSpawnShootingStar() {
      if (shootingStars.length < 2 && Math.random() < 0.002) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          vx: (Math.random() * 4 + 3) * (Math.random() > 0.5 ? 1 : -1),
          vy: Math.random() * 2 + 1,
          life: 1,
          decay: Math.random() * 0.015 + 0.01,
          len: Math.random() * 60 + 40,
        })
      }
    }

    function drawDark(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.pulse += p.pulseSpeed
        p.x += p.vx
        p.y += p.vy
        if (p.x < -p.r) p.x = canvas.width + p.r
        if (p.x > canvas.width + p.r) p.x = -p.r
        if (p.y < -p.r) p.y = canvas.height + p.r
        if (p.y > canvas.height + p.r) p.y = -p.r

        const parallaxY = p.y - scrollY * p.depth
        const glow = ctx.createRadialGradient(p.x, parallaxY, 0, p.x, parallaxY, p.r)
        const alpha = 0.05 + 0.03 * Math.sin(p.pulse)
        glow.addColorStop(0, `hsla(${p.hue}, ${p.sat}%, 50%, ${alpha})`)
        glow.addColorStop(0.5, `hsla(${p.hue}, ${p.sat}%, 40%, ${alpha * 0.4})`)
        glow.addColorStop(1, 'transparent')
        ctx.fillStyle = glow
        ctx.fillRect(p.x - p.r, parallaxY - p.r, p.r * 2, p.r * 2)
      }

      for (const s of stars) {
        const alpha = 0.3 + 0.7 * Math.sin(t * s.twinkleSpeed + s.twinkleOffset) ** 2
        const parallaxY = s.y - scrollY * s.depth
        ctx.beginPath()
        ctx.arc(s.x, parallaxY, s.r, 0, Math.PI * 2)
        ctx.fillStyle = typeof s.color === 'string' && s.color.startsWith('hsl')
          ? s.color.replace(')', `, ${alpha})`).replace('hsl(', 'hsla(')
          : `rgba(232, 228, 220, ${alpha})`
        ctx.fill()

        if (s.r > 1.5) {
          ctx.beginPath()
          ctx.arc(s.x, parallaxY, s.r * 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(232, 228, 220, ${alpha * 0.08})`
          ctx.fill()
        }
      }

      maybeSpawnShootingStar()
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i]
        ss.x += ss.vx
        ss.y += ss.vy
        ss.life -= ss.decay

        const grad = ctx.createLinearGradient(
          ss.x, ss.y,
          ss.x - ss.vx * ss.len / 4, ss.y - ss.vy * ss.len / 4
        )
        grad.addColorStop(0, `rgba(255, 255, 255, ${ss.life * 0.8})`)
        grad.addColorStop(1, 'transparent')
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(ss.x, ss.y)
        ctx.lineTo(ss.x - ss.vx * ss.len / 4, ss.y - ss.vy * ss.len / 4)
        ctx.stroke()

        if (ss.life <= 0) shootingStars.splice(i, 1)
      }
    }

    let dots = []

    function initDots() {
      const w = canvas.width
      const h = canvas.height
      const palette = SECTION_PALETTE
      const count = Math.min(Math.floor((w * h) / 4000), 600)
      dots = Array.from({ length: count }, () => {
        const p = palette[Math.floor(Math.random() * palette.length)]
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 3 + 1.5,
          hue: p.hue,
          sat: p.sat,
          light: p.light,
          baseAlpha: Math.random() * 0.25 + 0.1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.01 + 0.004,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.06,
          depth: Math.random() * 0.15 + 0.05,
        }
      })
    }

    function drawLight(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const d of dots) {
        d.pulse += d.pulseSpeed
        d.x += d.vx
        d.y += d.vy
        if (d.x < -5) d.x = canvas.width + 5
        if (d.x > canvas.width + 5) d.x = -5
        if (d.y < -5) d.y = canvas.height + 5
        if (d.y > canvas.height + 5) d.y = -5

        const parallaxY = d.y - scrollY * d.depth
        const alpha = d.baseAlpha + 0.1 * Math.sin(t * d.pulseSpeed * 3 + d.pulse)
        ctx.globalAlpha = Math.max(0, alpha)
        ctx.beginPath()
        ctx.arc(d.x, parallaxY, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsl(${d.hue}, ${d.sat}%, ${d.light}%)`
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    let frame = 0
    function animate() {
      frame++
      const theme = getTheme()
      if (theme === 'dark') {
        drawDark(frame)
      } else {
        drawLight(frame)
      }
      animId = requestAnimationFrame(animate)
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      resize()
      const theme = getTheme()
      if (theme === 'dark') drawDark(0)
      else drawLight(0)
    } else {
      resize()
      animate()
    }

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
