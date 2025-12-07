import { BEAMS } from "./input";

const SPLITTER_CHARACTER = '^'

const processDataAndGetResult = (input: string) => {
  let total = 0
  const rows = input.split('\n')

  const beamIndexes = new Set<number>()

  rows.forEach(row => {
    let x = 0;

    while (x < row.length) {
      const character = row[x]
      if (character !== SPLITTER_CHARACTER) {
        x++
        continue
      }

      const isHitByABeam = beamIndexes.has(x)

      if (total > 0 && !isHitByABeam) {
        x++
        continue
      }

      total++
      beamIndexes.delete(x)

      const prevCharacter = row[x - 1]
      const nextCharacter = row[x + 1]

      if (prevCharacter !== undefined) {
        beamIndexes.add(x - 1)
      }

      if (nextCharacter !== undefined) {
        beamIndexes.add(x + 1)
      }

      x++
    }

  })

  return total
}


export const runChallenge = () => {
  const total = processDataAndGetResult(BEAMS)

  console.log(
    `The total number of splits is ${total}`
  );
};
