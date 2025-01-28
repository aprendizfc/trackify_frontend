import * as React from 'react'
import { X } from 'react-feather'
import { FocusTrap } from '../focus-trap/focus-trap'
import Button from '../Button/Button'
import { Heading } from '../heading/heading'

interface ModalProps {
  children: React.ReactNode
  title: string
  hasCloseButton?: boolean
  onClose?: VoidFunction
}

export function Modal({ children, title, hasCloseButton = true, onClose }: ModalProps) {
  const id = React.useId()
  const modalTitleId = `modalTitle${id}`

  return (
    <div className="overlay">
      <FocusTrap>
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
          id={id}
          className="modal"
        >
          <Heading appearance="h3" id={modalTitleId}>
            {title}
          </Heading>

          {children}

          {hasCloseButton && (
            <Button
              srText={`Close ${title} dialog`}
              icon={<X role="presentation" focusable={false} />}
              variant="subtle"
              className="modal-close-btn"
              // className={styles.modalCloseButton}
              onClick={onClose}
            />
          )}
        </div>
      </FocusTrap>
    </div>
  )
}
