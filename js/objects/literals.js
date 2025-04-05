/**
 * File: literals.js
 * Description: 展示JavaScript中物件字面量的使用方法
 * 
 * 本練習涵蓋:
 * - 建立與存取物件
 * - 物件方法
 * - 物件解構
 * - 展開運算符
 * - 計算屬性名
 */

export default function runObjectLiteralsExercise() {
    // 第1節: 基本物件建立與存取
    console.log("===== 基本物件建立與存取 =====");
    
    // 建立簡單物件
    const person = {
        firstName: "小明",
        lastName: "王",
        age: 28,
        email: "xiaoming.wang@example.com"
    };
    
    // 存取物件屬性
    console.log(`姓: ${person.lastName}`);
    console.log(`名: ${person.firstName}`);
    console.log(`年齡: ${person.age}`);
    
    // 使用中括號語法存取（適用於動態屬性名）
    const propertyName = "email";
    console.log(`電子郵件: ${person[propertyName]}`);
    
    // 第2節: 巢狀物件
    console.log("\n===== 巢狀物件 =====");
    
    const student = {
        id: "S12345",
        name: "李小華",
        grades: {
            math: 95,
            science: 88,
            history: 76
        },
        contact: {
            phone: "0912-345-678",
            address: {
                city: "台北",
                district: "信義區",
                street: "忠孝東路五段100號"
            }
        }
    };
    
    console.log(`學生姓名: ${student.name}`);
    console.log(`數學成績: ${student.grades.math}`);
    console.log(`住址: ${student.contact.address.city}${student.contact.address.district}${student.contact.address.street}`);
    
    // 第3節: 物件方法
    console.log("\n===== 物件方法 =====");
    
    const calculator = {
        num1: 0,
        num2: 0,
        setNumbers: function(a, b) {
            this.num1 = a;
            this.num2 = b;
            console.log(`設定數字: ${a} 和 ${b}`);
        },
        // 簡短語法（ES6+）
        add() {
            return this.num1 + this.num2;
        },
        subtract() {
            return this.num1 - this.num2;
        },
        multiply() {
            return this.num1 * this.num2;
        },
        divide() {
            if (this.num2 === 0) {
                throw new Error("不能除以零");
            }
            return this.num1 / this.num2;
        }
    };
    
    calculator.setNumbers(10, 5);
    console.log(`加法: ${calculator.add()}`);
    console.log(`減法: ${calculator.subtract()}`);
    console.log(`乘法: ${calculator.multiply()}`);
    console.log(`除法: ${calculator.divide()}`);
    
    // 第4節: 物件解構
    console.log("\n===== 物件解構 =====");
    
    const product = {
        id: "P789",
        name: "超輕薄筆電",
        price: 35000,
        specs: {
            cpu: "Core i7",
            ram: "16GB",
            storage: "512GB SSD"
        },
        inStock: true
    };
    
    // 基本解構
    const { name, price } = product;
    console.log(`產品名稱: ${name}`);
    console.log(`價格: $${price}`);
    
    // 使用別名
    const { name: productName, price: productPrice } = product;
    console.log(`使用別名 - 產品名稱: ${productName}`);
    
    // 巢狀解構
    const { specs: { cpu, ram } } = product;
    console.log(`CPU: ${cpu}, RAM: ${ram}`);
    
    // 設定預設值
    const { discount = 0 } = product;  // discount 不存在於 product 中
    console.log(`折扣: ${discount}%`);
    
    // 第5節: 展開運算符與物件合併
    console.log("\n===== 展開運算符與物件合併 =====");
    
    // 複製物件
    const productCopy = { ...product };
    console.log("複製的產品:", productCopy.name);
    
    // 合併物件
    const productDetails = {
        weight: "1.2kg",
        dimensions: "30.5 x 21.6 x 1.5 cm",
        warranty: "2年"
    };
    
    const completeProduct = { ...product, ...productDetails };
    console.log("完整產品資訊:");
    console.log(completeProduct);
    
    // 覆蓋屬性
    const discountedProduct = { ...product, price: product.price * 0.9 };
    console.log(`原價: $${product.price}`);
    console.log(`折扣後價格: $${discountedProduct.price}`);
    
    // 第6節: 計算屬性名
    console.log("\n===== 計算屬性名 =====");
    
    const fieldName = "serialNumber";
    const fieldValue = "SN-12345-789";
    
    // 使用計算屬性名
    const device = {
        [fieldName]: fieldValue,
        [`${fieldName}Type`]: "電子產品"
    };
    
    console.log(`裝置 ${fieldName}: ${device[fieldName]}`);
    console.log(`裝置 ${fieldName}Type: ${device[`${fieldName}Type`]}`);
    
    // 第7節: Object 靜態方法
    console.log("\n===== Object 靜態方法 =====");
    
    // Object.keys()
    console.log("產品的所有屬性:");
    console.log(Object.keys(product));
    
    // Object.values()
    console.log("\n產品的所有值 (不包含巢狀物件內容):");
    console.log(Object.values(product));
    
    // Object.entries()
    console.log("\n產品的所有鍵值對:");
    Object.entries(product).forEach(([key, value]) => {
        // 只打印非物件值，避免過多輸出
        if (typeof value !== 'object') {
            console.log(`${key}: ${value}`);
        }
    });
    
    // Object.assign()
    const baseConfig = { theme: "dark", fontSize: 16 };
    const userConfig = { fontSize: 18 };
    const finalConfig = Object.assign({}, baseConfig, userConfig);
    console.log("\n合併後的配置:");
    console.log(finalConfig);
}