import cx from '@/js/utils/classNames/classNames'

interface ButtonGroupProps {
  children: React.ReactNode
  align?: 'left' | 'center' | 'right'
}

export function ButtonGroup({ children, align = 'center' }: ButtonGroupProps) {
  return (
    <div
      className={cx('flex gap-4', {
        ['text-center justify-center']: align === 'center',
        ['text-left justify-start']: align === 'left',
        ['text-right justify-end']: align === 'right',
      })}
    >
      {children}
    </div>
  )
}
