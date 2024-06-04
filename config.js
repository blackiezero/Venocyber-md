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
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "true";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUprNXZRazNCYUJudWIwVkpxa2M1eTdGS09NdkJCSTc0SkRJT3NqSWJIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzFvQVZSdHpseS9IU2x6OUpyUkpWZXhDV014RDFTQVM2bjBUU0M0TDFGYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTGZFSGNyQUhhcTllNzZYTEcwOXlRcThTZHdUa0F4aXlqMjV2SHlSbVZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2ajZvczcyNzRBOHFZbzRQbW5RNTQ4Y0ZhVzBCWS96dm12ZTF1N3lrYUFBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVHc2dKWk85SUpwTFlXL0FBamwzTGUyUjlnYnZjU0NHcTVrc2dVbklzbEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZnNFZVMDNmejYzOUg3dkxZTHJNYXg2dHlydWY0cllySXdqVmhmM0NtZzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVBQV2hnRjNkbzZUUHdtRjdEZ2lVR3ZaRnl6SERnUHB0NnoycFZtWkRFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXltdHdmdlNhSkgzam5nMXMvWFZodUhqSXg1OVo0ZkdrNmJsR0EySHJDTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV0MGZVV3hRbTFBdHpzTzcxUjhWMnA5Vy9sRDN0RlVSZXFYS2o1c1FXS2VaNU94ekdpa0RiRlByT0hsNG5yL0dLa3BoWEkrdDEyZkJmTzNqUXhTVEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiI5azlpMk5oRzlpVStuQkt6Yks2MnZJVW5kaXFocWoxWll6UmxWVTh1RnY4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5VTJQc19PcVF0YVQ4TWJNVmpoa0ZBIiwicGhvbmVJZCI6IjAxMTBiMzk1LWY1OWEtNDkxYy04NzAzLWUzOGU1Yjg4MGJlYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3ZGhaRER0alptMkVFYnJIZXpicnV5K1V5WDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkVsNlBhQWpjajJsa3NVMFkzNkVjQktsOFJzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlkzUlhINVFOIiwibWUiOnsiaWQiOiIyNTU2MjAzMzA1OTI6MTlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tMSjJJTUJFUDdLK2JJR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJNZW4rNlZWNzFEUWhrUWhBV2JLOER3VTU2MnV1VkRkMTdFRlpIcXFsUmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkU4U1lJM3pBdU9HdUIzcWd5anQyL3h6ZkNPenAxL3JyWVNyUmN5eS9WS0RXYkppUnFERnFFdW0rNW02VVNtZ3NSYi92azgvK2MrZVRNbUdvcWpIbEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpRUQrdUJIOXUwSkJQYWtwV3IwSEJOU3Q3c2VEZFN2STluZ2VsZ2ZmcFE4bEdqU1AySEl4d25lOEk4Y3VkMDhPS3BwU1RVRlpML2lDZ1g4Q2J6THJDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTYyMDMzMDU5MjoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhekhwL3VsVmU5UTBJWkVJUUZteXZBOEZPZXRycmxRM2RleEJXUjZxcFVYIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE3NDYyNDEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZyeSJ9"
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
