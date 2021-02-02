const discord = require('discord.js');
const bot = new discord.Client();
const token = 'Nzg2NDUzODAzMzc2ODM2NjM5.X9GoLg._ZrDHSAdwoKFeTBZ5MgMEsfz1aE'
const prefix = '!';

bot.on('ready', () => {
    console.log('Your Bot Is Now Online.');
    bot.user.setActivity('over server', { type: "WATCHING"})
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error); 
    bot.user.setStatus('online')
        .then(console.log)
        .catch(console.error);
})

bot.on ("message", message =>{
    if(message.author.bot) return; 

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();
        if(command === 'testembed') {
            const testEmbed = new discord.RichEmbed()
                .setColor(0x8100a8)
                .setTitle('Suscribe To Rex')
                .setDescription('This is Spikys server')
                .setAuthor(message.author.username)
                .addField('Server Rank', 'Wanna get a subscriber tag? Subscribe to my channel then')
                .setThumbnail(message.author.avatarURL)
                .setFooter('This was Created By Spiky - RageGrumpy')
                .setTimestamp()
            try {
                message.author.sendEmbed(testEmbed);
            } catch {
                message.reply(`Sorry <@${message.author.username}> I cannot message you, make sure your dms are turned on to public.`)
            }
        }
})

bot.login(token);