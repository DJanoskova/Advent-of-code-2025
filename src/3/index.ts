import { BATTERY_BANKS } from "./input"

export const getLargestVoltageInBank = (batteryBank: string) => {
  let i1 = 0;
  let i2 = 1;

  let lastBiggestSum = 0

  while (i1 < batteryBank.length - 1 && i2 < batteryBank.length) {
    const number1 = batteryBank[i1];
    const number2 = batteryBank[i2];

    if (i1 === i2) {
      i2++
    } else {
      let sum = Number(`${number1}${number2}`)

      if (sum > lastBiggestSum) {
        lastBiggestSum = sum
      }

      i2++
    }

    if (i2 === batteryBank.length) {
      i1++;
      i2 = i1 + 1
    }
  }

  return lastBiggestSum
}

export const sumBanks = (batteryBanks: Array<string>) => {
  let sum = 0;
  console.log({ batteryBanks })

  batteryBanks.forEach(bank => {
    sum += getLargestVoltageInBank(bank)
    console.log({ sum })
  })

  console.log(
    `The sum of voltages is: ${sum}`
  );

  return sum
}

export const runChallenge = () => {
  const input = BATTERY_BANKS.split("\n");
  sumBanks(input)
};
