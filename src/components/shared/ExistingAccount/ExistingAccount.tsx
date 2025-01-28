import cx from '../../../js/utils/classNames/classNames'

export interface ExistingAccountProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export default function ExistingAccount({
  children,
  className,
  ...rest
}: ExistingAccountProps) {
  return (
    <div
      className={cx('flex justify-center items-center gap-2 text-sm mt-2', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
