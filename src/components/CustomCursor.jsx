import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const ringRef2 = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    const onHover = () => dot.classList.add('cursor-hover')
    const offHover = () => dot.classList.remove('cursor-hover')

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', (e) => {
      const t = e.target.closest('a, button, input, textarea, [data-cursor]')
      if (t) onHover()
    })
    document.addEventListener('mouseout', (e) => {
      const t = e.target.closest('a, button, input, textarea, [data-cursor]')
      if (t) offHover()
    })

    const tick = () => {
      const r = ringRef2.current
      const m = mouseRef.current
      r.x += (m.x - r.x) * 0.12
      r.y += (m.y - r.y) * 0.12
      ring.style.transform = `translate(${r.x - 20}px, ${r.y - 20}px)`
      requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  )
}
