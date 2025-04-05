/**
 * File: higher_order.js
 * Description: 展示 JavaScript 中的高階函數概念
 * 
 * 本練習涵蓋:
 * - 函數作為參數
 * - 函數作為返回值
 * - 常見高階函數: map, filter, reduce
 * - 函數組合
 * - 柯里化 (Currying)
 */

export default function runHigherOrderFunctionsExercise() {
    // 第1節: 函數作為參數
    console.log("===== 函數作為參數 =====");
    
    // 一個接受函數參數的高階函數
    function operateOnArray(arr, operation) {
        const results = [];
        for (let i = 0; i < arr.length; i++) {
            results.push(operation(arr[i]));
        }
        return results;
    }
    
    const numbers = [1, 2, 3, 4, 5];
    
    // 不同的操作函數
    const double = x => x * 2;
    const square = x => x * x;
    
    console.log(`原始數組: ${numbers}`);
    console.log(`對每個元素加倍: ${operateOnArray(numbers, double)}`);
    console.log(`對每個元素平方: ${operateOnArray(numbers, square)}`);
    
    // 第2節: 函數作為返回值
    console.log("\n===== 函數作為返回值 =====");
    
    // 產生乘法器的工廠函數
    function createMultiplier(factor) {
        // 返回一個新函數
        return function(number) {
            return number * factor;
        };
    }
    
    const triple = createMultiplier(3);
    const quadruple = createMultiplier(4);
    
    console.log(`5 的三倍: ${triple(5)}`);
    console.log(`5 的四倍: ${quadruple(5)}`);
    
    // 另一個實用案例：篩選器工廠
    function createFilter(predicate) {
        return function(array) {
            return array.filter(predicate);
        };
    }
    
    const isEven = num => num % 2 === 0;
    const filterEvens = createFilter(isEven);
    
    console.log(`篩選偶數: ${filterEvens(numbers)}`);
    
    // 第3節: 使用內建高階函數
    console.log("\n===== 使用內建高階函數 =====");
    
    const people = [
        { name: "小明", age: 25, city: "台北" },
        { name: "小華", age: 32, city: "台中" },
        { name: "小美", age: 18, city: "高雄" },
        { name: "小強", age: 45, city: "台北" },
        { name: "小玲", age: 22, city: "台中" }
    ];
    
    // map 轉換數組中的每個元素
    const names = people.map(person => person.name);
    console.log(`所有人的名字: ${names}`);
    
    // filter 篩選符合條件的元素
    const adults = people.filter(person => person.age >= 20);
    console.log(`成年人: ${adults.length} 人`);
    adults.forEach(person => console.log(`  ${person.name}, ${person.age} 歲`));
    
    // find 找到第一個符合條件的元素
    const taichungPerson = people.find(person => person.city === "台中");
    console.log(`住在台中的第一個人: ${taichungPerson.name}`);
    
    // reduce 將數組縮減為單一值
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    console.log(`所有人年齡總和: ${totalAge} 歲`);
    console.log(`平均年齡: ${totalAge / people.length} 歲`);
    
    // 使用 reduce 分組
    const peopleByCity = people.reduce((acc, person) => {
        // 如果此城市不在累加器中，創建一個新數組
        if (!acc[person.city]) {
            acc[person.city] = [];
        }
        // 將此人加入相應城市的數組中
        acc[person.city].push(person.name);
        return acc;
    }, {});
    
    console.log("按城市分組的人:");
    Object.entries(peopleByCity).forEach(([city, residents]) => {
        console.log(`  ${city}: ${residents.join(', ')}`);
    });
    
    // 第4節: 函數組合 (Composition)
    console.log("\n===== 函數組合 =====");
    
    // 簡單的函數，做單一任務
    const add10 = x => x + 10;
    const multiplyBy2 = x => x * 2;
    const subtract5 = x => x - 5;
    
    // 手動組合
    const manualComposite = x => subtract5(multiplyBy2(add10(x)));
    console.log(`手動組合函數計算 (((5 + 10) * 2) - 5): ${manualComposite(5)}`);
    
    // 創建一個組合函數
    function compose(...functions) {
        return function(initialValue) {
            return functions.reduceRight(
                (value, fn) => fn(value), 
                initialValue
            );
        };
    }
    
    // 使用我們的 compose 函數
    const compositeFunction = compose(subtract5, multiplyBy2, add10);
    console.log(`使用 compose 計算 (((5 + 10) * 2) - 5): ${compositeFunction(5)}`);
    
    // 第5節: 柯里化 (Currying)
    console.log("\n===== 柯里化 =====");
    
    // 原始函數，接受三個參數
    function calculateVolume(length, width, height) {
        return length * width * height;
    }
    
    console.log(`直立方體體積 (傳統): ${calculateVolume(3, 4, 5)}`);
    
    // 柯里化版本
    function curriedVolume(length) {
        return function(width) {
            return function(height) {
                return length * width * height;
            };
        };
    }
    
    console.log(`直立方體體積 (柯里化): ${curriedVolume(3)(4)(5)}`);
    
    // 實用情境：可以預設參數
    const calculateRoomVolume = curriedVolume(10); // 房間長度固定為 10
    console.log(`房間體積，寬度4，高度3: ${calculateRoomVolume(4)(3)}`);
    console.log(`房間體積，寬度5，高度3: ${calculateRoomVolume(5)(3)}`);
    
    // 通用的柯里化轉換函數
    function curry(fn) {
        return function curried(...args) {
            if (args.length >= fn.length) {
                return fn.apply(this, args);
            } else {
                return function(...args2) {
                    return curried.apply(this, args.concat(args2));
                };
            }
        };
    }
    
    const curriedCalculateVolume = curry(calculateVolume);
    console.log(`使用通用柯里化: ${curriedCalculateVolume(2)(3)(4)}`);
    console.log(`部分應用: ${curriedCalculateVolume(2, 3)(4)}`);
    console.log(`一次傳入所有參數: ${curriedCalculateVolume(2, 3, 4)}`);
    
    // 第6節: 記憶化 (Memoization)
    console.log("\n===== 記憶化 =====");
    
    // 計算費波那契數列的函數（未優化）
    function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    // 創建記憶化的高階函數
    function memoize(fn) {
        const cache = {};
        return function(...args) {
            const key = JSON.stringify(args);
            if (cache[key] === undefined) {
                cache[key] = fn.apply(this, args);
            }
            return cache[key];
        };
    }
    
    // 記憶化的費波那契函數
    const memoizedFibonacci = memoize(function(n) {
        if (n <= 1) return n;
        return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
    });
    
    // 比較性能
    console.log("計算費波那契數列第30項:");
    
    console.time("未使用記憶化");
    const result1 = fibonacci(30);
    console.timeEnd("未使用記憶化");
    
    console.time("使用記憶化");
    const result2 = memoizedFibonacci(30);
    console.timeEnd("使用記憶化");
    
    console.log(`結果: ${result1} (兩種方法結果應該相同: ${result1 === result2})`);
}