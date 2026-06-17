const fs = require('fs')
const path = './userCodes.json'
const proPath = './database/pro.json'
const OWNER_NUMBER = '212617503205'

const codes = [
"FIFA-A7B2-K9M4-2026","FIFA-P3R8-T5W1-2026","FIFA-Z6X1-V2N7-2026","FIFA-Q9L4-J8H3-2026","FIFA-M5D0-C6F9-2026",
"FIFA-S2K7-Y1B5-2026","FIFA-N4G8-R3P0-2026","FIFA-T7V2-E9U6-2026","FIFA-W1F3-L4M8-2026","FIFA-C0H5-Z6Q2-2026",
"FIFA-B8J9-K1S4-2026","D3P6-T7X0-2026","G5M2-V8N1-2026","H9R4-F0W3-2026","J2L7-C5B9-2026",
"K6N0-Y8D4-2026","L1S3-M7P5-2026","V4T8-G2Q6-2026","X9W5-H1Z0-2026","Y3C7-J6K8-2026",
"Z0F1-R9S2-2026","A5B8-T4V7-2026","P2K9-L3M6-2026","Q7D1-N0G5-2026","R4H6-C8J3-2026",
"S9V2-W5X0-2026","T1M7-Y4Z9-2026","U6L0-F3P8-2026","V8J4-K2R1-2026","W3N5-D7S6-2026",
"X9B0-G1H4-2026","Y2P6-T8V3-2026","Z7C4-M5W9-2026","A1R8-L0Q2-2026","B6S3-K9F7-2026",
"C4T0-J5N8-2026","D8V9-H2X6-2026","E5W1-Z7P4-2026","F3M7-Y6B0-2026","G9N2-C1S5-2026",
"H0L8-R4V3-2026","J5Q6-T9W7-2026","K2Z4-P8M1-2026","L7F3-B0G9-2026","M1H5-V6K2-2026",
"N8D9-J4S7-2026","P3X0-W2C6-2026","Q6Y1-L5T8-2026","R9V4-Z3N0-2026","S7B2-H8F5-2026"
]

const loadData = () => fs.existsSync(path)? JSON.parse(fs.readFileSync(path)) : {}
const saveData = (d) => fs.writeFileSync(path, JSON.stringify(d, null, 2))
const loadPro = () => fs.existsSync(proPath)? JSON.parse(fs.readFileSync(proPath)) : []
const savePro = (d) => fs.writeFileSync(proPath, JSON.stringify(d, null, 2))

const activatePro = (num) => {
    const pro = loadPro()
    const jid = num + '@s.whatsapp.net'
    if (!pro.includes(jid)) {
        pro.push(jid)
        savePro(pro)
        return true
    }
    return false
}

const handler = async (m) => {
    const sender = m.sender.split('@')[0]
    const body = m.text.trim()

    if (body.startsWith('.codecoupon+')) {
        const inputCode = body.split('+')[1].trim().toUpperCase()
        const data = loadData()

        if (!data[sender]) data[sender] = { used: [], claimed: false }
        if (data[sender].claimed) return m.reply('You already confirmed a code.')

        const allUsed = Object.values(data).flatMap(d => d.used)
        if (allUsed.includes(inputCode)) return m.reply('Code already used.')

        if (!codes.includes(inputCode)) return m.reply('Invalid code.')

        data[sender].used.push(inputCode)
        data[sender].claimed = true
        saveData(data)
        activatePro(sender)

        return m.reply(`confirmed\nPro activated.\ndo not Share The Code\n©️STC BOT VIP 2026`)
    }

    // General commands - أي واحد يقدر يديرهم
    if (body === '.codes') {
        const data = loadData()
        const total = Object.values(data).filter(d => d.claimed).length
        const rem = codes.length - total
        return m.reply(`Claimed: ${total}\nRemaining: ${rem}`)
    }

    if (body === '.reset') {
        fs.writeFileSync(path, '{}')
        return m.reply('All data reset.')
    }

    if (body.startsWith('.last ')) {
        const num = body.split(' ')[1]
        const data = loadData()
        if (data[num] && data[num].used[0]) return m.reply(`Last code for ${num}: ${data[num].used[0]}`)
        else return m.reply('No code found for this number.')
    }
}

handler.command = /^(codecoupon\+|codes|reset|last)$/i
module.exports = handler
