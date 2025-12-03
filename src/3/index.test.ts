import { describe, expect, it } from "vitest";

import { getLargestVoltageInBank, sumBanks } from './index'
import { BATTERY_BANKS } from "./input";

describe('getLargestVoltageInBank', () => {
  it('should get correct voltage for "987654321111111"', () => {
    const result = getLargestVoltageInBank('987654321111111')
    expect(result).toEqual(987654321111)
  })

  it('should get correct voltage for "811111111111119"', () => {
    const result = getLargestVoltageInBank('811111111111119')
    expect(result).toEqual(811111111119)
  })

  it('should get correct voltage for "234234234234278"', () => {
    const result = getLargestVoltageInBank('234234234234278')
    expect(result).toEqual(434234234278)
  })

  it('should get correct voltage for "818181911112111"', () => {
    const result = getLargestVoltageInBank('818181911112111')
    expect(result).toEqual(888911112111)
  })
})

describe('sumBanks', () => {
  it('processes dataset', () => {
    const result = sumBanks(BATTERY_BANKS.split('\n'))

    expect(result).toEqual(169935154100102)
  })
})