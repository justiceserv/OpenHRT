const Discord = require ("discord.js");
module.exports =
{
  help: function(prefix, embedcolor)
  {
    const helpembed = new Discord.MessageEmbed()
      .setColor(`${embedcolor}`)
      .setTitle("도움말")
      .setAuthor('OpenHRT', '', '')
      .addFields(
        {name: `${prefix}도움말`, value: '현재와 같은 도움말을 표시합니다!'},
        {name: `${prefix}업타임 (value)`, value: 'UptimeRobot에서 (value)의 상태를 가져옵니다!'},
        {name: `${prefix}날씨 (도시)`, value: 'WeatherAPI에서 (도시)의 날씨를 가져옵니다!'},
        {name: `${prefix}prefix (변경될 prefix)`, value: 'prefix를 변경합니다!'},
        {name: '업타임로봇과 관해:', value: '디폴트 설정으로 Up/Down 이벤트가 일어날때에만 메시지를 표시합니다!'}
      )
      .setImage('')
      .setTimestamp()
      .setFooter('OpenHRT');
    return helpembed;
  }
}
