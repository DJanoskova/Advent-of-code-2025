import { BOX_COORDINATES } from "./input";

const existingPairs = new Set<string>()
const distancePairs = new Map<string, number>()

const appendedIndexes = new Map<number, number>()

export const sortBoxes = (boxes: string[], maxConnections = 10) => {
  let connections = 0;

  fillBoxDistanceMap(boxes)

  const sortedBoxesByClosestDistance = new Map(
    [...distancePairs.entries()].sort((a, b) => a[1] - b[1])
  );

  const result: Array<number[]> = []

  for (const pairName of sortedBoxesByClosestDistance.keys()) {
    if (maxConnections && connections >= maxConnections) {
      break
    }

    const [y1String, y2String] = pairName.split('_')

    const y1 = Number(y1String)
    const y2 = Number(y2String)

    const index1 = appendedIndexes.get(y1)
    const index2 = appendedIndexes.get(y2)

    if (index1 === undefined && index2 === undefined) {
      result.push([y1, y2])
      appendedIndexes.set(y1, result.length - 1)
      appendedIndexes.set(y2, result.length - 1)

      connections++

      continue
    }

    if (index1 !== undefined && index2 === undefined) {
      result[index1].push(y2)
      appendedIndexes.set(y2, index1)

      connections++

      continue
    }

    if (index1 === undefined && index2 !== undefined) {
      result[index2].push(y1)
      appendedIndexes.set(y1, index2)

      connections++

      continue
    }

    if (index1 !== undefined && index2 !== undefined) {
      if (index1 === index2) {
        connections++
        continue;
      }

      result[index2].forEach(number => {
        appendedIndexes.set(number, index1)
      })

      result[index1].push(...result[index2])
      result.splice(index2, 1, [])

      connections++
    }
  }

  const sorted = result.filter(a => !!a.length).sort((a, b) => b.length - a.length);

  let total = 1
  const TOTAL_RUNS = 3

  for (let i = 0; i < TOTAL_RUNS; i++) {
    total *= sorted[i].length
  }

  return total
}

export const fillBoxDistanceMap = (boxes: string[]) => {
  let row1 = 0;
  let row2 = 1;

  while (row1 <= boxes.length - 2 && row2 <= boxes.length - 1) {
    const pairName = `${row1}_${row2}`;

    const coords1 = getBoxCoordinates(boxes[row1])
    const coords2 = getBoxCoordinates(boxes[row2])
    const distance = getDistance3D(coords1, coords2)
    distancePairs.set(pairName, distance)

    row2++
    if (row2 === boxes.length) {
      row1++;
      row2 = row1 + 1
    }
  }
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
