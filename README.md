# 林湘庭｜資料科學作品集

**Hsiang-Ting Lin · Data Science Portfolio**

以人工智慧、機器學習與資料分析為主題的個人作品集，收錄六個專題，透過中英文介紹、實作畫面與報告，呈現各專題的目標、使用技術、實作參與及成果。

本儲存庫包含作品集網站的原始碼與展示素材；各專題的應用程式、模型訓練程式及後端服務不包含在此儲存庫內。

## 收錄作品

| 專題 | 內容摘要 | 主要技術／方法 |
| --- | --- | --- |
| [iRent Guardian 智能車況管家](projects/irent.html) | 和泰 AI 黑客松團隊專案，整合拍攝引導、車況比對、人工覆核與工單追蹤。 | OpenCV、RapidOCR、DINOv2、SigLIP2、Qwen3-VL、Ollama |
| [AI 初步醫療問診系統](projects/medical.html) | 透過自然語言進行症狀諮詢，提供初步科別建議、問診紀錄與緊急程度提示。 | Python、Flask、SQLite、Gemini API、PythonAnywhere |
| [用機器學習選股與比較投資績效](projects/portfolio-ml.html) | 使用台灣股票歷史資料，建立模型並比較投資組合與市場基準的回測表現。 | Python、線性迴歸、隨機森林、類神經網路 |
| [JetBot 道路辨識](projects/jetbot.html) | 在實作課程中參與道路影像蒐集、模型訓練及實車操作，觀察影像預測與轉向控制的關係。 | Jetson Nano、PyTorch、OpenCV、JupyterLab、ipywidgets |
| [Azure 圖像辨識互動遊戲](projects/azure-game.html) | 將自訂圖像分類模型串接至畫布介面，辨識五種表情類別。 | Flask、Azure Custom Vision、Docker、ACR、ACI |
| [Garmin 手環數據分析](projects/garmin.html) | 整理每日活動與睡眠資料，探索活動分群和深睡比例的關聯。 | 資料清理、K-means、Pearson 相關分析、視覺化 |

表格中的連結指向網站頁面檔案；在 GitHub 儲存庫中點擊會看到 HTML 原始碼，部署網站後才會以網頁呈現。

金融專題另附[完整 PDF 報告](assets/reports/finance-final.pdf)。各作品的成果與適用限制請參閱詳細頁。

## 網站功能

- 繁體中文與英文即時切換，並以瀏覽器 `localStorage` 記住語言偏好。
- 首頁以卡片呈現六個作品，每個作品皆有獨立網址。
- 詳細頁包含專題目標、功能與流程、使用技術、實作與參與、成果及圖片。
- 作品圖片支援點擊放大，游標移上時有輕微上浮效果。
- 支援手機與電腦排版，採深藍、黃色及淺色背景設計。
- 提供金融專題 PDF 閱讀與下載。

## 網站技術

網站使用原生 **HTML、CSS、JavaScript**，不依賴前端框架、npm 或後端服務，也不需要設定 API 金鑰。

作品資料集中於 `assets/projects.js`，由 `assets/app.js` 動態產生頁面內容，因此瀏覽時需要啟用 JavaScript。Python 僅用於產生 HTML 入口與檢查連結，網站上線後不需要執行 Python。

## 本機預覽

可直接用瀏覽器開啟 `index.html`。若瀏覽器限制本機檔案的儲存功能，語言偏好可能無法跨頁保留。

建議在本資料夾開啟終端機，使用 Python 3 啟動本機伺服器：

```bash
python3 -m http.server 8000
```

開啟 <http://localhost:8000>，停止伺服器時按 `Ctrl+C`。

## 檔案結構

```text
portfolio_projects/
├── index.html                  # 首頁入口
├── assets/
│   ├── projects.js             # 六個專題的中英文資料與圖片路徑
│   ├── app.js                  # 頁面渲染、語言切換、圖片放大
│   ├── style.css               # 配色、排版、響應式樣式與互動效果
│   ├── favicon.png             # 瀏覽器分頁圖示
│   ├── covers/                 # 首頁作品封面
│   ├── pdf-projects/           # 詳細頁使用的 JPG 圖片
│   └── reports/
│       └── finance-final.pdf   # 金融專題報告
├── projects/                   # 六個作品的 HTML 入口
├── scripts/
│   ├── build.py                # 依作品資料產生 HTML 入口
│   └── check.py                # 檢查 HTML 直接引用的本機連結
├── .gitignore                  # 排除系統檔與快取
├── README.md                   # 作品集介紹與維護方式
└── TESTING.md                  # 歷史驗證紀錄，部分內容屬舊版
```

