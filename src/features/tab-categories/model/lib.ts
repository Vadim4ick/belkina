export function getUniqueExamsByKey<T, K extends keyof T>(items: T[], key: K): T[] {
  return Array.from(new Map(items.map((item) => [item[key], item])).values())
}

export function getUniqueSubjectsFromNestedArray<T, K extends keyof T>(
  nestedArrays: T[][],
  key: K,
): T[] {
  const flat = nestedArrays.flat()
  return getUniqueExamsByKey(flat, key)
}
