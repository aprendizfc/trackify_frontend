/* eslint-disable @typescript-eslint/no-explicit-any */

function appendClasses(classes: string, newClass: string): string {
  if (!newClass) return classes

  return classes ? `${classes} ${newClass}` : newClass
}

function getClasses(argument: any) {
  if (typeof argument === 'string' || typeof argument === 'number') {
    return String(argument)
  }

  // eslint-disable-next-line prefer-spread
  if (Array.isArray(argument)) return classNames.apply(null, argument)

  if (typeof argument === 'object') {
    return Object.keys(argument)
      .filter((key) => argument[key])
      .join(' ')
  }

  return ''
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
