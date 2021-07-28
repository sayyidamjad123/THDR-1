const Discord = require('discord.js')


module.exports = {
  name: 'guessthenumber',
  category: "fun",
  aliases: ["gtn"],

  run: async(client , message , args) => {

const djsGames = require('djs-games')
const guessTheNumber = new djsGames.GuessTheNumber()
 guessTheNumber.startGame(message)
                          }
                          } 
      
