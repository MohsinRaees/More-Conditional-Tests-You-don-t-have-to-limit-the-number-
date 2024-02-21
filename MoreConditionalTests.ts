//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array//



// Tests for equality and inequality with strings
console.log("Test for equality with strings:");
console.log("'apple' == 'apple':", 'apple' == 'apple'); // True
console.log("'apple' != 'banana':", 'apple' != 'banana'); // True
console.log("'apple' == 'Apple':", 'apple' == 'Apple'); // False

// Tests using the lower case function
console.log("\nTest using lower case function:");
console.log("'New York'.toLowerCase() == 'new york':", 'New York'.toLowerCase() == 'new york'); // True
console.log("'New York'.toLowerCase() == 'new york':", 'New York'.toLowerCase() == 'new york'); // False

// Numerical tests
console.log("\nNumerical tests:");
let x = 10;
let y = 5;
console.log("x > y:", x > y); // True
console.log("x < y:", x < y); // False
console.log("x >= 10:", x >= 10); // True
console.log("y <= 5:", y <= 5); // True

// Tests using "and" and "or" operators//
console.log("\nTests using 'and' and 'or' operators:");
let num = 15;
console.log("num > 10 && num < 20:", num > 10 && num < 20); // True
console.log("num > 20 || num < 10:", num > 20 || num < 10); // True

// Test whether an item is in an array//
console.log("\nTest whether an item is in an array:");
let colors = ['red', 'green', 'blue'];
console.log("'red' in colors:", colors.includes('red')); // True
console.log("'yellow' in colors:", colors.includes('yellow')); // False

// Test whether an item is not in an array//
console.log("\nTest whether an item is not in an array:");
console.log("'yellow' not in colors:", !colors.includes('yellow')); // True
console.log("'red' not in colors:", !colors.includes('red')); // False

