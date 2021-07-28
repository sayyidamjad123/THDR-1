const Discord = require('discord.js')

module.exports = {
  name: 'kick',
  description: 'kicks the mentioned member',
  run: async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You do not have permission to use this command. \`KICK_MEMBERS\`');
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I do not have permission to kick members. ')
    
let member = message.mentions.members.first()
 
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason was provided";
    const kickEmbed = new Discord.MessageEmbed()
      .setTitle(`You were kicked from ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor('#f02711')
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

    // :kick @user reason
    if (!args[0]) return message.channel.send('You need to state a user to kick.');
    if (!mentionedMember) return message.channel.send('User mentioned is not in the server. ');
    if (!mentionedMember.kickable) return message.channel.send('I Cannot kick that member. ');
    if(member.hasPermission("MANAGE_MESSAGES")) return message.reply(`You Can't Do That!
**Reason:** \`User Is A Mod/Admin\``)

    try {
      await mentionedMember.send(kickEmbed);
    } catch (err) {
      console.log('I was unable to dm the member. ' + err);
    }
    try {
      await mentionedMember.kick(reason);
      return message.channel.send(`Kicked ${mentionedMember.user.username}!`)
    } catch (err) {
      console.log(err);
      return message.channel.send('I was unable to kick the user. ');
    }
  }
}