import * as React from 'react'

interface UseModalProps {
  closeOnOverlayClick?: boolean
  onClose?: VoidFunction
  shouldCloseOnEsc?: boolean
  isOpen: boolean
  triggerElement: HTMLElement
}

export function useModal({
  onClose,
  closeOnOverlayClick = true,
  shouldCloseOnEsc = true,
  isOpen,
  triggerElement,
}: UseModalProps) {
  const id = React.useId()
  const modalTitleId = `modalHeading${id}`
  const overlayRef = React.useRef<HTMLDivElement>(null)

  const stableClose = React.useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  React.useEffect(() => {
    const body: HTMLElement = document.body

    if (isOpen) {
      body.style.overflow = 'hidden'
    }

    return () => {
      body.style.removeProperty('overflow')

      // Restore focus to the element that triggered the modal
      triggerElement?.focus()
    }
  }, [isOpen, triggerElement])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event

      if (key === 'Escape') {
        stableClose()
      }
    }

    if (shouldCloseOnEsc) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      if (shouldCloseOnEsc) {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [shouldCloseOnEsc, stableClose])

  const getModalProps = (): React.HTMLAttributes<HTMLDivElement> => {
    return {
      id,
      role: 'dialog',
      'aria-modal': true,
      'aria-labelledby': modalTitleId,
    }
  }

  const getTitleProps = (): React.HTMLAttributes<HTMLHeadingElement> => {
    return {
      id: modalTitleId,
    }
  }

  const handleOverlayClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const { target } = event

      if (target === overlayRef.current && closeOnOverlayClick) {
        stableClose()
      }
    },
    [closeOnOverlayClick, stableClose]
  )

  const getOverlayProps = (): React.ComponentProps<'div'> => {
    return {
      onClick: handleOverlayClick,
      ref: overlayRef,
    }
  }

  return {
    getOverlayProps,
    getModalProps,
    getTitleProps,
  }
}
