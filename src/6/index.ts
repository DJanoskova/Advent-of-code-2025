import { MATH_DATA } from "./input";

export const processDataAndGetResult = (data: string) => {
  const formattedData = data.replace(/ {2,}/g, ' ');

  let indexX = 0
  let indexY = 0
  const mathCharacterYIndex = formattedData.split('\n').length - 1
  let total = 0
  let hasNextColumn = true

  while (hasNextColumn) {
    const mathCharacter = formattedData.split('\n')[mathCharacterYIndex].split(' ')[indexX]

    if (!mathCharacter) {
      hasNextColumn = false
      break
    }

    let totalPerIteration: number | undefined = undefined

    while (indexY < mathCharacterYIndex) {
      const checkedValue = formattedData.split('\n')[indexY].trim().split(' ')[indexX]

      if (!checkedValue) {
        indexY++
        continue
      }

      const checkedNumber = Number(checkedValue)

      if (totalPerIteration === undefined) {
        totalPerIteration = checkedNumber
      } else {
        switch (mathCharacter) {
          case '+':
            totalPerIteration += checkedNumber
            break
          case '-':
            totalPerIteration -= checkedNumber
            break
          case '*':
            totalPerIteration *= checkedNumber
            break
          case '/':
            totalPerIteration /= checkedNumber
            break
          default:
            break
        }
      }

      indexY++
    }

    indexY = 0
    indexX++
    total += totalPerIteration || 0
  }

  return total

}

export const runChallenge = () => {
  const total = processDataAndGetResult(MATH_DATA)

  console.log(
    `The answer for Math assignments is ${total}`
  );
};
