import { IDs } from "./input";

export const getIsNumberValid = (number: number) => {
  const numberString = String(number);
  const noOfDigits = numberString.length;

  let range = 1;
  let start = 0;
  let end = 1;
  let prevSlice;

  while (start <= noOfDigits - 1 && end <= noOfDigits) {
    const startIndex = start * range
    const endIndex = startIndex + range
    const currentSlice = numberString.slice(startIndex, endIndex);

    if (!prevSlice) {
      prevSlice = currentSlice
    } else if (prevSlice !== currentSlice) {
      prevSlice = ''
      range++
      start = 0
      end = start + range;
      continue;
    } else if (end === noOfDigits) {
      return false
    }
    prevSlice = currentSlice
    start++;
    end += range;
  }

  return true;
}

/**
 * The input is an Array of range of numbers like "998-1012"
 * @param inputs
 */
export const validateInputs = (inputs: string[]) => {
  let sumOfInvalidInputs = 0;

  inputs.forEach(input => {
    const [minString, maxString] = input.split('-')

    try {
      const min = Number(minString)
      const max = Number(maxString)

      for (let i = min; i <= max; i++) {
        const isValid = getIsNumberValid(i)

        if (!isValid) {
          sumOfInvalidInputs += i
        }
      }
    } catch (error) {
      console.error(error);
    }
  })

  return sumOfInvalidInputs
}

export const runChallenge = () => {
  const input = IDs.split(",");
  validateInputs(input)
};
