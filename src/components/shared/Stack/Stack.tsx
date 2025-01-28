import classNames from '../../../js/utils/classNames/classNames'

export interface StackProps extends React.ComponentProps<'div'> {
  gutter?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export default function Stack({ children, gutter = 'md' }: StackProps) {
  return (
    <div
      className={classNames('flex flex-col justify-start', {
        'gap-1': gutter === 'xxs',
        'gap-2': gutter === 'xs',
        'gap-3': gutter === 'sm',
        'gap-5': gutter === 'md',
        'gap-8': gutter === 'lg',
        'gap-12': gutter === 'xl',
        'gap-16': gutter === 'xxl',
      })}
    >
      {children}
    </div>
  )
}
