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
            const writejson = '';
        }
    }
}