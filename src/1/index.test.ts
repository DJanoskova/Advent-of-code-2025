import { describe, it, expect } from "vitest";
import { findPassword } from ".";

describe("findPassword", () => {
  it("rotates to L correctly", () => {
    const [position, timesreachedZero] = findPassword(["L51"]);

    expect(position).toBe(99);
    expect(timesreachedZero).toBe(1);
  });

  it("rotates to R correctly", () => {
    const [position, timesreachedZero] = findPassword(["R75"]);

    expect(position).toBe(25);
    expect(timesreachedZero).toBe(1);
  });

  it("rotates a thousand times correctly", () => {
    const [position, timesreachedZero] = findPassword(["R1000"]);

    expect(position).toBe(50);
    expect(timesreachedZero).toBe(10);
  });

  it("sequences correctly", () => {
    const [position, timesreachedZero] = findPassword([
      "L68",
      "L30",
      "R48",
      "L5",
      "R60",
      "L55",
      "L1",
      "L99",
      "R14",
      "L82",
    ]);

    expect(position).toBe(32);
    expect(timesreachedZero).toBe(6);
  });

  it("sequences correctly", () => {
    const [position, timesreachedZero] = findPassword([
      "L68",
      "L30",
      "R48",
      "L5",
      "R60",
      "L55",
      "L1",
      "L99",
      "R14",
      "L82",
      "L32",
      "R2",
      "R97",
      "R101",
    ]);

    expect(position).toBe(0);
    expect(timesreachedZero).toBe(9);
  });

  it("sequences correctly", () => {
    const [position, timesreachedZero] = findPassword([
      "L68",
      "L30",
      "R48",
      "L5",
      "R60",
      "L55",
      "L1",
      "L99",
      "R14",
      "L82",
      "L32",
      "R2",
      "R97",
      "R101",
      "L1",
    ]);

    expect(position).toBe(99);
    expect(timesreachedZero).toBe(9);
  });

  it("sequences correctly", () => {
    const [position, timesreachedZero] = findPassword([
      "L68",
      "L30",
      "R48",
      "L5",
      "R60",
      "L55",
      "L1",
      "L99",
      "R14",
      "L82",
      "L32",
      "R2",
      "R97",
      "R101",
      "L1",
      "R2",
      "R199",
    ]);

    expect(position).toBe(0);
    expect(timesreachedZero).toBe(12);
  });

  it("sequences correctly", () => {
    const [position, timesreachedZero] = findPassword([
      "L68",
      "L30",
      "R48",
      "L5",
      "R60",
      "L55",
      "L1",
      "L99",
      "R14",
      "L82",
      "L32",
      "R2",
      "R97",
      "R101",
      "L1",
      "R2",
      "R199",
      "L303",
    ]);

    expect(position).toBe(97);
    expect(timesreachedZero).toBe(15);
  });
});
