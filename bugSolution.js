function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values gracefully
  }
  // ... rest of the function
  return a + b; // Example operation
}

console.log(foo(10, 5)); // Output: 15
console.log(foo(null, 5)); // Output: null
console.log(foo(10, null)); // Output: null
console.log(foo(null, null)); // Output: null