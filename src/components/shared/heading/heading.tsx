import cx from '@/js/utils/classNames/classNames'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  level?: HeadingLevel
  appearance?: HeadingLevel
  className?: string
}

export function Heading({
  children,
  level = 'h1',
  appearance,
  className,
  ...rest
}: HeadingProps) {
  const Component = level

  return (
    <Component className={cx(appearance, className)} {...rest}>
      {children}
    </Component>
  )
}
