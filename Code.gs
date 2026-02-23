const SPREADSHEET_ID = "1P9omQdNOL0n6GqO1EwtW6oJ2veGQRXb_nFqOkQTQocU";
const SHEET_NAME = "Leads";
// Use folder ID (not full URL). This is the ID from your link:
const DRIVE_FOLDER_ID = "1jH54CBlLEs9pXrMOBqABjAdPy_zgpge1"; // keep "" to save in My Drive root


function doPost(e) {
  try {
    const raw = (e && e.postData && e.postData.contents) ? e.postData.contents : "{}";
    const payload = JSON.parse(raw);

    if (payload && payload.__ping === true) {
      // Permission check: open the sheet to validate access without writing a row.
      getSheet_();
      return json_({ ok: true, mode: "ping" });
    }

    const sheet = getSheet_();
    ensureHeader_(sheet);

    const now = new Date();
    let audioFileId = "";
    let audioFileUrl = "";

    if (payload.voiceNote && payload.voiceNote.base64) {
      const mimeType = String(payload.voiceNote.mimeType || "audio/webm");
      const ext = extFromMime_(mimeType);
      const bytes = Utilities.base64Decode(String(payload.voiceNote.base64));
      const safeName = sanitize_(payload.name || "lead");
      const ts = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyyMMdd_HHmmss");
      const fileName = "swiftchat_" + safeName + "_" + ts + "." + ext;
      const blob = Utilities.newBlob(bytes, mimeType, fileName);

      const file = DRIVE_FOLDER_ID
        ? DriveApp.getFolderById(DRIVE_FOLDER_ID).createFile(blob)
        : DriveApp.createFile(blob);

      audioFileId = file.getId();
      audioFileUrl = file.getUrl();
    }

    sheet.appendRow([
      payload.timestamp || new Date().toISOString(),
      arr_(payload.intent),
      arr_(payload.orgType),
      payload.stage || "",
      arr_(payload.problemAreas),
      payload.otherProblemText || "",
      payload.name || "",
      payload.orgName || "",
      payload.email || "",
      payload.mobile || "",
      payload.notes || "",
      audioFileId,
      audioFileUrl,
      payload.voiceNote ? payload.voiceNote.mimeType || "" : "",
      payload.voiceNote ? payload.voiceNote.sizeBytes || "" : "",
      payload.voiceNote ? payload.voiceNote.durationSec || "" : "",
      payload.userAgent || "",
      payload.source || "",
      JSON.stringify(payload)
    ]);

    return json_({ ok: true, audioFileId: audioFileId, audioFileUrl: audioFileUrl });
  } catch (err) {
    return json_({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  return ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow([
    "timestamp", "intent", "orgType", "stage", "problemAreas", "otherProblemText",
    "name", "orgName", "email", "mobile", "notes",
    "audioFileId", "audioFileUrl", "audioMimeType", "audioSizeBytes", "audioDurationSec",
    "userAgent", "source", "rawJson"
  ]);
}

function arr_(v) {
  return Array.isArray(v) ? v.join(" | ") : "";
}

function extFromMime_(mime) {
  if (mime.indexOf("ogg") >= 0) return "ogg";
  if (mime.indexOf("mp4") >= 0) return "m4a";
  if (mime.indexOf("mpeg") >= 0) return "mp3";
  return "webm";
}

function sanitize_(s) {
  return String(s).replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 40);
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
