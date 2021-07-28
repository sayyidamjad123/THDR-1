const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");
const db = require("quick.db");
const ms = require("pretty-ms");
const fetch = require("node-fetch");

module.exports = {
  name: "thank",
  aliases: ["ty", "thanks", "THANKS", "THANK"],
  category: "main",
  description: "Thank A User!",
  usage: "Thank <Mention User>",
  run: async (client, message, args) => {
    let timout = 3600000;
    const check = await db.get(`thanktimout_${message.author.id}`);
    if (check !== null && timout - (Date.now() - check) > 0) {
      const timeLeft = ms(timout - (Date.now() - check));
      let fail = new Discord.MessageEmbed()
        .setTitle(":warning: You have already thanked someone recently :warning:")
        .setColor("RED")
        .setDescription(
          `You may thank someone after ${timeLeft} , to avoid spam thanking`
        );
      message.channel.send(fail);
    } else {
      const avatar = await fetch(message.author.avatarURL({ format: "jpg" }));
      let Member = message.mentions.members.first();
      if (message.author.id === Member.id) {
        let embed5 = new MessageEmbed()
          .setColor("RED")
          .setTitle("You cannot thank yourself!");
        message.channel.send(embed5);
      }
      if (!Member)
        return message.channel.send(`Please Mention A User To Thank!`);

      db.add(`ty_${Member.user.id}`, 1);

      let ty = db.get(`ty_${Member.user.id}`);

      let embed = new MessageEmbed()
        .setColor(`#00eaff`)
        .setDescription(`You thanked ${Member} they now have ${ty} thanks!`)
        .setTimestamp();

      message.channel.send(embed);

      db.set(`thanktimout_${message.author.id}`, Date.now());
    }
  }
};
