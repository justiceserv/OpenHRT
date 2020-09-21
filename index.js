const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config/config.json");
const fs = require ('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json());

app.listen(80, () => console.log('Webhook is ready & listening'));
app.post('/', (req, res)=>{
  var uptimerobot = require('./command/uptimerobot.js');
  uptimerobot.posted(req.body); 
});
client.on("ready", ()=>{
  console.log("봇이 사용될 준비가 되었습니다!");
  client.user.setActivity(`${config.prefix}도움말`);
});
client.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
client.on("message", async message =>{
  const args = message.content.slice(config.prefix.length).split();
  const prefix = message.content.substring(0,1);
  const command = args.shift().toLowerCase();
  if(!message.guild) //respond when only DM come
  {
    if(prefix === config.prefix)
    {
      if(command === "도움말")
      {
        var help = require('./command/help.js');
        message.channel.send(help.help(config.prefix, config.embedcolor));
      }
      else if(command === "업타임로봇")
      {
        var argument = command.split(/\s+/); 
        var uptimerobot = require('./command/uptimerobot.js');
        message.channel.send(uptimerobot.conf(argument[1]));
      }
      else if(command === "날씨")
      {

      }
      else if(command === "prefix")
      {

      }
      else if(command.startsWith("up"))
      {
        var argument = command.split(/\s+/);
        var isitdown = require('./command/isitdown.js');
        const data = JSON.parse(isitdown.req(argument[1], config.embedcolor, config.embedwarning));
        if(data.isitdown === "false")
        {
          const responseEmbed = new Discord.MessageEmbed()
            .setColor(`${embedcolor}`)
            .setTitle(`${website}은 현재 정상 작동중입니다!`)
            .setDescription(`HTTP Response: ${data.response_code} 입니다.`)
            .setTimestamp()
            .setFooter('OpenHRT')
        }
        else if(data.isitdown === "true")
        {
          const responseEmbed = new Discord.MessageEmbed()
            .setColor(`${embedcolorno}`)
            .setTitle(`${website}은 현재 정상 작동하지 않습니다!`)
            .setDescription(`HTTP Response: ${data.response_code} 입니다.`)
            .setTimestamp()
            .setFooter('OpenHRT')
        }
        message.channel.send(isitdown.req(argument[1], config.embedcolor, config.embedwarning));
      }
    }
    if(message.channel.id === '757444747441864809')
    {
      
    }
  }
  else
  {//When message came in guild
  }
});
client.login(config.token);
