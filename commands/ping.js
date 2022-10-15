const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with current ping.'),
    async execute(interaction) {
        //await interaction.reply(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
        const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
        await interaction.editReply(`:ping_pong: Pong!\n:stopwatch: Uptime: ${Math.round(interaction.client.uptime / 60000)} minutes\n:sparkling_heart: Websocket heartbeat: ${interaction.client.ws.ping}ms.\n:round_pushpin: Roundtrip Latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`)
    },
}