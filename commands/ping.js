const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with current ping.'),
    async execute(interaction) {
<<<<<<< HEAD
        //await interaction.reply(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
        await interaction.reply('Pong!');
=======
        await interaction.reply(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
>>>>>>> 015ca2f4e788d904d188c0e8dfc5a01393f0caf7
    },
}