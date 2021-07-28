const Discord = require("discord.js")
const db = require('quick.db')

module.exports = {
  name: "disable-welcome",
  description: "Hmmmm...",
  category: "moderation",

  run:(client, message, args) => {

    if (db.has(`welchannel_${message.guild.id}`)) {

      if (message.member.hasPermission("MANAGE_CHANNELS")) {
        db.delete(`welchannel_${message.guild.id}`)

        message.channel.send('Successfully disabled the welcome channel!')
      } else {
        message.reply("Missing **MANAGE CHANNELS** permission")
      }
    } else {
      message.reply("How am'i suppose to disable welcome command if is not enabled?")
    }
  }
}