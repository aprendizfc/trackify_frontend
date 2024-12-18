import cx from '../../../js/utils/classNames/classNames'
import styles from './Label.module.css'

export interface LabelProps extends React.ComponentProps<'label'> {
  isVisible?: boolean
}

export default function Label({
  children,
  htmlFor,
  isVisible = true,
  className,
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cx(styles.label, className, { 'sr-only': !isVisible })}
    >
      {children}
    </label>
  )
}
