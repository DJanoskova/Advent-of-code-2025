import { describe, expect, it } from "vitest";

import { TILE_COORDINATES } from './input'
import { findBiggestRectangle } from './index'

describe('findBiggestRectangle', () => {
  it('processes dataset', () => {
    const result = findBiggestRectangle(TILE_COORDINATES.split('\n'))

    expect(result).toEqual(4759930955)
  })
})