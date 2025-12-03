import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
});

let startAngle = 50;
let answer = 0;

const processRotation = (rotation: string, initialAngle: number) => {
  const direction = rotation[0];
  const angle = parseInt(rotation.slice(1), 10);

  let finalAngle: number;
  let timesHitZero = 0;

  const rotationAngle = angle % 100;
  timesHitZero += Math.floor(angle / 100);

  if (direction === "L") {
    finalAngle = initialAngle - rotationAngle;
  } else {
    finalAngle = initialAngle + rotationAngle;
  }

  if (finalAngle <= 0) {
    if (finalAngle !== 0) {
      finalAngle += 100;
    }

    if (initialAngle !== 0) {
      timesHitZero++;
    }
  }

  if (finalAngle > 99) {
    finalAngle %= 100;
    timesHitZero++;
  }

  return [finalAngle, timesHitZero];
};

rl.on("line", (line) => {
  const resp = processRotation(line, startAngle);
  startAngle = resp[0];
  answer += resp[1];
});

rl.on("close", () => {
  console.log(answer);
});
