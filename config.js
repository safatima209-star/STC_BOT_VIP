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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUW5OiOBj9K1N5lRq5qKBVXbXcvIKAqGhvzUOACGmBYIggTvnfp+ienp6H3dnet5CQ853vnPPlOygIrtAKtWDyHZQU15ChbsnaEoEJ0K6nE6KAAzFkEExAo9dw5YmXMRY3I6d2oAq3zbXO5WCqre98KY+W4j2oLDc/PoEHB8prmOHoD4BDA+YFUgeGdHRqgrd3zK/LUTbs+elpT449T10RT7uUrdQBdogQU1wkZpmiHFGYrVDrQkw/R19ZejsqpZCQGUzniyJdLwf89eCJEj0XvrX1shm7Zfri2SSfox/kz/Nw3h62OVu+lJdeEo6UXFmPb+iSDcbED8JpHikjfjobvNGvcFKgeBGjgmHWflp34l7CxKw9a+ivRdfc7M7wetkHRqRYY8EThpo+H42tRFJnn9Td2PgHbRXW/symvb6NcDsKKvaiD/o7EpwPtq7yqtzX2lsS/U7cpe9ZOf8f3XsWES3Ld8vF80Z0ZoNVoMg8L5gZ0UaZPzzmlaPcXVjLwifp860+24/Va72c0cBCB3PQt9qX3XolW250lKJpXZ6v+1hpxeMHfciu9E8szfWFlms9sBe7IM7vp3rVNnwQ0WfnvulJoewmyN6cnFWJDWucvVS3JXPcfJdNVVvdr5ODRm+eYS+icLYOeq2qB2Ip6MnTa0dn1C5iMBEeHKAowRWjkGFSdHuKzAEY1z6KKGKv6oI7LnsNqZFVooOhlk5vZ6XD1dRupqUcqo6ozE/VSVRZfI6eAAdKSiJUVSie44oR2tqoqmCCKjD5+xsHCnRjb7511SSBAydMK7YrrmVGYPxu6vshjCJyLZjfFpHeLRAFE/5jGzGGi6TqZLwWkEYprpGeQlaByQlmFfrVIKIoBhNGr+jX0Ook7nQ3TNcwbUMGHMhf/cAxmABREEeCPOQlkR9OBvJf1demg4Vl+bVADHCggN3fwN/qXzRn+2W/cAEHste7giDJiigPJEkeCYLUXe8OHr9od1VixCDOKjABuuuc82hnmKugR2JzNlPNRNUTFXy0+R6XNz9cyN/G6+ESaanep/t2Q9Y7VDWHl2fNbBUH951sNR3M0mLLP/0DSBfYqT9UiOmlc1cPRtbozIzz2rwt+8rUTeE4bPZ608hjquflxkBRUpa3RMZ3PyNqZC2aKrX5bN537wHGfTsOGg9eTLXLFgdiVOMI/V7MsMfKLpLEfhTmNzlajuNoEO5aaav3XgiV0sMBhSdZ2abKMJTjVPNtW26IsWu0ZX92qLMknSv7cKOGWqtaimvm5mKqqm9Bfh2k7OcDhl8z1hnYfZ4wen0Pfhr1n4a+Ee9yxz+43zB+vjD/MqXaVmT2aYv8Q3L06pEQnaGxn1N7OhC9jV0bpL6Xfoo08syPwePxjQNlBtmJ0BxMQJWHEHCAkmuX4kVxIn+opKvJQvMSvWs7gxVTPyZji3NUMZiXYCLIisBLvMwLjx/lh7lzTgcAAA==',
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
  
