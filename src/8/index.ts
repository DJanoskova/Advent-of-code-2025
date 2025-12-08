import { BOX_COORDINATES } from "./input";

const existingPairs = new Set<number[]>()
const distancePairs = new Map<string, number>()

const appendedIndexes = new Map<number, number>()

export const sortBoxes = (boxes: string[], maxConnections = 10) => {
  let connections = 0;
  let hasAddedPair = false

  while (connections < maxConnections) {
    const [y1, y2] = findClosestTwoBoxes(boxes)

    existingPairs.add([y1, y2])
    connections++

    continue;
  }

  const result: Array<number[]> = []

  for (const [y1, y2] of existingPairs.values()) {
    const index1 = appendedIndexes.get(y1)
    const index2 = appendedIndexes.get(y2)

    if (index1 === undefined && index2 === undefined) {
      result.push([y1, y2])
      appendedIndexes.set(y1, result.length - 1)
      appendedIndexes.set(y2, result.length - 1)

      continue
    }

    if (index1 !== undefined && index2 === undefined) {
      result[index1].push(y2)
      appendedIndexes.set(y2, index1)

      continue
    }

    if (index1 === undefined && index2 !== undefined) {
      result[index2].push(y1)
      appendedIndexes.set(y1, index2)

      continue
    }

    if (index1 !== undefined && index2 !== undefined) {
      if (index1 === index2) {
        continue;
      }

      result[index2].forEach(number => {
        appendedIndexes.set(number, index1)
      })

      result[index1].push(...result[index2])
      result.splice(index2, 1)
    }
  }

  const sorted = result.sort((a, b) => b.length - a.length);

  let total = 1
  const TOTAL_RUNS = 3

  for (let i = 0; i < TOTAL_RUNS; i++) {
    total *= sorted[i].length
  }

  return total
}

export const findClosestTwoBoxes = (boxes: string[]) => {
  let row1 = 0;
  let row2 = 1;

  let smallestDistance;
  let smallestDistanceCoords;

  while (row1 <= boxes.length - 2 && row2 <= boxes.length - 1) {
    if (getPairExists(row1, row2)) {
      row2++
      if (row2 === boxes.length) {
        row1++;
        row2 = row1 + 1
      }

      continue
    }

    const pairName = `${row1}-${row2}`;

    let existingDistance = distancePairs.get(pairName)

    if (!existingDistance) {
      const coords1 = getBoxCoordinates(boxes[row1])
      const coords2 = getBoxCoordinates(boxes[row2])
      existingDistance = getDistance3D(coords1, coords2)
      distancePairs.set(pairName, existingDistance)
    }

    if (smallestDistance === undefined) {
      smallestDistance = existingDistance
      smallestDistanceCoords = pairName
    } else if (existingDistance < smallestDistance) {
      smallestDistance = existingDistance
      smallestDistanceCoords = pairName
    }

    row2++
    if (row2 === boxes.length) {
      row1++;
      row2 = row1 + 1
    }
  }

  const foundCoords = smallestDistanceCoords?.split('-')

  if (foundCoords === undefined) {
    return [-1, -1]
  }

  return [Number(foundCoords[0]), Number(foundCoords[1])]
}

const getPairExists = (y1: number, y2: number) => {
  for (const value of existingPairs.values()) {
    if (value.includes(y1) && value.includes(y2)) {
      return true
    }
  }
  return false
}

const getDistance3D = (coords1: number[], coords2: number[]) => {
  const dx = coords2[0] - coords1[0];
  const dy = coords2[1] - coords1[1];
  const dz = coords2[2] - coords1[2];

  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export const getBoxCoordinates = (box: string) => {
  const coords = box.split(',')
  return [Number(coords[0]), Number(coords[1]), Number(coords[2])]
}

export const runChallenge = () => {
  const input = BOX_COORDINATES.split("\n", 1000);
  sortBoxes(input)
};
