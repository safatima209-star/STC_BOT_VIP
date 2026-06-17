/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['212617503205'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['STC :The New Gen', 'Imrane Moussaid'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'STC Bot Vip',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9lY161ZjhpqgRHbFyERERBBR1Yx5KKKAUCpoqUZzw3zewu2fmYXe2962umSfPOZnfASkxRRZqweQ7qGrcQIa6JWsrBCZAuSQJqkEfxJBBMAGSOiYlRwrRWCROxedsBdemZgvhbFW0mk3xYXRYLmY4m+kv4NEH1eWY4+g3Ac2tXAihL6qVvzXsRPKL3HKKezBO8riRlqqv9hpDDIxAL1/Ao4sIcY1JqlcZKlANcwu1LsT15+BfZuatpuR2kdv5KTiFeUnTYsdBN9zi4vVwuB3MWIy0RhPKz8E/tueML1XB24jHudPDYzkxpbRR20WJt2SDtVu+2aC63XrcG3yKU4JiM0aEYdZ+mndraVxtbVRJXACvq4E9s3giK3wKkWP7eiwm4SxVNM5ZCevPAbeUzat8HR6CwX6c+UTi3Wa9XqydVTtOcl52r0loZj2vV6j7X4G79YdXzv+Hd6SUZrXazVx164u48XazQ5xbLN0TtvfM9DStBoJ63ciD+fVz8IcOnTaXUe5VRa/aq+oc2avjYLu5XZTNNZD1nsgty/DeGz/5eIcP2aX+HcrV0Cqkdr8ft3agyPRukJJbZuPjyjrle9/NQ/6OQv3mEqTTduVolemIo+j1miT1mG9W/K2Wj2F+lK/2sTe0yFTzeCNbvzwrOqPWjMGEf/RBjVJMWQ0ZLkl3Joh8H8C48VFUI/akF9icvd8ZprHg2Tw7j8OR49sxLxbwKB6DBp1ETmxcMrJ1en4BfVDVZYQoRfEcU1bWrY0ohSmiYPLXtz4g6MbehOvSddkSXFO2IZcqL2H8oerHJYyi8kKY35JI7RaoBhPu5zFiDJOUdjxeCKyjDDdIzSCjYJLAnKIfFaIaxWDC6gv60bVqGXfEL0J/vR7aPOiD4ikIjsEECLww5OUBJwrcYDIQ/qRfrl1YWFVfCGKgDwjsXgM/UP9QnOCPremCPsiff3lelEeCLImiPOR5sfveXTx+wO6yxIhBnFMwAaqLzkW00XSrV95XumFM9XSqplPws8wPv7zp4ULuNl4NFkjJ1K/1tvXK1QbR6+50UPR25OCvTm7NJCMjAffyD0HABFQXw5NkVl+ZH6YzLzIrd2eMhoI07d1v1PMPHsHhQb27eWHcVI2zWRYwhqEjSLoziLj5lnq7+Y0Ey2hBzfBkT+2p1pmrD2LU4Aj9muw1PN4c/nTW6/ISCd5eLQXLPqM0wEfIS25ZqVnaBqeTfz5I+mgcOCIJ97HJFWmiU806qcbXeE7scWKbYRT5qFFE4zR9c/Kzk/L3CYafHusE7LYJRs+B8C7Ufwr6BrzzHffo/xLjfcT8S5sqgcDsJED+Lt2vmyEfnaG2ndf2TBLWnt1oZXOv/Awp5YEbg8fjWx9UOWRJWRdgAmhxhKAP6vLSudgkSfmbTOr0bCrrdNmVnUPKpj87I8AFogwWFZjw8oiXRUHiho+/AUm/u3tPBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'STC Bot VIP',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Morroco/Rabat',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/hassanalami',
      instagram: 'https://www.instagram.com/fifa/',
      youtube: 'https://www.youtube.com/@fifa/videos'
    }
};
  
