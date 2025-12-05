import { INGREDIENT_DATA } from "./input";

const assignIdRanges = (freshIdRanges: string[]) => {
  const freshIds = new Map<number, number>()

  freshIdRanges.forEach(range => {
    const [minString, maxString] = range.split('-')

    const currentMin = Number(minString)
    const currentMax = Number(maxString)

    const existingValue = freshIds.get(currentMin);

    if (existingValue !== undefined) {
      // whole range is already assigned
      if (existingValue >= currentMax) {
        return
      }
    }

    freshIds.set(currentMin, Number(maxString))
  })

  return freshIds
}

const mergeRanges = (ids: Map<number, number>) => {
  let lastIterationMerged = true;

  while (lastIterationMerged === true) {
    lastIterationMerged = false

    for (const currentMin of ids.keys()) {
      const currentMax = ids.get(currentMin)
      let hasOverlap = false

      if (currentMax === undefined) {
        continue
      }

      for (const checkedMin of ids.keys()) {
        const checkedMax = ids.get(checkedMin)

        if (checkedMin === currentMin || checkedMax === undefined) {
          continue
        }

        hasOverlap = getNumbersHaveOverlap(currentMin, currentMax, checkedMin, checkedMax)

        if (hasOverlap) {
          const newMin = currentMin < checkedMin ? currentMin : checkedMin;
          const newMax = currentMax > checkedMax ? currentMax : checkedMax
          ids.delete(currentMin)
          ids.delete(checkedMin)
          ids.set(newMin, newMax)
          lastIterationMerged = true
          break
        }
      }

      if (hasOverlap) {
        break
      }
    }
  }

  return ids
}

const countAllIds = (freshIds: Map<number, number>) => {
  let total = 0;

  for (const currentMin of freshIds.keys()) {
    const currentMax = freshIds.get(currentMin)

    if (currentMax === undefined) {
      continue
    }

    const diff = currentMax + 1 - currentMin
    total += diff
  }

  return total
}

export const getNumbersHaveOverlap = (min1: number, max1: number, min2: number, max2: number) => {
  return max1 >= min2 && min1 <= max2
}

export const runChallenge = () => {
  const [freshIdsRangesString] = INGREDIENT_DATA.split("\n\n");
  const freshIdRanges = freshIdsRangesString.split('\n')

  const freshIds = assignIdRanges(freshIdRanges)
  const mergedIds = mergeRanges(freshIds)
  const total = countAllIds(mergedIds)

  console.log(
    `Count of ingredients that are fresh: ${total}`
  );
};
