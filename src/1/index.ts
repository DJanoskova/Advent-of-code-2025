import { DATASET_TEXT } from "./input";

const DIRECTION_LEFT = "L";
const DIRECTION_RIGHT = "R";
type ALLOWED_DIRECTION = typeof DIRECTION_LEFT | typeof DIRECTION_RIGHT;

const MIN_NUMBER = 0;
const MAX_NUMBER = 99;

function isDirectionvalid(direction: string): direction is ALLOWED_DIRECTION {
  return direction === DIRECTION_LEFT || direction === DIRECTION_RIGHT;
}

export const findPassword = (input: string[]) => {
  let position = 50;
  let timesReachedZero = 0;

  for (let i = 0; i < input.length; i++) {
    const command = input[i];
    const direction = command[0];

    if (!isDirectionvalid(direction)) {
      console.error("Wrong direction");
      continue;
    }

    const stepsString = command.slice(1, command.length);
    if (!stepsString) {
      continue;
    }

    try {
      const stepsNumber = Number(stepsString);
      [position, timesReachedZero] = movePosition(
        position,
        direction,
        stepsNumber,
        timesReachedZero
      );
    } catch (error) {
      console.error(error);
      continue;
    }
  }

  console.log(
    `The final position is ${position} with times reached zero: ${timesReachedZero}`
  );

  return [position, timesReachedZero];
};

const movePosition = (
  position: number,
  direction: ALLOWED_DIRECTION,
  steps: number,
  timesReachedZero: number
) => {
  if (direction === DIRECTION_LEFT) {
    let result = position - steps;

    if (position === MIN_NUMBER) {
      timesReachedZero--;
    }

    while (result <= MIN_NUMBER) {
      timesReachedZero++;

      if (result === MIN_NUMBER) {
        return [result, timesReachedZero];
      }

      result += 100;
    }

    return [result, timesReachedZero];
  }

  let result = position + steps;

  while (result > MAX_NUMBER) {
    timesReachedZero++;

    result -= 100;
  }

  return [result, timesReachedZero];
};

export const runChallenge = () => {
  const input = DATASET_TEXT.split("\n");
  findPassword(input);
};
