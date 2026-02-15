# 🚀 Swiftchat Leads

Swiftchat Leads is a lightweight, browser-based lead capture system that collects structured user details along with inbuilt audio recordings. The platform automatically stores form responses in **Google Sheets** (as a live database) and uploads recorded audio files to **Google Drive**, appending the Drive file link directly into the sheet.

It is fully static, deployed via GitHub Pages, and built entirely using CDN-based libraries with no backend server infrastructure.

---

## 🌐 Live Deployment

Hosted on **GitHub Pages**  
No build tools. No server setup. Zero-cost deployment.

---

## 🏗️ Tech Stack

### Frontend (Static Web App)
- HTML5
- Tailwind CSS (CDN)
- Bootstrap 5 (CDN)
- Font Awesome (CDN)
- GSAP (CDN animations)
- Vanilla JavaScript (ES6)

### APIs & Integrations
- Google Apps Script (Web App endpoint)
- Google Sheets (Database layer)
- Google Drive (Audio storage)

---

## ✨ Core Features

### 📝 Lead Capture Form
- Collects structured user inputs (name, phone, details, etc.)
- Client-side validation
- Responsive UI (Bootstrap + Tailwind hybrid styling)

### 🎙️ Inbuilt Audio Recorder
- Uses the **MediaRecorder API**
- Start / Stop recording functionality
- Audio blob processing before upload
- Automatic Drive upload

### 📊 Automated Google Sheets Database
- Form data pushed to Google Sheets via Apps Script Web App
- Each submission creates a new row
- Audio Drive link automatically appended to corresponding entry

### ☁️ Google Drive Storage
- Audio files uploaded to a designated Drive folder
- Public/shareable Drive URL generated
- Link mapped to the respective sheet row

### 🌐 Offline & Network Failure Handling (Advanced Reliability)

Swiftchat Leads is built to handle unstable or intermittent internet connectivity.

- Detects network status using `navigator.onLine`
- If user goes offline while filling the form:
  - Form data is saved locally (LocalStorage / IndexedDB)
  - Audio blob is temporarily stored in browser memory
- If user closes the tab during offline mode:
  - Data persists locally
- When internet connectivity is restored:
  - On reopening the form, pending submissions are automatically detected
  - Data and audio are uploaded to Google Drive & Sheets
  - Local cache is cleared after successful upload

This ensures **zero data loss during field data collection**.

---

## 🔄 System Architecture

```
User Browser
    ↓
HTML Form + Audio Recorder (JS)
    ↓
Offline Handling Layer (LocalStorage / IndexedDB)
    ↓
Google Apps Script Web Endpoint
    ↓
1. Upload Audio to Google Drive
2. Store Form Data in Google Sheets
    ↓
Append Drive Link to Sheet Row
```

---

## 📁 Project Structure

```
Swiftchat_leads/
│
├── index.html          # Main application file
├── script.js           # Form logic, audio handling, API calls
├── style.css (optional)
└── assets/             # Icons or static resources
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/repo-sumit/Swiftchat_leads.git
cd Swiftchat_leads
```

---

### 2️⃣ Setup Google Apps Script Backend

1. Go to https://script.google.com
2. Create a new project
3. Connect it to a Google Sheet
4. Implement:
   - Drive file upload logic
   - Sheet append row logic
5. Deploy as:
   - Web App
   - Execute as: Me
   - Access: Anyone

6. Copy the Web App URL

---

### 3️⃣ Update Endpoint in `script.js`

Replace:

```javascript
const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
```

With your deployed Apps Script URL.

---

### 4️⃣ Deploy to GitHub Pages

1. Push code to GitHub
2. Go to:
   - Repository → Settings → Pages
3. Select:
   - Branch: main
   - Folder: /root
4. Save

Your app will be live.

---

## 🔐 Browser Permissions Required

- Microphone access (for audio recording)
- Internet access (for submission sync)
- Google Drive & Sheets access (handled via Apps Script)

---

## 📌 Use Cases

- Field lead collection
- Education enrollment drives
- Government surveys
- Tele-calling lead capture
- Survey forms with voice validation
- Rural/offline-first data collection environments

---

## 🚀 Key Advantages

- Zero backend hosting cost
- Offline-first reliability
- No server management
- Fully browser-based
- Easily customizable
- Scalable via Google infrastructure

---

## 📄 License

MIT License
