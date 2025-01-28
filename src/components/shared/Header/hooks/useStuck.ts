import * as React from 'react'

interface UseStuckResult {
  isStuck: boolean
}

export function useStuck(
  target: React.RefObject<HTMLHeadElement | null>
): UseStuckResult {
  const [isStuck, setIsStuck] = React.useState<boolean>(false)

  const handleIntersect = React.useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const isAtTop: boolean = entry.boundingClientRect.top <= 0
      const isIntersecting: boolean = entry.isIntersecting

      if (isAtTop && isIntersecting) {
        setIsStuck(true)
      } else {
        setIsStuck(false)
      }
    })
  }, [])

  React.useEffect(() => {
    const targetEl = target.current

    if (!targetEl) return

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-1px',
      threshold: [0, 1],
    })

    observer.observe(targetEl)

    return () => {
      observer.unobserve(targetEl)
    }
  }, [handleIntersect, target])

  return { isStuck }
}
