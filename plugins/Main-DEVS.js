var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "𝐇𝐞𝐲" }, "message":{ "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let pp = './Assets/XLICON-V2.jpg'

const cat = `*_GOJO MD_*


*_—🔰 GOJO MD  𝐃𝐄𝐕 𝟏 wa.me/+2348026018074 %dont_contact_me%_*

*_—🔰 GOJO MD  𝐃𝐄𝐕 2 wa.me/+2348026018074_*
*---------------------*


*_ᴛʜᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ_*
*${developer}*`

await conn.sendFile(m.chat, pp, 'menuvid', cat, fkontak)
}
handler.help = ['devi','maindev']
handler.tags = ['info']
handler.command = /^(maindev|devi)$/i

export default handler
