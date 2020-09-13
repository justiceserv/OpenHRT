const Discord = require('discord.js');
const request = require('request');
module.exports =
{
  req: function(website, embedcolor, embedcolorno)
  {
    var url = `https://isitdown.site/api/v3/${website}`;
    request.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
      }, (err, res, data) => {
        if (err) {
          console.log('Error:', err);
        } else if (res.statusCode !== 200) {
          console.log('Status:', res.statusCode);
        } else {
        }
    });
  }
}
