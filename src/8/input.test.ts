import { describe, expect, it } from "vitest";

import { sortBoxes } from './index'
import { BOX_COORDINATES } from "./input";

describe('sortBoxes', () => {
  it('processes correctly', () => {
    const result = sortBoxes(BOX_COORDINATES.split('\n'), 10)
    expect(result).toEqual(40)
  })
})