const Discord = require('discord.js');
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
    },
    posted:function(body)
    {
        const jsonbody = JSON.stringify(body);
        if(jsonbody.up === "up")
        {
            var OnEmbed = new Discord.MessageEmbed()
                .setColor(`${Config.embedcolor}`)
                .setTitle(`${jsonbody.name}`)
                .setAuthor('OpenHRT', '', '')
                .addFields(
                    {name: `상태`, value: '정상작동 중입니다!'},
                    {name: `상세정보`, value: `${jsonbody.moreinfo}`}
                )
                .setImage('')
                .setTimestamp()
                .setFooter('OpenHRT')
            return OnEmbed;
        }
        else if(jsonbody.up === "down")
        {
            var OnEmbed = new Discord.MessageEmbed()
                .setColor(`${Config.embedwarning}`)
                .setTitle(`${jsonbody.name}`)
                .setAuthor('OpenHRT', '', '')
                .addFields(
                    {name: `상태`, value: '현재 문제가 발생한 것 같습니다!'},
                    {name: `상세정보`, value: `${jsonbody.moreinfo}`}
                )
                .setImage('')
                .setTimestamp()
                .setFooter('OpenHRT')
            return OnEmbed;
        }
    }
}