const focusables: string[] = ['button', 'a', 'input', 'textarea', 'select', 'details']

export function isFocusable(element: HTMLElement): boolean {
  const tabIndex = element.getAttribute('tabindex')
  const tagName = element.tagName.toLowerCase()
  const exists = focusables.includes(tagName)
  const isDisabled = element.hasAttribute('disabled')

  return exists && !isDisabled && (tabIndex === null || Number(tabIndex) >= 0)
}
