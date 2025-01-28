import cx from '../../../js/utils/classNames/classNames'
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden'

export interface LabelProps extends React.ComponentProps<'label'> {
  isVisible?: boolean
  isRequired?: boolean
}

export default function Label({
  children,
  htmlFor,
  isVisible = true,
  isRequired,
  className,
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cx('label', className, { 'sr-only': !isVisible })}
    >
      {children}

      {isRequired && (
        <abbr className="required">
          <span aria-hidden="true">*</span>
          <VisuallyHidden> (Required) </VisuallyHidden>
        </abbr>
      )}
    </label>
  )
}
