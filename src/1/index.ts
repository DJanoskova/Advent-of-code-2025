import { DATASET_TEXT } from "./input";

const DIRECTION_LEFT = "L";
const DIRECTION_RIGHT = "R";
type ALLOWED_DIRECTION = typeof DIRECTION_LEFT | typeof DIRECTION_RIGHT;

const MIN_NUMBER = 0;
const TURN_NUMBER_COUNT = 100

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
  let result;

  if (direction === DIRECTION_LEFT) {
    [result, timesReachedZero] = moveLeft(position, steps, timesReachedZero)
  } else {
    [result, timesReachedZero] = moveRight(position, steps, timesReachedZero)
  }

  return [result, timesReachedZero];
};

const moveLeft = (position: number, steps: number, timesReachedZero: number) => {
  let result = position - steps;
  const additionalZeroTurn = position > MIN_NUMBER && result <= MIN_NUMBER ? 1 : 0
  const timesReachedZeroThisIteration = Math.floor(Math.abs(result) / TURN_NUMBER_COUNT) + additionalZeroTurn
  result = result % TURN_NUMBER_COUNT

  if (result < 0) {
    result += TURN_NUMBER_COUNT
  }

  return [result, timesReachedZero + timesReachedZeroThisIteration]
}

const moveRight = (position: number, steps: number, timesReachedZero: number) => {
  let result = position + steps;
  const timesReachedZeroThisIteration = Math.floor(Math.abs(result) / TURN_NUMBER_COUNT)
  result = result % TURN_NUMBER_COUNT

  return [result, timesReachedZero + timesReachedZeroThisIteration]
}

export const runChallenge = () => {
  const input = DATASET_TEXT.split("\n");
  findPassword(input);
};
