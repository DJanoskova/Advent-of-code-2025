import { BEAMS } from "./input";

const SPLITTER_CHARACTER = '^'

const processDataAndGetResult = (input: string) => {
  const rows = input.split('\n')
  const firstIndex = rows[0].indexOf('S')

  if (!firstIndex) {
    return 0
  }

  const beamIndexes = new Set<number>([firstIndex])

  const total = findPathForX(firstIndex, 2, rows, 0)

  return total
}

export const findPathForX = (x: number, y: number, input: string[], total: number): number => {
  if (y >= input.length) {
    return total + 1
  }

  const character = input[y][x]

  if (character !== SPLITTER_CHARACTER) {
    return findPathForX(x, y + 2, input, total)
  }

  const prevCharacter = input[y][x - 1]
  const nextCharacter = input[y][x + 1]

  if (prevCharacter !== undefined) {
    total = findPathForX(x - 1, y + 2, input, total)
  }

  if (nextCharacter !== undefined) {
    total = findPathForX(x + 1, y + 2, input, total)
  }

  return total
}

export const runChallenge = () => {
  const total = processDataAndGetResult(BEAMS)

  console.log(
    `The total number of possible solutions is ${total}`
  );
};
