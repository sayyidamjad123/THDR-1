const { Message, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  name: 'yt',
category: "info",
  description: "Get a snip of yt a search",
  usage: "map <place>",
run: async (client, message, args) => {
  const sit = args.join("_")
if (!args.length) return message.reply("Provide a valid channel name or searcg query")
    const site = `https://www.youtube.com/results?search_query=${args.join("+")}`
    try {
      const msg = await message.channel.send('**Please wait...** This may take up to 10 seconds.')
          msg.delete({ timeout: 5000 })
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );
let att = new Discord.MessageAttachment(body, `${sit}.png`)
      return message.channel.send(att)
  
    } catch (err) {
      if (err.status === 404)
        return message.channel
          .send("idk")
          .then(m => m.delete({ timeout: 14000 }).catch(e => {}));
      return message
        .reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`)
        
    };
  
}
}