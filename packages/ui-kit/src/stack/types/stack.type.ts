export interface StackProps extends React.ComponentProps<'div'> {
  alignItems?: 'baseline' | 'center' | 'end' | 'start' | 'stretch'
  alignSelf?: 'baseline' | 'center' | 'end' | 'start' | 'stretch'
  direction?: 'column-reverse' | 'column' | 'row-reverse' | 'row'
  gap?: 1 | 10 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  justifyContent?: 'around' | 'between' | 'center' | 'end' | 'evenly' | 'start'
  wrap?: 'nowrap' | 'wrap-reverse' | 'wrap'
}
