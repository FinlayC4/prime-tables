

// Reusable helper function that can be leveraged
// in other generate prime algorithms

/** Errors if value supplied is not a positive integer.
 * 
 * @param {*} value - The value to be checked
 * @param {string} paramName - The parameter name used in the error message
 */
function ensurePositiveInteger(value, paramName) {
    if (typeof value !== "number") {
        throw TypeError(`'${paramName}' must be of type Number`);
    }
    // Ensure its an integer that is at least 1
    if (!Number.isInteger(value) || value < 1) {
        throw new Error(`'${paramName}' must be a positive integer`)
    }
}

/** Generates the first 'numOfPrimes' prime numbers.
 * Uses the trial division algorithm.
 * 
 * @param {number} numOfPrimes - Number of primes to generate. Must be a positive integer
 * @returns {number[]} The first N prime numbers
 */
function generatePrimes(numOfPrimes) {
    ensurePositiveInteger(numOfPrimes, "numOfPrimes");

    const primes = [2]
    let candidate = 3;

    while (primes.length < numOfPrimes) {
        // Only primes up to the square root can be factors of the candidate
        const squareRoot = Math.sqrt(candidate);
        let isPrime = true;

        for (const prime of primes) {
            // If no prime divisor exists by this point, candidate is prime
            if (prime > squareRoot) break;

            // A divisor means the candidate is not prime
            if (candidate % prime === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(candidate)
        }
        candidate += 2; // Skip even numbers
    }
    return primes;
}

export { generatePrimes, ensurePositiveInteger }