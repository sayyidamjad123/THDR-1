const fs = require('fs');
let Discord = require("discord.js")
let client = new Discord.Client()
client.config = require('./config.json');
client.commands = new Discord.Collection();

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading event ${eventName} 🌚`);
        client.on(eventName, event.bind(null, client));
    });
});


fs.readdir('./commands/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading command ${commandName} 🌚`);
        client.commands.set(commandName, props);
    });
});
client.on("message", message => {
  if(message.content === "hello")
    return message.channel.send("hi, how can i help u!");
  
});
client.on("message", message => {
  if(message.content === "how can i get slot on thunder pro scrims")
    return message.channel.send("<a:Siren:852493868376129546>there is requirements for thunder pro scrims check <#859239633070456832> for requirements if u met this requirement dm <@444816797670309898> <a:Siren:852493868376129546>");

});


client.on("message", message => {
  if(message.content === "how to get slot on thunder pro scrims")
  return message.channel.send("<a:siren:852493868376129546>there is requirements for thunder pro scrims check <#859239633070456832> for requirements if u met this requirement dm <@444816797670309898> <a:siren:852493868376129546>");

});

client.on("message", message => {
  if(message.content === "?tag requirements")
  return message.channel.send("*THUNDER PRO SCRIMS REQUIREMENT\n*WEEKLY ONE SPONSOR SLOTAVAILABLE*\n*CONSIDER ONLY LINEUP ACHIEVEMENTS WITH LEADERBOARDWHEN U SHOW LEADERBOARD PLEASE GIVE THE PROOF WITH ROSTER DETAILS*\n*PMIS, SEMI, FINAL AND GRAND FINALIST*\n *PMCO QUARTER, SEMI, Or FINALIST*\n*PMIT SEMI, FINAL OR GRAND FINALIST*\n*WINNER AT LEAST 3 TOURNAMENT 100K OR ABOVE*\n*UN OFFICIAL TOURNAMENT FINALIST 200K OR ABOVE 3 TIMES*");

});

if(message.content.toLowerCase().startsWith("?ctag")) {
    const args = message.content.split(" ").slice(1)
    
    if(!args[0]) {
      message.reply('enter a tag')
    } else {
      let ee =  args.slice(1).join(' ');
      
      if(!ee) {
        message.reply("enter a reply")
      } else {  
      db.set(`?${args[0]}`, ee)
      message.reply(`Tag created successfully. Now you can use it like this: -${args[0]}`)
    }
  }
  }
  if(message.content.toLowerCase().startsWith("?tag")) {
    const args = message.content.split(" ").slice(1)
    
    if(!args[0]) {
      message.reply('enter a tag')
    } else {
      let ee =  args.slice(1).join(' ');
      
      if(!ee) {
        message.reply("enter a reply")
      } else {  
      db.set(`-${args[0]}`, ee)
      message.reply(`Tag created successfully. Now you can use it like this: -${args[0]}`)
    }
  }
  }
  if(message.content.toLowerCase().startsWith("?dtag")) {
    
  if(message.author.id === "444816797670309898") {
    const args = message.content.split(" ").slice(1)
    
     ee =  args.slice(1).join(' ');
    
    if(!args[0]) {
      message.reply('enter a tag to delete')
      } else {  
      db.delete(`-${args[0]}`, ee)
      message.reply('Tag deleted successfully')
    }
  }else{
    message.channel.send("You are not d3mon so you cant use that :p")
  }
  }
    if(message.content === "?") {
      let e = db.get(`${message.content}`)
      
      if(!e) return;
      message.channel.send(e);
    }
    
client.on("ready", () => {
  console.log('Hey user {client.user.username} is online');
  client.user.setPresence({
    activity : {
      name: "?help",
      type: "Playing",
      status: 'dnd'
    }
  })
})
client.login(process.env.TOKEN);