import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
});
let answer = 0;

rl.on("line", (line) => {
  let i = 0;
  let j = i + 1;
  let max = -1;

  while (j < line.length && i < line.length) {
    max = Math.max(max, parseInt(line[i] + line[j]));
    if (line[i] < line[j]) {
      i = j;
      j++;
    } else {
      j++;
    }
  }

  answer += max;
});

rl.on("close", () => {
  console.log(answer);
});
