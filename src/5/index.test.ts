import { describe, expect, it } from "vitest";

import { countAllIds, mergeRanges, processDataAndGetResult } from './index'
import { INGREDIENT_DATA } from "./input";

describe('mergeRanges', () => {
  it('merges ranges correctly', () => {
    const result = mergeRanges(new Map([
      [1, 5],
      [10, 20],
      [3, 7],
      [2, 4],
      [11, 21]
    ]))

    expect([...result]).toEqual([
      [10, 21],
      [1, 7],
    ]);
  })
})

describe('countAllIds', () => {
  it('counts ids correctly', () => {
    const result = countAllIds(new Map([
      [10, 21],
      [1, 7],
    ]))

    expect(result).toEqual(19)
  })
})

describe('processDataAndGetResult', () => {
  it('processes correctly', () => {
    const result = processDataAndGetResult(INGREDIENT_DATA)

    expect(result).toEqual(360341832208407)
  })
})