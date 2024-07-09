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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEt3WFBHRUlMUU1zT3BNQnAxa0htMlBQK0U4YVJkVUwwM3BaQldwVTUzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3lHZ05LNjBzYW5NYVEyb0ROUGc4dTdLSVNGY2NNUkFtSDI5TmUyYlFqQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSGhIdWRvMmpXbitzajRaSm9VNkRQc0ZkOHdKOVV6d2hDaC9UQU11YjJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkNW1LbWtZNUw5T0phb3djcHZqUmVEUTRvVjFQNGhic0ZUN3dFUFFTakVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFPQjJJYWErZ1dUbmZESFZaWkhDdXhITTVTT3lBV2hZU1RzbTI1TFkxM2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN3SFVCUHNPWUt4WXJncncydVFBYURQd2VxNEI5c2lDN3Vab0hyRkZOMjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUM2bFVHSmF1cldjZXA2NXgvRE1IaldXMGlmSC82akZjMU55OHVBbVFHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickd2Z3ErUXpiZHJpL3lHZmd3eitqbWJLQnc3c3ZzbEgvZmhURngzKzNudz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJlRGZ3NThnRS9ESi9IdFg4QVhZaHhYVjRjMFlta0ZWMEttWFZ3bEVQOTAxUy9qV2xCTmdXNHM1bWthK0VNVVQ2YUpDYUJEM0lyc0ZOVmJUSzZqT2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg3LCJhZHZTZWNyZXRLZXkiOiI3b2d0cmw5WEJLdmd2YnFVM0lWTVhtOWFnUXp4WXpNYVdoTEtUV2lscFU0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOYS05TUNjOFJ6bTZhRE5HbzNuRW5BIiwicGhvbmVJZCI6IjY2ZjRkZjM0LTk0ZTQtNGEzNS04NDdhLThjYjIxYzRjY2QxNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjaSticTJwN2FweU90QXF2TTNRcGVaSlh3bkE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJteDhLSFpJOWhiTUhzelJZV2Q3azhGb3ZSND0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tMSjJJTUJFTjZMdGJRR0dBc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJNZW4rNlZWNzFEUWhrUWhBV2JLOER3VTU2MnV1VkRkMTdFRlpIcXFsUmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InpxRGpFSEo4U1AyaXVqTEZqRUdmeDU3L2FucEo4bDg2WlAweW9DdUJnejFnUzdDZE1jUWlDaEVSR1Q2ZitacU5kVVFrTDhUc1EyU0xNcjdBclRJUENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJONHI0K1lTL1hSV2Y4QXQ0SHpkVGlGVjY5WXhoK3IxTG5qcTVldTdmcWp3UCt0ank3cy9INXlBRDMzQnBRYmFjMUtkWkxtdFIzd0lPOWZDTmRlS3NnQT09In0sIm1lIjp7ImlkIjoiMjU1NjIwMzMwNTkyOjIzQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTYyMDMzMDU5MjoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhekhwL3VsVmU5UTBJWkVJUUZteXZBOEZPZXRycmxRM2RleEJXUjZxcFVYIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNTM0NDk3fQ=="
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
