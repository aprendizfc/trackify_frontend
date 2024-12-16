import * as React from 'react'
import { getColorContrast, lcg } from './utils'

const DEFAULT_COLORS = ['#004643', '#abd1c6', '#f9bc60', '#e16162', '#ff8ba7', '#3da9fc']

export default function useColor(initials: string) {
  const { bgColor, textColor } = React.useMemo(() => {
    const lowerInitials = initials.toLowerCase()
    const charCodes: number[] = [...lowerInitials].map((initial) => initial.charCodeAt(0))
    const a = charCodes.length + 1
    const c = charCodes.reduce((prev, current) => {
      return prev + current
    }, 0)
    const idx = lcg(charCodes[0], a, c, DEFAULT_COLORS.length)
    const bgColor = DEFAULT_COLORS[idx]
    const textColor = getColorContrast(bgColor)

    return { bgColor, textColor }
  }, [initials])

  return { bgColor, textColor }
}
