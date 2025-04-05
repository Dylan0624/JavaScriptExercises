/**
 * File: menu.js
 * Description: Main menu system for the JavaScript Programming Exercises
 */

// Define the structure of our exercise categories and exercises
const exerciseStructure = [
    {
        category: "basics",
        title: "JavaScript Basics",
        exercises: [
            { 
                id: "variables", 
                title: "Variables and Data Types",
                description: "Learn about JavaScript's variables and basic data types",
                file: "js/basics/variables.js" 
            },
            { 
                id: "operators", 
                title: "Operators and Expressions",
                description: "Explore arithmetic, comparison, and logical operators",
                file: "js/basics/operators.js" 
            }
        ]
    },
    {
        category: "control_flow",
        title: "Control Flow",
        exercises: [
            { 
                id: "conditionals", 
                title: "Conditional Statements",
                description: "If, else if, else, and switch statements",
                file: "js/control_flow/conditionals.js" 
            },
            { 
                id: "loops", 
                title: "Loops",
                description: "For, while, do-while, and for...of loops",
                file: "js/control_flow/loops.js" 
            }
        ]
    },
    {
        category: "functions",
        title: "Functions",
        exercises: [
            { 
                id: "declarations", 
                title: "Function Declarations",
                description: "Creating and using functions in JavaScript",
                file: "js/functions/declarations.js" 
            },
            { 
                id: "arrow", 
                title: "Arrow Functions",
                description: "Modern JavaScript arrow function syntax",
                file: "js/functions/arrow.js" 
            }
        ]
    },
    {
        category: "arrays",
        title: "Arrays",
        exercises: [
            { 
                id: "basics", 
                title: "Array Basics",
                description: "Creating, accessing, and modifying arrays",
                file: "js/arrays/basics.js" 
            },
            { 
                id: "methods", 
                title: "Array Methods",
                description: "Using map, filter, reduce, and other array methods",
                file: "js/arrays/methods.js" 
            }
        ]
    },
    {
        category: "objects",
        title: "Objects and OOP",
        exercises: [
            { 
                id: "literals", 
                title: "Object Literals",
                description: "Creating and working with JavaScript objects",
                file: "js/objects/literals.js" 
            },
            { 
                id: "classes", 
                title: "Classes",
                description: "Using modern JavaScript classes for OOP",
                file: "js/objects/classes.js" 
            }
        ]
    },
    {
        category: "dom",
        title: "DOM Manipulation",
        exercises: [
            { 
                id: "selectors", 
                title: "DOM Selectors",
                description: "Selecting elements from the DOM",
                file: "js/dom/selectors.js" 
            },
            { 
                id: "events", 
                title: "Event Handling",
                description: "Working with browser and user events",
                file: "js/dom/events.js" 
            }
        ]
    },
    {
        category: "async",
        title: "Asynchronous JavaScript",
        exercises: [
            { 
                id: "callbacks", 
                title: "Callbacks",
                description: "Understanding callback functions",
                file: "js/async/callbacks.js" 
            },
            { 
                id: "promises", 
                title: "Promises",
                description: "Working with JavaScript promises",
                file: "js/async/promises.js" 
            },
            { 
                id: "async_await", 
                title: "Async/Await",
                description: "Modern async/await syntax",
                file: "js/async/async_await.js" 
            }
        ]
    },
    {
        category: "api",
        title: "API Interaction",
        exercises: [
            { 
                id: "fetch", 
                title: "Fetch API",
                description: "Making HTTP requests with the Fetch API",
                file: "js/api/fetch.js" 
            },
            { 
                id: "json", 
                title: "JSON Handling",
                description: "Working with JSON data",
                file: "js/api/json.js" 
            }
        ]
    },
    {
        category: "storage",
        title: "Web Storage",
        exercises: [
            { 
                id: "local_storage", 
                title: "Local Storage",
                description: "Using the browser's localStorage API",
                file: "js/storage/local_storage.js" 
            },
            { 
                id: "session_storage", 
                title: "Session Storage",
                description: "Working with sessionStorage",
                file: "js/storage/session_storage.js" 
            }
        ]
    },
    {
        category: "modules",
        title: "ES Modules",
        exercises: [
            { 
                id: "exports", 
                title: "Exports and Imports",
                description: "Creating and using ES modules",
                file: "js/modules/exports.js" 
            },
            { 
                id: "dynamic_imports", 
                title: "Dynamic Imports",
                description: "Loading modules on demand",
                file: "js/modules/dynamic_imports.js" 
            }
        ]
    }
];

