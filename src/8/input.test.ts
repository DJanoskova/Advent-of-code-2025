import { describe, expect, it } from "vitest";

import { sortBoxes } from './index'
import { BOX_COORDINATES } from "./input";

describe('sortBoxes', () => {
  it('processes correctly', () => {
    const result = sortBoxes(BOX_COORDINATES.split('\n'), 1000)
    expect(result).toEqual(40)
  })
})