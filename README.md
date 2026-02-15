# 🚀 Swiftchat Leads

Swiftchat Leads is a lightweight, browser-based lead capture system that collects structured user details along with inbuilt audio recordings. The platform automatically stores form responses in **Google Sheets** (as a live database) and uploads recorded audio files to **Google Drive**, appending the Drive file link directly into the sheet.

It is fully static, deployed via GitHub Pages, and built entirely using CDN-based libraries with no backend server infrastructure.

---

## 🌐 Live Deployment

Hosted on **GitHub Pages**  
No build tools, no server setup, zero-cost deployment.

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
- Google Sheets API (via Apps Script)
- Google Drive API (for audio storage)

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
- Form data is pushed to Google Sheets via Apps Script Web App
- Each submission creates a new row
- Audio Drive link automatically appended to corresponding entry

### ☁️ Google Drive Storage
- Audio files uploaded to a designated Drive folder
- Public/shareable Drive URL generated
- Link mapped to the respective sheet row

### 🎨 Smooth UI Animations
- GSAP-powered transitions
- Interactive form effects
- Improved user engagement

---

## 🔄 System Architecture

```
User Browser
    ↓
HTML Form + Audio Recorder (JS)
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
└── assets/             # Icons or static resources (if any)
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
4. Add:
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

## 🔐 Permissions Required

- Microphone access (for audio recording)
- Google Drive access (handled via Apps Script)
- Google Sheets write access

---

## 📌 Use Cases

- Field lead collection
- Education enrollment forms
- Government data collection drives
- Tele-calling lead capture
- Survey forms with voice evidence

---

## 🚀 Advantages

- Zero backend hosting cost
- No server management
- Fully browser-based
- Simple to customize
- Scalable via Google infrastructure

---

## 📄 License

This project is open-source and available under the MIT License.
