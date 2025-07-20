import { clsx } from './clsx.helper'

describe('clsx', () => {
  it('Returns an empty string when no arguments are provided', () => {
    expect(clsx()).toBe('')
  })

  it('Returns an empty string when passed an empty object or array', () => {
    expect(clsx({}, [])).toBe('')
  })

  it('Returns a trimmed string, ignoring falsy values', () => {
    expect(clsx('', {}, 'a', [], '')).toBe('a')
  })

  it('Concatenates multiple arguments into a single string, excluding falsy values', () => {
    expect(
      clsx('1', 0, null, undefined, false, true, 'a', ['2', 'b'], {
        c: true,
        d: false,
      })
    ).toBe('1 a 2 b c')
  })

  it('Concatenates arrays with mixed falsy values correctly', () => {
    const mixedArray = ['1', 0, null, undefined, false, true, 'a']

    expect(clsx(mixedArray)).toBe('1 a')
  })

  it('Concatenates strings and arrays arguments correctly', () => {
    expect(clsx('a', ['b', 'c'])).toBe('a b c')
    expect(clsx(['a', 'b'], 'c')).toBe('a b c')
  })

  it('Flattens nested arrays and concatenates all values', () => {
    const nestedArrays = [
      ['1', '2'],
      ['3', '4', ['5', ['6']]],
    ]

    expect(clsx(nestedArrays)).toBe('1 2 3 4 5 6')
  })

  it('Handles arrays containing objects by including only truthy keys', () => {
    const arr = ['a', { b: true, c: false }]

    expect(clsx(arr)).toBe('a b')
  })
})
