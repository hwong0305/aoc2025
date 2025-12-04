import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
});

const grid: Array<Array<string>> = [];

rl.on("line", (line) => {
    grid.push(line.split(""));
});

rl.on("close", () => {
    const rows = grid.length;
    const cols = grid[0]?.length || 0;

    // Directions: 8 neighbors
    const dirs = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];

    // neighborCounts[i][j] = number of '@' neighbors around (i, j)
    const neighborCounts = Array.from({ length: rows }, () =>
        new Array(cols).fill(0),
    );

    // First pass: compute neighbor counts for all '@' cells
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] !== "@") continue;

            let cnt = 0;
            for (const [dx, dy] of dirs) {
                const ni = i + dx;
                const nj = j + dy;
                if (
                    ni >= 0 &&
                    ni < rows &&
                    nj >= 0 &&
                    nj < cols &&
                    grid[ni][nj] === "@"
                ) {
                    cnt++;
                }
            }

            neighborCounts[i][j] = cnt;
        }
    }

    // Queue for cells to remove
    const queue: Array<[number, number]> = [];
    let head = 0;

    // Initialize queue with all '@' cells that have < 4 neighbors
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "@" && neighborCounts[i][j] < 4) {
                queue.push([i, j]);
            }
        }
    }

    let finalAnswer = 0;

    while (head < queue.length) {
        const [i, j] = queue[head++];
        if (grid[i][j] !== "@") continue; // already removed

        // Remove this cell
        grid[i][j] = "x";
        finalAnswer++;

        // Update neighbors
        for (const [dx, dy] of dirs) {
            const ni = i + dx;
            const nj = j + dy;
            if (
                ni >= 0 &&
                ni < rows &&
                nj >= 0 &&
                nj < cols &&
                grid[ni][nj] === "@"
            ) {
                neighborCounts[ni][nj]--;
                if (neighborCounts[ni][nj] === 3) {
                    // Just dropped below 4 → will be removed
                    queue.push([ni, nj]);
                }
            }
        }
    }

    console.log(finalAnswer);
});
