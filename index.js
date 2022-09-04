const { client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

client.once('ready', () => {
    console.log('Client online.');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') 
        await interaction.reply(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    else if (commandName === 'server')
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
    else if (commandName === 'user')
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
});

//left off at deleting commands.

client.login(token);