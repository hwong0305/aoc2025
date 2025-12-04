import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
});

let grid: string[][] = [];

rl.on("line", (line) => {
    grid.push(line.split(""));
});

rl.on("close", () => {
    const updatedGrid = JSON.parse(JSON.stringify(grid));
    let answer = 0;
    let finalAnswer = 0;

    do {
        answer = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] !== "@") {
                    continue;
                }

                let adjacentRolls = 0;

                if (i !== 0 && j !== 0) {
                    if (grid[i - 1][j - 1] === "@") {
                        adjacentRolls++;
                    }
                }
                if (i !== 0 && j !== grid[i].length - 1) {
                    if (grid[i - 1][j + 1] === "@") {
                        adjacentRolls++;
                    }
                }
                if (i !== 0) {
                    if (grid[i - 1][j] === "@") {
                        adjacentRolls++;
                    }
                }
                if (i !== grid.length - 1 && j !== grid[i].length - 1) {
                    if (grid[i + 1][j + 1] === "@") {
                        adjacentRolls++;
                    }
                }
                if (i !== grid.length - 1) {
                    if (grid[i + 1][j] === "@") {
                        adjacentRolls++;
                    }
                }
                if (i !== grid.length - 1 && j !== 0) {
                    if (grid[i + 1][j - 1] === "@") {
                        adjacentRolls++;
                    }
                }
                if (j !== grid[i].length - 1) {
                    if (grid[i][j + 1] === "@") {
                        adjacentRolls++;
                    }
                }
                if (j !== 0) {
                    if (grid[i][j - 1] === "@") {
                        adjacentRolls++;
                    }
                }

                if (adjacentRolls < 4) {
                    updatedGrid[i][j] = "x";
                    answer++;
                }
            }
        }
        finalAnswer += answer;
        grid = JSON.parse(JSON.stringify(updatedGrid));
    } while (answer);

    console.log(finalAnswer);
});
