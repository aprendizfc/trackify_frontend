import cx from '../../../js/utils/classNames/classNames'
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden'
import * as styles from './Label.module.css'

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
      className={cx(styles.label, className, { 'sr-only': !isVisible })}
    >
      {children}

      {isRequired && (
        <abbr className={styles.required}>
          <span aria-hidden="true">*</span>
          <VisuallyHidden>Required</VisuallyHidden>
        </abbr>
      )}
    </label>
  )
}
