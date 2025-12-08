import { describe, expect, it } from "vitest";

import { sortBoxes } from './index'
import { BOX_COORDINATES } from "./input";

describe('sortBoxes', () => {
  // it('processes part 1 correctly', () => {
  //   const result = sortBoxes(BOX_COORDINATES.split('\n'), 10)
  //   expect(result).toEqual(40)

  //   // const result = sortBoxes(BOX_COORDINATES.split('\n'), 1000)
  //   // expect(result).toEqual(164475)
  // })

  it('processes part 2 correctly', () => {
    // const result = sortBoxes(BOX_COORDINATES.split('\n'))
    // expect(result).toEqual(40)

    const result = sortBoxes(BOX_COORDINATES.split('\n'))
    expect(result).toEqual(169521198)
  })
})