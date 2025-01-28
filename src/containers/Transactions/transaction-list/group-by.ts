export function groupBy<T>(array: T[], key: string): Record<string, T[]> {
  const result: Record<string, T[]> = {}

  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    const groupKey = item[key as keyof T] as unknown as string

    if (!result[groupKey]) {
      result[groupKey] = [item]
    } else {
      result[groupKey].push(item)
    }
  }

  return result
}
