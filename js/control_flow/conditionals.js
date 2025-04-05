/**
 * File: conditionals.js
 * Description: 展示 JavaScript 中的條件語句與流程控制
 * 
 * 本練習涵蓋:
 * - if, else if, else 語句
 * - 三元運算符
 * - switch 語句
 * - 邏輯短路計算
 * - 空值合併運算符
 */

export default function runConditionalsExercise() {
    // 第1節: 基本 if-else 語句
    console.log("===== 基本 if-else 語句 =====");
    
    const temperature = 25;
    
    if (temperature > 30) {
        console.log("今天很熱！");
    } else if (temperature > 20) {
        console.log("今天天氣很舒適！");
    } else if (temperature > 10) {
        console.log("今天有點涼！");
    } else {
        console.log("今天很冷！");
    }
    
    // 第2節: 三元運算符
    console.log("\n===== 三元運算符 =====");
    
    const age = 20;
    const status = age >= 18 ? "成年人" : "未成年人";
    console.log(`年齡 ${age}：${status}`);
    
    // 嵌套三元運算符
    const score = 85;
    const grade = score >= 90 ? "A" 
                 : score >= 80 ? "B" 
                 : score >= 70 ? "C" 
                 : score >= 60 ? "D" 
                 : "F";
    console.log(`分數 ${score}：${grade}`);
    
    // 第3節: switch 語句
    console.log("\n===== switch 語句 =====");
    
    const dayOfWeek = new Date().getDay();
    let dayName;
    
    switch (dayOfWeek) {
        case 0:
            dayName = "星期日";
            break;
        case 1:
            dayName = "星期一";
            break;
        case 2:
            dayName = "星期二";
            break;
        case 3:
            dayName = "星期三";
            break;
        case 4:
            dayName = "星期四";
            break;
        case 5:
            dayName = "星期五";
            break;
        case 6:
            dayName = "星期六";
            break;
        default:
            dayName = "無效的日期";
    }
    
    console.log(`今天是：${dayName}`);
    
    // 不同 case 共用相同代碼的例子
    const month = new Date().getMonth() + 1; // getMonth() 返回 0-11
    let season;
    
    switch (month) {
        case 3:
        case 4:
        case 5:
            season = "春季";
            break;
        case 6:
        case 7:
        case 8:
            season = "夏季";
            break;
        case 9:
        case 10:
        case 11:
            season = "秋季";
            break;
        case 12:
        case 1:
        case 2:
            season = "冬季";
            break;
        default:
            season = "無效月份";
    }
    
    console.log(`現在是：${month}月，${season}`);
    
    // 第4節: 邏輯運算符和短路計算
    console.log("\n===== 邏輯運算符和短路計算 =====");
    
    // AND 短路
    const x = 10;
    const result1 = x > 5 && "x 大於 5";
    console.log(result1); // 輸出: "x 大於 5"
    
    const result2 = x < 5 && "x 小於 5";
    console.log(result2); // 輸出: false
    
    // OR 短路
    const username = "";
    const displayName = username || "Guest";
    console.log(`歡迎，${displayName}！`); // 輸出: "歡迎，Guest！"
    
    // 多條件檢查
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isHoliday = false;
    const isFreeDay = isWeekend || isHoliday;
    
    console.log(`今天${isFreeDay ? "是" : "不是"}休息日`);
    
    // 條件鏈
    const checkPermission = (user) => {
        return user.isAdmin || user.isModerator || user.hasSpecialPermission || false;
    };
    
    const adminUser = { isAdmin: true };
    const regularUser = { isRegular: true };
    
    console.log(`管理員權限：${checkPermission(adminUser)}`);
    console.log(`普通用戶權限：${checkPermission(regularUser)}`);
    
    // 第5節: 空值合併運算符 (??)
    console.log("\n===== 空值合併運算符 (??) =====");
    
    // 與 OR 運算符的區別
    const value1 = 0;
    const value2 = "";
    const value3 = null;
    const value4 = undefined;
    
    // OR 會將 0 和空字符串視為假值
    console.log(`value1 || "默認值": ${value1 || "默認值"}`);
    console.log(`value2 || "默認值": ${value2 || "默認值"}`);
    console.log(`value3 || "默認值": ${value3 || "默認值"}`);
    console.log(`value4 || "默認值": ${value4 || "默認值"}`);
    
    // ?? 只會對 null 和 undefined 進行替換
    console.log(`value1 ?? "默認值": ${value1 ?? "默認值"}`);
    console.log(`value2 ?? "默認值": ${value2 ?? "默認值"}`);
    console.log(`value3 ?? "默認值": ${value3 ?? "默認值"}`);
    console.log(`value4 ?? "默認值": ${value4 ?? "默認值"}`);
    
    // 第6節: 條件式函數執行
    console.log("\n===== 條件式函數執行 =====");
    
    const isLoggedIn = true;
    
    isLoggedIn && console.log("用戶已登入");
    !isLoggedIn && console.log("用戶未登入");
    
    // 條件式賦值與返回
    function getUserRole(user) {
        if (!user) return "訪客";
        
        return user.role || "普通用戶";
    }
    
    console.log(`角色: ${getUserRole({ role: "管理員" })}`);
    console.log(`角色: ${getUserRole({ name: "小明" })}`);
    console.log(`角色: ${getUserRole()}`);
    
    // 第7節: 實際應用案例
    console.log("\n===== 實際應用案例 =====");
    
    // 用戶輸入驗證
    function validateInput(input) {
        // 驗證是否為空
        if (!input) {
            return "輸入不能為空";
        }
        
        // 驗證長度
        if (input.length < 3) {
            return "輸入長度必須至少為3個字符";
        }
        
        // 驗證是否包含特殊字符
        if (/[!@#$%^&*(),.?":{}|<>]/.test(input)) {
            return "輸入不能包含特殊字符";
        }
        
        // 通過所有驗證
        return "輸入有效";
    }
    
    console.log(validateInput("")); // 輸出: 輸入不能為空
    console.log(validateInput("ab")); // 輸出: 輸入長度必須至少為3個字符
    console.log(validateInput("hello!")); // 輸出: 輸入不能包含特殊字符
    console.log(validateInput("hello")); // 輸出: 輸入有效
    
    // 權限檢查系統
    function checkAccess(user, resource) {
        // 檢查用戶是否存在
        if (!user) {
            return "未登入";
        }
        
        // 管理員擁有所有權限
        if (user.role === "admin") {
            return "許可訪問";
        }
        
        // 檢查資源特定權限
        if (resource.public) {
            return "許可訪問";
        }
        
        // 檢查用戶是否是資源擁有者
        if (resource.ownerId === user.id) {
            return "許可訪問";
        }
        
        // 檢查用戶是否在共享列表中
        if (resource.sharedWith && resource.sharedWith.includes(user.id)) {
            return "許可訪問";
        }
        
        // 默認拒絕訪問
        return "拒絕訪問";
    }
    
    const publicResource = { public: true };
    const privateResource = { 
        public: false, 
        ownerId: 123, 
        sharedWith: [456, 789] 
    };
    
    console.log("權限檢查示例:");
    console.log(`未登入用戶訪問公共資源: ${checkAccess(null, publicResource)}`);
    console.log(`未登入用戶訪問私有資源: ${checkAccess(null, privateResource)}`);
    console.log(`管理員訪問私有資源: ${checkAccess({ role: "admin" }, privateResource)}`);
    console.log(`資源擁有者訪問: ${checkAccess({ id: 123 }, privateResource)}`);
    console.log(`共享用戶訪問: ${checkAccess({ id: 456 }, privateResource)}`);
    console.log(`未授權用戶訪問: ${checkAccess({ id: 999 }, privateResource)}`);
}