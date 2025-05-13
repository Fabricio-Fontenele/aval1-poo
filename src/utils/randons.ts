export function random(n: number): number {
  return Math.floor(Math.random() * n);
}

export function randomChoice<T>(array: T[]): T {
  if (array.length == 0) throw new Error("Empty array");
  return array[random(array.length)];
}

export function randNumber(minValue: number, maxValue: number): number {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
