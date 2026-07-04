import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const ringPosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const onMouse = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    const onHover = () => dot.classList.add('cursor-hover')
    const offHover = () => dot.classList.remove('cursor-hover')

    const raf = () => {
      const rp = ringPosRef.current
      const p = posRef.current
      rp.x += (p.x - rp.x) * 0.12
      rp.y += (p.y - rp.y) * 0.12
      ring.style.transform = `translate(${rp.x - 20}px, ${rp.y - 20}px)`
      requestAnimationFrame(raf)
    }

    window.addEventListener('mousemove', onMouse)
    requestAnimationFrame(raf)

    document.querySelectorAll('a, button, input, textarea, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', onHover)
      el.addEventListener('mouseleave', offHover)
    })

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, input, textarea, [data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', onHover)
        el.removeEventListener('mouseleave', offHover)
        el.addEventListener('mouseenter', onHover)
        el.addEventListener('mouseleave', offHover)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMouse)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  )
}