// DOM elements
const categoriesMenu = document.getElementById("categories-menu");
const exerciseList = document.getElementById("exercise-list");
const categoryTitle = document.getElementById("category-title");
const exerciseContent = document.getElementById("exercise-content");

// Build the categories menu
function buildCategoriesMenu() {
    exerciseStructure.forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "category";
        
        const categoryButton = document.createElement("button");
        categoryButton.className = "category-title";
        categoryButton.textContent = category.title;
        categoryButton.addEventListener("click", () => showExercises(category));
        
        categoryDiv.appendChild(categoryButton);
        categoriesMenu.appendChild(categoryDiv);
    });
}

// Show exercises for a selected category
function showExercises(category) {
    // Update category title
    categoryTitle.textContent = category.title;
    
    // Clear existing exercises
    exerciseList.innerHTML = "";
    
    // Add new exercises
    category.exercises.forEach(exercise => {
        const exerciseItem = document.createElement("div");
        exerciseItem.className = "exercise-item";
        exerciseItem.textContent = exercise.title;
        exerciseItem.addEventListener("click", () => loadExercise(exercise));
        
        exerciseList.appendChild(exerciseItem);
    });
}

// Load a specific exercise
async function loadExercise(exercise) {
    try {
        // Fetch the exercise file content
        const response = await fetch(exercise.file);
        if (!response.ok) {
            throw new Error(`Failed to load exercise: ${response.status}`);
        }
        
        const code = await response.text();
        
        // Display the exercise content
        exerciseContent.innerHTML = `
            <h3>${exercise.title}</h3>
            <p>${exercise.description}</p>
            <pre><code>${escapeHtml(code)}</code></pre>
            <button class="run-button" id="run-button">Run Exercise</button>
            <div class="result-container" id="result-container">
                <h4>Results:</h4>
                <div id="exercise-result"></div>
            </div>
        `;
        
        // Add event listener to run button
        document.getElementById("run-button").addEventListener("click", () => {
            runExercise(exercise.file);
        });
    } catch (error) {
        exerciseContent.innerHTML = `
            <h3>Error</h3>
            <p>Failed to load exercise: ${error.message}</p>
            <p>This exercise file might not exist yet. You can create it at: ${exercise.file}</p>
        `;
    }
}

// Run the exercise code
async function runExercise(filePath) {
    const resultElement = document.getElementById("exercise-result");
    resultElement.innerHTML = "";
    
    try {
        // Create a console output capture
        const originalConsoleLog = console.log;
        const consoleOutput = [];
        
        console.log = function(...args) {
            consoleOutput.push(args.map(arg => {
                if (typeof arg === 'object') {
                    return JSON.stringify(arg, null, 2);
                }
                return String(arg);
            }).join(' '));
            originalConsoleLog.apply(console, args);
        };
        
        // Use dynamic import to run the exercise
        const module = await import(`/${filePath}`);
        
        // If the module has a default export that's a function, run it
        if (typeof module.default === 'function') {
            module.default();
        }
        
        // Restore original console
        console.log = originalConsoleLog;
        
        // Display results
        resultElement.innerHTML = `<pre>${consoleOutput.join('\n')}</pre>`;
    } catch (error) {
        resultElement.innerHTML = `<pre class="error">Error: ${error.message}</pre>`;
    }
}

// Helper function to escape HTML
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Initialize the menu when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    buildCategoriesMenu();
});