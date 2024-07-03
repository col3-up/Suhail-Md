const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="pelumifrost@gmail.com"
global.location="Lagos, Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Abuja";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/message/64KBVNWDMXWQJ1";
global.website=process.env.GURL || "https://wa.me/message/64KBVNWDMXWQJ1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348078595608";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078595608";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_01_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQyLFxuICAgICAgICA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwLFxuICAgICAgICA0MixcbiAgICAgICAgMjA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA1LFxuICAgICAgICA1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDgxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjksXG4gICAgICAgIDc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NixcbiAgICAgICAgMTc0LFxuICAgICAgICA3NixcbiAgICAgICAgMTg1LFxuICAgICAgICA3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MixcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzLFxuICAgICAgICA5LFxuICAgICAgICAzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBvbmVXbzJ2b0JYajVSaG9SNUJBZ1l2UGdtcDJtZkEyanNCTm5wblNEQU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJUSWRid3VFU29xQmNoak5kVWg5OGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDVhYzJkZWItNWMxMC00NzgwLTk4YjEtZDdlNmEzZWRhZjc1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMTQsXG4gICAgICAyMzksXG4gICAgICAxMTIsXG4gICAgICAzOCxcbiAgICAgIDQ0LFxuICAgICAgNjMsXG4gICAgICAxNjgsXG4gICAgICAxNjUsXG4gICAgICA1MixcbiAgICAgIDIzNixcbiAgICAgIDgxLFxuICAgICAgMjI1LFxuICAgICAgMjAwLFxuICAgICAgMTM0LFxuICAgICAgMTA2LFxuICAgICAgMjI2LFxuICAgICAgMzEsXG4gICAgICA5NCxcbiAgICAgIDIyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICAyMixcbiAgICAgIDY3LFxuICAgICAgNzEsXG4gICAgICA1OCxcbiAgICAgIDY3LFxuICAgICAgMjMxLFxuICAgICAgMTQzLFxuICAgICAgMSxcbiAgICAgIDE0NyxcbiAgICAgIDIyOSxcbiAgICAgIDkwLFxuICAgICAgMTMzLFxuICAgICAgMTg4LFxuICAgICAgMjM2LFxuICAgICAgNTEsXG4gICAgICAxNzksXG4gICAgICAxMTEsXG4gICAgICA4MCxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIWTIyR0FFMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA3ODU5NTYwODoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlBlbHVtaSBGcm9zdFwiLFxuICAgIFwibGlkXCI6IFwiMjY4ODY1Mzg4OTc4MjkwOjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01INStxd0dFTisvbHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTDhWTWRHT2VMRkh0d3R5RWhiNE5YWHFMSWFueUZIRXFxejdqQ0J5K1NXbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1aXFKdTBHK0ZJdlYvRU9iWW54bEV2cFROS0YzRWUvSHpKYXdXNUdHRmlMRmd5eklLYmhDSzlDQ3FVNnZPK0pCOVJOWG1nN0RjL0R0ZGZVSkpPSGhCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwMW9mOFNPNkxsOXY0WE1EZXREcGRidERBRVhtTmJ5Um50WmIxNnpTNHZ0MWhMRVJlL3AwMWhrRmVDNUlFTnd1QWQ3d0lRSHBSdi9weEhJR3NWMnRqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc4NTk1NjA4OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDMzMjUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVFVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJUVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNZ1dLaUtVSVpQa3owMzc4Uzl1Sm1sOXF4UXFDZHZzTE0wckZtVnBma0VjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MDQ5MDE4MjQsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Frosby bot",
  ownername:process.env.OWNER_NAME|| "Pelumifrost",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "Untitled API Key (2024-07-03 07:53:02)",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
