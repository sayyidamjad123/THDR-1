const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bot-guilds",
    aliases: ["bot-servers"],
  run: async (client, message, args ) => {
    if(message.author.id !== '444816797670309898') return message.channel.send(':x: Only the bot owner can use this command, dumbyyy :x:')
       const guilds = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(10);

       const description = guilds.map((guild, index) => {
         return `${index + 1}) ${guild.name} -> ${guild.memberCount} members`
       }).join('\n')

       message.channel.send(
         new MessageEmbed()
         .setTitle('Top Guilds')
         .setDescription(description)
       )
  }
}
