import { describe, expect, it } from "vitest";

import { processDataAndGetResult } from "../7";
import { BEAMS } from './input'

describe('processDataAndGetResult', () => {
  it('processes correctly', () => {
    const result = processDataAndGetResult(BEAMS)
    expect(result).toEqual(187987920774390)
  })
})