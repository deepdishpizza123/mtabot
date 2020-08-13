const Discord = require('discord.js'); 
const bot = new Discord.Client(); 
const prefix = '!'; 

//get argentina facts from argentinafacts.js file
import { dailyfact } from './argentinafacts'; 

bot.on('ready', () =>  {
    console.log('The bot is online!'); //shows when the bot has accepted new code 
    
    bot.user.setActivity('a Pato game || use !help for more', { type: 'WATCHING'}); //sets bot status 

    const general = bot.channels.cache.get('622981335157440532'); //allows bot to send message to channel w/out message command
    setInterval(() => {
        const result = Math.floor(Math.random() * dailyfact.length); //randomizes selection from dailyfact array 
        general.send(dailyfact[result]); 
    }, 86400000); 
});

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(' '); 

    if (message.content === 'based' || message.content === 'Based') {
        message.react('713093398692757574'); 
    }
    if (message.content === 'yes' || message.content === 'Yes') {
        message.react('714248369756962816'); 
    }
    switch(args[0]) {
        case 'help': 
            const role = 'Gives necessary facts about Argentina.'
            const helpembed = new Discord.MessageEmbed()
                .setTitle('MTA Bot')
                .setDescription('I am a loyal servant of MTA, here to infuse you with lessons from her class.')
                .addField('Role: ', role)
                .setImage('https://wallpapercave.com/wp/itYcVwJ.png')
                .setColor('GOLD')
                .setFooter('LECHUGA, LIMÓN, CORNO', 'http://i.huffpost.com/gen/1016565/images/o-LEMON-BENEFITS-facebook.jpg')
            message.channel.send(helpembed); 
    }
});

bot.login(process.env.token); 