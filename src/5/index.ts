import { INGREDIENT_DATA } from "./input";

const freshIds = new Map<number, number>()

const assignFreshIds = (idRange: string) => {
  const [minString, maxString] = idRange.split('-')

  const existingValue = freshIds.get(Number(minString));
  if (existingValue !== undefined) {
    if (existingValue >= Number(maxString)) {
      return
    }
  }

  freshIds.set(Number(minString), Number(maxString))
}

const getCountOfFreshIngredients = (ingredientIdsString: string) => {
  let result = 0
  const ingredientIds = ingredientIdsString.split('\n');

  ingredientIds.forEach(stringId => {
    const currentId = Number(stringId)

    for (const key of freshIds.keys()) {
      const maxValue = freshIds.get(key)
      if (currentId >= key && maxValue !== undefined && currentId <= maxValue) {
        result++
        break
      }
    }
  })

  return result
}

export const runChallenge = () => {
  const [freshIdsRangesString, ingredientIdsString] = INGREDIENT_DATA.split("\n\n");
  const freshIdRanges = freshIdsRangesString.split('\n')

  freshIdRanges.forEach(range => assignFreshIds(range))

  const freshCount = getCountOfFreshIngredients(ingredientIdsString);

  console.log(
    `Count of ingredients that are fresh: ${freshCount}`
  );
};
