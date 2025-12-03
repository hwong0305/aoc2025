import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
});
let sum = 0;

rl.on("line", (line) => {
  const NUMBER_OF_BATTERIES = 12;
  const LINE_LENGTH = line.length;

  // Base Case
  if (LINE_LENGTH <= NUMBER_OF_BATTERIES) {
    sum += parseInt(line);
  } else {
    let toRemove = LINE_LENGTH - NUMBER_OF_BATTERIES;
    const stack: string[] = [];

    for (let i = 0; i < LINE_LENGTH; i++) {
      const c = line[i];

      while (toRemove > 0 && stack.length > 0 && stack[stack.length - 1] < c) {
        stack.pop();
        toRemove--;
      }

      stack.push(c);
    }

    const answer = stack.slice(0, NUMBER_OF_BATTERIES).join("");
    sum += parseInt(answer);
  }
});

rl.on("close", () => {
  console.log(sum);
});
