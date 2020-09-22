const Discord = require('Discord.js');
const fs = require('fs'); 
const config = require('./config/config.json');

function checkSpecials(args)
{
    var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); 
    if(pattern.test(args))
        return true; 
    return false; 
}
module.exports=
{
    response:function(argument)
    {
        if(checkSpecials(argument))
        {
            const writejson = {
                "token" : `"${config.token}"`,
                "prefix" : `"${config.prefix}"`,
                "uptimerobot" : `"${config.uptimerobot}"`,
                "embedcolor" : `"${config.embedcolor}"`,
                "embedwarning" : `"${config.embedwarning}"`,
                "weather" : `"${config.weather}"`,
                "owner" : `"${config.owner}"`,
                "uptimerobot_stat" : `"${config.uptimerobot_stat}"`
            };
            fs.writeFileSync('./config/config.json', writejson); 
            var OnEmbed = new Discord.MessageEmbed()
                .setColor(`${config.embedcolor}`)
                .setTitle('Prefix Setting')
                .setAuthor('OpenHRT', '', '')
                .setDescription('Prefix 세팅이 정상적으로 변경되었습니다!')
                .setImage('')
                .setTimestamp()
                .setFooter('OpenHRT');
            return OnEmbed;
        }
        else
        {
            var OnEmbed = new Discord.MessageEmbed()
                .setColor(`${config.embedcolor}`)
                .setTitle('Prefix Setting')
                .setAuthor('OpenHRT', '', '')
                .setDescription('Prefix에는 기호만 써주시기 바랍니다!')
                .setImage('')
                .setTimestamp()
                .setFooter('OpenHRT'); 
            return OnEmbed; 
        }
    }
}