/**
 * File: selectors.js
 * Description: 展示如何使用JavaScript選擇和操作DOM元素
 * 
 * 本練習涵蓋:
 * - 基本DOM選擇器
 * - 操作元素內容與屬性
 * - 樣式操作
 * - 創建和刪除元素
 */

export default function runDomSelectorsExercise() {
    // 為了在我們的練習環境中模擬DOM操作，我們需要先創建一些HTML元素
    prepareExerciseEnvironment();
    
    // 第1節: 基本選擇器
    console.log("===== 基本選擇器 =====");
    
    // 通過ID選擇元素
    const titleElement = document.getElementById("demo-title");
    console.log("通過ID選擇的元素:", titleElement ? titleElement.textContent : "未找到元素");
    
    // 通過標籤名選擇元素
    const paragraphs = document.getElementsByTagName("p");
    console.log(`找到 ${paragraphs.length} 個段落元素`);
    
    // 通過類名選擇元素
    const infoElements = document.getElementsByClassName("info");
    console.log(`找到 ${infoElements.length} 個info類的元素`);
    
    // 使用CSS選擇器選擇元素 (更強大的方法)
    const firstInfoElement = document.querySelector(".info");
    console.log("第一個info類元素:", firstInfoElement ? firstInfoElement.textContent : "未找到元素");
    
    const allListItems = document.querySelectorAll("ul li");
    console.log(`找到 ${allListItems.length} 個列表項目`);
    
    // 遍歷元素集合
    console.log("所有列表項目的內容:");
    allListItems.forEach((item, index) => {
        console.log(`項目 ${index + 1}: ${item.textContent}`);
    });
    
    // 第2節: 操作元素內容
    console.log("\n===== 操作元素內容 =====");
    
    // 獲取和設置文本內容
    console.log(`標題原文: ${titleElement.textContent}`);
    titleElement.textContent = "已更新的示範標題";
    console.log(`更新後標題: ${titleElement.textContent}`);
    
    // innerHTML (允許HTML標記)
    const contentBox = document.getElementById("content-box");
    console.log(`內容框原內容: ${contentBox.textContent}`);
    contentBox.innerHTML = "這是<strong>重要</strong>內容，<em>請注意</em>！";
    console.log(`更新後內容框HTML: ${contentBox.innerHTML}`);
    
    // 第3節: 操作元素屬性
    console.log("\n===== 操作元素屬性 =====");
    
    const linkElement = document.getElementById("demo-link");
    
    // 獲取屬性
    console.log(`連結的href屬性: ${linkElement.getAttribute("href")}`);
    console.log(`連結的target屬性: ${linkElement.getAttribute("target")}`);
    
    // 設置屬性
    linkElement.setAttribute("href", "https://www.example.com/updated");
    linkElement.setAttribute("target", "_blank");
    console.log(`更新後連結的href: ${linkElement.getAttribute("href")}`);
    
    // 檢查、添加和刪除屬性
    console.log(`連結是否有title屬性: ${linkElement.hasAttribute("title")}`);
    linkElement.setAttribute("title", "這是一個示範連結");
    console.log(`設置後連結是否有title屬性: ${linkElement.hasAttribute("title")}`);
    
    // 直接屬性訪問 (較常用的方式)
    console.log(`直接訪問href: ${linkElement.href}`);
    linkElement.href = "https://www.example.com/direct";
    console.log(`直接設置後href: ${linkElement.href}`);
    
    // 第4節: 操作CSS樣式
    console.log("\n===== 操作CSS樣式 =====");
    
    const styledElement = document.getElementById("styled-element");
    
    // 使用style屬性
    console.log(`當前背景色: ${styledElement.style.backgroundColor}`);
    styledElement.style.backgroundColor = "lightblue";
    styledElement.style.color = "darkblue";
    styledElement.style.padding = "10px";
    styledElement.style.borderRadius = "5px";
    console.log(`設置後背景色: ${styledElement.style.backgroundColor}`);
    
    // 使用classList
    console.log(`當前類別: ${styledElement.className}`);
    styledElement.classList.add("highlighted");
    console.log(`添加highlighted後的類別: ${styledElement.className}`);
    
    styledElement.classList.remove("box");
    console.log(`移除box後的類別: ${styledElement.className}`);
    
    // 切換類
    styledElement.classList.toggle("active");
    console.log(`切換active後的類別: ${styledElement.className}`);
    
    // 檢查是否包含類
    console.log(`是否包含highlighted類: ${styledElement.classList.contains("highlighted")}`);
    
    // 第5節: 創建和刪除元素
    console.log("\n===== 創建和刪除元素 =====");
    
    // 創建新元素
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "這是動態創建的新段落。";
    newParagraph.className = "dynamic-content";
    
    // 添加到DOM
    const container = document.getElementById("container");
    container.appendChild(newParagraph);
    console.log("已添加新段落");
    
    // 在特定位置插入
    const newListItem = document.createElement("li");
    newListItem.textContent = "新插入的列表項目";
    
    const list = document.querySelector("ul");
    list.insertBefore(newListItem, list.firstChild);
    console.log("已在列表開頭插入新項目");
    
    // 使用現代的插入方法
    const anotherItem = document.createElement("li");
    anotherItem.textContent = "使用append方法添加的項目";
    list.append(anotherItem);
    console.log("已使用append添加項目");
    
    // 刪除元素
    setTimeout(() => {
        const itemToRemove = document.querySelector("li:last-child");
        if (itemToRemove) {
            itemToRemove.remove();
            console.log("已移除最後一個列表項目");
        }
        
        // 舊方法：通過父元素移除
        const firstItem = list.firstElementChild;
        if (firstItem) {
            list.removeChild(firstItem);
            console.log("已移除第一個列表項目");
        }
    }, 2000); // 等待2秒再刪除，這樣您可以在控制台中看到之前的操作
    
    // 第6節: 導航DOM樹
    console.log("\n===== 導航DOM樹 =====");
    
    const navigationDemo = document.getElementById("navigation-demo");
    
    // 訪問父節點
    console.log(`父節點: ${navigationDemo.parentNode.id || "無ID"}`);
    
    // 訪問子節點
    console.log(`子節點數量: ${navigationDemo.childNodes.length}`);
    console.log(`元素子節點數量: ${navigationDemo.children.length}`);
    
    // 訪問第一個和最後一個子節點
    console.log(`第一個子元素: ${navigationDemo.firstElementChild ? navigationDemo.firstElementChild.textContent : "無"}`);
    console.log(`最後一個子元素: ${navigationDemo.lastElementChild ? navigationDemo.lastElementChild.textContent : "無"}`);
    
    // 訪問兄弟節點
    const middleChild = document.getElementById("middle-child");
    console.log(`前一個兄弟元素: ${middleChild.previousElementSibling ? middleChild.previousElementSibling.textContent : "無"}`);
    console.log(`後一個兄弟元素: ${middleChild.nextElementSibling ? middleChild.nextElementSibling.textContent : "無"}`);
    
    console.log("\n實際 DOM 操作已完成。這些更改在頁面上可見，但在此控制台輸出中無法直接查看。請檢查網頁內容以查看結果。");
    
    // 清理函數將在5秒後執行，恢復原始內容
    setTimeout(cleanupExerciseEnvironment, 5000);
}

