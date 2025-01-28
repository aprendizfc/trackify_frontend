import * as React from 'react'
import { isFocusable } from '@/js/utils/tabbable/tabbable'

interface FocusTrapProps {
  children: React.ReactElement
}

export function FocusTrap({ children }: FocusTrapProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const tabbableElementsRef = React.useRef<HTMLElement[]>([])
  const firstTabbableElementRef = React.useRef<HTMLElement>(null)
  const lastTabbableElementRef = React.useRef<HTMLElement>(null)

  React.useLayoutEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(
        'button, a, input, textarea, select, details'
      ) as NodeListOf<HTMLElement>

      tabbableElementsRef.current = Array.from(elements).filter(isFocusable)

      if (tabbableElementsRef.current.length > 0) {
        const tabbables = tabbableElementsRef.current

        firstTabbableElementRef.current = tabbables[0]
        lastTabbableElementRef.current = tabbables[tabbables.length - 1]
      }
    }
  }, [])

  React.useEffect(() => {
    if (firstTabbableElementRef.current) {
      firstTabbableElementRef.current.focus()
    }
  }, [])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event
      const isJustTabKey = key === 'Tab' && !event.shiftKey
      const isWithShiftKey = key === 'Tab' && event.shiftKey

      if (isJustTabKey && document.activeElement === lastTabbableElementRef.current) {
        event.preventDefault()

        firstTabbableElementRef.current?.focus()
      }

      if (isWithShiftKey && document.activeElement === firstTabbableElementRef.current) {
        event.preventDefault()

        lastTabbableElementRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return <div ref={containerRef}>{children}</div>
}
