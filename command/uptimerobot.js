const Discord = require('Discord.js');
const Config = require('/config/config.json');
module.exports=
{
    conf:function(argument)
    {
        if(argument === "온")
        {
            var OnEmbed = new Discord.MessageEmbed()
                .setColor(`${Config.embedcolor}`)
                .setTitle('UptimeRobot Configuration')
                .setAuthor('OpenHRT', '', '')
                .setDescription('UptimeRobot 알림이 켜졌습니다!')
                .setImage('')
                .setTimestamp()
                .setFooter('OpenHRT');
            Config.uptimerobot_stat = "on";
            return OnEmbed; 
        }
        else if(argument === "오프")
        {
            var OnEmbed = new Discord.MessageEmbed()
                .setColor(`${Config.embedcolor}`)
                .setTitle('UptimeRobot Configuration')
                .setAuthor('OpenHRT', '', '')
                .setDescription('UptimeRobot 알림이 꺼졌습니다!')
                .setImage('')
                .setTimestamp()
                .setFooter('OpenHRT');
            Config.uptimerobot_stat = "off";
            return OnEmbed;
        }
        else
        {
            var OnEmbed = new Discord.MessageEmbed()
                .setColor(`${Config.embedwarning}`)
                .setTitle('제대로된 명령어를 입력해주세요!')
                .setAuthor('OpenHRT', '', '')
                .setImage('')
                .setTimestamp()
                .setFooter('OpenHRT');
            return OnEmbed;
        }
    }
}