// 準備練習環境，創建所需的DOM元素
function prepareExerciseEnvironment() {
    // 清理任何現有的exercise-container
    const existingContainer = document.getElementById("exercise-container");
    if (existingContainer) {
        existingContainer.remove();
    }
    
    // 創建容器
    const exerciseContainer = document.createElement("div");
    exerciseContainer.id = "exercise-container";
    exerciseContainer.style.border = "1px solid #ccc";
    exerciseContainer.style.padding = "20px";
    exerciseContainer.style.marginTop = "20px";
    exerciseContainer.style.borderRadius = "5px";
    exerciseContainer.style.backgroundColor = "#f9f9f9";
    
    // 添加HTML內容
    exerciseContainer.innerHTML = `
        <h2 id="demo-title">DOM 選擇器示範</h2>
        <p class="info">這是一個關於DOM選擇器的練習。</p>
        <p>您可以通過各種方法選擇和操作這些元素。</p>
        <div id="content-box" class="box">這裡的內容將被修改。</div>
        <a id="demo-link" href="https://example.com">示範連結</a>
        <div id="styled-element" class="box">這個元素的樣式將被修改</div>
        <div id="container">
            <h3>動態元素</h3>
            <p>下面將添加新元素：</p>
        </div>
        <ul>
            <li>列表項目 1</li>
            <li>列表項目 2</li>
            <li>列表項目 3</li>
        </ul>
        <div id="navigation-demo">
            <p>第一個子元素</p>
            <p id="middle-child">中間子元素</p>
            <p>最後一個子元素</p>
        </div>
    `;
    
    // 添加到文檔
    const resultContainer = document.getElementById("exercise-result");
    resultContainer.appendChild(exerciseContainer);
    
    // 添加樣式
    const styleElement = document.createElement("style");
    styleElement.textContent = `
        .box {
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
        }
        .highlighted {
            box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
        }
        .active {
            font-weight: bold;
            border-left: 3px solid blue;
        }
        .dynamic-content {
            background-color: #e0f7fa;
            padding: 10px;
            border-left: 4px solid #00bcd4;
        }
    `;
    document.head.appendChild(styleElement);
    
    console.log("DOM練習環境已準備就緒");
}

// 清理練習環境
function cleanupExerciseEnvironment() {
    const resultElement = document.getElementById("exercise-result");
    const message = document.createElement("div");
    message.innerHTML = `
        <div style="padding: 15px; background-color: #f0f0f0; border-left: 4px solid #333; margin-top: 20px;">
            <p>DOM操作練習已完成並重置。</p>
            <p>您可以重新運行練習以再次查看效果。</p>
        </div>
    `;
    resultElement.innerHTML = "";
    resultElement.appendChild(message);
    
    console.log("DOM練習環境已清理");
}