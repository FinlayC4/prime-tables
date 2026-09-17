import generatePrimes from "../src/generatePrimes.js"

describe("generatePrimes", () => {
    // Test the lowest boundary, especially since first prime number, 2
    // is often handled in its own way
    test("returns the first prime number when asked for 1 prime", () => {
        expect(generatePrimes(1)).toEqual([2]);
    });
    test("returns the first two primes when asked for 2 primes", () => {
        expect(generatePrimes(2)).toEqual([2, 3]);
    })
    test("returns first 10 primes when asked for 10 primes", () => {
        expect(generatePrimes(10)).toEqual([
            2, 3, 5, 7, 11,
            13, 17, 19, 23, 29
        ]);
    });

    // Ensure function throws for invalid inputs
    test("throws when N is 0", () => {
        expect(() => generatePrimes(0)).toThrow();
    });
    test("throws when N is negative", () => {
        expect(() => generatePrimes(-1)).toThrow();
    });

    test.each([1.5, 5.2])(
        "throws when N is a decimal number",
        (n) => {
            expect(() => generatePrimes(n)).toThrow();
        }
    );

    test.each([true, "3", undefined, null])(
        "throws when N is not a number type",
        (n) => {
            expect(() => generatePrimes(n)).toThrow();
        }
    );
});