## 修改與維護

### 修改文字、姓名與外觀

| 修改項目 | 編輯位置 |
| --- | --- |
| 作品標題、目標、功能、技術、參與內容與成果 | `assets/projects.js` 中對應作品的 `zh`、`en` 欄位 |
| 首頁姓名與共用介面文字 | `assets/app.js` 的 `labels` |
| 顏色、字體、卡片與圖片效果 | `assets/style.css` |
| 瀏覽器分頁圖示 | `assets/favicon.png`，請使用真正的 PNG 檔 |

修改中英文內容時，請一併更新兩種語言。作品在首頁的顯示順序由 `window.PROJECTS` 陣列的排列順序決定；`number` 與 `tag` 目前保留於資料中，沒有顯示在頁面上。

### 更換圖片與報告

- 首頁封面：將圖片放入 `assets/covers/`，更新作品的 `image` 與 `imageAlt`。
- 詳細頁圖片：將圖片放入 `assets/pdf-projects/`，更新 `gallery` 中的 `src` 與中英文 `alt`。
- 金融報告：替換 `assets/reports/finance-final.pdf`；若更改檔名或路徑，也要同步修改 `assets/app.js` 的報告連結。

作品資料中的圖片路徑以網站根目錄為基準，例如 `assets/covers/irent.png`。首頁封面與詳細頁圖庫分別設定，請勿將電腦上的絕對路徑填入資料。

### 新增或刪除作品

1. 在 `assets/projects.js` 的 `window.PROJECTS` 陣列中新增完整作品物件，或移除不需要的物件。
2. 新作品的 `id` 必須唯一，使用小寫英文字母、數字及連字號，例如 `new-project`。
3. 填妥中英文內容、封面與圖庫資料，保留可由 JSON 解析的資料格式，不要在陣列中加入註解或尾端逗號。
4. 在本資料夾執行：

   ```bash
   python3 scripts/build.py
   ```

5. 刪除作品時，另行手動刪除 `projects/` 中對應的舊 HTML。

`build.py` 會覆寫 `index.html` 與目前作品的 HTML 入口；若要調整這些頁面的共同骨架，請修改 `scripts/build.py` 的模板。只改介紹內文通常不需要重新產生頁面，但修改標題時應重新執行，以同步 HTML 標題與描述。

## 檢查方式

在本資料夾執行：

```bash
node --check assets/app.js
node --check assets/projects.js
python3 scripts/check.py
```

前兩項需要 Node.js，用來檢查 JavaScript 語法；第三項使用 Python 標準函式庫，檢查 HTML 直接引用的本機檔案是否存在，不涵蓋 JavaScript 動態產生的所有圖片與連結。

發布前請以瀏覽器確認六張作品卡片、中英文切換、詳細頁導覽、圖片放大、PDF 連結與手機排版。`TESTING.md` 保留先前的測試紀錄，其中四個作品及舊版配色的描述不代表目前版本。

## GitHub Pages 部署

1. 將本資料夾內的內容上傳至 GitHub 儲存庫根目錄，讓 `index.html` 直接位於根目錄。
2. 提交至 `main` 分支。
3. 開啟 **Settings → Pages → Build and deployment**。
4. Source 選 **Deploy from a branch**，Branch 選 **main**，資料夾選 **/ (root)**，按 **Save**。
5. 等待部署完成，使用 Pages 設定頁提供的網站網址。

一般專案網站的網址形式為 `https://你的帳號.github.io/儲存庫名稱/`。所有網站資源採相對路徑，可放在儲存庫子路徑下；更新並提交檔案後，Pages 會重新部署。

若希望「儲存庫私人、網站公開」，個人帳號需使用支援私人儲存庫 Pages 的 GitHub Pro；GitHub Free 的 Pages 適用於公開儲存庫。私人儲存庫不會隱藏已公開網站傳送至瀏覽器的 HTML、CSS、JavaScript、圖片與 PDF。

部署選項與方案限制請參閱 [GitHub Pages 官方說明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。
