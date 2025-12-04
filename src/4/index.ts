import { PAPER_ROLLS } from "./input";

const directions = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0]
]

const MAX_ROLLS_AROUND = 4

const ROLL_CHARACTER = '@'

const ACCESSIBLE_ROLLS_MEMO: Record<string, boolean> = {}

const getCanRollBeAccessed = (indexX: number, indexY: number, rows: string[]) => {
  const indexName = `${indexX}-${indexY}`;
  const memoizedValue = ACCESSIBLE_ROLLS_MEMO[indexName]

  if (memoizedValue !== undefined) {
    return memoizedValue
  }

  let tries = 0;

  for (let i = 0; i < directions.length; i++) {
    const [moveX, moveY] = directions[i]
    const examinedCharacter = rows[indexY + moveY]?.[indexX + moveX]
    if (examinedCharacter === ROLL_CHARACTER) {
      tries++
    }
    if (tries === MAX_ROLLS_AROUND) {
      return false
    }
  }

  return true;
}

export const countPaperRolls = (rows: string[]) => {
  let accessibleRollsCount = 0;

  rows.forEach((row, indexY) => {
    const characters = row.split('')

    characters.forEach((character, indexX) => {
      if (character !== ROLL_CHARACTER) {
        return
      }

      if (getCanRollBeAccessed(indexX, indexY, rows)) {
        accessibleRollsCount++
      }
    })
  })

  console.log(
    `Number of paper rolls that can be accessed: ${accessibleRollsCount}`
  );
}

export const runChallenge = () => {
  const input = PAPER_ROLLS.split("\n");
  countPaperRolls(input);
};
