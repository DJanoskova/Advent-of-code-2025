import { describe, expect, it } from "vitest";

import { countPaperRolls } from './index'
import { PAPER_ROLLS } from "./input";


describe('countPaperRolls', () => {
  it('gets the correct result', () => {
    const result = countPaperRolls(PAPER_ROLLS.split('\n'))
  })
})