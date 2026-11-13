# 驗證紀錄

- `node --check assets/app.js`、`node --check assets/projects.js`：通過。
- `python3 scripts/build.py`：成功產生首頁與四個獨立詳細頁。
- `python3 scripts/check.py`：靜態 HTML 資源／連結存在檢查通過。
- 本機 HTTP 預覽：首頁成功渲染四張卡片。
- 瀏覽器實測：首頁切換英文，進入 iRent 後仍保留英文；詳細頁切回繁中，連續使用「下一個專題」進入醫療、投資組合、Azure 頁面，標題與中文語言皆正確；返回首頁成功。
- 390×844 手機 viewport：首頁單欄、iRent 詳細頁單欄；四個詳細頁 document scrollWidth 均為 390，無水平溢出。
- 1440px viewport：首頁四張卡片存在，scrollWidth 為 1440，無水平溢出。已保存實際網站全頁截圖。
- 視覺檢查：白色圓角卡片、淺藍底、清楚的中性占位圖；修正占位文字置中與內距。

範圍限制：未在實體手機或所有瀏覽器逐一測試；尚未發布至 GitHub Pages，因此沒有聲稱遠端部署已驗證。file:// 開啟使用普通 script，無網路資料請求，但本次互動驗證以 HTTP 預覽執行。
