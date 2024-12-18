import classNames from './classNames'

describe('classNames', () => {
  it('Returns an empty string when no arguments are provided', () => {
    expect(classNames()).toBe('')
  })

  it('Returns an empty string when passed an empty object or array', () => {
    expect(classNames({}, [])).toBe('')
  })

  it('Returns a trimmed string, ignoring falsy values', () => {
    expect(classNames('', {}, 'a', [], '')).toBe('a')
  })

  it('Concatenates multiple arguments into a single string, excluding falsy values', () => {
    expect(
      classNames('1', 0, null, undefined, false, true, 'a', ['2', 'b'], {
        c: true,
        d: false,
      })
    ).toBe('1 a 2 b c')
  })

  it('Concatenates arrays with mixed falsy values correctly', () => {
    const mixedArray = ['1', 0, null, undefined, false, true, 'a']

    expect(classNames(mixedArray)).toBe('1 a')
  })

  it('Concatenates strings and arrays arguments correctly', () => {
    expect(classNames('a', ['b', 'c'])).toBe('a b c')
    expect(classNames(['a', 'b'], 'c')).toBe('a b c')
  })

  it('Flattens nested arrays and concatenates all values', () => {
    const nestedArrays = [
      ['1', '2'],
      ['3', '4', ['5', ['6']]],
    ]

    expect(classNames(nestedArrays)).toBe('1 2 3 4 5 6')
  })

  it('Handles arrays containing objects by including only truthy keys', () => {
    const arr = ['a', { b: true, c: false }]

    expect(classNames(arr)).toBe('a b')
  })
})
