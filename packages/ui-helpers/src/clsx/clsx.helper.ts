const combineClasses = (classes: string, newClass: string) => {
  if (!newClass) return classes

  return classes ? `${classes} ${newClass}`.trim() : newClass
}

const generateClasses = (value: any): string => {
  if (typeof value === 'string' || typeof value === 'number') return String(value)

  if (typeof value !== 'object') return ''

  if (Array.isArray(value)) {
    // eslint-disable-next-line no-use-before-define
    return clsx(...value)
  }

  return Object.keys(value)
    .filter((key) => value[key])
    .join(' ')
}

/**
 *
 * @param args - Arguments can be strings, numbers, arrays, or objects.
 *               Falsy values are ignored.
 *               Arrays and objects are flattened and concatenated.
 *
 * @description
 * The `clsx` function is a utility for constructing class names from various types of
 * inputs.
 * It handles strings, numbers, arrays, and objects, filtering out falsy values and
 * concatenating
 * the results into a single string.
 * @returns A single string containing all truthy class names, separated by spaces.
 *
 * @example
 * clsx('class1', 'class2', { class3: true, class4: false }, ['class5', 'class6'])
 * // Returns 'class1 class2 class3 class5 class6'
 */
export const clsx = (...args: any[]) => {
  let classes = ''

  for (const arg of args) {
    if (arg) {
      classes = combineClasses(classes, generateClasses(arg))
    }
  }

  return classes
}
