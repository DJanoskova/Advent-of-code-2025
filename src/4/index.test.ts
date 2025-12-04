import { describe, expect, it } from "vitest";

import { removePaperRolls } from './index'
import { PAPER_ROLLS } from "./input";


describe('countPaperRolls', () => {
  it('gets the correct result', () => {
    const result = removePaperRolls(PAPER_ROLLS.split('\n'))
    expect(result).toBe(9609)
  })
})