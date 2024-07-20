//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "banditmgeni8@gmail.com";
global.location = "Dar es salaam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/blackiezero/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255620330592";
global.sudo = process.env.SUDO || "255620330592";
global.owner = process.env.OWNER_NUMBER || "255620330592";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "true";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJPYXhMUGdRTXRpNXBhRXFzSEVEQVIvblRJMTFWS25jVG5jWFlRWXFIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWRGQTQ4cmhtanRLdVQzc3grbEdnQ3hGSVhhZ0ZTelVzblI2aHY5bUt6ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTU5wVlgxTThkejNFMnpDbTZGTWhSSjZtVDNTQXJSL1hpbDlZcFFUMDIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKY1g3WC92SURLTEFPbUlsaEdzMGdxK3VINGRFeDNEYnduNndaNnRDY1R3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdOTTBqaWo0cDF0WWZIZVpWM2V2RWs0SlZZd2RpelRwNURBV3NIUlBvRk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HL0hWY21maE9uTDd2cUpxRDV5VUl5eU1HZFpLRnc1R1R5RnFSYjVwZ0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdkRXVhb2M0SnBtcDRpazVJVVQzSjZnV1ZYdzNya1V2MlZwamNCRUxGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVRMS3liRjZoL0wrOW5FKy9NOTlwd0xFa2txTlB2c1FpN3R4REF0K0VXWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii81ZmRxQXl0aTNGS3BaZEdpbzZIcXkwRy9DTVB3K1lCUWdXbE82NjJHdGpyczcxSHJ1TlNlNldnUzlua1dScUJFQWdjQTkzVlpsbHFMU0tib05MOWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJxdG45SUF6TjhNWDBzZEVzRTZNTVMyMGNEVHVZRFA1VXJLa3hycjhza21ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTYyMDMzMDU5MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDQjEzQzJFOEU0QkE5NzhFRDJFQzE4RDkyRTU5NDU3MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNTE1MzI1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU2MjAzMzA1OTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTc5NkU5NkQ0MkIxNDhEMjM4NTMxMzE4MzQ1QTQzMDIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTUxNTMyNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidEZRTDdRc01UYjY0T0IyMmhCWlNYQSIsInBob25lSWQiOiI4OTA1OTg4Mi0yZWFhLTQ1MWEtYmUxNi00MTg3Y2I5MDcxODMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2x1TjlubmU0M0VzbjBVb0lnQm43emtOTjFFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVTSEF1eGVhdXNERnJqU1dadU5pMG9JLzJIcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzVjVHQlJWMSIsIm1lIjp7ImlkIjoiMjU1NjIwMzMwNTkyOjI2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQajQ5N0VERUt6NjhMUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWMkRrRHM3bmdzVGdwQ2FQMkVOa3o5SjVuT0FQYUttSVIxYnRoK3gyYUVzPSIsImFjY291bnRTaWduYXR1cmUiOiJkMStlQjJqblVQd2hJN3hEajFYcWl5WnFlRWp5VUpwSmtBSitibE9Zc1FOMnFJWGE2bXBZRHhSYytKMGZhQ0w5bGNaOGFQNDUyNkt6Z2prdDlqZE1Edz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNTg5bXp6eXdQaGRJWWJVa2Uvd1lUbDF1K0hYNnZVL1FqbXF3THN1MnF3WEk5emRSbmVhOGVFQkF3N3dhZUNLaGZsOTE3UlZ0dXZnRjd6RngxNU5naVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU2MjAzMzA1OTI6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmRnNUE3TzU0TEU0S1FtajloRFpNL1NlWnpnRDJpcGlFZFc3WWZzZG1oTCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTUxNTMyMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFRE0ifQ"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-BLACKIEZERO-𝐌𝐃 ╠════ need support then ☞ https://rb.gy/izabex ═════╣",
  author: process.env.PACK_AUTHER || "BLACKIE ZERO 9",
  packname: process.env.PACK_NAME || "😎",
  botname: process.env.BOT_NAME || "BLACKIEZERO-MD",
  ownername: process.env.OWNER_NAME || "BLACKIEZERO",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
