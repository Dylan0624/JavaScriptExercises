/**
 * File: variables.js
 * Description: Demonstrates variables and data types in JavaScript
 * 
 * This exercise covers:
 * - Variable declaration (var, let, const)
 * - Primitive data types
 * - Type checking and conversion
 */

// Default export - this function will run when the "Run Exercise" button is clicked
export default function runVariablesExercise() {
    // Section 1: Variable Declaration
    console.log("===== Variable Declaration =====");
    
    // Using var (older way, function-scoped)
    var oldWay = "I am declared with var";
    
    // Using let (block-scoped, can be reassigned)
    let modern = "I am declared with let";
    modern = "I can be changed";
    
    // Using const (block-scoped, cannot be reassigned)
    const constant = "I am declared with const";
    // constant = "This would cause an error"; // Uncommenting this will cause an error
    
    console.log(oldWay);
    console.log(modern);
    console.log(constant);
    
    // Section 2: Primitive Data Types
    console.log("\n===== Primitive Data Types =====");
    
    // String
    const name = "JavaScript";
    console.log(`String: ${name} (${typeof name})`);
    
    // Number
    const integer = 42;
    const float = 3.14159;
    console.log(`Integer: ${integer} (${typeof integer})`);
    console.log(`Float: ${float} (${typeof float})`);
    
    // Boolean
    const isTrue = true;
    const isFalse = false;
    console.log(`Boolean: ${isTrue} (${typeof isTrue})`);
    
    // Undefined
    let undefinedVar;
    console.log(`Undefined: ${undefinedVar} (${typeof undefinedVar})`);
    
    // Null
    const nullVar = null;
    console.log(`Null: ${nullVar} (${typeof nullVar})`); // Note: typeof null is 'object' - this is a known JS quirk
    
    // Symbol (ES6)
    const uniqueSymbol = Symbol('description');
    console.log(`Symbol: ${uniqueSymbol.toString()} (${typeof uniqueSymbol})`);
    
    // BigInt (ES2020)
    const bigNumber = BigInt(9007199254740991);
    console.log(`BigInt: ${bigNumber} (${typeof bigNumber})`);
    
    // Section 3: Reference Types
    console.log("\n===== Reference Types =====");
    
    // Object
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30
    };
    console.log(`Object: ${JSON.stringify(person)} (${typeof person})`);
    
    // Array
    const colors = ["Red", "Green", "Blue"];
    console.log(`Array: ${colors} (${typeof colors})`); // Arrays are objects in JavaScript
    console.log(`Is Array? ${Array.isArray(colors)}`);
    
    // Function
    function greet(name) {
        return `Hello, ${name}!`;
    }
    console.log(`Function: ${greet} (${typeof greet})`);
    console.log(`Function call: ${greet("World")}`);
    
    // Section 4: Type Conversion
    console.log("\n===== Type Conversion =====");
    
    // String to Number
    const numStr = "42";
    console.log(`String "${numStr}" to Number: ${Number(numStr)} (${typeof Number(numStr)})`);
    console.log(`Alternative method: ${parseInt(numStr, 10)} (${typeof parseInt(numStr, 10)})`);
    
    // Number to String
    const num = 42;
    console.log(`Number ${num} to String: ${String(num)} (${typeof String(num)})`);
    console.log(`Alternative method: ${num.toString()} (${typeof num.toString()})`);
    
    // Boolean Conversion
    console.log(`Number ${num} to Boolean: ${Boolean(num)} (${typeof Boolean(num)})`);
    console.log(`Empty string to Boolean: ${Boolean("")} (${typeof Boolean("")})`);
    console.log(`String "hello" to Boolean: ${Boolean("hello")} (${typeof Boolean("hello")})`);
    
    // Section 5: Type Coercion
    console.log("\n===== Type Coercion =====");
    
    // Implicit coercion in operations
    console.log(`"5" + 2 = ${"5" + 2} (string concatenation)`);
    console.log(`"5" - 2 = ${"5" - 2} (numeric operation)`);
    console.log(`"5" * 2 = ${"5" * 2} (numeric operation)`);
    console.log(`"5" / 2 = ${"5" / 2} (numeric operation)`);
    
    // Equality operators
    console.log(`"5" == 5: ${"5" == 5} (loose equality, with type coercion)`);
    console.log(`"5" === 5: ${"5" === 5} (strict equality, no type coercion)`);
}