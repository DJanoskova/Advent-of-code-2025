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

// const ACCESSIBLE_ROLLS_MEMO: Record<string, boolean> = {}

const getCanRollBeAccessed = (indexX: number, indexY: number, rows: string[][]) => {
  // const indexName = `${indexX}-${indexY}`;
  // const memoizedValue = ACCESSIBLE_ROLLS_MEMO[indexName]

  // if (memoizedValue !== undefined) {
  //   return memoizedValue
  // }

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

export const removePaperRolls = (rows: string[]) => {
  let totalRollsRemoved = 0;
  let lastIterationRollsRemoved = 1;

  const data = rows.map(row => {
    return row.split('').map(character => character)
  })

  while (lastIterationRollsRemoved > 0) {
    lastIterationRollsRemoved = 0

    data.forEach((_, indexY) => {
      const row = data[indexY]

      row.forEach((__, indexX) => {
        const character = row[indexX]
        if (character !== ROLL_CHARACTER) {
          return
        }

        if (getCanRollBeAccessed(indexX, indexY, data)) {
          if (data[indexY]?.[indexX]) {
            data[indexY][indexX] = 'x'
          }
          lastIterationRollsRemoved++
          totalRollsRemoved++
        }
      })
    })
  }

  console.log(
    `Number of paper rolls that have been removed: ${totalRollsRemoved}`
  );

  return totalRollsRemoved
}

export const runChallenge = () => {
  const input = PAPER_ROLLS.split("\n");
  removePaperRolls(input);
};
