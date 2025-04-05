/**
 * File: operators.js
 * Description: 展示 JavaScript 中的運算符和表達式
 * 
 * 本練習涵蓋:
 * - 算術運算符
 * - 比較運算符
 * - 邏輯運算符
 * - 賦值運算符
 * - 三元運算符
 * - 運算符優先級
 */

export default function runOperatorsExercise() {
    // 第1節: 算術運算符
    console.log("===== 算術運算符 =====");
    
    const a = 10;
    const b = 3;
    
    console.log(`加法: ${a} + ${b} = ${a + b}`);
    console.log(`減法: ${a} - ${b} = ${a - b}`);
    console.log(`乘法: ${a} * ${b} = ${a * b}`);
    console.log(`除法: ${a} / ${b} = ${a / b}`);
    console.log(`取餘 (模): ${a} % ${b} = ${a % b}`);
    console.log(`指數: ${a} ** ${b} = ${a ** b}`); // ES2016 (ES7)
    
    // 自增和自減
    let c = 5;
    console.log(`\n原始值: c = ${c}`);
    console.log(`前置自增: ++c = ${++c}`); // 先自增，後返回值
    console.log(`現在 c = ${c}`);
    console.log(`後置自增: c++ = ${c++}`); // 先返回值，後自增
    console.log(`現在 c = ${c}`);
    
    let d = 8;
    console.log(`\n原始值: d = ${d}`);
    console.log(`前置自減: --d = ${--d}`); // 先自減，後返回值
    console.log(`現在 d = ${d}`);
    console.log(`後置自減: d-- = ${d--}`); // 先返回值，後自減
    console.log(`現在 d = ${d}`);
    
    // 第2節: 比較運算符
    console.log("\n===== 比較運算符 =====");
    
    const x = 5;
    const y = "5";
    const z = 10;
    
    console.log(`相等 (值): ${x} == ${y} 結果為 ${x == y}`);
    console.log(`嚴格相等 (值和類型): ${x} === ${y} 結果為 ${x === y}`);
    console.log(`不相等 (值): ${x} != ${z} 結果為 ${x != z}`);
    console.log(`嚴格不相等 (值和類型): ${x} !== ${y} 結果為 ${x !== y}`);
    
    console.log(`大於: ${x} > ${z} 結果為 ${x > z}`);
    console.log(`小於: ${x} < ${z} 結果為 ${x < z}`);
    console.log(`大於等於: ${x} >= ${x} 結果為 ${x >= x}`);
    console.log(`小於等於: ${x} <= ${z} 結果為 ${x <= z}`);
    
    // 第3節: 邏輯運算符
    console.log("\n===== 邏輯運算符 =====");
    
    const isTrue = true;
    const isFalse = false;
    
    console.log(`AND (且): ${isTrue} && ${isTrue} = ${isTrue && isTrue}`);
    console.log(`AND (且): ${isTrue} && ${isFalse} = ${isTrue && isFalse}`);
    
    console.log(`OR (或): ${isTrue} || ${isFalse} = ${isTrue || isFalse}`);
    console.log(`OR (或): ${isFalse} || ${isFalse} = ${isFalse || isFalse}`);
    
    console.log(`NOT (非): !${isTrue} = ${!isTrue}`);
    console.log(`NOT (非): !${isFalse} = ${!isFalse}`);
    
    // 邏輯運算符的短路特性
    console.log("\n邏輯運算符的短路特性:");
    
    // && 短路: 若左側為 false，則不會評估右側
    const result1 = isFalse && console.log("這不會被執行");
    console.log(`結果1: ${result1}`);
    
    // || 短路: 若左側為 true，則不會評估右側
    const result2 = isTrue || console.log("這不會被執行");
    console.log(`結果2: ${result2}`);
    
    // 利用短路特性進行條件賦值
    const name = null;
    const displayName = name || "未知用戶"; // 若 name 為 null 則使用默認值
    console.log(`顯示名稱: ${displayName}`);
    
    // 空值合併運算符 (??) - ES2020
    // 只有在左側為 null 或 undefined 時才使用右側的值
    const value = 0;  // 0 是假值但不是 null 或 undefined
    const result3 = value ?? "默認值";
    console.log(`空值合併運算符: ${value} ?? "默認值" = ${result3}`);
    
    // 第4節: 賦值運算符
    console.log("\n===== 賦值運算符 =====");
    
    let num = 10;
    console.log(`初始值: num = ${num}`);
    
    num += 5; // 等同於 num = num + 5
    console.log(`加法賦值 (+=): ${num}`);
    
    num -= 3; // 等同於 num = num - 3
    console.log(`減法賦值 (-=): ${num}`);
    
    num *= 2; // 等同於 num = num * 2
    console.log(`乘法賦值 (*=): ${num}`);
    
    num /= 4; // 等同於 num = num / 4
    console.log(`除法賦值 (/=): ${num}`);
    
    num %= 3; // 等同於 num = num % 3
    console.log(`取餘賦值 (%=): ${num}`);
    
    num **= 2; // 等同於 num = num ** 2
    console.log(`指數賦值 (**=): ${num}`);
    
    // 第5節: 三元運算符
    console.log("\n===== 三元運算符 =====");
    
    const age = 20;
    const status = age >= 18 ? "成年" : "未成年";
    console.log(`年齡: ${age}, 狀態: ${status}`);
    
    // 三元運算符嵌套
    const score = 75;
    const grade = score >= 90 ? "A" : (score >= 80 ? "B" : (score >= 70 ? "C" : (score >= 60 ? "D" : "F")));
    console.log(`分數: ${score}, 等級: ${grade}`);
    
    // 第6節: 位元運算符
    console.log("\n===== 位元運算符 =====");
    
    const bit1 = 5;  // 二進制: 0101
    const bit2 = 3;  // 二進制: 0011
    
    console.log(`位元 AND (&): ${bit1} & ${bit2} = ${bit1 & bit2}`); // 0001 (1)
    console.log(`位元 OR (|): ${bit1} | ${bit2} = ${bit1 | bit2}`);  // 0111 (7)
    console.log(`位元 XOR (^): ${bit1} ^ ${bit2} = ${bit1 ^ bit2}`);  // 0110 (6)
    console.log(`位元 NOT (~): ~${bit1} = ${~bit1}`);  // 遵循2的補碼表示
    
    console.log(`左移 (<<): ${bit1} << 1 = ${bit1 << 1}`);  // 0101 -> 1010 (10)
    console.log(`右移 (>>): ${bit1} >> 1 = ${bit1 >> 1}`);  // 0101 -> 0010 (2)
    
    // 第7節: 運算符優先級
    console.log("\n===== 運算符優先級 =====");
    
    const expr1 = 10 + 5 * 2;
    console.log(`表達式1: 10 + 5 * 2 = ${expr1}`); // 乘法優先於加法
    
    const expr2 = (10 + 5) * 2;
    console.log(`表達式2: (10 + 5) * 2 = ${expr2}`); // 括號提高優先級
    
    const expr3 = 10 + 20 / 5 + 3 * 2;
    console.log(`表達式3: 10 + 20 / 5 + 3 * 2 = ${expr3}`); // 乘除優先於加減
    
    const expr4 = 5 > 3 && 10 < 20 || 7 >= 7;
    console.log(`表達式4: 5 > 3 && 10 < 20 || 7 >= 7 = ${expr4}`); // 比較 > 邏輯 AND > 邏輯 OR
    
    // 第8節: 可選鍊運算符 (?.) - ES2020
    console.log("\n===== 可選鍊運算符 =====");
    
    const user = {
        name: "小明",
        info: {
            address: {
                city: "台北"
            }
        }
    };
    
    const emptyUser = {};
    
    // 傳統方式 - 容易出錯
    // console.log(`城市 (可能錯誤): ${emptyUser.info.address.city}`); // 會導致錯誤
    
    // 傳統防禦性代碼
    const cityTraditional = emptyUser.info && emptyUser.info.address && emptyUser.info.address.city;
    console.log(`城市 (傳統防禦): ${cityTraditional || "未知"}`);
    
    // 使用可選鍊運算符
    const cityOptional = emptyUser?.info?.address?.city;
    console.log(`城市 (可選鍊): ${cityOptional || "未知"}`);
    
    // 成功的例子
    console.log(`有效用戶的城市: ${user?.info?.address?.city || "未知"}`);
    
    // 方法調用的可選鍊
    console.log(`調用方法: ${user.getAge?.() || "方法不存在"}`);
    
    // 第9節: 實用示例
    console.log("\n===== 實用示例 =====");
    
    // 解析URL參數
    function parseUrlParams(url) {
        // 使用邏輯 OR 提供默認值
        const query = url.split('?')[1] || '';
        const params = {};
        
        // 如果有查詢字符串，則解析
        if (query) {
            query.split('&').forEach(param => {
                const [key, value] = param.split('=');
                params[key] = value || true; // 如果沒有值，則視為 true
            });
        }
        
        return params;
    }
    
    const url = "https://example.com/search?query=javascript&limit=10&sort=desc";
    const params = parseUrlParams(url);
    console.log("URL 參數:", params);
    
    // 數值限定範圍
    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
    
    console.log(`限定範圍 (5, 0, 10): ${clamp(5, 0, 10)}`);
    console.log(`限定範圍 (-5, 0, 10): ${clamp(-5, 0, 10)}`);
    console.log(`限定範圍 (15, 0, 10): ${clamp(15, 0, 10)}`);
}