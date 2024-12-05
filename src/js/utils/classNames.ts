/* eslint-disable @typescript-eslint/no-explicit-any */

function appendClasses(classes: string, newClass: string): string {
  if (classes) return `${classes} ${newClass}`

  return newClass
}

function getClasses(argument: any) {
  if (typeof argument === 'string' || typeof argument === 'number') {
    return String(argument)
  }

  // eslint-disable-next-line prefer-spread
  if (Array.isArray(argument)) return classNames.apply(null, argument)

  let classes = ''

  for (const key in argument) {
    if (argument[key]) {
      classes = appendClasses(classes, key)
    }
  }

  return classes
}

export default function classNames(...args: any) {
  let classes = ''

  for (const argument of args) {
    if (argument) {
      classes = appendClasses(classes, getClasses(argument))
    }
  }

  return classes
}
