import { describe, it, expect } from "vitest";

import { getIsNumberValid, validateInputs } from './index'

describe('getIsNumberValid', () => {
  it('finds 11 invalid', () => {
    const isValid = getIsNumberValid(11)
    expect(isValid).toBe(false)
  })

  it('finds 12 valid', () => {
    const isValid = getIsNumberValid(12)
    expect(isValid).toBe(true)
  })

  it('finds 101 valid', () => {
    const isValid = getIsNumberValid(101)
    expect(isValid).toBe(true)
  })

  it('finds 446446 invalid', () => {
    const isValid = getIsNumberValid(446446)
    expect(isValid).toBe(false)
  })

  it('finds 38593858 valid', () => {
    const isValid = getIsNumberValid(38593858)
    expect(isValid).toBe(true)
  })

  it('finds 38593859 invalid', () => {
    const isValid = getIsNumberValid(38593859)
    expect(isValid).toBe(false)
  })

  it('finds 824824824 invalid', () => {
    const isValid = getIsNumberValid(824824824)
    expect(isValid).toBe(false)
  })

  it('finds 2121212121 invalid', () => {
    const isValid = getIsNumberValid(2121212121)
    expect(isValid).toBe(false)
  })

  it('finds 2121212122 valid', () => {
    const isValid = getIsNumberValid(2121212122)
    expect(isValid).toBe(true)
  })
})

describe('validateInputs', () => {
  it('processes dataset', () => {
    const result = validateInputs(['11-22'])
    expect(result).toEqual(33)
  })

  it('processes dataset', () => {
    const result = validateInputs(['95-115'])
    expect(result).toEqual(210)
  })

  it('processes dataset', () => {
    const result = validateInputs(['998-1012'])
    expect(result).toEqual(2009)
  })

  it('processes dataset', () => {
    const result = validateInputs(['1188511880-1188511890'])
    expect(result).toEqual(1188511885)
  })

  it('processes dataset', () => {
    const result = validateInputs(['222220-222224'])
    expect(result).toEqual(222222)
  })

  it('processes dataset', () => {
    const result = validateInputs(['1698522-1698528'])
    expect(result).toEqual(0)
  })

  it('processes dataset', () => {
    const result = validateInputs(['446443-446449'])
    expect(result).toEqual(446446)
  })

  it('processes dataset', () => {
    const result = validateInputs(['38593856-38593862'])
    expect(result).toEqual(38593859)
  })

  it('processes dataset', () => {
    const result = validateInputs(['565653-565659'])
    expect(result).toEqual(565656)
  })

  it('processes dataset', () => {
    const result = validateInputs(['824824821-824824827'])
    expect(result).toEqual(824824824)
  })

  it('processes dataset', () => {
    const result = validateInputs(['2121212118-2121212124'])
    expect(result).toEqual(2121212121)
  })
})