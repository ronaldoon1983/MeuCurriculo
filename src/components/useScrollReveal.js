import { useEffect, useRef, useState } from 'react'

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(prefersReduced)

  useEffect(() => {
    if (isVisible) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold ?? 0.1, rootMargin: options.rootMargin ?? '0px 0px -50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [isVisible, options.threshold, options.rootMargin])

  return [ref, isVisible]
}
