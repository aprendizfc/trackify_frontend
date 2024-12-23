import classNames from '../../../js/utils/classNames/classNames'
import * as styles from './Stack.module.css'

export interface StackProps extends React.ComponentProps<'div'> {
  gutter?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export default function Stack({ children, gutter = 'md' }: StackProps) {
  return (
    <div
      className={classNames(styles.trackifyStack, {
        [styles.trackifyStackXXS]: gutter === 'xxs',
        [styles.trackifyStackXS]: gutter === 'xs',
        [styles.trackifyStackSM]: gutter === 'sm',
        [styles.trackifyStackMD]: gutter === 'md',
        [styles.trackifyStackLG]: gutter === 'lg',
        [styles.trackifyStackXL]: gutter === 'xl',
        [styles.trackifyStackXXL]: gutter === 'xxl',
      })}
    >
      {children}
    </div>
  )
}
