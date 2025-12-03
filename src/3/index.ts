import { BATTERY_BANKS } from "./input"

export const getLargestVoltageInBank = (batteryBank: string) => {
  const noOfDigits = batteryBank.length

  const i1 = findBiggestNumberIndexInStack(batteryBank, 0, noOfDigits - 12);
  const i2 = findBiggestNumberIndexInStack(batteryBank, i1 + 1, noOfDigits - 11);
  const i3 = findBiggestNumberIndexInStack(batteryBank, i2 + 1, noOfDigits - 10);
  const i4 = findBiggestNumberIndexInStack(batteryBank, i3 + 1, noOfDigits - 9);
  const i5 = findBiggestNumberIndexInStack(batteryBank, i4 + 1, noOfDigits - 8);
  const i6 = findBiggestNumberIndexInStack(batteryBank, i5 + 1, noOfDigits - 7);
  const i7 = findBiggestNumberIndexInStack(batteryBank, i6 + 1, noOfDigits - 6);
  const i8 = findBiggestNumberIndexInStack(batteryBank, i7 + 1, noOfDigits - 5);
  const i9 = findBiggestNumberIndexInStack(batteryBank, i8 + 1, noOfDigits - 4);
  const i10 = findBiggestNumberIndexInStack(batteryBank, i9 + 1, noOfDigits - 3);
  const i11 = findBiggestNumberIndexInStack(batteryBank, i10 + 1, noOfDigits - 2);
  const i12 = findBiggestNumberIndexInStack(batteryBank, i11 + 1, noOfDigits - 1);

  return Number(`${batteryBank[i1]}${batteryBank[i2]}${batteryBank[i3]}${batteryBank[i4]}${batteryBank[i5]}${batteryBank[i6]}${batteryBank[i7]}${batteryBank[i8]}${batteryBank[i9]}${batteryBank[i10]}${batteryBank[i11]}${batteryBank[i12]}`)
}

const findBiggestNumberIndexInStack = (stack: string, minIndex: number, maxIndex: number) => {
  let maxNumber = 0;
  let maxNumberIndex = 0;

  const numbers = stack.split('')

  for (let i = minIndex; i <= maxIndex; i++) {
    if (Number(numbers[i]) > maxNumber) {
      maxNumber = Number(numbers[i])
      maxNumberIndex = i
    }
  }

  return maxNumberIndex
}

export const sumBanks = (batteryBanks: Array<string>) => {
  let sum = 0;

  batteryBanks.forEach(bank => {
    sum += getLargestVoltageInBank(bank)
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
