/**
 * File: loops.js
 * Description: Demonstrates loops and iteration in JavaScript
 * 
 * This exercise covers:
 * - for loops
 * - while loops
 * - do...while loops
 * - for...of loops (ES6)
 * - for...in loops
 * - Array iteration methods
 * - Loop control statements (break, continue)
 */

export default function runLoopsExercise() {
    // Section 1: Basic for loop
    console.log("===== Basic for Loop =====");
    
    console.log("Counting from 1 to 5:");
    for (let i = 1; i <= 5; i++) {
        console.log(`Count: ${i}`);
    }
    
    // Section 2: while loop
    console.log("\n===== While Loop =====");
    
    console.log("Countdown from 5 to 1:");
    let countdown = 5;
    while (countdown > 0) {
        console.log(`Countdown: ${countdown}`);
        countdown--;
    }
    
    // Section 3: do...while loop (executes at least once)
    console.log("\n===== Do...While Loop =====");
    
    console.log("Even numbers up to 10:");
    let num = 0;
    do {
        if (num % 2 === 0) {
            console.log(`Even number: ${num}`);
        }
        num++;
    } while (num <= 10);
    
    // Section 4: for...of loop (iterates over iterable objects like arrays)
    console.log("\n===== For...Of Loop =====");
    
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    console.log("List of fruits using for...of:");
    for (const fruit of fruits) {
        console.log(`Fruit: ${fruit}`);
    }
    
    // Section 5: for...in loop (iterates over object properties)
    console.log("\n===== For...In Loop =====");
    
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        job: "Developer"
    };
    
    console.log("Person properties using for...in:");
    for (const property in person) {
        console.log(`${property}: ${person[property]}`);
    }
    
    // Section 6: break statement
    console.log("\n===== Break Statement =====");
    
    console.log("Finding the first number divisible by 7 between 1 and 30:");
    for (let i = 1; i <= 30; i++) {
        if (i % 7 === 0) {
            console.log(`Found it: ${i}`);
            break; // Exit the loop once found
        }
    }
    
    // Section 7: continue statement
    console.log("\n===== Continue Statement =====");
    
    console.log("Numbers from 1 to 10, skipping multiples of 3:");
    for (let i = 1; i <= 10; i++) {
        if (i % 3 === 0) {
            continue; // Skip this iteration
        }
        console.log(`Number: ${i}`);
    }
    
    // Section 8: Nested loops
    console.log("\n===== Nested Loops =====");
    
    console.log("Multiplication table (1-5):");
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <= 5; j++) {
            row += `${i}×${j}=${i*j}\t`;
        }
        console.log(row);
    }
    
    // Section 9: Array iteration methods
    console.log("\n===== Array Iteration Methods =====");
    
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // forEach
    console.log("Using forEach to display squares:");
    numbers.forEach(num => {
        console.log(`${num}² = ${num * num}`);
    });
    
    // map
    console.log("\nUsing map to create a new array of doubles:");
    const doubles = numbers.map(num => num * 2);
    console.log(`Original: [${numbers}]`);
    console.log(`Doubles: [${doubles}]`);
    
    // filter
    console.log("\nUsing filter to get even numbers:");
    const evens = numbers.filter(num => num % 2 === 0);
    console.log(`Even numbers: [${evens}]`);
    
    // reduce
    console.log("\nUsing reduce to calculate sum:");
    const sum = numbers.reduce((total, num) => total + num, 0);
    console.log(`Sum of all numbers: ${sum}`);
    
    // some and every
    console.log("\nUsing some and every for testing conditions:");
    const hasEven = numbers.some(num => num % 2 === 0);
    const allPositive = numbers.every(num => num > 0);
    console.log(`Has at least one even number: ${hasEven}`);
    console.log(`All numbers are positive: ${allPositive}`);
    
    // Section 10: Infinite loops and how to avoid them
    console.log("\n===== About Infinite Loops =====");
    console.log("Infinite loops occur when the termination condition is never met.");
    console.log("Example of a potential infinite loop (not running):");
    console.log("  for (let i = 1; i > 0; i++) { ... }");
    console.log("Always ensure your loops have a proper termination condition!");
}