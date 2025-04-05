# JavaScript 程式設計練習集

這個專案包含從基礎到進階的 JavaScript 程式設計練習，按類別分類在不同的目錄中，每個練習都是獨立的 JS 檔案，可以在瀏覽器中直接運行並查看結果。適合 JavaScript 學習者參考使用。

## 專案結構

```
JavaScript-Programming-Exercise/
├── README.md               # 專案說明文件
├── LICENSE                 # MIT許可證
├── index.html              # 主HTML檔案，用於運行選單系統
├── css/                    # CSS樣式
│   └── style.css           # 主樣式表
├── js/                     # JavaScript 源碼目錄
│   ├── menu.js             # 選單系統
│   ├── basics/             # 基礎概念
│   ├── control_flow/       # 控制流程
│   ├── functions/          # 函數
│   ├── arrays/             # 陣列操作
│   ├── objects/            # 物件與物件導向程式設計
│   ├── dom/                # DOM操作
│   ├── async/              # Promise和異步/等待
│   ├── api/                # API互動
│   ├── storage/            # LocalStorage, SessionStorage
│   └── modules/            # ES模組示例
└── assets/                 # 其他資源
```

## 快速開始

您可以使用以下步驟開始使用此專案：

1. 複製專案到本地：
   ```
   git clone https://your-repository-url/JavaScript-Programming-Exercise.git
   ```

2. 使用 Visual Studio Code 開啟專案：
   ```
   code JavaScript-Programming-Exercise
   ```

3. 由於JS檔案需要從服務器加載，您需要安裝一個簡單的本地伺服器：
   - 在 VS Code 中安裝 "Live Server" 擴展
   - 或者使用 Node.js 的 `http-server` 套件

4. 啟動服務器後，在瀏覽器中開啟 `index.html`

## 專案內容

本專案包含以下類別的練習：

### 基礎部分 (basics)
- `variables.js` - JavaScript 變數和基本數據類型
- `operators.js` - 運算符和表達式

### 控制流程 (control_flow)
- `conditionals.js` - 條件語句，包括 if-else、switch 等
- `loops.js` - 循環結構，包括 for、while、do-while、for...of 等

### 函數 (functions)
- `declarations.js` - 函數宣告和使用
- `arrow.js` - 箭頭函數

### 陣列 (arrays)
- `basics.js` - 陣列基本操作
- `methods.js` - 陣列方法如 map、filter、reduce 等

### 物件與 OOP (objects)
- `literals.js` - 物件字面量
- `classes.js` - 使用 ES6 類別實現物件導向程式設計

### DOM 操作 (dom)
- `selectors.js` - DOM 選擇器
- `events.js` - 事件處理

### 異步 JavaScript (async)
- `callbacks.js` - 回調函數
- `promises.js` - Promise
- `async_await.js` - Async/await 語法

### API 互動 (api)
- `fetch.js` - 使用 Fetch API 發送請求
- `json.js` - 處理 JSON 數據

### 網頁儲存 (storage)
- `local_storage.js` - 使用 localStorage
- `session_storage.js` - 使用 sessionStorage

### ES 模組 (modules)
- `exports.js` - 匯出和匯入模組
- `dynamic_imports.js` - 動態載入模組

## 學習路徑建議

1. **基礎學習**：先從 `basics` 目錄開始，理解 JavaScript 的基本語法和數據類型。

2. **控制流程**：學習 `control_flow` 目錄中的檔案，掌握條件判斷和循環結構。

3. **函數**：通過 `functions` 目錄學習函數的定義和使用方式。

4. **陣列和物件**：`arrays` 和 `objects` 目錄將幫助您理解 JavaScript 中重要的數據結構。

5. **DOM 操作**：使用 `dom` 目錄學習如何與網頁元素互動。

6. **進階主題**：最後探索 `async`、`api`、`storage` 和 `modules` 等進階主題。

## 使用說明

1. 在瀏覽器中開啟 `index.html` 檔案。
2. 從左側選單中選擇一個類別。
3. 點擊該類別下的特定練習。
4. 程式碼會顯示在右側面板，並且可以點擊「運行練習」按鈕執行程式碼。
5. 執行結果會顯示在「結果」區域中。

## 建議的開發工具

- Visual Studio Code (VS Code)
- VSCode Extensions:
  - Live Server
  - ESLint
  - Prettier
  - JavaScript (ES6) Code Snippets

## 注意事項

- 某些練習可能需要現代瀏覽器支援 (推薦使用 Chrome、Firefox 或 Edge 的最新版本)
- 本專案中的所有程式均為學習參考用途，程式碼風格遵循常見的 JavaScript 規範# Project documentation
