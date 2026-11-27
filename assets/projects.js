window.PROJECTS = [
  {
    "id": "irent",
    "title": {
      "zh": "iRent Guardian 智能車況管家",
      "en": "iRent Guardian"
    },
    "tag": "Computer Vision / AI",
    "number": "01",
    "goal": {
      "zh": "「拍得對、存得住、查得到」整合取還車拍攝、車況比對與人工覆核，保存完整紀錄，讓異常處理有據可循。",
      "en": "Capture correctly, preserve records, and retrieve them when needed. The workflow combines rental photography, vehicle-condition comparison, and human review for traceable incident handling."
    },
    "features": {
      "zh": "引導使用者依指定角度拍攝並即時檢查照片品質，再由管理中心彙整前後照片、疑似異常與工單，供人員確認車況及追蹤處理進度。",
      "en": "Guides users through required camera angles, checks photo quality in real time, and brings before-and-after photos, possible anomalies, and cases together in the operations center for staff to review vehicle conditions and track progress."
    },
    "technology": {
      "zh": "影像分析使用 OpenCV、RapidOCR、DINOv2、SigLIP2。本機視覺模型使用 Qwen3-VL（Ollama），開發過程以 Claude 與 Codex 輔助。",
      "en": "Image analysis uses OpenCV, RapidOCR, DINOv2, and SigLIP2. Qwen3-VL runs locally through Ollama, with Claude and Codex assisting development."
    },
    "contribution": {
      "zh": "2026 和泰 AI 黑客松團隊專案。",
      "en": "Team project for the 2026 Hotai AI Hackathon."
    },
    "results": {
      "zh": "2026 和泰 AI 黑客松團隊參賽作品。在有限樣本 164 對的團隊評估中，誤報由 13 降至 5。AI 提供覆核線索，責任由人員確認，系統不自動判責或扣款。",
      "en": "A team entry in the 2026 Hotai AI Hackathon. In a limited team evaluation of 164 image pairs, false alarms decreased from 13 to 5. AI provides review cues, while staff determine responsibility. The system does not automatically assign liability or charge users."
    },
    "image": "assets/covers/irent.png",
    "imageAlt": {
      "zh": "iRent Guardian 智能車況管家 專題封面",
      "en": "iRent Guardian project cover"
    },
    "gallery": [
      {
        "src": "assets/pdf-projects/irent-guidance.jpg",
        "alt": {
          "zh": "引導拍攝與品質檢查，車牌已遮蔽",
          "en": "Guided photography and quality checks, with plates redacted"
        }
      },
      {
        "src": "assets/pdf-projects/irent-review.jpg",
        "alt": {
          "zh": "疑似異常集中呈現，交由營運人員覆核",
          "en": "Flagged cases collected for operations staff to review"
        }
      },
      {
        "src": "assets/pdf-projects/irent-operations.jpg",
        "alt": {
          "zh": "車況營運中心與工單追蹤",
          "en": "Vehicle operations center and case tracking"
        }
      },
      {
        "src": "assets/pdf-projects/irent-certificate.jpg",
        "alt": {
          "zh": "2026 和泰 AI 黑客松參賽證明",
          "en": "2026 Hotai AI Hackathon certificate of participation"
        }
      }
    ],
    "assistant": {
      "title": {
        "zh": "AI 助理來源歷程問答",
        "en": "AI Assistant: Q&A with Source History"
      },
      "description": {
        "zh": "借還車 AI 助理以檢索增強生成（RAG）回答營運問題。畫面示範依年度與主題查詢車損案件，從摘要追溯至下方的來源卡片。",
        "en": "The rental AI assistant uses retrieval-augmented generation (RAG) to answer operational questions. This example filters vehicle damage cases by year and topic and connects the summary to the source cards below."
      },
      "gallery": [
        {
          "src": "assets/irent/assistant-source-history.png",
          "alt": {
            "zh": "借還車 AI 助理的對話歷程、車損查詢結果與來源卡片",
            "en": "Rental AI assistant conversation history, damage query results, and source cards"
          }
        },
        {
          "src": "assets/irent/ai-technologies-vision.png",
          "alt": {
            "zh": "AI 技術與資源：照片品質檢查、車牌辨識、髒污框選和車損比對",
            "en": "AI methods: photo quality checks, license plate recognition, dirt localization, and damage comparison"
          }
        },
        {
          "src": "assets/irent/ai-technologies-assistant.png",
          "alt": {
            "zh": "AI 技術與資源：車身偵測、座位髒污篩檢與來源歷程問答",
            "en": "AI methods: vehicle detection, seat cleanliness screening, and Q&A with source history"
          }
        }
      ]
    }
  },
  {
    "id": "medical",
    "title": {
      "zh": "AI 初步醫療問診系統",
      "en": "AI Preliminary Medical Consultation"
    },
    "tag": "AI / Healthcare",
    "number": "02",
    "goal": {
      "zh": "用自然語言描述不適，取得初步科別建議，並保留問診紀錄。",
      "en": "Describe symptoms in natural language, receive a preliminary specialty suggestion, and save the consultation for later review."
    },
    "features": {
      "zh": "整合症狀諮詢、問診紀錄與緊急評估，系統保存日期、症狀、建議科別及說明，並提供低、中、高三種提示。",
      "en": "The app combines symptom consultation, consultation history, and urgency assessment. It stores dates, symptoms, suggested specialties, and explanations, and displays low, medium, or high urgency prompts."
    },
    "technology": {
      "zh": "Python、Flask、SQLite、Gemini API、提示詞設計與 PythonAnywhere。",
      "en": "Python, Flask, SQLite, Gemini API, prompt design, and PythonAnywhere."
    },
    "contribution": {
      "zh": "獨立完成需求規劃、網頁介面、資料庫設計、AI 串接與部署。",
      "en": "Independently planned the requirements, built the web interface and database, integrated the AI service, and deployed the app."
    },
    "results": {
      "zh": "完成可展示的醫療資訊輔助原型，涵蓋諮詢、紀錄及分級提示，原型尚未經臨床驗證，不能取代專業診斷。",
      "en": "The prototype demonstrates consultation, history, and urgency prompts. It has not been clinically validated and does not replace professional diagnosis."
    },
    "image": "assets/covers/medical.png",
    "imageAlt": {
      "zh": "AI 初步醫療問診系統 專題封面",
      "en": "AI Preliminary Medical Consultation project cover"
    },
    "gallery": [
      {
        "src": "assets/pdf-projects/medical-1.jpg",
        "alt": {
          "zh": "首頁導覽與自然語言對話",
          "en": "Home navigation and symptom conversation"
        }
      },
      {
        "src": "assets/pdf-projects/medical-2.jpg",
        "alt": {
          "zh": "問診紀錄與緊急評估",
          "en": "Consultation history and urgency assessment"
        }
      }
    ]
  },
  {
    "id": "portfolio-ml",
    "title": {
      "zh": "用機器學習選股與比較投資績效",
      "en": "Stock Selection and Portfolio Evaluation with Machine Learning"
    },
    "tag": "Machine Learning / Finance",
    "number": "03",
    "goal": {
      "zh": "運用台灣股票歷史資料建立投資組合，並與台灣加權股價指數比較。",
      "en": "Build portfolios from historical Taiwan equity data and compare them with the Taiwan Weighted Index."
    },
    "features": {
      "zh": "使用 TEJ 1999 年 1 月至 2025 年 2 月的資料，涵蓋 964 家上市櫃公司，分析公司規模、帳面市值比與動能。",
      "en": "The TEJ dataset covers 964 listed and OTC companies from January 1999 to February 2025. The study examines company size, book-to-market ratio, and momentum."
    },
    "technology": {
      "zh": "以 Python 比較線性迴歸、隨機森林與類神經網路，預測資訊係數（IC）。",
      "en": "Used Python to compare linear regression, random forests, and neural networks for predicting the information coefficient (IC)."
    },
    "contribution": {
      "zh": "實作資料清理、缺值處理、因子計算、模型建置與績效視覺化。",
      "en": "Implemented data cleaning, missing-value handling, factor calculation, modeling, and performance visualization."
    },
    "results": {
      "zh": "以累積報酬、勝率與夏普比率比較模型與市場基準。圖表呈現歷史回測結果。",
      "en": "Compared model portfolios and the market benchmark using cumulative returns, win rates, and Sharpe ratios. The figures show historical backtest results."
    },
    "image": "assets/covers/portfolio-ml.png",
    "imageAlt": {
      "zh": "用機器學習選股與比較投資績效 專題封面",
      "en": "Stock Selection and Portfolio Evaluation with Machine Learning project cover"
    },
    "gallery": [
      {
        "src": "assets/pdf-projects/portfolio-ml-1.jpg",
        "alt": {
          "zh": "模型與市場基準的回測比較",
          "en": "Backtest comparison of models and the market benchmark"
        }
      }
    ]
  },
  {
    "id": "jetbot",
    "title": {
      "zh": "JetBot 道路辨識",
      "en": "JetBot Road Recognition"
    },
    "tag": "Robotics / Computer Vision",
    "goal": {
      "zh": "在 CAVEDU 教育團隊帶領的校外實作課程中，探索道路影像如何轉換成行進方向。",
      "en": "Explore how road images translate into steering decisions in a hands-on course led by CAVEDU."
    },
    "features": {
      "zh": "蒐集道路影像、標註行進目標點、訓練模型，再用即時推論控制馬達。",
      "en": "Collect road images, annotate steering targets, train a model, and use real-time inference to control the motors."
    },
    "technology": {
      "zh": "NVIDIA Jetson Nano、Python、PyTorch、OpenCV、JupyterLab、ipywidgets。",
      "en": "NVIDIA Jetson Nano, Python, PyTorch, OpenCV, JupyterLab, and ipywidgets."
    },
    "contribution": {
      "zh": "參與課程中的影像蒐集、模型訓練與實車操作。",
      "en": "Took part in image collection, model training, and hands-on robot operation during the course."
    },
    "results": {
      "zh": "透過實車彎道測試，觀察影像輸入、方向預測與控制參數對車輛行進的影響。",
      "en": "Used physical track tests on curves to observe how image inputs, steering predictions, and control settings affect the robot’s motion."
    },
    "image": "assets/covers/jetbot.png",
    "imageAlt": {
      "zh": "JetBot 道路辨識 專題封面",
      "en": "JetBot Road Recognition project cover"
    },
    "gallery": [
      {
        "src": "assets/pdf-projects/jetbot-1.jpg",
        "alt": {
          "zh": "JetBot 實車道路測試",
          "en": "JetBot physical track test"
        }
      },
      {
        "src": "assets/pdf-projects/jetbot-2.jpg",
        "alt": {
          "zh": "即時推論與控制介面",
          "en": "Real-time inference and control interface"
        }
      }
    ],
    "number": "04"
  },
  {
    "id": "azure-game",
    "title": {
      "zh": "Azure 圖像辨識互動遊戲",
      "en": "Azure Image Recognition Drawing Game"
    },
    "tag": "Azure AI / Interaction",
    "number": "05",
    "goal": {
      "zh": "把圖像分類做成互動猜圖遊戲，玩家在畫布上畫圖，由模型猜測類別。",
      "en": "Turn image classification into an interactive drawing game in which the model guesses the category of a sketch."
    },
    "features": {
      "zh": "提供畫筆、橡皮擦、清除與猜圖功能。辨識 Happy、Sad、Speechless、Mad、Negative 五種類別。",
      "en": "The canvas supports drawing, erasing, clearing, and guessing. The model classifies sketches into Happy, Sad, Speechless, Mad, or Negative."
    },
    "technology": {
      "zh": "Python、Flask、Azure Custom Vision、Docker、Azure Container Registry（ACR）與 Azure Container Instances（ACI）。",
      "en": "Python, Flask, Azure Custom Vision, Docker, Azure Container Registry (ACR), and Azure Container Instances (ACI)."
    },
    "contribution": {
      "zh": "作品實作涵蓋自訂圖片集訓練、Flask 串接辨識服務，以及容器封裝與部署。",
      "en": "Project work included training on a custom image dataset, integrating the recognition service with Flask, and packaging and deploying the app as a container."
    },
    "results": {
      "zh": "完成畫圖、送出與回傳猜測的互動流程。訓練樣本有限，部分類別仍需增加資料並持續測試。",
      "en": "The app supports drawing, submitting a sketch, and displaying a prediction. The training set is limited, and some classes need more samples and further testing."
    },
    "image": "assets/covers/azure-game.png",
    "imageAlt": {
      "zh": "Azure 圖像辨識互動遊戲 專題封面",
      "en": "Azure Image Recognition Drawing Game project cover"
    },
    "gallery": [
      {
        "src": "assets/pdf-projects/azure-game-1.jpg",
        "alt": {
          "zh": "前三組遊戲辨識示例",
          "en": "First three drawing recognition examples"
        }
      },
      {
        "src": "assets/pdf-projects/azure-game-2.jpg",
        "alt": {
          "zh": "Speechless 與 Mad 辨識示例",
          "en": "Speechless and Mad recognition examples"
        }
      }
    ]
  },
  {
    "id": "garmin",
    "title": {
      "zh": "Garmin 手環數據分析",
      "en": "Garmin Wearable Data Analysis"
    },
    "tag": "Data Analysis / Wearables",
    "goal": {
      "zh": "整合活動、睡眠、血氧與心率資料，探索日常活動與深睡比例的關係。",
      "en": "Combine activity, sleep, blood oxygen, and heart-rate data to explore the relationship between daily activity and deep-sleep share."
    },
    "features": {
      "zh": "依步數、代謝當量（METs）與平均動作強度將每日紀錄分為三群，再比較活動指標與深睡比例。",
      "en": "Group daily records into three clusters using step count, metabolic equivalents (METs), and average movement intensity, then compare activity measures with deep-sleep share."
    },
    "technology": {
      "zh": "資料清理、每日彙整、K-means 分群、Pearson 相關分析與視覺化。",
      "en": "Data cleaning, daily aggregation, K-means clustering, Pearson correlation, and visualization."
    },
    "contribution": {
      "zh": "將多表資料整理成每日分析資料集，製作活動分群圖與相關矩陣。",
      "en": "Combined multiple tables into a daily analysis dataset and produced a cluster plot and correlation matrix."
    },
    "results": {
      "zh": "三群深睡比例的中位數接近。METs 與深睡比例的相關係數約為 0，總睡眠時間與深睡比例為 −0.27。這些是本資料集中的關聯，深睡比例只反映睡眠的一個面向。",
      "en": "Median deep-sleep share was similar across clusters. Its correlation with METs was approximately 0 and with total sleep duration was −0.27. These are associations within this dataset, and deep-sleep share captures one aspect of sleep."
    },
    "image": "assets/covers/garmin.png",
    "imageAlt": {
      "zh": "Garmin 手環數據分析 專題封面",
      "en": "Garmin Wearable Data Analysis project cover"
    },
    "gallery": [
      {
        "src": "assets/pdf-projects/garmin-1.jpg",
        "alt": {
          "zh": "每日活動分群散佈圖",
          "en": "Daily activity cluster plot"
        }
      },
      {
        "src": "assets/pdf-projects/garmin-2.jpg",
        "alt": {
          "zh": "睡眠與活動指標相關矩陣",
          "en": "Correlation matrix for sleep and activity measures"
        }
      }
    ],
    "number": "06"
  }
];
