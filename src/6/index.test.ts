import { describe, expect, it } from "vitest";

import { processDataAndGetResult } from "./index.ts"
import { MATH_DATA } from './input'

describe('processDataAndGetResult', () => {
  it('processes correctly', () => {
    const result = processDataAndGetResult(MATH_DATA)
    expect(result).toEqual(9348430857627)
  })
})