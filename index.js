const Discord = require('discord.js'); 
const bot = new Discord.Client(); 
const prefix = '!'; 

bot.on('ready', () =>  {
    console.log('The bot is online!'); 
    
    bot.user.setActivity('a Pato game || use !help for more', { type: 'WATCHING'}); //sets bot status 

    //get argentina facts from argentinafacts.js file
    const dailyfact = require("./argentinafacts");

    const general = bot.channels.cache.get('622981335157440532'); //allows bot to send message to channel w/out message command
    setInterval(() => {
        const result = Math.floor(Math.random() * dailyfact.length); //randomizes selection from dailyfact array 
        general.send(dailyfact[result]); 
    }, 86400000); 
});

let dailyfact = [];
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(' '); 

    if (message.content.match(new RegExp(/Based/i))) {
        message.react('713093398692757574'); 
    }

    if (message.content.match(new RegExp(/Yes/i)) || message.content.match(new RegExp(/No/i))) {
        message.react('714248369756962816'); 
    }

    switch(args[0]) {
        case 'help': 
            const helpembed = new Discord.MessageEmbed()
                .setTitle('MTA Bot Commands')
                .setDescription('I am a loyal servant of MTA, here to infuse you with lessons from her class.')
                .addFields(
                    { name: '!addfact', value: `Add any fact about Argentina to store in the Argentina facts library. Make sure the fact is actually about Argentina or it won't work.`},
                    { name: 'factlibrary', value: 'Shows the list of Argentina facts that the server has created'}
                )
                .setImage('https://wallpapercave.com/wp/itYcVwJ.png')
                .setColor('GOLD')
                .setFooter('MAKE SURE YOU TYPE THE COMMANDS EXACTLY AS SHOWN')
            message.channel.send(helpembed); 
            break;
        case 'addfact':
            if (message.content.match(new RegExp(/Argentina/i))) {
                dailyfact.push(message.content.substr(9)); 
                message.channel.send(`Fact successfully added: ${message.content.substr(9)}`); }
            else {
                message.channel.send(`That's not an Argentina fact.`)}
            break;
        case 'factlibrary':
            message.channel.send(dailyfact); 
            break;
        case 'deletefact':
            if (message.member.roles.cache.has('723307528351645756')) {
                dailyfact.pop();
                message.channel.send(`Fact successfully deleted: ${recentfact}`); }
            else {
                message.channel.send('You do not have the right permissions.'); }
            break; 
    }
});

bot.login(process.env.token); 