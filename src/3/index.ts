import { BATTERY_BANKS } from "./input"

export const getLargestVoltageInBank = (batteryBank: string) => {
  let i1 = 0;
  let i2 = 1;
  let i3 = 2;
  let i4 = 3;
  let i5 = 4;
  let i6 = 5;
  let i7 = 6;
  let i8 = 7;
  let i9 = 8;
  let i10 = 9;
  let i11 = 10;
  let i12 = 11;

  let lastBiggestSum = 0
  const nuOfDigits = batteryBank.length

  while (
    i1 < nuOfDigits - 11 &&
    i2 < nuOfDigits - 10 &&
    i3 < nuOfDigits - 9 &&
    i4 < nuOfDigits - 8 &&
    i5 < nuOfDigits - 7 &&
    i6 < nuOfDigits - 6 &&
    i7 < nuOfDigits - 5 &&
    i8 < nuOfDigits - 4 &&
    i9 < nuOfDigits - 3 &&
    i10 < nuOfDigits - 2 &&
    i11 < nuOfDigits - 1 &&
    i12 < nuOfDigits
  ) {
    const number1 = batteryBank[i1];
    const number2 = batteryBank[i2];
    const number3 = batteryBank[i3]
    const number4 = batteryBank[i4]
    const number5 = batteryBank[i5]
    const number6 = batteryBank[i6]
    const number7 = batteryBank[i7]
    const number8 = batteryBank[i8]
    const number9 = batteryBank[i9]
    const number10 = batteryBank[i10]
    const number11 = batteryBank[i11]
    const number12 = batteryBank[i12]

    const indexes = Array.from(new Set([i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12]));

    if (indexes.length < 12) {
      i12++
    } else {
      let sum = Number(`${number1}${number2}${number3}${number4}${number5}${number6}${number7}${number8}${number9}${number10}${number11}${number12}`)

      if (sum > lastBiggestSum) {
        lastBiggestSum = sum
      }

      i12++
    }

    // if (i12 === nuOfDigits) {
    //   if (i11 === nuOfDigits - 1) {
    //     if (i10 === nuOfDigits - 2) {
    //       if (i9 === nuOfDigits - 3) {
    //         if (i8 === nuOfDigits - 4) {
    //           if (i7 === nuOfDigits - 5) {
    //             if (i6 === nuOfDigits - 6) {
    //               if (i5 === nuOfDigits - 7) {
    //                 if (i4 === nuOfDigits - 8) {
    //                   if (i3 === nuOfDigits - 9) {
    //                     if (i2 === nuOfDigits - 10) {
    //                       i1++;
    //                       i2 = i1 + 1
    //                     } else {
    //                       i2++
    //                     }
    //                     i3 = i2 + 1
    //                   } else {
    //                     i3++
    //                   }
    //                   i4 = i3 + 1
    //                 } else {
    //                   i4++
    //                 }
    //                 i5 = i4 + 1
    //               } else {
    //                 i5++
    //               }
    //               i6 = i5 + 1
    //             } else {
    //               i6++
    //             }
    //             i7 = i6 + 1
    //           } else {
    //             i7++
    //           }
    //           i8 = i7 + 1
    //         } else {
    //           i8++
    //         }
    //         i9 = i8 + 1
    //       } else {
    //         i9++
    //       }
    //       i10 = i9 + 1
    //     } else {
    //       i10++
    //     }
    //     i11 = i10 + 1
    //   } else {
    //     i11++
    //   }
    //   i12 = i11 + 1
    // }

    // console.log('afr')
    // console.log({ i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, nuOfDigits })

    if (canMovePointerRight(i12, nuOfDigits)) {
      i12++
    } else {
      if (canMovePointerRight(i11, nuOfDigits - 1)) {
        i11++
      } else {
        if (canMovePointerRight(i10, nuOfDigits - 2)) {
          i10++
        } else {
          if (canMovePointerRight(i9, nuOfDigits - 3)) {
            i9++
          } else {
            if (canMovePointerRight(i8, nuOfDigits - 4)) {
              i8++
            } else {
              if (canMovePointerRight(i7, nuOfDigits - 5)) {
                i7++
              } else {
                if (canMovePointerRight(i6, nuOfDigits - 6)) {
                  i6++
                } else {
                  if (canMovePointerRight(i5, nuOfDigits - 7)) {
                    i5++
                  } else {
                    if (canMovePointerRight(i4, nuOfDigits - 8)) {
                      i4++
                    } else {
                      if (canMovePointerRight(i3, nuOfDigits - 9)) {
                        i3++
                      } else {
                        if (canMovePointerRight(i2, nuOfDigits - 10)) {
                          i2++
                        } else {
                          if (canMovePointerRight(i1, nuOfDigits - 11)) {
                            i1++
                          } else {
                            break
                          }
                          i2 = i1 + 1
                        }
                        i3 = i2 + 1
                      }
                      i4 = i3 + 1
                    }
                    i5 = i4 + 1
                  }
                  i6 = i5 + 1
                }
                i7 = i6 + 1
              }
              i8 = i7 + 1
            }
            i9 = i8 + 1
          }
          i10 = i9 + 1
        }
        i11 = i10 + 1
      }
      i12 = i11 + 1
    }
  }

  return lastBiggestSum
}

const canMovePointerRight = (index: number, maxIndex: number) => {
  return index + 1 < maxIndex
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
