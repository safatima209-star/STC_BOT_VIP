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
    sessionID: process.env.SESSION_ID 'KnightBot!H4sIAAAAAAAAA5VU2bKiSBD9lYl6xWhZVMSIGzGKKAgoKoo60Q8FFFiyWhSbHf77BN6+3f0w03PnrdY8J/OczG8gzXCBdNSCyTeQE1xBirolbXMEJmBWBgEioAd8SCGYgLvG9p17YAtSszKIk4zWY22vOds6UFt/XkqX2SLLVrx1WLBv4NkDeenG2PtNwFTxwz0800NtaSS6uKm9nu8ee+UR3NfQSlq6XjS+szY0PnwDzy4ixASnoZJfUYIIjHXUWhCTz9FH5iA8Go+ldRnOTwGjPhTjIe/0eejNsXaS+UA+NtNV0VSq+Tn6vhLfVqfWIlG+Mx2xXWxahr/Ux13M6MPam5aSmzVO/3q4Fe/0CxymyNd8lFJM20/XnV0bm8x1Mic+88zcjc3l+uGqNWvtboejU7uJ0zemcRXXivI54mHU5wdZiJXlyYxP7kFFTFro4ewUhH1+mAT1TWia5cmNt+dfiVvkwyvR/6n7QXYW+pU558JVznHqmHEl2lf2Vp1Hpcv4O01S7tJ68LCOg8/R3+o4afijblT3zVjemvJcFJzBqUJw7w6nwkzdsLKeXu3muP1JH9KS/I7l5dbfxGOoBZEz8/WbsB2d531c9H1ua+4qscmRF6bxfqSzpqXMJU2H8aJJF/aKkHlfChbmWTGuAhIkhx5m08oY1GfvFr69MopQq/lgwj17gKAQF5RAirP0dSaKPQD9ao88guirvCCso37Gn+elDLm0dbzjKjL4NDPufnjfFrVSiZtNMhrCeFm/gR7ISeahokC+iguakdZERQFDVIDJX197IEUNfReugxO4HggwKeghLfM4g/6Hqh+X0POyMqX7NvXkboEImLA/jxGlOA2Lro5lCol3xRWSr5AWYBLAuEA/MkQE+WBCSYl+dK2c+V3hLXllD6aSAXogeQmCfTABPMePOHHICjw7nAyHfxZf6i4szPMvKaKgB1LYvQZ7W/5jtrH/OGoW6IH49ZfjBHHMiwNBEEccJ3Tfu4vnD9odio8oxHEBJkC27lHiHebKyrqLkrZcTpVwKodT8DPND7+861FIswNUGLwt99MsECjLuLq86jsNtXVbPaPx6BRyuyXy5O3bPwQBE7AYJhyz97C6toaVdRq5l5nwiFipPXoKLTz7ikncioreP7YueeBtgHf9zaVv7c9cyp2HUGbses2OV97OLnhac7qjuHL91qH5qMIe+hWsFuKhWcG5dNQQm8FCtbOyImPpFueGQHcD6Rae95rILJkRXyZaPvX00jgQxjDNVr5Kyn6hBqroqDxHDhxdpaP7heLtu5NfnRR/n2D45bFOwG4bYPQaCN+F+k9B34l3vmOfvV9ifB8x/9KmM9faHpdXK4uMKNRVSfStpA1xwBXuoY0aXq028WB92KXpNALP59ceyGNIg4wknZCJC0EPkKzsXKylQfYbJHkaarNtKHdpx7Cg05+dYeMEFRQmede/48GA4wac9PwbMdOtcE8HAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Orbit Stickers,
    
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
  
