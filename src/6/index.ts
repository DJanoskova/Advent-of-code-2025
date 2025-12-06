import { MATH_DATA } from "./input";

export const processDataAndGetResult = (data: string) => {
  const mathCharacterYIndex = data.split('\n').length - 1
  const maxIndexX = data.split('\n')[0].length - 1
  let indexX = maxIndexX
  let indexY = 0
  let total = 0

  let numbersInIteration = new Map<number, number>()

  while (indexX >= 0) {
    const currentCharacter = data.split('\n')[indexY][indexX]

    if (currentCharacter === '+' || currentCharacter === '-' || currentCharacter === '*') {
      indexX--
      // skip one space column
      indexX--
      indexY = 0
      let totalInIteration: number | undefined

      switch (currentCharacter) {
        case '+':
          for (const key of numbersInIteration.keys()) {
            const value = numbersInIteration.get(key)
            if (totalInIteration !== undefined && value !== undefined) {
              totalInIteration += value
            }
            if (totalInIteration === undefined && value !== undefined) {
              totalInIteration = value
            }

          }
          break
        case '-':
          for (const key of numbersInIteration.keys()) {
            const value = numbersInIteration.get(key)
            if (totalInIteration !== undefined && value !== undefined) {
              totalInIteration -= value
            }
            if (totalInIteration === undefined && value !== undefined) {
              totalInIteration = value
            }

          }
          break
        case '*':
          for (const key of numbersInIteration.keys()) {
            const value = numbersInIteration.get(key)
            if (totalInIteration !== undefined && value !== undefined) {
              totalInIteration *= value
            }
            if (totalInIteration === undefined && value !== undefined) {
              totalInIteration = value
            }

          }
          break
        default:
          break
      }

      total += totalInIteration || 0

      // count total here

      numbersInIteration.clear()
      continue
    }

    if (currentCharacter === ' ') {
      indexY++
      if (indexY > mathCharacterYIndex) {
        indexY = 0
        indexX--
      }
      continue
    }

    const currentNumber = Number(currentCharacter)
    const existingNum = numbersInIteration.get(indexX)
    if (existingNum) {
      numbersInIteration.set(indexX, Number(`${existingNum}${currentNumber}`))
    } else {
      numbersInIteration.set(indexX, currentNumber)
    }

    indexY++
  }

  return total

}

export const runChallenge = () => {
  const total = processDataAndGetResult(MATH_DATA)

  console.log(
    `The answer for Math assignments is ${total}`
  );
};
