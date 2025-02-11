import * as React from 'react'
import { X } from 'react-feather'
import { FocusTrap } from '../focus-trap/focus-trap'
import Button from '../Button/Button'
import { Heading } from '../heading/heading'
import { useModal } from './hooks/use-modal'

interface ModalProps {
  children: React.ReactNode
  title: string
  hasCloseButton?: boolean
  onClose?: VoidFunction
  closeOnOverlayClick?: boolean
  shouldCloseOnEsc?: boolean
  isOpen: boolean
}

export function Modal({
  children,
  title,
  hasCloseButton = true,
  onClose,
  closeOnOverlayClick = true,
  shouldCloseOnEsc = true,
  isOpen,
}: ModalProps) {
  const { getOverlayProps, getModalProps, getTitleProps } = useModal({
    isOpen,
    closeOnOverlayClick,
    onClose,
    shouldCloseOnEsc,
    triggerElement: document.activeElement as HTMLElement,
  })

  if (!isOpen) return null

  return (
    <div {...getOverlayProps()} className="overlay">
      <FocusTrap>
        <div {...getModalProps()} className="modal">
          <Heading appearance="h3" {...getTitleProps()}>
            {title}
          </Heading>

          {children}

          {hasCloseButton && (
            <Button
              srText={`Close ${title} dialog`}
              icon={<X role="presentation" focusable={false} />}
              variant="subtle"
              className="modal-close-btn"
              onClick={onClose}
            />
          )}
        </div>
      </FocusTrap>
    </div>
  )
}
