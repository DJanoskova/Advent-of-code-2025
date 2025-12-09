import { TILE_COORDINATES } from "./input";

const distanceMap = new Map<string, number>()

export const findBiggestRectangle = (rows: string[]) => {
  let row1 = 0;
  let row2 = 1;

  while (row1 <= rows.length - 2 && row2 <= rows.length - 1) {
    const [x1, y1] = getRowCoords(rows[row1])
    const [x2, y2] = getRowCoords(rows[row2])

    if (x1 !== x2 && y1 !== y2) {
      const pairName = `${rows[row1]}_${rows[row2]}`;
      distanceMap.set(pairName, getRectangleVolume(x1, x2, y1, y2))
    }

    row2++
    if (row2 === rows.length) {
      row1++;
      row2 = row1 + 1
    }
  }

  const sortedVolumes = [...distanceMap.entries()].sort((a, b) => b[1] - a[1])

  return sortedVolumes[0][1]
}

export const getRectangleVolume = (x1: number, x2: number, y1: number, y2: number) => {
  return (Math.abs(x2 - x1) + 1) * (Math.abs(y2 - y1) + 1)
}

export const getRowCoords = (row: string) => {
  const coords = row.split(',')
  return [Number(coords[0]), Number(coords[1])]
}

export const runChallenge = () => {
  const input = TILE_COORDINATES.split("\n");
  findBiggestRectangle(input)
};
