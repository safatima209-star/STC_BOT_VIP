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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2ZKiSBT9lYl81WhZZNGIihgEVFTcAC2d6IcUEkhZTZLNDv99Aquqqx9memp4SnK599xzzr0/QJrhAi1RC8Y/QE5wBSnqlrTNERiDSen7iIA+8CCFYAyypd3LveAQOGfaWwb7QvP3Vebjo8jMLCbygsHJUnqKmer6C3j0QV5eYuz+JqBXHnj74hw5Egh3dTgaoVgiuS71kAH3Tn0LJLipmuX+qEUv4NFFhJjgNNDzECWIwHiJ2i3E5Gvw3Xk5cJJ0Hd81M16WR1Ngp/eMCs7dU1aja+3NtGhTmeZ86nwNvlbDzVz02eY6WJH8OB3OZpLQDD05Pt8vplk0in5RjSSUleEb/AIHKfIMD6UU0/bLvG/WnDHLU8K9crcoKdObhCW5LTWrttFREl73xXrlc6tmwxhfAy6sQ9U/6NN0qvKa7l+FpJSO+5vsntpoqm2P12vjsxUdLJrgV+Bb8uGV6P/wHumSV8nblXcdXJO2PB8sBYZO69r8ra1DY3QX7wVj7QJj+kX4qpeJ2D70rMUoEdZnUz/FQ9/lt8TZhk5D65FtyNOJNqia0yd8SEvyO5Tr/W0lnNSji/1yIBaR4FhzVTw5ljJYrWk0q5pJgtGOzhYUrQzf9li4uc7Q4TiqozbODOO+jUjFX0WtPSNiSCu3oqHy8qwoQq3hgTH76AOCAlxQAinO0m5vNOoD6FUWcgmiT3bBaJ421xO3NNdButbgLqzheXHqxaZ5QuWlh7i7nU5jrVo48gvog5xkLioK5M1xQTPSmqgoYIAKMP7rex+kqKFvunXZeLYPfEwK6qRlHmfQ+xD14xC6blam1GpTV+0WiIAx87mNKMVpUHQ0likkbogrpIaQFmDsw7hAPwtEBHlgTEmJfjatmnkd76dX5fjKzzjQB8lTD+yBMeBYTmQlgeE5RhgP5T+Lb3UXFub5txRR0Acp7G4Dy1b/mGzsPw7GFvRB/HzLsrwkc9KQ5yWRZfnueXfw+Am7y+IhCnFcdO7ZWlHiOpq+SMPM02czRQ8UNVDAZ5kfdnnTYwuZZrQWFmgSqgNyaPfZ2kFF/Xo9T/RW3uDBJl5Oh7MwtZmXfwgCxmAn1PFMrm2Z0TOiuvzCh21aa0NnKkhLeKmiBsKYr5VGtCNvdeNWojcUrAgdNoOmya9wdi33R66ZH4xlg41aXh/PVNm9dNk8VGEX/ZosMA6HYBtFi2s41Z2yZzJ6MEpQuAuHcsJYgihau2SLHTtBHGuYr+Qib4f2Qj2TU3ZKwpVo6MQ0zgrXausl2Qo7spTwu5GfjRS/DzD89FgnYPfrY/ScB+9C/aegb8A73zGP/i8x3ifMv3TpxOao6dvIeg1Ou0pk3Qhqhzkxp0NutzcrLavuuRWiSXZmRuDx+N4HeQypn5EEjEGRXCDoA5KVnYuN1M9+N2SUwJjsArUrO4YFVT47w8YJKihMcjBmJZlleIEVpT5IWiXPLQrpR0MBpfsMzgWPvwHO4ljKawcAAA==',
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
  
