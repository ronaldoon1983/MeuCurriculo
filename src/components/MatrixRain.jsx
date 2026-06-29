import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>/{}[]|&^%$#@!'
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -canvas.height / fontSize))

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px "Courier New", monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const y = drops[i] * fontSize

        const brightness = Math.random()
        if (brightness > 0.98) {
          ctx.fillStyle = '#ffffff'
        } else if (brightness > 0.9) {
          ctx.fillStyle = '#00ff41'
        } else {
          ctx.fillStyle = '#008f11'
        }

        ctx.fillText(char, i * fontSize, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 45)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.5,
        pointerEvents: 'none',
      }}
    />
  )
}
