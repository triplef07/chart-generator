/**
 * Splits a number into a set of numbers based on the given divider.
 *
 * @param num - The number to be divided.
 * @param divider - The number of divisions.
 * @returns An array of numbers divided from 0 to num.
 */
export function splitNumber(num: number, divider: number): number[] {
  // Check if the divider is less than or equal to 0 to avoid division errors.
  if (divider <= 0) {
    throw new Error("Divider must be greater than 0");
  }

  const result: number[] = [];
  const step = num / divider;

  for (let i = 0; i <= divider; i++) {
    result.push(i * step);
  }

  return result;
}
