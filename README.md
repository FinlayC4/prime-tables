# Prime Tables

## How To Run
- To run the prime tables program, first make sure you have NodeJS installed.
- Then type in the terminal, 'npm start'. This will start the program. You can then enter your input into the terminal.
- If you wish to run the tests, run 'npm test'

## What I Am Pleased With
I am pleased with the separation of concerns, in which each functon has its own responsibility. This makes it easier for code to be reused, keeps code unit testable, and makes it easily extensible. For example, the 'formatTable' function doesn't have any clue about the algorithm or that they are prime numbers. It simply takes in an two-dimensional array and formats it. This means any other algorithm can be used without modifying the function's implementation. I'm also happy with the unit test coverage as the tests cover many of the functions and test different scenarios and using varying test data.

## What I Would Do With More Time
If I had more time, I would implement a more efficient algorithm like Sieve of Eratosthenes. It would make the program better equipped for handling a larger N input without performance problems. I chose not to use it as it is much more complex and doesn't demand the needs of the requirements. I could have technically used it here, but I decided not to in preference of an algorithm that I can understand (trial division algorithm).

I would also implement integration tests to test the command line interface and entering the actual input.