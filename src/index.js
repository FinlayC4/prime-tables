import { createMultiplicationTable } from "./createMultiplicationTable.js"
import { formatTable } from "./formatting.js";
import { generatePrimes } from "./generatePrimes.js";
import { getNumOfPrimesFromInput } from "./getNumOfPrimesFromInput.js";

async function run() {
    const numberOfPrimes = await getNumOfPrimesFromInput();

    // Generate the number of primes provided by the user
    const primes = generatePrimes(numberOfPrimes);

    // Create the multiplication table for the primes
    const table = createMultiplicationTable(primes);

    // Create a table output for the multiplication table
    const output = formatTable(table, primes)

    console.log(output)
}

run();