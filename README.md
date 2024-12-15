# Handling Unexpected Null Values in JavaScript Functions

This repository demonstrates a common error in JavaScript: unexpected null values passed as function parameters.  The `bug.js` file shows the function without proper null handling. The `bugSolution.js` file provides a corrected version which gracefully handles null values.

## Description

Many functions assume certain data types for input parameters. However, unexpected null values can occur, leading to errors such as `TypeError: Cannot read properties of null (reading '...')`.  The example below illustrates this common issue and provides a robust solution.

## How to reproduce

1. Clone the repository.
2. Open `bug.js`. You can observe the unhandled null error which causes the application to crash or throw an error.
3. Open `bugSolution.js`. This version demonstrates a solution to handle null values gracefully, thereby preventing application crashes.