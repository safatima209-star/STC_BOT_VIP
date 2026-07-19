/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['212617503205'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Orbit', 'Imrane Moussaid'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Orbit Bot',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9lY161Ri5CWhERywgioqIgu1lYx4KKLDkKlUIOOG/b2B3T8/D7mzvW5FFZZ4852T+AFmOCVqiFox/gKLEN0hRd6RtgcAYqFUYohL0QQApBGMALWW72BG5uYdbuVwEhe2cpHRrNFeBd5hzuXKteRwp5pWtX8CjD4rKS7D/m4Q9o45fpwmuRHuxrDcZqzEC4aS71fCLZGgcUbPUtGhTXJL5C3h0GSEucRbpxRmlqITJErU2xOXX4K8t/aTlgyVXm62Dw+I0FXkINcjX4lL11JE6XVNuIbTDjPkafK9W19yea9Qeu39txNE9TXenMCaGnXDbyhksnfOcuzP1qqnf4BMcZSiYByijmLZf5t2xGNKKQ/9wdWCktmZ6ard2Wm0bxc0FbmYuzvsE6VPo73dfAz5pUJrFd65ZpskMkciTaqUchO69Z41OeMsnWgxbqbxekuOvwO3ywyvx/+E9nkQHTWnofS9evUmPtxHVlgeColfdMGzfne0lNUmJjHnla/C30tBeC2lk38VGP0f5iZFf7/mNGbmspS9HseledbJYmZPd/BM+pFX5O5Qkuw6bcyqpV06f1OaM04rpaWrtibPR5COPN5wvv5rr2DiJq9mKN6qshuVgPp/ca0ewZPHIeLveWhwMfGR4aqSJOhMo9cuzoxi18wCM2UcflCjChJaQ4jzrYhwr9wEMbg7yS0Sf9AJ0X63UWRgWhwuCw4vGHapb7t9dB7ETV6HH4UZQoImkwty9gD4oytxHhKDAwITmZbtChMAIETD+63sfZKihb8J15Xi2D0JcErrLqiLJYfCh6scl9P28yqjTZr7WHVAJxsxnGFGKs4h0PFYZLP0zviHtDCkB4xAmBP3sEJUoAGNaVujn1Gp50BHvcs5xchBF0AfpUxAcgDHgWE5kpSHDc8xwPBT/JN/qLi0sim8ZoqAPMtj9Ddalh+kfat6FkudLluUlmZMEnpdEluW7x93F4yforkaAKMQJAWOg2VWc+ruJbl5D2ZrPZooeKVqkgM8mP9zypgYZqTuo9/CmcpQ85CnT85baYrBvqLt0jSOSxUPEbmfI1zYv/5AEjMFMIAidjHZDhMTJ1gfL5OccVRsnghKTK5atCwsWi1hYK7vBWeUCbTOsLquJ64pM4G9kbnrBlTdir5wkwVY+9FChPa3VBwG6YR/9WszYypeSn1r1tBfdernK+xGzujkm2/KnMxPhFgWOMqPD63p52Ja6c8i2t1o36W6B5naT3wbMbY1yTfJaojan6dEbHVeq8ubj5xwl7/sLPx3Wydd9hhg918G7TP8p5xvwznXMo/9LjvcF8y9Dqnr25nV2tvPYjKOlMZICO20jHLLE27Vxwxm3dSJYu22WKTF4PL73QZFAGuZl2gmZehD0QZlXnYfnWZj/ppKmRHN1E2ld2wkkVPmcCxeniFCYFmDMSrIgsDInsI+/AY7+XChNBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Orbit Stickers',
    
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
  
