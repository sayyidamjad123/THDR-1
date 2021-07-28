module.exports = async (client) => {

  client.user.setActivity('?help', { type: ('PLAYING') })

  console.log(`[READY]: ${client.user.tag} is online!`);

};