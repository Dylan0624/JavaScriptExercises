/**
 * File: declarations.js
 * Description: 展示 JavaScript 中的函數宣告與使用方式
 * 
 * 本練習涵蓋:
 * - 函數宣告
 * - 函數表達式
 * - 參數與返回值
 * - 函數作用域
 * - 閉包
 * - 函數提升
 */

export default function runFunctionDeclarationsExercise() {
    // 第1節: 基本函數宣告
    console.log("===== 基本函數宣告 =====");
    
    // 函數宣告方式
    function greet(name) {
        return `你好, ${name}!`;
    }
    
    // 呼叫函數
    console.log(greet("小明"));
    
    // 沒有返回值的函數
    function logMessage(message) {
        console.log(`訊息: ${message}`);
        // 沒有 return 語句，會隱含返回 undefined
    }
    
    const result = logMessage("這是一條測試訊息");
    console.log(`函數返回值: ${result}`); // 將顯示 undefined
    
    // 第2節: 函數表達式
    console.log("\n===== 函數表達式 =====");
    
    // 匿名函數表達式
    const add = function(a, b) {
        return a + b;
    };
    
    console.log(`2 + 3 = ${add(2, 3)}`);
    
    // 具名函數表達式
    const subtract = function subtractFn(a, b) {
        return a - b;
    };
    
    console.log(`5 - 2 = ${subtract(5, 2)}`);
    
    // 立即執行函數表達式 (IIFE)
    const result2 = (function() {
        const x = 10;
        const y = 20;
        return x + y;
    })();
    
    console.log(`IIFE 結果: ${result2}`);
    
    // 第3節: 參數處理
    console.log("\n===== 參數處理 =====");
    
    // 默認參數
    function multiply(a, b = 1) {
        return a * b;
    }
    
    console.log(`5 * 2 = ${multiply(5, 2)}`);
    console.log(`5 * 1 = ${multiply(5)}`); // 使用默認參數
    
    // 剩餘參數
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    
    console.log(`1 + 2 + 3 + 4 = ${sum(1, 2, 3, 4)}`);
    
    // 傳入未定義參數
    function processUser(name, age, city) {
        console.log(`處理用戶: ${name}, ${age}歲, 來自${city}`);
    }
    
    processUser("小華"); // 省略的參數會是 undefined
    
    // 解構參數
    function displayPerson({ name, age, city = "未知" }) {
        console.log(`人物: ${name}, ${age}歲, 來自${city}`);
    }
    
    displayPerson({ name: "小李", age: 30, city: "台北" });
    displayPerson({ name: "小張", age: 25 }); // 使用默認城市
    
    // 第4節: 函數作用域
    console.log("\n===== 函數作用域 =====");
    
    // 全局變量
    const globalVar = "我是全局變量";
    
    function testScope() {
        // 局部變量
        const localVar = "我是局部變量";
        
        console.log(globalVar); // 可以訪問全局變量
        console.log(localVar);  // 可以訪問局部變量
    }
    
    testScope();
    // console.log(localVar); // 這將產生錯誤，因為 localVar 在函數外不可訪問
    
    // 塊級作用域
    function blockScopeDemo() {
        if (true) {
            var varVariable = "使用 var 聲明";
            let letVariable = "使用 let 聲明";
            const constVariable = "使用 const 聲明";
        }
        
        console.log(varVariable); // 可以訪問，因為 var 是函數作用域
        // console.log(letVariable); // 錯誤: letVariable 不在作用域內
        // console.log(constVariable); // 錯誤: constVariable 不在作用域內
    }
    
    blockScopeDemo();
    
    // 第5節: 閉包
    console.log("\n===== 閉包 =====");
    
    function createCounter() {
        let count = 0; // 私有變量
        
        // 返回一個可以訪問和修改 count 的函數
        return function() {
            count += 1;
            return count;
        };
    }
    
    const counter = createCounter();
    console.log(counter()); // 1
    console.log(counter()); // 2
    console.log(counter()); // 3
    
    // 另一個計數器實例
    const counter2 = createCounter();
    console.log(counter2()); // 1 (獨立的計數)
    
    // 用閉包實現私有變量
    function createBankAccount(initialBalance) {
        let balance = initialBalance;
        
        return {
            deposit: function(amount) {
                if (amount > 0) {
                    balance += amount;
                    return `存入 ${amount}，餘額: ${balance}`;
                }
                return "存入金額必須大於0";
            },
            withdraw: function(amount) {
                if (amount > 0 && amount <= balance) {
                    balance -= amount;
                    return `提取 ${amount}，餘額: ${balance}`;
                }
                return "提款失敗，金額無效或餘額不足";
            },
            getBalance: function() {
                return `當前餘額: ${balance}`;
            }
        };
    }
    
    const account = createBankAccount(1000);
    console.log(account.getBalance()); // 當前餘額: 1000
    console.log(account.deposit(500)); // 存入 500，餘額: 1500
    console.log(account.withdraw(200)); // 提取 200，餘額: 1300
    console.log(account.withdraw(2000)); // 提款失敗，金額無效或餘額不足
    
    // 無法直接訪問 balance 變量
    // console.log(account.balance); // undefined
    
    // 第6節: 函數提升
    console.log("\n===== 函數提升 =====");
    
    // 使用函數聲明，即使在聲明前調用也能工作
    console.log(hoistedFunction()); // "我被提升了！"
    
    function hoistedFunction() {
        return "我被提升了！";
    }
    
    // 使用函數表達式，在定義前調用會失敗
    // console.log(notHoisted()); // 錯誤: notHoisted is not a function
    
    const notHoisted = function() {
        return "我沒有被提升！";
    };
    
    console.log(notHoisted()); // 定義後調用正常工作
    
    // 第7節: 遞歸函數
    console.log("\n===== 遞歸函數 =====");
    
    // 計算階乘
    function factorial(n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    
    console.log(`5! = ${factorial(5)}`); // 120
    
    // 計算斐波那契數列
    function fibonacci(n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    console.log(`斐波那契數列的第8個數: ${fibonacci(8)}`); // 21
    
    // 第8節: 回調函數
    console.log("\n===== 回調函數 =====");
    
    function processArray(arr, callback) {
        const results = [];
        for (let i = 0; i < arr.length; i++) {
            results.push(callback(arr[i], i));
        }
        return results;
    }
    
    const numbers = [1, 2, 3, 4, 5];
    
    // 不同的回調
    const doubled = processArray(numbers, function(num) {
        return num * 2;
    });
    
    const squared = processArray(numbers, function(num) {
        return num * num;
    });
    
    const formatted = processArray(numbers, function(num, index) {
        return `項目 ${index + 1}: ${num}`;
    });
    
    console.log(`原始數組: ${numbers}`);
    console.log(`加倍後: ${doubled}`);
    console.log(`平方後: ${squared}`);
    console.log("格式化後:");
    formatted.forEach(item => console.log(item));
}