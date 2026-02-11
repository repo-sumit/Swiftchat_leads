diff --git a/c:\Users\Sumit Kumar\Downloads\README.md b/c:\Users\Sumit Kumar\Downloads\README.md
new file mode 100644
--- /dev/null
+++ b/c:\Users\Sumit Kumar\Downloads\README.md
@@ -0,0 +1,83 @@
+# SwiftChat Lead Capture Form
+
+Mobile-first multi-step lead capture form for SwiftChat, built as a static GitHub Pages app.
+
+## Live DM Link
+
+- Google Sheet (Live Database):  
+  https://docs.google.com/spreadsheets/d/1DZlmpxJxSHL9y5SwhfIx3yA160Uv8CUtht-RyRnXxZA/edit?usp=sharing
+
+## What This App Does
+
+- Step-based lead capture flow (Landing -> Step 1 to Step 6 -> Success)
+- Captures intent, org profile, stage, problem areas, contact details, and notes
+- Optional in-browser microphone recording with waveform + timer
+- Sends payload to Google Apps Script Web App endpoint
+- Stores failed submissions in localStorage queue and auto-retries when online
+
+## Tech Stack
+
+- Tailwind CSS (CDN)
+- Bootstrap 5 (CDN)
+- Font Awesome (CDN)
+- GSAP (CDN)
+- Vanilla JavaScript (no build tools)
+
+## Project File
+
+- `index.html` (single-file app: UI + CSS + JS)
+
+## Local Run
+
+From this project folder:
+
+```powershell
+python -m http.server 5500
+```
+
+Open:
+
+```text
+http://localhost:5500/index.html
+```
+
+## Configuration
+
+In `index.html`, verify:
+
+- `APPS_SCRIPT_URL` points to your deployed Web App `/exec` URL.
+- `SOURCE_TAG` is set for your campaign/source tracking.
+
+## Submission Payload
+
+The form sends:
+
+- `timestamp`
+- `intent[]`
+- `orgType[]`
+- `stage`
+- `problemAreas[]`
+- `otherProblemText`
+- `name`
+- `orgName`
+- `email`
+- `mobile` (normalized)
+- `notes`
+- `voiceNote` (optional: mime type, size, duration, base64)
+- `userAgent`
+- `source`
+
+## Offline Resilience
+
+- Queue key: `swiftchat_lead_queue`
+- If submission fails, payload is saved locally
+- Auto sync attempts happen on load and when connection returns
+
+## Deploy (GitHub Pages)
+
+1. Push `index.html` and `README.md` to your repository.
+2. Enable GitHub Pages in repository settings.
+3. Ensure your Apps Script deployment is:
+   - Execute as: `Me`
+   - Who has access: `Anyone`
+
