import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
});
let sum = 0;

rl.on("line", (line) => {
  let ptr = 0;
  let digitsLeft = 12;
  let answer = "";

  for (let i = 0; i < 12; i++) {
    if (ptr + digitsLeft === line.length) {
      break;
    }

    let j = ptr + 1;
    while (j + digitsLeft <= line.length) {
      if (line[ptr] < line[j]) {
        ptr = j;
        j += 1;
        continue;
      }
      j++;
    }

    answer += line[ptr];
    ptr = ptr + 1;
    digitsLeft -= 1;
  }

  if (answer.length < 12) {
    answer += line.slice(ptr);
  }

  sum += parseInt(answer);
});

rl.on("close", () => {
  console.log(sum);
});
