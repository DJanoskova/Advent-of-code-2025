import { describe, expect, it } from "vitest";

import { getLargestVoltageInBank, sumBanks } from './index'

describe.only('getLargestVoltageInBank', () => {
  it('should get correct voltage for "987654321111111"', () => {
    const result = getLargestVoltageInBank('987654321111111')
    expect(result).toEqual(98)
  })

  it('should get correct voltage for "811111111111119"', () => {
    const result = getLargestVoltageInBank('811111111111119')
    expect(result).toEqual(89)
  })

  it('should get correct voltage for "234234234234278"', () => {
    const result = getLargestVoltageInBank('234234234234278')
    expect(result).toEqual(78)
  })

  it('should get correct voltage for "818181911112111"', () => {
    const result = getLargestVoltageInBank('818181911112111')
    expect(result).toEqual(92)
  })

  it('should get correct voltage for "3432775726725436376664456643542637425375244243425128374655626277694745452347243855686496752521626735"', () => {
    const result = getLargestVoltageInBank('3432775726725436376664456643542637425375244243425128374655626277694745452347243855686496752521626735')
    expect(result).toEqual(99)
  })
})

describe('sumBanks', () => {
  it('processes dataset', () => {
    const result = sumBanks([`987654321111111
      811111111111119
      234234234234278
      818181911112111`])

    expect(result).toEqual(357)
  })
})