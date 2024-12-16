interface RGB {
  r: number
  g: number
  b: number
}

function hexToRGB(hex: string): RGB | undefined {
  const result: RegExpExecArray | null = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hex
  )

  if (!result) return undefined

  const r = parseInt(result[1], 16)
  const g = parseInt(result[2], 16)
  const b = parseInt(result[3], 16)

  return { r, g, b }
}

function rgbToYIQ({ r, g, b }: RGB): number {
  return (r * 299 + g * 587 + b * 114) / 1000
}

export function getColorContrast(color: string, threshold: number = 128) {
  const black = '#000000'
  const white = '#fffffe'
  const rgb: RGB | undefined = hexToRGB(color)

  if (!rgb) return black

  return rgbToYIQ(rgb) >= threshold ? black : white
}

export function lcg(seed: number, a: number, c: number, m: number): number {
  return (a * seed + c) % m
}
