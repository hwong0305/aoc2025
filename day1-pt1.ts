import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
});

let startAngle = 50;
let answer = 0;

const processRotation = (rotation: string, initialAngle: number) => {
  const direction = rotation[0];
  const angle = parseInt(rotation.slice(1)) % 100;

  let finalAngle: number;

  if (direction === "L") {
    finalAngle = (initialAngle + 100 - angle) % 100;
  } else {
    finalAngle = (initialAngle + angle) % 100;
  }

  return finalAngle;
};

rl.on("line", (line) => {
  startAngle = processRotation(line, startAngle);

  if (startAngle === 0) {
    answer++;
  }
});

rl.on("close", () => {
  console.log(answer);
});
