const { createWriteStream } = require("fs");
const ytdl = require("ytdl-core")
const { MessageAttachment } = require("discord.js")

module.exports = {
   name: "ytmp3",
   description: "Convert YouTube links to MP3",
   emoji: "🔦",
   usage: "<name/link>",
   run: async (client, message, args, MessageEmbed) =>{
       
    let m1 = new MessageEmbed()
    .setDescription("Please provide a song name/link to convert.")
    .setColor("RED")
    
    if(!args.length) return message.channel.send(m1)
      
    let url = args.join(" ")   
  try {
   message.channel.send("Video converting... Please wait")
      ytdl(url, {filter: 'audionly', format: 'mp3'})
.pipe(createWriteStream(_dirname + `/dl/result.mp3`))
.on('finish', () => {
  let music = new MessageAttachment(__dirname + '/dl/result.mp3', "result.mp3");
    message.channel.send(music)      
          
});
      } catch (err) {
    message.channel.send("Video not found")  
     console.log(err)
           }
        }
    }
