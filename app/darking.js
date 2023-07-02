const express = require('express');
const { Client, MessageEmbed } = require('discord.js-selfbot');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000)
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();




const bots = [
  {
    token: process.env.BOT_TOKEN_1,
    channelID: process.env.CHANNEL_ID_1
  },
  {
    token: process.env.BOT_TOKEN_2,
    channelID: process.env.CHANNEL_ID_2
  },
 {
    token: process.env.BOT_TOKEN_3,
    channelID: process.env.CHANNEL_ID_3
  },
  // Diğer botların tokenlerini ve kanal ID'lerini buraya ekleyin
];

for (const bot of bots) {
  const client = new Discord.Client();

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const targetChannel = client.channels.cache.get(bot.channelID);
    if (targetChannel) {
      targetChannel.join().then(connection => {
        connection.voice.setDeaf(true);
        connection.voice.setMute(true);
      }).catch(console.error);
    }
  });

  client.login(bot.token).catch(console.error);
}
