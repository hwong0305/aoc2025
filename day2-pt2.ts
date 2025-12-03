import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
});

const isInvalidId = (id: string) => {
  let i = 0;
  let j = 1;

  while (j < id.length) {
    if (!id.split(id.substring(i, j)).some((x) => x.length)) {
      return true;
    }
    j++;
  }

  return false;
};

rl.on("line", (line) => {
  const input = line.split(",");
  let answer = 0;

  input.forEach((idRange) => {
    const ids = idRange.split("-").map((id) => parseInt(id));
    const actualStart = Math.min(ids[0], ids[1]);

    const range = Array.from(
      { length: Math.abs(ids[1] - ids[0]) + 1 },
      (_, index) => actualStart + index
    );

    range.forEach((number) => {
      if (isInvalidId(String(number))) {
        answer += number;
      }
    });
  });
  console.log(answer);
});
