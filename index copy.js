const Discord = require('discord.js'); 
const bot = new Discord.Client(); 
const prefix = '!'; 

bot.on('ready', () =>  {
    console.log('The bot is online!'); //shows when the bot has accepted new code 
    
    bot.user.setActivity('a Pato game || use !help for more', { type: 'WATCHING'}); //sets bot status 

    const general = bot.channels.cache.get('622981335157440532'); //allows bot to send message to channel w/out message command
    setInterval(() => {
        const result = Math.floor(Math.random() * dailyfact.length); //randomizes selection from dailyfact array 
        general.send(dailyfact[result]); 
    }, 3600000); 
})

//creates an array that stores daily facts 
const dailyfact = [
    'Argentina is the 8th largest country in the world.', 
    'Argentina claims a portion of Antarctica.',
    'Argentina gained its independence from 300 years of Spanish colonization in 1816, and helped inspire other Latin American countries to gain their independence.',
    'The name "Argentina" comes from the Latin word for silver, "argentum," due to its great source of valuable minerals.', 
    "Argentina's geography is grouped into four regions: the Andes, the North, the Pampas, and Patagonia. The Andes include part of the Andean mountain range, the North includes the Gran Chaco and Mesopotamia, the Pampas are a region of grassland, and Patagonia is a cold, windy region.",
    'The national drink of Argentina is Yerba Mate.' + 'https://www.yumza.com/media/catalog/product/6/3/632432737775_1.jpeg',
    'Patagonia: ' + 'http://i1.wp.com/naughtynomad.com/wp-content/uploads/2015/06/patagonia-08.jpg', 
    'The Andes: ' + 'http://www.chimuadventures.com/blog/wp-content/uploads/2017/02/shutterstock_291223832.jpg',
    'The North: ' + 'https://www.grayline.com/files/cache/934a27f1b84a589d1347b34191de3507_f924.jpg',
    'The Pampas: ' + 'https://i.pinimg.com/originals/58/b3/b9/58b3b97452169d25f9a8566ac510d50c.jpg', 
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 
    'At 2.1 hours a week, Argentines spend the most time listening to the radio of any nation in the world',
    "Argentine wine, one of the world's finest, is an integral part of the local menu. Malbec, Torrontés, Cabernet Sauvignon, Syrah and Chardonnay are some of the most sought-after varieties (Wikipedia)" + 'https://www.reversewinesnob.com/search/label/Argentina/',
    'The hornero, living across most of the national territory, was chosen as the national bird in 1928 after a lower school survey (Wikipedia)' + 'https://en.wikipedia.org/wiki/File:Rufous_hornero_(Red_ovenbird)(Furnarius_rufus).JPG',
    'The ceibo (cockspur coral tree) is the national floral emblem and national tree (Wikipedia)' + 'https://worldoffloweringplants.com/wp-content/uploads/2018/01/Erythrina-crista-galli-Cockspur-Coral-Tree1.jpg',
    'The quebracho colorado (willowleaf red quebracho) is the national forest tree' + 'https://en.wikipedia.org/wiki/File:Schinopsis_balansae.jpg', 
    'Rhodochrosite is known as the national gemstone (Wikipedia)' + 'https://en.wikipedia.org/wiki/File:Rhodochrosite_on_Matrix_-_Peru.jpg', 
    'Pato, the national sport of argentina, involved throwing a live duck around before that got banned for animal cruelty.',
    'Anyone who died from knife fights before pato games were denied a Christian burial' 
];

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