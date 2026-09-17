import readline from "node:readline"

/**
 * Gets the number of primes from input.
 * @returns {Promise<number>} The number of primes.
 */
async function getNumOfPrimesFromInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Will continue asking until positive integer provided
    while (true) {
        const answer = await new Promise((resolve) => {
            rl.question("How many prime numbers would you like? ", resolve);
        });

        // Converts input to Number (returns NaN if fails)
        const number = Number(answer);

        // If valid input - positive integer
        if (Number.isInteger(number) && number > 0) {
            rl.close();
            return number;
        }

        console.log("Please enter a positive whole number. Try again.");
    }
}

export { getNumOfPrimesFromInput }