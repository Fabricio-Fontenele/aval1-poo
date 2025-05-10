
export function randomSelection<T>(array: T[], value: number): T[] {
  const selection: T[] = []

  if (value > array.length) throw new Error(`Invalid count: ${value}`)

  do {const choice = array[Math.floor(Math.random() * (array.length))]
    if (selection.indexOf(choice) == -1) {
      selection.push(choice)
    }
  } while (selection.length < value)

  return selection
}